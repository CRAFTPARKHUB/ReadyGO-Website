import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/**

 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth 100%
 * @framerSupportedLayoutHeight 100%
 */

export default function AutoYearCopyright(props) {
    const {
        companyName,
        rightsText,
        showSymbol,
        showTrademark,
        trademarkType,
        yearPlacement,
        font,
        color,
        fontSize,
    } = props

    const currentYear = new Date().getFullYear()

    const symbol = showSymbol === "yes" ? "©" : ""
    const trademarkOptionActive = showTrademark === "yes"
    const trademarkSymbol = trademarkOptionActive
        ? trademarkType === "trademark"
            ? "™"
            : "®"
        : ""

    let finalCompanyName = companyName.trim()
    let finalRightsText = rightsText.trim()

    let dotAfterCompanyName = ""
    if (yearPlacement === "beforeCompanyName") {
        finalCompanyName = `${currentYear} ${finalCompanyName}`
    } else if (yearPlacement === "afterCompanyName" && finalCompanyName) {
        finalCompanyName += ` ${currentYear}`
    } else if (yearPlacement === "beforeRightsText" && finalRightsText) {
        finalRightsText = `${currentYear}. ${finalRightsText}`
    } else if (yearPlacement === "afterRightsText" && finalRightsText) {
        finalRightsText += ` ${currentYear}`
        dotAfterCompanyName =
            !trademarkOptionActive && finalCompanyName && finalRightsText
                ? "."
                : ""
    } else if (!finalCompanyName && !finalRightsText) {
        finalCompanyName = `${currentYear}`
    }

    finalCompanyName += trademarkSymbol ? `${trademarkSymbol}` : ""

    let displayText = symbol ? `${symbol} ` : ""
    displayText += finalCompanyName
        ? `${finalCompanyName}${dotAfterCompanyName}`
        : ""
    if (finalCompanyName && finalRightsText) displayText += " "
    displayText += finalRightsText

    const textStyle = {
        fontSize: `${fontSize}px`,
        color: color,
        ...font,
    }

    return <div style={textStyle}>{displayText.trim()}</div>
}

AutoYearCopyright.defaultProps = {
    companyName: "Company Name",
    rightsText: "All rights reserved",
    showSymbol: "yes",
    showTrademark: "no",
    trademarkType: "trademark",
    yearPlacement: "afterRightsText",
    color: "#999999",
    fontSize: 18, // Default fontSize
    font: {
        family: "Inter",
    },
}

addPropertyControls(AutoYearCopyright, {
    font: {
        type: ControlType.Font,
        title: "Font",
        defaultValue: "Inter",
        controls: "extended",
    },
    color: {
        type: ControlType.Color,
        title: "Font Color",
        defaultValue: "#999999",
    },
    companyName: {
        type: ControlType.String,
        title: "Company Name",
        defaultValue: "Company Name",
    },
    rightsText: {
        type: ControlType.String,
        title: "Rights Text",
        defaultValue: "All rights reserved",
    },
    showSymbol: {
        type: ControlType.SegmentedEnum,
        title: "Symbol",
        options: ["yes", "no"],
        optionTitles: ["Yes", "No"],
        defaultValue: "yes",
    },
    showTrademark: {
        type: ControlType.SegmentedEnum,
        title: "Trademark",
        options: ["yes", "no"],
        optionTitles: ["Yes", "No"],
        defaultValue: "no",
    },
    trademarkType: {
        type: ControlType.Enum,
        options: ["trademark", "registered"],
        optionTitles: ["Trademark", "Registered"],
        defaultValue: "trademark",
        hidden: ({ showTrademark }) => showTrademark !== "yes",
    },
    yearPlacement: {
        type: ControlType.Enum,
        options: [
            "beforeCompanyName",
            "afterCompanyName",
            "beforeRightsText",
            "afterRightsText",
        ],
        optionTitles: [
            "Before Company",
            "After Company",
            "Before Rights",
            "After Rights",
        ],
        defaultValue: "afterRightsText",
        displaySegmentedControl: true,
        segmentedControlDirection: "vertical",
    },
})

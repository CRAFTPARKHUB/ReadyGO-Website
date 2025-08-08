let t = (t, e) => async () => {
        let r = await t();
        return r[e];
    },
    e = () =>
    import ("./PjI4hODFE-4.js"),
    r = [t(e, "richText"), t(e, "richText1"), t(e, "richText2"), t(e, "richText3")];
export async function resolveRichTextCz(t) {
    let e = r[t];
    if (e) return await e();
}
export const __FramerMetadata__ = {
    "exports": {
        "resolveRichTextCz": {
            "type": "function",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
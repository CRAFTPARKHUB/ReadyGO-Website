var le=Object.defineProperty;var fe=(e,t,o)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var P=(e,t,o)=>fe(e,typeof t!="symbol"?t+"":t,o);var A="__framer_hide_editorbar_until",M="__framer_force_showing_editorbar_since",R="2147483647";var Z=new Date("2025-08-06T17:00:05.000Z");var D=12,X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",B="__framer-editorbar-container",w="__framer-editorbar-label",k="__framer-editorbar-button",C="__framer-editorbar-loading-spinner",F="__framer-editorbar-button-tooltip-visible",pe=`
#${B} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    z-index: calc(${R});
}

#${w} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${k} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${w}.${F} {
    opacity: 1;
}

#${w}, #${k} {
    backdrop-filter: blur(10px);
    background-color: rgba(34, 34, 34, 0.8);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
    color: #fff;
}

#${C} {
    width: ${D}px;
    height: ${D}px;
    -webkit-mask: url(${X});
    mask: url(${X});
    -webkit-mask-size: ${D}px;
    mask-size: ${D}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,U=document.createElement("style");U.type="text/css";U.innerHTML=pe;document.head.appendChild(U);var W;(n=>(n.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,n.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),n.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),n.isSafari=n.isWebKit&&!n.isChrome,n.isSafariDesktop=n.isSafari&&!n.isTouch,n.isWindows=/Win/u.test(navigator.platform),n.isMacOS=/Mac/u.test(navigator.platform),n.isAndroidWebView=n.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),n.isIosWebView=n.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),n.isWebView=n.isAndroidWebView||n.isIosWebView))(W||={});var S=class extends Promise{constructor(){let o,d;super((r,s)=>{o=r,d=s});P(this,"_state","initial");P(this,"resolve");P(this,"reject");this.resolve=r=>{this._state="fulfilled",o(r)},this.reject=r=>{this._state="rejected",d(r)}}get state(){return this._state}pending(){return this._state="pending",this}isResolved(){return this._state==="fulfilled"||this._state==="rejected"}};S.prototype.constructor=Promise;var G="framer_",g="editSite";function I(e){let t=window.__framer_editorBarDependencies;if(!t)throw new Error("Dependencies not found");if(t.__version<1||t.__version>2)throw new Error("Unsupported version");let o=t[e];if(!o)throw new Error("Dependency not found");return o}var{createElement:K,memo:$,useCallback:J,useEffect:m,useRef:O,useState:l}=I("react");var{createPortal:H}=I("react-dom");function f(e,t,o){let{children:d,...r}=t??{};return K(e,o?{...r,key:o}:r,d)}var V=f;function q({isLoading:e,isEditorVisible:t,onClick:o}){let[d,r]=l(!1),[s,u]=l(t);return s!==t&&(u(t),t||r(!1)),V("div",{id:B,children:[f("span",{"aria-label":"Edit Framer Content",id:w,className:d?F:void 0,children:"Edit Content"}),f("button",{type:"button","aria-labelledby":w,id:k,onClick:o,onMouseMove:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:e?f(ge,{}):f(me,{})})]})}function me(){return V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"none",children:[f("path",{d:"M8.75 2.25a1.77 1.77 0 0 1 2.5 0h0c.69.69.69 1.81 0 2.5l-7 7h-2.5v-2.5Z",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),f("path",{d:"M8 11.75h3.75",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function ge(){return f("div",{id:C})}var T="data-original-href",Q="link[rel*='icon']",Ee=`${Q}:not([${T}])`,he="https://framerusercontent.com/sites/icons/writing-hand-favicon.png";function ee(){document.querySelectorAll(Ee).forEach(e=>{e instanceof HTMLLinkElement&&(e.setAttribute(T,e.href),e.setAttribute("href",he))})}function te(){document.querySelectorAll(Q).forEach(e=>{e instanceof HTMLLinkElement&&e.getAttribute(T)&&(e.setAttribute("href",e.getAttribute(T)??""),e.removeAttribute(T))})}function ne(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function oe(e,t){let[o,d]=l(!1);return m(()=>{let r=s=>{if(s.origin!==e||!ne(s.data))return;let{apiVersion:u,type:a,component:i}=s.data;u===1&&a==="initializeComponent"&&i===t&&d(!0)};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}},[e,t]),o}var{useCurrentRoute:re,useLocaleInfo:ie,useRouter:se}=I("framer");function ae(){let e=re(),t=ie()?.activeLocale??void 0,{collectionUtils:o}=se(),[d,r]=l(),s=e?.id,u=e?.collectionId,a=e?.pathVariables;return m(()=>{if(!s)return;let i=!1;return _e(t,u,o,a).then(c=>{i||r({collectionItemNodeId:c,webPageNodeId:s})}).catch(()=>{i||r({collectionItemNodeId:void 0,webPageNodeId:s})}),()=>{i=!0}},[t,u,o,a,s]),d}async function _e(e,t,o,d){if(!t)return;let r=Object.values(d??{}),[s]=r;if(r.length!==1||!s||typeof s!="string")return;let u=o?.[t];return(await u?.())?.getRecordIdBySlug(s,e)}function ue(e,t){let o=ae(),d=oe(t,"OnPageActiveRouteStore");m(()=>{d&&e.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:o},t)},[e,o,t,d])}var Ie=Date.now();function ce(){let e=localStorage.getItem(A);if(!e)return null;let t=Number(e);return Number.isNaN(t)?(localStorage.removeItem(A),null):t}function be(){let e=ce();if(!e)return!1;let t=Date.now();return t>=e||t>=Z.getTime()?(localStorage.removeItem(A),!1):!0}function ye(){return window.self!==window.top}var xe=`
#__framer-editorbar {
    /* https://sergeyski.com/css-color-scheme-and-iframes-lessons-learned-from-disqus-background-bug */
    color-scheme: light dark;
    overflow: hidden;
    position: fixed;
    border: none;
    z-index: calc(${R});
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    touch-action: manipulation;
}

@supports (height: 100dvh) {
    #__framer-editorbar {
        height: 100dvh;
    }
}

#__framer-editorbar.old-entrypoint {
    width: calc(100% - 10px);
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_visually_hidden {
    --padding-right: 0px;
    clip-path: circle(1px at calc(100% - 20px) calc(50% + 4px));
    z-index: calc(${R} - 1);
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}
`,z=document.createElement("style");z.type="text/css";z.innerHTML=xe;document.head.appendChild(z);var b=new URL(import.meta.url).origin;function Ae(){if(localStorage.getItem(M)!==null)return de(),!0;let e=new URL(window.location.href),t=e.searchParams.has(g),o=e.searchParams.has(g.toLowerCase());if(!t&&!o)return!1;let d=t?g:g.toLowerCase(),r=e.searchParams.get(d);if(r!==""&&r!==null)return!1;for(let s of e.searchParams.keys())if(s!==g&&s!==g.toLowerCase()&&!s.startsWith(G))return!1;return de(),localStorage.setItem(M,new Date().toString()),!0}function de(){let e=new URL(window.location.href);e.searchParams.has(g)&&(e.searchParams.delete(g),e.searchParams.delete(g.toLowerCase()),window.history.replaceState({},"",e.toString()))}var Re=Ae();function j(){return null}function Se(){let e=document.getElementsByClassName("lenis-scrolling");for(let t of e)t.classList.remove("lenis-scrolling")}function ht(){if(be())return console.log("[Framer Editor Bar] Unavailable because hidden until",new Date(ce()??0)),j;if(ye())return console.log("[Framer Editor Bar] Unavailable because site is embedded in iframe"),j;if(W.isWebView)return console.log("[Framer Editor Bar] Unavailable because running in WebView"),j;function e(){let[u,a]=l(!1),i=J(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{a(!0)}):setTimeout(()=>{a(!0)},300)},[]);return m(()=>{document.readyState==="complete"?i():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&i()},{once:!0})},[i]),u}function t(u){let[a,i]=l({className:"status_hidden"});return m(()=>{if(u)return;function c(n){n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&(n.data.type==="beginSizeMeasuring"&&i({className:"status_measuring"}),n.data.type==="updateStyle"&&i({style:{clipPath:n.data.clipPath}}),n.data.type==="editorBarHidden"&&(i({className:"status_hidden"}),window.removeEventListener("message",c)),n.data.type==="enterFullscreen"&&i({className:"fullscreen"}))}return window.addEventListener("message",c),()=>{window.removeEventListener("message",c)}},[]),a}function o(u){let[a,i]=l(!1);return m(()=>{if(a||u)return;function c(n){if(n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&n.data.type==="editorBarHidden"&&!a){let h=Date.now()+6048e5;localStorage.setItem(A,h.toString()),i(!0),window.removeEventListener("message",c)}}return window.addEventListener("message",c),()=>{window.removeEventListener("message",c)}},[]),a}function d(u,a){let[i,c]=l(!1),[n,E]=l(!0),[h,y]=l(!1),[v,x]=l("hidden"),_=O();return _.current??=new S,m(()=>{if(!a)return;function N(p){p.origin===b&&typeof p.data=="object"&&p.data?.apiVersion===1&&(p.data.type==="accessResult"&&p.data.data.status==="success"?c(!0):p.data.type==="exitFullscreen"?(document.body.style.overflow="auto",window.scrollTo({behavior:"instant",top:p.data.position?.top??0}),x("hidden")):p.data.type==="sandboxReadyState"&&p.data.data.status==="ready"&&(E(!1),setTimeout(()=>{_.current?.resolve()},50)))}return window.addEventListener("message",N),()=>{window.removeEventListener("message",N)}},[c,E,x]),{showEntrypointButton:i,entrypointButtonLoading:h?n:!1,iframeState:v,onEditContent:()=>{u.current?.contentWindow?.postMessage({apiVersion:1,type:"enterOnPageEditing"},b),x("fullscreen"),y(!0),_.current?.then(()=>{u.current?.contentWindow?.postMessage({apiVersion:1,type:"showCanvas",position:{top:window.scrollY}},b),setTimeout(()=>{document.body.style.overflow="hidden"},300),y(!1)}),Se()}}}function r({framerSiteId:u,features:a,iframeRef:i,measuringProps:c}){ue(i,b);let n=new URL(import.meta.url),E=n.pathname.lastIndexOf("/");if(E<0)throw new Error("Invalid pathname");let h=a?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return n.pathname=n.pathname.slice(0,E),n.searchParams.set("framerSiteId",u),n.searchParams.set("source",h),n.searchParams.set("features",JSON.stringify(a||{})),n.searchParams.set("loadStart",Ie.toString()),Re&&n.searchParams.set("forceShow","true"),f("iframe",{...c,id:"__framer-editorbar",ref:i,src:n.href,"aria-hidden":"true",tabIndex:-1})}function s({framerSiteId:u,features:a}){let i={...a,editorBarOnPageEditing:!0},c=i?.editorBarOnPageEditing||!1,n=O(null),E=O(document.title),h=e(),y=t(c);o(c);let{showEntrypointButton:v,entrypointButtonLoading:x,iframeState:_,onEditContent:N}=d(n,c),p=_==="fullscreen";if(m(()=>{p?(document.title="Editing Page...",ee()):(document.title=E.current,te())},[p]),!h)return null;let L;_==="fullscreen"?L="fullscreen":v?L="status_visually_hidden":L="status_hidden";let Y=f(r,{framerSiteId:u,features:i,iframeRef:n,measuringProps:c?{className:L}:{...y,className:`${y.className??""} old-entrypoint`}});return c?H([v?f(q,{isLoading:x,onClick:N,isEditorVisible:_==="fullscreen"}):null,Y],document.body):H(Y,document.body)}return $(s)}export{ht as createEditorBar};
//# sourceMappingURL=init.mjs.map

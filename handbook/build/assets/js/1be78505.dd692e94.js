"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9514,4972],{4326:function(e,t,n){n.r(t),n.d(t,{default:function(){return Pe}});var a=n(7294),r=n(4334),l=n(1944),o=n(5281),i=n(3320),c=n(3438),s=n(4477),u=n(1116),d=n(5822),m=n(5999),p=n(2466),b=n(5936);var f="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,p.Ct)(),c=i.startScroll,s=i.cancelScroll;return(0,p.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,b.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,t&&h),type:"button",onClick:n})}var E=n(6775),g=n(7524),k=n(6668),y=n(4996),_=n(3117);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var x="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(C,{className:I}))}var Z=n(9689),N=n(102),w=n(4700),T=Symbol("EmptyContext"),B=a.createContext(T);function F(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(B.Provider,{value:o},t)}var L=n(6043),z=n(8596),A=n(9960),M=n(2389),P=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=e.index,u=(0,N.Z)(e,P),d=t.items,m=t.label,p=t.collapsible,b=t.className,f=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,v=function(e){var t=(0,M.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),g=(0,z.Mg)(f,l),y=(0,L.u)({initialState:function(){return!!p&&(!E&&t.collapsed)}}),C=y.collapsed,x=y.setCollapsed,I=function(){var e=(0,a.useContext)(B);if(e===T)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=I.expandedItem,Z=I.setExpandedItem,F=function(e){void 0===e&&(e=!C),Z(e?null:s),x(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,w.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:C,updateCollapsed:F}),(0,a.useEffect)((function(){p&&null!=S&&S!==s&&h&&x(!0)}),[p,S,s,x,h]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":E}),onClick:p?function(e){null==n||n(t),f?F(!1):(e.preventDefault(),F())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":p?!C:void 0,href:p?null!=v?v:"#":v},u),m),f&&p&&a.createElement(W,{categoryLabel:m,onClick:function(e){e.preventDefault(),F()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(X,{items:d,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:i+1})))}var R=n(3919),D=n(9471),j="menuExternalLink_NmtK",U=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=(e.index,(0,N.Z)(e,U)),u=t.href,d=t.label,m=t.className,p=t.autoAddBaseUrl,b=(0,c._F)(t,l),f=(0,R.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:d},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",!f&&j,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:u},f&&{onClick:n?function(){return n(t)}:void 0},s),d,!f&&a.createElement(D.Z,null)))}var G="menuHtmlItem_M9Kj";function K(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[G,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}var Y=["item"];function q(e){var t=e.item,n=(0,N.Z)(e,Y);switch(t.type){case"category":return a.createElement(H,(0,_.Z)({item:t},n));case"html":return a.createElement(K,(0,_.Z)({item:t},n));default:return a.createElement(V,(0,_.Z)({item:t},n))}}var O=["items"];function J(e){var t=e.items,n=(0,N.Z)(e,O);return a.createElement(F,null,t.map((function(e,t){return a.createElement(q,(0,_.Z)({key:t,item:e,index:t},n))})))}var X=(0,a.memo)(J),Q="menu_SIkG",$="menuWithAnnouncementBar_GW3s";function ee(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,Z.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,p.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Q,i&&$,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}var te=n(1327),ne=n(6010),ae=[{title:"CRMEB \u4e13\u6ce8\u5f00\u6e90\u7535\u5546\u7cfb\u7edf\u7814\u53d1",picture:"img/crmeb.jpg",url:"http://github.crmeb.net/u/furion",top:!0},{title:"CoreShop \u79fb\u52a8\u7aef/\u5c0f\u7a0b\u5e8f\u5546\u57ce\u7cfb\u7edf",picture:"img/coreshop_ad.png",url:"https://www.coreshop.cn?from=furion",top:!1},{title:"FirstUI \u8de8\u5e73\u53f0\u79fb\u52a8\u7aef\u7ec4\u4ef6\u5e93",picture:"img/firstui.jpeg",url:"https://www.firstui.cn?from=furion",top:!1},{title:"JNPF \u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u5668\u7684 .NET \u6846\u67b6",picture:"img/jnpfsoft.png",url:"https://dotnet.jnpfsoft.com/login?from=furion",top:!1},{title:"Layui-Vue \u5f00\u6e90\u524d\u7aef UI \u6846\u67b6",picture:"img/layui.png",url:"http://www.layui-vue.com?from=furion",top:!1}],re="sidebar_mhZE",le="sidebarWithHideableNavbar__6UL",oe="sidebarHidden__LRd",ie="sidebarLogo_F_0z";function ce(e){var t=e.path,n=e.sidebar,r=e.onCollapse,l=e.isHidden,o=(0,k.L)(),i=o.navbar.hideOnScroll,c=o.hideableSidebar;return a.createElement("div",{className:(0,ne.Z)(re,i&&le,l&&oe)},i&&a.createElement(te.Z,{tabIndex:-1,className:ie}),a.createElement(se,null),a.createElement(ee,{path:t,sidebar:n}),c&&a.createElement(S,{onClick:r}))}function se(){var e=(0,a.useState)(!0),t=e[0],n=e[1];return a.createElement("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"}},ae.map((function(e,n){var r=e.picture,l=e.url,o=e.title,i=e.top;return t?a.createElement(ue,{key:l,title:o,url:l,picture:r,top:i,last:ae.length-1==n}):a.createElement(de,{key:l,title:o,url:l,picture:r,i:n,top:i,last:ae.length-1==n})})),a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"}},a.createElement("span",{style:{color:"#999",fontSize:13,fontWeight:"bold",cursor:"pointer",userSelect:"none"},onClick:function(){return n((function(e){return!e}))}},t?a.createElement(a.Fragment,null,a.createElement("b",{style:{color:"#723cff"}},"\u5f00"),"|\u5173"):a.createElement(a.Fragment,null,"\u5f00|",a.createElement("b",{style:{color:"#723cff"}},"\u5173"))),a.createElement("a",{href:"mailto:monksoul@outlook.com",style:{color:"#723cff",fontSize:13,fontWeight:"bold"},title:"monksoul@outlook.com"},"\ud83d\udc96\u6210\u4e3a\u8d5e\u52a9\u5546")))}function ue(e){var t=e.picture,n=e.url,r=e.last,l=e.title,o=e.top;return a.createElement("a",{href:n,target:"_blank",title:l,style:{display:"block",marginBottom:r?null:"0.5em",position:"relative",alignItems:"center",boxSizing:"border-box",border:o?"2px solid rgb(255, 176, 46)":void 0}},a.createElement("img",{src:(0,y.Z)(t),style:{display:"block",width:"100%"}}),o&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"),a.createElement("span",{style:{position:"absolute",display:"block",right:0,bottom:0,zIndex:10,fontSize:12,backgroundColor:"rgba(0,0,0,0.8)",padding:"0 5px"}},"\u8d5e\u52a9\u5546\u5e7f\u544a"))}function de(e){var t,n=e.picture,r=e.url,l=e.last,o=e.title,i=e.i,c=e.top;return c?a.createElement(ue,{key:r,title:o,url:r,picture:n,top:c,last:l}):a.createElement("a",{href:r,target:"_blank",title:o,style:(t={display:"inline-block",position:"relative",width:138,marginRight:i%2==0?0:8},t.position="relative",t.boxSizing="border-box",t.border=c?"2px solid rgb(255, 176, 46)":void 0,t)},a.createElement("img",{src:(0,y.Z)(n),style:{display:"block",width:138}}),c&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"))}var me=a.memo(ce),pe=n(3102),be=n(2961),fe=function(e){var t=e.sidebar,n=e.path,r=(0,be.e)();return a.createElement(a.Fragment,null,a.createElement(ve,null),a.createElement("ul",{className:(0,ne.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1})))};function he(e){return a.createElement(pe.Zo,{component:fe,props:e})}function ve(){var e=(0,a.useState)(!0),t=e[0],n=e[1];return a.createElement("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"}},ae.map((function(e,n){var r=e.picture,l=e.url,o=e.title,i=e.top;return t?a.createElement(Ee,{key:l,title:o,url:l,picture:r,top:i,last:ae.length-1==n}):a.createElement(ge,{key:l,title:o,url:l,picture:r,i:n,top:i,last:ae.length-1==n})})),a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"}},a.createElement("span",{style:{color:"#999",fontSize:13,fontWeight:"bold",cursor:"pointer",userSelect:"none"},onClick:function(){return n((function(e){return!e}))}},t?a.createElement(a.Fragment,null,a.createElement("b",{style:{color:"#723cff"}},"\u5f00"),"|\u5173"):a.createElement(a.Fragment,null,"\u5f00|",a.createElement("b",{style:{color:"#723cff"}},"\u5173"))),a.createElement("a",{href:"mailto:monksoul@outlook.com",style:{color:"#723cff",fontSize:13,fontWeight:"bold"},title:"monksoul@outlook.com"},"\ud83d\udc96\u6210\u4e3a\u8d5e\u52a9\u5546")))}function Ee(e){var t=e.picture,n=e.url,r=e.last,l=e.title,o=e.top;return a.createElement("a",{href:n,target:"_blank",title:l,style:{display:"block",marginBottom:r?null:"0.5em",position:"relative",alignItems:"center",boxSizing:"border-box",border:o?"2px solid rgb(255, 176, 46)":void 0}},a.createElement("img",{src:(0,y.Z)(t),style:{display:"block",width:"100%"}}),o&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"),a.createElement("span",{style:{position:"absolute",display:"block",right:0,bottom:0,zIndex:10,fontSize:12,backgroundColor:"rgba(0,0,0,0.8)",padding:"0 5px"}},"\u8d5e\u52a9\u5546\u5e7f\u544a"))}function ge(e){var t,n=e.picture,r=e.url,l=e.last,o=e.title,i=e.i,c=e.top;return c?a.createElement(Ee,{key:r,title:o,url:r,picture:n,top:c,last:l}):a.createElement("a",{href:r,target:"_blank",title:o,style:(t={display:"inline-block",position:"relative",width:138,marginRight:i%2==0?0:8},t.position="relative",t.boxSizing="border-box",t.border=c?"2px solid rgb(255, 176, 46)":void 0,t)},a.createElement("img",{src:(0,y.Z)(n),style:{display:"block",width:138}}),c&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"))}var ke=a.memo(he);function ye(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(me,e),r&&a.createElement(ke,e))}var _e="expandButton_m80_",Ce="expandButtonIcon_BlDH";function xe(e){var t=e.toggleSidebar;return a.createElement("div",{className:_e,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:Ce}))}var Ie="docSidebarContainer_b6E3",Se="docSidebarContainerHidden_b3ry";function Ze(e){var t,n=e.children,r=(0,u.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function Ne(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,a.useState)(!1),s=c[0],u=c[1],d=(0,a.useCallback)((function(){s&&u(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,Ie,n&&Se),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ie)&&n&&u(!0)}},a.createElement(Ze,null,a.createElement(ye,{sidebar:t,path:i,onCollapse:d,isHidden:s})),s&&a.createElement(xe,{toggleSidebar:d}))}var we={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Te(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,u.V)();return a.createElement("main",{className:(0,r.Z)(we.docMainContainer,(t||!l)&&we.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",we.docItemWrapper,t&&we.docItemWrapperEnhanced)},n))}var Be="docPage__5DB",Fe="docsWrapper_BCFX";function Le(e){var t=e.children,n=(0,u.V)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(d.Z,{wrapperClassName:Fe},a.createElement(v,null),a.createElement("div",{className:Be},n&&a.createElement(Ne,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Te,{hiddenSidebarContainer:l},t)))}var ze=n(4972),Ae=n(197);function Me(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Ae.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Pe(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(ze.default,null);var i=n.docElement,d=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Me,e),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(u.b,{name:d,items:m},a.createElement(Le,null,i)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),r=n(5999),l=n(1944),o=n(5822);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return o}});var a=n(7294),r=n(4700),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);
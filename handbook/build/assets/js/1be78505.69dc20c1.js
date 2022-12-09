"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9514,4972],{4326:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var a=n(7294),r=n(6010),l=n(1944),i=n(5281),o=n(3320),c=n(3438),s=n(4477),u=n(1116),d=n(9338),m=n(5999),p=n(2466),b=n(5936);var f="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function g(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],i=(0,a.useRef)(!1),o=(0,p.Ct)(),c=o.startScroll,s=o.cancelScroll;return(0,p.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(i.current?i.current=!1:a>=r?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,b.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,f,t&&h),type:"button",onClick:n})}var v=n(6775),E=n(7524),k=n(6668),y=n(4996),_=n(3117);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var x="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(C,{className:I}))}var w=n(9689),Z=n(102),N=n(4700),T=Symbol("EmptyContext"),z=a.createContext(T);function B(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(z.Provider,{value:i},t)}var L=n(6043),F=n(8596),M=n(9960),A=n(2389),P=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,s=e.index,u=(0,Z.Z)(e,P),d=t.items,m=t.label,p=t.collapsible,b=t.className,f=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,g=function(e){var t=(0,A.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),v=(0,c._F)(t,l),E=(0,F.Mg)(f,l),y=(0,L.u)({initialState:function(){return!!p&&(!v&&t.collapsed)}}),C=y.collapsed,x=y.setCollapsed,I=function(){var e=(0,a.useContext)(z);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=I.expandedItem,w=I.setExpandedItem,B=function(e){void 0===e&&(e=!C),w(e?null:s),x(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,N.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:v,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((function(){p&&null!=S&&S!==s&&h&&x(!0)}),[p,S,s,x,h]),a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},a.createElement(M.Z,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":v}),onClick:p?function(e){null==n||n(t),f?B(!1):(e.preventDefault(),B())}:function(){null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":p?!C:void 0,href:p?null!=g?g:"#":g},u),m),f&&p&&a.createElement(W,{categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(J,{items:d,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:o+1})))}var R=n(3919),D=n(9471),j="menuExternalLink_NmtK",U=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,s=(e.index,(0,Z.Z)(e,U)),u=t.href,d=t.label,m=t.className,p=t.autoAddBaseUrl,b=(0,c._F)(t,l),f=(0,R.Z)(u);return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},a.createElement(M.Z,(0,_.Z)({className:(0,r.Z)("menu__link",!f&&j,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:u},f&&{onClick:n?function(){return n(t)}:void 0},s),d,!f&&a.createElement(D.Z,null)))}var G="menuHtmlItem_M9Kj";function K(e){var t=e.item,n=e.level,l=e.index,o=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[G,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:o}})}var O=["item"];function Y(e){var t=e.item,n=(0,Z.Z)(e,O);switch(t.type){case"category":return a.createElement(H,(0,_.Z)({item:t},n));case"html":return a.createElement(K,(0,_.Z)({item:t},n));default:return a.createElement(V,(0,_.Z)({item:t},n))}}var q=["items"];function X(e){var t=e.items,n=(0,Z.Z)(e,q);return a.createElement(B,null,t.map((function(e,t){return a.createElement(Y,(0,_.Z)({key:t,item:e,index:t},n))})))}var J=(0,a.memo)(X),Q="menu_SIkG",$="menuWithAnnouncementBar_GW3s";function ee(e){var t=e.path,n=e.sidebar,l=e.className,o=function(){var e=(0,w.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,p.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Q,o&&$,l)},a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:n,activePath:t,level:1})))}var te=n(1327),ne=[{title:"CRMEB \u4e13\u6ce8\u5f00\u6e90\u7535\u5546\u7cfb\u7edf\u7814\u53d1",picture:"img/crmeb.jpg",url:"http://github.crmeb.net/u/furion",top:!0},{title:"CoreShop \u79fb\u52a8\u7aef/\u5c0f\u7a0b\u5e8f\u5546\u57ce\u7cfb\u7edf",picture:"img/coreshop.gif",url:"https://www.coreshop.cn?from=furion",top:!1},{title:"FirstUI \u8de8\u5e73\u53f0\u79fb\u52a8\u7aef\u7ec4\u4ef6\u5e93",picture:"img/firstui.jpeg",url:"https://www.firstui.cn?from=furion",top:!1},{title:"Layui-Vue \u5f00\u6e90\u524d\u7aef UI \u6846\u67b6",picture:"img/layui.png",url:"http://www.layui-vue.com?from=furion",top:!1},{title:"\u5de5\u4f5c\u670d\u5b9a\u5236T\u6064  \u4e00\u4ef6\u8d77\u8ba2\u6765\u56fe\u5b9a\u505a",picture:"img/weishen.jpg",url:"https://eshan.tmall.com?from=furion",top:!1},{title:"ProcessOn\uff1a\u5728\u7ebf\u6d41\u7a0b\u56fe\u601d\u7ef4\u5bfc\u56fe\u5de5\u5177",picture:"img/processon1.png",url:"https://www.processon.com?from=furion"}],ae="sidebar_mhZE",re="sidebarWithHideableNavbar__6UL",le="sidebarHidden__LRd",ie="sidebarLogo_F_0z";function oe(e){var t,n=e.path,l=e.sidebar,i=e.onCollapse,o=e.isHidden,c=(0,k.L)(),s=c.navbar.hideOnScroll,u=c.hideableSidebar,d=(0,a.useState)(!0),m=d[0],p=d[1];return a.createElement("div",{className:(0,r.Z)(ae,s&&re,o&&le)},s&&a.createElement(te.Z,{tabIndex:-1,className:ie}),m&&a.createElement(a.Fragment,null,a.createElement(ce,null),a.createElement("span",{style:(t={margin:"0 auto",display:"inline-block",position:"relative",top:5,marginTop:-28,cursor:"pointer",borderRadius:"50%",width:28,height:28,minWidth:28,minHeight:28},t.display="flex",t.alignItems="center",t.justifyContent="center",t.boxSizing="border-box",t.userSelect="none",t.fontSize=12,t.backgroundColor="#3fbbfe",t.color="#fff",t.fontWeight="bold",t),onClick:function(){return p((function(e){return!e}))}},"\u6536")),a.createElement(ee,{path:n,sidebar:l}),u&&a.createElement(S,{onClick:i}))}function ce(){var e=function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,ne.length-1),t=ne[e];return a.createElement("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"}},a.createElement(se,{title:t.title,url:t.url,picture:t.picture,top:!0,last:!1}),ne.filter((function(t,n){return n!==e})).map((function(e,t){var n=e.picture,r=e.url,l=e.title;return a.createElement(ue,{key:r,title:l,url:r,picture:n,i:t})})),a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"}},a.createElement("span",{style:{fontSize:12,color:"#ccc"}},"\u7f6e\u9876\u5e7f\u544a\u91c7\u7528\u968f\u673a\u65b9\u5f0f"),a.createElement("a",{href:"/docs/donate",style:{color:"#723cff",fontSize:13,fontWeight:"bold"},title:"monksoul@outlook.com"},"\u6210\u4e3a\u8d5e\u52a9\u5546")))}function se(e){var t=e.picture,n=e.url,r=e.last,l=e.title,i=e.top;return a.createElement("a",{href:n,target:"_blank",title:l,style:{display:"block",marginBottom:r?null:"0.5em",position:"relative",alignItems:"center",boxSizing:"border-box",border:i?"2px solid rgb(255, 176, 46)":void 0}},a.createElement("img",{src:(0,y.Z)(t),style:{display:"block",width:"100%"},loading:"lazy"}),i&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"),a.createElement("span",{style:{position:"absolute",display:"block",right:0,bottom:0,zIndex:10,fontSize:12,backgroundColor:"rgba(0,0,0,0.8)",padding:"0 5px"}},"\u8d5e\u52a9\u5546"))}function ue(e){var t,n=e.picture,r=e.url,l=e.title,i=e.i;return a.createElement("a",{href:r,target:"_blank",title:l,style:(t={display:"inline-block",position:"relative",width:"48.5%",marginRight:i%2!=0?0:8},t.position="relative",t.boxSizing="border-box",t)},a.createElement("img",{src:(0,y.Z)(n),style:{display:"block",width:"100%"},loading:"lazy"}))}var de=a.memo(oe),me=n(3102),pe=n(2961),be=function(e){var t,n=e.sidebar,l=e.path,o=(0,pe.e)(),c=(0,a.useState)(!0),s=c[0],u=c[1];return a.createElement(a.Fragment,null,s&&a.createElement(a.Fragment,null,a.createElement(he,null),a.createElement("span",{style:(t={margin:"0 auto",display:"inline-block",position:"relative",top:5,marginTop:-28,cursor:"pointer",borderRadius:"50%",width:28,height:28,minWidth:28,minHeight:28},t.display="flex",t.alignItems="center",t.justifyContent="center",t.boxSizing="border-box",t.userSelect="none",t.fontSize=12,t.backgroundColor="#3fbbfe",t.color="#fff",t.fontWeight="bold",t),onClick:function(){return u((function(e){return!e}))}},"\u6536")),a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:n,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1})))};function fe(e){return a.createElement(me.Zo,{component:be,props:e})}function he(){var e=function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,ne.length-1),t=ne[e];return a.createElement("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"}},a.createElement(ge,{title:t.title,url:t.url,picture:t.picture,top:!0,last:!1}),ne.filter((function(t,n){return n!==e})).map((function(e,t){var n=e.picture,r=e.url,l=e.title;return a.createElement(ve,{key:r,title:l,url:r,picture:n,i:t})})),a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"}},a.createElement("span",{style:{fontSize:12,color:"#ccc"}},"\u7f6e\u9876\u5e7f\u544a\u91c7\u7528\u968f\u673a\u65b9\u5f0f"),a.createElement("a",{href:"/docs/donate",style:{color:"#723cff",fontSize:13,fontWeight:"bold"},title:"monksoul@outlook.com"},"\u6210\u4e3a\u8d5e\u52a9\u5546")))}function ge(e){var t=e.picture,n=e.url,r=e.last,l=e.title,i=e.top;return a.createElement("a",{href:n,target:"_blank",title:l,style:{display:"block",marginBottom:r?null:"0.5em",position:"relative",alignItems:"center",boxSizing:"border-box",border:i?"2px solid rgb(255, 176, 46)":void 0}},a.createElement("img",{src:(0,y.Z)(t),style:{display:"block",width:"100%"},loading:"lazy"}),i&&a.createElement("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8}},"\ud83d\udc51"),a.createElement("span",{style:{position:"absolute",display:"block",right:0,bottom:0,zIndex:10,fontSize:12,backgroundColor:"rgba(0,0,0,0.8)",padding:"0 5px"}},"\u8d5e\u52a9\u5546"))}function ve(e){var t,n=e.picture,r=e.url,l=e.title,i=e.i;return a.createElement("a",{href:r,target:"_blank",title:l,style:(t={display:"inline-block",position:"relative",width:"48.5%",marginRight:i%2!=0?0:8},t.position="relative",t.boxSizing="border-box",t)},a.createElement("img",{src:(0,y.Z)(n),style:{display:"block",width:"100%"},loading:"lazy"}))}var Ee=a.memo(fe);function ke(e){var t=(0,E.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(de,e),r&&a.createElement(Ee,e))}var ye="expandButton_m80_",_e="expandButtonIcon_BlDH";function Ce(e){var t=e.toggleSidebar;return a.createElement("div",{className:ye,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:_e}))}var xe="docSidebarContainer_b6E3",Ie="docSidebarContainerHidden_b3ry";function Se(e){var t,n=e.children,r=(0,u.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function we(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,o=(0,v.TH)().pathname,c=(0,a.useState)(!1),s=c[0],u=c[1],d=(0,a.useCallback)((function(){s&&u(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,xe,n&&Ie),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe)&&n&&u(!0)}},a.createElement(Se,null,a.createElement(ke,{sidebar:t,path:o,onCollapse:d,isHidden:s})),s&&a.createElement(Ce,{toggleSidebar:d}))}var Ze={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ne(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,u.V)();return a.createElement("main",{className:(0,r.Z)(Ze.docMainContainer,(t||!l)&&Ze.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ze.docItemWrapper,t&&Ze.docItemWrapperEnhanced)},n))}var Te="docPage__5DB",ze="docsWrapper_BCFX";function Be(e){var t=e.children,n=(0,u.V)(),r=(0,a.useState)(!1),l=r[0],i=r[1];return a.createElement(d.Z,{wrapperClassName:ze},a.createElement(g,null),a.createElement("div",{className:Te},n&&a.createElement(we,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),a.createElement(Ne,{hiddenSidebarContainer:l},t)))}var Le=n(4972),Fe=n(197);function Me(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Fe.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ae(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Le.default,null);var o=n.docElement,d=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Me,e),a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(u.b,{name:d,items:m},a.createElement(Be,null,o)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(5999),l=n(1944),i=n(9338);function o(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:function(e,t,n){n.d(t,{E:function(){return o},q:function(){return i}});var a=n(7294),r=n(4700),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);
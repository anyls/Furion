"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6103],{5982:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(402),l=n(6760),i=n(7462),o=n(1614),c=n(1428);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(c.Z,(0,i.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(c.Z,(0,i.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var u=n(4873),m=n(8015),d=n(326),v=n(6010);function f(e){var t,n=e.content,r=n.assets,l=n.metadata,i=l.title,o=l.description,c=l.date,s=l.tags,m=l.authors,d=l.frontMatter,v=d.keywords,f=null!=(t=r.image)?t:d.image;return a.createElement(u.d,{title:i,description:o,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,i=t.assets,o=t.metadata,c=o.nextItem,u=o.prevItem,m=o.frontMatter,v=m.hide_table_of_contents,f=m.toc_min_heading_level,g=m.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!v&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:g}):void 0},a.createElement(l.Z,{frontMatter:m,assets:i,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(c||u)&&a.createElement(s,{nextItem:c,prevItem:u}))}function p(e){return a.createElement(u.FG,{className:(0,v.Z)(m.k.wrapper.blogPages,m.k.page.blogPostPage)},a.createElement(f,e),a.createElement(g,e))}},1553:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294);function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var o=l.memo(i),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,c);n>=0?t[n].children.push(l):a.push(l)})),a}function u(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var m=n(6793);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function v(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function f(){var e=(0,l.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){var t=(0,l.useRef)(void 0),n=f();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=v(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,v=e.linkActiveClassName,f=void 0===v?void 0:v,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,m.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,H=null!=b?b:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return u({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:H});return g((0,l.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:H}}),[d,f,N,H])),l.createElement(o,(0,a.Z)({toc:k,className:i,linkClassName:d},E))}},326:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),i=n(6010),o=n(1553),c="tableOfContents_jeP5",s=n(1402),u=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,u);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(d,null),l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function d(){return l.createElement("a",{href:"https://gitee.com/dotnetchina",target:"_blank",style:{display:"block",position:"relative"},title:"\u4e86\u89e3 dotNET China \u7ec4\u7ec7"},l.createElement("img",{src:(0,s.Z)("img/chinadotnet.png"),style:{display:"block",width:"90%",margin:"0 auto"}}))}}}]);
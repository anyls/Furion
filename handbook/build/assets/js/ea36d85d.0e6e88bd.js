"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2690],{8043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},l=void 0,s={unversionedId:"virtual-deploy",id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",description:"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",source:"@site/docs/virtual-deploy.mdx",sourceDirName:".",slug:"/virtual-deploy",permalink:"/furion/docs/virtual-deploy",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/virtual-deploy.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651213845,formattedLastUpdatedAt:"4/29/2022",frontMatter:{id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},sidebar:"docs",previous:{title:"34.3 \u5728 Nginx \u90e8\u7f72",permalink:"/furion/docs/deploy-nginx"},next:{title:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72",permalink:"/furion/docs/deploy-docker-auto"}},c={},d=[{value:"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",level:2},{value:"34.4.2 \u9488\u5bf9\u5728 <code>IIS</code> \u7f51\u7ad9\u4e0b\u6dfb\u52a0 <code>Application</code> \u60c5\u51b5",id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5",level:2},{value:"34.4.3 \u9488\u5bf9\u975e <code>IIS</code> \u4e0b\u90e8\u7f72\u60c5\u51b5",id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5",level:2},{value:"34.4.3.1 \u914d\u7f6e <code>AppSettings</code>",id:"34431-\u914d\u7f6e-appsettings",level:3},{value:"34.4.3.2 <code>.NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e</code>",id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e",level:3},{value:"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"},"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u7684\u7ad9\u70b9\u90fd\u662f\u90e8\u7f72\u5728\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u5c06\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\u4f5c\u4e3a\u4e8c\u7ea7\u7ad9\u70b9\u6216\u5b50\u7ad9\u70b9\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u4f1a\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," \u9519\u8bef\u4e86\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\u4e86\u3002"),(0,r.kt)("h2",{id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5"},"34.4.2 \u9488\u5bf9\u5728 ",(0,r.kt)("inlineCode",{parentName:"h2"},"IIS")," \u7f51\u7ad9\u4e0b\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Application")," \u60c5\u51b5"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u7248\u672c\u8bf4\u660e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 3.2.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,r.kt)("p",null,"\u5982\u679c\u7f51\u7ad9\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Site")," \u4e0b\u9762\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u4e0b\u90e8\u7f72\uff0c\u5219\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Application Pool")," \u5e94\u7528\u7a0b\u5e8f\u6c60\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u975e\u6258\u7ba1\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," \u5e76\u9009\u62e9\u521a\u521a\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u6c60"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5e94\u7528\u914d\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "SpecificationDocumentSettings": {\n    "ServerDir": "IIS\u4e2d\u5e94\u7528\u7a0b\u5e8f\u540d\uff08Applicaiton\uff09"\n  }\n}\n')),(0,r.kt)("h2",{id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5"},"34.4.3 \u9488\u5bf9\u975e ",(0,r.kt)("inlineCode",{parentName:"h2"},"IIS")," \u4e0b\u90e8\u7f72\u60c5\u51b5"),(0,r.kt)("h3",{id:"34431-\u914d\u7f6e-appsettings"},"34.4.3.1 \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppSettings")),(0,r.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"AppSettings")," \u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "AppSettings": {\n    "VirtualPath": "/\u865a\u62df\u76ee\u5f55"\n  }\n}\n')),(0,r.kt)("h3",{id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e"},"34.4.3.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},".NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 3.2.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,r.kt)("p",null,"\u7531\u4e8e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET6")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebApplication")," \u6a21\u5f0f\u4e0b\u5fae\u8f6f\u5e95\u5c42\u53d1\u751f\u4e86\u6539\u53d8\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"app.UseVirtualPath()")," \u5305\u88f9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"app.UseInject()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"strong"},"app.MapRouteControllers()")),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,4}",showLineNumbers:!0,"":!0,"{1,4}":!0},"app.UseVirtualPath(app =>\n{\n    app.UseInject(String.Empty);  // \u6ce8\u610f String.Empty \u53ea\u662f\u4f8b\u5b50\uff0c\u53ef\u4ee5\u4e0d\u586b\u6216\u586b\u5176\u4ed6\u7684\uff0c\u89c1\u4e00\u5206\u949f\u5165\u95e8\n    app.MapRouteControllers();\n});\n")),(0,r.kt)("p",null,"*","*","\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"app.MapRouteControllers()")," \u662f\u66ff\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.MapControllers()")," \u7684\uff01"),(0,r.kt)("h2",{id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
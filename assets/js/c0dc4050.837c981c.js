"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[201],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47790:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),a=["components"],s={sidebar_position:9},o="VS Code Snippets",c={unversionedId:"vscodesnippets",id:"vscodesnippets",isDocsHomePage:!1,title:"VS Code Snippets",description:"Being able to quickly create services, controllers, or other Knit-related items is very useful when using Knit as a framework. To keep Knit lightweight, there are no required extensions or plugins. Instead, below are some VS Code snippets that can be used to speed up development.",source:"@site/docs/vscodesnippets.md",sourceDirName:".",slug:"/vscodesnippets",permalink:"/Knit/docs/vscodesnippets",editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/vscodesnippets.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Middleware",permalink:"/Knit/docs/middleware"}},u=[{value:"Using Snippets",id:"using-snippets",children:[],level:2},{value:"Knit Snippets",id:"knit-snippets",children:[{value:"Knit",id:"knit",children:[],level:3},{value:"Service",id:"service",children:[],level:3},{value:"Knit Service",id:"knit-service",children:[],level:3},{value:"Knit Controller",id:"knit-controller",children:[],level:3},{value:"Knit Require",id:"knit-require",children:[],level:3},{value:"Lua Class",id:"lua-class",children:[],level:3},{value:"All",id:"all",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,s=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vs-code-snippets"},"VS Code Snippets"),(0,l.kt)("p",null,"Being able to quickly create services, controllers, or other Knit-related items is very useful when using Knit as a framework. To keep Knit lightweight, there are no required extensions or plugins. Instead, below are some VS Code snippets that can be used to speed up development."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Snippets",src:t(1326).Z})),(0,l.kt)("h2",{id:"using-snippets"},"Using Snippets"),(0,l.kt)("p",null,"Snippets are a Visual Studio Code feature. Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets"},"Snippets documentation")," for more info. Adding Snippets for Lua is very easy."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Within Visual Studio, navigate from the toolbar: ",(0,l.kt)("inlineCode",{parentName:"li"},"File -> Preferences -> User Snippets")),(0,l.kt)("li",{parentName:"ol"},"Type in and select ",(0,l.kt)("inlineCode",{parentName:"li"},"lua.json")),(0,l.kt)("li",{parentName:"ol"},"Within the ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," braces, include any or all of the snippets below"),(0,l.kt)("li",{parentName:"ol"},"Save the file"),(0,l.kt)("li",{parentName:"ol"},'Within your actual source files, start typing a prefix (e.g. "knit") and select the autocompleted snippet to paste it in'),(0,l.kt)("li",{parentName:"ol"},"Depending on the snippet, parts of the pasted code will be selected and can be typed over (e.g. setting the name of a service)")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"knit-snippets"},"Knit Snippets"),(0,l.kt)("p",null,"Below are useful VS Code snippets for Knit. The snippets assume that the Knit module has been placed within ReplicatedStorage."),(0,l.kt)("h3",{id:"knit"},"Knit"),(0,l.kt)("p",null,"Include a ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," statement for Knit."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Knit": {\n    "prefix": ["knit"],\n    "body": ["local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)"],\n    "description": "Require the Knit module"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"service"},"Service"),(0,l.kt)("p",null,"Reference a Roblox service."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Service": {\n    "prefix": ["service"],\n    "body": ["local ${0:Name}Service = game:GetService(\\"${0:Name}Service\\")"],\n    "description": "Roblox Service"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local HttpService = game:GetService("HttpService")\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"knit-service"},"Knit Service"),(0,l.kt)("p",null,"Reference Knit, create a service, and return the service."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Knit Service": {\n    "prefix": ["knitservice"],\n    "body": [\n        "local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)",\n        "",\n        "local ${0:$TM_FILENAME_BASE} = Knit.CreateService {",\n        "\\tName = \\"${0:$TM_FILENAME_BASE}\\";",\n        "\\tClient = {};",\n        "}",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}:KnitStart()",\n        "\\t",\n        "end",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}:KnitInit()",\n        "\\t",\n        "end",\n        "",\n        "",\n        "return ${0:$TM_FILENAME_BASE}",\n        ""\n    ],\n    "description": "Knit Service template"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal MyService = Knit.CreateService {\n    Name = "MyService";\n    Client = {};\n}\n\nfunction MyService:KnitStart()\nend\n\nfunction MyService:KnitInit()\nend\n\nreturn MyService\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"knit-controller"},"Knit Controller"),(0,l.kt)("p",null,"Reference Knit, create a controller, and return the controller."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Knit Controller": {\n    "prefix": ["knitcontroller"],\n    "body": [\n        "local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)",\n        "",\n        "local ${0:$TM_FILENAME_BASE} = Knit.CreateController { Name = \\"${0:$TM_FILENAME_BASE}\\" }",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}:KnitStart()",\n        "\\t",\n        "end",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}:KnitInit()",\n        "\\t",\n        "end",\n        "",\n        "",\n        "return ${0:$TM_FILENAME_BASE}",\n        ""\n    ],\n    "description": "Knit Controller template"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\nlocal MyController = Knit.CreateController {\n    Name = "MyController";\n}\n\nfunction MyController:KnitStart()\nend\n\nfunction MyController:KnitInit()\nend\n\nreturn MyController\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"knit-require"},"Knit Require"),(0,l.kt)("p",null,"Require a module within Knit."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Knit Require": {\n    "prefix": ["knitrequire"],\n    "body": ["local ${1:Name} = require(Knit.${2:Util}.${1:Name})"],\n    "description": "Knit Require template"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local Signal = require(Knit.Util.Signal)\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lua-class"},"Lua Class"),(0,l.kt)("p",null,"A standard Lua class."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Class": {\n    "prefix": ["class"],\n    "body": [\n        "local ${0:$TM_FILENAME_BASE} = {}",\n        "${0:$TM_FILENAME_BASE}.__index = ${0:$TM_FILENAME_BASE}",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}.new()",\n        "\\tlocal self = setmetatable({}, ${0:$TM_FILENAME_BASE})",\n        "\\treturn self",\n        "end",\n        "",\n        "",\n        "function ${0:$TM_FILENAME_BASE}:Destroy()",\n        "\\t",\n        "end",\n        "",\n        "",\n        "return ${0:$TM_FILENAME_BASE}",\n        ""\n    ],\n    "description": "Lua Class"\n}\n'))),(0,l.kt)("details",{class:"success"},(0,l.kt)("summary",null,"Code Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local MyClass = {}\nMyClass.__index = MyClass\n\nfunction MyClass.new()\n    local self = setmetatable({}, MyClass)\n    return self\nend\n\nfunction MyClass:Destroy()\n\nend\n\nreturn MyClass\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"all"},"All"),(0,l.kt)("p",null,"All the above snippets together."),(0,l.kt)("details",{class:"note"},(0,l.kt)("summary",null,"All Snippets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n    "Service": {\n        "prefix": ["service"],\n        "body": ["local ${0:Name}Service = game:GetService(\\"${0:Name}Service\\")"],\n        "description": "Roblox Service"\n    },\n\n    "Class": {\n        "prefix": ["class"],\n        "body": [\n            "local ${0:$TM_FILENAME_BASE} = {}",\n            "${0:$TM_FILENAME_BASE}.__index = ${0:$TM_FILENAME_BASE}",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}.new()",\n            "\\tlocal self = setmetatable({}, ${0:$TM_FILENAME_BASE})",\n            "\\treturn self",\n            "end",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}:Destroy()",\n            "\\t",\n            "end",\n            "",\n            "",\n            "return ${0:$TM_FILENAME_BASE}",\n            ""\n        ],\n        "description": "Lua Class"\n    },\n\n    "Knit": {\n        "prefix": ["knit"],\n        "body": ["local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)"],\n        "description": "Require the Knit module"\n    },\n\n    "Knit Service": {\n        "prefix": ["knitservice"],\n        "body": [\n            "local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)",\n            "",\n            "local ${0:$TM_FILENAME_BASE} = Knit.CreateService {",\n            "\\tName = \\"${0:$TM_FILENAME_BASE}\\";",\n            "\\tClient = {};",\n            "}",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}:KnitStart()",\n            "\\t",\n            "end",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}:KnitInit()",\n            "\\t",\n            "end",\n            "",\n            "",\n            "return ${0:$TM_FILENAME_BASE}",\n            ""\n        ],\n        "description": "Knit Service template"\n    },\n\n    "Knit Controller": {\n        "prefix": ["knitcontroller"],\n        "body": [\n            "local Knit = require(game:GetService(\\"ReplicatedStorage\\").Packages.Knit)",\n            "",\n            "local ${0:$TM_FILENAME_BASE} = Knit.CreateController { Name = \\"${0:$TM_FILENAME_BASE}\\" }",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}:KnitStart()",\n            "\\t",\n            "end",\n            "",\n            "",\n            "function ${0:$TM_FILENAME_BASE}:KnitInit()",\n            "\\t",\n            "end",\n            "",\n            "",\n            "return ${0:$TM_FILENAME_BASE}",\n            ""\n        ],\n        "description": "Knit Controller template"\n    },\n\n    "Knit Require": {\n        "prefix": ["knitrequire"],\n        "body": ["local ${1:Name} = require(Knit.${2:Util}.${1:Name})"],\n        "description": "Knit Require template"\n    }\n\n}\n'))))}d.isMDXComponent=!0},1326:function(e,n,t){n.Z=t.p+"assets/images/snippets-00a77d4cc99fc8c998326687e563847d.gif"}}]);
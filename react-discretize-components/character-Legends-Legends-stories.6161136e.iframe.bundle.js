/*! For license information please see character-Legends-Legends-stories.6161136e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_discretize_react_discretize_components=self.webpackChunk_discretize_react_discretize_components||[]).push([[916],{"./src/character/Legends/Legends.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var _Legends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/character/Legends/Legends.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Character/Legends",component:_Legends__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{className:{control:!1}}},Example={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Legends__WEBPACK_IMPORTED_MODULE_2__.A,{...args}),args:{legend1Id:28419,legend2Id:62891}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    legend1Id: 28419,\n    legend2Id: 62891\n  }\n}",...Example.parameters?.docs?.source}}}},"../gw2-ui/src/components/AbilityDetails/AbilityDetails.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>AbilityDetails_AbilityDetails});const factsOrder={Damage:0,Heal:1,HealingAdjust:2,Buff:3,PrefixedBuff:4,AttributeAdjust:5,BuffConversion:6,Percent:7,Number:8,Duration:9,Time:10,Radius:11,Distance:12,ComboFinisher:13,ComboField:14,Unblockable:15,StunBreak:16,NoData:17,Range:18,Recharge:-1};var DetailsFact=__webpack_require__("../gw2-ui/src/components/DetailsFact/DetailsFact.tsx"),DetailsHeader=__webpack_require__("../gw2-ui/src/components/DetailsHeader/DetailsHeader.tsx"),DetailsText=__webpack_require__("../gw2-ui/src/components/DetailsText/DetailsText.tsx"),Spinner=__webpack_require__("../gw2-ui/src/components/Spinner/Spinner.tsx"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AbilityDetails_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../gw2-ui/src/components/AbilityDetails/AbilityDetails.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AbilityDetails_module.A,options);const AbilityDetails_AbilityDetails_module=AbilityDetails_module.A&&AbilityDetails_module.A.locals?AbilityDetails_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const invalidCategories=["Signet","LegendaryDwarf","LegendaryDemon","LegendaryAssassin","LegendaryCentaur"],AbilityDetails=_ref=>{let{data}=_ref;const{name,description:unparsedDescription,facts}=data,categories=data.categories||void 0,{value:rechargeValue,icon:rechargeIcon}=facts&&facts.find((_ref2=>{let{type}=_ref2;return"Recharge"===type}))||{};let description=unparsedDescription;return categories&&description&&(description=description.replace(new RegExp(`^(${categories.map((category=>`${category}\\. `)).join("|")})`,"g"),"")),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DetailsHeader.A,{className:AbilityDetails_AbilityDetails_module.mb8,...rechargeValue&&rechargeIcon&&{flags:[{value:rechargeValue,icon:rechargeIcon}]},children:name}),!(unparsedDescription||categories||facts)&&(0,jsx_runtime.jsx)(Spinner.A,{}),(0,jsx_runtime.jsx)(DetailsText.A,{lines:[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:AbilityDetails_AbilityDetails_module.detailsText,children:categories&&categories.filter((category=>!invalidCategories.includes(category))).map((category=>`${category}. `))}),(0,DetailsText.j)(description||"")]})],lineComponent:"span"}),facts&&(0,jsx_runtime.jsx)(DetailsFact.A,{facts:facts.filter((fact=>"Recharge"!==fact.type)).sort(((a,b)=>factsOrder[a.type]-factsOrder[b.type])),className:AbilityDetails_AbilityDetails_module.mt12})]})},AbilityDetails_AbilityDetails=AbilityDetails;try{AbilityDetails.displayName="AbilityDetails",AbilityDetails.__docgenInfo={description:"",displayName:"AbilityDetails",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GW2ApiSkill | GW2ApiTrait | GW2ApiTraitSkill"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gw2-ui/src/components/AbilityDetails/AbilityDetails.tsx#AbilityDetails"]={docgenInfo:AbilityDetails.__docgenInfo,name:"AbilityDetails",path:"../gw2-ui/src/components/AbilityDetails/AbilityDetails.tsx#AbilityDetails"})}catch(__react_docgen_typescript_loader_error){}},"../gw2-ui/src/components/Skill/Skill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Skill_Skill});var hooks=__webpack_require__("../gw2-ui/src/gw2api/hooks.ts"),Error=__webpack_require__("../gw2-ui/src/components/Error/Error.tsx"),IconWithText=__webpack_require__("../gw2-ui/src/components/IconWithText/IconWithText.tsx"),clsx=__webpack_require__("../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),AbilityDetails=__webpack_require__("../gw2-ui/src/components/AbilityDetails/AbilityDetails.tsx"),professions_module=__webpack_require__("../gw2-ui/src/components/Profession/professions.module.css"),Tooltip=__webpack_require__("../gw2-ui/src/components/Tooltip/Tooltip.tsx"),WikiLink=__webpack_require__("../gw2-ui/src/components/WikiLink/WikiLink.tsx"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const SkillInternal=props=>{const{data,text,disableLink,disableTooltip,tooltipProps,wikiLinkProps}=props,{name,icon,professions}=data,profession=professions?.[0];return(0,jsx_runtime.jsx)(Tooltip.A,{content:(0,jsx_runtime.jsx)(AbilityDetails.A,{data}),disabled:disableTooltip,...tooltipProps,children:(0,jsx_runtime.jsx)(IconWithText.A,{...props,icon,text:disableLink?text||name:(0,jsx_runtime.jsx)(WikiLink.A,{to:name,text,...wikiLinkProps,className:(0,clsx.A)(profession&&professions_module.A[`coloredProfession${profession}`],wikiLinkProps?.className)}),className:(0,clsx.A)(props.className,profession&&professions_module.A[`coloredProfession${profession}`])})})},Skill_SkillInternal=SkillInternal;try{SkillInternal.displayName="SkillInternal",SkillInternal.__docgenInfo={description:"",displayName:"SkillInternal",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GW2ApiSkill"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},disableTooltip:{defaultValue:null,description:"",name:"disableTooltip",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipProps>"}},wikiLinkProps:{defaultValue:null,description:"",name:"wikiLinkProps",required:!1,type:{name:"Partial<WikiLinkProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableIcon:{defaultValue:null,description:"",name:"disableIcon",required:!1,type:{name:"boolean"}},disableText:{defaultValue:null,description:"",name:"disableText",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!1,type:{name:"Partial<IconProps>"}},textProps:{defaultValue:null,description:"",name:"textProps",required:!1,type:{name:"any"}},progressProps:{defaultValue:null,description:"",name:"progressProps",required:!1,type:{name:"Partial<ProgressProps>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gw2-ui/src/components/Skill/SkillInternal.tsx#SkillInternal"]={docgenInfo:SkillInternal.__docgenInfo,name:"SkillInternal",path:"../gw2-ui/src/components/Skill/SkillInternal.tsx#SkillInternal"})}catch(__react_docgen_typescript_loader_error){}const SKILL_ERROR_NAMES={404:"Skill Not Found",500:"Network Error"},SKILL_ERROR_MESSAGES={404:id=>`The requested skill with the id ${id} was not found.`,500:id=>`A Network Error occured trying to fetch the skill ${id}.`},Skill=props=>{const skill=(0,hooks.Pt)(props.id);return skill.loading?(0,jsx_runtime.jsx)(IconWithText.A,{...props,loading:!0}):skill.error?(0,jsx_runtime.jsx)(Error.A,{...props,code:skill.error,name:SKILL_ERROR_NAMES,message:SKILL_ERROR_MESSAGES}):(0,jsx_runtime.jsx)(Skill_SkillInternal,{...props,data:skill.data})},Skill_Skill=Skill;try{Skill.displayName="Skill",Skill.__docgenInfo={description:"",displayName:"Skill",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disableIcon:{defaultValue:null,description:"",name:"disableIcon",required:!1,type:{name:"boolean"}},disableText:{defaultValue:null,description:"",name:"disableText",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},disableTooltip:{defaultValue:null,description:"",name:"disableTooltip",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipProps>"}},wikiLinkProps:{defaultValue:null,description:"",name:"wikiLinkProps",required:!1,type:{name:"Partial<WikiLinkProps>"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!1,type:{name:"Partial<IconProps>"}},textProps:{defaultValue:null,description:"",name:"textProps",required:!1,type:{name:"any"}},progressProps:{defaultValue:null,description:"",name:"progressProps",required:!1,type:{name:"Partial<ProgressProps>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gw2-ui/src/components/Skill/Skill.tsx#Skill"]={docgenInfo:Skill.__docgenInfo,name:"Skill",path:"../gw2-ui/src/components/Skill/Skill.tsx#Skill"})}catch(__react_docgen_typescript_loader_error){}},"./src/character/Legends/Legends.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Legends_Legends});var Skill=__webpack_require__("../gw2-ui/src/components/Skill/Skill.tsx"),Icon=__webpack_require__("../gw2-ui/src/components/Icon/Icon.tsx"),useMediaQuery=__webpack_require__("./src/helpers/useMediaQuery.ts"),classnames=__webpack_require__("../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Legends_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/character/Legends/Legends.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Legends_module.A,options);const Legends_Legends_module=Legends_module.A&&Legends_module.A.locals?Legends_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Legends=_ref=>{let{legend1Id,legend2Id,className}=_ref;const classNameSkill=(0,useMediaQuery.A)("(max-width: 600px)")?Legends_Legends_module.skillMobile:Legends_Legends_module.skillDesktop;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:legend1Id&&legend2Id&&(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,Legends_Legends_module.grid),children:[(0,jsx_runtime.jsx)("div",{className:Legends_Legends_module.gridItem,children:(0,jsx_runtime.jsx)(Skill.A,{id:legend1Id,disableText:!0,className:classNameSkill})}),(0,jsx_runtime.jsx)(Icon.A,{name:"WeaponSwap"}),(0,jsx_runtime.jsx)("div",{className:Legends_Legends_module.gridItem,children:(0,jsx_runtime.jsx)(Skill.A,{id:legend2Id,disableText:!0,className:classNameSkill})})]})})},Legends_Legends=Legends;try{Legends.displayName="Legends",Legends.__docgenInfo={description:"",displayName:"Legends",props:{legend1Id:{defaultValue:null,description:"",name:"legend1Id",required:!0,type:{name:"number"}},legend2Id:{defaultValue:null,description:"",name:"legend2Id",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/character/Legends/Legends.tsx#Legends"]={docgenInfo:Legends.__docgenInfo,name:"Legends",path:"src/character/Legends/Legends.tsx#Legends"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useMediaQuery(query){const getMatches=query=>"undefined"!=typeof window&&window.matchMedia(query).matches,[matches,setMatches]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getMatches(query));function handleChange(){setMatches(getMatches(query))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const matchMedia=window.matchMedia(query);return handleChange(),matchMedia.addListener?matchMedia.addListener(handleChange):matchMedia.addEventListener("change",handleChange),()=>{matchMedia.removeListener?matchMedia.removeListener(handleChange):matchMedia.removeEventListener("change",handleChange)}}),[query]),matches}},"../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../gw2-ui/src/components/AbilityDetails/AbilityDetails.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AbilityDetails-module__mb8__qVP4T {\n  margin-bottom: 8px;\n}\n.AbilityDetails-module__detailsText__vt1lz {\n  color: var(--gw2-color-details-ability-type);\n}\n.AbilityDetails-module__mt12__MN55J {\n  margin-top: 12px;\n}\n","",{version:3,sources:["webpack://./../gw2-ui/src/components/AbilityDetails/AbilityDetails.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,gBAAgB;AAClB",sourcesContent:[".mb8 {\n  margin-bottom: 8px;\n}\n.detailsText {\n  color: var(--gw2-color-details-ability-type);\n}\n.mt12 {\n  margin-top: 12px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={mb8:"AbilityDetails-module__mb8__qVP4T",detailsText:"AbilityDetails-module__detailsText__vt1lz",mt12:"AbilityDetails-module__mt12__MN55J"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../gw2-ui/src/components/Profession/professions.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".professions-module__coloredProfessionWarrior__JiooP {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-warrior-main);\n}\n.professions-module__coloredProfessionWarrior__JiooP:hover {\n  color: var(--gw2-color-warrior-dark);\n}\n\n.professions-module__coloredProfessionElementalist__Xf4xZ {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-elementalist-main);\n}\n.professions-module__coloredProfessionElementalist__Xf4xZ:hover {\n  color: var(--gw2-color-elementalist-dark);\n}\n\n.professions-module__coloredProfessionEngineer__McaQW {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-engineer-main);\n}\n.professions-module__coloredProfessionEngineer__McaQW:hover {\n  color: var(--gw2-color-engineer-dark);\n}\n\n.professions-module__coloredProfessionGuardian__Go887 {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-guardian-main);\n}\n.professions-module__coloredProfessionGuardian__Go887:hover {\n  color: var(--gw2-color-guardian-dark);\n}\n\n.professions-module__coloredProfessionMesmer__WKWV3 {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-mesmer-main);\n}\n.professions-module__coloredProfessionMesmer__WKWV3:hover {\n  color: var(--gw2-color-mesmer-dark);\n}\n\n.professions-module__coloredProfessionNecromancer__q2RfX {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-necromancer-main);\n}\n.professions-module__coloredProfessionNecromancer__q2RfX:hover {\n  color: var(--gw2-color-necromancer-dark);\n}\n\n.professions-module__coloredProfessionRanger__rCgbf {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-ranger-main);\n}\n.professions-module__coloredProfessionRanger__rCgbf:hover {\n  color: var(--gw2-color-ranger-dark);\n}\n\n.professions-module__coloredProfessionRevenant__R5Tqg {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-revenant-main);\n}\n.professions-module__coloredProfessionRevenant__R5Tqg:hover {\n  color: var(--gw2-color-revenant-dark);\n}\n\n.professions-module__coloredProfessionThief__jIedg {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-thief-main);\n}\n.professions-module__coloredProfessionThief__jIedg:hover {\n  color: var(--gw2-color-thief-dark);\n}\n","",{version:3,sources:["webpack://./../gw2-ui/src/components/Profession/professions.module.css"],names:[],mappings:"AAAA;EACE,mCAAmC;EACnC,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;EACnC,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,wCAAwC;AAC1C;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,mCAAmC;EACnC,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC",sourcesContent:[".coloredProfessionWarrior {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-warrior-main);\n}\n.coloredProfessionWarrior:hover {\n  color: var(--gw2-color-warrior-dark);\n}\n\n.coloredProfessionElementalist {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-elementalist-main);\n}\n.coloredProfessionElementalist:hover {\n  color: var(--gw2-color-elementalist-dark);\n}\n\n.coloredProfessionEngineer {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-engineer-main);\n}\n.coloredProfessionEngineer:hover {\n  color: var(--gw2-color-engineer-dark);\n}\n\n.coloredProfessionGuardian {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-guardian-main);\n}\n.coloredProfessionGuardian:hover {\n  color: var(--gw2-color-guardian-dark);\n}\n\n.coloredProfessionMesmer {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-mesmer-main);\n}\n.coloredProfessionMesmer:hover {\n  color: var(--gw2-color-mesmer-dark);\n}\n\n.coloredProfessionNecromancer {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-necromancer-main);\n}\n.coloredProfessionNecromancer:hover {\n  color: var(--gw2-color-necromancer-dark);\n}\n\n.coloredProfessionRanger {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-ranger-main);\n}\n.coloredProfessionRanger:hover {\n  color: var(--gw2-color-ranger-dark);\n}\n\n.coloredProfessionRevenant {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-revenant-main);\n}\n.coloredProfessionRevenant:hover {\n  color: var(--gw2-color-revenant-dark);\n}\n\n.coloredProfessionThief {\n  transition: color 200ms ease-in-out;\n  color: var(--gw2-color-thief-main);\n}\n.coloredProfessionThief:hover {\n  color: var(--gw2-color-thief-dark);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={coloredProfessionWarrior:"professions-module__coloredProfessionWarrior__JiooP",coloredProfessionElementalist:"professions-module__coloredProfessionElementalist__Xf4xZ",coloredProfessionEngineer:"professions-module__coloredProfessionEngineer__McaQW",coloredProfessionGuardian:"professions-module__coloredProfessionGuardian__Go887",coloredProfessionMesmer:"professions-module__coloredProfessionMesmer__WKWV3",coloredProfessionNecromancer:"professions-module__coloredProfessionNecromancer__q2RfX",coloredProfessionRanger:"professions-module__coloredProfessionRanger__rCgbf",coloredProfessionRevenant:"professions-module__coloredProfessionRevenant__R5Tqg",coloredProfessionThief:"professions-module__coloredProfessionThief__jIedg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/character/Legends/Legends.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Legends-module__grid__yHgWi {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Legends-module__gridItem__oOOUr {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 8px;\n}\n.Legends-module__skillDesktop__DVnXa {\n  font-size: 60px;\n}\n.Legends-module__skillMobile__FCDsj {\n  font-size: 45px;\n}\n","",{version:3,sources:["webpack://./src/character/Legends/Legends.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB",sourcesContent:[".grid {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.gridItem {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 8px;\n}\n.skillDesktop {\n  font-size: 60px;\n}\n.skillMobile {\n  font-size: 45px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={grid:"Legends-module__grid__yHgWi",gridItem:"Legends-module__gridItem__oOOUr",skillDesktop:"Legends-module__skillDesktop__DVnXa",skillMobile:"Legends-module__skillMobile__FCDsj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../gw2-ui/src/components/Profession/professions.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_12_use_1_professions_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!../gw2-ui/src/components/Profession/professions.module.css"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_esbuild_0_24_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_12_use_1_professions_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_12_use_1_professions_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_12_use_1_professions_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_12_use_1_professions_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0}}]);
"use strict";(self.webpackChunk_discretize_gw2_ui_new=self.webpackChunk_discretize_gw2_ui_new||[]).push([[26],{"./src/components/DetailsHeader/DetailsHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DetailsHeader_DetailsHeader});var clsx=__webpack_require__("../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DetailsHeaderTitle_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsHeaderTitle/DetailsHeaderTitle.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DetailsHeaderTitle_module.A,options);const DetailsHeaderTitle_DetailsHeaderTitle_module=DetailsHeaderTitle_module.A&&DetailsHeaderTitle_module.A.locals?DetailsHeaderTitle_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const DetailsHeaderTitle=_ref=>{let{children,className}=_ref;return(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(DetailsHeaderTitle_DetailsHeaderTitle_module.root,className),children})},DetailsHeaderTitle_DetailsHeaderTitle=DetailsHeaderTitle;try{DetailsHeaderTitle.displayName="DetailsHeaderTitle",DetailsHeaderTitle.__docgenInfo={description:"",displayName:"DetailsHeaderTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DetailsHeaderTitle/DetailsHeaderTitle.tsx#DetailsHeaderTitle"]={docgenInfo:DetailsHeaderTitle.__docgenInfo,name:"DetailsHeaderTitle",path:"src/components/DetailsHeaderTitle/DetailsHeaderTitle.tsx#DetailsHeaderTitle"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),DetailsHeader_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsHeader/DetailsHeader.module.css"),DetailsHeader_module_options={};DetailsHeader_module_options.styleTagTransform=styleTagTransform_default(),DetailsHeader_module_options.setAttributes=setAttributesWithoutAttributes_default(),DetailsHeader_module_options.insert=insertBySelector_default().bind(null,"head"),DetailsHeader_module_options.domAPI=styleDomAPI_default(),DetailsHeader_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DetailsHeader_module.A,DetailsHeader_module_options);const DetailsHeader_DetailsHeader_module=DetailsHeader_module.A&&DetailsHeader_module.A.locals?DetailsHeader_module.A.locals:void 0,DetailsHeader=_ref=>{let{icon,iconProps,titleClassName,flags,children,className}=_ref;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)(className,DetailsHeader_DetailsHeader_module.root),children:["string"==typeof icon||iconProps?.src||iconProps?.iconViaClassname?(0,jsx_runtime.jsx)(Icon.A,{src:icon,...iconProps,className:(0,clsx.A)(DetailsHeader_DetailsHeader_module.icon,iconProps?.className)}):icon,(0,jsx_runtime.jsx)(DetailsHeaderTitle_DetailsHeaderTitle,{className:titleClassName,children}),flags&&(0,jsx_runtime.jsx)("div",{className:DetailsHeader_DetailsHeader_module.flagsRoot,children:flags.map((_ref2=>{let{icon:flagIcon,value}=_ref2;return(0,jsx_runtime.jsxs)("span",{children:[value,flagIcon&&(0,jsx_runtime.jsx)(Icon.A,{src:flagIcon,className:DetailsHeader_DetailsHeader_module.flagsIcon})]},`${flagIcon}-${value}`)}))})]})},DetailsHeader_DetailsHeader=DetailsHeader;try{DetailsHeader.displayName="DetailsHeader",DetailsHeader.__docgenInfo={description:"",displayName:"DetailsHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!1,type:{name:"Partial<IconProps>"}},titleClassName:{defaultValue:null,description:"",name:"titleClassName",required:!1,type:{name:"string"}},flags:{defaultValue:null,description:"",name:"flags",required:!1,type:{name:"DetailsHeaderFlagProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DetailsHeader/DetailsHeader.tsx#DetailsHeader"]={docgenInfo:DetailsHeader.__docgenInfo,name:"DetailsHeader",path:"src/components/DetailsHeader/DetailsHeader.tsx#DetailsHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DetailsText/DetailsText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DetailsText_DetailsText,j:()=>renderFlavor});var react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),capitalize=__webpack_require__("./src/helpers/capitalize.ts"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DetailsText_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsText/DetailsText.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DetailsText_module.A,options);const DetailsText_DetailsText_module=DetailsText_module.A&&DetailsText_module.A.locals?DetailsText_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const REGEX=new RegExp("<c=@([^>]+?>[^<>]+?)(?:</c>|$)","g"),renderFlavor=text=>{const parts=text.replace(/<br\s*?\/?\s*?>/g,"\n").split(REGEX);for(let i=1;i<parts.length;i+=2){const[type,textPart]=parts[i].split(">");if(type){let color;switch(type){case"ability":color=null;break;case"abilitytype":color="abilityType";break;case"reminder":color="muted";break;default:color=type}parts[i]=[textPart,color||""]}else parts[i]=textPart}return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:parts.filter((part=>!!part)).map(((part,index)=>{if(Array.isArray(part)){const[textPart,color]=part;return color?(DetailsText_DetailsText_module[`color${(0,capitalize.Z)(color)}`]||console.error(`Missing color type: ${color}`),(0,jsx_runtime.jsx)("span",{className:DetailsText_DetailsText_module[`color${(0,capitalize.Z)(color)}`],children:textPart},`flavour-${textPart}-${index.toString()}`)):textPart}return part}))})},DetailsText=_ref=>{let{lines,lineProps,className}=_ref;return(0,jsx_runtime.jsx)("div",{className,children:lines.filter((line=>!!line)).map(((line,index)=>(0,jsx_runtime.jsx)("div",{...lineProps,children:react.isValidElement(line)?line:renderFlavor(line)},`DetailsText${index.toString()}`)))})},DetailsText_DetailsText=DetailsText;try{renderFlavor.displayName="renderFlavor",renderFlavor.__docgenInfo={description:"",displayName:"renderFlavor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DetailsText/DetailsText.tsx#renderFlavor"]={docgenInfo:renderFlavor.__docgenInfo,name:"renderFlavor",path:"src/components/DetailsText/DetailsText.tsx#renderFlavor"})}catch(__react_docgen_typescript_loader_error){}try{DetailsText.displayName="DetailsText",DetailsText.__docgenInfo={description:"",displayName:"DetailsText",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"string"}},lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"ReactNode[]"}},lineComponent:{defaultValue:null,description:"",name:"lineComponent",required:!1,type:{name:"string"}},lineProps:{defaultValue:null,description:"",name:"lineProps",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DetailsText/DetailsText.tsx#DetailsText"]={docgenInfo:DetailsText.__docgenInfo,name:"DetailsText",path:"src/components/DetailsText/DetailsText.tsx#DetailsText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip_Tooltip});var floating_ui_dom=__webpack_require__("../node_modules/.pnpm/@floating-ui+dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_react_dom_esm=__webpack_require__("../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),react_dom=__webpack_require__("../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),TooltipContainer=__webpack_require__("./src/components/TooltipContainer/TooltipContainer.tsx"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/Tooltip/Tooltip.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip_module.A,options);const Tooltip_Tooltip_module=Tooltip_module.A&&Tooltip_module.A.locals?Tooltip_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const FLOATING_MIDDLEWARE=[(0,floating_ui_dom.cY)(5),(0,floating_ui_dom.UU)(),(0,floating_ui_dom.BN)()];function rect(x,y){return{width:0,height:0,x,y,top:y,left:x,right:x,bottom:y}}const NULL_RECT=rect(0,0),useLayoutEffectSafe="undefined"!=typeof document?react.useLayoutEffect:react.useEffect,Tooltip=_ref=>{let{children,content:propsContent,render,containerProps,disabled}=_ref;const{x,y,strategy,update,reference,floating}=(0,floating_ui_react_dom_esm.we)({middleware:FLOATING_MIDDLEWARE}),children_ref=(0,react.useRef)(null),position_ref=(0,react.useRef)(NULL_RECT),[_visible,setVisible]=(0,react.useState)(!1),visible=!disabled&&_visible,children_with_ref=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,react.cloneElement)(children,{ref:children_ref})})),[children]),content=(0,react.useMemo)((()=>visible?propsContent?(0,jsx_runtime.jsx)(TooltipContainer.A,{...containerProps,children:propsContent}):"function"==typeof render?render():null!==render?render:null:null),[visible,propsContent,render]);return useLayoutEffectSafe((()=>{const e=children_ref.current;if(e)return e.addEventListener("pointerover",onpointerover),e.addEventListener("pointerout",onpointerout),e.addEventListener("pointermove",onpointermove),()=>{e.removeEventListener("pointerover",onpointerover),e.removeEventListener("pointerout",onpointerout),e.removeEventListener("pointermove",onpointermove)};function setPosition(e){position_ref.current=rect(e.clientX,e.clientY),update()}function onpointerover(e){setVisible(!0),setPosition(e)}function onpointerout(){setVisible(!1),position_ref.current=NULL_RECT}function onpointermove(e){setPosition(e)}}),[children_with_ref,update]),useLayoutEffectSafe((()=>{if(!visible)return void reference(null);reference({getBoundingClientRect:()=>position_ref.current})}),[visible]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children_with_ref,visible?(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{className:Tooltip_Tooltip_module.root,ref:floating,style:{position:strategy,top:y??"",left:x??""},children:content}),(children_ref.current?.ownerDocument||document).body):null]})},Tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"ReactNode | (() => ReactNode)"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:'Partial<Omit<TooltipContainerProps, "children">>'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipContainer/TooltipContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TooltipContainer_TooltipContainer});var clsx=__webpack_require__("../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TooltipContainer_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/TooltipContainer/TooltipContainer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TooltipContainer_module.A,options);const TooltipContainer_TooltipContainer_module=TooltipContainer_module.A&&TooltipContainer_module.A.locals?TooltipContainer_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const TooltipContainer=_ref=>{let{children,className}=_ref;return(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(TooltipContainer_TooltipContainer_module.root,className),children})},TooltipContainer_TooltipContainer=TooltipContainer;try{TooltipContainer.displayName="TooltipContainer",TooltipContainer.__docgenInfo={description:"",displayName:"TooltipContainer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipContainer/TooltipContainer.tsx#TooltipContainer"]={docgenInfo:TooltipContainer.__docgenInfo,name:"TooltipContainer",path:"src/components/TooltipContainer/TooltipContainer.tsx#TooltipContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/capitalize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()}__webpack_require__.d(__webpack_exports__,{Z:()=>capitalize})},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsHeader/DetailsHeader.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DetailsHeader-module__root__Ojdtq {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 3px;\n}\n\n.DetailsHeader-module__icon__OVQZl {\n  font-size: 32px;\n  margin-right: 6px;\n  border: 1px solid #cfd0d0;\n  border-radius: 0px;\n}\n\n.DetailsHeader-module__flagsRoot__QTCxQ {\n  margin-left: 6px;\n}\n\n.DetailsHeader-module__flagsIcon__nE3Lw {\n  margin-left: 2px;\n}\n","",{version:3,sources:["webpack://./src/components/DetailsHeader/DetailsHeader.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".root {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 3px;\n}\n\n.icon {\n  font-size: 32px;\n  margin-right: 6px;\n  border: 1px solid #cfd0d0;\n  border-radius: 0px;\n}\n\n.flagsRoot {\n  margin-left: 6px;\n}\n\n.flagsIcon {\n  margin-left: 2px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"DetailsHeader-module__root__Ojdtq",icon:"DetailsHeader-module__icon__OVQZl",flagsRoot:"DetailsHeader-module__flagsRoot__QTCxQ",flagsIcon:"DetailsHeader-module__flagsIcon__nE3Lw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsHeaderTitle/DetailsHeaderTitle.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DetailsHeaderTitle-module__root__xQKNF {\n  color: var(--gw2-color-details-title);\n  font-size: 16px;\n  font-family: var(--gw2-font);\n  font-weight: var(--gw2-font-weight-heading);\n  flex-grow: 1;\n  align-self: center;\n  line-height: var(--gw2-line-height-heading);\n}\n","",{version:3,sources:["webpack://./src/components/DetailsHeaderTitle/DetailsHeaderTitle.module.css"],names:[],mappings:"AAAA;EACE,qCAAqC;EACrC,eAAe;EACf,4BAA4B;EAC5B,2CAA2C;EAC3C,YAAY;EACZ,kBAAkB;EAClB,2CAA2C;AAC7C",sourcesContent:[".root {\n  color: var(--gw2-color-details-title);\n  font-size: 16px;\n  font-family: var(--gw2-font);\n  font-weight: var(--gw2-font-weight-heading);\n  flex-grow: 1;\n  align-self: center;\n  line-height: var(--gw2-line-height-heading);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"DetailsHeaderTitle-module__root__xQKNF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/DetailsText/DetailsText.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DetailsText-module__colorAbilitytype__xvWbd {\n  color: var(--gw2-color-details-ability-type) !important;\n}\n.DetailsText-module__colorAbility__GYWPH {\n  color: var(--gw2-color-details-ability) !important;\n}\n.DetailsText-module__colorMuted__twQBn {\n  color: var(--gw2-color-details-muted) !important;\n}\n.DetailsText-module__colorFlavor__K1x1k {\n  color: var(--gw2-color-details-flavor) !important;\n}\n","",{version:3,sources:["webpack://./src/components/DetailsText/DetailsText.module.css"],names:[],mappings:"AAAA;EACE,uDAAuD;AACzD;AACA;EACE,kDAAkD;AACpD;AACA;EACE,gDAAgD;AAClD;AACA;EACE,iDAAiD;AACnD",sourcesContent:[".colorAbilitytype {\n  color: var(--gw2-color-details-ability-type) !important;\n}\n.colorAbility {\n  color: var(--gw2-color-details-ability) !important;\n}\n.colorMuted {\n  color: var(--gw2-color-details-muted) !important;\n}\n.colorFlavor {\n  color: var(--gw2-color-details-flavor) !important;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={colorAbilitytype:"DetailsText-module__colorAbilitytype__xvWbd",colorAbility:"DetailsText-module__colorAbility__GYWPH",colorMuted:"DetailsText-module__colorMuted__twQBn",colorFlavor:"DetailsText-module__colorFlavor__K1x1k"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/Tooltip/Tooltip.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Tooltip-module__root__MFJ1E {\n  max-height: calc(100vh - 20px);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  z-index: 1500;\n  pointer-events: none;\n  padding: 5px;\n}\n","",{version:3,sources:["webpack://./src/components/Tooltip/Tooltip.module.css"],names:[],mappings:"AAAA;EACE,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,YAAY;AACd",sourcesContent:[".root {\n  max-height: calc(100vh - 20px);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  z-index: 1500;\n  pointer-events: none;\n  padding: 5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Tooltip-module__root__MFJ1E"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/TooltipContainer/TooltipContainer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/tooltip-background.png"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`.TooltipContainer-module__root__laLUI {\n  background-color: rgba(46, 53, 56, 0.7);\n  border-style: solid;\n  border-width: 2px;\n  border-color: #040505;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 4px;\n  background-position: top;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  color: #fff;\n  font-family: var(--gw2-font);\n  font-weight: var(--gw2-font-weight-body);\n  line-height: var(--gw2-line-height-heading);\n  font-size: 14px;\n  border-radius: 0px;\n  text-shadow: 1px 1px 1px #010101;\n  max-width: 300px;\n  white-space: pre-wrap;\n}\n`,"",{version:3,sources:["webpack://./src/components/TooltipContainer/TooltipContainer.module.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB;;;wCAGsC;EACtC,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;EAC5B,8BAA8B;EAC9B,sBAAsB;EACtB,yDAA0D;EAC1D,WAAW;EACX,4BAA4B;EAC5B,wCAAwC;EACxC,2CAA2C;EAC3C,eAAe;EACf,kBAAkB;EAClB,gCAAgC;EAChC,gBAAgB;EAChB,qBAAqB;AACvB",sourcesContent:[".root {\n  background-color: rgba(46, 53, 56, 0.7);\n  border-style: solid;\n  border-width: 2px;\n  border-color: #040505;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 4px;\n  background-position: top;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-image: url(../../assets/tooltip-background.png);\n  color: #fff;\n  font-family: var(--gw2-font);\n  font-weight: var(--gw2-font-weight-body);\n  line-height: var(--gw2-line-height-heading);\n  font-size: 14px;\n  border-radius: 0px;\n  text-shadow: 1px 1px 1px #010101;\n  max-width: 300px;\n  white-space: pre-wrap;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"TooltipContainer-module__root__laLUI"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/assets/tooltip-background.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/tooltip-background.07f54aa8.png"}}]);
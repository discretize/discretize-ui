/*! For license information please see character-Weapons-Weapons-stories.a37b3a5c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_discretize_react_discretize_components=self.webpackChunk_discretize_react_discretize_components||[]).push([[344],{"../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/character/Weapons/Weapons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyOffhand:()=>EmptyOffhand,Example:()=>Example,TwoHanded:()=>TwoHanded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");var _Weapons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/character/Weapons/Weapons.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Character/Weapons",component:_Weapons__WEBPACK_IMPORTED_MODULE_2__.A},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Weapons__WEBPACK_IMPORTED_MODULE_2__.A,{...args}),Example={render:Template,args:{weapon1MainId:76158,weapon1MainAffix:"Berserker",weapon1MainInfusion1Id:49432,weapon1MainSigil1Id:24615,weapon1OffId:86098,weapon1OffAffix:"Berserker",weapon1OffInfusionId:49432,weapon1OffSigilId:24868,weapon2MainType:"Greatsword",weapon2MainAffix:"Berserker",weapon2MainInfusion1Id:49432,weapon2MainSigil1Id:24615,weapon2MainInfusion2Id:49432,weapon2MainSigil2Id:24868}},TwoHanded={render:Template,args:{weapon1MainId:30689,weapon1MainAffix:"Berserker",weapon1MainInfusion1Id:49432,weapon1MainSigil1Id:24615,weapon1MainInfusion2Id:49432,weapon1MainSigil2Id:24868}},EmptyOffhand={render:Template,args:{weapon1MainId:76158,weapon1MainAffix:"Berserker",weapon1MainInfusion1Id:49432,weapon1MainSigil1Id:24615}},__namedExportsOrder=["Example","TwoHanded","EmptyOffhand"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    weapon1MainId: 76158,\n    weapon1MainAffix: 'Berserker',\n    weapon1MainInfusion1Id: 49432,\n    weapon1MainSigil1Id: 24615,\n    weapon1OffId: 86098,\n    weapon1OffAffix: 'Berserker',\n    weapon1OffInfusionId: 49432,\n    weapon1OffSigilId: 24868,\n    weapon2MainType: 'Greatsword',\n    weapon2MainAffix: 'Berserker',\n    weapon2MainInfusion1Id: 49432,\n    weapon2MainSigil1Id: 24615,\n    weapon2MainInfusion2Id: 49432,\n    weapon2MainSigil2Id: 24868\n  }\n}",...Example.parameters?.docs?.source}}},TwoHanded.parameters={...TwoHanded.parameters,docs:{...TwoHanded.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    weapon1MainId: 30689,\n    weapon1MainAffix: 'Berserker',\n    weapon1MainInfusion1Id: 49432,\n    weapon1MainSigil1Id: 24615,\n    weapon1MainInfusion2Id: 49432,\n    weapon1MainSigil2Id: 24868\n  }\n}",...TwoHanded.parameters?.docs?.source}}},EmptyOffhand.parameters={...EmptyOffhand.parameters,docs:{...EmptyOffhand.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    weapon1MainId: 76158,\n    weapon1MainAffix: 'Berserker',\n    weapon1MainInfusion1Id: 49432,\n    weapon1MainSigil1Id: 24615\n  }\n}",...EmptyOffhand.parameters?.docs?.source}}}}}]);
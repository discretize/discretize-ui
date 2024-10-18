"use strict";(self.webpackChunk_discretize_gw2_ui_new=self.webpackChunk_discretize_gw2_ui_new||[]).push([[473],{"./src/components/CommonEffect/CommonEffect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,Translated:()=>Translated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CommonEffect_stories});__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var i18n=__webpack_require__("./src/i18n/index.ts"),Effect=__webpack_require__("./src/components/Effect/Effect.tsx");const COMMON_EFFECTS={Agony:{de:"Qual"},Barrier:{de:"Barriere"},Blight:{de:"Verschandelung"},Exposed:{de:"Entblößt"},Invulnerability:{de:"Unverwundbarkeit"},"Reinforced Armor":{de:"Verstärkte Rüstung"},Revealed:{de:"Enthüllt"},"Rigorous Certainty":{de:"Strikte Gewissheit"},Stealth:{de:"Tarnung"},"Stun Break":{de:"Betäubungsbrecher"},Superspeed:{de:"Supergeschwindigkeit"},Unblockable:{de:"Kann nicht geblockt werden"}},COMMON_EFFECTS_DESCRIPTIONS={Agony:{en:"Deals damage every second; stacks intensity; reduces incoming healing and barrier application by 70% per stack; damage is reduced by agony resistance.",de:"Richtet jede Sekunde Schaden an; Intensität summiert sich; reduziert erhaltene Heilung und Anwendung von Barriere um 70% pro Stapel; Schaden wird durch Qual-Widerstand reduziert."},Barrier:{en:"Creates a health barrier that takes damage prior to the health bar.",de:"Erschafft eine Lebensbarriere die vor der Lebensanzeige Schaden nimmt."},Blight:{en:"Reduces your maximum health. Stacks intensity.",de:"Verringert Eure maximalen lebenspunkte. Stapelt Intensität."},Exposed:{en:"Takes additional damage.",de:"Erleidet zusätzlichen Schaden."},Invulnerability:{en:"Immune to conditions and damage.",de:"Immun gegen Zustände und Schäden."},"Reinforced Armor":{en:"Increases Health and Defense.",de:"Erhöht Lebenspunkte und Verteidigung."},Revealed:{en:"You cannot stealth",de:"Tarnung nicht möglich"},"Rigorous Certainty":{en:"+5 Agony Resistance\nThe next time you would be downed, instead heal 25% of your total health.",de:"+5 Qual-Widerstand\nWenn ihr das nächste Mal angeschlagen seid, werdet Ihr stattdessen um 25% Eurer maximalenLebenspunkte geheilt."},Stealth:{en:"Currently invisible. Ends if you deal damage.",de:"Derzeit unsichtbar. Endet, wenn Ihr Schaden zufügt."},"Stun Break":{en:"Breaks stun.",de:"Hebt Betäubung auf."},Superspeed:{en:"Movement speed is greatly increased.",de:"Bewegungsgeschwindigkeit ist deutlich erhöht."},Unblockable:{en:"Your attacks are unblockable",de:"Eure Angriffe können nicht geblockt werden."}};var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const CommonEffect=_ref=>{let{name:propsName,disableTooltip,disableText,disableLink,disableIcon,className,style}=_ref;const name="Mistlock Singularity"===propsName?"Rigorous Certainty":propsName,nameTranslated=(0,i18n.Bd)(COMMON_EFFECTS,name),descriptionTranslated=(0,i18n.Bd)(COMMON_EFFECTS_DESCRIPTIONS,name);return(0,jsx_runtime.jsx)(Effect.A,{type:"Common",name,displayName:nameTranslated,description:descriptionTranslated,disableTooltip,disableText,disableLink,disableIcon,className,style})},CommonEffect_CommonEffect=CommonEffect;try{CommonEffect.displayName="CommonEffect",CommonEffect.__docgenInfo={description:"",displayName:"CommonEffect",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Agony"'},{value:'"Barrier"'},{value:'"Blight"'},{value:'"Exposed"'},{value:'"Invulnerability"'},{value:'"Reinforced Armor"'},{value:'"Revealed"'},{value:'"Rigorous Certainty"'},{value:'"Stealth"'},{value:'"Stun Break"'},{value:'"Superspeed"'},{value:'"Unblockable"'},{value:'"Mistlock Singularity"'}]}},disableTooltip:{defaultValue:null,description:"",name:"disableTooltip",required:!1,type:{name:"boolean"}},disableText:{defaultValue:null,description:"",name:"disableText",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},disableIcon:{defaultValue:null,description:"",name:"disableIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CommonEffect/CommonEffect.tsx#CommonEffect"]={docgenInfo:CommonEffect.__docgenInfo,name:"CommonEffect",path:"src/components/CommonEffect/CommonEffect.tsx#CommonEffect"})}catch(__react_docgen_typescript_loader_error){}const CommonEffect_stories={title:"Components/CommonEffect",component:CommonEffect_CommonEffect,argTypes:{className:{control:!1}}},Simple={render:args=>(0,jsx_runtime.jsx)(CommonEffect_CommonEffect,{...args}),args:{name:"Agony"}};function Translated(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["This is an english effect: ",(0,jsx_runtime.jsx)(CommonEffect_CommonEffect,{name:"Agony"}),","," ",(0,jsx_runtime.jsx)(CommonEffect_CommonEffect,{name:"Barrier"}),(0,jsx_runtime.jsx)(i18n.SU,{value:"de",children:(0,jsx_runtime.jsxs)("p",{children:["This is a german effect:",(0,jsx_runtime.jsx)(CommonEffect_CommonEffect,{name:"Mistlock Singularity"}),","," ",(0,jsx_runtime.jsx)(CommonEffect_CommonEffect,{name:"Revealed"})]})})]})}const __namedExportsOrder=["Simple","Translated"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    name: 'Agony'\n  }\n}",...Simple.parameters?.docs?.source}}},Translated.parameters={...Translated.parameters,docs:{...Translated.parameters?.docs,source:{originalSource:'function Translated() {\n  return <>\n      This is an english effect: <CommonEffect name="Agony" />,{\' \'}\n      <CommonEffect name="Barrier" />\n      <APILanguageProvider value="de">\n        <p>\n          This is a german effect:\n          <CommonEffect name="Mistlock Singularity" />,{\' \'}\n          <CommonEffect name="Revealed" />\n        </p>\n      </APILanguageProvider>\n    </>;\n}',...Translated.parameters?.docs?.source}}}}}]);
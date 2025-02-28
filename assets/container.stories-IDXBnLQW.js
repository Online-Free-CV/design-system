import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as N}from"./index-BpvXyOxN.js";/* empty css                             */import{c as z}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var _=z({defaultClassName:"xsji8x1 xsji8x0",variantClassNames:{variant:{wrapper:"xsji8x2",flexWrap:"xsji8x3",row:"xsji8x4",column:"xsji8x5"},direction:{ltr:"xsji8x6",rtl:"xsji8x7"},justify:{start:"xsji8x8",center:"xsji8x9",end:"xsji8xa",between:"xsji8xb",around:"xsji8xc"},align:{start:"xsji8xd",center:"xsji8xe",end:"xsji8xf",stretch:"xsji8xg"},size:{full:"xsji8xh",half:"xsji8xi",auto:"xsji8xj"},gap:{none:"xsji8xk",small:"xsji8xl",medium:"xsji8xm",large:"xsji8xn"}},defaultVariants:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none"},compoundVariants:[]});const i=({variant:s,direction:j,justify:b,align:h,size:w,gap:C,children:V,className:k})=>e.jsx("div",{className:N(_({variant:s,direction:j,justify:b,align:h,size:w,gap:C}),k),children:V});try{i.displayName="Container",i.__docgenInfo={description:"",displayName:"Container",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"wrapper"'},{value:'"flexWrap"'},{value:'"column"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"half"'},{value:'"auto"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const E={title:"DesignSystem/OnlineFreeCV/Container",component:i,parameters:{},tags:["autodocs"],argTypes:{variant:{name:"Variant",control:"select",options:["wrapper","flexWrap","row","column"],table:{type:{summary:"wrapper | flexWrap | row | column"},defaultValue:{summary:"wrapper"}}},direction:{name:"Direction",control:"radio",options:["ltr","rtl"],table:{type:{summary:"ltr | rtl"},defaultValue:{summary:"ltr"}}},justify:{name:"Justify",control:"select",options:["start","center","end","between","around"],table:{type:{summary:"start | center | end | between | around"},defaultValue:{summary:"start"}}},align:{name:"Align",control:"select",options:["start","center","end","stretch"],table:{type:{summary:"start | center | end | stretch"},defaultValue:{summary:"stretch"}}},size:{control:"select",options:["full","half","auto"],description:"Defines how much space children take relative to the parent.",table:{type:{summary:"full | half | auto"},defaultValue:{summary:"auto"}}},gap:{control:"select",options:["none","small","medium","large"],description:"Sets gap spacing between children.",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}},className:{name:"ClassName",control:"text",description:"Custom className for additional styling (e.g., `vanilla-extract/css`).",table:{category:"Customization"}}}},a={args:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#e0e0e0",flex:1},children:"Item 1"}),e.jsx("div",{style:{padding:"10px",background:"#bdbdbd",flex:2},children:"Item 2"})]})}};a.storyName="Default Container";const n={args:{variant:"row",direction:"ltr",justify:"center",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#ff8a80"},children:"My Name is Liaqat"}),e.jsx("div",{style:{padding:"10px",background:"#ff5252"},children:"I am a software Engineer"})]})}};n.storyName="Row Layout";const t={args:{variant:"column",direction:"rtl",justify:"end",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#80deea"},children:"میرا نام لیاقت ہے۔"}),e.jsx("div",{style:{padding:"10px",background:"#4dd0e1"},children:"میں ایک سافٹ ویئر انجینئر ہوں۔"})]})}};t.storyName="Column Layout (RTL)";const r={args:{variant:"row",direction:"ltr",justify:"between",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#b2ff59",flex:1},children:"Start"}),e.jsx("div",{style:{padding:"10px",background:"#76ff03",flex:3},children:"End"})]})}};r.storyName="Justify Variants";var l,u,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "wrapper",
    direction: "ltr",
    justify: "start",
    align: "stretch",
    size: "auto",
    gap: "none",
    children: <>
        <div style={{
        padding: "10px",
        background: "#e0e0e0",
        flex: 1
      }}>Item 1</div>
        <div style={{
        padding: "10px",
        background: "#bdbdbd",
        flex: 2
      }}>Item 2</div>
      </>
  }
}`,...(o=(u=a.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "row",
    direction: "ltr",
    justify: "center",
    align: "center",
    size: "auto",
    gap: "none",
    children: <>
        <div style={{
        padding: "10px",
        background: "#ff8a80"
      }}>My Name is Liaqat</div>
        <div style={{
        padding: "10px",
        background: "#ff5252"
      }}>I am a software Engineer</div>
      </>
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,x,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "column",
    direction: "rtl",
    justify: "end",
    align: "center",
    size: "auto",
    gap: "none",
    children: <>
        <div style={{
        padding: "10px",
        background: "#80deea"
      }}>میرا نام لیاقت ہے۔</div>
        <div style={{
        padding: "10px",
        background: "#4dd0e1"
      }}>میں ایک سافٹ ویئر انجینئر ہوں۔</div>
      </>
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,y,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "row",
    direction: "ltr",
    justify: "between",
    align: "center",
    size: "auto",
    gap: "none",
    children: <>
        <div style={{
        padding: "10px",
        background: "#b2ff59",
        flex: 1
      }}>Start</div>
        <div style={{
        padding: "10px",
        background: "#76ff03",
        flex: 3
      }}>End</div>
      </>
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const F=["Default","RowLayout","ColumnLayout","JustifyVariants"];export{t as ColumnLayout,a as Default,r as JustifyVariants,n as RowLayout,F as __namedExportsOrder,E as default};

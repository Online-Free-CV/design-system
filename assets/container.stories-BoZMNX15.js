import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as k}from"./index-BpvXyOxN.js";/* empty css                             */import{c as z}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var N=z({defaultClassName:"_199ls7b1 _199ls7b0",variantClassNames:{variant:{wrapper:"_199ls7b2",flexWrap:"_199ls7b3",row:"_199ls7b4",column:"_199ls7b5"},direction:{ltr:"_199ls7b6",rtl:"_199ls7b7"},justify:{start:"_199ls7b8",center:"_199ls7b9",end:"_199ls7ba",between:"_199ls7bb",around:"_199ls7bc"},align:{start:"_199ls7bd",center:"_199ls7be",end:"_199ls7bf",stretch:"_199ls7bg"},size:{full:"_199ls7bh",half:"_199ls7bi",auto:"_199ls7bj"},gap:{none:"_199ls7bk",small:"_199ls7bl",medium:"_199ls7bm",large:"_199ls7bn"}},defaultVariants:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none"},compoundVariants:[]});const l=({variant:s,direction:x,justify:h,align:_,size:j,gap:C,children:w,className:V})=>e.jsx("div",{className:k(N({variant:s,direction:x,justify:h,align:_,size:j,gap:C}),V),children:w});try{l.displayName="Container",l.__docgenInfo={description:"",displayName:"Container",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"wrapper"'},{value:'"flexWrap"'},{value:'"column"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"half"'},{value:'"auto"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F={title:"DesignSystem/OnlineFreeCV/Container",component:l,parameters:{},tags:["autodocs"],argTypes:{variant:{name:"Variant",control:"select",options:["wrapper","flexWrap","row","column"],table:{type:{summary:"wrapper | flexWrap | row | column"},defaultValue:{summary:"wrapper"}}},direction:{name:"Direction",control:"radio",options:["ltr","rtl"],table:{type:{summary:"ltr | rtl"},defaultValue:{summary:"ltr"}}},justify:{name:"Justify",control:"select",options:["start","center","end","between","around"],table:{type:{summary:"start | center | end | between | around"},defaultValue:{summary:"start"}}},align:{name:"Align",control:"select",options:["start","center","end","stretch"],table:{type:{summary:"start | center | end | stretch"},defaultValue:{summary:"stretch"}}},size:{control:"select",options:["full","half","auto"],description:"Defines how much space children take relative to the parent.",table:{type:{summary:"full | half | auto"},defaultValue:{summary:"auto"}}},gap:{control:"select",options:["none","small","medium","large"],description:"Sets gap spacing between children.",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}},className:{name:"ClassName",control:"text",description:"Custom className for additional styling (e.g., `vanilla-extract/css`).",table:{category:"Customization"}}}},a={args:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#e0e0e0",flex:1},children:"Item 1"}),e.jsx("div",{style:{padding:"10px",background:"#bdbdbd",flex:2},children:"Item 2"})]})}};a.storyName="Default Container";const t={args:{variant:"row",direction:"ltr",justify:"center",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#ff8a80"},children:"My Name is Liaqat"}),e.jsx("div",{style:{padding:"10px",background:"#ff5252"},children:"I am a software Engineer"})]})}},n={args:{variant:"column",direction:"rtl",justify:"end",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#80deea"},children:"میرا نام لیاقت ہے۔"}),e.jsx("div",{style:{padding:"10px",background:"#4dd0e1"},children:"میں ایک سافٹ ویئر انجینئر ہوں۔"})]})}};n.storyName="Column Layout (RTL)";const r={args:{variant:"row",direction:"ltr",justify:"between",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#b2ff59",flex:1},children:"Start"}),e.jsx("div",{style:{padding:"10px",background:"#76ff03",flex:3},children:"End"})]})}};var i,u,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(u=a.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const R=["Default","RowLayout","ColumnLayout","JustifyVariants"];export{n as ColumnLayout,a as Default,r as JustifyVariants,t as RowLayout,R as __namedExportsOrder,F as default};

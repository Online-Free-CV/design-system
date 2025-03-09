import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as k}from"./index-BpvXyOxN.js";/* empty css                             */import{c as z}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var N=z({defaultClassName:"_199ls7b1 _199ls7b0",variantClassNames:{variant:{wrapper:"_199ls7b2",flexWrap:"_199ls7b3",row:"_199ls7b4",column:"_199ls7b5"},direction:{ltr:"_199ls7b6",rtl:"_199ls7b7"},justify:{start:"_199ls7b8",center:"_199ls7b9",end:"_199ls7ba",between:"_199ls7bb",around:"_199ls7bc"},align:{start:"_199ls7bd",center:"_199ls7be",end:"_199ls7bf",stretch:"_199ls7bg"},size:{full:"_199ls7bh",half:"_199ls7bi",auto:"_199ls7bj"},gap:{none:"_199ls7bk",small:"_199ls7bl",medium:"_199ls7bm",large:"_199ls7bn"},reverse:{row:"_199ls7bo",column:"_199ls7bp"}},defaultVariants:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",reverse:"row"},compoundVariants:[]});const s=({variant:l,direction:x,justify:h,align:w,size:_,gap:j,children:C,className:V})=>e.jsx("div",{className:k(N({variant:l,direction:x,justify:h,align:w,size:_,gap:j}),V),children:C});try{s.displayName="Container",s.__docgenInfo={description:"",displayName:"Container",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"wrapper"'},{value:'"flexWrap"'},{value:'"column"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"half"'},{value:'"auto"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const E={title:"DesignSystem/OnlineFreeCV/Container",component:s,parameters:{},tags:["autodocs"],argTypes:{variant:{name:"Variant",control:"select",options:["wrapper","flexWrap","row","column"],table:{type:{summary:"wrapper | flexWrap | row | column"},defaultValue:{summary:"wrapper"}}},direction:{name:"Direction",control:"radio",options:["ltr","rtl"],table:{type:{summary:"ltr | rtl"},defaultValue:{summary:"ltr"}}},justify:{name:"Justify",control:"select",options:["start","center","end","between","around"],table:{type:{summary:"start | center | end | between | around"},defaultValue:{summary:"start"}}},align:{name:"Align",control:"select",options:["start","center","end","stretch"],table:{type:{summary:"start | center | end | stretch"},defaultValue:{summary:"stretch"}}},size:{control:"select",options:["full","half","auto"],description:"Defines how much space children take relative to the parent.",table:{type:{summary:"full | half | auto"},defaultValue:{summary:"auto"}}},gap:{control:"select",options:["none","small","medium","large"],description:"Sets gap spacing between children.",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}},reverse:{control:"select",options:["row","column"],description:"Reverses the order of children",table:{type:{summary:"row | column"},defaultValue:{summary:"row"}}},className:{name:"ClassName",control:"text",description:"Custom className for additional styling (e.g., `vanilla-extract/css`).",table:{category:"Customization"}}}},a={args:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",reverse:"row",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#e0e0e0",flex:1},children:"Item 1"}),e.jsx("div",{style:{padding:"10px",background:"#bdbdbd",flex:2},children:"Item 2"})]})}};a.storyName="Default Container";const r={args:{variant:"row",direction:"ltr",justify:"center",align:"center",size:"auto",gap:"none",reverse:"row",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#ff8a80"},children:"My Name is Liaqat"}),e.jsx("div",{style:{padding:"10px",background:"#ff5252"},children:"I am a software Engineer"})]})}},n={args:{variant:"column",direction:"rtl",justify:"end",align:"center",size:"auto",gap:"none",reverse:"column",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#80deea"},children:"میرا نام لیاقت ہے۔"}),e.jsx("div",{style:{padding:"10px",background:"#4dd0e1"},children:"میں ایک سافٹ ویئر انجینئر ہوں۔"})]})}};n.storyName="Column Layout (RTL)";const t={args:{variant:"row",direction:"ltr",justify:"between",align:"center",size:"auto",gap:"none",reverse:"row",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#b2ff59",flex:1},children:"Start"}),e.jsx("div",{style:{padding:"10px",background:"#76ff03",flex:3},children:"End"})]})}};var i,u,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "wrapper",
    direction: "ltr",
    justify: "start",
    align: "stretch",
    size: "auto",
    gap: "none",
    reverse: "row",
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
}`,...(o=(u=a.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "row",
    direction: "ltr",
    justify: "center",
    align: "center",
    size: "auto",
    gap: "none",
    reverse: "row",
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "column",
    direction: "rtl",
    justify: "end",
    align: "center",
    size: "auto",
    gap: "none",
    reverse: "column",
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "row",
    direction: "ltr",
    justify: "between",
    align: "center",
    size: "auto",
    gap: "none",
    reverse: "row",
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
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const F=["Default","RowLayout","ColumnLayout","JustifyVariants"];export{n as ColumnLayout,a as Default,t as JustifyVariants,r as RowLayout,F as __namedExportsOrder,E as default};

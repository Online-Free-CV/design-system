import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as k}from"./index-BpvXyOxN.js";/* empty css                             */import{c as z,T as a}from"./index-DdxXjhk1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var N=z({defaultClassName:"_199ls7b1 _199ls7b0",variantClassNames:{variant:{wrapper:"_199ls7b2",flexWrap:"_199ls7b3",row:"_199ls7b4",column:"_199ls7b5"},direction:{ltr:"_199ls7b6",rtl:"_199ls7b7"},justify:{start:"_199ls7b8",center:"_199ls7b9",end:"_199ls7ba",between:"_199ls7bb",around:"_199ls7bc"},align:{start:"_199ls7bd",center:"_199ls7be",end:"_199ls7bf",stretch:"_199ls7bg"},size:{full:"_199ls7bh",half:"_199ls7bi",auto:"_199ls7bj"},gap:{none:"_199ls7bk",small:"_199ls7bl",medium:"_199ls7bm",large:"_199ls7bn"}},defaultVariants:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none"},compoundVariants:[]});const s=({variant:i,direction:h,justify:j,align:_,size:C,gap:w,children:T,className:V})=>e.jsx("div",{className:k(N({variant:i,direction:h,justify:j,align:_,size:C,gap:w}),V),children:T});try{s.displayName="Container",s.__docgenInfo={description:"",displayName:"Container",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"wrapper"'},{value:'"flexWrap"'},{value:'"row"'},{value:'"column"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"half"'},{value:'"auto"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F={title:"DesignSystem/OnlineFreeCV/Container",component:s,parameters:{},tags:["autodocs"],argTypes:{variant:{name:"Variant",control:"select",options:["wrapper","flexWrap","row","column"],table:{type:{summary:"wrapper | flexWrap | row | column"},defaultValue:{summary:"wrapper"}}},direction:{name:"Direction",control:"radio",options:["ltr","rtl"],table:{type:{summary:"ltr | rtl"},defaultValue:{summary:"ltr"}}},justify:{name:"Justify",control:"select",options:["start","center","end","between","around"],table:{type:{summary:"start | center | end | between | around"},defaultValue:{summary:"start"}}},align:{name:"Align",control:"select",options:["start","center","end","stretch"],table:{type:{summary:"start | center | end | stretch"},defaultValue:{summary:"stretch"}}},size:{control:"select",options:["full","half","auto"],description:"Defines how much space children take relative to the parent.",table:{type:{summary:"full | half | auto"},defaultValue:{summary:"auto"}}},gap:{control:"select",options:["none","small","medium","large"],description:"Sets gap spacing between children.",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}},className:{name:"ClassName",control:"text",description:"Custom className for additional styling (e.g., `vanilla-extract/css`).",table:{category:"Customization"}}}},n={args:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#e0e0e0",flex:1},children:e.jsx(a,{variant:"display",children:"Item 1"})}),e.jsx("div",{style:{padding:"10px",background:"#bdbdbd",flex:2},children:e.jsx(a,{variant:"display",children:"Item 2"})})]})}};n.storyName="Default Container";const r={args:{variant:"row",direction:"ltr",justify:"center",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#ff8a80"},children:e.jsx(a,{variant:"display",children:"My Name is Liaqat"})}),e.jsx("div",{style:{padding:"10px",background:"#ff5252"},children:e.jsx(a,{variant:"display",children:"I am a software Engineer"})})]})}},t={args:{variant:"column",direction:"rtl",justify:"end",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#80deea"},children:e.jsx(a,{variant:"display",children:"میرا نام لیاقت ہے۔"})}),e.jsx("div",{style:{padding:"10px",background:"#4dd0e1"},children:e.jsx(a,{variant:"display",children:"میں ایک سافٹ ویئر انجینئر ہوں۔"})})]})}};t.storyName="Column Layout (RTL)";const l={args:{variant:"row",direction:"ltr",justify:"between",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#b2ff59",flex:1},children:e.jsx(a,{variant:"display",children:"Start"})}),e.jsx("div",{style:{padding:"10px",background:"#76ff03",flex:3},children:e.jsx(a,{variant:"display",children:"End"})})]})}};var u,d,o;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      }}><Text variant="display">Item 1
        </Text></div>
        <div style={{
        padding: "10px",
        background: "#bdbdbd",
        flex: 2
      }}><Text variant="display">Item 2
        </Text></div>
      </>
  }
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      }}><Text variant="display">My Name is Liaqat
        </Text></div>
        <div style={{
        padding: "10px",
        background: "#ff5252"
      }}><Text variant="display">I am a software Engineer
        </Text></div>
      </>
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      }}><Text variant="display">میرا نام لیاقت ہے۔
        </Text></div>
        <div style={{
        padding: "10px",
        background: "#4dd0e1"
      }}><Text variant="display">میں ایک سافٹ ویئر انجینئر ہوں۔
        </Text></div>
      </>
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      }}><Text variant="display">Start
        </Text></div>
        <div style={{
        padding: "10px",
        background: "#76ff03",
        flex: 3
      }}><Text variant="display">End
        </Text></div>
      </>
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const R=["Default","RowLayout","ColumnLayout","JustifyVariants"];export{t as ColumnLayout,n as Default,l as JustifyVariants,r as RowLayout,R as __namedExportsOrder,F as default};

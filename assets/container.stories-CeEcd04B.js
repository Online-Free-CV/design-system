import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{C as x}from"./index-Dnm5pzRH.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpvXyOxN.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";const V={title:"DesignSystem/OnlineFreeCV/Image",component:x,parameters:{},tags:["autodocs"],argTypes:{variant:{name:"Variant",control:"select",options:["wrapper","flexWrap","row","column"],table:{type:{summary:"wrapper | flexWrap | row | column"},defaultValue:{summary:"wrapper"}}},direction:{name:"Direction",control:"radio",options:["ltr","rtl"],table:{type:{summary:"ltr | rtl"},defaultValue:{summary:"ltr"}}},justify:{name:"Justify",control:"select",options:["start","center","end","between","around"],table:{type:{summary:"start | center | end | between | around"},defaultValue:{summary:"start"}}},align:{name:"Align",control:"select",options:["start","center","end","stretch"],table:{type:{summary:"start | center | end | stretch"},defaultValue:{summary:"stretch"}}},size:{control:"select",options:["full","half","auto"],description:"Defines how much space children take relative to the parent.",table:{type:{summary:"full | half | auto"},defaultValue:{summary:"auto"}}},gap:{control:"select",options:["none","small","medium","large"],description:"Sets gap spacing between children.",table:{type:{summary:"none | small | medium | large"},defaultValue:{summary:"none"}}},className:{name:"ClassName",control:"text",description:"Custom className for additional styling (e.g., `vanilla-extract/css`).",table:{category:"Customization"}}}},n={args:{variant:"wrapper",direction:"ltr",justify:"start",align:"stretch",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#e0e0e0",flex:1},children:"Item 1"}),e.jsx("div",{style:{padding:"10px",background:"#bdbdbd",flex:2},children:"Item 2"})]})}};n.storyName="Default Container";const a={args:{variant:"row",direction:"ltr",justify:"center",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#ff8a80"},children:"My Name is Liaqat"}),e.jsx("div",{style:{padding:"10px",background:"#ff5252"},children:"I am a software Engineer"})]})}};a.storyName="Row Layout";const t={args:{variant:"column",direction:"rtl",justify:"end",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#80deea"},children:"میرا نام لیاقت ہے۔"}),e.jsx("div",{style:{padding:"10px",background:"#4dd0e1"},children:"میں ایک سافٹ ویئر انجینئر ہوں۔"})]})}};t.storyName="Column Layout (RTL)";const r={args:{variant:"row",direction:"ltr",justify:"between",align:"center",size:"auto",gap:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",background:"#b2ff59",flex:1},children:"Start"}),e.jsx("div",{style:{padding:"10px",background:"#76ff03",flex:3},children:"End"})]})}};r.storyName="Justify Variants";var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const z=["Default","RowLayout","ColumnLayout","JustifyVariants"];export{t as ColumnLayout,n as Default,r as JustifyVariants,a as RowLayout,z as __namedExportsOrder,V as default};

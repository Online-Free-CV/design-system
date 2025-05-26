import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{w as ee,u as te,g as h,c as $,a as D,b as s,d as C}from"./EditableField-aMi7lqfG.js";import{r as E}from"./index-BwDkhjyp.js";/* empty css                             */import{E as ne}from"./index-DjGXLp60.js";import{c as O}from"./index-BpvXyOxN.js";import{T as ae}from"./index-B8AQXhD0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";const ie=()=>e.jsx(e.Fragment,{}),V=ee(ie);try{V.displayName="Appform",V.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}var se="_14lk4sg3",re="_14lk4sg4",v={error:"_14lk4sg5"},j="_14lk4sg6",A="_14lk4sg7",P="_14lk4sg8 _14lk4sg7",le="_14lk4sg9 _14lk4sg7",de="_14lk4sga",oe="_1rkp4c1",ce="_1rkp4c2",pe="_1rkp4c3";const w=({title:d,children:o,className:_,titleFontStyle:r,rightContent:y})=>e.jsxs("section",{className:O(ce,_),children:[e.jsxs("div",{className:oe,children:[e.jsxs("div",{className:O(pe,r),children:[e.jsx(ae,{variant:"h1",children:d}),e.jsx("span",{})]}),y&&e.jsx("div",{children:y})]}),o]});try{w.displayName="Section",w.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}function ue(){return Date.now().toString()+Math.random().toString(36).substring(2)}function q({sectionTitle:d,fields:o,defaultItem:_,name:r,onSave:y}){const{values:U,setFieldValue:W,validateForm:L,setTouched:H,errors:x}=te(),b=U[r],[c,R]=E.useState([]);E.useEffect(()=>{b!=null&&b.length&&R(b)},[b]);const g=t=>{R(t),W(r,t)},f=(t,i,a)=>{const n=[...c];n[t]={...n[t],[i]:a},g(n)},G=t=>{const i=[...c];i[t].isPresent=!i[t].isPresent,i[t].isPresent&&(i[t].endDate=""),g(i)},K=()=>{const t={..._,isEdit:!0,id:ue()},i=[...c,t];g(i)},z=t=>{if(c.length===1)return;const i=[...c];i.splice(t,1),g(i)},Q=t=>{const i=[...c];i[t].isEdit=!1,g(i),y==null||y(i)},X=(t,i)=>{const a=c.map(n=>n.id===t?{...n,isEdit:i}:n);g(a)},T=E.useMemo(()=>c.filter(t=>!t.isEdit),[c]),Y=E.useMemo(()=>c.filter(t=>t.isEdit),[c]);return e.jsxs(w,{title:d,rightContent:e.jsx("button",{onClick:K,className:se,children:"+ Add"}),children:[T.length>0&&e.jsx(ne,{items:T,onEdit:t=>X(T[t].id,!0)}),Y.map((t,i)=>{const a=c.findIndex(n=>n.id===t.id);return e.jsxs("div",{className:re,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",a+1]}),c.length>1&&e.jsx("button",{onClick:()=>z(a),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),o.map(({key:n,label:S,type:u})=>{const N=t[n];if(n==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${r}.[${a}].${n}`,checked:t.isPresent||!1,onChange:()=>G(a)}),"I am currently working in this role"]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsxs("div",{className:h(x,`${r}.[${a}].${n}`)?v.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:j,children:"Start Date"}),e.jsx("input",{type:"month",name:`${r}.[${a}].${n}`,className:P,value:t.startDate||"",onChange:l=>f(a,"startDate",l.target.value)})]}),e.jsxs("div",{className:h(x,`${r}.[${a}].${n}`)?v.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:j,children:"End Date"}),e.jsx("input",{type:"month",className:P,name:`${r}.[${a}].${n}`,value:t.isPresent?"":t.endDate||"",disabled:t.isPresent,onChange:l=>f(a,"endDate",l.target.value)})]})]})]},"date-block");if(n==="endDate")return null;if(u==="textarea")return e.jsxs("div",{className:h(x,`${r}.[${a}].${n}`)?v.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:j,children:S}),e.jsx("textarea",{className:le,name:`${r}.[${a}].${n}`,value:N||"",onChange:l=>f(a,n,l.target.value)})]},String(n));if(u==="tags"){const l=t[n]||[],I=p=>{if(p.key==="Enter"){p.preventDefault();const m=p.currentTarget.value.trim();if(m&&!l.includes(m)){const F=[...l,m];f(a,n,F),p.currentTarget.value=""}}},Z=p=>{const m=l.filter(F=>F!==p);f(a,n,m)};return e.jsxs("div",{className:h(x,`${r}.[${a}].${n}`)?v.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:j,children:S}),e.jsx("input",{type:"text",onKeyDown:I,placeholder:"Type and press Enter",className:A}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:l.map((p,m)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[p,e.jsx("button",{type:"button",onClick:()=>Z(p),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},m))})]},String(n))}return e.jsxs("div",{className:h(x,`${r}.[${a}].${n}`)?v.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:j,children:S}),e.jsx("input",{type:u==="date"?"month":u,name:`${r}.[${a}].${n}`,className:u==="date"?P:A,value:N||"",onChange:l=>f(a,n,l.target.value)})]},String(n))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:de,onClick:async()=>{const n=Object.keys(c[a]).reduce((l,I)=>(l[`${r}[${a}].${I}`]=!0,l),{});H(n,!1);const S=await L(),u=h(S,`${r}[${a}]`);u&&Object.keys(u).length>0||Q(a)},children:"Save"})})]},t.id)})]})}try{q.displayName="EditableSection",q.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const me=$().shape({title:s().required("Title is required"),company:s().required("Company is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([d],o)=>d===!1?o.required("End Date is required"):o.notRequired()),skills:D().of(s()).min(1,"At least one skill required"),description:s().required("Description is required")}),ye=$().shape({title:s().required("Title is required"),university:s().required("University is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([d],o)=>d===!1?o.required("End Date is required"):o.notRequired()),tags:D().of(s()).min(1,"At least one tag required"),description:s().required("Description is required")}),ge=$().shape({title:s().required("Title is required"),description:s().required("Description is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([d],o)=>d===!1?o.required("End Date is required"):o.notRequired()),skills:D().of(s()).min(1,"At least one skill required")}),fe=$().shape({firstName:s().required("First Name is required"),experiences:D().of(me),educations:D().of(ye),projects:D().of(ge)}),Ee={title:"DesignSystem/OnlineFreeCV/Form",component:V,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},k={args:{initialValues:{experiences:[{title:"",company:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!1,isEdit:!0,id:"1"}],educations:[{title:"",university:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!1,isEdit:!0,id:"1"}],projects:[{title:"",description:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!1,isEdit:!0,id:"1"}]},onSubmit:(d,o)=>{alert(`Form submitted: ${JSON.stringify(d)}`),o.setSubmitting(!1)},validationSchema:fe,children:e.jsxs(e.Fragment,{children:[e.jsx(q,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,skills:[],id:""}}),e.jsx(q,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Job Title",type:"text"},{key:"university",label:"University",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[]}}),e.jsx(q,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Job Title",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[]}})]})}};k.storyName="Experience Form";var M,J,B;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    initialValues: {
      // Add appropriate fields here based on MyFormValues type
      experiences: [{
        title: "",
        company: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        description: "",
        isPresent: false,
        isEdit: true,
        id: "1"
      }],
      educations: [{
        title: "",
        university: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        description: "",
        isPresent: false,
        isEdit: true,
        id: "1"
      }],
      projects: [{
        title: "",
        description: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        isPresent: false,
        isEdit: true,
        id: "1"
      }]
    },
    onSubmit: (values, actions) => {
      alert(\`Form submitted: \${JSON.stringify(values)}\`);
      actions.setSubmitting(false); // Example action
    },
    validationSchema: validationSchema,
    children: <>
      <EditableSection sectionTitle="Experience" name="experiences" fields={[{
        key: "title",
        label: "Job Title",
        type: "text"
      }, {
        key: "company",
        label: "Company",
        type: "text"
      }, {
        key: "description",
        label: "Description",
        type: "textarea"
      }, {
        key: "startDate",
        label: "Start Date",
        type: "date"
      }, {
        key: "endDate",
        label: "End Date",
        type: "date"
      }, {
        key: "skills",
        label: "Skills",
        type: "tags"
      }]} defaultItem={{
        title: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        isPresent: true,
        isEdit: true,
        skills: [],
        id: ""
      }} />
       <EditableSection sectionTitle="Education" name="educations" fields={[{
        key: "title",
        label: "Job Title",
        type: "text"
      }, {
        key: "university",
        label: "University",
        type: "text"
      }, {
        key: "location",
        label: "Location",
        type: "text"
      }, {
        key: "description",
        label: "Description",
        type: "textarea"
      }, {
        key: "startDate",
        label: "Start Date",
        type: "date"
      }, {
        key: "endDate",
        label: "End Date",
        type: "date"
      }, {
        key: "tags",
        label: "Tags",
        type: "tags"
      }]} defaultItem={{
        title: '',
        university: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        tags: []
      }} />

      <EditableSection sectionTitle="Projects" name="projects" fields={[{
        key: "title",
        label: "Job Title",
        type: "text"
      }, {
        key: "description",
        label: "Description",
        type: "textarea"
      }, {
        key: "startDate",
        label: "Start Date",
        type: "date"
      }, {
        key: "endDate",
        label: "End Date",
        type: "date"
      }, {
        key: "skills",
        label: "Skills",
        type: "tags"
      }]} defaultItem={{
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        skills: []
      }} />
    </>
  }
}`,...(B=(J=k.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};const $e=["Default"];export{k as Default,$e as __namedExportsOrder,Ee as default};

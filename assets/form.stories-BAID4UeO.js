import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as ee,g as D,w as te,c as $,a as b,b as s,d as C}from"./EditableField-B9QxoAuC.js";import{r as k}from"./index-BwDkhjyp.js";import{E as ne}from"./index-Bdh-XJxi.js";import{c as T}from"./index-BpvXyOxN.js";/* empty css                             */import{T as ae}from"./index-B8AQXhD0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var ie="_1rkp4c1",se="_1rkp4c2",re="_1rkp4c3";const P=({title:l,children:d,className:N,titleFontStyle:i,rightContent:y})=>e.jsxs("section",{className:T(se,N),children:[e.jsxs("div",{className:ie,children:[e.jsxs("div",{className:T(re,i),children:[e.jsx(ae,{variant:"h3",children:l}),e.jsx("span",{})]}),y&&e.jsx("div",{children:y})]}),d]});try{P.displayName="Section",P.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}var le="_14lk4sg3",de="_14lk4sg4",j={error:"_14lk4sg5"},q="_14lk4sg6",A="_14lk4sg7",F="_14lk4sg8 _14lk4sg7",oe="_14lk4sg9 _14lk4sg7",ce="_14lk4sga",ue="_14lk4sgc",M="_14lk4sgd";function pe(){return Date.now().toString()+Math.random().toString(36).substring(2)}function _({sectionTitle:l,fields:d,defaultItem:N,name:i,onSave:y}){const{values:O,setFieldValue:W,validateForm:L,setTouched:G,errors:x}=ee(),v=k.useMemo(()=>O[i]||[],[O,i]),[r,R]=k.useState([]);k.useEffect(()=>{v!=null&&v.length&&R(v)},[v]);const g=n=>{R(n),W(i,n)},f=(n,t,a)=>{const o=[...r];o[n]={...o[n],[t]:a},g(o)},H=n=>{const t=[...r];t[n].isPresent=!t[n].isPresent,t[n].isPresent&&(t[n].endDate=""),g(t)},K=()=>{const n={...N,isEdit:!0,id:pe()},t=[...r,n];g(t)},z=n=>{if(r.length===1)return;const t=[...r];t.splice(n,1),g(t)},Q=n=>{const t=[...r];t[n].isEdit=!1,g(t),y==null||y(t)},X=(n,t)=>{const a=r.map(o=>o.id===n?{...o,isEdit:t}:o);g(a)},I=k.useMemo(()=>r.filter(n=>!n.isEdit),[r]),Y=k.useMemo(()=>r.filter(n=>n.isEdit),[r]);return e.jsxs(P,{title:l,rightContent:e.jsx("button",{onClick:K,className:le,children:"Add"}),children:[I.length>0&&e.jsx(ne,{items:I,onEdit:n=>X(I[n].id,!0)}),Y.map(n=>{const t=r.findIndex(a=>a.id===n.id);return e.jsxs("div",{className:de,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),r.length>1&&e.jsx("button",{onClick:()=>z(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),d.map(({key:a,label:o,type:m})=>{const S=n[a];if(a==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${i}.[${t}].${a}`,checked:n.isPresent||!1,onChange:()=>H(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:ue,children:[e.jsxs("div",{className:T(M,D(x,`${i}.[${t}].${a}`)?j.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:q,children:"Start Date"}),e.jsx("input",{type:"month",name:`${i}.[${t}].${a}`,className:F,value:n.startDate||"",onChange:c=>f(t,"startDate",c.target.value)})]}),e.jsxs("div",{className:T(M,D(x,`${i}.[${t}].${a}`)?j.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:q,children:"End Date"}),e.jsx("input",{type:"month",className:F,name:`${i}.[${t}].${a}`,value:n.isPresent?"":n.endDate||"",disabled:n.isPresent,onChange:c=>f(t,"endDate",c.target.value)})]})]})]},"date-block");if(a==="endDate")return null;if(m==="textarea")return e.jsxs("div",{className:D(x,`${i}.[${t}].${a}`)?j.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:q,children:o}),e.jsx("textarea",{className:oe,name:`${i}.[${t}].${a}`,value:S||"",onChange:c=>f(t,a,c.target.value)})]},String(a));if(m==="tags"){const c=n[a]||[],V=u=>{if(u.key==="Enter"){u.preventDefault();const h=u.currentTarget.value.split(",").map(p=>p.trim()).filter(p=>p&&!c.includes(p));if(h.length>0){const p=[...c,...h];f(t,a,p),u.currentTarget.value=""}}},Z=u=>{const h=c.filter(p=>p!==u);f(t,a,h)};return e.jsxs("div",{className:D(x,`${i}.[${t}].${a}`)?j.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:q,children:o}),e.jsx("input",{type:"text",onKeyDown:V,title:"Type and press Enter",placeholder:"Type and press Enter",className:A}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:c.map((u,h)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u,e.jsx("button",{type:"button",onClick:()=>Z(u),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},h))})]},String(a))}return e.jsxs("div",{className:D(x,`${i}.[${t}].${a}`)?j.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:q,children:o}),e.jsx("input",{type:m==="date"?"month":m,name:`${i}.[${t}].${a}`,className:m==="date"?F:A,value:S||"",onChange:c=>f(t,a,c.target.value)})]},String(a))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:ce,onClick:async()=>{const a={};Object.keys(r[t]).forEach(V=>{a[V]=!0});const o={[i]:Array(r.length).fill({})};o[i][t]=a,G(o,!1);const m=await L(),S=D(m,`${i}[${t}]`);S&&Object.keys(S).length>0||Q(t)},children:"Save"})})]},n.id)})]})}try{_.displayName="EditableSection",_.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const me=()=>e.jsx(e.Fragment,{}),w=te(me);try{w.displayName="Appform",w.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const ye=$().shape({title:s().required("Title is required"),company:s().required("Company is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),skills:b().of(s()).min(1,"At least one skill required"),description:s().required("Description is required")}),ge=$().shape({title:s().required("Title is required"),university:s().required("University is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),tags:b().of(s()).min(1,"At least one tag required"),description:s().required("Description is required")}),fe=$().shape({title:s().required("Title is required"),description:s().required("Description is required"),startDate:s().required("Start Date is required"),isPresent:C(),endDate:s().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),skills:b().of(s()).min(1,"At least one skill required")}),he=$().shape({firstName:s().required("First Name is required"),experiences:b().of(ye),educations:b().of(ge),projects:b().of(fe)}),_e={title:"DesignSystem/OnlineFreeCV/Form",component:w,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},E={args:{initialValues:{experiences:[{title:"",company:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!0,isEdit:!0,id:"1"}],educations:[{title:"",university:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"",description:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,isEdit:!0,id:"1"}]},onSubmit:(l,d)=>{alert(`Form submitted: ${JSON.stringify(l)}`),d.setSubmitting(!1)},validationSchema:he,children:e.jsxs(e.Fragment,{children:[e.jsx(_,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,skills:[],id:""}}),e.jsx(_,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Job Title",type:"text"},{key:"university",label:"University",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[]}}),e.jsx(_,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Job Title",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[]}})]})}};E.storyName="Experience Form";var J,B,U;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    initialValues: {
      // Add appropriate fields here based on MyFormValues type
      experiences: [{
        title: "",
        company: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        description: "",
        isPresent: true,
        isEdit: true,
        id: "1"
      }],
      educations: [{
        title: "",
        university: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        description: "",
        isPresent: true,
        isEdit: true,
        id: "1"
      }],
      projects: [{
        title: "",
        description: "",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        isPresent: true,
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
}`,...(U=(B=E.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const Te=["Default"];export{E as Default,Te as __namedExportsOrder,_e as default};

import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as Z,g as h,w as ee,c as E,a as D,b as i,d as w}from"./EditableField-CohAXtId.js";import{r as q}from"./index-BwDkhjyp.js";import{E as te}from"./index-DjGXLp60.js";import{c as R}from"./index-BpvXyOxN.js";/* empty css                             */import{T as ne}from"./index-B8AQXhD0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var ae="_1rkp4c1",ie="_1rkp4c2",re="_1rkp4c3";const P=({title:l,children:d,className:$,titleFontStyle:r,rightContent:y})=>e.jsxs("section",{className:R(ie,$),children:[e.jsxs("div",{className:ae,children:[e.jsxs("div",{className:R(re,r),children:[e.jsx(ne,{variant:"h1",children:l}),e.jsx("span",{})]}),y&&e.jsx("div",{children:y})]}),d]});try{P.displayName="Section",P.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}var se="_14lk4sg3",le="_14lk4sg4",S={error:"_14lk4sg5"},v="_14lk4sg6",O="_14lk4sg7",F="_14lk4sg8 _14lk4sg7",de="_14lk4sg9 _14lk4sg7",oe="_14lk4sga";function ce(){return Date.now().toString()+Math.random().toString(36).substring(2)}function k({sectionTitle:l,fields:d,defaultItem:$,name:r,onSave:y}){const{values:B,setFieldValue:U,validateForm:W,setTouched:L,errors:x}=Z(),b=B[r]||[],[o,C]=q.useState([]);q.useEffect(()=>{b!=null&&b.length&&C(b)},[b]);const g=n=>{C(n),U(r,n)},f=(n,t,a)=>{const c=[...o];c[n]={...c[n],[t]:a},g(c)},H=n=>{const t=[...o];t[n].isPresent=!t[n].isPresent,t[n].isPresent&&(t[n].endDate=""),g(t)},G=()=>{const n={...$,isEdit:!0,id:ce()},t=[...o,n];g(t)},K=n=>{if(o.length===1)return;const t=[...o];t.splice(n,1),g(t)},z=n=>{const t=[...o];t[n].isEdit=!1,g(t),y==null||y(t)},Q=(n,t)=>{const a=o.map(c=>c.id===n?{...c,isEdit:t}:c);g(a)},_=q.useMemo(()=>o.filter(n=>!n.isEdit),[o]),X=q.useMemo(()=>o.filter(n=>n.isEdit),[o]);return e.jsxs(P,{title:l,rightContent:e.jsx("button",{onClick:G,className:se,children:"+ Add"}),children:[_.length>0&&e.jsx(te,{items:_,onEdit:n=>Q(_[n].id,!0)}),X.map(n=>{const t=o.findIndex(a=>a.id===n.id);return e.jsxs("div",{className:le,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),o.length>1&&e.jsx("button",{onClick:()=>K(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),d.map(({key:a,label:c,type:p})=>{const T=n[a];if(a==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${r}.[${t}].${a}`,checked:n.isPresent||!1,onChange:()=>H(t)}),"I am currently working in this role"]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsxs("div",{className:h(x,`${r}.[${t}].${a}`)?S.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:v,children:"Start Date"}),e.jsx("input",{type:"month",name:`${r}.[${t}].${a}`,className:F,value:n.startDate||"",onChange:s=>f(t,"startDate",s.target.value)})]}),e.jsxs("div",{className:h(x,`${r}.[${t}].${a}`)?S.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:v,children:"End Date"}),e.jsx("input",{type:"month",className:F,name:`${r}.[${t}].${a}`,value:n.isPresent?"":n.endDate||"",disabled:n.isPresent,onChange:s=>f(t,"endDate",s.target.value)})]})]})]},"date-block");if(a==="endDate")return null;if(p==="textarea")return e.jsxs("div",{className:h(x,`${r}.[${t}].${a}`)?S.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:v,children:c}),e.jsx("textarea",{className:de,name:`${r}.[${t}].${a}`,value:T||"",onChange:s=>f(t,a,s.target.value)})]},String(a));if(p==="tags"){const s=n[a]||[],N=u=>{if(u.key==="Enter"){u.preventDefault();const m=u.currentTarget.value.trim();if(m&&!s.includes(m)){const I=[...s,m];f(t,a,I),u.currentTarget.value=""}}},Y=u=>{const m=s.filter(I=>I!==u);f(t,a,m)};return e.jsxs("div",{className:h(x,`${r}.[${t}].${a}`)?S.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:v,children:c}),e.jsx("input",{type:"text",onKeyDown:N,placeholder:"Type and press Enter",className:O}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:s.map((u,m)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[u,e.jsx("button",{type:"button",onClick:()=>Y(u),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},m))})]},String(a))}return e.jsxs("div",{className:h(x,`${r}.[${t}].${a}`)?S.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:v,children:c}),e.jsx("input",{type:p==="date"?"month":p,name:`${r}.[${t}].${a}`,className:p==="date"?F:O,value:T||"",onChange:s=>f(t,a,s.target.value)})]},String(a))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:oe,onClick:async()=>{const a=Object.keys(o[t]).reduce((s,N)=>(s[`${r}[${t}].${N}`]=!0,s),{});L(a,!1);const c=await W(),p=h(c,`${r}[${t}]`);p&&Object.keys(p).length>0||z(t)},children:"Save"})})]},n.id)})]})}try{k.displayName="EditableSection",k.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const ue=()=>e.jsx(e.Fragment,{}),V=ee(ue);try{V.displayName="Appform",V.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const pe=E().shape({title:i().required("Title is required"),company:i().required("Company is required"),startDate:i().required("Start Date is required"),isPresent:w(),endDate:i().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),skills:D().of(i()).min(1,"At least one skill required"),description:i().required("Description is required")}),me=E().shape({title:i().required("Title is required"),university:i().required("University is required"),startDate:i().required("Start Date is required"),isPresent:w(),endDate:i().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),tags:D().of(i()).min(1,"At least one tag required"),description:i().required("Description is required")}),ye=E().shape({title:i().required("Title is required"),description:i().required("Description is required"),startDate:i().required("Start Date is required"),isPresent:w(),endDate:i().when("isPresent",([l],d)=>l===!1?d.required("End Date is required"):d.notRequired()),skills:D().of(i()).min(1,"At least one skill required")}),ge=E().shape({firstName:i().required("First Name is required"),experiences:D().of(pe),educations:D().of(me),projects:D().of(ye)}),qe={title:"DesignSystem/OnlineFreeCV/Form",component:V,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},j={args:{initialValues:{experiences:[{title:"",company:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!0,isEdit:!0,id:"1"}],educations:[{title:"",university:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"",description:"",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,isEdit:!0,id:"1"}]},onSubmit:(l,d)=>{alert(`Form submitted: ${JSON.stringify(l)}`),d.setSubmitting(!1)},validationSchema:ge,children:e.jsxs(e.Fragment,{children:[e.jsx(k,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,skills:[],id:""}}),e.jsx(k,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Job Title",type:"text"},{key:"university",label:"University",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[]}}),e.jsx(k,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Job Title",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[]}})]})}};j.storyName="Experience Form";var A,M,J;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(M=j.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};const Ee=["Default"];export{j as Default,Ee as __namedExportsOrder,qe as default};

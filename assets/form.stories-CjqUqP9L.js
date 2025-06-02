import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as ae,g as q,w as oe,c as L,a as E,b as d,d as Y}from"./EditableField-B9QxoAuC.js";import{r as y}from"./index-BwDkhjyp.js";import{E as de}from"./index-BVG3_zA8.js";import{c as P}from"./index-BpvXyOxN.js";/* empty css                             */import{T as ce}from"./index-B8AQXhD0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var pe="_1rkp4c1",ue="_1rkp4c2",me="_1rkp4c3";const A=({title:l,children:s,className:g,titleFontStyle:f,rightContent:i})=>e.jsxs("section",{className:P(ue,g),children:[e.jsxs("div",{className:pe,children:[e.jsxs("div",{className:P(me,f),children:[e.jsx(ce,{variant:"h3",children:l}),e.jsx("span",{})]}),i&&e.jsx("div",{children:i})]}),s]});try{A.displayName="Section",A.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}var ye="_14lk4sg3",ge="_14lk4sg4",U={error:"_14lk4sg5"},T="_14lk4sg6",X="_14lk4sg7",J="_14lk4sg8 _14lk4sg7",fe="_14lk4sg9 _14lk4sg7",he="_14lk4sga",be="_14lk4sgc",Z="_14lk4sgd";function xe(){return Date.now().toString()+Math.random().toString(36).substring(2)}function N({sectionTitle:l,itemDisplayDirection:s="column",fields:g,defaultItem:f,name:i,onSave:h}){const{values:b,setFieldValue:c,validateForm:S,setTouched:k,errors:x}=ae(),u=y.useMemo(()=>b[i]||[],[b,i]),[r,$]=y.useState([]);y.useEffect(()=>{u!=null&&u.length&&$(u)},[u]);const j=n=>{$(n),c(i,n)},o=(n,t,a)=>{const p=[...r];p[n]={...p[n],[t]:a},j(p)},R=n=>{const t=[...r];t[n].isPresent=!t[n].isPresent,t[n].isPresent&&(t[n].endDate=""),j(t)},F=()=>{const n={...f,isEdit:!0,id:xe()},t=[...r,n];j(t)},C=n=>{if(r.length===1)return;const t=[...r];t.splice(n,1),j(t)},ie=n=>{const t=[...r];t[n].isEdit=!1,j(t),h==null||h(t)},le=(n,t)=>{const a=r.map(p=>p.id===n?{...p,isEdit:t}:p);j(a)},B=y.useMemo(()=>r.filter(n=>!n.isEdit),[r]),re=y.useMemo(()=>r.filter(n=>n.isEdit),[r]);return e.jsxs(A,{title:l,rightContent:e.jsx("button",{onClick:F,className:ye,children:"Add"}),children:[B.length>0&&e.jsx(de,{items:B,itemDisplayDirection:s,onEdit:n=>le(B[n].id,!0)}),re.map(n=>{const t=r.findIndex(a=>a.id===n.id);return e.jsxs("div",{className:ge,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),r.length>1&&e.jsx("button",{onClick:()=>C(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),g.map(({key:a,label:p,type:_})=>{const I=n[a];if(a==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${i}.[${t}].${a}`,checked:n.isPresent||!1,onChange:()=>R(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:be,children:[e.jsxs("div",{className:P(Z,q(x,`${i}.[${t}].${a}`)?U.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:T,children:"Start Date"}),e.jsx("input",{type:"month",name:`${i}.[${t}].${a}`,className:J,value:n.startDate||"",onChange:m=>o(t,"startDate",m.target.value)})]}),e.jsxs("div",{className:P(Z,q(x,`${i}.[${t}].${a}`)?U.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:T,children:"End Date"}),e.jsx("input",{type:"month",className:J,name:`${i}.[${t}].${a}`,value:n.isPresent?"":n.endDate||"",disabled:n.isPresent,onChange:m=>o(t,"endDate",m.target.value)})]})]})]},"date-block");if(a==="endDate")return null;if(_==="textarea")return e.jsxs("div",{className:q(x,`${i}.[${t}].${a}`)?U.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:T,children:p}),e.jsx("textarea",{className:fe,name:`${i}.[${t}].${a}`,value:I||"",onChange:m=>o(t,a,m.target.value)})]},String(a));if(_==="tags"){const m=n[a]||[],M=v=>{if(v.key==="Enter"){v.preventDefault();const w=v.currentTarget.value.split(",").map(D=>D.trim()).filter(D=>D&&!m.includes(D));if(w.length>0){const D=[...m,...w];o(t,a,D),v.currentTarget.value=""}}},se=v=>{const w=m.filter(D=>D!==v);o(t,a,w)};return e.jsxs("div",{className:q(x,`${i}.[${t}].${a}`)?U.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:T,children:p}),e.jsx("input",{type:"text",onKeyDown:M,title:"Type and press Enter",placeholder:"Type and press Enter",className:X}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:m.map((v,w)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[v,e.jsx("button",{type:"button",onClick:()=>se(v),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},w))})]},String(a))}return e.jsxs("div",{className:q(x,`${i}.[${t}].${a}`)?U.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:T,children:p}),e.jsx("input",{type:_==="date"?"month":_,name:`${i}.[${t}].${a}`,className:_==="date"?J:X,value:I||"",onChange:m=>o(t,a,m.target.value)})]},String(a))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:he,onClick:async()=>{const a={};Object.keys(r[t]).forEach(M=>{a[M]=!0});const p={[i]:Array(r.length).fill({})};p[i][t]=a,k(p,!1);const _=await S(),I=q(_,`${i}[${t}]`);I&&Object.keys(I).length>0||ie(t)},children:"Save"})})]},n.id)})]})}try{N.displayName="EditableSection",N.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}var ve="trzeub0",Se="trzeub1",ke="trzeub2";const z=({name:l,level:s,years:g,barColor:f="#59c15d",totalBlocks:i=30,onDelete:h})=>{const b=Math.round(s/100*i),[c,S]=y.useState(0);y.useEffect(()=>{const u=setInterval(()=>{S(r=>r<b?r+1:(clearInterval(u),r))},30);return()=>clearInterval(u)},[b]);const k=c,x=i-k;return e.jsxs("div",{className:ve,children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"16px",marginBottom:"4px"},children:[l," - ",e.jsxs("span",{style:{fontStyle:"italic",fontWeight:400,fontSize:"14px"},children:[g," year",g!==1?"s":""]})]}),h&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Se,onClick:h,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),e.jsxs("div",{className:ke,style:{color:f},children:[Array.from({length:k}).map((u,r)=>e.jsx("span",{children:"█"},`fill-${r}`)),Array.from({length:x}).map((u,r)=>e.jsx("span",{children:"░"},`empty-${r}`))]}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"#666"}})]})};try{z.displayName="BlockSkillBar",z.__docgenInfo={description:"",displayName:"BlockSkillBar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:{value:"#59c15d"},description:"",name:"barColor",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},years:{defaultValue:null,description:"",name:"years",required:!0,type:{name:"number"}},totalBlocks:{defaultValue:{value:"30"},description:"",name:"totalBlocks",required:!1,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}var je="_1q7p6f20",De="_1q7p6f21";const Q=({skills:l,barColor:s,onDelete:g})=>{const[f,i]=y.useState(!1),h=f?l:l.slice(0,6),b=()=>i(c=>!c);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:je,children:h.map((c,S)=>e.jsx(z,{name:c.name,level:c.level,years:c.years,barColor:s,onDelete:g?()=>g(S):void 0},c.name))}),l.length>6&&e.jsx("button",{type:"button",className:De,onClick:b,children:f?"Show Less":`Show ${l.length-6} More`})]})};try{Q.displayName="SkillBarsGrid",Q.__docgenInfo={description:"",displayName:"SkillBarsGrid",props:{skills:{defaultValue:null,description:"",name:"skills",required:!0,type:{name:"Skill[]"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var _e="_18ujq3g0",qe="_18ujq3g1",O="_18ujq3g2",we="_18ujq3g3",W="_18ujq3g4",G="_18ujq3g5";const H=({name:l,barColor:s})=>{const{values:g,setFieldValue:f}=ae(),i=q(g,l)||[],[h,b]=y.useState(""),[c,S]=y.useState(""),[k,x]=y.useState(""),[u,r]=y.useState(""),$=()=>{const o=h.trim();if(!o||c===""||k===""){r("All fields are required.");return}if(i.some(C=>C.name.toLowerCase()===o.toLowerCase())){r("This skill already exists.");return}const F=[...i,{name:o,level:Number(c),years:Number(k)}];f(l,F),b(""),S(""),x(""),r("")},j=o=>{const R=i.filter((F,C)=>C!==o);f(l,R)};return e.jsxs("div",{className:_e,children:[e.jsx(Q,{skills:i,onDelete:j,barColor:s}),e.jsxs("div",{children:[e.jsxs("div",{className:qe,children:[e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Skill Name"}),e.jsx("input",{type:"text",placeholder:"e.g. React",value:h,onChange:o=>{b(o.target.value),r("")},className:O})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Proficiency (%)"}),e.jsx("input",{type:"number",placeholder:"0–100",value:c,onChange:o=>S(Number(o.target.value)),min:0,max:100,className:O})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Years of Experience"}),e.jsx("input",{type:"number",placeholder:"e.g. 2",value:k,onChange:o=>x(Number(o.target.value)),min:0,max:50,className:O})]}),e.jsx("button",{type:"button",onClick:$,className:we,children:"Add"})]}),u&&e.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:u})]})]})};try{H.displayName="SkillsSection",H.__docgenInfo={description:"",displayName:"SkillsSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}}}catch{}const Ne=()=>e.jsx(e.Fragment,{}),K=oe(Ne);try{K.displayName="Appform",K.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const Ee=L().shape({title:d().required("Title is required"),company:d().required("Company is required"),startDate:d().required("Start Date is required"),isPresent:Y(),endDate:d().when("isPresent",([l],s)=>l===!1?s.required("End Date is required"):s.notRequired()),skills:E().of(d()).min(1,"At least one skill required"),description:d().required("Description is required")}),Ce=L().shape({title:d().required("Title is required"),university:d().required("University is required"),startDate:d().required("Start Date is required"),isPresent:Y(),endDate:d().when("isPresent",([l],s)=>l===!1?s.required("End Date is required"):s.notRequired()),tags:E().of(d()).min(1,"At least one tag required"),description:d().required("Description is required")}),Ie=L().shape({title:d().required("Title is required"),description:d().required("Description is required"),startDate:d().required("Start Date is required"),isPresent:Y(),endDate:d().when("isPresent",([l],s)=>l===!1?s.required("End Date is required"):s.notRequired()),skills:E().of(d()).min(1,"At least one skill required")}),Ue=L().shape({firstName:d().required("First Name is required"),experiences:E().of(Ee),educations:E().of(Ce),projects:E().of(Ie)}),Me={title:"DesignSystem/OnlineFreeCV/Form",component:K,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},V={args:{initialValues:{experiences:[{title:"Principal Software Consultant",company:"System Limited",skills:["JavaScript","React","Node.js"],description:"Leading the development of scalable web applications.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",logoUrl:"https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",isPresent:!0,isEdit:!1,id:"1"}],educations:[{title:"Bachelor of Computer Software Engineering",university:"FURC",logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"Studied software engineering principles and practices.",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"Web Application Development",description:"Developed a scalable web application using React and Node.js.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,logoUrl:"https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",isEdit:!0,id:"1"}],references:[{title:"Junaid Umer",location:"Principle Software Engineer",subtitle:"System Limited",email:"junaid.umer@example.com",phone:"+1234567890",id:"1",website:"https://www.junaidumer.com",logoUrl:"https://www.junaidumer.com/images/side2.jpg"}],skills:[{name:"JavaScript",level:80,years:5}]},onSubmit:(l,s)=>{alert(`Form submitted: ${JSON.stringify(l)}`),s.setSubmitting(!1)},validationSchema:Ue,children:e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Technical Skills",children:e.jsx(H,{name:"skills",barColor:"red"})}),e.jsx(N,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Company Logo URL",type:"text"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,skills:[],id:"",logoUrl:""}}),e.jsx(N,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Degree Title",type:"text"},{key:"university",label:"Institute",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"},{key:"logoUrl",label:"Institute Logo URL",type:"text"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[],logoUrl:""}}),e.jsx(N,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Role",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Project Logo URL",type:"text"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[],logoUrl:""}}),e.jsx(N,{sectionTitle:"References",itemDisplayDirection:"row",name:"references",fields:[{key:"title",label:"Name",type:"text"},{key:"location",label:"Designation",type:"text"},{key:"subtitle",label:"Company",type:"text"},{key:"email",label:"Email",type:"text"},{key:"phone",label:"Phone",type:"text"},{key:"website",label:"Website",type:"text"},{key:"logoUrl",label:"Profile Picture URL",type:"text"}],defaultItem:{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:""}})]})}};V.storyName="Experience Form";var ee,te,ne;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    initialValues: {
      // Add appropriate fields here based on MyFormValues type
      experiences: [{
        title: "Principal Software Consultant",
        company: "System Limited",
        skills: ["JavaScript", "React", "Node.js"],
        description: "Leading the development of scalable web applications.",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        logoUrl: "https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",
        isPresent: true,
        isEdit: false,
        id: "1"
      }],
      educations: [{
        title: "Bachelor of Computer Software Engineering",
        university: "FURC",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        description: "Studied software engineering principles and practices.",
        isPresent: true,
        isEdit: true,
        id: "1"
      }],
      projects: [{
        title: "Web Application Development",
        description: "Developed a scalable web application using React and Node.js.",
        startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
        endDate: "",
        isPresent: true,
        logoUrl: "https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",
        isEdit: true,
        id: "1"
      }],
      references: [{
        title: "Junaid Umer",
        location: "Principle Software Engineer",
        subtitle: "System Limited",
        email: "junaid.umer@example.com",
        phone: "+1234567890",
        id: "1",
        website: "https://www.junaidumer.com",
        logoUrl: "https://www.junaidumer.com/images/side2.jpg"
      }],
      skills: [{
        name: "JavaScript",
        level: 80,
        years: 5
      }]
    },
    onSubmit: (values, actions) => {
      alert(\`Form submitted: \${JSON.stringify(values)}\`);
      actions.setSubmitting(false); // Example action
    },
    validationSchema: validationSchema,
    children: <>
      <Section title="Technical Skills">
        <SkillsSection name="skills" barColor="red" />

      </Section>
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
      }, {
        key: "logoUrl",
        label: "Company Logo URL",
        type: "text"
      }]} defaultItem={{
        title: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        isPresent: true,
        isEdit: true,
        skills: [],
        id: "",
        logoUrl: ""
      }} />
       <EditableSection sectionTitle="Education" name="educations" fields={[{
        key: "title",
        label: "Degree Title",
        type: "text"
      }, {
        key: "university",
        label: "Institute",
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
      }, {
        key: "logoUrl",
        label: "Institute Logo URL",
        type: "text"
      }]} defaultItem={{
        title: '',
        university: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        tags: [],
        logoUrl: ''
      }} />

      <EditableSection sectionTitle="Projects" name="projects" fields={[{
        key: "title",
        label: "Role",
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
      }, {
        key: "logoUrl",
        label: "Project Logo URL",
        type: "text"
      }]} defaultItem={{
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        skills: [],
        logoUrl: ''
      }} />

      <EditableSection sectionTitle="References" itemDisplayDirection="row" name="references" fields={[{
        key: "title",
        label: "Name",
        type: "text"
      }, {
        key: "location",
        label: "Designation",
        type: "text"
      }, {
        key: "subtitle",
        label: "Company",
        type: "text"
      }, {
        key: "email",
        label: "Email",
        type: "text"
      }, {
        key: "phone",
        label: "Phone",
        type: "text"
      }, {
        key: "website",
        label: "Website",
        type: "text"
      }, {
        key: "logoUrl",
        label: "Profile Picture URL",
        type: "text"
      }]} defaultItem={{
        title: '',
        subtitle: '',
        location: '',
        email: '',
        phone: '',
        website: '',
        logoUrl: ''
      }} />
    </>
  }
}`,...(ne=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Je=["Default"];export{V as Default,Je as __namedExportsOrder,Me as default};

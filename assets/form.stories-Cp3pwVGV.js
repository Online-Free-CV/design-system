import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as X,g as w,d as me,w as ge,c as L,a as C,b as u,e as Z}from"./EditableField-DU_kzYk3.js";import{r as f}from"./index-BwDkhjyp.js";import{E as ye}from"./index-DhSlkXkL.js";import{c as B}from"./index-BpvXyOxN.js";/* empty css                             */import{T as fe}from"./index-B8AQXhD0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var be="_1rkp4c1",he="_1rkp4c2",xe="_1rkp4c3";const T=({title:l,children:r,className:y,titleFontStyle:b,rightContent:a})=>{const d=X().values.themeColor;return e.jsxs("section",{className:B(he,y),children:[e.jsxs("div",{className:be,children:[e.jsxs("div",{className:B(xe,b),children:[e.jsx(fe,{variant:"h3",children:l}),e.jsx("span",{style:{backgroundImage:d==null?void 0:d.gradient}})]}),a&&e.jsx("div",{children:a})]}),r]})};try{T.displayName="Section",T.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}var ve="_14lk4sg3",ke="_14lk4sg4",F={error:"_14lk4sg5"},U="_14lk4sg6",te="_14lk4sg7",O="_14lk4sg8 _14lk4sg7",Se="_14lk4sg9 _14lk4sg7",je="_14lk4sga",De="_14lk4sgc",ne="_14lk4sgd";function _e(){return Date.now().toString()+Math.random().toString(36).substring(2)}function q({sectionTitle:l,itemDisplayDirection:r="column",fields:y,defaultItem:b,name:a,onSave:d}){var ee;const{values:c,setFieldValue:m,validateForm:k,setTouched:o,errors:g}=X(),v=f.useMemo(()=>c[a]||[],[c,a]),[s,$]=f.useState([]);f.useEffect(()=>{v!=null&&v.length&&$(v)},[v]);const j=n=>{$(n),m(a,n)},p=(n,t,i)=>{const h=[...s];h[n]={...h[n],[t]:i},j(h)},P=n=>{const t=[...s];t[n].isPresent=!t[n].isPresent,t[n].isPresent&&(t[n].endDate=""),j(t)},R=()=>{const n={...b,isEdit:!0,id:_e()},t=[...s,n];j(t)},E=n=>{if(s.length===1)return;const t=[...s];t.splice(n,1),j(t)},oe=n=>{const t=[...s];t[n].isEdit=!1,j(t),d==null||d(t)},de=(n,t)=>{const i=s.map(h=>h.id===n?{...h,isEdit:t}:h);j(i)},A=f.useMemo(()=>s.filter(n=>!n.isEdit),[s]),ce=f.useMemo(()=>s.filter(n=>n.isEdit),[s]);return e.jsxs(T,{title:l,rightContent:e.jsx("button",{onClick:R,className:ve,style:{backgroundImage:(ee=c==null?void 0:c.themeColor)==null?void 0:ee.gradient},children:"Add"}),children:[A.length>0&&e.jsx(ye,{items:A,itemDisplayDirection:r,onEdit:n=>de(A[n].id,!0)}),ce.map(n=>{const t=s.findIndex(i=>i.id===n.id);return e.jsxs("div",{className:ke,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),s.length>1&&e.jsx("button",{onClick:()=>E(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),y.map(({key:i,label:h,type:_})=>{var M;const I=n[i];if(i==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${a}.[${t}].${i}`,checked:n.isPresent||!1,style:{accentColor:(M=c==null?void 0:c.themeColor)==null?void 0:M.base},onChange:()=>P(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:De,children:[e.jsxs("div",{className:B(ne,w(g,`${a}.[${t}].${i}`)?F.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:U,children:"Start Date"}),e.jsx("input",{type:"month",name:`${a}.[${t}].${i}`,className:O,value:n.startDate||"",onChange:x=>p(t,"startDate",x.target.value)})]}),e.jsxs("div",{className:B(ne,w(g,`${a}.[${t}].${i}`)?F.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:U,children:"End Date"}),e.jsx("input",{type:"month",className:O,name:`${a}.[${t}].${i}`,value:n.isPresent?"":n.endDate||"",disabled:n.isPresent,onChange:x=>p(t,"endDate",x.target.value)})]})]})]},"date-block");if(i==="endDate")return null;if(_==="textarea")return e.jsxs("div",{className:w(g,`${a}.[${t}].${i}`)?F.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:U,children:h}),e.jsx("textarea",{className:Se,name:`${a}.[${t}].${i}`,value:I||"",onChange:x=>p(t,i,x.target.value)})]},String(i));if(_==="tags"){const x=n[i]||[],pe=S=>{if(S.key==="Enter"){S.preventDefault();const N=S.currentTarget.value.split(",").map(D=>D.trim()).filter(D=>D&&!x.includes(D));if(N.length>0){const D=[...x,...N];p(t,i,D),S.currentTarget.value=""}}},ue=S=>{const N=x.filter(D=>D!==S);p(t,i,N)};return e.jsxs("div",{className:w(g,`${a}.[${t}].${i}`)?F.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:U,children:h}),e.jsx("input",{type:"text",onKeyDown:pe,title:"Type and press Enter",placeholder:"Type and press Enter",className:te}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:x.map((S,N)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[S,e.jsx("button",{type:"button",onClick:()=>ue(S),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},N))})]},String(i))}return e.jsxs("div",{className:w(g,`${a}.[${t}].${i}`)?F.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:U,children:h}),e.jsx("input",{type:_==="date"?"month":_,name:`${a}.[${t}].${i}`,className:_==="date"?O:te,value:I||"",onChange:x=>p(t,i,x.target.value)})]},String(i))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:je,onClick:async()=>{const i={};Object.keys(s[t]).forEach(x=>{i[x]=!0});const h={[a]:Array(s.length).fill({})};h[a][t]=i,o(h,!1);const _=await k(),I=w(_,`${a}[${t}]`);I&&Object.keys(I).length>0||oe(t)},children:"Save"})})]},n.id)})]})}try{q.displayName="EditableSection",q.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}var we="trzeub0",Ne="trzeub1",qe="trzeub2";const z=({name:l,level:r,years:y,barColor:b="#59c15d",totalBlocks:a=30,onDelete:d})=>{const c=Math.round(r/100*a),[m,k]=f.useState(0);f.useEffect(()=>{const v=setInterval(()=>{k(s=>s<c?s+1:(clearInterval(v),s))},30);return()=>clearInterval(v)},[c]);const o=m,g=a-o;return e.jsxs("div",{className:we,children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"16px",marginBottom:"4px"},children:[l," - ",e.jsxs("span",{style:{fontStyle:"italic",fontWeight:400,fontSize:"14px"},children:[y," year",y!==1?"s":""]})]}),d&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Ne,onClick:d,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),e.jsxs("div",{className:qe,style:{color:b},children:[Array.from({length:o}).map((v,s)=>e.jsx("span",{children:"█"},`fill-${s}`)),Array.from({length:g}).map((v,s)=>e.jsx("span",{children:"░"},`empty-${s}`))]}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"#666"}})]})};try{z.displayName="BlockSkillBar",z.__docgenInfo={description:"",displayName:"BlockSkillBar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:{value:"#59c15d"},description:"",name:"barColor",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},years:{defaultValue:null,description:"",name:"years",required:!0,type:{name:"number"}},totalBlocks:{defaultValue:{value:"30"},description:"",name:"totalBlocks",required:!1,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}var Ce="_1q7p6f20",Ee="_1q7p6f21";const H=({skills:l,barColor:r,onDelete:y})=>{const[b,a]=f.useState(!1),d=b?l:l.slice(0,6),c=()=>a(m=>!m);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:Ce,children:d.map((m,k)=>e.jsx(z,{name:m.name,level:m.level,years:m.years,barColor:r,onDelete:y?()=>y(k):void 0},m.name))}),l.length>6&&e.jsx("button",{type:"button",className:Ee,onClick:c,children:b?"Show Less":`Show ${l.length-6} More`})]})};try{H.displayName="SkillBarsGrid",H.__docgenInfo={description:"",displayName:"SkillBarsGrid",props:{skills:{defaultValue:null,description:"",name:"skills",required:!0,type:{name:"Skill[]"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var Ie="_18ujq3g0",Fe="_18ujq3g1",J="_18ujq3g2",Ue="_18ujq3g3",W="_18ujq3g4",G="_18ujq3g5";const Q=({name:l})=>{const{values:r,setFieldValue:y}=X(),b=w(r,l)||[],{themeColor:a}=r,[d,c]=f.useState(""),[m,k]=f.useState(""),[o,g]=f.useState(""),[v,s]=f.useState(""),$=()=>{const p=d.trim();if(!p||m===""||o===""){s("All fields are required.");return}if(b.some(E=>E.name.toLowerCase()===p.toLowerCase())){s("This skill already exists.");return}const R=[...b,{name:p,level:Number(m),years:Number(o)}];y(l,R),c(""),k(""),g(""),s("")},j=p=>{const P=b.filter((R,E)=>E!==p);y(l,P)};return e.jsxs("div",{className:Ie,children:[e.jsx(H,{skills:b,onDelete:j,barColor:a.base}),e.jsxs("div",{children:[e.jsxs("div",{className:Fe,children:[e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Skill Name"}),e.jsx("input",{type:"text",placeholder:"e.g. React",value:d,onChange:p=>{c(p.target.value),s("")},className:J})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Proficiency (%)"}),e.jsx("input",{type:"number",placeholder:"0–100",value:m,onChange:p=>k(Number(p.target.value)),min:0,max:100,className:J})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Years of Experience"}),e.jsx("input",{type:"number",placeholder:"e.g. 2",value:o,onChange:p=>g(Number(p.target.value)),min:0,max:50,className:J})]}),e.jsx("button",{type:"button",onClick:$,className:Ue,style:{backgroundImage:a==null?void 0:a.gradient},children:"Add"})]}),v&&e.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:v})]})]})};try{Q.displayName="SkillsSection",Q.__docgenInfo={description:"",displayName:"SkillsSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}}}catch{}var Ve="hsd6p10",Te="hsd6p11",ae="hsd6p12",$e="hsd6p13",Pe="hsd6p14",Re="hsd6p15";const le=[{name:"OnlineFreeCV Blue",base:"#007BFF",gradient:"linear-gradient(to bottom, #007BFF, #0056b3)"},{name:"Sunset",base:"#FF5F6D",gradient:"linear-gradient(to bottom, #FF5F6D, #FFC371)"},{name:"Ocean Blue",base:"#2193b0",gradient:"linear-gradient(to bottom, #2193b0, #6dd5ed)"},{name:"Purple Bliss",base:"#6a11cb",gradient:"linear-gradient(to bottom, #6a11cb, #2575fc)"},{name:"Mint Leaf",base:"#00b09b",gradient:"linear-gradient(to bottom, #00b09b, #96c93d)"},{name:"Cherry Blossom",base:"#f953c6",gradient:"linear-gradient(to bottom, #f953c6, #b91d73)"},{name:"Golden Hour",base:"#f7971e",gradient:"linear-gradient(to bottom, #f7971e, #ffd200)"},{name:"Midnight",base:"#232526",gradient:"linear-gradient(to bottom, #232526, #414345)"}],K=({name:l})=>{var m,k;const[r,,y]=me(l),[b,a]=f.useState(!1),d=f.useRef(null);f.useEffect(()=>{if(typeof r.value=="string"){const o=le.find(g=>g.name===r.value);o&&y.setValue(o)}},[r.value,y]),f.useEffect(()=>{const o=g=>{d.current&&!d.current.contains(g.target)&&a(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const c=o=>{y.setValue(o),a(!1)};return e.jsxs("div",{className:Ve,ref:d,children:[e.jsxs("button",{type:"button",className:Te,onClick:()=>a(o=>!o),children:[e.jsx("span",{className:ae,style:{backgroundImage:(m=r.value)==null?void 0:m.gradient}}),((k=r.value)==null?void 0:k.name)||"Select Theme"]}),b&&e.jsx("div",{className:$e,children:le.map(o=>{var g;return e.jsxs("div",{title:o.name,className:`${Pe} ${((g=r.value)==null?void 0:g.name)===o.name?Re:""}`,onClick:()=>c(o),children:[e.jsx("span",{className:ae,style:{backgroundImage:o.gradient}}),o.name]},o.name)})})]})};try{K.displayName="ColorPickerDropdown",K.__docgenInfo={description:"",displayName:"ColorPickerDropdown",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const Be=()=>e.jsx(e.Fragment,{}),Y=ge(Be);try{Y.displayName="Appform",Y.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const Le=L().shape({title:u().required("Title is required"),company:u().required("Company is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([l],r)=>l===!1?r.required("End Date is required"):r.notRequired()),skills:C().of(u()).min(1,"At least one skill required"),description:u().required("Description is required")}),Ae=L().shape({title:u().required("Title is required"),university:u().required("University is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([l],r)=>l===!1?r.required("End Date is required"):r.notRequired()),tags:C().of(u()).min(1,"At least one tag required"),description:u().required("Description is required")}),Me=L().shape({title:u().required("Title is required"),description:u().required("Description is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([l],r)=>l===!1?r.required("End Date is required"):r.notRequired()),skills:C().of(u()).min(1,"At least one skill required")}),Oe=L().shape({firstName:u().required("First Name is required"),experiences:C().of(Le),educations:C().of(Ae),projects:C().of(Me)}),Ze={title:"DesignSystem/OnlineFreeCV/Form",component:Y,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},V={args:{initialValues:{experiences:[{title:"Principal Software Consultant",company:"System Limited",skills:["JavaScript","React","Node.js"],description:"Leading the development of scalable web applications.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",logoUrl:"https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",isPresent:!0,isEdit:!1,id:"1"}],educations:[{title:"Bachelor of Computer Software Engineering",university:"FURC",logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"Studied software engineering principles and practices.",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"Web Application Development",description:"Developed a scalable web application using React and Node.js.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,logoUrl:"https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",isEdit:!0,id:"1"}],references:[{title:"Junaid Umer",location:"Principle Software Engineer",subtitle:"System Limited",email:"junaid.umer@example.com",phone:"+1234567890",id:"1",website:"https://www.junaidumer.com",logoUrl:"https://www.junaidumer.com/images/side2.jpg"}],skills:[{name:"JavaScript",level:80,years:5}],themeColor:"OnlineFreeCV Blue"},onSubmit:(l,r)=>{alert(`Form submitted: ${JSON.stringify(l)}`),r.setSubmitting(!1)},validationSchema:Oe,children:e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Theme Color",children:e.jsx(K,{name:"themeColor"})}),e.jsx(T,{title:"Technical Skills",children:e.jsx(Q,{name:"skills",barColor:"red"})}),e.jsx(q,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Company Logo URL",type:"text"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,skills:[],id:"",logoUrl:""}}),e.jsx(q,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Degree Title",type:"text"},{key:"university",label:"Institute",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"},{key:"logoUrl",label:"Institute Logo URL",type:"text"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Role",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Project Logo URL",type:"text"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"References",itemDisplayDirection:"row",name:"references",fields:[{key:"title",label:"Name",type:"text"},{key:"location",label:"Designation",type:"text"},{key:"subtitle",label:"Company",type:"text"},{key:"email",label:"Email",type:"text"},{key:"phone",label:"Phone",type:"text"},{key:"website",label:"Website",type:"text"},{key:"logoUrl",label:"Profile Picture URL",type:"text"}],defaultItem:{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:""}})]})}};V.storyName="Experience Form";var ie,re,se;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      }],
      themeColor: "OnlineFreeCV Blue"
    },
    onSubmit: (values, actions) => {
      alert(\`Form submitted: \${JSON.stringify(values)}\`);
      actions.setSubmitting(false); // Example action
    },
    validationSchema: validationSchema,
    children: <>
          <Section title="Theme Color">
         <ColorPickerDropdown name="themeColor" />

      </Section>
       
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
}`,...(se=(re=V.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const et=["Default"];export{V as Default,et as __namedExportsOrder,Ze as default};

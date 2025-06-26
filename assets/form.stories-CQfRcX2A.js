import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as ne,g as _,d as fe,w as he,c as O,a as F,b as f,e as ae}from"./EditableField-DC4HnaDX.js";import{r as b}from"./index-BwDkhjyp.js";import{t as ve,E as xe}from"./index-CQ-FIqmd.js";import{c as M}from"./index-BpvXyOxN.js";import{T as je}from"./index-B8AQXhD0.js";/* empty css                             */import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var Se="_1rkp4c1",ke="_1rkp4c2",De="_1rkp4c3";const U=({title:a,children:i,className:p,titleFontStyle:c,rightContent:l,themeColor:u})=>e.jsxs("section",{className:M(ke,p),children:[e.jsxs("div",{className:Se,children:[e.jsxs("div",{className:M(De,c),children:[e.jsx(je,{variant:"h4",children:a}),e.jsx("span",{style:{backgroundImage:u==null?void 0:u.gradient}})]}),l&&e.jsx("div",{children:l})]}),i]});try{U.displayName="Section",U.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"{ gradient: string; color: string; }"}}}}}catch{}var Ne="_14lk4sg3",_e="_14lk4sg4",E={error:"_14lk4sg5"},I="_14lk4sg6",W="_14lk4sg7",G="_14lk4sg8 _14lk4sg7",qe="_14lk4sg9 _14lk4sg7",Ce="_14lk4sga",we="_14lk4sgc",se="_14lk4sgd";const K=({items:a,itemDisplayDirection:i="column",themeColor:p})=>{debugger;return e.jsx(e.Fragment,{children:e.jsx("ul",{style:{paddingLeft:0,listStyle:"none",display:i==="column"?"flex":void 0,columnGap:i==="column"?"2rem":void 0,flexWrap:i==="column"?"wrap":void 0},children:a.map((c,l)=>e.jsxs("li",{style:{marginBottom:"1rem",display:i==="column"?"flex":void 0,alignItems:i==="column"?"center":void 0,gap:i==="column"?"10px":void 0},children:[e.jsx("strong",{children:c.title}),c.tags&&e.jsx("div",{style:{marginTop:4,display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:c.tags.map((u,s)=>e.jsx("span",{className:ve,style:{backgroundColor:p==null?void 0:p.base,color:"white"},children:u},s))}),c.description&&e.jsx("p",{style:{margin:"0.5rem 0 0"},children:c.description})]},l))})})};try{K.displayName="SimpleListSection",K.__docgenInfo={description:"",displayName:"SimpleListSection",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ExperienceItem[]"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"{ gradient: string; base: string; }"}}}}}catch{}function Ee(){return Date.now().toString()+Math.random().toString(36).substring(2)}function q({sectionTitle:a,itemDisplayDirection:i="column",fields:p,defaultItem:c,name:l,onSave:u}){var re;const{values:s,setFieldValue:h,validateForm:j,setTouched:d,errors:g}=ne(),x=b.useMemo(()=>s[l]||[],[s,l]),[o,L]=b.useState([]);b.useEffect(()=>{x!=null&&x.length&&L(x)},[x]);const k=n=>{L(n),h(l,n)},m=(n,t,r)=>{const v=[...o];v[n]={...v[n],[t]:r},k(v)},B=n=>{const t=[...o];t[n].isPresent=!t[n].isPresent,t[n].isPresent&&(t[n].endDate=""),k(t)},R=()=>{const n={...c,isEdit:!0,id:Ee()},t=[...o,n];k(t)},V=n=>{if(o.length===1)return;const t=[...o];t.splice(n,1),k(t)},me=n=>{const t=[...o];t[n].isEdit=!1,k(t),u==null||u(t)},ge=(n,t)=>{const r=o.map(v=>v.id===n?{...v,isEdit:t}:v);k(r)},T=b.useMemo(()=>o.filter(n=>!n.isEdit),[o]),le=b.useMemo(()=>T.filter(n=>n.sectionName==="simple"),[T]),J=b.useMemo(()=>T.filter(n=>n.sectionName==="experience"),[T]),ie=b.useMemo(()=>o.filter(n=>n.isEdit),[o]);return e.jsxs(U,{title:a,themeColor:s==null?void 0:s.themeColor,rightContent:e.jsx("button",{onClick:R,className:Ne,style:{backgroundImage:(re=s==null?void 0:s.themeColor)==null?void 0:re.gradient},children:"Add"}),children:[J.length>0&&e.jsx(xe,{items:J,themeColor:s==null?void 0:s.themeColor,itemDisplayDirection:i,onEdit:n=>ge(J[n].id,!0)}),le.length>0&&e.jsx(K,{items:le,itemDisplayDirection:i,themeColor:s==null?void 0:s.themeColor}),!ie.length&&T.length===0&&e.jsx("div",{style:{textAlign:"center",color:"#999"},children:"No items to display"}),ie.map(n=>{const t=o.findIndex(r=>r.id===n.id);return e.jsxs("div",{className:_e,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),o.length>1&&e.jsx("button",{onClick:()=>V(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),p.map(({key:r,label:v,type:D,options:C})=>{var A;const P=n[r];if(r==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${l}.[${t}].${r}`,checked:n.isPresent||!1,style:{accentColor:(A=s==null?void 0:s.themeColor)==null?void 0:A.base},onChange:()=>B(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:we,children:[e.jsxs("div",{className:M(se,_(g,`${l}.[${t}].${r}`)?E.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:I,children:"Start Date"}),e.jsx("input",{type:"month",name:`${l}.[${t}].${r}`,className:G,value:n.startDate||"",onChange:y=>m(t,"startDate",y.target.value)})]}),e.jsxs("div",{className:M(se,_(g,`${l}.[${t}].${r}`)?E.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:I,children:"End Date"}),e.jsx("input",{type:"month",className:G,name:`${l}.[${t}].${r}`,value:n.isPresent?"":n.endDate||"",disabled:n.isPresent,onChange:y=>m(t,"endDate",y.target.value)})]})]})]},"date-block");if(r==="endDate")return null;if(D==="textarea")return e.jsxs("div",{className:_(g,`${l}.[${t}].${r}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("textarea",{className:qe,name:`${l}.[${t}].${r}`,value:P||"",onChange:y=>m(t,r,y.target.value)})]},String(r));if(D==="tags"){const y=n[r]||[],ye=S=>{if(S.key==="Enter"){S.preventDefault();const w=S.currentTarget.value.split(",").map(N=>N.trim()).filter(N=>N&&!y.includes(N));if(w.length>0){const N=[...y,...w];m(t,r,N),S.currentTarget.value=""}}},be=S=>{const w=y.filter(N=>N!==S);m(t,r,w)};return e.jsxs("div",{className:_(g,`${l}.[${t}].${r}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("input",{type:"text",onKeyDown:ye,title:"Type and press Enter",placeholder:"Type and press Enter",className:W}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:y.map((S,w)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[S,e.jsx("button",{type:"button",onClick:()=>be(S),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},w))})]},String(r))}return D==="select"&&(C!=null&&C.length)?e.jsxs("div",{className:_(g,`${l}.[${t}].${r}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsxs("select",{name:`${l}.[${t}].${r}`,className:W,value:P||"",onChange:y=>m(t,r,[y.target.value]),children:[e.jsx("option",{value:"",children:"Select an option"}),C.map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))]})]},String(r)):e.jsxs("div",{className:_(g,`${l}.[${t}].${r}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("input",{type:D==="date"?"month":D,name:`${l}.[${t}].${r}`,className:D==="date"?G:W,value:P||"",onChange:y=>m(t,r,y.target.value)})]},String(r))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:Ce,onClick:async()=>{const r={};Object.keys(o[t]).forEach(A=>{r[A]=!0});const v={[l]:Array(o.length).fill({})};v[l][t]=r,d(v,!1);const D=await j(),C=_(D,`${l}[${t}]`);C&&Object.keys(C).length>0||me(t)},children:"Save"})})]},n.id)})]})}try{q.displayName="EditableSection",q.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}var Ie="trzeub0",Fe="trzeub1",Ve="trzeub2";const Y=({name:a,level:i,years:p,barColor:c="#59c15d",totalBlocks:l=30,onDelete:u})=>{const s=Math.round(i/100*l),[h,j]=b.useState(0);b.useEffect(()=>{const x=setInterval(()=>{j(o=>o<s?o+1:(clearInterval(x),o))},30);return()=>clearInterval(x)},[s]);const d=h,g=l-d;return e.jsxs("div",{className:Ie,children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"16px",marginBottom:"4px"},children:[a," - ",e.jsxs("span",{style:{fontStyle:"italic",fontWeight:400,fontSize:"14px"},children:[p," year",p!==1?"s":""]})]}),u&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Fe,onClick:u,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),e.jsxs("div",{className:Ve,style:{color:c},children:[Array.from({length:d}).map((x,o)=>e.jsx("span",{children:"█"},`fill-${o}`)),Array.from({length:g}).map((x,o)=>e.jsx("span",{children:"░"},`empty-${o}`))]}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"#666"}})]})};try{Y.displayName="BlockSkillBar",Y.__docgenInfo={description:"",displayName:"BlockSkillBar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:{value:"#59c15d"},description:"",name:"barColor",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},years:{defaultValue:null,description:"",name:"years",required:!0,type:{name:"number"}},totalBlocks:{defaultValue:{value:"30"},description:"",name:"totalBlocks",required:!1,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}var Te="_1q7p6f20",$e="_1q7p6f21";const X=({skills:a,barColor:i,onDelete:p})=>{const[c,l]=b.useState(!1),u=c?a:a.slice(0,6),s=()=>l(h=>!h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:Te,children:u.map((h,j)=>e.jsx(Y,{name:h.name,level:h.level,years:h.years,barColor:i,onDelete:p?()=>p(j):void 0},h.name))}),a.length>6&&e.jsx("button",{type:"button",className:$e,onClick:s,children:c?"Show Less":`Show ${a.length-6} More`})]})};try{X.displayName="SkillBarsGrid",X.__docgenInfo={description:"",displayName:"SkillBarsGrid",props:{skills:{defaultValue:null,description:"",name:"skills",required:!0,type:{name:"Skill[]"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var Ue="_18ujq3g0",Le="_18ujq3g1",H="_18ujq3g2",Be="_18ujq3g3",z="_18ujq3g4",Q="_18ujq3g5";const Z=({name:a})=>{const{values:i,setFieldValue:p}=ne(),c=_(i,a)||[],{themeColor:l}=i,[u,s]=b.useState(""),[h,j]=b.useState(""),[d,g]=b.useState(""),[x,o]=b.useState(""),L=()=>{const m=u.trim();if(!m||h===""||d===""){o("All fields are required.");return}if(c.some(V=>V.name.toLowerCase()===m.toLowerCase())){o("This skill already exists.");return}const R=[...c,{name:m,level:Number(h),years:Number(d)}];p(a,R),s(""),j(""),g(""),o("")},k=m=>{const B=c.filter((R,V)=>V!==m);p(a,B)};return e.jsxs("div",{className:Ue,children:[e.jsx(X,{skills:c,onDelete:k,barColor:l.base}),e.jsxs("div",{children:[e.jsxs("div",{className:Le,children:[e.jsxs("div",{className:z,children:[e.jsx("label",{className:Q,children:"Skill Name"}),e.jsx("input",{type:"text",placeholder:"e.g. React",value:u,onChange:m=>{s(m.target.value),o("")},className:H})]}),e.jsxs("div",{className:z,children:[e.jsx("label",{className:Q,children:"Proficiency (%)"}),e.jsx("input",{type:"number",placeholder:"0–100",value:h,onChange:m=>j(Number(m.target.value)),min:0,max:100,className:H})]}),e.jsxs("div",{className:z,children:[e.jsx("label",{className:Q,children:"Years of Experience"}),e.jsx("input",{type:"number",placeholder:"e.g. 2",value:d,onChange:m=>g(Number(m.target.value)),min:0,max:50,className:H})]}),e.jsx("button",{type:"button",onClick:L,className:Be,style:{backgroundImage:l==null?void 0:l.gradient},children:"Add"})]}),x&&e.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:x})]})]})};try{Z.displayName="SkillsSection",Z.__docgenInfo={description:"",displayName:"SkillsSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}}}catch{}var Re="hsd6p10",Pe="hsd6p11",oe="hsd6p12",Ae="hsd6p13",Me="hsd6p14",Oe="hsd6p15";const de=[{name:"OnlineFreeCV Blue",base:"#a147ef",gradient:"linear-gradient(312deg, #ff5cef 5.38%, #5e36f2 113.21%)",blob:"rgb(71 26 162)"},{name:"Sunset",base:"#fe603c",gradient:"linear-gradient(to bottom, #FF7F50, #FF0000)",blob:"rgb(153 21 4)"},{name:"Ocean Blue",base:"#00aae8",gradient:"linear-gradient(to bottom, #00d4ff , #0082d1)",blob:"rgb(9 85 142)"},{name:"Purple Bliss",base:"#bd76ff",gradient:"linear-gradient(to bottom, #bd76ff, #6a0dad)",blob:"rgb(69 5 133)"},{name:"Mint Leaf",base:"#00A884",gradient:"linear-gradient(to bottom, #00E676, #00A884)",blob:"rgb(12 105 76)"},{name:"Cherry Blossom",base:"#f04b89",gradient:"linear-gradient(to bottom, #FF6FA1, #D20457)",blob:"rgb(175, 1, 69)"},{name:"Golden Hour",base:"#feaa02",gradient:"linear-gradient(to bottom, #FFD700, #FF8C00)",blob:"rgb(179 100 0)"},{name:"Midnight",base:"#2C5364",gradient:"linear-gradient(to bottom, #5c9fbc, #0F2027)",blob:"rgb(4 51 72)"},{name:"Bright Flame",base:"#ff6d05",gradient:"linear-gradient(to bottom, #FFA500, #FF0000)",blob:"rgb(127 44 1)"}],ee=({name:a})=>{var h,j;const[i,,p]=fe(a),[c,l]=b.useState(!1),u=b.useRef(null);b.useEffect(()=>{if(typeof i.value=="string"){const d=de.find(g=>g.name===i.value);d&&p.setValue(d)}},[i.value,p]),b.useEffect(()=>{const d=g=>{u.current&&!u.current.contains(g.target)&&l(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const s=d=>{p.setValue(d),l(!1)};return e.jsxs("div",{className:Re,ref:u,children:[e.jsxs("button",{type:"button",className:Pe,onClick:()=>l(d=>!d),children:[e.jsx("span",{className:oe,style:{backgroundImage:(h=i.value)==null?void 0:h.gradient}}),((j=i.value)==null?void 0:j.name)||"Select Theme"]}),c&&e.jsx("div",{className:Ae,children:de.map(d=>{var g;return e.jsxs("div",{title:d.name,className:`${Me} ${((g=i.value)==null?void 0:g.name)===d.name?Oe:""}`,onClick:()=>s(d),children:[e.jsx("span",{className:oe,style:{backgroundImage:d.gradient}}),d.name]},d.name)})})]})};try{ee.displayName="ColorPickerDropdown",ee.__docgenInfo={description:"",displayName:"ColorPickerDropdown",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const Je=()=>e.jsx(e.Fragment,{}),te=he(Je);try{te.displayName="Appform",te.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const We=O().shape({title:f().required("Title is required"),company:f().required("Company is required"),startDate:f().required("Start Date is required"),isPresent:ae(),endDate:f().when("isPresent",([a],i)=>a===!1?i.required("End Date is required"):i.notRequired()),skills:F().of(f()).min(1,"At least one skill required"),description:f().required("Description is required")}),Ge=O().shape({title:f().required("Title is required"),university:f().required("University is required"),startDate:f().required("Start Date is required"),isPresent:ae(),endDate:f().when("isPresent",([a],i)=>a===!1?i.required("End Date is required"):i.notRequired()),tags:F().of(f()).min(1,"At least one tag required"),description:f().required("Description is required")}),He=O().shape({title:f().required("Title is required"),description:f().required("Description is required"),startDate:f().required("Start Date is required"),isPresent:ae(),endDate:f().when("isPresent",([a],i)=>a===!1?i.required("End Date is required"):i.notRequired()),skills:F().of(f()).min(1,"At least one skill required")}),ze=O().shape({firstName:f().required("First Name is required"),experiences:F().of(We),educations:F().of(Ge),projects:F().of(He)}),it={title:"DesignSystem/OnlineFreeCV/Form",component:te,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},Qe=()=>{const{values:a}=ne();return e.jsxs(e.Fragment,{children:[e.jsx(U,{title:"Theme Color",themeColor:a.themeColor,children:e.jsx(ee,{name:"themeColor"})}),e.jsx(U,{title:"Technical Skills",themeColor:a.themeColor,children:e.jsx(Z,{name:"skills",barColor:"red"})})]})},$={args:{initialValues:{experiences:[{title:"Principal Software Consultant",company:"System Limited",skills:["JavaScript","React","Node.js"],description:"Leading the development of scalable web applications.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",logoUrl:"https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",isPresent:!0,isEdit:!1,id:"1"}],educations:[{title:"Bachelor of Computer Software Engineering",university:"FURC",logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"Studied software engineering principles and practices.",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"Web Application Development",description:"Developed a scalable web application using React and Node.js.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,logoUrl:"https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",isEdit:!0,id:"1"}],references:[{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:"",isEdit:!0}],skills:[{name:"JavaScript",level:80,years:5}],themeColor:"OnlineFreeCV Blue",languages:[{id:"",title:"",tags:[],sectionName:"simple",isEdit:!0}],hobbies:[{id:"",title:"",description:"",sectionName:"simple",isEdit:!0}]},onSubmit:(a,i)=>{alert(`Form submitted: ${JSON.stringify(a)}`),i.setSubmitting(!1)},validationSchema:ze,children:e.jsxs(e.Fragment,{children:[e.jsx(Qe,{}),e.jsx(q,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Skills",type:"tags"},{key:"logoUrl",label:"Company Logo URL",type:"text"},{key:"level",label:"Seniority Level",type:"select",options:[{label:"Intern",value:"intern"},{label:"Junior",value:"junior"},{label:"Mid",value:"mid"},{label:"Senior",value:"senior"},{label:"Lead",value:"lead"}]}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,tags:[],id:"",logoUrl:"",level:"junior"}}),e.jsx(q,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Degree Title",type:"text"},{key:"university",label:"Institute",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"},{key:"logoUrl",label:"Institute Logo URL",type:"text"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Role",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Project Logo URL",type:"text"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"References",itemDisplayDirection:"row",name:"references",fields:[{key:"title",label:"Name",type:"text"},{key:"location",label:"Designation",type:"text"},{key:"subtitle",label:"Company",type:"text"},{key:"email",label:"Email",type:"text"},{key:"phone",label:"Phone",type:"text"},{key:"website",label:"Website",type:"text"},{key:"logoUrl",label:"Profile Picture URL",type:"text"}],defaultItem:{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:""}}),e.jsx(q,{sectionTitle:"Languages",name:"languages",defaultItem:{id:"",title:"",tags:[],sectionName:"simple",isEdit:!0},fields:[{key:"title",label:"Language",type:"text"},{key:"tags",label:"Proficiency",type:"select",options:[{label:"Basic",value:"Basic"},{label:"Conversational",value:"Conversational"},{label:"Fluent",value:"Fluent"},{label:"Native",value:"Native"}]}]}),e.jsx(q,{sectionTitle:"Hobbies",itemDisplayDirection:"row",name:"hobbies",defaultItem:{id:"",title:"",description:"",sectionName:"simple",isEdit:!0},fields:[{key:"title",label:"Hobby",type:"text"},{key:"description",label:"Details",type:"textarea"}]})]})}};$.storyName="Experience Form";var ce,ue,pe;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        title: "",
        subtitle: "",
        location: "",
        email: "",
        phone: "",
        website: "",
        logoUrl: "",
        isEdit: true
      }],
      skills: [{
        name: "JavaScript",
        level: 80,
        years: 5
      }],
      themeColor: "OnlineFreeCV Blue",
      languages: [{
        id: "",
        title: "",
        tags: [],
        sectionName: "simple",
        isEdit: true
      }],
      hobbies: [{
        id: "",
        title: "",
        description: "",
        sectionName: "simple",
        isEdit: true
      }]
    },
    onSubmit: (values, actions) => {
      alert(\`Form submitted: \${JSON.stringify(values)}\`);
      actions.setSubmitting(false); // Example action
    },
    validationSchema: validationSchema,
    children: <>
        <FormSections />

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
        key: "tags",
        label: "Skills",
        type: "tags"
      }, {
        key: "logoUrl",
        label: "Company Logo URL",
        type: "text"
      }, {
        key: "level",
        label: "Seniority Level",
        type: "select",
        options: [{
          label: "Intern",
          value: "intern"
        }, {
          label: "Junior",
          value: "junior"
        }, {
          label: "Mid",
          value: "mid"
        }, {
          label: "Senior",
          value: "senior"
        }, {
          label: "Lead",
          value: "lead"
        }]
      }]} defaultItem={{
        title: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        isPresent: true,
        isEdit: true,
        tags: [],
        id: "",
        logoUrl: "",
        level: "junior"
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
        title: "",
        university: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        tags: [],
        logoUrl: ""
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
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        skills: [],
        logoUrl: ""
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
        title: "",
        subtitle: "",
        location: "",
        email: "",
        phone: "",
        website: "",
        logoUrl: ""
      }} />
        <EditableSection sectionTitle="Languages" name="languages" defaultItem={{
        id: "",
        title: "",
        tags: [],
        sectionName: "simple",
        isEdit: true
      }} fields={[{
        key: "title",
        label: "Language",
        type: "text"
      }, {
        key: "tags",
        label: "Proficiency",
        type: "select",
        options: [{
          label: "Basic",
          value: "Basic"
        }, {
          label: "Conversational",
          value: "Conversational"
        }, {
          label: "Fluent",
          value: "Fluent"
        }, {
          label: "Native",
          value: "Native"
        }]
      }]} />
        <EditableSection sectionTitle="Hobbies" itemDisplayDirection="row" name="hobbies" defaultItem={{
        id: "",
        title: "",
        description: "",
        sectionName: "simple",
        isEdit: true
      }} fields={[{
        key: "title",
        label: "Hobby",
        type: "text"
      }, {
        key: "description",
        label: "Details",
        type: "textarea"
      }]} />
      </>
  }
}`,...(pe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const rt=["Default"];export{$ as Default,rt as __namedExportsOrder,it as default};

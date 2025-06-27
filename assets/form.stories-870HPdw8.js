import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as ae,g as _,d as he,w as ve,c as O,a as F,b as h,e as le}from"./EditableField-DC4HnaDX.js";import{r as f}from"./index-BwDkhjyp.js";import{t as xe,b as je,s as Se,a as ke,E as De}from"./index-BfzuAu7-.js";import{c as L}from"./index-BpvXyOxN.js";import{T as Ne}from"./index-B8AQXhD0.js";/* empty css                             */import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var _e="_1rkp4c1",qe="_1rkp4c2",we="_1rkp4c3";const U=({title:l,children:i,className:u,titleFontStyle:g,rightContent:n,themeColor:c})=>e.jsxs("section",{className:L(qe,u),children:[e.jsxs("div",{className:_e,children:[e.jsxs("div",{className:L(we,g),children:[e.jsx(Ne,{variant:"h4",children:l}),e.jsx("span",{style:{backgroundImage:c==null?void 0:c.gradient}})]}),n&&e.jsx("div",{children:n})]}),i]});try{U.displayName="Section",U.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"{ gradient: string; color: string; }"}}}}}catch{}var Ce="_14lk4sg3",Ee="_14lk4sg4",E={error:"_14lk4sg5"},I="_14lk4sg6",G="_14lk4sg7",H="_14lk4sg8 _14lk4sg7",Ie="_14lk4sg9 _14lk4sg7",Fe="_14lk4sga",Ve="_14lk4sgc",re="_14lk4sgd";const Y=({items:l,itemDisplayDirection:i="column",themeColor:u,onDelete:g})=>{debugger;return e.jsx(e.Fragment,{children:e.jsx("ul",{style:{paddingLeft:0,listStyle:"none",display:i==="column"?"flex":void 0,columnGap:i==="column"?"2rem":void 0,flexWrap:i==="column"?"wrap":void 0},children:l.map((n,c)=>e.jsxs("li",{className:L(Se,{[ke]:i==="row"}),style:{display:i==="column"?"flex":void 0,alignItems:i==="column"?"center":void 0,gap:i==="column"?"10px":void 0},children:[e.jsx("strong",{children:n.title}),n.tags&&e.jsx("div",{style:{marginTop:4,display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:n.tags.map((r,p)=>e.jsx("span",{className:xe,style:{backgroundColor:u==null?void 0:u.base,color:"white"},children:r},p))}),n.description&&e.jsx("p",{style:{margin:"0.5rem 0 0"},children:n.description}),g&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:je,onClick:()=>g(c),style:{marginLeft:"auto",cursor:"pointer"},children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]})]},c))})})};try{Y.displayName="SimpleListSection",Y.__docgenInfo={description:"",displayName:"SimpleListSection",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ExperienceItem[]"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"{ gradient: string; base: string; }"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}function Te(){return Date.now().toString()+Math.random().toString(36).substring(2)}function q({sectionTitle:l,itemDisplayDirection:i="column",fields:u,defaultItem:g,name:n,onSave:c}){var se;const{values:r,setFieldValue:p,validateForm:j,setTouched:d,errors:y}=ae(),x=f.useMemo(()=>r[n]||[],[r,n]),[o,R]=f.useState([]);f.useEffect(()=>{x!=null&&x.length&&R(x)},[x]);const S=a=>{R(a),p(n,a)},m=(a,t,s)=>{const v=[...o];v[a]={...v[a],[t]:s},S(v)},B=a=>{const t=[...o];t[a].isPresent=!t[a].isPresent,t[a].isPresent&&(t[a].endDate=""),S(t)},P=()=>{const a={...g,isEdit:!0,id:Te()},t=[...o,a];S(t)},V=a=>{if(o.length===1)return;const t=[...o];t.splice(a,1),S(t)},me=a=>{const t=[...o];t[a].isEdit=!1,S(t),c==null||c(t)},ge=a=>{const t=[...J];t.splice(a,1),S(t)},ye=(a,t)=>{const s=o.map(v=>v.id===a?{...v,isEdit:t}:v);S(s)},T=f.useMemo(()=>o.filter(a=>!a.isEdit),[o]),J=f.useMemo(()=>T.filter(a=>a.sectionName==="simple"),[T]),W=f.useMemo(()=>T.filter(a=>a.sectionName!=="simple"),[T]),ie=f.useMemo(()=>o.filter(a=>a.isEdit),[o]);return e.jsxs(U,{title:l,themeColor:r==null?void 0:r.themeColor,rightContent:e.jsx("button",{onClick:P,className:Ce,type:"button",style:{backgroundImage:(se=r==null?void 0:r.themeColor)==null?void 0:se.gradient},children:"Add"}),children:[W.length>0&&e.jsx(De,{items:W,themeColor:r==null?void 0:r.themeColor,itemDisplayDirection:i,onEdit:a=>ye(W[a].id,!0)}),J.length>0&&e.jsx(Y,{items:J,itemDisplayDirection:i,themeColor:r==null?void 0:r.themeColor,onDelete:ge}),!ie.length&&T.length===0&&e.jsx("div",{style:{textAlign:"center",color:"#999"},children:"No items to display"}),ie.map(a=>{const t=o.findIndex(s=>s.id===a.id);return e.jsxs("div",{className:Ee,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),o.length>1&&e.jsx("button",{onClick:()=>V(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),u.map(({key:s,label:v,type:D,options:w})=>{var M;const A=a[s];if(s==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${n}.[${t}].${s}`,checked:a.isPresent||!1,style:{accentColor:(M=r==null?void 0:r.themeColor)==null?void 0:M.base},onChange:()=>B(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:Ve,children:[e.jsxs("div",{className:L(re,_(y,`${n}.[${t}].${s}`)?E.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:I,children:"Start Date"}),e.jsx("input",{type:"month",name:`${n}.[${t}].${s}`,className:H,value:a.startDate||"",onChange:b=>m(t,"startDate",b.target.value)})]}),e.jsxs("div",{className:L(re,_(y,`${n}.[${t}].${s}`)?E.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:I,children:"End Date"}),e.jsx("input",{type:"month",className:H,name:`${n}.[${t}].${s}`,value:a.isPresent?"":a.endDate||"",disabled:a.isPresent,onChange:b=>m(t,"endDate",b.target.value)})]})]})]},"date-block");if(s==="endDate")return null;if(D==="textarea")return e.jsxs("div",{className:_(y,`${n}.[${t}].${s}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("textarea",{className:Ie,name:`${n}.[${t}].${s}`,value:A||"",onChange:b=>m(t,s,b.target.value)})]},String(s));if(D==="tags"){const b=a[s]||[],be=k=>{if(k.key==="Enter"){k.preventDefault();const C=k.currentTarget.value.split(",").map(N=>N.trim()).filter(N=>N&&!b.includes(N));if(C.length>0){const N=[...b,...C];m(t,s,N),k.currentTarget.value=""}}},fe=k=>{const C=b.filter(N=>N!==k);m(t,s,C)};return e.jsxs("div",{className:_(y,`${n}.[${t}].${s}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("input",{type:"text",onKeyDown:be,title:"Type and press Enter",placeholder:"Type and press Enter",className:G}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:b.map((k,C)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[k,e.jsx("button",{type:"button",onClick:()=>fe(k),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},C))})]},String(s))}return D==="select"&&(w!=null&&w.length)?e.jsxs("div",{className:_(y,`${n}.[${t}].${s}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsxs("select",{name:`${n}.[${t}].${s}`,className:G,value:A||"",onChange:b=>m(t,s,[b.target.value]),children:[e.jsx("option",{value:"",children:"Select an option"}),w.map(b=>e.jsx("option",{value:b.value,children:b.label},b.value))]})]},String(s)):e.jsxs("div",{className:_(y,`${n}.[${t}].${s}`)?E.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:I,children:v}),e.jsx("input",{type:D==="date"?"month":D,name:`${n}.[${t}].${s}`,className:D==="date"?H:G,value:A||"",onChange:b=>m(t,s,b.target.value)})]},String(s))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:Fe,onClick:async()=>{const s={};Object.keys(o[t]).forEach(M=>{s[M]=!0});const v={[n]:Array(o.length).fill({})};v[n][t]=s,d(v,!1);const D=await j(),w=_(D,`${n}[${t}]`);w&&Object.keys(w).length>0||me(t)},children:"Save"})})]},a.id)})]})}try{q.displayName="EditableSection",q.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}var $e="trzeub0",Le="trzeub1",Ue="trzeub2";const X=({name:l,level:i,years:u,barColor:g="#59c15d",totalBlocks:n=30,onDelete:c})=>{const r=Math.round(i/100*n),[p,j]=f.useState(0);f.useEffect(()=>{const x=setInterval(()=>{j(o=>o<r?o+1:(clearInterval(x),o))},30);return()=>clearInterval(x)},[r]);const d=p,y=n-d;return e.jsxs("div",{className:$e,children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"16px",marginBottom:"4px"},children:[l," - ",e.jsxs("span",{style:{fontStyle:"italic",fontWeight:400,fontSize:"14px"},children:[u," year",u!==1?"s":""]})]}),c&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Le,onClick:c,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),e.jsxs("div",{className:Ue,style:{color:g},children:[Array.from({length:d}).map((x,o)=>e.jsx("span",{children:"█"},`fill-${o}`)),Array.from({length:y}).map((x,o)=>e.jsx("span",{children:"░"},`empty-${o}`))]}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"#666"}})]})};try{X.displayName="BlockSkillBar",X.__docgenInfo={description:"",displayName:"BlockSkillBar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:{value:"#59c15d"},description:"",name:"barColor",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},years:{defaultValue:null,description:"",name:"years",required:!0,type:{name:"number"}},totalBlocks:{defaultValue:{value:"30"},description:"",name:"totalBlocks",required:!1,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}var Re="_1q7p6f20",Be="_1q7p6f21";const Z=({skills:l,barColor:i,onDelete:u})=>{const[g,n]=f.useState(!1),c=g?l:l.slice(0,6),r=()=>n(p=>!p);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:Re,children:c.map((p,j)=>e.jsx(X,{name:p.name,level:p.level,years:p.years,barColor:i,onDelete:u?()=>u(j):void 0},p.name))}),l.length>6&&e.jsx("button",{type:"button",className:Be,onClick:r,children:g?"Show Less":`Show ${l.length-6} More`})]})};try{Z.displayName="SkillBarsGrid",Z.__docgenInfo={description:"",displayName:"SkillBarsGrid",props:{skills:{defaultValue:null,description:"",name:"skills",required:!0,type:{name:"Skill[]"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var Pe="_18ujq3g0",Ae="_18ujq3g1",z="_18ujq3g2",Me="_18ujq3g3",Q="_18ujq3g4",K="_18ujq3g5";const ee=({name:l})=>{const{values:i,setFieldValue:u}=ae(),g=_(i,l)||[],{themeColor:n}=i,[c,r]=f.useState(""),[p,j]=f.useState(""),[d,y]=f.useState(""),[x,o]=f.useState(""),R=()=>{const m=c.trim();if(!m||p===""||d===""){o("All fields are required.");return}if(g.some(V=>V.name.toLowerCase()===m.toLowerCase())){o("This skill already exists.");return}const P=[...g,{name:m,level:Number(p),years:Number(d)}];u(l,P),r(""),j(""),y(""),o("")},S=m=>{const B=g.filter((P,V)=>V!==m);u(l,B)};return e.jsxs("div",{className:Pe,children:[e.jsx(Z,{skills:g,onDelete:S,barColor:n.base}),e.jsxs("div",{children:[e.jsxs("div",{className:Ae,children:[e.jsxs("div",{className:Q,children:[e.jsx("label",{className:K,children:"Skill Name"}),e.jsx("input",{type:"text",placeholder:"e.g. React",value:c,onChange:m=>{r(m.target.value),o("")},className:z})]}),e.jsxs("div",{className:Q,children:[e.jsx("label",{className:K,children:"Proficiency (%)"}),e.jsx("input",{type:"number",placeholder:"0–100",value:p,onChange:m=>j(Number(m.target.value)),min:0,max:100,className:z})]}),e.jsxs("div",{className:Q,children:[e.jsx("label",{className:K,children:"Years of Experience"}),e.jsx("input",{type:"number",placeholder:"e.g. 2",value:d,onChange:m=>y(Number(m.target.value)),min:0,max:50,className:z})]}),e.jsx("button",{type:"button",onClick:R,className:Me,style:{backgroundImage:n==null?void 0:n.gradient},children:"Add"})]}),x&&e.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:x})]})]})};try{ee.displayName="SkillsSection",ee.__docgenInfo={description:"",displayName:"SkillsSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}}}catch{}var Oe="hsd6p10",Je="hsd6p11",oe="hsd6p12",We="hsd6p13",Ge="hsd6p14",He="hsd6p15";const de=[{name:"OnlineFreeCV Blue",base:"#a147ef",gradient:"linear-gradient(312deg, #ff5cef 5.38%, #5e36f2 113.21%)",blob:"rgb(71 26 162)"},{name:"Sunset",base:"#fe603c",gradient:"linear-gradient(to bottom, #FF7F50, #FF0000)",blob:"rgb(153 21 4)"},{name:"Ocean Blue",base:"#00aae8",gradient:"linear-gradient(to bottom, #00d4ff , #0082d1)",blob:"rgb(9 85 142)"},{name:"Purple Bliss",base:"#bd76ff",gradient:"linear-gradient(to bottom, #bd76ff, #6a0dad)",blob:"rgb(69 5 133)"},{name:"Mint Leaf",base:"#00A884",gradient:"linear-gradient(to bottom, #00E676, #00A884)",blob:"rgb(12 105 76)"},{name:"Cherry Blossom",base:"#f04b89",gradient:"linear-gradient(to bottom, #FF6FA1, #D20457)",blob:"rgb(175, 1, 69)"},{name:"Golden Hour",base:"#feaa02",gradient:"linear-gradient(to bottom, #FFD700, #FF8C00)",blob:"rgb(179 100 0)"},{name:"Midnight",base:"#2C5364",gradient:"linear-gradient(to bottom, #5c9fbc, #0F2027)",blob:"rgb(4 51 72)"},{name:"Bright Flame",base:"#ff6d05",gradient:"linear-gradient(to bottom, #FFA500, #FF0000)",blob:"rgb(127 44 1)"}],te=({name:l})=>{var p,j;const[i,,u]=he(l),[g,n]=f.useState(!1),c=f.useRef(null);f.useEffect(()=>{if(typeof i.value=="string"){const d=de.find(y=>y.name===i.value);d&&u.setValue(d)}},[i.value,u]),f.useEffect(()=>{const d=y=>{c.current&&!c.current.contains(y.target)&&n(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const r=d=>{u.setValue(d),n(!1)};return e.jsxs("div",{className:Oe,ref:c,children:[e.jsxs("button",{type:"button",className:Je,onClick:()=>n(d=>!d),children:[e.jsx("span",{className:oe,style:{backgroundImage:(p=i.value)==null?void 0:p.gradient}}),((j=i.value)==null?void 0:j.name)||"Select Theme"]}),g&&e.jsx("div",{className:We,children:de.map(d=>{var y;return e.jsxs("div",{title:d.name,className:`${Ge} ${((y=i.value)==null?void 0:y.name)===d.name?He:""}`,onClick:()=>r(d),children:[e.jsx("span",{className:oe,style:{backgroundImage:d.gradient}}),d.name]},d.name)})})]})};try{te.displayName="ColorPickerDropdown",te.__docgenInfo={description:"",displayName:"ColorPickerDropdown",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const ze=()=>e.jsx(e.Fragment,{}),ne=ve(ze);try{ne.displayName="Appform",ne.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const Qe=O().shape({title:h().required("Title is required"),company:h().required("Company is required"),startDate:h().required("Start Date is required"),isPresent:le(),endDate:h().when("isPresent",([l],i)=>l===!1?i.required("End Date is required"):i.notRequired()),skills:F().of(h()).min(1,"At least one skill required"),description:h().required("Description is required")}),Ke=O().shape({title:h().required("Title is required"),university:h().required("University is required"),startDate:h().required("Start Date is required"),isPresent:le(),endDate:h().when("isPresent",([l],i)=>l===!1?i.required("End Date is required"):i.notRequired()),tags:F().of(h()).min(1,"At least one tag required"),description:h().required("Description is required")}),Ye=O().shape({title:h().required("Title is required"),description:h().required("Description is required"),startDate:h().required("Start Date is required"),isPresent:le(),endDate:h().when("isPresent",([l],i)=>l===!1?i.required("End Date is required"):i.notRequired()),skills:F().of(h()).min(1,"At least one skill required")}),Xe=O().shape({firstName:h().required("First Name is required"),experiences:F().of(Qe),educations:F().of(Ke),projects:F().of(Ye)}),dt={title:"DesignSystem/OnlineFreeCV/Form",component:ne,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},Ze=()=>{const{values:l}=ae();return e.jsxs(e.Fragment,{children:[e.jsx(U,{title:"Theme Color",themeColor:l.themeColor,children:e.jsx(te,{name:"themeColor"})}),e.jsx(U,{title:"Technical Skills",themeColor:l.themeColor,children:e.jsx(ee,{name:"skills",barColor:"red"})})]})},$={args:{initialValues:{experiences:[{title:"Principal Software Consultant",company:"System Limited",skills:["JavaScript","React","Node.js"],description:"Leading the development of scalable web applications.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",logoUrl:"https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",isPresent:!0,isEdit:!1,id:"1"}],educations:[{title:"Bachelor of Computer Software Engineering",university:"FURC",logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"Studied software engineering principles and practices.",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"Web Application Development",description:"Developed a scalable web application using React and Node.js.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,logoUrl:"https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",isEdit:!0,id:"1"}],references:[{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:"",isEdit:!0}],skills:[{name:"JavaScript",level:80,years:5}],themeColor:"OnlineFreeCV Blue",languages:[{id:"",title:"",tags:[],sectionName:"simple",isEdit:!0}],hobbies:[{id:"",title:"",description:"",sectionName:"simple",isEdit:!0}]},onSubmit:(l,i)=>{alert(`Form submitted: ${JSON.stringify(l)}`),i.setSubmitting(!1)},validationSchema:Xe,children:e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(q,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Skills",type:"tags"},{key:"logoUrl",label:"Company Logo URL",type:"text"},{key:"level",label:"Seniority Level",type:"select",options:[{label:"Intern",value:"intern"},{label:"Junior",value:"junior"},{label:"Mid",value:"mid"},{label:"Senior",value:"senior"},{label:"Lead",value:"lead"}]}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,tags:[],id:"",logoUrl:"",level:"junior"}}),e.jsx(q,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Degree Title",type:"text"},{key:"university",label:"Institute",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"},{key:"logoUrl",label:"Institute Logo URL",type:"text"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Role",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Project Logo URL",type:"text"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[],logoUrl:""}}),e.jsx(q,{sectionTitle:"References",itemDisplayDirection:"row",name:"references",fields:[{key:"title",label:"Name",type:"text"},{key:"location",label:"Designation",type:"text"},{key:"subtitle",label:"Company",type:"text"},{key:"email",label:"Email",type:"text"},{key:"phone",label:"Phone",type:"text"},{key:"website",label:"Website",type:"text"},{key:"logoUrl",label:"Profile Picture URL",type:"text"}],defaultItem:{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:""}}),e.jsx(q,{sectionTitle:"Languages",name:"languages",defaultItem:{id:"",title:"",tags:[],sectionName:"simple",isEdit:!0},fields:[{key:"title",label:"Language",type:"text"},{key:"tags",label:"Proficiency",type:"select",options:[{label:"Basic",value:"Basic"},{label:"Conversational",value:"Conversational"},{label:"Fluent",value:"Fluent"},{label:"Native",value:"Native"}]}]}),e.jsx(q,{sectionTitle:"Hobbies",itemDisplayDirection:"row",name:"hobbies",defaultItem:{id:"",title:"",description:"",sectionName:"simple",isEdit:!0},fields:[{key:"title",label:"Hobby",type:"text"},{key:"description",label:"Details",type:"textarea"}]})]})}};$.storyName="Experience Form";var ce,ue,pe;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const ct=["Default"];export{$ as Default,ct as __namedExportsOrder,dt as default};

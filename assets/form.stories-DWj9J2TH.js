import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{u as X,g as w,d as me,w as ge,c as A,a as C,b as u,e as Z}from"./EditableField-DC4HnaDX.js";import{r as f}from"./index-BwDkhjyp.js";import{E as ye}from"./index-7kUX7Lvd.js";import{c as B}from"./index-BpvXyOxN.js";import{T as fe}from"./index-B8AQXhD0.js";/* empty css                             */import"./_commonjsHelpers-BosuxZz1.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";var be="_1rkp4c1",he="_1rkp4c2",xe="_1rkp4c3";const T=({title:n,children:i,className:y,titleFontStyle:b,rightContent:r,themeColor:c})=>e.jsxs("section",{className:B(he,y),children:[e.jsxs("div",{className:be,children:[e.jsxs("div",{className:B(xe,b),children:[e.jsx(fe,{variant:"h4",children:n}),e.jsx("span",{style:{backgroundImage:c==null?void 0:c.gradient}})]}),r&&e.jsx("div",{children:r})]}),i]});try{T.displayName="Section",T.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFontStyle:{defaultValue:null,description:"",name:"titleFontStyle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"{ gradient: string; color: string; }"}}}}}catch{}var ve="_14lk4sg3",je="_14lk4sg4",I={error:"_14lk4sg5"},V="_14lk4sg6",te="_14lk4sg7",O="_14lk4sg8 _14lk4sg7",Se="_14lk4sg9 _14lk4sg7",ke="_14lk4sga",De="_14lk4sgc",ne="_14lk4sgd";function _e(){return Date.now().toString()+Math.random().toString(36).substring(2)}function N({sectionTitle:n,itemDisplayDirection:i="column",fields:y,defaultItem:b,name:r,onSave:c}){var ee;const{values:d,setFieldValue:m,validateForm:j,setTouched:o,errors:g}=X(),v=f.useMemo(()=>d[r]||[],[d,r]),[s,$]=f.useState([]);f.useEffect(()=>{v!=null&&v.length&&$(v)},[v]);const k=a=>{$(a),m(r,a)},p=(a,t,l)=>{const h=[...s];h[a]={...h[a],[t]:l},k(h)},R=a=>{const t=[...s];t[a].isPresent=!t[a].isPresent,t[a].isPresent&&(t[a].endDate=""),k(t)},P=()=>{const a={...b,isEdit:!0,id:_e()},t=[...s,a];k(t)},E=a=>{if(s.length===1)return;const t=[...s];t.splice(a,1),k(t)},oe=a=>{const t=[...s];t[a].isEdit=!1,k(t),c==null||c(t)},de=(a,t)=>{const l=s.map(h=>h.id===a?{...h,isEdit:t}:h);k(l)},L=f.useMemo(()=>s.filter(a=>!a.isEdit),[s]),ce=f.useMemo(()=>s.filter(a=>a.isEdit),[s]);return e.jsxs(T,{title:n,themeColor:d==null?void 0:d.themeColor,rightContent:e.jsx("button",{onClick:P,className:ve,style:{backgroundImage:(ee=d==null?void 0:d.themeColor)==null?void 0:ee.gradient},children:"Add"}),children:[L.length>0&&e.jsx(ye,{items:L,themeColor:d==null?void 0:d.themeColor,itemDisplayDirection:i,onEdit:a=>de(L[a].id,!0)}),ce.map(a=>{const t=s.findIndex(l=>l.id===a.id);return e.jsxs("div",{className:je,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["Item ",t+1]}),s.length>1&&e.jsx("button",{onClick:()=>E(t),style:{background:"transparent",border:"none",color:"#d00",cursor:"pointer",fontWeight:"bold"},children:"🗑 Remove"})]}),y.map(({key:l,label:h,type:_})=>{var M;const F=a[l];if(l==="startDate")return e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox",name:`${r}.[${t}].${l}`,checked:a.isPresent||!1,style:{accentColor:(M=d==null?void 0:d.themeColor)==null?void 0:M.base},onChange:()=>R(t)}),"I am currently working in this role"]}),e.jsxs("div",{className:De,children:[e.jsxs("div",{className:B(ne,w(g,`${r}.[${t}].${l}`)?I.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:V,children:"Start Date"}),e.jsx("input",{type:"month",name:`${r}.[${t}].${l}`,className:O,value:a.startDate||"",onChange:x=>p(t,"startDate",x.target.value)})]}),e.jsxs("div",{className:B(ne,w(g,`${r}.[${t}].${l}`)?I.error:""),"data-placeholder":"Required",children:[e.jsx("label",{className:V,children:"End Date"}),e.jsx("input",{type:"month",className:O,name:`${r}.[${t}].${l}`,value:a.isPresent?"":a.endDate||"",disabled:a.isPresent,onChange:x=>p(t,"endDate",x.target.value)})]})]})]},"date-block");if(l==="endDate")return null;if(_==="textarea")return e.jsxs("div",{className:w(g,`${r}.[${t}].${l}`)?I.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:V,children:h}),e.jsx("textarea",{className:Se,name:`${r}.[${t}].${l}`,value:F||"",onChange:x=>p(t,l,x.target.value)})]},String(l));if(_==="tags"){const x=a[l]||[],pe=S=>{if(S.key==="Enter"){S.preventDefault();const q=S.currentTarget.value.split(",").map(D=>D.trim()).filter(D=>D&&!x.includes(D));if(q.length>0){const D=[...x,...q];p(t,l,D),S.currentTarget.value=""}}},ue=S=>{const q=x.filter(D=>D!==S);p(t,l,q)};return e.jsxs("div",{className:w(g,`${r}.[${t}].${l}`)?I.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:V,children:h}),e.jsx("input",{type:"text",onKeyDown:pe,title:"Type and press Enter",placeholder:"Type and press Enter",className:te}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:x.map((S,q)=>e.jsxs("span",{style:{background:"#eee",padding:"0.3rem 0.6rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem"},children:[S,e.jsx("button",{type:"button",onClick:()=>ue(S),style:{background:"transparent",border:"none",cursor:"pointer",fontWeight:"bold",color:"#c00"},children:"×"})]},q))})]},String(l))}return e.jsxs("div",{className:w(g,`${r}.[${t}].${l}`)?I.error:"","data-placeholder":"Required",children:[e.jsx("label",{className:V,children:h}),e.jsx("input",{type:_==="date"?"month":_,name:`${r}.[${t}].${l}`,className:_==="date"?O:te,value:F||"",onChange:x=>p(t,l,x.target.value)})]},String(l))}),e.jsx("div",{style:{textAlign:"right",marginTop:"1.5rem"},children:e.jsx("button",{type:"button",className:ke,onClick:async()=>{const l={};Object.keys(s[t]).forEach(x=>{l[x]=!0});const h={[r]:Array(s.length).fill({})};h[r][t]=l,o(h,!1);const _=await j(),F=w(_,`${r}[${t}]`);F&&Object.keys(F).length>0||oe(t)},children:"Save"})})]},a.id)})]})}try{N.displayName="EditableSection",N.__docgenInfo={description:"",displayName:"EditableSection",props:{sectionTitle:{defaultValue:null,description:"",name:"sectionTitle",required:!1,type:{name:"string"}},itemDisplayDirection:{defaultValue:{value:"column"},description:"",name:"itemDisplayDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldConfig<T>[]"}},defaultItem:{defaultValue:null,description:"",name:"defaultItem",required:!0,type:{name:"EditableItem"}},displayOnly:{defaultValue:null,description:"",name:"displayOnly",required:!1,type:{name:"boolean"}},sectionItems:{defaultValue:null,description:"",name:"sectionItems",required:!1,type:{name:"T[]"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((items: T[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}var we="trzeub0",qe="trzeub1",Ne="trzeub2";const z=({name:n,level:i,years:y,barColor:b="#59c15d",totalBlocks:r=30,onDelete:c})=>{const d=Math.round(i/100*r),[m,j]=f.useState(0);f.useEffect(()=>{const v=setInterval(()=>{j(s=>s<d?s+1:(clearInterval(v),s))},30);return()=>clearInterval(v)},[d]);const o=m,g=r-o;return e.jsxs("div",{className:we,children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"16px",marginBottom:"4px"},children:[n," - ",e.jsxs("span",{style:{fontStyle:"italic",fontWeight:400,fontSize:"14px"},children:[y," year",y!==1?"s":""]})]}),c&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:qe,onClick:c,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),e.jsxs("div",{className:Ne,style:{color:b},children:[Array.from({length:o}).map((v,s)=>e.jsx("span",{children:"█"},`fill-${s}`)),Array.from({length:g}).map((v,s)=>e.jsx("span",{children:"░"},`empty-${s}`))]}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"#666"}})]})};try{z.displayName="BlockSkillBar",z.__docgenInfo={description:"",displayName:"BlockSkillBar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:{value:"#59c15d"},description:"",name:"barColor",required:!1,type:{name:"string"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},years:{defaultValue:null,description:"",name:"years",required:!0,type:{name:"number"}},totalBlocks:{defaultValue:{value:"30"},description:"",name:"totalBlocks",required:!1,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}var Ce="_1q7p6f20",Ee="_1q7p6f21";const H=({skills:n,barColor:i,onDelete:y})=>{const[b,r]=f.useState(!1),c=b?n:n.slice(0,6),d=()=>r(m=>!m);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:Ce,children:c.map((m,j)=>e.jsx(z,{name:m.name,level:m.level,years:m.years,barColor:i,onDelete:y?()=>y(j):void 0},m.name))}),n.length>6&&e.jsx("button",{type:"button",className:Ee,onClick:d,children:b?"Show Less":`Show ${n.length-6} More`})]})};try{H.displayName="SkillBarsGrid",H.__docgenInfo={description:"",displayName:"SkillBarsGrid",props:{skills:{defaultValue:null,description:"",name:"skills",required:!0,type:{name:"Skill[]"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var Fe="_18ujq3g0",Ie="_18ujq3g1",J="_18ujq3g2",Ve="_18ujq3g3",W="_18ujq3g4",G="_18ujq3g5";const Q=({name:n})=>{const{values:i,setFieldValue:y}=X(),b=w(i,n)||[],{themeColor:r}=i,[c,d]=f.useState(""),[m,j]=f.useState(""),[o,g]=f.useState(""),[v,s]=f.useState(""),$=()=>{const p=c.trim();if(!p||m===""||o===""){s("All fields are required.");return}if(b.some(E=>E.name.toLowerCase()===p.toLowerCase())){s("This skill already exists.");return}const P=[...b,{name:p,level:Number(m),years:Number(o)}];y(n,P),d(""),j(""),g(""),s("")},k=p=>{const R=b.filter((P,E)=>E!==p);y(n,R)};return e.jsxs("div",{className:Fe,children:[e.jsx(H,{skills:b,onDelete:k,barColor:r.base}),e.jsxs("div",{children:[e.jsxs("div",{className:Ie,children:[e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Skill Name"}),e.jsx("input",{type:"text",placeholder:"e.g. React",value:c,onChange:p=>{d(p.target.value),s("")},className:J})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Proficiency (%)"}),e.jsx("input",{type:"number",placeholder:"0–100",value:m,onChange:p=>j(Number(p.target.value)),min:0,max:100,className:J})]}),e.jsxs("div",{className:W,children:[e.jsx("label",{className:G,children:"Years of Experience"}),e.jsx("input",{type:"number",placeholder:"e.g. 2",value:o,onChange:p=>g(Number(p.target.value)),min:0,max:50,className:J})]}),e.jsx("button",{type:"button",onClick:$,className:Ve,style:{backgroundImage:r==null?void 0:r.gradient},children:"Add"})]}),v&&e.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:v})]})]})};try{Q.displayName="SkillsSection",Q.__docgenInfo={description:"",displayName:"SkillsSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}}}catch{}var Ue="hsd6p10",Te="hsd6p11",ae="hsd6p12",$e="hsd6p13",Re="hsd6p14",Pe="hsd6p15";const re=[{name:"OnlineFreeCV Blue",base:"#a147ef",gradient:"linear-gradient(312deg, #ff5cef 5.38%, #5e36f2 113.21%)",blob:"rgb(71 26 162)"},{name:"Sunset",base:"#fe603c",gradient:"linear-gradient(to bottom, #FF7F50, #FF0000)",blob:"rgb(153 21 4)"},{name:"Ocean Blue",base:"#00aae8",gradient:"linear-gradient(to bottom, #00d4ff , #0082d1)",blob:"rgb(9 85 142)"},{name:"Purple Bliss",base:"#bd76ff",gradient:"linear-gradient(to bottom, #bd76ff, #6a0dad)",blob:"rgb(69 5 133)"},{name:"Mint Leaf",base:"#00A884",gradient:"linear-gradient(to bottom, #00E676, #00A884)",blob:"rgb(12 105 76)"},{name:"Cherry Blossom",base:"#f04b89",gradient:"linear-gradient(to bottom, #FF6FA1, #D20457)",blob:"rgb(175, 1, 69)"},{name:"Golden Hour",base:"#feaa02",gradient:"linear-gradient(to bottom, #FFD700, #FF8C00)",blob:"rgb(179 100 0)"},{name:"Midnight",base:"#2C5364",gradient:"linear-gradient(to bottom, #5c9fbc, #0F2027)",blob:"rgb(4 51 72)"},{name:"Bright Flame",base:"#ff6d05",gradient:"linear-gradient(to bottom, #FFA500, #FF0000)",blob:"rgb(127 44 1)"}],K=({name:n})=>{var m,j;const[i,,y]=me(n),[b,r]=f.useState(!1),c=f.useRef(null);f.useEffect(()=>{if(typeof i.value=="string"){const o=re.find(g=>g.name===i.value);o&&y.setValue(o)}},[i.value,y]),f.useEffect(()=>{const o=g=>{c.current&&!c.current.contains(g.target)&&r(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const d=o=>{y.setValue(o),r(!1)};return e.jsxs("div",{className:Ue,ref:c,children:[e.jsxs("button",{type:"button",className:Te,onClick:()=>r(o=>!o),children:[e.jsx("span",{className:ae,style:{backgroundImage:(m=i.value)==null?void 0:m.gradient}}),((j=i.value)==null?void 0:j.name)||"Select Theme"]}),b&&e.jsx("div",{className:$e,children:re.map(o=>{var g;return e.jsxs("div",{title:o.name,className:`${Re} ${((g=i.value)==null?void 0:g.name)===o.name?Pe:""}`,onClick:()=>d(o),children:[e.jsx("span",{className:ae,style:{backgroundImage:o.gradient}}),o.name]},o.name)})})]})};try{K.displayName="ColorPickerDropdown",K.__docgenInfo={description:"",displayName:"ColorPickerDropdown",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const Be=()=>e.jsx(e.Fragment,{}),Y=ge(Be);try{Y.displayName="Appform",Y.__docgenInfo={description:"",displayName:"Appform",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"MyFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => void"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}}}}}catch{}const Ae=A().shape({title:u().required("Title is required"),company:u().required("Company is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([n],i)=>n===!1?i.required("End Date is required"):i.notRequired()),skills:C().of(u()).min(1,"At least one skill required"),description:u().required("Description is required")}),Le=A().shape({title:u().required("Title is required"),university:u().required("University is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([n],i)=>n===!1?i.required("End Date is required"):i.notRequired()),tags:C().of(u()).min(1,"At least one tag required"),description:u().required("Description is required")}),Me=A().shape({title:u().required("Title is required"),description:u().required("Description is required"),startDate:u().required("Start Date is required"),isPresent:Z(),endDate:u().when("isPresent",([n],i)=>n===!1?i.required("End Date is required"):i.notRequired()),skills:C().of(u()).min(1,"At least one skill required")}),Oe=A().shape({firstName:u().required("First Name is required"),experiences:C().of(Ae),educations:C().of(Le),projects:C().of(Me)}),et={title:"DesignSystem/OnlineFreeCV/Form",component:Y,parameters:{},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted",description:"Submit handler for the form",table:{type:{summary:"function"}}},children:{control:!1,description:"Form content",table:{type:{summary:"ReactNode"}}}}},Je=()=>{const{values:n}=X();return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Theme Color",themeColor:n.themeColor,children:e.jsx(K,{name:"themeColor"})}),e.jsx(T,{title:"Technical Skills",themeColor:n.themeColor,children:e.jsx(Q,{name:"skills",barColor:"red"})})]})},U={args:{initialValues:{experiences:[{title:"Principal Software Consultant",company:"System Limited",skills:["JavaScript","React","Node.js"],description:"Leading the development of scalable web applications.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",logoUrl:"https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",isPresent:!0,isEdit:!1,id:"1"}],educations:[{title:"Bachelor of Computer Software Engineering",university:"FURC",logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",description:"Studied software engineering principles and practices.",isPresent:!0,isEdit:!0,id:"1"}],projects:[{title:"Web Application Development",description:"Developed a scalable web application using React and Node.js.",startDate:new Date().toISOString().split("-").slice(0,2).join("-"),endDate:"",isPresent:!0,logoUrl:"https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",isEdit:!0,id:"1"}],references:[{title:"Junaid Umer",location:"Principle Software Engineer",subtitle:"System Limited",email:"junaid.umer@example.com",phone:"+1234567890",id:"1",website:"https://www.junaidumer.com",logoUrl:"https://www.junaidumer.com/images/side2.jpg"}],skills:[{name:"JavaScript",level:80,years:5}],themeColor:"OnlineFreeCV Blue"},onSubmit:(n,i)=>{alert(`Form submitted: ${JSON.stringify(n)}`),i.setSubmitting(!1)},validationSchema:Oe,children:e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(N,{sectionTitle:"Experience",name:"experiences",fields:[{key:"title",label:"Job Title",type:"text"},{key:"company",label:"Company",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Skills",type:"tags"},{key:"logoUrl",label:"Company Logo URL",type:"text"}],defaultItem:{title:"",company:"",description:"",startDate:"",endDate:"",isPresent:!0,isEdit:!0,tags:[],id:"",logoUrl:""}}),e.jsx(N,{sectionTitle:"Education",name:"educations",fields:[{key:"title",label:"Degree Title",type:"text"},{key:"university",label:"Institute",type:"text"},{key:"location",label:"Location",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"tags",label:"Tags",type:"tags"},{key:"logoUrl",label:"Institute Logo URL",type:"text"}],defaultItem:{title:"",university:"",startDate:"",endDate:"",location:"",description:"",tags:[],logoUrl:""}}),e.jsx(N,{sectionTitle:"Projects",name:"projects",fields:[{key:"title",label:"Role",type:"text"},{key:"description",label:"Description",type:"textarea"},{key:"startDate",label:"Start Date",type:"date"},{key:"endDate",label:"End Date",type:"date"},{key:"skills",label:"Skills",type:"tags"},{key:"logoUrl",label:"Project Logo URL",type:"text"}],defaultItem:{title:"",description:"",startDate:"",endDate:"",skills:[],logoUrl:""}}),e.jsx(N,{sectionTitle:"References",itemDisplayDirection:"row",name:"references",fields:[{key:"title",label:"Name",type:"text"},{key:"location",label:"Designation",type:"text"},{key:"subtitle",label:"Company",type:"text"},{key:"email",label:"Email",type:"text"},{key:"phone",label:"Phone",type:"text"},{key:"website",label:"Website",type:"text"},{key:"logoUrl",label:"Profile Picture URL",type:"text"}],defaultItem:{title:"",subtitle:"",location:"",email:"",phone:"",website:"",logoUrl:""}})]})}};U.storyName="Experience Form";var le,ie,se;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      </>
  }
}`,...(se=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const tt=["Default"];export{U as Default,tt as __namedExportsOrder,et as default};

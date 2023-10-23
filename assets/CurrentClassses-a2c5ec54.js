import{r as n,j as e,u as C,a as w,V as T,F as k,W,X as B,Y as P,Z as V,a0 as U,a1 as J}from"./index-5ae4280e.js";const v=n.createContext({chosenClasses:[],setChosenClasses:()=>{},setHoveredClass:()=>{}});function se({login:l,loginData:t}){const{hoveredClass:s,chosenClasses:d}=n.useContext(v),c=t??d;return e.jsxs("section",{className:"rounded-lg md:col-span-7 md:row-span-6 max-md:h-[60%] col-span-full bg-c1 md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1",children:[e.jsx("div",{className:"col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]",children:[...Array(21).keys()].map(a=>e.jsxs("span",{className:"translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2",children:[Math.floor(a/2)+8,":",a%2===0?"00":"30"]},a))}),e.jsxs("div",{className:"col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative",children:[e.jsx("div",{className:"absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2",children:[...Array(19).keys()].map(a=>e.jsx("div",{children:e.jsx(E,{n:a,lineProperty:"width"})},`horizontal-${a}`))}),e.jsxs("div",{className:"absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]",children:[e.jsx("div",{className:"row-span-1 col-span-full"}),[...Array(4).keys()].map(a=>e.jsx("div",{className:"row-[span_20/span_20]",children:e.jsx(E,{n:a,lineProperty:"height"})},`vertical-${a}`))]}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(a=>{const u=window.innerWidth>=1100?a:a.slice(0,3);return e.jsx("span",{className:"text-center font-semibold md:text-base text-xs",children:u},a)}),e.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md",children:c.map((a,u)=>e.jsx(F,{blocksToShow:a,index:u,login:l},u))}),s&&e.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 row-span-full col-span-full row-start-2 absolute opacity-50 z-10 h-full w-full",children:e.jsx(F,{blocksToShow:s,index:-1,hover:!0})})]})]})}function E({n:l,lineProperty:t}){const s=C({from:{[t]:"0%"},to:{[t]:"100%"},delay:t==="height"?l*100:l*30}),d=t==="height"?"border-r-2 w-full left-[1px]":"border-b-2 h-full top-[1px]";return e.jsx(w.div,{className:`${t==="height"?"w-full py-2":"h-full px-2"} box-border`,style:s,children:e.jsx("div",{className:`${d} border-[hsl(0,0%,77%)] h-full w-full relative`})})}function F({blocksToShow:l,login:t,hover:s,index:d}){const c=T(l.viewData,{from:{y:-20,scale:0},enter:{y:0,scale:1},leave:{y:-20,scale:0},trail:s?0:50,config:{duration:s?0:void 0}}),{chosenClasses:a,setChosenClasses:u}=n.useContext(v),r=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(150,97%,15%)","hsl(230,97%,15%)","hsl(110,97%,15%)","hsl(270,97%,15%)","hsl(70,97%,15%)","hsl(310,97%,15%)","hsl(30,97%,15%)","hsl(350,97%,15%)","#FFF"];return c((x,m)=>{const h=Object.entries(m).flat();return e.jsxs(w.div,{className:`md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] ${t?"":"cursor-pointer"} rounded-lg overflow-hidden`,style:{gridColumnStart:h[0],gridRowStart:h[1][0],gridRowEnd:h[1][1],backgroundColor:r.at(d),color:d>7?"white":"black",...x},onClick:()=>{t||u(a.filter(j=>j.code!==l.code))},children:[e.jsx("p",{className:"line-clamp-2 font-semibold",children:l.lecture.title}),e.jsx("p",{className:"line-clamp-1 font-light mt-1",children:l.code}),e.jsx("p",{className:"font-light",children:l.section}),e.jsx("p",{className:"line-clamp-2 mt-1",children:l.lecture.prof})]},l.section+l.code+h[0])})}const Q=n.lazy(()=>B(()=>import("./Classes-610b0943.js"),["assets/Classes-610b0943.js","assets/index-5ae4280e.js","assets/index-ffbf0813.css"]));function le({classes:l,setLoading:t,userData:s,aucmpData:d}){const[c,a]=n.useState(""),u=n.useDeferredValue(c),[r,x]=n.useState("search"),m=n.useDeferredValue(r),[h,j]=n.useState(!1),{setHoveredClass:b}=n.useContext(v);return e.jsxs("section",{className:"md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2 overflow-hidde",children:[e.jsxs("nav",{className:"flex justify-between w-full p-2 box-border",children:[e.jsx(M,{current:r,setCurrent:x,text:"search"}),e.jsx(M,{current:r,setCurrent:x,text:"filter"}),e.jsx(M,{current:r,setCurrent:x,text:"saved"})]}),r==="search"&&m===r?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"relative md:mx-4 mx-2 mt-2",children:[e.jsx(k,{icon:W,className:"absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer",onMouseOver:()=>j(!0),onMouseOut:()=>j(!1)}),h&&e.jsxs("div",{className:"absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-sm w-[70dvw]",children:[e.jsx("p",{children:"Search by keywords, separate them by a comma. Use the filter tab to make your life easier."}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Available options:"}),e.jsxs("ul",{className:"pl-4 [&>li]:list-disc [&>li>span]:font-bold",children:[e.jsxs("li",{children:[e.jsx("span",{children:"@"}),": only show available classes."]}),e.jsxs("li",{children:[e.jsxs("span",{children:["r",">","n"]}),": Teachers with +n/5 rating on ratemyprofessor. Symbol can be ","<",", ",">"," or = (e.g. r","=","5)"]}),e.jsxs("li",{children:[e.jsxs("span",{children:["s",">","n"]}),": Teachers with +n/100 score. Symbol can be ","<",", ",">"," or =. (e.g. s=100)"]}),e.jsxs("li",{children:[e.jsx("span",{children:"honours/blended"}),": special keywords."]}),e.jsxs("li",{children:[e.jsx("span",{children:"p=professor"}),": classes taught by"," ",e.jsx("i",{children:"professor"})," (e.g. p=patrik searches for classes taught by professors with patrik in their names)"]}),e.jsxs("li",{children:[e.jsx("span",{children:"COURSE_NAME"}),": searches classes that belong in COURSE_NAME (e.g. ENGLISH searches for english classes)"]}),e.jsxs("li",{children:[e.jsx("span",{children:"XXX-XXX-XXX"}),": course code."]}),e.jsxs("li",{children:[e.jsx("span",{children:"M/T/W/R/F"}),": has class on that day."]}),e.jsxs("li",{children:[e.jsx("span",{children:"class_name"}),": if it's none of the abovementioned keywords, it will treat the keyword as part of the class name."]})]})]})]}),e.jsx("input",{className:"bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md",placeholder:"COURSE, code, professor, rating, class name, ...",value:c,onChange:N=>a(N.target.value)})]}),e.jsx("div",{className:"w-full h-full box-border rounded-lg overflow-y-auto md:px-4 px-2 md:mt-4 mt-2",onPointerOver:()=>{b(void 0)},children:e.jsx(n.Suspense,{fallback:e.jsx(S,{}),children:u===c?e.jsx(Q,{input:u,classes:l,setLoading:t}):e.jsx(S,{})})})]}):r==="search"&&e.jsx(S,{}),r==="filter"&&e.jsx(q,{setInput:a,setCurrent:x,aucmpData:d}),r==="saved"&&e.jsxs("div",{className:"md:flex md:flex-col h-full overflow-hidden",children:[e.jsx(G,{userData:s}),e.jsx(K,{})]})]})}function M({current:l,setCurrent:t,text:s}){var u;const d={width:l===s?"100%":"0%"},[c,a]=C(()=>({from:d}),[]);return n.useEffect(()=>{a.start({to:d})},[l]),e.jsxs("div",{className:"w-1/3 text-center cursor-pointer box-border border-c9 border-solid relative flex justify-center",onClick:()=>t(s),children:[(u=s.at(0))==null?void 0:u.toUpperCase().concat(s.slice(1)),e.jsx(w.p,{className:"absolute h-full box-border border-solid border-b-c9 border-b-2",style:c})]})}function S(){return e.jsxs("div",{className:"gap-2 w-full h-full flex flex-col items-center justify-center",children:[e.jsx("img",{src:"/me-schedule-maker/images/cooking-pot.gif",alt:"cooking-pot git",className:"h-20"}),e.jsx("p",{children:"Wait it's cooking"})]})}function G({userData:l}){const t="jac-mock-schedule-maker",[s,d]=n.useState(()=>{if(l)return l.schedules?l.schedules:[];{const r=window.localStorage.getItem(t);return r?JSON.parse(r):[]}}),c=n.useRef(s.length),{chosenClasses:a}=n.useContext(v);function u(){do c.current+=1;while(s.map(r=>r.id).includes(c.current));d([...s,{id:c.current,data:a}])}return n.useEffect(()=>{l?P(l.uid,s).catch(r=>console.log(r)):window.localStorage.setItem(t,JSON.stringify(s))},[s]),e.jsx("div",{className:"md:basis-1/3 shrink-0 overflow-auto max-md:max-h-48",children:e.jsxs("section",{className:"bg-c1 rounded-lg box-border flex w-full flex-wrap gap-2 p-2",children:[e.jsx("div",{className:"bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer h-20",onClick:()=>u(),children:e.jsx(k,{icon:V,className:"md:text-4xl text-xl"})}),s.map(r=>e.jsx(Z,{i:r,savedSchedule:s,setSavedSchedule:d},r.id))]})})}function Y({blocksToShow:l,index:t}){const s=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(150,97%,15%)","hsl(230,97%,15%)","hsl(110,97%,15%)","hsl(270,97%,15%)","hsl(70,97%,15%)","hsl(310,97%,15%)","hsl(30,97%,15%)","hsl(350,97%,15%)","#FFF"];return l.viewData.map(d=>{const c=Object.entries(d).flat();return e.jsx("div",{className:"z-10 border border-[black] box-border rounded-sm",style:{gridColumnStart:c[0],gridRowStart:c[1][0],gridRowEnd:c[1][1],backgroundColor:s.at(t),color:t>7?"white":"black"}},l.code+l.section+c[0])})}function Z({i:l,savedSchedule:t,setSavedSchedule:s}){const{setChosenClasses:d}=n.useContext(v),c=structuredClone(l);c.data||(c.data=[]);const[a,u]=C(()=>({from:{opacity:0,y:30,scale:1},to:{opacity:1,y:0}}),[]);function r(m){m.stopPropagation(),u.start({from:{opacity:1,scale:1},to:{opacity:0,scale:0},onResolve:()=>{s(t.filter(h=>h.id!==l.id))}})}function x(){d(c.data)}return e.jsxs(w.div,{className:"min-w-[calc(5rem*1.6)] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer h-20 overflow-hidden",style:a,onClick:x,children:[c.data.map((m,h)=>e.jsx(Y,{blocksToShow:m,index:h},h)),e.jsx(k,{icon:U,className:"absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer z-10",onClick:r})]},l.id)}function q({setInput:l,setCurrent:t,aucmpData:s}){const[d,c]=n.useState(!1),[a,u]=n.useState(""),[r,x]=n.useState(""),[m,h]=n.useState(""),j=n.useRef(null);function b(i){var g;return(g=j.current)==null?void 0:g.elements.namedItem(i)}const N=n.useMemo(()=>[...new Set(Object.values(s).flatMap(i=>Object.keys(i)))].sort(),[s]),L=n.useMemo(()=>{const i=Object.values(s).flatMap(p=>Object.entries(p)).filter(p=>p[0].toLowerCase().includes(a.toLowerCase()));return[...new Set(i.flatMap(p=>Object.keys(p[1])))].sort()},[s,a]),_=n.useMemo(()=>{const p=Object.values(s).flatMap(o=>Object.entries(o)).filter(o=>o[0].toLowerCase().includes(a.toLowerCase())).map(o=>o[1]).flatMap(o=>Object.entries(o)).filter(o=>o[0].toLowerCase().includes(r.toLowerCase())).flatMap(o=>Object.values(o[1])).map(o=>o.lecture.title);return[...new Set(p)].sort()},[s,a,r]),I=n.useMemo(()=>{const p=Object.values(s).flatMap(o=>Object.entries(o)).filter(o=>o[0].toLowerCase().includes(a.toLowerCase())).map(o=>o[1]).flatMap(o=>Object.entries(o)).filter(o=>o[0].toLowerCase().includes(r.toLowerCase())).flatMap(o=>Object.values(o[1])).filter(o=>o.lecture.title.includes(m));return[...new Set(p.map(o=>o.lecture.prof))].sort()},[s,a,r,m]);function $(i){if(i.preventDefault(),!j.current){l(""),t("search");return}const g=b("teacherName").value.split(" ").flatMap(f=>f.split(",")).filter(f=>f!=="").map(f=>`p=${f}`),p=Number(b("ratingMax").value),y=Number(b("ratingMin").value),o=[y?`r>${y}`:"",p?`r<${p}`:""],O=Number(b("scoreMax").value),R=Number(b("scoreMin").value),z=[R?`s>${R}`:"",O?`s<${O}`:""],A=["monday","tuesday","wednesday","thursday","friday","honours","blended","available"].map(f=>b(f).checked).map((f,H)=>f?["M","T","W","R","F","honours","blended","@"].at(H):""),X=[a,r,m,...g,...o,...z,...A];l(X.filter(f=>f!=="").join(", ")),t("search")}return e.jsx("div",{className:"box-border w-full h-full p-2 overflow-auto",children:e.jsxs("form",{onSubmit:$,className:"flex flex-col text-base gap-4",ref:j,children:[e.jsxs("label",{children:[e.jsx("p",{className:"font-semibold",children:"Course Name"}),e.jsx("input",{placeholder:"English",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"courseName",list:"course",autoComplete:"off",onChange:i=>u(i.target.value)}),e.jsx("datalist",{id:"course",children:N.map(i=>e.jsx("option",{value:i},i))})]}),e.jsxs("label",{children:[e.jsx("p",{className:"font-semibold",children:"Code"}),e.jsx("input",{placeholder:"603-103-MQ",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"code",list:"code",autoComplete:"off",onChange:i=>x(i.target.value)}),e.jsx("datalist",{id:"code",children:L.map(i=>e.jsx("option",{value:i},i))})]}),e.jsxs("label",{children:[e.jsx("p",{className:"font-semibold",children:"Class Name"}),e.jsx("input",{placeholder:"Hockey is everything",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"className",onChange:i=>h(i.target.value),list:"classNames",autoComplete:"off"}),e.jsx("datalist",{id:"classNames",children:_.map(i=>e.jsx("option",{value:i},i))})]}),e.jsxs("label",{children:[e.jsx("p",{className:"font-semibold",children:"Teacher Name"}),e.jsx("input",{placeholder:"Patrik Burger",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"teacherName",list:"teachers",autoComplete:"off"}),e.jsx("datalist",{id:"teachers",children:I.map(i=>e.jsx("option",{value:i},i))})]}),e.jsxs("div",{className:"flex gap-4 w-full",children:[e.jsxs("label",{className:"basis-1/2",children:[e.jsx("p",{className:"font-semibold",children:"Rating /5"}),e.jsxs("div",{className:"flex gap-1 w-full",children:[e.jsx("div",{className:"basis-full",children:e.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"ratingMin",autoComplete:"off"})}),e.jsx("p",{className:"flex items-center",children:"to"}),e.jsx("div",{className:"basis-full",children:e.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"5",name:"ratingMax",autoComplete:"off"})})]})]}),e.jsxs("label",{className:"basis-1/2",children:[e.jsxs("div",{className:"font-semibold relative",children:["Score /100",e.jsx(k,{icon:J,className:"ml-2",onMouseOver:()=>c(!0),onMouseOut:()=>c(!1)}),d&&e.jsx("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:e.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."})})]}),e.jsxs("div",{className:"flex gap-1 w-full",children:[e.jsx("div",{className:"basis-full",children:e.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"scoreMin",autoComplete:"off"})}),e.jsx("p",{className:"flex items-center",children:"to"}),e.jsx("div",{className:"basis-full",children:e.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"100",name:"scoreMax",autoComplete:"off"})})]})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"basis-1/2",children:[e.jsx("p",{className:"font-semibold",children:"Days"}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"monday"})," Monday"]})}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"tuesday"})," Tuesday"]})}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"wednesday"})," Wednesday"]})}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"thursday"})," Thursday"]})}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"friday"})," Friday"]})})]}),e.jsxs("div",{className:"basis-1/2",children:[e.jsx("p",{className:"font-semibold",children:"Special"}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"honours"})," Honours"]})}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"blended"})," Blended"]})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Options"}),e.jsx("p",{className:"pl-4",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"available"})," Only show available classes"]})})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{type:"reset",className:"rounded-lg p-2 transition hover:outline-c9 outline outline-1 outline-c1",children:"Clear"}),e.jsx("button",{type:"submit",className:"rounded-lg bg-c9 p-2 text-c1 transition hover:bg-c7",children:"Apply"})]})]})})}function K(){const{chosenClasses:l}=n.useContext(v);return e.jsxs("section",{className:"basis-2/3 flex flex-col box-border px-1 pb-1 gap-1 shrink-0 overflow-x-hidden",children:[e.jsxs("div",{className:"sticky top-0 left-0 z-20 bg-c1 pt-1",children:["Course Count: ",l.length]}),l.map((t,s)=>e.jsx(D,{targetClass:t,index:s},s))]})}function D({targetClass:l,index:t}){const{code:s,section:d}=l,{prof:c,title:a}=l.lecture,{chosenClasses:u,setChosenClasses:r}=n.useContext(v),[x,m]=n.useState(!1),h=n.useRef(!0),j=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(150,97%,15%)","hsl(230,97%,15%)","hsl(110,97%,15%)","hsl(270,97%,15%)","hsl(70,97%,15%)","hsl(310,97%,15%)","hsl(30,97%,15%)","hsl(350,97%,15%)","#FFF"],b=C({from:{x:30,opacity:0,y:0},to:{x:x?2:0,y:x?2:0,opacity:1},delay:h.current?t*70:0});return e.jsxs(w.div,{style:{backgroundColor:j.at(t),color:t>7?"white":"black",...b},className:"relative box-border p-1 text-sm cursor-pointer rounded-lg hover:shadow-xl hover:z-10",onClick:()=>r(u.filter(N=>N.code!==s)),onPointerOver:()=>{m(!0),h.current=!1},onPointerOut:()=>m(!1),children:[e.jsx("p",{className:"font-bold",children:a}),e.jsxs("span",{className:"font-light",children:[s," ",d]})," ",c]})}export{v as C,le as S,se as V};

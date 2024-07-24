"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[234],{464:(e,t,s)=>{s.d(t,{A:()=>c});const i="title_title__H7Sko",n="title_title--small__Z+ALg";var a=s(579);const c=e=>{const{title:t}=e,s=t.length<6?n:"";return(0,a.jsx)("h1",{className:"".concat(i," ").concat(s),children:t})}},642:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(394),n=s(579);const a=e=>{const{copyright:t}=e;return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsx)("p",{className:"footer__copyright",children:t})})};var c=s(475);const l=e=>{const{lists:t}=e;return(0,n.jsx)("header",{className:"header",children:(0,n.jsx)("ul",{className:"header__menu",children:t&&t.map(((e,t)=>(0,n.jsx)("li",{className:"header__list",children:(0,n.jsx)(c.N_,{to:e.to,children:e.text})},t)))})})},o=e=>{const{copyright:t}=i.z8,{children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{lists:[{to:"/",text:"About"},{to:"/Resume",text:"Resume"},{to:"/Projects",text:"Projects"}]}),s,(0,n.jsx)(a,{copyright:t})]})}},394:(e,t,s)=>{s.d(t,{fu:()=>i,z8:()=>c,jU:()=>n,DI:()=>a});const i={headerTitle:"Hi!",headerDescription:"I'm JIANG,JIA-RUEI,I live in Taiwan",textInfo:"My English name is Glem and I am a front-end web developer primarily focused on building websites using React. As a beginner, I am dedicated to optimizing user interfaces and user experiences. I possess a solid technical foundation and strive for excellence in every project.",buttonItems:["Contact me","Download CV"]},n=[{image:s.p+"static/media/Electronic-business-platform-Demo.b8a066a2e5718234236b.png",imagesName:"Electronic-Business-Platform-Demo",projectLink:"https://github.com/Glem2003/Electronic-business-platform-Demo",projectName:"EC-Demo",firstData:"2024/03",lastData:"2024/07"}],a={webTitle:"Resume",list:[{key:"experience",listText:"EXPERIENCE"},{key:"tools of choice",listText:"TOOLS OF CHOICE"},{key:"education",listText:"EDUCATION"},{key:"hobbies",listText:"HOBBIES"}],experience:[{firstDate:"2022/3",title:"E-commerce Personnel",content:["Completed picking, packing, and shipping processes.","Handled customer service forms and reverse logistics."]},{firstDate:"2021/09",lastDate:"2022/01",title:"Administrative Assistant",content:["Assisted students with course-related issues.","Helped organize the office.","Assisted with office-related tasks.","Answered and managed phone calls."]},{firstDate:"2021/01",lastDate:"2021/02",title:"Winter Vacation Intern",content:["Received and inspected logistics goods, performed inventory counts.","Engaged in logistics goods reorganization and packaging.","Maintained and cleaned the workspace.","Handled goods storage, delivery scheduling, and shipment tasks.","Managed retail inventory control."]}],toolsInfo:[{subtitle:"Development",title:"HTML"},{subtitle:"Development",title:"CSS"},{subtitle:"Development",title:"SASS"},{subtitle:"Development",title:"JavaScript"},{subtitle:"Development",title:"TypeScript"},{subtitle:"Development",title:"React"}],education:[{firstDate:"2021/09",title:"Chien Hsin University of Science and Technology",content:"Department of Information Management"},{firstDate:"2018/09",lastDate:"2021/06",title:"Private Yangde High School",content:"Department of E-commerce"}],hobbies:[{subtitle:"Hobbies",title:"Coding"},{subtitle:"Hobbies",title:"Reading Books"},{subtitle:"Hobbies",title:"Watching Movies"},{subtitle:"Hobbies",title:"Playing Games"},{subtitle:"Hobbies",title:"Traveling"}]},c={copyright:"Copyright \xa9 Glem 2024.All rights reserved."}},793:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var i=s(43);const n=()=>{const[e,t]=(0,i.useState)("experience");return{active:e,handleClick:e=>{t(e)}}};var a=s(394),c=s(642),l=s(464);const o={list:"list_list__P8ZEc","list--active":"list_list--active__eEgFa"};var r=s(579);const d=e=>{const{listText:t,listClass:s,listHandle:i}=e,n=s?"".concat(o.list," ").concat(o["".concat(s)]):o.list;return(0,r.jsx)("li",{className:n,onClick:i,children:t})},m="__content_content__8Wmr3",h="__content_content--number__AUuHx",u=e=>{const{content:t}=e;return"string"===typeof t?(0,r.jsx)("p",{className:m,children:t}):(0,r.jsx)("ul",{children:t.map(((e,t)=>(0,r.jsx)("li",{className:"".concat(m," ").concat(h),children:e},t)))})},p="__date_date__0ZD+-",x=e=>{const{date:t}=e;return(0,r.jsx)("p",{className:p,children:t})},b={},j=e=>{const{title:t}=e;return(0,r.jsx)("h3",{className:b.title,children:t})},g=e=>{const{lastDate:t,firstDate:s,title:i,content:n}=e,a=t?"".concat(s," - ").concat(t):"".concat(s);return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsxs)("div",{className:"experience__head",children:[(0,r.jsx)(x,{date:a}),(0,r.jsx)(j,{title:i})]}),(0,r.jsx)(u,{content:n})]})},_=e=>{const{subtitle:t,title:s}=e;return(0,r.jsxs)("div",{className:"toolsInfo",children:[(0,r.jsx)(x,{date:t}),(0,r.jsx)(j,{title:s})]})},v=e=>{const{firstDate:t,lastDate:s,title:i,content:n}=e,a=s?"".concat(t," - ").concat(s):"".concat(t);return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsxs)("div",{className:"education__head",children:[(0,r.jsx)(x,{date:a}),(0,r.jsx)(j,{title:i})]}),(0,r.jsx)(u,{content:n})]})},f=e=>{const{subtitle:t,title:s}=e;return(0,r.jsxs)("div",{className:"hobbies",children:[(0,r.jsx)(x,{date:t}),(0,r.jsx)(j,{title:s})]})},D=()=>{const{webTitle:e,list:t,experience:s,toolsInfo:i,education:o,hobbies:m}=a.DI,{active:h,handleClick:u}=n();return(0,r.jsx)(c.A,{children:(0,r.jsxs)("div",{className:"resume",children:[(0,r.jsx)("section",{className:"resume__head",children:(0,r.jsx)(l.A,{title:e})}),(0,r.jsx)("div",{className:"resume__slide",children:(0,r.jsx)("ul",{children:t.map((e=>(0,r.jsx)(d,{...e,listClass:h===e.key?"list--active":"",listHandle:()=>u(e.key)})))})}),(0,r.jsxs)("main",{className:"resume__main",children:["experience"===h&&s.map(((e,t)=>(0,r.jsx)(g,{...e},t))),"tools of choice"===h&&i.map(((e,t)=>(0,r.jsx)(_,{...e},t))),"education"===h&&o.map(((e,t)=>(0,r.jsx)(v,{...e},t))),"hobbies"===h&&m.map(((e,t)=>(0,r.jsx)(f,{...e},t)))]})]})})}}}]);
//# sourceMappingURL=234.095b4481.chunk.js.map
/* EDIT THIS BLOCK with your own details */
const D={
photo:"photoofMe.jpg",name:"Elyse Kim Cyril L. Dela Cruz",loc:"Philippines",role:"3rd-Year BSIT Student | Full-Stack Developer | UI/UX Enthusiast",email:"",
about:["I am a third-year Bachelor of Science in Information Technology student with a strong interest in web development, software development, and UI/UX design.","I enjoy creating functional applications, developing websites, and designing user-friendly interfaces. I have experience working with programming languages such as C, Java, PHP, JavaScript, and Python, along with modern web technologies and development tools.","I have worked on academic and personal projects involving database management, authentication systems, CRUD operations, business management applications, and frontend development.","I continuously improve my technical knowledge, programming skills, and problem-solving abilities through hands-on projects and independent learning."],
tech:{"Programming languages":["C","Java","PHP","JavaScript","Python"],"Frontend development":["HTML5","CSS3","JavaScript","React.js","Tailwind CSS"],"Backend development":["PHP","Firebase","Firebase Cloud Functions"],"Database management":["MySQL","Firebase Firestore","Firebase Realtime Database"],"Frameworks and libraries":["React.js","Vite","Tailwind CSS"],"UI/UX design":["Figma","Wireframing","Prototyping","Interface Design","UI/UX Design"],"Development tools":["Visual Studio Code","NetBeans","XAMPP","Git","GitHub","WordPress"]},
projects:[
{t:"Butterland Cafe Management System",url:"https://butterland-cafe.web.app/",img:"butterland.jpg",c:"Full-Stack Web Application",tech:["React.js","Vite","Tailwind CSS","Firebase","Cloud Firestore","Firebase Realtime Database","Firebase Cloud Functions","Cloud Storage"],d:"A web-based cafe management and online ordering system designed to streamline cafe operations and improve customer experience.",f:["Product and menu management","Customer ordering system","Order management","Delivery management","Rider management","Rider GPS tracking","Customer management","Promotions and coupon management","Customer reviews","Blog management","Cafe information management","Shop status management","SMS settings","Administrative dashboard"],g:"To develop a centralized cafe management platform that simplifies business operations, improves order processing, and provides a convenient ordering experience."},
{t:"Admin and User Management System",img:"admin-dashboard.jpg",c:"Web Application",tech:["PHP","MySQL","HTML","CSS","JavaScript"],d:"A web-based management system that provides separate interfaces for administrators and regular users.",f:["User registration","Login authentication","Admin dashboard","User dashboard","CRUD operations","User information management","Database integration","Role-based access"],g:"To develop a management system that allows administrators to manage user records while providing users with their own dashboard."},
{t:"FIFO and LRU Simulator",img:"fifo-lru.jpg",c:"Educational Software / Operating Systems",tech:[],d:"An educational simulator demonstrating two page replacement algorithms used in operating systems: FIFO (First-In, First-Out) and LRU (Least Recently Used).",f:["FIFO page replacement simulation","LRU page replacement simulation","Page reference tracking","Page replacement visualization","Page fault demonstration","Algorithm comparison"],g:"To help students understand how operating systems manage memory and implement page replacement algorithms."},
{t:"Employee Travel Tracker",img:"travel-tracker.jpg",c:"Information Management System",tech:[],d:"An application concept designed to organize and monitor employee travel information.",f:["Employee travel records","Travel information management","Record monitoring","Employee information organization"],g:"To provide an organized platform for managing employee travel information and records."},
{t:"Employee Information System",img:"employee-info.jpg",c:"Database Management Application",tech:[],d:"An information management application designed to store, organize, and maintain employee records.",f:["Employee information records","Employee data management","Record updating","Information organization","Database integration"],g:"To simplify employee information management through a centralized digital system."},
{t:"React Todo Application",img:"react-todo.jpg",c:"Frontend Web Development",tech:["React.js","Vite","JavaScript"],d:"A task management application built using React components and state management.",f:["Add new tasks","Display task lists","Mark tasks as completed","Filter tasks using tabs","Organize tasks by status"],g:"To practice React fundamentals, component-based development, and interactive user interfaces."},
{t:"Pokedex Application",c:"Frontend Web Development",tech:["React.js","Vite","JavaScript"],d:"A React-based Pokedex project designed to practice frontend development and API-driven application concepts.",f:[],g:"To improve knowledge of React components, data handling, and interactive web interfaces."}],
edu:[["BS Information Technology, 3rd year","Central Luzon State University (CLSU) · Section BSIT 3-6",""]],
interests:["Full-Stack Web Development","Frontend Development","Backend Development","UI/UX Design","Software Development","Database Management","Application Development","Web Application Development","Modern Web Technologies"],
strengths:["Willingness to learn new technologies","Problem-solving mindset","Creativity in designing interfaces","Interest in software development","Adaptability to new development tools","Hands-on project development","Continuous learning and improvement"],
goals:["To become a skilled software and full-stack developer capable of building useful, efficient, and user-friendly digital solutions."],
social:[["GitHub","https://github.com/ElyseDelaCruz"],["LinkedIn","https://www.linkedin.com/in/elyse-dela-cruz-783907447/"],["Facebook","https://www.facebook.com/elyse.dlcrz/"]],
gallery:["Photo 1","Photo 2","Photo 3","Photo 4","Photo 5","Photo 6"]
};
const $=i=>document.getElementById(i),E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ini=D.name.split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase();
const lk='<svg class="ic" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
document.title=D.name+" – Portfolio";
if(D.photo){[$("ph"),$("cp")].forEach(e=>{const i=new Image();i.src=D.photo;i.alt=D.name;i.onerror=()=>{e.textContent=ini};e.appendChild(i)})}else $("ph").textContent=$("cp").textContent=ini;$("nm").textContent=$("cn").textContent=D.name;$("lc").textContent=D.loc;$("rl").innerHTML=D.role.split("|").map(x=>"<span>"+E(x.trim())+"</span>").join("");
$("rs").href="#projects";if(D.email)$("em").href="mailto:"+D.email;else $("em").remove();
$("ab").innerHTML=D.about.map(p=>"<p>"+E(p)+"</p>").join("");
$("ts").innerHTML=Object.entries(D.tech).map(([k,v])=>'<b>'+E(k)+'</b><div class="chips">'+v.map(t=>"<span>"+E(t)+"</span>").join("")+"</div>").join("");
$("ex").innerHTML=D.edu.map(e=>'<li><div><b>'+E(e[0])+'</b><div class="sm">'+E(e[1])+'</div></div><span class="y">'+E(e[2])+'</span></li>').join("");
$("ci").innerHTML=D.interests.map(x=>"<span>"+E(x)+"</span>").join("");$("st").innerHTML=D.strengths.map(x=>"<span>"+E(x)+"</span>").join("");
$("pj").innerHTML=D.projects.map(p=>'<div class="pj"><h3>'+E(p.t)+'</h3><div class="sm">'+E(p.c)+'</div>'+(p.img?(p.url?'<a href="'+E(p.url)+'" target="_blank" rel="noopener">':'')+'<img class="pimg" src="'+E(p.img)+'" alt="'+E(p.t)+' screenshot" loading="lazy">'+(p.url?'</a>':''):'')+'<p>'+E(p.d)+'</p>'+(p.url?'<a class="b" href="'+E(p.url)+'" target="_blank" rel="noopener">'+lk+'Visit live site</a>':'')+(p.tech.length?'<div class="chips">'+p.tech.map(x=>"<span>"+E(x)+"</span>").join("")+'</div>':'')+'<details><summary>Features and goal</summary>'+(p.f.length?'<ul>'+p.f.map(x=>"<li>"+E(x)+"</li>").join("")+'</ul>':'')+'<p><b>Goal:</b> '+E(p.g)+'</p></details></div>').join("");
$("go").innerHTML=D.goals.map(g=>'<div class="mini">'+E(g)+'</div>').join("");
$("so").innerHTML=D.social.map(k=>'<a class="mini" href="'+E(k[1])+'" target="_blank" rel="noopener">'+lk+'<b>'+E(k[0])+'</b><br><span class="sm">'+E(k[1].replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""))+'</span></a>').join("");
$("co").innerHTML=D.email?'<a class="mini" href="mailto:'+E(D.email)+'"><b>Email</b><br>'+E(D.email)+'</a>':'<div class="mini"><b>Email</b><br><span class="sm">Not yet provided</span></div>';
$("ga").innerHTML=D.gallery.map((g,i)=>'<div style="background:linear-gradient(135deg,hsl(0 0% '+(30+i*8)+'%),hsl(0 0% '+(15+i*6)+'%))">'+E(g)+'</div>').join("");
$("ft").textContent="© "+new Date().getFullYear()+" "+D.name+". All rights reserved.";
$("tg").onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};
/* Chat: answers questions from the data above using keyword matching */
const list=a=>a.join(", ");
const topics=[
[/skill|tech|stack|tool|language|know/,()=>"My skills: "+Object.entries(D.tech).map(([k,v])=>k+" ("+list(v)+")").join("; ")+"."],
[/project|built|made|cafe|butterland|app/,()=>"My projects: "+D.projects.map(p=>p.t).join("; ")+"."],
[/education|school|study|course|degree|college|university|clsu|section/,()=>D.edu.map(e=>e[0]+" – "+e[1]).join("; ")+"."],
[/interest|career|strength|good at/,()=>"Career interests: "+list(D.interests)+". Strengths: "+list(D.strengths)+"."],
[/goal|plan|future|want/,()=>D.goals.join(" ")],
[/contact|email|reach|hire|phone|call|touch|github|linkedin|facebook/,()=>"You can find me on "+D.social.map(x=>x[0]+" ("+x[1]+")").join(", ")+"."+(D.email?" Email: "+D.email+".":" My email hasn’t been added yet.")],
[/where|live|location|based|from/,()=>"I’m based in the "+D.loc+"."],
[/about|yourself|who|introduce|hi\b|hello|hey/,()=>"I’m "+D.name+". "+D.about[0]]
];
const add=(t,u)=>{const d=document.createElement("div");d.className="m"+(u?" u":"");d.textContent=t;$("msgs").appendChild(d);$("msgs").scrollTop=1e9};
$("op").onclick=()=>{$("chat").classList.add("open");$("fab").style.display="none";if(!$("msgs").children.length)add("Hi! Ask me about my skills, projects, education, or career interests.");$("cin").focus()};
$("cl").onclick=()=>{$("chat").classList.remove("open");$("fab").style.display="flex"};
$("cf").onsubmit=e=>{e.preventDefault();const q=$("cin").value.trim();if(!q)return;add(q,1);$("cin").value="";
 const t=topics.find(x=>x[0].test(q.toLowerCase()));
 setTimeout(()=>add(t?t[1]():"I can answer questions about my skills, background, goals, location, or contact details. Try one of those."),450)};

/* Gallery: auto-advance every 3s, pauses on hover/touch/focus, loops back to start */
(()=>{const g=$("ga");if(!g||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
let p=false;["pointerenter","touchstart","focusin"].forEach(e=>g.addEventListener(e,()=>p=true,{passive:true}));
["pointerleave","touchend","focusout"].forEach(e=>g.addEventListener(e,()=>p=false,{passive:true}));
setInterval(()=>{if(p||document.hidden)return;const t=g.children,step=t[1].offsetLeft-t[0].offsetLeft;
const end=g.scrollLeft+g.clientWidth>=g.scrollWidth-4;
g.scrollTo({left:end?0:(Math.round(g.scrollLeft/step)+1)*step,behavior:"smooth"})},3000)})();

/* Stats strip (computed from the data above) */
$("stats").innerHTML=[[D.projects.length,"Projects built"],[new Set(Object.values(D.tech).flat()).size,"Technologies"],[D.tech["Programming languages"].length,"Languages"]].map(x=>'<div class="stat"><b data-n="'+x[0]+'">0</b><span>'+E(x[1])+'</span></div>').join("");
/* Scroll reveal + count-up (skipped for reduced motion) */
(()=>{const bs=document.querySelectorAll("#stats b");
if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window)){bs.forEach(b=>b.textContent=b.dataset.n);return}
const cnt=el=>{const n=+el.dataset.n,t0=performance.now(),f=t=>{const k=Math.min(1,(t-t0)/900);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const els=document.querySelectorAll(".card,.stat");els.forEach(e=>e.classList.add("rv"));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;e.classList.add("in");const b=e.querySelector("b[data-n]");if(b)cnt(b);io.unobserve(e)}),{rootMargin:"0px 0px -6% 0px"});
els.forEach(e=>io.observe(e))})();
/* Scroll progress bar */
(()=>{const bar=$("bar"),pg=()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+"%"};addEventListener("scroll",pg,{passive:true});addEventListener("resize",pg);pg()})();

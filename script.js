/* EDIT THIS BLOCK with your own details */
const D={
photo:"photoofMe.jpg",name:"Elyse Kim Cyril L. Dela Cruz",loc:"Philippines",role:"3rd-Year BSIT Student | Full-Stack Developer | UI/UX Enthusiast",email:"elysedlcrz@gmail.com",
about:["I am a third-year Bachelor of Science in Information Technology student with a strong interest in web development, software development, and UI/UX design.","I enjoy creating functional applications, developing websites, and designing user-friendly interfaces. I have experience working with programming languages such as C, Java, PHP, JavaScript, and Python, along with modern web technologies and development tools.","I have worked on academic and personal projects involving database management, authentication systems, CRUD operations, business management applications, and frontend development.","I continuously improve my technical knowledge, programming skills, and problem-solving abilities through hands-on projects and independent learning."],
tech:{"Programming languages":["C","Java","PHP","JavaScript","Python"],"Frontend development":["HTML5","CSS3","JavaScript","React.js","Tailwind CSS"],"Backend development":["PHP","Laravel","Firebase","Firebase Cloud Functions"],"Database management":["MySQL","Firebase Firestore","Firebase Realtime Database"],"Frameworks and libraries":["React.js","Laravel","Vite","Tailwind CSS"],"UI/UX design":["Figma","Wireframing","Prototyping","Interface Design","UI/UX Design"],"Development tools":["Visual Studio Code","NetBeans","XAMPP","Git","GitHub","WordPress"]},
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
gallery:[{src:"certificate-seo.jpg",t:"SEO 101 Webinar – Certificate of Participation (CLSU, Sept 2025)"},{src:"certificate-agile.jpg",t:"Google Agile Essentials – Coursera Specialization (Jul 2026)"}]
};
const $=i=>document.getElementById(i),E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ini=D.name.split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase();
const lk='<svg class="ic" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
document.title=D.name+" – Portfolio";
if(D.photo){[$("ph"),$("cp")].forEach(e=>{const i=new Image();i.src=D.photo;i.alt=D.name;i.onerror=()=>{e.textContent=ini};e.appendChild(i)})}else $("ph").textContent=$("cp").textContent=ini;$("nm").textContent=$("cn").textContent=D.name;$("lc").textContent=D.loc;$("rl").innerHTML=D.role.split("|").map(x=>"<span>"+E(x.trim())+"</span>").join("");
$("rs").href="#projects";if(D.email)$("em").href="mailto:"+D.email+"?subject="+encodeURIComponent("Let’s work together");else $("em").remove();
$("ab").innerHTML=D.about.map(p=>"<p>"+E(p)+"</p>").join("");
$("ts").innerHTML=Object.entries(D.tech).map(([k,v])=>'<b>'+E(k)+'</b><div class="chips">'+v.map(t=>"<span>"+E(t)+"</span>").join("")+"</div>").join("");
$("ex").innerHTML=D.edu.map(e=>'<li><div><b>'+E(e[0])+'</b><div class="sm">'+E(e[1])+'</div></div><span class="y">'+E(e[2])+'</span></li>').join("");
$("ci").innerHTML=D.interests.map(x=>"<span>"+E(x)+"</span>").join("");$("st").innerHTML=D.strengths.map(x=>"<span>"+E(x)+"</span>").join("");
$("pj").innerHTML=D.projects.map(p=>'<div class="pj"><h3>'+E(p.t)+'</h3><div class="sm">'+E(p.c)+'</div>'+(p.img?(p.url?'<a href="'+E(p.url)+'" target="_blank" rel="noopener">':'')+'<img class="pimg" src="'+E(p.img)+'" alt="'+E(p.t)+' screenshot" loading="lazy">'+(p.url?'</a>':''):'')+'<p>'+E(p.d)+'</p>'+(p.url?'<a class="b" href="'+E(p.url)+'" target="_blank" rel="noopener">'+lk+'Visit live site</a>':'')+(p.tech.length?'<div class="chips">'+p.tech.map(x=>"<span>"+E(x)+"</span>").join("")+'</div>':'')+'<details><summary>Features and goal</summary>'+(p.f.length?'<ul>'+p.f.map(x=>"<li>"+E(x)+"</li>").join("")+'</ul>':'')+'<p><b>Goal:</b> '+E(p.g)+'</p></details></div>').join("");
$("go").innerHTML=D.goals.map(g=>'<div class="mini">'+E(g)+'</div>').join("");
$("so").innerHTML=D.social.map(k=>'<a class="mini" href="'+E(k[1])+'" target="_blank" rel="noopener">'+lk+'<b>'+E(k[0])+'</b><br><span class="sm">'+E(k[1].replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""))+'</span></a>').join("");
$("co").innerHTML=D.email?'<a class="mini" href="mailto:'+E(D.email)+'"><b>Email</b><br>'+E(D.email)+'</a><button class="mini cp" type="button"><b>Copy email</b></button>':'<div class="mini"><b>Email</b><br><span class="sm">Not yet provided</span></div>';
$("ga").innerHTML=D.gallery.map((g,i)=>'<button class="gi" type="button" data-i="'+i+'" aria-label="View '+E(g.t)+'"><img src="'+E(g.src)+'" alt="'+E(g.t)+'" loading="lazy"><span>'+E(g.t)+'</span></button>').join("");
$("ft").textContent="© "+new Date().getFullYear()+" "+D.name+". All rights reserved. · Updated Nov 20, 2026";
const flip=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}};
/* Theme change: circular reveal from the toggle (View Transitions API, falls back to an instant switch) */
$("tg").onclick=()=>{if(!document.startViewTransition||matchMedia("(prefers-reduced-motion:reduce)").matches)return flip();
const b=$("tg").getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,R=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
const t=document.startViewTransition(flip);
t.ready.then(()=>document.documentElement.animate({clipPath:["circle(0px at "+x+"px "+y+"px)","circle("+R+"px at "+x+"px "+y+"px)"]},{duration:650,easing:"ease-in-out",pseudoElement:"::view-transition-new(root)"})).catch(()=>{})};
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
$("op").onclick=()=>{$("chat").classList.add("open");$("fab").style.display="none";if(!$("msgs").children.length)add("Hi! Ask me about my skills, projects, education, or career interests.");quick();$("cin").focus()};
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

/* Gallery lightbox: click a certificate to enlarge, click anywhere / Esc to close */
(()=>{const lb=$("lb"),im=$("lbi"),close=()=>lb.classList.remove("open");
$("ga").addEventListener("click",e=>{const b=e.target.closest(".gi");if(!b)return;const g=D.gallery[b.dataset.i];im.src=g.src;im.alt=g.t;lb.classList.add("open")});
lb.addEventListener("click",close);addEventListener("keydown",e=>{if(e.key==="Escape")close()})})();

/* ---- Extra features ---- */
/* Remember the chosen theme */
try{const t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}
/* Toast + copy email */
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),1800)}
function copyEmail(){(navigator.clipboard?navigator.clipboard.writeText(D.email):Promise.reject()).then(()=>toast("Email copied"),()=>toast(D.email))}
$("co").addEventListener("click",e=>{if(e.target.closest(".cp"))copyEmail()});
/* Project filter */
(()=>{const FT=["React.js","PHP","Firebase","JavaScript"].filter(t=>D.projects.some(p=>p.tech.includes(t))),f=$("flt");
f.innerHTML=["All"].concat(FT).map((t,i)=>'<button type="button" data-f="'+E(t)+'" aria-pressed="'+(i===0)+'">'+E(t)+'</button>').join("");
f.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const k=b.dataset.f;
[...f.children].forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
[...$("pj").children].forEach((el,i)=>el.classList.toggle("off",k!=="All"&&!D.projects[i].tech.includes(k)))})})();
/* Chat quick replies */
function quick(){const d=document.createElement("div");d.className="qr";
["What are your skills?","Show me your projects","Where do you study?","How can I contact you?"].forEach(t=>{const b=document.createElement("button");b.type="button";b.textContent=t;
b.onclick=()=>{d.remove();$("cin").value=t;$("cf").dispatchEvent(new Event("submit",{cancelable:true,bubbles:true}))};d.appendChild(b)});
$("msgs").appendChild(d);$("msgs").scrollTop=1e9}
/* Back to top */
$("up").onclick=()=>scrollTo({top:0,behavior:"smooth"});
addEventListener("scroll",()=>$("up").classList.toggle("show",scrollY>600),{passive:true});
/* Command menu: Ctrl/Cmd + K */
(()=>{const m=$("cmd"),q=$("cq"),ul=$("clist");let list=[],sel=0;
const sc=f=>()=>{const el=f();if(el){el.scrollIntoView({behavior:"smooth",block:"start"});ping(el)}},card=i=>()=>$(i).closest(".card");
const all=[["Go to About",sc(()=>document.querySelector(".a-about"))],["Go to Tech stack",sc(()=>document.querySelector(".a-tech"))],["Go to Projects",sc(()=>$("projects"))],["Go to Education",sc(()=>document.querySelector(".a-edu"))],["Go to Career interests",sc(()=>document.querySelector(".a-int"))],["Go to Strengths",sc(()=>document.querySelector(".a-str"))],["Go to GitHub activity",sc(()=>$("gh"))],["Go to Gallery",sc(card("ga"))],["Go to Contact",sc(card("co"))],["Toggle dark mode",()=>$("tg").click()],["Open chat",()=>$("op").click()]];
if(D.email)all.push(["Email me",()=>{location.href="mailto:"+D.email}],["Copy email",copyEmail]);
D.social.forEach(x=>all.push(["Open "+x[0],()=>window.open(x[1],"_blank","noopener")]));
const draw=()=>{const t=q.value.trim().toLowerCase();list=all.filter(x=>x[0].toLowerCase().includes(t));if(sel>=list.length)sel=0;
ul.innerHTML=list.length?list.map((x,i)=>'<li role="option" data-i="'+i+'" aria-selected="'+(i===sel)+'">'+E(x[0])+'</li>').join(""):'<li class="none">No results</li>'};
const open=()=>{m.classList.add("open");q.value="";sel=0;draw();q.focus()},close=()=>m.classList.remove("open"),run=i=>{const x=list[i];if(!x)return;close();x[1]()};
q.addEventListener("input",()=>{sel=0;draw()});
q.addEventListener("keydown",e=>{if(e.key==="ArrowDown"){e.preventDefault();sel=Math.min(sel+1,list.length-1);draw()}else if(e.key==="ArrowUp"){e.preventDefault();sel=Math.max(sel-1,0);draw()}else if(e.key==="Enter"){e.preventDefault();run(sel)}});
ul.addEventListener("click",e=>{const li=e.target.closest("li[data-i]");if(li)run(+li.dataset.i)});
m.addEventListener("click",e=>{if(e.target===m)close()});
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();m.classList.contains("open")?close():open()}else if(e.key==="Escape")close()});
$("kb").onclick=open;
if(/Mac|iPhone|iPad/.test(navigator.platform))document.querySelector("#kb kbd").textContent="⌘ K"})();

/* ---- Motion & polish ---- */
/* Intro curtain label (the curtain itself is pure CSS) */
$("vn").textContent=D.name.split(" ")[0];
/* Section "ping" so you can see where a jump landed */
function ping(el){el.classList.remove("ping");void el.offsetWidth;el.classList.add("ping");setTimeout(()=>el.classList.remove("ping"),1300)}
$("rs").addEventListener("click",()=>ping($("projects")));
/* Glowing cursor that grows over links and buttons. Starts on the first real mouse/pen movement (never on touch). */
(()=>{const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;let c=null,x=0,y=0,cx=0,cy=0,on=false;
const make=()=>{c=document.createElement("div");c.id="cur";c.innerHTML="<i></i>";document.body.appendChild(c);
document.addEventListener("pointerover",e=>{c.classList.toggle("hov",!!(e.target.closest&&e.target.closest("a,button,summary,input,.gi,li[data-i]")))});
document.documentElement.addEventListener("mouseleave",()=>c.classList.remove("on"));
document.documentElement.addEventListener("mouseenter",()=>{if(on)c.classList.add("on")});
const f=()=>{if(rm){cx=x;cy=y}else{cx+=(x-cx)*.2;cy+=(y-cy)*.2}c.style.transform="translate3d("+cx.toFixed(1)+"px,"+cy.toFixed(1)+"px,0)";requestAnimationFrame(f)};f()};
addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;if(!c)make();x=e.clientX;y=e.clientY;if(!on){on=true;cx=x;cy=y;c.classList.add("on")}},{passive:true})})();
/* "Hire me" button: gently follows the pointer */
(()=>{const b=$("em");if(!b||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
b.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const r=b.getBoundingClientRect();b.style.setProperty("--mx",((e.clientX-r.left-r.width/2)/r.width*8).toFixed(1)+"px");b.style.setProperty("--my",((e.clientY-r.top-r.height/2)/r.height*8).toFixed(1)+"px")});
b.addEventListener("pointerleave",()=>{b.style.removeProperty("--mx");b.style.removeProperty("--my")})})();
/* GitHub activity: GitHub-style contribution graph + latest commits, from public GitHub data (no login needed) */
(async()=>{const box=$("ghb"),gh=D.social.find(x=>x[0]==="GitHub");if(!gh){$("gh").remove();return}
const u=gh[1].replace(/\/$/,"").split("/").pop(),api="https://api.github.com",W=13,t0=new Date();t0.setHours(0,0,0,0);
const start=new Date(t0);start.setDate(start.getDate()-(W-1)*7-t0.getDay());
const ds=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),lvl=n=>n===0?0:n<2?1:n<4?2:n<7?3:4,day=s=>new Date(s+"T00:00:00");
const cached=async(k,fn)=>{try{const c=JSON.parse(localStorage.getItem(k));if(c&&Date.now()-c.t<6e5)return c.v}catch(e){}const v=await fn();try{localStorage.setItem(k,JSON.stringify({t:Date.now(),v}))}catch(e){}return v};
const get=async p=>{const r=await fetch(api+p,{headers:{Accept:"application/vnd.github+json"}});if(!r.ok)throw new Error(String(r.status));return r.json()};
const loadCommits=async()=>{const [user,repos]=await Promise.all([get("/users/"+u),get("/users/"+u+"/repos?sort=pushed&per_page=10")]);
const pick=repos.filter(r=>!r.fork).slice(0,4);
const res=await Promise.all(pick.map(r=>get("/repos/"+u+"/"+r.name+"/commits?author="+u+"&since="+start.toISOString()+"&per_page=100").then(c=>c.map(x=>({d:x.commit.author.date,m:x.commit.message.split("\n")[0],h:x.html_url,n:r.name,ru:r.html_url}))).catch(()=>null)));
if(pick.length&&res.every(x=>x===null))throw new Error("no data");
return{s:[user.public_repos,user.followers,user.following],list:res.filter(Boolean).flat().sort((a,b)=>new Date(b.d)-new Date(a.d))}};
const loadGraph=async()=>{const r=await fetch("https://github-contributions-api.jogruber.de/v4/"+u+"?y=last");if(!r.ok)throw new Error(String(r.status));const j=await r.json();
const a=(j.contributions||[]).filter(x=>x.date<=ds(t0)).map(x=>({date:x.date,count:x.count,level:x.level}));if(!a.length)throw new Error("empty");return a};
const rel=d=>{const s=(Date.now()-new Date(d))/1e3;return s<60?"just now":s<3600?Math.floor(s/60)+"m ago":s<86400?Math.floor(s/3600)+"h ago":s<2592e3?Math.floor(s/86400)+"d ago":new Date(d).toLocaleDateString(undefined,{month:"short",day:"numeric"})};
const fromCommits=list=>{const m={};list.forEach(c=>{const k=ds(new Date(c.d));m[k]=(m[k]||0)+1});const out=[];for(let d=new Date(start);d<=t0;d.setDate(d.getDate()+1)){const k=ds(d),n=m[k]||0;out.push({date:k,count:n,level:lvl(n)})}return out};
const MN=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const graph=(arr,label)=>{const pad=day(arr[0].date).getDay(),cols=Math.ceil((pad+arr.length)/7);let cells="";
for(let i=0;i<pad;i++)cells+='<i class="c pad"></i>';
arr.forEach(x=>{cells+='<i class="c l'+x.level+'" title="'+x.count+" contribution"+(x.count===1?"":"s")+" on "+day(x.date).toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"})+'"></i>'});
const ml=[];let last=-1;for(let w=0;w<cols;w++){const m=day(arr[Math.max(0,w*7-pad)].date).getMonth();if(m!==last){ml.push({w,m});last=m}}
const ms=ml.filter((x,i)=>i===ml.length-1||ml[i+1].w-x.w>=3).map(x=>'<span style="grid-column:'+(x.w+1)+'">'+MN[x.m]+"</span>").join("");
const total=arr.reduce((a,x)=>a+x.count,0);
return'<div class="gwrap"><div class="gdays"><span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span></div><div class="gscroll" id="gsc"><div class="months">'+ms+'</div><div class="heat" role="img" aria-label="'+total+" "+label+'">'+cells+'</div></div></div><div class="glegend"><span class="sm">'+total.toLocaleString()+" "+label+'</span><span class="sm lg">Less <i class="c l0"></i><i class="c l1"></i><i class="c l2"></i><i class="c l3"></i><i class="c l4"></i> More</span></div>'};
const fail=()=>{box.innerHTML='<p class="sm">Live GitHub activity couldn’t load right now.</p><a class="b" href="'+E(gh[1])+'" target="_blank" rel="noopener">View my GitHub profile ↗</a>'};
try{const [gr,ld]=await Promise.all([cached("gh:graph:"+u,loadGraph).catch(()=>null),cached("gh:data:"+u,loadCommits).catch(()=>null)]);
if(!gr&&!ld)return fail();
const arr=gr||fromCommits(ld.list);
let best=0,run=0;arr.forEach(x=>{run=x.count>0?run+1:0;if(run>best)best=run});
let cur=0,i=arr.length-1;if(arr[i].count===0)i--;for(;i>=0&&arr[i].count>0;i--)cur++;
const peak=arr.reduce((a,x)=>x.count>a.count?x:a,{count:0,date:""}),tile=(v,l)=>'<div class="tile"><b>'+E(v)+"</b><span>"+E(l)+"</span></div>",pl=n=>n+" day"+(n===1?"":"s");
const tiles='<div class="tiles">'+tile(pl(best),"Longest streak")+tile(pl(cur),"Current streak")+tile(peak.count?peak.count+" on "+day(peak.date).toLocaleDateString(undefined,{month:"short",day:"numeric"}):"—","Busiest day")+"</div>";
const stats=ld?[[ld.s[0],"repos"],[ld.s[1],"followers"],[ld.s[2],"following"]].map(x=>"<span><b>"+E(x[0])+"</b> "+x[1]+"</span>").join(""):"";
const feed=ld?'<ul class="feed">'+(ld.list.slice(0,6).map(c=>'<li><div><a class="fm" href="'+E(c.h)+'" target="_blank" rel="noopener">'+E(c.m.length>72?c.m.slice(0,70)+"…":c.m)+'</a><div class="sm"><a href="'+E(c.ru)+'" target="_blank" rel="noopener">'+E(c.n)+"</a> · "+rel(c.d)+"</div></div></li>").join("")||'<li class="none sm">No public commits in the last '+W+" weeks.</li>")+"</ul>":'<p class="sm">Recent commits couldn’t load right now.</p>';
box.innerHTML='<div class="ghtop"><div class="ghs">'+stats+'</div><a class="b" href="'+E(gh[1])+'" target="_blank" rel="noopener">@'+E(u)+" ↗</a></div>"+graph(arr,gr?"contributions in the last year":"commits in the last "+W+" weeks (recent public repos)")+tiles+'<h3 class="gh3">Recent commits</h3>'+feed;
const sc=$("gsc");if(sc)sc.scrollLeft=sc.scrollWidth}catch(e){fail()}})();

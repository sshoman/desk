const cities=[
 {name:"Seoul",moment:"AI Conference",src:"./assets/travelkorea-photo.svg",alt:"Original Seoul travel artwork"},
 {name:"Amman",moment:"Startup Pitch",src:"./assets/travelamman-photo.svg",alt:"Original Amman travel artwork"},
 {name:"Copenhagen",moment:"LARP",src:"./assets/travelcopenhagen-photo.svg",alt:"Original Copenhagen travel artwork"},
 {name:"Kuala Lumpur",moment:"Book Tour",src:"./assets/travelkl-photo.svg",alt:"Original Kuala Lumpur travel artwork"},
 {name:"Tel Aviv",moment:"Pokémon Hunt",src:"./assets/traveltlv-photo.svg",alt:"Original Tel Aviv travel artwork"},
 {name:"Istanbul",moment:"Startup Istanbul",src:"./assets/travelistanbul-photo.svg",alt:"Original Istanbul travel artwork"}
];

const scene=document.getElementById("desk-scene");
const frameMarkup=cities.map(city=>`
 <figure class="travel-frame" tabindex="0" aria-label="${city.name}, ${city.moment}">
  <img class="travel-photo" src="${city.src}" alt="${city.alt}" loading="eager" draggable="false">
  <figcaption><b>${city.name}</b><small>${city.moment}</small></figcaption>
 </figure>`).join("");

scene.innerHTML=`
 <div class="wall-light" aria-hidden="true"></div>
 <div class="shelf" aria-hidden="true"><div class="shelf-books">${Array.from({length:32},()=>"<i></i>").join("")}</div></div>
 <section class="wall-gallery" aria-label="Original travel memories">${frameMarkup}</section>
 <div class="wall-line" aria-hidden="true"></div>
 <div class="desk-top" aria-hidden="true"></div>
 <div class="desk-front" aria-hidden="true"></div>
 <div class="desk-lamp" aria-hidden="true"><span class="lamp-shade"></span><span class="lamp-stem"></span><span class="lamp-base"></span></div>
 <div class="pencil-cup" aria-hidden="true"></div>

 
 <div class="award-objects" aria-label="Awards">
  <div class="award-plaque" tabindex="0" aria-label="First place, Rehoboth pitch competition">
   <span class="award-topline">PITCH COMPETITION</span>
   <strong>1st Place</strong>
   <small>Startup Pitch</small>
   <i></i>
   <span class="award-hover">First place in the Rehoboth pitch competition.</span>
  </div>
  <div class="award-plaque second" tabindex="0" aria-label="Top 3, Arab Bank financial technology startups">
   <span class="award-topline">ARAB BANK · 2019</span>
   <strong>Top 3</strong>
   <small>FinTech Startups</small>
   <i></i>
   <span class="award-hover">Top 3 in the Arab Bank financial technology startup competition.</span>
  </div>
 </div>

 <section class="laptop" aria-label="Portfolio on the laptop">
  <div class="laptop-display"><span class="laptop-camera"></span><div class="screen-ui">
   <div class="screen-top"><span>PERSONAL SITE</span><span><i class="screen-dot"></i>ONLINE</span></div>
   <h1 class="screen-title">SHOMAN</h1>
   <p class="screen-subtitle">CHOOSE A PORTFOLIO</p>
   <div class="screen-divider"></div>
   <nav class="screen-links" aria-label="Open a portfolio">
    <button type="button" data-portfolio="./design-portfolio.html" data-title="Design portfolio">
     <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h7l2 2h9v10H3zM3 6.5V5h7l2 1.5"/></svg>
     <span><b>DESIGN</b><small>Portfolio</small></span>
    </button>
    <button type="button" data-portfolio="./marketing-portfolio.html" data-title="Marketing portfolio">
     <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3zM4 7l8 6 8-6"/></svg>
     <span><b>MARKETING</b><small>Portfolio</small></span>
    </button>
   </nav>
  </div></div>
  <div class="laptop-hinge"></div><div class="laptop-base"></div><div class="keyboard"></div><div class="trackpad"></div>
 </section>

 <div class="paper" tabindex="0" aria-label="Research paper pinned to the wall">
  <span class="paper-pin" aria-hidden="true"></span>
  <div class="paper-meta"><span>RESEARCH PAPER</span><span>2026</span></div>
  <strong>Agentic Learning<br>Without Retention</strong>
  <i class="paper-rule"></i>
  <p>Turning failed experience into transferable understanding.</p>
  <div class="paper-lines"></div>
  <small class="paper-signature">SHOMAN · RESEARCH NOTE</small>
  <div class="paper-hover"><b>Agentic Learning Without Retention</b><span>Research note on turning tested experience into transferable understanding.</span><a href="./paper.html" target="_blank" rel="noopener">Read paper ↗</a></div>
 </div>

 <div class="book-mockup" tabindex="0" aria-label="Post Progressive book">
  <img src="https://5e3efbb2.shoman.pages.dev/lovable-uploads/PPontherock.png" alt="Original 3D Post Progressive book mockup" loading="eager" draggable="false">
  <div class="book-hover"><b>Post Progressive</b><span>Written by Shoman</span></div>
 </div>

 <div class="portfolio-modal" id="portfolio-modal" hidden aria-hidden="true">
  <div class="modal-shade">
   <section class="portfolio-window" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
    <header class="portfolio-header">
     <strong id="portfolio-modal-title">Portfolio</strong>
     <button class="portfolio-close" type="button" aria-label="Close portfolio" data-modal-close>×</button>
    </header>
    <iframe class="portfolio-frame" title="Portfolio content" src="about:blank" loading="lazy"></iframe>
   </section>
  </div>
 </div>

 <footer class="scene-footer">
  <nav aria-label="Personal links">
   <a href="https://linkedin.com/in/shoman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   <a href="https://github.com/sshoman" target="_blank" rel="noopener noreferrer">GitHub</a>
   <a href="mailto:shoman@outlook.co.il">Contact</a>
  </nav>
 </footer>
`;

const modal=scene.querySelector("#portfolio-modal");
const modalTitle=scene.querySelector("#portfolio-modal-title");
const modalFrame=scene.querySelector(".portfolio-frame");
const modalWindow=scene.querySelector(".portfolio-window");
let lastTrigger=null;

function openPortfolio(trigger){
 lastTrigger=trigger;
 modalTitle.textContent=trigger.dataset.title||"Portfolio";
 modal.hidden=false;
 modal.setAttribute("aria-hidden","false");
 const buttonRect=trigger.getBoundingClientRect();
 const windowRect=modalWindow.getBoundingClientRect();
 const originX=Math.max(0,Math.min(100,((buttonRect.left+buttonRect.width/2-windowRect.left)/windowRect.width)*100));
 const originY=Math.max(0,Math.min(100,((buttonRect.top+buttonRect.height/2-windowRect.top)/windowRect.height)*100));
 modalWindow.style.setProperty("--portfolio-origin-x",originX+"%");
 modalWindow.style.setProperty("--portfolio-origin-y",originY+"%");
 modalWindow.classList.remove("portfolio-opening");
 void modalWindow.offsetWidth;
 modalWindow.classList.add("portfolio-opening");
 modalFrame.src=trigger.dataset.portfolio;
 requestAnimationFrame(()=>scene.querySelector(".portfolio-close")?.focus());
}
function closePortfolio(){
 if(modal.hidden)return;
 modal.hidden=true;
 modal.setAttribute("aria-hidden","true");
 modalFrame.src="about:blank";
 lastTrigger?.focus();
}

scene.addEventListener("click",event=>{
 const trigger=event.target.closest("[data-portfolio]");
 if(trigger){event.preventDefault();openPortfolio(trigger);return;}
 if(event.target.closest(".portfolio-close")||event.target.classList.contains("modal-shade"))closePortfolio();
});
document.addEventListener("keydown",event=>{
 if(event.key==="Escape")closePortfolio();
});
document.addEventListener("contextmenu",event=>{
 if(event.target.closest(".desk-scene"))event.preventDefault();
});
document.addEventListener("dragstart",event=>{
 if(event.target.closest(".desk-scene"))event.preventDefault();
});

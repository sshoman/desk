const cities=[
 {name:"Seoul",moment:"AI Conference",src:"./assets/travelkorea-photo.svg",alt:"Original Seoul travel artwork"},
 {name:"Amman",moment:"Startup Pitch",src:"./assets/travelamman-photo.svg",alt:"Original Amman travel artwork"},
 {name:"Copenhagen",moment:"LARP",src:"./assets/travelcopenhagen-photo.svg",alt:"Original Copenhagen travel artwork"},
 {name:"Kuala Lumpur",moment:"Book Tour",src:"./assets/travelkl-photo.svg",alt:"Original Kuala Lumpur travel artwork"},
 {name:"Tel Aviv",moment:"Pokémon Hunt",src:"./assets/traveltlv-photo.svg",alt:"Original Tel Aviv travel artwork"},
 {name:"Istanbul",moment:"Startup Istanbul",src:"./assets/travelistanbul-photo.svg",alt:"Original Istanbul travel artwork"}
];

const scene=document.getElementById("desk-scene");
const keyboardMarkup="<div class=\"key-row row-1\"><span class=\"keycap\" style=\"flex:1\">esc</span><span class=\"keycap\" style=\"flex:1\">1</span><span class=\"keycap\" style=\"flex:1\">2</span><span class=\"keycap\" style=\"flex:1\">3</span><span class=\"keycap\" style=\"flex:1\">4</span><span class=\"keycap\" style=\"flex:1\">5</span><span class=\"keycap\" style=\"flex:1\">6</span><span class=\"keycap\" style=\"flex:1\">7</span><span class=\"keycap\" style=\"flex:1\">8</span><span class=\"keycap\" style=\"flex:1\">9</span><span class=\"keycap\" style=\"flex:1\">0</span><span class=\"keycap\" style=\"flex:1\">-</span><span class=\"keycap\" style=\"flex:1\">=</span><span class=\"keycap\" style=\"flex:1\">⌫</span></div><div class=\"key-row row-2\"><span class=\"keycap key-wide\" style=\"flex:1.35\">tab</span><span class=\"keycap\" style=\"flex:1\">Q</span><span class=\"keycap\" style=\"flex:1\">W</span><span class=\"keycap\" style=\"flex:1\">E</span><span class=\"keycap\" style=\"flex:1\">R</span><span class=\"keycap\" style=\"flex:1\">T</span><span class=\"keycap\" style=\"flex:1\">Y</span><span class=\"keycap\" style=\"flex:1\">U</span><span class=\"keycap\" style=\"flex:1\">I</span><span class=\"keycap\" style=\"flex:1\">O</span><span class=\"keycap\" style=\"flex:1\">P</span><span class=\"keycap\" style=\"flex:1\">[</span><span class=\"keycap\" style=\"flex:1\">]</span><span class=\"keycap\" style=\"flex:1\">\\</span></div><div class=\"key-row row-3\"><span class=\"keycap key-wide\" style=\"flex:1.6\">caps</span><span class=\"keycap\" style=\"flex:1\">A</span><span class=\"keycap\" style=\"flex:1\">S</span><span class=\"keycap\" style=\"flex:1\">D</span><span class=\"keycap\" style=\"flex:1\">F</span><span class=\"keycap\" style=\"flex:1\">G</span><span class=\"keycap\" style=\"flex:1\">H</span><span class=\"keycap\" style=\"flex:1\">J</span><span class=\"keycap\" style=\"flex:1\">K</span><span class=\"keycap\" style=\"flex:1\">L</span><span class=\"keycap\" style=\"flex:1\">;</span><span class=\"keycap\" style=\"flex:1\">'</span><span class=\"keycap key-wide\" style=\"flex:1.5\">enter</span></div><div class=\"key-row row-4\"><span class=\"keycap key-wide\" style=\"flex:1.95\">shift</span><span class=\"keycap\" style=\"flex:1\">Z</span><span class=\"keycap\" style=\"flex:1\">X</span><span class=\"keycap\" style=\"flex:1\">C</span><span class=\"keycap\" style=\"flex:1\">V</span><span class=\"keycap\" style=\"flex:1\">B</span><span class=\"keycap\" style=\"flex:1\">N</span><span class=\"keycap\" style=\"flex:1\">M</span><span class=\"keycap\" style=\"flex:1\">,</span><span class=\"keycap\" style=\"flex:1\">.</span><span class=\"keycap\" style=\"flex:1\">/</span><span class=\"keycap key-wide\" style=\"flex:1.95\">shift</span></div><div class=\"key-row row-5\"><span class=\"keycap\" style=\"flex:1.05\">fn</span><span class=\"keycap\" style=\"flex:1.1\">ctrl</span><span class=\"keycap\" style=\"flex:1.1\">⌘</span><span class=\"keycap\" style=\"flex:1.05\">alt</span><span class=\"keycap key-wide key-space\" style=\"flex:4.8\"></span><span class=\"keycap\" style=\"flex:1.05\">alt</span><span class=\"keycap\" style=\"flex:1.1\">⌘</span><span class=\"keycap\" style=\"flex:1\">←</span><span class=\"keycap\" style=\"flex:1\">↓</span><span class=\"keycap\" style=\"flex:1\">→</span></div>";
const frameMarkup=cities.map(city=>`
 <figure class="travel-frame" tabindex="0" aria-label="${city.name}, ${city.moment}">
  <img class="travel-photo" src="${city.src}" alt="${city.alt}" loading="eager" draggable="false">
  <figcaption><b>${city.name}</b><small>${city.moment}</small></figcaption>
 </figure>`).join("");

scene.innerHTML=`
 <div class="wall-light" aria-hidden="true"></div>
 <section class="wall-gallery" aria-label="Original travel memories">${frameMarkup}</section>
 <div class="wall-line" aria-hidden="true"></div>
 <div class="desk-top" aria-hidden="true"></div>
 <div class="desk-front" aria-hidden="true"></div>
 <div class="desk-lamp desk-lamp-right" aria-hidden="true">
  <span class="lamp-glow"></span>
  <span class="lamp-base"></span>
  <span class="lamp-stem"></span>
  <span class="lamp-shade"></span>
  <span class="lamp-cap"></span>
  <span class="lamp-bulb"></span>
 </div>

 
 <div class="award-objects" aria-label="Awards">
  <div class="award-plaque" tabindex="0" aria-label="First place, Rehoboth pitch competition">
   <span class="award-depth" aria-hidden="true"></span><span class="award-side-right" aria-hidden="true"></span><span class="award-side-top" aria-hidden="true"></span>
   <span class="award-topline">PITCH COMPETITION</span>
   <strong>1st Place</strong>
   <small>Startup Pitch</small>
   <i></i>
   <span class="award-hover">First place in the Rehoboth pitch competition.</span>
  </div>
  <div class="award-plaque second" tabindex="0" aria-label="Top 3, Arab Bank financial technology startups">
   <span class="award-depth" aria-hidden="true"></span><span class="award-side-right" aria-hidden="true"></span><span class="award-side-top" aria-hidden="true"></span>
   <span class="award-topline">ARAB BANK · 2019</span>
   <strong>Top 3</strong>
   <small>FinTech Startups</small>
   <i></i>
   <span class="award-hover">Top 3 in the Arab Bank financial technology startup competition.</span>
  </div>
 </div>

 <section class="laptop" aria-label="Portfolio on the laptop">
  <div class="laptop-display"><span class="laptop-camera"></span><div class="screen-ui">
   <div class="screen-top"><span class="screen-site-name">SHOMAN</span><span class="screen-site-status">INDEPENDENT BUILDER <i class="screen-dot"></i></span></div>
   <div class="screen-intro">
    <span>SELECTED WORK</span>
    <h1 class="screen-title">A few things I've built.</h1>
   </div>
   <nav class="screen-links" aria-label="Open a portfolio">
    <button type="button" data-portfolio="./design-portfolio.html" data-title="Design Portfolio">
     <span class="screen-number">01</span>
     <span class="screen-copy"><b>Design Portfolio</b><small>Selected design work</small></span>
     <span class="screen-arrow">↗</span>
    </button>
    <button type="button" data-portfolio="./marketing-portfolio.html" data-title="Marketing Portfolio">
     <span class="screen-number">02</span>
     <span class="screen-copy"><b>Marketing Portfolio</b><small>Selected marketing work</small></span>
     <span class="screen-arrow">↗</span>
    </button>
   </nav>
  </div></div>
  <div class="laptop-hinge"></div><div class="laptop-base"></div><div class="keyboard" aria-hidden="true"><div class="keyboard-bed"><div class="key-grid"><div class="key-row row-1"><span class="keycap" style="flex:1">esc</span><span class="keycap" style="flex:1">1</span><span class="keycap" style="flex:1">2</span><span class="keycap" style="flex:1">3</span><span class="keycap" style="flex:1">4</span><span class="keycap" style="flex:1">5</span><span class="keycap" style="flex:1">6</span><span class="keycap" style="flex:1">7</span><span class="keycap" style="flex:1">8</span><span class="keycap" style="flex:1">9</span><span class="keycap" style="flex:1">0</span><span class="keycap" style="flex:1">-</span><span class="keycap" style="flex:1">=</span><span class="keycap" style="flex:1">⌫</span></div><div class="key-row row-2"><span class="keycap key-wide" style="flex:1.35">tab</span><span class="keycap" style="flex:1">Q</span><span class="keycap" style="flex:1">W</span><span class="keycap" style="flex:1">E</span><span class="keycap" style="flex:1">R</span><span class="keycap" style="flex:1">T</span><span class="keycap" style="flex:1">Y</span><span class="keycap" style="flex:1">U</span><span class="keycap" style="flex:1">I</span><span class="keycap" style="flex:1">O</span><span class="keycap" style="flex:1">P</span><span class="keycap" style="flex:1">[</span><span class="keycap" style="flex:1">]</span><span class="keycap" style="flex:1">\</span></div><div class="key-row row-3"><span class="keycap key-wide" style="flex:1.6">caps</span><span class="keycap" style="flex:1">A</span><span class="keycap" style="flex:1">S</span><span class="keycap" style="flex:1">D</span><span class="keycap" style="flex:1">F</span><span class="keycap" style="flex:1">G</span><span class="keycap" style="flex:1">H</span><span class="keycap" style="flex:1">J</span><span class="keycap" style="flex:1">K</span><span class="keycap" style="flex:1">L</span><span class="keycap" style="flex:1">;</span><span class="keycap" style="flex:1">'</span><span class="keycap key-wide" style="flex:1.5">enter</span></div><div class="key-row row-4"><span class="keycap key-wide" style="flex:1.95">shift</span><span class="keycap" style="flex:1">Z</span><span class="keycap" style="flex:1">X</span><span class="keycap" style="flex:1">C</span><span class="keycap" style="flex:1">V</span><span class="keycap" style="flex:1">B</span><span class="keycap" style="flex:1">N</span><span class="keycap" style="flex:1">M</span><span class="keycap" style="flex:1">,</span><span class="keycap" style="flex:1">.</span><span class="keycap" style="flex:1">/</span><span class="keycap key-wide" style="flex:1.95">shift</span></div><div class="key-row row-5"><span class="keycap" style="flex:1.05">fn</span><span class="keycap" style="flex:1.1">ctrl</span><span class="keycap" style="flex:1.1">⌘</span><span class="keycap" style="flex:1.05">alt</span><span class="keycap key-wide key-space" style="flex:4.8"></span><span class="keycap" style="flex:1.05">alt</span><span class="keycap" style="flex:1.1">⌘</span><span class="keycap" style="flex:1">←</span><span class="keycap" style="flex:1">↓</span><span class="keycap" style="flex:1">→</span></div></div></div></div><div class="trackpad"></div>
 </section>

 <a class="paper" href="./paper.html" target="_blank" rel="noopener" aria-label="Open Agentic Learning Without Retention research paper">
  <span class="paper-pin" aria-hidden="true"></span>
  <div class="paper-meta"><span>RESEARCH PAPER</span><span>2026</span></div>
  <strong>Agentic Learning<br>Without Retention</strong>
  <i class="paper-rule"></i>
  <p>From experience to transferable worldviews.</p>
  <div class="paper-lines"></div>
  <small class="paper-signature">SHOMAN · RESEARCH NOTE</small>
  <div class="paper-hover"><b>Agentic Learning Without Retention</b><span>From experience to transferable understanding. The paper proposes treating experience as temporary evidence, not knowledge to inherit.</span><span>It gives informative failures and other surprises priority, then tests competing explanations with counterexamples and prospective tests. Only explanations that survive become conditional principles, connected into a revisable worldview.</span><span class="paper-hover-action">Open the full research paper ↗</span></div>
 </a>

 <a class="book-mockup" href="https://www.amazon.com/s?k=exProgressive+Salah+Shoman" target="_blank" rel="noopener noreferrer" aria-label="Buy exProgressive by Shoman on Amazon">
  <img src="https://5e3efbb2.shoman.pages.dev/lovable-uploads/PPontherock.png" alt="3D cover mockup of exProgressive by Shoman" loading="eager" draggable="false">
  <span class="book-hover"><b>exProgressive</b><span>What The Left Doesn’t Get.</span><span>A critique of how the modern Left understands power, morality, equality and progress. It also challenges the right, rather than treating it as the answer.</span><span>Looks at the assumptions hiding behind good intentions, the language of moral authority, and the ways ideas can produce outcomes their supporters did not intend.</span><small>By Shoman · Open on Amazon ↗</small></span>
 </a>

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

const cities=[
 {name:"Seoul",moment:"AI Conference",src:"./assets/travelkorea-photo.svg",alt:"Original Seoul travel artwork"},
 {name:"Amman",moment:"Startup Pitch",src:"./assets/travelamman-photo.svg",alt:"Original Amman travel artwork"},
 {name:"Copenhagen",moment:"LARP",src:"./assets/travelcopenhagen-photo.svg",alt:"Original Copenhagen travel artwork"},
 {name:"Kuala Lumpur",moment:"Book Tour",src:"./assets/travelkl-original.svg",alt:"Original Kuala Lumpur travel artwork"},
 {name:"Tel Aviv",moment:"Pokémon Hunt",src:"./assets/traveltlv-photo.svg",alt:"Original Tel Aviv travel artwork"},
 {name:"Istanbul",moment:"Startup Istanbul",src:"./assets/travelistanbul-photo.svg",alt:"Original Istanbul travel artwork"}
];

const scene=document.getElementById("desk-scene");
const keyboardMarkup="<div class=\"key-row row-1\"><span class=\"keycap\" style=\"flex:1\">esc</span><span class=\"keycap\" style=\"flex:1\">1</span><span class=\"keycap\" style=\"flex:1\">2</span><span class=\"keycap\" style=\"flex:1\">3</span><span class=\"keycap\" style=\"flex:1\">4</span><span class=\"keycap\" style=\"flex:1\">5</span><span class=\"keycap\" style=\"flex:1\">6</span><span class=\"keycap\" style=\"flex:1\">7</span><span class=\"keycap\" style=\"flex:1\">8</span><span class=\"keycap\" style=\"flex:1\">9</span><span class=\"keycap\" style=\"flex:1\">0</span><span class=\"keycap\" style=\"flex:1\">-</span><span class=\"keycap\" style=\"flex:1\">=</span><span class=\"keycap\" style=\"flex:1\">⌫</span></div><div class=\"key-row row-2\"><span class=\"keycap key-wide\" style=\"flex:1.35\">tab</span><span class=\"keycap\" style=\"flex:1\">Q</span><span class=\"keycap\" style=\"flex:1\">W</span><span class=\"keycap\" style=\"flex:1\">E</span><span class=\"keycap\" style=\"flex:1\">R</span><span class=\"keycap\" style=\"flex:1\">T</span><span class=\"keycap\" style=\"flex:1\">Y</span><span class=\"keycap\" style=\"flex:1\">U</span><span class=\"keycap\" style=\"flex:1\">I</span><span class=\"keycap\" style=\"flex:1\">O</span><span class=\"keycap\" style=\"flex:1\">P</span><span class=\"keycap\" style=\"flex:1\">[</span><span class=\"keycap\" style=\"flex:1\">]</span><span class=\"keycap\" style=\"flex:1\">\\</span></div><div class=\"key-row row-3\"><span class=\"keycap key-wide\" style=\"flex:1.6\">caps</span><span class=\"keycap\" style=\"flex:1\">A</span><span class=\"keycap\" style=\"flex:1\">S</span><span class=\"keycap\" style=\"flex:1\">D</span><span class=\"keycap\" style=\"flex:1\">F</span><span class=\"keycap\" style=\"flex:1\">G</span><span class=\"keycap\" style=\"flex:1\">H</span><span class=\"keycap\" style=\"flex:1\">J</span><span class=\"keycap\" style=\"flex:1\">K</span><span class=\"keycap\" style=\"flex:1\">L</span><span class=\"keycap\" style=\"flex:1\">;</span><span class=\"keycap\" style=\"flex:1\">'</span><span class=\"keycap key-wide\" style=\"flex:1.5\">enter</span></div><div class=\"key-row row-4\"><span class=\"keycap key-wide\" style=\"flex:1.95\">shift</span><span class=\"keycap\" style=\"flex:1\">Z</span><span class=\"keycap\" style=\"flex:1\">X</span><span class=\"keycap\" style=\"flex:1\">C</span><span class=\"keycap\" style=\"flex:1\">V</span><span class=\"keycap\" style=\"flex:1\">B</span><span class=\"keycap\" style=\"flex:1\">N</span><span class=\"keycap\" style=\"flex:1\">M</span><span class=\"keycap\" style=\"flex:1\">,</span><span class=\"keycap\" style=\"flex:1\">.</span><span class=\"keycap\" style=\"flex:1\">/</span><span class=\"keycap key-wide\" style=\"flex:1.95\">shift</span></div><div class=\"key-row row-5\"><span class=\"keycap\" style=\"flex:1.05\">fn</span><span class=\"keycap\" style=\"flex:1.1\">ctrl</span><span class=\"keycap\" style=\"flex:1.1\">⌘</span><span class=\"keycap\" style=\"flex:1.05\">alt</span><span class=\"keycap key-wide key-space\" style=\"flex:4.8\"></span><span class=\"keycap\" style=\"flex:1.05\">alt</span><span class=\"keycap\" style=\"flex:1.1\">⌘</span><span class=\"keycap\" style=\"flex:1\">←</span><span class=\"keycap\" style=\"flex:1\">↓</span><span class=\"keycap\" style=\"flex:1\">→</span></div>";
const frameMarkup=cities.map(city=>`
 <figure class="travel-frame${city.name==="Tel Aviv"?" travel-frame--telaviv":""}" aria-label="${city.name}, ${city.moment}">
  <img class="travel-photo" src="${city.src}" alt="${city.alt}" loading="eager" draggable="false">
  <figcaption><b>${city.name}</b><small>${city.moment}</small></figcaption>
 </figure>`).join("");

scene.innerHTML=`
 <div class="wall-light" aria-hidden="true"></div>
 <section class="wall-gallery" aria-label="Original travel memories">${frameMarkup}</section>
 <div class="wall-line" aria-hidden="true"></div>
 <div class="desk-top" aria-hidden="true"></div>
 <div class="desk-front" aria-hidden="true"></div>
 <div class="desk-plant" aria-hidden="true">
  <svg viewBox="0 0 180 260" preserveAspectRatio="xMidYMax meet" role="presentation" focusable="false">
   <defs>
    <linearGradient id="plant-leaf-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#71865a"/><stop offset=".48" stop-color="#49663e"/><stop offset="1" stop-color="#263f2b"/></linearGradient>
    <linearGradient id="plant-leaf-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#819267"/><stop offset=".5" stop-color="#506d43"/><stop offset="1" stop-color="#304a32"/></linearGradient>
    <linearGradient id="plant-pot" x1="0" y1="0" x2="1" y2=".2"><stop offset="0" stop-color="#684631"/><stop offset=".28" stop-color="#b17a51"/><stop offset=".62" stop-color="#895638"/><stop offset="1" stop-color="#513624"/></linearGradient>
    <linearGradient id="plant-pot-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d1a178"/><stop offset=".45" stop-color="#93603e"/><stop offset="1" stop-color="#593a27"/></linearGradient>
   </defs>
   <ellipse cx="91" cy="252" rx="43" ry="6" fill="#090806" opacity=".28"/>
   <g fill="none" stroke="#526342" stroke-width="3" stroke-linecap="round">
    <path d="M90 207 C89 169 87 126 92 61"/>
    <path d="M88 194 C76 164 51 127 29 91"/>
    <path d="M91 190 C107 157 134 124 157 91"/>
    <path d="M89 202 C67 180 44 166 20 151"/>
    <path d="M93 199 C117 177 143 163 165 151"/>
    <path d="M90 181 C89 151 78 125 67 102"/>
    <path d="M94 178 C105 147 116 122 128 103"/>
   </g>
   <g class="plant-canopy">
    <path d="M91 112 C61 91 59 42 91 9 C119 39 121 83 91 112Z" fill="url(#plant-leaf-b)" stroke="#243e2a" stroke-width="1.6"/>
    <path d="M84 123 C48 119 16 91 24 50 C60 49 87 81 84 123Z" fill="url(#plant-leaf-a)" stroke="#263e2b" stroke-width="1.6"/>
    <path d="M99 119 C111 79 143 55 167 67 C166 102 137 127 99 119Z" fill="url(#plant-leaf-b)" stroke="#263e2b" stroke-width="1.6"/>
    <path d="M82 158 C48 158 13 138 10 104 C43 91 74 117 82 158Z" fill="url(#plant-leaf-b)" stroke="#263e2b" stroke-width="1.6"/>
    <path d="M99 157 C120 121 151 108 174 125 C161 156 132 170 99 157Z" fill="url(#plant-leaf-a)" stroke="#263e2b" stroke-width="1.6"/>
    <path d="M87 177 C56 182 29 167 25 143 C50 129 78 146 87 177Z" fill="url(#plant-leaf-a)" stroke="#263e2b" stroke-width="1.6"/>
    <path d="M98 177 C119 151 146 146 163 161 C147 185 120 191 98 177Z" fill="url(#plant-leaf-b)" stroke="#263e2b" stroke-width="1.6"/>
    <g fill="none" stroke="#b4c092" stroke-width="1.25" stroke-linecap="round" opacity=".48">
     <path d="M91 108 C91 76 91 42 91 15"/>
     <path d="M82 119 C65 95 46 72 28 53"/>
     <path d="M101 116 C121 94 145 77 164 70"/>
     <path d="M80 154 C58 134 34 116 14 107"/>
     <path d="M102 154 C126 140 151 130 171 127"/>
     <path d="M85 174 C66 159 47 148 28 145"/>
     <path d="M101 175 C121 167 143 163 159 162"/>
    </g>
   </g>
   <ellipse cx="90" cy="204" rx="35" ry="8" fill="#392519"/>
   <path d="M57 203 C60 224 63 244 72 250 C82 254 99 254 109 250 C118 244 121 224 123 203Z" fill="url(#plant-pot)" stroke="#4a3020" stroke-width="1.5"/>
   <path d="M62 218 C78 224 103 224 118 218" fill="none" stroke="#d1a17b" stroke-width="2" opacity=".42"/>
   <path d="M65 240 C79 246 101 246 115 240" fill="none" stroke="#3d281c" stroke-width="2" opacity=".5"/>
   <ellipse cx="90" cy="203" rx="35" ry="8" fill="url(#plant-pot-rim)" stroke="#4a3020" stroke-width="1.5"/>
   <ellipse cx="90" cy="202" rx="29" ry="4.5" fill="#30251b"/>
   <path d="M49 251 C59 258 120 259 131 251 L125 258 C113 263 67 263 55 258Z" fill="#68442d" stroke="#422a1c" stroke-width="1"/>
  </svg>
 </div>
 <div class="desk-lamp desk-lamp-right" aria-hidden="true">
  <span class="lamp-glow"></span>
  <span class="lamp-base"></span>
  <span class="lamp-stem"></span>
  <span class="lamp-shade"></span>
  <span class="lamp-cap"></span>
  <span class="lamp-bulb"></span>
 </div>

 
 <div class="award-glass-display" aria-label="Awards">
  <article class="glass-trophy glass-rehoboth" tabindex="0" aria-label="AI Week 2019 award, South Korea" aria-describedby="award-rehoboth-details">
   <span class="glass-contact-shadow"></span>
   <div class="glass-foot"><span class="glass-foot-front"></span><span class="glass-foot-side"></span></div>
   <div class="glass-prism">
    <div class="glass-face-front">
     <div class="glass-engraving">
      <span class="glass-brand">KOREA</span>
      <span class="glass-small">AI WEEK 2019</span>
      <span class="glass-rank">1st</span>
      <span class="glass-placing">PLACE</span>
      <span class="glass-line"></span>
      <span class="glass-detail">AWARD</span>
     </div>
    </div>
    <span class="glass-face-right"></span><span class="glass-face-top"></span>
   </div>
   <div class="award-hover" id="award-rehoboth-details">
     <span class="award-hover-kicker">REHOBOTH, SOUTH KOREA</span>
     <strong>1st Place</strong>
     <small>Pitch Competition · AI Week 2019</small>
    </div>
  </article>
  <article class="glass-trophy glass-arab" tabindex="0" aria-label="Arab Bank award" aria-describedby="award-arab-details">
   <span class="glass-contact-shadow"></span>
   <div class="glass-foot"><span class="glass-foot-front"></span><span class="glass-foot-side"></span></div>
   <div class="glass-prism">
    <div class="glass-face-front">
     <div class="glass-engraving">
      <span class="glass-brand">ARAB BANK</span>
      <span class="glass-small"></span>
      <span class="glass-rank">Top 3</span>
      <span class="glass-placing">FINALISTS</span>
      <span class="glass-line"></span>
      <span class="glass-detail">STARTUP CHALLENGE</span>
     </div>
    </div>
    <span class="glass-face-right"></span><span class="glass-face-top"></span>
   </div>
   <div class="award-hover" id="award-arab-details">
    <span class="award-hover-kicker">ARAB BANK</span>
    <strong>Top 3</strong>
    <small>Financial Technology Startups</small>
   </div>
  </article>
 </div>
 <section class="laptop" aria-label="Portfolio on the laptop">
  <div class="laptop-display"><span class="laptop-camera"></span><div class="screen-ui">
   <div class="screen-top"><span class="screen-site-name">SHOMAN</span><span class="screen-site-status">INDEPENDENT BUILDER <i class="screen-dot"></i></span></div>
   <div class="screen-intro">
    <span>SELECTED WORK</span>
    <h1 class="screen-title">A few things I've built.</h1>
   </div>
   <nav class="screen-links" aria-label="Open a portfolio">
    <button type="button" data-portfolio="/ux" data-title="UX Portfolio">
     <span class="screen-number">01</span>
     <span class="screen-copy"><b>UX Portfolio</b></span>
     <span class="screen-arrow">↗</span>
    </button>
    <button type="button" data-portfolio="/mar" data-title="Marketing Portfolio">
     <span class="screen-number">02</span>
     <span class="screen-copy"><b>Marketing Portfolio</b></span>
     <span class="screen-arrow">↗</span>
    </button>
   </nav>
  </div></div>
  <div class="laptop-hinge"></div><div class="laptop-base"></div><div class="keyboard" aria-hidden="true"><div class="keyboard-bed"><div class="key-grid"><div class="key-row row-1"><span class="keycap" style="flex:1">esc</span><span class="keycap" style="flex:1">1</span><span class="keycap" style="flex:1">2</span><span class="keycap" style="flex:1">3</span><span class="keycap" style="flex:1">4</span><span class="keycap" style="flex:1">5</span><span class="keycap" style="flex:1">6</span><span class="keycap" style="flex:1">7</span><span class="keycap" style="flex:1">8</span><span class="keycap" style="flex:1">9</span><span class="keycap" style="flex:1">0</span><span class="keycap" style="flex:1">-</span><span class="keycap" style="flex:1">=</span><span class="keycap" style="flex:1">⌫</span></div><div class="key-row row-2"><span class="keycap key-wide" style="flex:1.35">tab</span><span class="keycap" style="flex:1">Q</span><span class="keycap" style="flex:1">W</span><span class="keycap" style="flex:1">E</span><span class="keycap" style="flex:1">R</span><span class="keycap" style="flex:1">T</span><span class="keycap" style="flex:1">Y</span><span class="keycap" style="flex:1">U</span><span class="keycap" style="flex:1">I</span><span class="keycap" style="flex:1">O</span><span class="keycap" style="flex:1">P</span><span class="keycap" style="flex:1">[</span><span class="keycap" style="flex:1">]</span><span class="keycap" style="flex:1">\</span></div><div class="key-row row-3"><span class="keycap key-wide" style="flex:1.6">caps</span><span class="keycap" style="flex:1">A</span><span class="keycap" style="flex:1">S</span><span class="keycap" style="flex:1">D</span><span class="keycap" style="flex:1">F</span><span class="keycap" style="flex:1">G</span><span class="keycap" style="flex:1">H</span><span class="keycap" style="flex:1">J</span><span class="keycap" style="flex:1">K</span><span class="keycap" style="flex:1">L</span><span class="keycap" style="flex:1">;</span><span class="keycap" style="flex:1">'</span><span class="keycap key-wide" style="flex:1.5">enter</span></div><div class="key-row row-4"><span class="keycap key-wide" style="flex:1.95">shift</span><span class="keycap" style="flex:1">Z</span><span class="keycap" style="flex:1">X</span><span class="keycap" style="flex:1">C</span><span class="keycap" style="flex:1">V</span><span class="keycap" style="flex:1">B</span><span class="keycap" style="flex:1">N</span><span class="keycap" style="flex:1">M</span><span class="keycap" style="flex:1">,</span><span class="keycap" style="flex:1">.</span><span class="keycap" style="flex:1">/</span><span class="keycap key-wide" style="flex:1.95">shift</span></div><div class="key-row row-5"><span class="keycap" style="flex:1.05">fn</span><span class="keycap" style="flex:1.1">ctrl</span><span class="keycap" style="flex:1.1">⌘</span><span class="keycap" style="flex:1.05">alt</span><span class="keycap key-wide key-space" style="flex:4.8"></span><span class="keycap" style="flex:1.05">alt</span><span class="keycap" style="flex:1.1">⌘</span><span class="keycap" style="flex:1">←</span><span class="keycap" style="flex:1">↓</span><span class="keycap" style="flex:1">→</span></div></div></div></div><div class="trackpad" aria-hidden="true"></div>
 </section>

 <a class="paper" href="https://zenodo.org/records/23971266" target="_blank" rel="noopener noreferrer" aria-label="Open Agentic Learning Without Retention research paper">
  <span class="paper-pin" aria-hidden="true"></span>
  <div class="paper-meta"><span>RESEARCH PAPER</span><span>2026</span></div>
  <strong>Agentic Learning<br>Without Retention</strong>
  <i class="paper-rule"></i>
  <p>From experience to transferable worldviews.</p>
  <div class="paper-lines"></div>
  <small class="paper-signature">SHOMAN · RESEARCH NOTE</small>
  <div class="paper-hover">
   <span class="hover-card-kicker">RESEARCH PAPER · 2026</span>
   <b>Agentic Learning Without Retention</b>
   <span>From experience to transferable understanding. The paper treats experience as temporary evidence, not knowledge to inherit.</span>
   <span>It prioritizes informative failures, tests competing explanations with counterexamples and prospective tests, then turns only surviving explanations into conditional principles and a revisable worldview.</span>
   <small class="paper-hover-action">Open the full research paper ↗</small>
  </div>
 </a>

 <a class="book-mockup" href="https://www.amazon.com/dp/B0DLDYF2QS" target="_blank" rel="noopener noreferrer" aria-label="Open exProgressive: How Capitalism Used Inequality by Salah Shoman on Amazon">
  <img src="https://5e3efbb2.shoman.pages.dev/lovable-uploads/PPontherock.png" alt="3D book mockup for exProgressive by Salah Shoman" loading="eager" draggable="false">
  <span class="book-hover">
   <img class="book-hover-cover" src="./portfolio-assets/exprogressive-cover.jpg" alt="Current Amazon cover for exProgressive: How Capitalism Used Inequality" loading="eager">
   <span class="book-hover-copy">
    <span class="hover-card-kicker">BOOK · SALAH SHOMAN</span>
    <b>exProgressive</b>
    <strong>How Capitalism Used Inequality</strong>
    <span>Why do some highly unequal societies move faster than egalitarian ones? The book traces this pattern from early civilizations to modern America, examining how elite power and the destruction of old systems can accelerate technological change, and who pays for it.</span>
    <small>Open on Amazon ↗</small>
   </span>
  </span>
 </a>

 <div class="portfolio-modal" id="portfolio-modal" hidden aria-hidden="true">
   <div class="modal-shade">
    <section class="portfolio-window" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title" tabindex="-1">
     <div class="portfolio-toolbar" aria-label="Portfolio navigation">
      <button class="portfolio-control" id="portfolio-prev" type="button" aria-label="Previous project" disabled><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.5 7 10l5.5 5.5"/></svg></button>
      <button class="portfolio-control" id="portfolio-next" type="button" aria-label="Next project" disabled><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.5 4.5 13 10l-5.5 5.5"/></svg></button>
      <button class="portfolio-control portfolio-close" id="portfolio-close" type="button" aria-label="Close portfolio"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15"/></svg></button>
     </div>
     <span id="portfolio-modal-title" class="portfolio-modal-title">Portfolio</span>
     <iframe class="portfolio-frame" title="Portfolio content" src="about:blank" loading="eager"></iframe>
    </section>
   </div>
  </div>

 <footer class="scene-footer">
  <nav aria-label="Personal links">
   <a href="https://linkedin.com/in/shoman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   <a href="https://github.com/sshoman" target="_blank" rel="noopener noreferrer">GitHub</a>
   <a href="mailto:sh0man@outlook.com">Contact</a>
  </nav>
 </footer>
`;

const modal=scene.querySelector("#portfolio-modal");
const modalTitle=scene.querySelector("#portfolio-modal-title");
const modalFrame=scene.querySelector(".portfolio-frame");
const modalWindow=scene.querySelector(".portfolio-window");
const portfolioPrev=scene.querySelector("#portfolio-prev");
const portfolioNext=scene.querySelector("#portfolio-next");
const portfolioClose=scene.querySelector("#portfolio-close");
let lastTrigger=null;
let activePortfolioPath=null;
const deskAddress=window.location.pathname+window.location.search+window.location.hash;

function navigatePortfolio(direction){
 if(modal.hidden)return;
 modalFrame.contentWindow?.postMessage({type:"desk-portfolio:navigate",direction},window.location.origin);
}
portfolioPrev.addEventListener("click",()=>navigatePortfolio(-1));
portfolioNext.addEventListener("click",()=>navigatePortfolio(1));
portfolioClose.addEventListener("click",closePortfolio);
window.addEventListener("message",event=>{
 if(event.source!==modalFrame.contentWindow||event.origin!==window.location.origin)return;
 if(event.data?.type==="desk-portfolio:close"){closePortfolio();return;}
 if(event.data?.type!=="desk-portfolio:state")return;
 portfolioPrev.disabled=!event.data.canPrev;
 portfolioNext.disabled=!event.data.canNext;
});

function openPortfolio(trigger,fromHistory=false){
 lastTrigger=trigger;
 const portfolioPath=new URL(trigger.dataset.portfolio,window.location.origin).pathname;
 if(!fromHistory&&window.location.pathname!==portfolioPath){
  window.history.pushState({deskPortfolioPath:portfolioPath},"",portfolioPath);
 }
 activePortfolioPath=portfolioPath;
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
 portfolioPrev.disabled=true;
 portfolioNext.disabled=true;
 modalFrame.src=new URL(trigger.dataset.portfolio,window.location.href).href;
 requestAnimationFrame(()=>modalWindow.focus());
}
function closePortfolio(fromHistory=false){
 if(modal.hidden)return;
 modal.hidden=true;
 modal.setAttribute("aria-hidden","true");
 modalFrame.src="about:blank";
 portfolioPrev.disabled=true;
 portfolioNext.disabled=true;
 if(!fromHistory&&activePortfolioPath&&window.location.pathname===activePortfolioPath){
  window.history.replaceState({desk:true},"",deskAddress||"/");
 }
 activePortfolioPath=null;
 lastTrigger?.focus();
}

window.addEventListener("popstate",()=>{
 const trigger=[...scene.querySelectorAll("[data-portfolio]")].find(button=>new URL(button.dataset.portfolio,window.location.origin).pathname===window.location.pathname);
 if(trigger){openPortfolio(trigger,true);return;}
 if(!modal.hidden)closePortfolio(true);
});

/* Any click on the shade outside the portfolio window dismisses the overlay. */
modal.addEventListener("click",event=>{
 if(!modalWindow.contains(event.target))closePortfolio();
});

scene.addEventListener("click",event=>{
 const trigger=event.target.closest("[data-portfolio]");
 if(trigger){event.preventDefault();openPortfolio(trigger);return;}
 if(event.target.classList.contains("modal-shade"))closePortfolio();
});
document.addEventListener("keydown",event=>{
 if(modal.hidden)return;
 if(event.key==="Escape"){event.preventDefault();closePortfolio();return;}
 if(event.key==="ArrowLeft"){event.preventDefault();navigatePortfolio(-1);return;}
 if(event.key==="ArrowRight"){event.preventDefault();navigatePortfolio(1);}
});
document.addEventListener("contextmenu",event=>{
 if(event.target.closest(".desk-scene"))event.preventDefault();
});
document.addEventListener("dragstart",event=>{
 if(event.target.closest(".desk-scene"))event.preventDefault();
});

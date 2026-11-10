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
  <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMax meet" role="presentation" focusable="false">
   <defs>
    <linearGradient id="plant-leaf-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#91a176"/><stop offset=".42" stop-color="#5e794d"/><stop offset="1" stop-color="#263d2a"/></linearGradient>
    <linearGradient id="plant-leaf-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7f9568"/><stop offset=".48" stop-color="#49683d"/><stop offset="1" stop-color="#213a29"/></linearGradient>
    <linearGradient id="plant-leaf-c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a0ad7d"/><stop offset=".44" stop-color="#60784a"/><stop offset="1" stop-color="#304b31"/></linearGradient>
    <linearGradient id="plant-stem" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#293f29"/><stop offset=".45" stop-color="#74845a"/><stop offset="1" stop-color="#31452d"/></linearGradient>
    <linearGradient id="plant-pot" x1="0" y1="0" x2="1" y2=".15"><stop offset="0" stop-color="#65412c"/><stop offset=".24" stop-color="#a96d48"/><stop offset=".48" stop-color="#c18a60"/><stop offset=".76" stop-color="#895436"/><stop offset="1" stop-color="#4b3022"/></linearGradient>
    <linearGradient id="plant-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d3a17a"/><stop offset=".32" stop-color="#a36d49"/><stop offset="1" stop-color="#68442e"/></linearGradient>
   </defs>
   <ellipse cx="100" cy="289" rx="48" ry="7" fill="#080705" opacity=".32"/>
   <g class="plant-canopy">
    <g fill="none" stroke="url(#plant-stem)" stroke-width="4" stroke-linecap="round">
     <path d="M99 238 C97 196 99 154 101 115 C102 84 101 62 102 43"/>
     <path d="M99 222 C79 196 61 170 43 139"/>
     <path d="M101 218 C121 190 142 166 165 139"/>
     <path d="M99 203 C76 187 58 180 35 176"/>
     <path d="M102 205 C123 192 145 188 169 190"/>
     <path d="M100 181 C91 157 82 139 72 122"/>
     <path d="M103 180 C116 157 128 139 140 123"/>
    </g>
    <g stroke="#29432c" stroke-width="1.4" stroke-linejoin="round">
     <path d="M102 112 C75 87 77 48 103 20 C128 48 128 87 102 112Z" fill="url(#plant-leaf-c)"/>
     <path d="M91 148 C58 145 29 119 34 82 C68 78 94 112 91 148Z" fill="url(#plant-leaf-a)"/>
     <path d="M108 151 C115 113 145 86 173 99 C171 135 142 158 108 151Z" fill="url(#plant-leaf-b)"/>
     <path d="M88 191 C57 195 25 179 19 148 C48 130 81 153 88 191Z" fill="url(#plant-leaf-b)"/>
     <path d="M111 194 C131 163 158 151 182 169 C168 199 139 210 111 194Z" fill="url(#plant-leaf-c)"/>
     <path d="M95 173 C68 165 51 138 61 111 C88 119 104 145 95 173Z" fill="url(#plant-leaf-c)"/>
     <path d="M106 178 C109 147 132 124 155 129 C155 158 134 180 106 178Z" fill="url(#plant-leaf-a)"/>
    </g>
    <g fill="none" stroke="#c0cc9a" stroke-width="1.35" stroke-linecap="round" opacity=".52">
     <path d="M102 106 C103 77 103 48 103 25"/>
     <path d="M89 143 C71 121 53 101 38 85"/>
     <path d="M111 147 C132 127 153 110 170 102"/>
     <path d="M85 185 C62 169 40 156 23 150"/>
     <path d="M114 190 C138 181 159 173 179 171"/>
     <path d="M94 168 C82 148 72 128 64 115"/>
     <path d="M108 173 C125 157 140 141 152 132"/>
    </g>
    <g fill="none" stroke="#d0d9ad" stroke-width=".7" opacity=".23">
     <path d="M47 93 Q69 106 79 132"/><path d="M130 124 Q143 130 158 148"/>
     <path d="M37 157 Q59 160 76 177"/><path d="M132 183 Q154 175 168 176"/>
    </g>
   </g>
   <ellipse cx="100" cy="237" rx="39" ry="9" fill="#3a271b"/>
   <path d="M62 237 C65 258 71 280 80 286 C90 291 111 291 121 286 C130 280 135 258 138 237Z" fill="url(#plant-pot)" stroke="#4e3221" stroke-width="1.8"/>
   <path d="M69 254 C83 261 116 262 130 254" fill="none" stroke="#dfb28c" stroke-width="1.8" opacity=".35"/>
   <path d="M74 277 C87 283 111 284 124 277" fill="none" stroke="#3d281c" stroke-width="2" opacity=".5"/>
   <ellipse cx="100" cy="237" rx="39" ry="9" fill="url(#plant-rim)" stroke="#4e3221" stroke-width="1.7"/>
   <ellipse cx="100" cy="235.5" rx="32" ry="5.5" fill="#2c2118"/>
   <path d="M76 235 Q91 231 104 235 T126 235" fill="none" stroke="#6c5a39" stroke-width="1.2" opacity=".65"/>
   <path d="M57 286 Q100 295 143 286 L136 294 Q100 300 64 294Z" fill="#70482f" stroke="#452b1d" stroke-width="1.2"/>
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

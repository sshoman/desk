const cities=[
{name:"Seoul",alt:"Gyeongbokgung Palace and cherry blossoms in Seoul",credit:"Evgeny Matveev, Unsplash",src:"https://images.unsplash.com/photo-1745687237545-c9975e7035f4?auto=format&fit=crop&crop=entropy&fm=jpg&q=85&w=900&h=1100"},
{name:"Amman",alt:"Warm stone rooftops and hillside buildings in Amman",credit:"Mauro Lima, Unsplash",src:"https://images.unsplash.com/photo-1691673252540-048113bb2748?auto=format&fit=crop&crop=entropy&fm=jpg&q=85&w=900&h=1100"},
{name:"Copenhagen",alt:"Colorful Nyhavn harbor in Copenhagen",credit:"Eleni Afiontzi, Unsplash",src:"https://images.unsplash.com/photo-1719732804453-9f76f034a419?auto=format&fit=crop&crop=entropy&fm=jpg&q=85&w=900&h=1100"},
{name:"Kuala Lumpur",alt:"Petronas Twin Towers in Kuala Lumpur",credit:"World Tourism",src:"https://i.world-tourism.org/m/private-half-day-city-highlights-tour-of-kuala-lumpur-d335-414517P15-1.jpg"},
{name:"Tel Aviv",alt:"Tel Aviv skyline and Mediterranean beach",credit:"Dan Gold, Unsplash",src:"https://images.unsplash.com/photo-1528791075103-b149f525eb22?auto=format&fit=crop&crop=entropy&fm=jpg&q=85&w=900&h=1100"},
{name:"Istanbul",alt:"Ortakoy Mosque on the Bosphorus in Istanbul",credit:"Bunq travel guide",src:"https://framerusercontent.com/images/pLATg0nuE1Pg4ub4VAYdeLVTUK0.jpeg?height=2022&width=3000"}
];
const scene=document.getElementById("desk-scene");
const frameMarkup=cities.map(c=>`<figure class="travel-frame" aria-label="${c.name}"><img class="travel-photo" src="${c.src}" alt="${c.alt}" title="${c.name}" loading="eager" referrerpolicy="no-referrer"></figure>`).join("");
scene.innerHTML=`
 <div class="wall-light" aria-hidden="true"></div>
 <div class="shelf" aria-hidden="true"><div class="shelf-books">${Array.from({length:32},()=>"<i></i>").join("")}</div></div>
 <div class="wall-gallery" aria-label="Travel photographs on the wall">${frameMarkup}</div>
 <div class="wall-line" aria-hidden="true"></div>
 <div class="desk-top" aria-hidden="true"></div>
 <div class="desk-front" aria-hidden="true"><span class="drawer"></span></div>
 <div class="desk-lamp" aria-hidden="true"><span class="lamp-shade"></span><span class="lamp-stem"></span><span class="lamp-base"></span></div>
 <div class="plant plant-left" aria-hidden="true"><div class="plant-leaves">${Array.from({length:5},()=>"<i></i>").join("")}</div><div class="plant-pot"></div></div>
 <div class="plant plant-right" aria-hidden="true"><div class="plant-leaves">${Array.from({length:5},()=>"<i></i>").join("")}</div><div class="plant-pot"></div></div>
 <div class="pencil-cup" aria-hidden="true"></div>
 <section class="laptop" aria-label="Portfolio on the laptop">
  <div class="laptop-display"><span class="laptop-camera"></span><div class="screen-ui">
   <div class="screen-top"><span>SHOMAN</span><span><i class="screen-dot"></i>ONLINE</span></div>
   <h1 class="screen-title">WORKSPACE</h1><p class="screen-subtitle">SELECT A PORTFOLIO</p>
   <div class="screen-divider"></div>
   <nav class="screen-links"><a href="./design-portfolio.html">DESIGN</a><a href="./marketing-portfolio.html">MARKETING</a></nav>
  </div></div>
  <div class="laptop-hinge"></div><div class="laptop-base"></div><div class="keyboard"></div><div class="trackpad"></div>
 </section>
 <div class="paper" aria-label="Research paper"><small>RESEARCH PAPER · 2026</small><strong>Agentic Learning Without Retention</strong><div class="paper-lines"></div></div>
 <div class="book" aria-label="exProgressive book"><div class="book-title">exProgressive<br><small>WHAT THE LEFT DOESN'T GET</small></div></div>
 <div class="scene-caption"><span>SHOMAN</span><i></i><span>THE WORKROOM</span></div>
`;

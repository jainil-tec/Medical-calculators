/* MedCalc examination media layer.
   Uses openly licensed/public-domain teaching images and diagrams.
   Images are shown beside matching examination techniques without altering the examination text.
*/
(function(){
  'use strict';
  const MEDIA = [
    {key:'JVP', match:'JVP —', title:'JVP examination', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jvp-0007.jpg', credit:'Wikimedia Commons: Jvp-0007.jpg'},
    {key:'APEX', match:'PALPATION — CAROTID PULSE', title:'Precordial / apex examination', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Apex-cardiogram1.JPG', credit:'Wikimedia Commons: Apex-cardiogram1.JPG'},
    {key:'RESP_EXPANSION', match:'PALPATION — ASSESS TRACHEAL POSITION', title:'Chest expansion technique', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anterior_Chest_Lines.png', credit:'Meredith Pomietlo / Chippewa Valley Technical College — CC BY 4.0'},
    {key:'RESP_AUSC', match:'AUSCULTATION — USE THE DIAPHRAGM', title:'Respiratory auscultation areas', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anterior_Respiratory_Auscultation_Pattern.png', credit:'Meredith Pomietlo / Chippewa Valley Technical College — CC BY 4.0'},
    {key:'LEOPOLD', match:'LEOPOLD 1 / FUNDAL GRIP', title:'Leopold maneuvers', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Handgriffe.JPG', credit:'Wikimedia Commons: Handgriffe.JPG — public domain'},
    {key:'LACHMAN', match:'SPECIAL TESTS — EXAMPLES: LACHMAN', title:'Lachman test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/ACLI_17.jpg', credit:'Wikimedia Commons: ACLI 17.jpg — CC BY-SA 2.0'},
    {key:'PHALEN', match:'SPECIAL TESTS — EXAMPLES: LACHMAN', title:'Phalen maneuver', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalen_maneuver.jpg', credit:'Wikimedia Commons: Phalen maneuver.jpg — attribution permitted'},
    {key:'TREND', match:'SPECIAL TESTS — EXAMPLES: LACHMAN', title:'Trendelenburg test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Trendelenburg.PNG', credit:'Wikimedia Commons: Trendelenburg.PNG'},
    {key:'ROMBERG', match:'COORDINATION — FINGER-NOSE-FINGER', title:'Romberg test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/CCG_Romberg-Test.png', credit:'Wikimedia Commons: CCG Romberg-Test.png — CC BY-SA 4.0'},
    {key:'THYROID', match:'PALPATION METHODS — PALPATION DURING SWALLOWING', title:'Thyroid examination', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eastman_examining_thyroid_of_Tanna_woman_Vanuatu_2006.jpg', credit:'Wikimedia Commons: Eastman examining thyroid of Tanna woman Vanuatu 2006.jpg — CC BY-SA 4.0'},
    {key:'RINNE', match:'RINNE TEST', title:'Rinne test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rinneversuch.png', credit:'Wikimedia Commons: Rinneversuch.png'},
    {key:'WEBER', match:'WEBER TEST', title:'Weber test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Weber%20Test.jpg', credit:'Wikimedia Commons: Weber Test.jpg — CC BY-SA 4.0'},
    {key:'FUNDOSCOPY', match:'FUNDOSCOPY — USE OPHTHALMOSCOPE', title:'Ophthalmoscopy / fundoscopy', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ophthalmoscopy.JPG', credit:'Wikimedia Commons: Ophthalmoscopy.JPG'}
  ];
  function norm(s){return (s||'').replace(/\s+/g,' ').trim().toUpperCase();}
  function addStyles(){
    if(document.getElementById('medcalc-exam-media-style')) return;
    const st=document.createElement('style'); st.id='medcalc-exam-media-style';
    st.textContent='.medcalc-exam-media{display:flex;gap:14px;align-items:center;margin:10px 0 14px;padding:10px;border:1px solid rgba(100,116,139,.22);border-radius:14px;background:rgba(148,163,184,.07);max-width:100%;box-sizing:border-box}.medcalc-exam-media img{width:150px;height:120px;object-fit:contain;border-radius:10px;background:#fff;flex:0 0 150px}.medcalc-exam-media-copy{min-width:0}.medcalc-exam-media-title{font-weight:700;font-size:.95rem;margin-bottom:4px}.medcalc-exam-media-credit{font-size:.72rem;opacity:.68;line-height:1.35}@media(max-width:600px){.medcalc-exam-media{align-items:flex-start}.medcalc-exam-media img{width:105px;height:105px;flex-basis:105px}}';
    document.head.appendChild(st);
  }
  function add(el,m){
    if(!el.parentElement || el.parentElement.querySelector(':scope > .medcalc-exam-media[data-media-key="'+m.key+'"]')) return;
    const box=document.createElement('div'); box.className='medcalc-exam-media'; box.dataset.mediaKey=m.key;
    box.innerHTML='<img loading="lazy" referrerpolicy="no-referrer" src="'+m.src+'" alt="'+m.title+' teaching photograph or diagram"><div class="medcalc-exam-media-copy"><div class="medcalc-exam-media-title">📷 '+m.title+'</div><div class="medcalc-exam-media-credit">Teaching image • '+m.credit+'</div></div>';
    el.insertAdjacentElement('afterend',box);
  }
  function scan(){
    addStyles();
    const candidates=Array.from(document.querySelectorAll('li,p,div,span'));
    MEDIA.forEach(m=>candidates.forEach(el=>{
      const t=norm(el.textContent); if(!t || t.length>500) return;
      if(t.indexOf(m.match)<0) return;
      if(m.key==='JVP' && !t.startsWith('JVP —')) return;
      add(el,m);
    }));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{scan();setTimeout(scan,1200);});
  else {scan();setTimeout(scan,1200);}
  new MutationObserver(()=>scan()).observe(document.documentElement,{childList:true,subtree:true});
})();

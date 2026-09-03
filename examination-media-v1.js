/* MedCalc examination media layer.
   Uses Wikimedia Commons-hosted, openly licensed/public-domain teaching images.
   Images are shown beside matching named techniques without altering the examination text.
*/
(function(){
  'use strict';
  const MEDIA = [
    {key:'JVP', match:'JVP —', title:'JVP examination', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jvp-0007.jpg', credit:'Wikimedia Commons: Jvp-0007.jpg'},
    {key:'LEOPOLD', match:'LEOPOLD 1 / FUNDAL GRIP', title:'Leopold maneuvers', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Handgriffe.JPG', credit:'Wikimedia Commons: Handgriffe.JPG — public domain'},
    {key:'RINNE', match:'RINNE TEST', title:'Rinne test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rinneversuch.png', credit:'Wikimedia Commons: Rinneversuch.png'},
    {key:'WEBER', match:'WEBER TEST', title:'Weber test', src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Weber%20Test.jpg', credit:'Wikimedia Commons: Weber Test.jpg — CC BY-SA 4.0'}
  ];
  function norm(s){return (s||'').replace(/\s+/g,' ').trim().toUpperCase();}
  function addStyles(){
    if(document.getElementById('medcalc-exam-media-style')) return;
    const st=document.createElement('style'); st.id='medcalc-exam-media-style';
    st.textContent='.medcalc-exam-media{display:flex;gap:14px;align-items:center;margin:10px 0 14px;padding:10px;border:1px solid rgba(100,116,139,.22);border-radius:14px;background:rgba(148,163,184,.07);max-width:100%;box-sizing:border-box}.medcalc-exam-media img{width:150px;height:120px;object-fit:contain;border-radius:10px;background:#fff;flex:0 0 150px}.medcalc-exam-media-copy{min-width:0}.medcalc-exam-media-title{font-weight:700;font-size:.95rem;margin-bottom:4px}.medcalc-exam-media-credit{font-size:.72rem;opacity:.68;line-height:1.35}@media(max-width:600px){.medcalc-exam-media{align-items:flex-start}.medcalc-exam-media img{width:105px;height:105px;flex-basis:105px}}';
    document.head.appendChild(st);
  }
  function scan(){
    addStyles();
    const candidates=Array.from(document.querySelectorAll('li,p,div,span'));
    MEDIA.forEach(m=>{
      candidates.forEach(el=>{
        if(el.dataset && el.dataset.medcalcMedia) return;
        const t=norm(el.textContent);
        if(!t || t.length>500) return;
        if(m.key==='JVP' && !t.startsWith('JVP —')) return;
        if(m.key!=='JVP' && t.indexOf(m.match)>=0) {
          if(m.key==='LEOPOLD' && !t.startsWith('LEOPOLD 1 / FUNDAL GRIP')) return;
          if(m.key==='RINNE' && t.indexOf('RINNE TEST')<0) return;
          if(m.key==='WEBER' && t.indexOf('WEBER TEST')<0) return;
        } else if(m.key==='JVP' && !t.startsWith('JVP —')) return;
        if(!el.parentElement || el.parentElement.querySelector(':scope > .medcalc-exam-media')) return;
        const box=document.createElement('div'); box.className='medcalc-exam-media';
        box.innerHTML='<img loading="lazy" referrerpolicy="no-referrer" src="'+m.src+'" alt="'+m.title+' photograph/diagram"><div class="medcalc-exam-media-copy"><div class="medcalc-exam-media-title">📷 '+m.title+'</div><div class="medcalc-exam-media-credit">Teaching image • '+m.credit+'</div></div>';
        el.insertAdjacentElement('afterend',box);
        el.dataset.medcalcMedia='1';
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{scan();setTimeout(scan,1200);});
  else {scan();setTimeout(scan,1200);}
  new MutationObserver(()=>scan()).observe(document.documentElement,{childList:true,subtree:true});
})();

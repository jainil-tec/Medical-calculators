/* MedCalc sidebar usability patch — keeps Drug Reference collapsed and promotes key clinical sections. */
(function(){
  'use strict';
  var STYLE_ID='medcalc-sidebar-fix-style';
  function install(){
    if(!document.getElementById(STYLE_ID)){
      var st=document.createElement('style'); st.id=STYLE_ID;
      st.textContent='\n.medcalc-drugs-collapsed .medcalc-drug-children{display:none!important}\n.medcalc-drugs-collapsed .medcalc-drug-toggle{transform:rotate(0deg)}\n.medcalc-clinical-promoted{order:-10!important}\n';
      document.head.appendChild(st);
    }
    var all=document.querySelectorAll('button,a,div,span');
    for(var i=0;i<all.length;i++){
      var el=all[i], text=(el.textContent||'').trim();
      if(!text || text.length>80) continue;
      if(/^(Drugs|Drug Reference|Drug Library)$/i.test(text) && !el.dataset.medcalcDrugFix){
        el.dataset.medcalcDrugFix='1';
        var box=el.parentElement;
        if(!box) continue;
        box.classList.add('medcalc-drugs-collapsed');
        el.setAttribute('aria-expanded','false');
        el.addEventListener('click',function(e){
          var b=this.parentElement; b.classList.toggle('medcalc-drugs-collapsed');
          this.setAttribute('aria-expanded',String(!b.classList.contains('medcalc-drugs-collapsed')));
        });
      }
      if(/^(Normal Values|Examination)$/i.test(text) && !el.dataset.medcalcPromote){
        el.dataset.medcalcPromote='1';
        var p=el.parentElement; if(p) p.classList.add('medcalc-clinical-promoted');
      }
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
  new MutationObserver(function(){install();}).observe(document.documentElement,{childList:true,subtree:true});
})();

/* MedCalc automatic update checker.
   Reloads only when the deployed index.html changes; avoids forcing refreshes on a stable page. */
(function(){
  'use strict';
  var CHECK_MS = 5 * 60 * 1000;
  var KEY = 'medcalc-index-version';
  var INDEX_URL = location.origin + location.pathname.split('/').slice(0,-1).join('/') + '/index.html';

  function check(){
    fetch(INDEX_URL + '?_mc_update=' + Date.now(), {
      cache:'no-store',
      headers:{'Cache-Control':'no-cache'}
    }).then(function(r){
      if(!r.ok) throw new Error('update check failed');
      return r.text();
    }).then(function(html){
      var m=html.match(/<meta[^>]+name=["']medcalc-version["'][^>]+content=["']([^"']+)["']/i);
      if(!m) m=html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']medcalc-version["']/i);
      if(!m) return;
      var v=m[1];
      var old=sessionStorage.getItem(KEY);
      if(!old){ sessionStorage.setItem(KEY,v); return; }
      if(old!==v){
        sessionStorage.setItem(KEY,v);
        location.reload(true);
      }
    }).catch(function(){});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(check,1500);});
  else setTimeout(check,1500);
  setInterval(check,CHECK_MS);
})();

/* MedCalc — system-wise Disease Reference navigation
   Adds a clean system-wise index without changing disease content. */
(function(){
  'use strict';
  var ID='medcalc-system-disease-index';
  var groups={
    'Cardiovascular (CVS)':[
      'Hypertension','Heart Failure','Atrial Fibrillation','Infective Endocarditis','Acute Pericarditis','Acute Coronary Syndrome'
    ],
    'Respiratory':[
      'Bronchial Asthma','COPD','Community-Acquired Pneumonia','Pulmonary Embolism','ARDS','Obstructive Sleep Apnea'
    ],
    'Neurology':[
      'Acute Ischemic Stroke','Epilepsy','Acute Bacterial Meningitis','Encephalitis','Guillain–Barré Syndrome','Parkinson Disease'
    ],
    'Infectious Diseases':[
      'Dengue','Malaria','Tuberculosis','Enteric Fever (Typhoid / Paratyphoid)','Sepsis / Septic Shock','Acute Viral Hepatitis','Acute Pyelonephritis','Acute Cystitis / Urinary Tract Infection'
    ],
    'Gastroenterology':[
      'Peptic Ulcer Disease','Upper Gastrointestinal Bleeding','Lower Gastrointestinal Bleeding','Acute Appendicitis','Intestinal Obstruction','Acute Pancreatitis','Acute Cholecystitis','Ulcerative Colitis','Cirrhosis','Hepatic Encephalopathy','Acute Liver Failure','Alcohol-Associated Liver Disease'
    ],
    'Nephrology':[
      'Acute Kidney Injury','Nephrotic Syndrome','Nephritic Syndrome / Glomerulonephritis'
    ],
    'Endocrinology':[
      'Type 2 Diabetes Mellitus','Diabetic Ketoacidosis','Hyperosmolar Hyperglycemic State','Diabetic Hypoglycemia','Hypothyroidism','Hyperthyroidism / Thyrotoxicosis','Thyroid Storm','Adrenal Insufficiency','Cushing Syndrome'
    ],
    'Hematology':[
      'Sickle Cell Disease','Iron Deficiency Anemia'
    ],
    'Oncology':[
      'Colorectal Cancer','Hepatocellular Carcinoma'
    ],
    'Urology':[
      'Benign Prostatic Hyperplasia'
    ]
  };

  function norm(s){return String(s||'').toLowerCase().replace(/[–—]/g,'-').replace(/\s+/g,' ').trim();}
  function findDisease(name){
    var target=norm(name), els=document.querySelectorAll('a,button,[role="button"]');
    for(var i=0;i<els.length;i++){
      var t=norm(els[i].textContent);
      if(t===target || t.indexOf(target)>-1 || target.indexOf(t)>-1 && t.length>4) return els[i];
    }
    return null;
  }
  function install(){
    if(document.getElementById(ID)) return;
    var host=null, candidates=document.querySelectorAll('aside,nav,[class*="sidebar"],[class*="side-bar"]');
    for(var i=0;i<candidates.length;i++){
      var txt=norm(candidates[i].textContent);
      if(txt.indexOf('dengue')>-1 && txt.indexOf('malaria')>-1){host=candidates[i];break;}
    }
    if(!host) return;

    var box=document.createElement('section'); box.id=ID;
    box.innerHTML='<style>#'+ID+'{margin:10px 0;padding:10px;border-radius:14px;background:rgba(127,127,127,.08);border:1px solid rgba(127,127,127,.16)}#'+ID+' .ms-title{font-weight:800;font-size:14px;margin:0 0 8px}#'+ID+' details{margin:5px 0}#'+ID+' summary{cursor:pointer;font-weight:700;padding:7px 6px;border-radius:9px;list-style:none}#'+ID+' summary::-webkit-details-marker{display:none}#'+ID+' summary:before{content:"›";display:inline-block;margin-right:6px;transition:.15s}#'+ID+' details[open] summary:before{transform:rotate(90deg)}#'+ID+' .ms-items{display:flex;flex-direction:column;gap:2px;padding:2px 0 5px 16px}#'+ID+' button{border:0;background:transparent;text-align:left;padding:5px 6px;border-radius:7px;cursor:pointer;font:inherit;font-size:12px;color:inherit}#'+ID+' button:hover{background:rgba(127,127,127,.12)}</style><div class="ms-title">🩺 Disease Reference — System Wise</div>';
    var title=box.firstElementChild.nextElementSibling;
    Object.keys(groups).forEach(function(g,idx){
      var d=document.createElement('details');
      if(idx<2) d.open=true;
      var s=document.createElement('summary'); s.textContent=g; d.appendChild(s);
      var list=document.createElement('div'); list.className='ms-items';
      groups[g].forEach(function(name){
        var b=document.createElement('button'); b.type='button'; b.textContent=name;
        b.addEventListener('click',function(){
          var el=findDisease(name);
          if(el){el.scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(function(){el.click();},120);}
        });
        list.appendChild(b);
      });
      d.appendChild(list); box.appendChild(d);
    });
    host.insertBefore(box,host.firstChild);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
  var tries=0, timer=setInterval(function(){install(); if(document.getElementById(ID)||++tries>30) clearInterval(timer);},500);
})();

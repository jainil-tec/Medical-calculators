/* MedCalc examination diagrams v3 — clinically relevant bedside technique visuals. */
(function(){'use strict';
const B='images/examinations/';
const M=[
 {k:'cv',m:'AUSCULTATION — USE THE DIAPHRAGM AND BELL',t:'Cardiac auscultation — valve areas',s:'cardiac-auscultation.svg'},
 {k:'jvp',m:'JVP — HEAD ELEVATED',t:'JVP assessment and measurement',s:'jvp.svg'},
 {k:'resp',m:'PALPATION — ASSESS TRACHEAL POSITION',t:'Respiratory examination — chest technique',s:'chest-expansion-percussion.svg'},
 {k:'perc',m:'PERCUSSION — USE INDIRECT PERCUSSION',t:'Indirect chest percussion technique',s:'chest-expansion-percussion.svg'},
 {k:'abd',m:'PALPATION — LIGHT/SUPERFICIAL PALPATION',t:'Abdominal palpation and liver palpation',s:'abdominal-palpation.svg'},
 {k:'leopold',m:'LEOPOLD 1 / FUNDAL GRIP',t:'Leopold maneuvers — four grips',s:'leopold.svg'},
 {k:'pupil',m:'PUPILS — ASSESS SIZE/SHAPE',t:'Pupillary light reflex',s:'eye-pupil.svg'},
 {k:'rinne',m:'RINNE TEST',t:'Rinne and Weber hearing tests',s:'rinne-weber.svg'},
 {k:'thyroid',m:'PALPATION — PALPATE EACH LOBE',t:'Thyroid examination',s:'thyroid.svg'},
 {k:'breast',m:'BREAST EXAMINATION',t:'Systematic breast palpation',s:'breast-examination.svg'},
 {k:'lachman',m:'LACHMAN',t:'Lachman knee stability test',s:'lachman.svg'},
 {k:'fundus',m:'FUNDOSCOPY',t:'Fundoscopy — optic disc and vessels',s:'fundoscopy.svg'},
 {k:'allen',m:'ALLEN TEST',t:'Allen test — hand arterial circulation',s:'allen.svg'},
 {k:'murphy',m:'MURPHY SIGN',t:'Murphy sign technique',s:'murphy.svg'}
];
function norm(x){return String(x||'').replace(/\s+/g,' ').trim().toUpperCase()}
function addStyle(){if(document.getElementById('medcalc-exam-media-style'))return;const st=document.createElement('style');st.id='medcalc-exam-media-style';st.textContent='.medcalc-exam-media{display:flex;gap:16px;align-items:center;margin:14px 0;padding:12px;border:1px solid rgba(100,116,139,.2);border-radius:14px;background:rgba(148,163,184,.06)}.medcalc-exam-media img{width:250px;height:165px;object-fit:contain;background:#fff;border-radius:10px;flex:0 0 250px}.medcalc-exam-media-title{font-weight:700;font-size:.96rem}.medcalc-exam-media-note{font-size:.74rem;opacity:.65;margin-top:4px}@media(max-width:600px){.medcalc-exam-media{align-items:flex-start}.medcalc-exam-media img{width:145px;height:120px;flex-basis:145px}}';document.head.appendChild(st)}
function scan(){addStyle();document.querySelectorAll('.medcalc-exam-media').forEach(e=>e.remove());const els=[...document.querySelectorAll('li,p,div,span')];M.forEach(x=>els.forEach(e=>{const t=norm(e.textContent);if(!t||t.length>500||t.indexOf(norm(x.m))<0)return;const b=document.createElement('div');b.className='medcalc-exam-media';b.innerHTML='<img loading="lazy" src="'+B+x.s+'" alt="'+x.t+'"><div><div class="medcalc-exam-media-title">📐 '+x.t+'</div><div class="medcalc-exam-media-note">Original MedCalc teaching diagram • use with the written technique</div></div>';e.insertAdjacentElement('afterend',b)}))}
function run(){scan();setTimeout(scan,800)}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();new MutationObserver(()=>{clearTimeout(window.__medcalcExamDiagramTimer);window.__medcalcExamDiagramTimer=setTimeout(scan,120)}).observe(document.documentElement,{childList:true,subtree:true});
})();
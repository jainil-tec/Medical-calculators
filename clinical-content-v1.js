/* MedCalc Clinical Reference Content v1
   Adds Normal Values, Drug Reference and Clinical/Physical Examination content.
   Intended to be loaded by the main MedCalc page.
*/
window.MEDCALC_CLINICAL_CONTENT = {
  normalValues: {
    title: 'Normal Values',
    intro: 'Quick adult reference ranges. Laboratory ranges vary by laboratory, method, age and sex; always use the local laboratory reference interval when available.',
    groups: [
      {name:'CBC', items:[['Hemoglobin — male','13.5–17.5 g/dL'],['Hemoglobin — female','12.0–15.5 g/dL'],['WBC','4,000–11,000 /µL'],['Platelets','150,000–450,000 /µL'],['MCV','80–100 fL'],['MCH','27–33 pg'],['MCHC','32–36 g/dL'],['Reticulocytes','0.5–2.5%']]},
      {name:'RFT & Electrolytes', items:[['Sodium','135–145 mmol/L'],['Potassium','3.5–5.0 mmol/L'],['Chloride','98–106 mmol/L'],['Bicarbonate','22–28 mmol/L'],['BUN','7–20 mg/dL'],['Creatinine','~0.6–1.3 mg/dL'],['Calcium, total','8.5–10.5 mg/dL'],['Magnesium','1.7–2.2 mg/dL']]},
      {name:'LFT', items:[['Total bilirubin','0.1–1.2 mg/dL'],['Albumin','3.5–5.0 g/dL'],['Total protein','6.0–8.3 g/dL'],['ALT','~7–56 U/L'],['AST','~10–40 U/L'],['ALP','~44–147 U/L']]},
      {name:'ABG', items:[['pH','7.35–7.45'],['PaCO₂','35–45 mmHg'],['HCO₃⁻','22–26 mmol/L'],['PaO₂','80–100 mmHg'],['SaO₂','95–100%']]},
      {name:'Coagulation', items:[['PT','~11–13.5 s'],['INR','0.8–1.1'],['aPTT','~25–35 s']]},
      {name:'Urinalysis', items:[['Urine pH','~4.5–8.0'],['Specific gravity','~1.005–1.030'],['Protein','Negative'],['Glucose','Negative'],['Ketones','Negative'],['Blood','Negative']]},
      {name:'CSF', items:[['Opening pressure','~10–20 cm H₂O'],['WBC','0–5 cells/µL'],['Protein','15–45 mg/dL'],['Glucose','~40–70 mg/dL']]},
      {name:'Endocrine', items:[['TSH','~0.4–4.0 mIU/L'],['Free T4','~0.8–1.8 ng/dL'],['HbA1c','<5.7% generally considered normal']]},
      {name:'Pregnancy', items:[['β-hCG','Interpret by gestational age and laboratory assay'],['Hemoglobin','Physiologic fall in pregnancy; interpret with pregnancy-specific ranges'],['WBC','May rise physiologically during pregnancy']]}
    ]
  },
  drugs: {
    title:'Drug Reference',
    intro:'High-yield reference information. Drug selection and dosing depend on indication, age, weight, renal/hepatic function, pregnancy status and local guidance.',
    groups:[
      {name:'Emergency & Resuscitation', items:[
        ['Adrenaline (epinephrine)','Catecholamine','Cardiac arrest, anaphylaxis and selected shock states','Tachyarrhythmia, hypertension, myocardial ischemia','Monitor ECG, BP and clinical response'],
        ['Amiodarone','Antiarrhythmic','Selected ventricular and supraventricular arrhythmias','Bradycardia, QT prolongation, pulmonary/hepatic/thyroid toxicity','ECG; electrolytes; thyroid/liver/pulmonary monitoring when clinically appropriate'],
        ['Atropine','Antimuscarinic','Symptomatic bradycardia in appropriate settings','Tachycardia, urinary retention, confusion, dry mouth','Heart rate and clinical response'],
        ['Magnesium sulfate','Electrolyte/anticonvulsant','Selected arrhythmias, eclampsia, severe asthma in selected protocols','Hypotension, flushing, respiratory depression with toxicity','Reflexes, respiratory status and renal function when relevant']
      ]},
      {name:'Antimicrobials', items:[
        ['Amoxicillin','Penicillin antibiotic','Susceptible bacterial infections','Allergy, diarrhea; C. difficile risk with antibiotics','Allergy history; renal function when indicated'],
        ['Ceftriaxone','Third-generation cephalosporin','Selected serious bacterial infections','Allergy, biliary complications, diarrhea','Clinical response; allergy; organ function as indicated'],
        ['Azithromycin','Macrolide','Selected respiratory and other susceptible infections','QT prolongation, GI effects, hepatotoxicity','Medication interactions, ECG risk factors and liver function when appropriate'],
        ['Metronidazole','Nitroimidazole antimicrobial','Anaerobic and selected protozoal infections','GI effects, metallic taste, neuropathy with prolonged use','Clinical response; neurologic symptoms with prolonged therapy']
      ]},
      {name:'Cardiovascular', items:[
        ['Amlodipine','Dihydropyridine calcium-channel blocker','Hypertension, angina','Edema, flushing, headache, hypotension','BP; edema'],
        ['Metoprolol','Beta blocker','Hypertension, ischemic heart disease and selected arrhythmias','Bradycardia, hypotension, bronchospasm in susceptible patients','HR and BP; caution in asthma/COPD depending on selectivity'],
        ['Furosemide','Loop diuretic','Edema and fluid overload','Hypokalemia, dehydration, hypotension, ototoxicity at high exposure','Volume status; electrolytes; renal function'],
        ['Spironolactone','Aldosterone antagonist','Heart failure, hyperaldosteronism and selected edema states','Hyperkalemia, renal dysfunction, gynecomastia','Potassium and renal function']
      ]},
      {name:'Endocrine & Metabolic', items:[
        ['Insulin','Antidiabetic hormone','Diabetes and hyperglycemic emergencies','Hypoglycemia, hypokalemia','Glucose; potassium in relevant acute settings'],
        ['Metformin','Biguanide','Type 2 diabetes','GI effects; rare lactic acidosis risk in severe contraindicating states','Renal function; clinical tolerance'],
        ['Levothyroxine','Thyroid hormone','Hypothyroidism','Over-replacement: palpitations, tremor, weight loss','TSH/free T4 according to treatment context']
      ]}
    ]
  },
  examinations: {
    title:'Clinical / Physical Examination',
    intro:'Step-by-step examination guides for bedside learning and case presentation.',
    groups:[
      {name:'Cardiovascular Examination', steps:['Preparation and patient position','General inspection and peripheral signs','Pulse: rate, rhythm, volume, character and radio-radial delay','Blood pressure and peripheral perfusion','Jugular venous pressure','Precordial inspection and palpation: apex, heaves and thrills','Auscultation: S1/S2, added sounds and murmurs','Peripheral edema and vascular examination','Relevant special tests and focused examination','Summarize positive and negative findings and present clinically']},
      {name:'Respiratory Examination', steps:['Preparation, exposure and position','General inspection and respiratory rate/pattern','Hands: clubbing, cyanosis and tremor','Pulse, respiratory rate and oxygen saturation','Chest inspection: shape, symmetry and movement','Palpation: trachea, chest expansion and tactile vocal fremitus','Percussion over corresponding lung fields','Auscultation: breath sounds and added sounds','Vocal resonance where indicated','Complete with relevant systemic examination and clinical summary']},
      {name:'Abdominal Examination', steps:['Position supine with adequate exposure and privacy','General inspection and systemic clues','Inspection of abdomen, umbilicus, scars, veins, distension and visible peristalsis','Palpation: superficial then deep','Liver, spleen, kidneys and abdominal masses','Aortic pulsation and relevant tenderness','Percussion including liver/splenic areas and shifting dullness when indicated','Auscultation for bowel and vascular sounds','Hernial orifices and relevant special tests','Finish with focused rectal/pelvic examination when indicated and summarize']},
      {name:'CNS Examination', steps:['Assess higher mental functions and level of consciousness','Cranial nerves','Motor system: bulk, tone, power and involuntary movements','Reflexes and plantar response','Sensory system: primary and cortical modalities','Coordination and cerebellar signs','Gait and station when safe','Meningeal signs when clinically indicated','Autonomic/systemic examination as appropriate','Localize findings and provide a concise neurological summary']},
      {name:'Musculoskeletal Examination', steps:['General inspection and gait','Look for swelling, deformity, erythema and wasting','Palpate for warmth, tenderness and effusion','Assess active and passive range of motion','Assess power and functional limitation','Examine relevant adjacent joints and spine','Special tests specific to the joint','Neurovascular assessment','Compare both sides','Summarize pattern and likely anatomical localization']},
      {name:'Thyroid Examination', steps:['Position patient comfortably with neck exposed','Inspect from front and side during swallowing','Palpate thyroid for size, surface, consistency, nodules and tenderness','Assess mobility with swallowing','Assess tracheal position and retrosternal extension clues','Examine cervical lymph nodes','Look for signs of thyroid dysfunction','Auscultate for bruit when indicated','Complete relevant cardiovascular/eye examination','Present findings systematically']},
      {name:'Obstetric Examination', steps:['Introduce, consent, privacy and position appropriately','General examination and vital signs','Abdominal inspection: size, shape, scars and striae','Fundal height','Leopold maneuvers: lie, presentation, position and engagement','Fetal heart assessment','Assess uterine activity when relevant','Look for edema and other maternal findings','Focused pelvic examination only when indicated','State gestational age, lie/presentation and key findings in presentation']},
      {name:'Gynecological Examination', steps:['Explain, consent, privacy and appropriate positioning','General and abdominal examination as indicated','External genital inspection','Speculum examination when indicated','Assess cervix and vaginal walls; obtain appropriate samples','Bimanual examination: uterus, cervix and adnexa','Rectal examination when clinically indicated','Document findings clearly and maintain chaperone/consent standards','Summarize and plan relevant investigations']},
      {name:'Pediatric Examination', steps:['Observe before touching: behavior, interaction, breathing and color','Age-appropriate vital signs and growth parameters','General examination and hydration/perfusion','Systematic examination by organ system','Developmental assessment appropriate to age','Respiratory and cardiovascular examination','Abdominal examination','Neurological examination','Examine skin, lymph nodes and musculoskeletal system','Use age-appropriate communication and finish with concise summary']},
      {name:'Eye Examination', steps:['Visual acuity','External inspection and pupils','Visual fields','Extraocular movements','Alignment and ocular motility','Anterior segment assessment','Fundoscopic examination','Color vision or red reflex when indicated','Intraocular pressure assessment when available/indicated','Document each eye separately and summarize']},
      {name:'ENT Examination', steps:['External inspection and lymph nodes','Ear: pinna, canal and tympanic membrane','Nose: external appearance, septum and mucosa','Oral cavity, teeth, tongue and oropharynx','Tonsils and posterior pharynx','Cranial nerve assessment relevant to complaint','Neck and cervical nodes','Focused hearing assessment','Complete with relevant systemic examination']},
      {name:'Peripheral Vascular Examination', steps:['Inspect limbs for color, temperature changes, ulcers and trophic changes','Palpate temperature and capillary refill','Palpate pulses systematically and compare sides','Assess blood pressure in appropriate limbs when indicated','Check for bruits where relevant','Assess edema and venous signs','Perform relevant ischemia/venous special tests','Complete neurological and skin assessment of affected limb','Document vascular status clearly']}
    ]
  }
};

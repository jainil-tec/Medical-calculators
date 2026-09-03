/* MedCalc Clinical Reference Content v2
   Expanded bedside reference: normal values, drugs and examination checklists.
   Educational reference only; use local laboratory ranges, formularies and current guidelines.
*/
window.MEDCALC_CLINICAL_CONTENT = {
  normalValues: {
    title:'Normal Values',
    intro:'Quick adult reference ranges. Laboratory ranges vary by laboratory, method, age and sex; use the local laboratory reference interval whenever available.',
    groups:[
      {name:'CBC',items:[['Hemoglobin — male','13.5–17.5 g/dL'],['Hemoglobin — female','12.0–15.5 g/dL'],['Hematocrit — male','41–53%'],['Hematocrit — female','36–46%'],['WBC','4,000–11,000 /µL'],['Platelets','150,000–450,000 /µL'],['MCV','80–100 fL'],['MCH','27–33 pg'],['MCHC','32–36 g/dL'],['Reticulocytes','0.5–2.5%']]},
      {name:'RFT & Electrolytes',items:[['Sodium','135–145 mmol/L'],['Potassium','3.5–5.0 mmol/L'],['Chloride','98–106 mmol/L'],['Bicarbonate','22–28 mmol/L'],['BUN','7–20 mg/dL'],['Creatinine','~0.6–1.3 mg/dL'],['eGFR','≥60 mL/min/1.73 m² generally not considered reduced'],['Calcium, total','8.5–10.5 mg/dL'],['Magnesium','1.7–2.2 mg/dL'],['Phosphate','2.5–4.5 mg/dL']]},
      {name:'LFT',items:[['Total bilirubin','0.1–1.2 mg/dL'],['Direct bilirubin','~0–0.3 mg/dL'],['Albumin','3.5–5.0 g/dL'],['Total protein','6.0–8.3 g/dL'],['ALT','~7–56 U/L'],['AST','~10–40 U/L'],['ALP','~44–147 U/L'],['GGT','Laboratory-specific range'],['PT/INR','Interpret with laboratory range and clinical context']]},
      {name:'ABG',items:[['pH','7.35–7.45'],['PaCO₂','35–45 mmHg'],['HCO₃⁻','22–26 mmol/L'],['PaO₂','80–100 mmHg on room air at sea level; context dependent'],['SaO₂','95–100%'],['Base excess','−2 to +2 mmol/L approximately']]},
      {name:'Coagulation',items:[['PT','~11–13.5 s'],['INR','0.8–1.1'],['aPTT','~25–35 s'],['Fibrinogen','~200–400 mg/dL; laboratory dependent']]},
      {name:'Urinalysis',items:[['Urine pH','~4.5–8.0'],['Specific gravity','~1.005–1.030'],['Protein','Negative'],['Glucose','Negative'],['Ketones','Negative'],['Blood','Negative'],['Nitrite','Negative'],['Leukocyte esterase','Negative']]},
      {name:'CSF',items:[['Opening pressure','~10–20 cm H₂O'],['WBC','0–5 cells/µL'],['Protein','15–45 mg/dL'],['Glucose','~40–70 mg/dL'],['CSF:serum glucose ratio','Usually ~0.5–0.7']]},
      {name:'Endocrine',items:[['TSH','~0.4–4.0 mIU/L'],['Free T4','~0.8–1.8 ng/dL'],['HbA1c','<5.7% generally considered normal'],['Fasting plasma glucose','70–99 mg/dL generally normal']]},
      {name:'Cardiorespiratory',items:[['Resting heart rate','60–100/min'],['Respiratory rate','12–20/min'],['Blood pressure','Reference varies; assess in clinical context'],['SpO₂','Usually ≥95% at sea level in healthy adults; lower targets may apply in selected disease']]},
      {name:'Pregnancy',items:[['β-hCG','Interpret by gestational age and assay; serial trends may be more useful than one value'],['Hemoglobin','Use pregnancy-specific thresholds/ranges'],['WBC','May rise physiologically during pregnancy'],['Platelets','May fall mildly; interpret with gestational context'],['Alkaline phosphatase','May rise physiologically in pregnancy']]}
    ]
  },
  drugs: {
    title:'Drug Reference',
    intro:'High-yield reference information. Dosing and drug choice depend on indication, age, weight, renal/hepatic function, pregnancy status, interactions and local guidance. Verify prescribing information before clinical use.',
    groups:[
      {name:'Emergency & Resuscitation',items:[
        ['Adrenaline (epinephrine)','Catecholamine','Cardiac arrest, anaphylaxis and selected shock states','Tachyarrhythmia, hypertension, myocardial ischemia','Monitor ECG, BP and clinical response'],
        ['Amiodarone','Antiarrhythmic','Selected ventricular and supraventricular arrhythmias','Bradycardia, QT prolongation, pulmonary/hepatic/thyroid toxicity','ECG; electrolytes; thyroid/liver/pulmonary monitoring when appropriate'],
        ['Atropine','Antimuscarinic','Symptomatic bradycardia in appropriate settings','Tachycardia, urinary retention, confusion, dry mouth','Heart rate and clinical response'],
        ['Magnesium sulfate','Electrolyte/anticonvulsant','Eclampsia, torsades de pointes and selected severe asthma protocols','Hypotension, flushing, respiratory depression with toxicity','Respiratory status, reflexes and renal function when relevant'],
        ['Adenosine','Antiarrhythmic','Selected regular narrow-complex supraventricular tachycardia','Flushing, chest discomfort, transient dyspnea; bronchospasm risk','ECG and rhythm response'],
        ['Naloxone','Opioid antagonist','Suspected opioid-induced respiratory depression','Acute withdrawal, agitation, vomiting; recurrent toxicity','Airway, ventilation and recurrent respiratory depression']
      ]},
      {name:'Antimicrobials',items:[
        ['Amoxicillin','Penicillin antibiotic','Susceptible bacterial infections','Allergy, diarrhea; antibiotic-associated colitis risk','Allergy history; renal function when indicated'],
        ['Amoxicillin-clavulanate','Beta-lactam + beta-lactamase inhibitor','Selected polymicrobial and respiratory/skin infections','Diarrhea, allergy, cholestatic liver injury','Clinical response; hepatic/renal considerations'],
        ['Ceftriaxone','Third-generation cephalosporin','Selected serious bacterial infections','Allergy, diarrhea, biliary complications','Clinical response; allergy; organ function as indicated'],
        ['Azithromycin','Macrolide','Selected respiratory and other susceptible infections','QT prolongation, GI effects, hepatotoxicity','QT-risk review and liver considerations'],
        ['Metronidazole','Nitroimidazole antimicrobial','Anaerobic and selected protozoal infections','GI effects, metallic taste, neuropathy with prolonged use','Clinical response; neurologic symptoms with prolonged therapy'],
        ['Doxycycline','Tetracycline antibiotic','Selected respiratory, atypical and tick-borne infections','GI irritation, photosensitivity, esophagitis','Administration precautions; pregnancy/age considerations'],
        ['Piperacillin-tazobactam','Antipseudomonal beta-lactam','Selected severe polymicrobial infections','Allergy, cytopenias, electrolyte effects, kidney injury','Renal function, CBC and clinical response'],
        ['Vancomycin','Glycopeptide antibiotic','Serious susceptible Gram-positive infections','Infusion reaction, nephrotoxicity, ototoxicity uncommon','Renal function and therapeutic drug monitoring according to protocol']
      ]},
      {name:'Cardiovascular',items:[
        ['Amlodipine','Dihydropyridine calcium-channel blocker','Hypertension, angina','Edema, flushing, headache, hypotension','BP; edema'],
        ['Metoprolol','Beta blocker','Hypertension, ischemic heart disease and selected arrhythmias','Bradycardia, hypotension, bronchospasm in susceptible patients','HR and BP'],
        ['Furosemide','Loop diuretic','Edema and fluid overload','Hypokalemia, dehydration, hypotension, ototoxicity at high exposure','Volume status; electrolytes; renal function'],
        ['Spironolactone','Aldosterone antagonist','Heart failure, hyperaldosteronism and selected edema states','Hyperkalemia, renal dysfunction, gynecomastia','Potassium and renal function'],
        ['Enalapril','ACE inhibitor','Hypertension, heart failure and selected renal/cardiovascular indications','Cough, hyperkalemia, hypotension, angioedema, kidney function changes','BP, creatinine and potassium'],
        ['Nitroglycerin','Nitrate','Angina and selected acute coronary/heart-failure settings','Headache, hypotension, reflex tachycardia','BP, symptoms; avoid contraindicated PDE-5 inhibitor combinations'],
        ['Aspirin','Antiplatelet/NSAID','Selected acute coronary and antiplatelet indications','Bleeding, dyspepsia, bronchospasm in susceptible patients','Bleeding risk and clinical indication'],
        ['Atorvastatin','Statin','Dyslipidemia and cardiovascular risk reduction','Myalgia, liver enzyme elevation; rare rhabdomyolysis','Lipid response; liver enzymes when indicated; muscle symptoms']
      ]},
      {name:'Endocrine & Metabolic',items:[
        ['Insulin','Antidiabetic hormone','Diabetes and hyperglycemic emergencies','Hypoglycemia, hypokalemia','Glucose; potassium in relevant acute settings'],
        ['Metformin','Biguanide','Type 2 diabetes','GI effects; rare lactic acidosis risk in severe contraindicating states','Renal function; clinical tolerance'],
        ['Levothyroxine','Thyroid hormone','Hypothyroidism','Over-replacement: palpitations, tremor, weight loss','TSH/free T4 according to treatment context'],
        ['Hydrocortisone','Glucocorticoid','Adrenal insufficiency and selected inflammatory/emergency indications','Hyperglycemia, infection risk, fluid effects with systemic therapy','Glucose, BP, electrolytes and clinical indication'],
        ['Calcium gluconate','Calcium salt','Selected symptomatic hypocalcemia and membrane-stabilizing treatment in severe hyperkalemia protocols','Extravasation injury, arrhythmia if rapidly administered','ECG when used for cardiac membrane stabilization; calcium level as appropriate']
      ]},
      {name:'CNS & Analgesia',items:[
        ['Paracetamol (acetaminophen)','Analgesic/antipyretic','Pain and fever','Hepatotoxicity in overdose or high-risk exposure','Total daily exposure; liver considerations'],
        ['Ibuprofen','NSAID','Pain, fever and inflammation','GI bleeding, kidney injury, fluid retention, bronchospasm in susceptible patients','Renal function and GI/cardiovascular risk'],
        ['Diazepam','Benzodiazepine','Selected seizures, anxiety and muscle spasm indications','Sedation, respiratory depression, dependence','Mental status and respiratory status'],
        ['Phenytoin','Antiseizure medication','Selected seizure disorders/status protocols','Ataxia, nystagmus, rash, arrhythmia with rapid IV use','Drug levels when indicated; ECG/BP for IV use; interactions']
      ]},
      {name:'Respiratory & Allergy',items:[
        ['Salbutamol (albuterol)','Short-acting beta₂ agonist','Acute bronchospasm','Tremor, tachycardia, hypokalemia','Clinical response; HR and potassium in intensive therapy'],
        ['Ipratropium','Antimuscarinic bronchodilator','Obstructive airway disease and acute exacerbations','Dry mouth, blurred vision if ocular exposure','Clinical response; glaucoma/urinary retention risk'],
        ['Budesonide','Inhaled corticosteroid','Asthma and selected airway disease','Oral candidiasis, dysphonia','Technique and symptom control'],
        ['Cetirizine','Antihistamine','Allergic rhinitis and urticaria','Somnolence in some patients, dry mouth','Clinical response; sedation']
      ]},
      {name:'Gastrointestinal',items:[
        ['Omeprazole','Proton-pump inhibitor','Acid-peptic disorders and GERD','Headache, GI effects; long-term associations vary','Indication, duration and response'],
        ['Ondansetron','5-HT3 antagonist','Nausea and vomiting','QT prolongation, constipation, headache','QT-risk review when clinically relevant'],
        ['Lactulose','Osmotic laxative','Constipation and hepatic encephalopathy','Diarrhea, electrolyte disturbance, bloating','Stool response; hydration/electrolytes when prolonged']
      ]},
      {name:'OBGYN',items:[
        ['Oxytocin','Uterotonic hormone','Labor induction/augmentation and postpartum uterine atony protocols','Uterine tachysystole, fetal compromise, water intoxication with excessive exposure','Uterine activity, fetal status when pregnant, fluid balance'],
        ['Tranexamic acid','Antifibrinolytic','Selected major bleeding including postpartum hemorrhage protocols','Thrombotic events uncommon; GI effects','Bleeding response and thrombotic risk'],
        ['Magnesium sulfate','Anticonvulsant/electrolyte','Pre-eclampsia/eclampsia seizure prophylaxis or treatment','Respiratory depression and toxicity with accumulation','Respiratory rate, reflexes, urine output and serum level when indicated']
      ]}
    ]
  },
  examinations: {
    title:'Clinical / Physical Examination',
    intro:'Step-by-step examination checklists for bedside learning and case presentation. Adapt the examination to the clinical question and patient condition.',
    groups:[
      {name:'General Examination',items:['Introduce yourself, confirm identity, explain and obtain consent','Assess general appearance, distress, hydration and nutritional status','Record pulse, blood pressure, respiratory rate, temperature and oxygen saturation as appropriate','Assess pallor, icterus, cyanosis, clubbing, lymphadenopathy and edema','Review relevant skin findings and peripheral perfusion','Complete focused systemic examination and summarize key positives/negatives']},
      {name:'Cardiovascular Examination',items:['Preparation and patient position','General inspection and peripheral signs','Pulse: rate, rhythm, volume and character; compare relevant pulses','Blood pressure and peripheral perfusion','Jugular venous pressure','Precordial inspection and palpation: apex, heaves and thrills','Auscultation: S1/S2, added sounds and murmurs; use appropriate positions','Peripheral edema and vascular examination','Relevant special tests and focused examination','Summarize positive and negative findings and present clinically']},
      {name:'Respiratory Examination',items:['Preparation, exposure and position','General inspection and respiratory rate/pattern','Hands: clubbing, cyanosis and tremor','Pulse and oxygen saturation','Chest inspection: shape, symmetry and movement','Palpation: trachea, chest expansion and tactile vocal fremitus','Percussion over corresponding lung fields','Auscultation: breath sounds and added sounds','Vocal resonance where indicated','Complete relevant systemic examination and clinical summary']},
      {name:'Abdominal Examination',items:['Position supine with adequate exposure and privacy','General inspection and systemic clues','Inspect abdomen: scars, veins, distension, striae, umbilicus and visible peristalsis','Palpate: superficial then deep, noting tenderness, guarding and masses','Assess liver, spleen, kidneys and abdominal masses','Percussion including liver/splenic areas and shifting dullness when indicated','Auscultate bowel and vascular sounds when relevant','Examine hernial orifices when indicated','Focused rectal examination when clinically appropriate','Summarize findings and likely localization']},
      {name:'CNS Examination',items:['Assess level of consciousness, orientation, speech and higher functions as indicated','Cranial nerves','Motor system: bulk, tone, power and involuntary movements','Deep tendon reflexes and plantar response','Sensory system: primary and cortical modalities','Coordination and cerebellar signs','Gait and station when safe','Meningeal signs when clinically indicated','Autonomic/systemic examination as appropriate','Localize findings and provide a concise neurological summary']},
      {name:'Musculoskeletal Examination',items:['General inspection and gait','Look for swelling, deformity, erythema and wasting','Palpate for warmth, tenderness and effusion','Assess active and passive range of motion','Assess power and functional limitation','Examine relevant adjacent joints and spine','Perform joint-specific special tests','Neurovascular assessment','Compare both sides','Summarize pattern and anatomical localization']},
      {name:'Thyroid Examination',items:['Position patient comfortably with neck exposed','Inspect from front and side during swallowing','Palpate thyroid for size, surface, consistency, nodules and tenderness','Assess mobility with swallowing','Assess tracheal position and signs suggesting retrosternal extension','Examine cervical lymph nodes','Look for signs of thyroid dysfunction','Auscultate for bruit when indicated','Complete relevant cardiovascular and eye examination','Present findings systematically']},
      {name:'Obstetric Examination',items:['Introduce, consent, privacy and appropriate position','General examination and vital signs','Abdominal inspection: size, shape, scars and striae','Measure fundal height using appropriate technique','Leopold maneuvers: lie, presentation, position and engagement','Assess fetal heart rate','Assess uterine activity when relevant','Look for edema and other maternal findings','Focused pelvic examination only when indicated','State gestational age, lie/presentation and key findings in presentation']},
      {name:'Gynecological Examination',items:['Explain, obtain consent, provide privacy and use a chaperone according to local practice','General and abdominal examination as indicated','External genital inspection','Speculum examination when indicated','Assess cervix and vaginal walls; obtain appropriate samples','Bimanual examination: uterus, cervix and adnexa','Rectal examination when clinically indicated','Document findings clearly','Summarize and plan relevant investigations']},
      {name:'Pediatric Examination',items:['Observe before touching: behavior, interaction, breathing and color','Age-appropriate vital signs and growth parameters','General examination and hydration/perfusion','Systematic examination by organ system','Developmental assessment appropriate to age','Respiratory and cardiovascular examination','Abdominal examination','Neurological examination','Skin, lymph nodes and musculoskeletal assessment','Use age-appropriate communication and finish with concise summary']},
      {name:'Eye Examination',items:['Visual acuity','External inspection and pupils','Visual fields','Extraocular movements and ocular alignment','Anterior segment assessment','Fundoscopic examination','Color vision or red reflex when indicated','Intraocular pressure assessment when available/indicated','Document each eye separately','Summarize abnormal findings and urgency']},
      {name:'ENT Examination',items:['External inspection and cervical lymph nodes','Ear: pinna, canal and tympanic membrane','Nose: external appearance, septum and mucosa','Oral cavity, teeth, tongue and oropharynx','Tonsils and posterior pharynx','Relevant cranial nerve assessment','Neck examination','Focused hearing assessment','Complete relevant systemic examination']},
      {name:'Peripheral Vascular Examination',items:['Inspect limbs for color, temperature changes, ulcers and trophic changes','Palpate temperature and capillary refill','Palpate pulses systematically and compare sides','Assess blood pressure in appropriate limbs when indicated','Check for bruits where relevant','Assess edema and venous signs','Perform relevant ischemia/venous special tests','Complete neurological and skin assessment of affected limb','Document vascular status clearly']}
    ]
  }
};
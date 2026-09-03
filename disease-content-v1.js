/* MedCalc Disease & Treatment Reference — v1
   Evidence-first educational reference. Prefer current national/international guidance;
   textbook synthesis is used where guidelines are incomplete. Verify local protocols before clinical use.
*/
window.MEDCALC_DISEASES = [
 {id:'dengue',name:'Dengue',system:'Infectious Diseases',summary:'Acute dengue virus infection ranging from uncomplicated febrile illness to severe dengue with plasma leakage, bleeding or organ involvement.',
 sections:{
  'Etiology & transmission':['Dengue virus (DENV-1 to DENV-4).','Primarily transmitted by infected Aedes mosquitoes.'],
  'Pathogenesis':['Viral infection and host immune response can increase vascular permeability.','Plasma leakage may cause hemoconcentration, effusions and shock; thrombocytopenia and coagulation abnormalities may occur.'],
  'Clinical features':['Febrile phase: acute fever with headache, myalgia/arthralgia, nausea and sometimes rash.','Critical phase may occur around defervescence, particularly in patients with warning signs.','Recovery phase follows clinical stabilization and reabsorption of extravascular fluid.'],
  'Important signs & warning signs':['Abdominal pain or tenderness; persistent vomiting; clinical fluid accumulation; mucosal bleeding; lethargy/restlessness; liver enlargement; rising hematocrit with rapid platelet fall.','Severe dengue includes severe plasma leakage causing shock or respiratory distress, severe bleeding, or severe organ involvement.'],
  'Investigations':['CBC with serial hematocrit and platelet trend.','Dengue NAAT/RT-PCR or NS1 antigen is useful early in illness; IgM becomes useful later.','Assess renal function, electrolytes, liver function and coagulation according to severity and clinical context.'],
  'Treatment principles':['Treatment is primarily supportive with careful fluid management and close clinical monitoring.','Avoid unnecessary IV fluid loading; reassess frequently for response and fluid overload.','Paracetamol may be used for fever/pain. Avoid aspirin and NSAIDs because of bleeding risk.','Do not use routine corticosteroids or prophylactic platelet transfusion solely for thrombocytopenia.'],
  'Key drug / dose reference':['Paracetamol: use age/weight-appropriate dosing and respect the product maximum daily dose; avoid duplicate paracetamol-containing products.','Fluid therapy is individualized by weight, hemodynamic status, hematocrit trend and phase of illness; follow the current WHO/national dengue protocol rather than a fixed universal regimen.'],
  'Complications':['Dengue shock syndrome/severe plasma leakage; respiratory distress from fluid accumulation; severe bleeding; hepatitis; encephalopathy/encephalitis; myocarditis and other severe organ involvement.'],
  'Prevention':['Mosquito-bite prevention and vector control are central.','Use local public-health recommendations regarding vaccination eligibility and prevention.'],
  'Exam pearls':['A platelet count alone should not determine severity.','The critical period can coincide with falling fever, so clinical deterioration around defervescence is important.']
 }, refs:['WHO 2025 — Clinical management of arboviral diseases','WHO 2025 — Laboratory testing for arboviruses','Government of India, National Guidelines for Clinical Management of Dengue Fever, 2023']},
 {id:'malaria',name:'Malaria',system:'Infectious Diseases',summary:'Plasmodium infection; P. falciparum can rapidly cause life-threatening severe malaria.',sections:{
  'Etiology':['Plasmodium parasites transmitted by infected female Anopheles mosquitoes.','P. falciparum is particularly associated with severe disease; species identification affects treatment.'],
  'Clinical features':['Fever, chills/rigors, headache, malaise, myalgia and gastrointestinal symptoms may occur.','Severe malaria may present with impaired consciousness, seizures, severe anemia, respiratory distress, shock, hypoglycemia, acidosis or organ dysfunction.'],
  'Investigations':['Confirm malaria with microscopy and/or a validated rapid diagnostic test.','Repeat testing when clinical suspicion remains high despite an initial negative test.','CBC, glucose, renal/liver function and other severity investigations as clinically indicated.'],
  'Treatment principles':['Treatment depends on species, severity, resistance pattern, pregnancy status and local/national guidance.','Severe malaria requires urgent parenteral antimalarial therapy and supportive management.'],
  'Key drug / dose reference':['Antimalarial choice and dose are species-, weight-, severity- and resistance-dependent; use the current national malaria protocol rather than a universal dose.'],
  'Complications':['Cerebral malaria, severe anemia, hypoglycemia, metabolic acidosis, acute kidney injury, pulmonary edema/ARDS, shock and death.'],
  'Exam pearls':['Always consider malaria in an appropriate febrile traveler/resident and assess immediately for severe features.']
 },refs:['WHO Guidelines for malaria — current online recommendations','National Centre for Vector Borne Diseases Control, India — malaria guidance']},
 {id:'tb',name:'Tuberculosis',system:'Infectious Diseases',summary:'Mycobacterium tuberculosis infection, most commonly pulmonary, with important extrapulmonary manifestations.',sections:{
  'Etiology & transmission':['Mycobacterium tuberculosis complex; spread is primarily airborne from infectious pulmonary/laryngeal disease.'],
  'Clinical features':['Persistent cough, fever, night sweats, weight loss and fatigue are common pulmonary/systemic features.','Extrapulmonary TB varies by site and may involve lymph nodes, pleura, CNS, abdomen or bone.'],
  'Investigations':['Rapid molecular testing is central to diagnosis and drug-resistance detection.','Chest imaging and appropriate microbiological sampling are used according to site.','Drug-susceptibility testing guides regimen selection.'],
  'Treatment principles':['Use a multidrug, susceptibility-guided regimen under the current national TB program.','Adherence, adverse-effect monitoring and contact/public-health management are essential.'],
  'Key drug / dose reference':['TB regimens are weight-band and disease/resistance specific; doses should be taken from the current NTEP/WHO regimen rather than a generic fixed table.'],
  'Complications':['Hemoptysis, respiratory failure, disseminated disease, meningitis and permanent organ damage.'],
  'Exam pearls':['Drug-resistant TB must be considered when indicated by history, testing or treatment response.']
 },refs:['WHO consolidated guidelines on tuberculosis','India National TB Elimination Programme (NTEP) guidance']},
 {id:'pneumonia',name:'Community-Acquired Pneumonia',system:'Respiratory',summary:'Acute infection of the lung acquired outside hospital; severity assessment determines site and intensity of treatment.',sections:{
  'Etiology':['Common bacterial and viral pathogens vary with age, comorbidity and epidemiology.'],
  'Clinical features':['Fever, cough, sputum, dyspnea and pleuritic chest pain may occur.','Older or frail patients may present atypically with confusion or functional decline.'],
  'Assessment':['Assess oxygenation, respiratory distress, hemodynamics and sepsis features.','Use a validated severity tool such as CURB-65/CRB-65 alongside clinical judgment when appropriate.'],
  'Investigations':['Chest imaging when indicated; microbiology is targeted to severity and risk factors.','CBC, renal function, electrolytes and other tests depend on severity and treatment needs.'],
  'Treatment principles':['Choose empiric antibiotics based on severity, comorbidities, recent antibiotics, local resistance patterns and guideline recommendations.','Provide oxygen and supportive care when indicated.'],
  'Key drug / dose reference':['Antibiotic selection and dose should follow the applicable local antimicrobial guideline and patient-specific factors.'],
  'Complications':['Respiratory failure, sepsis, parapneumonic effusion/empyema, lung abscess and cardiovascular complications.'],
  'Exam pearls':['Do not use severity scores as a substitute for clinical assessment.']
 },refs:['ATS/IDSA Community-Acquired Pneumonia guideline','Applicable Indian/local antimicrobial guidance']},
 {id:'typhoid',name:'Enteric Fever (Typhoid/Paratyphoid)',system:'Infectious Diseases',summary:'Systemic infection caused by Salmonella Typhi or Salmonella Paratyphi.',sections:{
  'Etiology':['Salmonella enterica serovar Typhi or Paratyphi; transmission is fecal-oral.'],
  'Clinical features':['Sustained fever, headache, abdominal symptoms and constitutional symptoms are common; presentation varies.'],
  'Investigations':['Blood culture is important for diagnosis, especially early in illness.','Antimicrobial susceptibility testing is important because resistance patterns vary.'],
  'Treatment principles':['Use culture-directed therapy whenever possible and current local resistance guidance for empiric treatment.','Support hydration, nutrition and monitor for complications.'],
  'Key drug / dose reference':['Antibiotic dose must be selected from current susceptibility/local guidance; avoid relying on obsolete fluoroquinolone regimens where resistance is prevalent.'],
  'Complications':['Intestinal hemorrhage/perforation, encephalopathy, hepatitis and relapse.'],
  'Prevention':['Safe water, sanitation, food hygiene and recommended vaccination.']
 },refs:['WHO typhoid guidance','CDC Yellow Book — Typhoid and Paratyphoid Fever','Current local antimicrobial guidance']},
 {id:'asthma',name:'Bronchial Asthma',system:'Respiratory',summary:'Chronic inflammatory airway disease with variable respiratory symptoms and expiratory airflow limitation.',sections:{
  'Clinical features':['Wheeze, dyspnea, chest tightness and cough with variable intensity are typical.','Symptoms often vary over time and may worsen with triggers.'],
  'Diagnosis':['Demonstrate variable expiratory airflow limitation when feasible; clinical history and objective testing are complementary.'],
  'Acute exacerbation':['Assess severity, oxygenation, speech, work of breathing and response to initial therapy.','Rapid bronchodilator therapy, oxygen when indicated and systemic corticosteroids for appropriate exacerbations are core treatments.'],
  'Long-term treatment':['Controller therapy should include inhaled corticosteroid-containing treatment according to current GINA recommendations; avoid SABA-only management.','Address adherence, inhaler technique, triggers and comorbidities.'],
  'Key drug / dose reference':['Inhaler choice and dose depend on age, severity, step of therapy and formulation; use current GINA dosing tables.'],
  'Complications':['Severe exacerbation, respiratory failure and medication-related adverse effects.'],
  'Exam pearls':['Check inhaler technique and adherence before simply escalating therapy.']
 },refs:['GINA Global Strategy for Asthma Management and Prevention — current edition']},
 {id:'copd',name:'COPD',system:'Respiratory',summary:'Chronic respiratory disease with persistent airflow limitation and respiratory symptoms, commonly related to noxious exposures.',sections:{
  'Clinical features':['Chronic dyspnea, cough and sputum production; exacerbations cause acute worsening.'],
  'Diagnosis':['Post-bronchodilator spirometry demonstrating persistent airflow obstruction supports diagnosis.'],
  'Exacerbation':['Assess respiratory failure, infection, cardiac causes and other mimics.','Short-acting bronchodilators, systemic corticosteroids for appropriate exacerbations and selected antibiotics are guideline-based options.','Non-invasive ventilation is important in selected acute hypercapnic respiratory failure.'],
  'Long-term treatment':['Smoking/exposure cessation, vaccination, pulmonary rehabilitation and individualized long-acting bronchodilator therapy are key.'],
  'Key drug / dose reference':['Use current GOLD recommendations and product-specific dosing; treatment is individualized.'],
  'Complications':['Acute respiratory failure, pulmonary hypertension, cor pulmonale, exacerbations and cachexia.']
 },refs:['GOLD Global Strategy for Prevention, Diagnosis and Management of COPD — current edition']},
 {id:'acs',name:'Acute Coronary Syndrome',system:'Cardiology',summary:'Acute myocardial ischemia encompassing unstable angina, NSTEMI and STEMI.',sections:{
  'Clinical features':['Chest pressure/discomfort, dyspnea, diaphoresis, nausea or atypical symptoms may occur.'],
  'Immediate assessment':['Obtain and interpret a 12-lead ECG promptly and assess hemodynamic stability.','Serial high-sensitivity cardiac troponin is central to diagnosis of myocardial injury.'],
  'Treatment principles':['Rapid risk stratification and reperfusion strategy for STEMI are time-critical.','Antiplatelet, anticoagulant, lipid-lowering and anti-ischemic therapies are selected according to ACS type, bleeding risk and revascularization plan.'],
  'Key drug / dose reference':['Drug selection and dosing must follow the current ACS guideline and account for weight, renal function, bleeding risk and planned PCI.'],
  'Complications':['Arrhythmia, acute heart failure, cardiogenic shock, mechanical complications and recurrent ischemia.'],
  'Exam pearls':['A normal initial ECG does not exclude ACS; repeat ECG/troponin testing may be required when suspicion remains.']
 },refs:['ESC Guidelines for acute coronary syndromes — current edition','ACC/AHA ACS guidance where applicable']},
 {id:'dka',name:'Diabetic Ketoacidosis',system:'Endocrine / Emergency',summary:'Acute metabolic emergency characterized by hyperglycemia/diabetes with ketosis and metabolic acidosis, with important euglycemic variants.',sections:{
  'Clinical features':['Polyuria, polydipsia, vomiting, abdominal pain, dehydration, tachypnea/Kussmaul breathing and altered mental status may occur.'],
  'Investigations':['Glucose, venous/arterial pH, bicarbonate, electrolytes, ketones, renal function and calculated anion gap are important.','Identify precipitating factors such as infection, missed insulin or acute illness.'],
  'Treatment principles':['Fluid resuscitation, insulin therapy, potassium/electrolyte management and treatment of the precipitating cause are the core pillars.','Frequent monitoring is essential; potassium status must be considered before and during insulin therapy.'],
  'Key drug / dose reference':['Insulin and fluid rates are protocol-driven and depend on potassium, hemodynamics, renal function and adult/pediatric status; use the current diabetes society/hospital DKA protocol.'],
  'Complications':['Hypoglycemia, hypokalemia, cerebral edema (particularly pediatric), cerebral injury and fluid overload.'],
  'Exam pearls':['Total body potassium is depleted even when serum potassium is normal or elevated initially.']
 },refs:['ADA Standards of Care — Diabetes','Joint British Diabetes Societies DKA guideline / applicable national protocol']},
 {id:'stroke',name:'Acute Ischemic Stroke',system:'Neurology / Emergency',summary:'Acute focal neurological dysfunction due to cerebral infarction; early recognition and reperfusion assessment are time-critical.',sections:{
  'Clinical features':['Sudden focal weakness, facial droop, speech/language disturbance, visual loss, neglect, ataxia or other focal deficits.'],
  'Immediate assessment':['Establish last-known-well time, check glucose, assess airway/vitals and perform a standardized neurological assessment such as NIHSS.','Urgent brain imaging excludes hemorrhage; vascular imaging is used when indicated.'],
  'Treatment principles':['Eligible patients should be evaluated rapidly for reperfusion therapy according to current time-window and imaging criteria.','Thrombectomy is considered for selected large-vessel occlusion according to current criteria.','Secondary prevention is cause-specific.'],
  'Key drug / dose reference':['Thrombolytic choice/dose and antithrombotic timing are highly protocol-dependent; use current stroke guidelines and local stroke pathway.'],
  'Complications':['Cerebral edema, hemorrhagic transformation, aspiration, seizures, DVT/PE and recurrent stroke.'],
  'Exam pearls':['Time of symptom onset/last known well is a critical treatment variable.']
 },refs:['AHA/ASA guideline for early management of acute ischemic stroke','ESO stroke guidance where applicable']}
];

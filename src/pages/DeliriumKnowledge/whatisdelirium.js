import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const About = () => (
  <Layout
  breadCrumb={
    <><Link className="custom-link" to="/">Home</Link> \ <Link className="custom-link" to="/DeliriumKnowledge">Delirium Knowledge</Link>\ What is Delirium?</>   
  }
  >
    <SEO title="What is Delirium" />
<div className="info-section-wrapper">
<div className="info-section">
      <h3>Definition</h3>
      <p>Delirium is a common form of acute confusion. It manifests as:
        <ul>
          <li>Disturbed sleep patterns</li>
          <li>Hallucinations</li>
          <li>Drowsiness or hyperactivity</li>
          <li>Changes in cognitive function</li>
          <li>Changes in mobility/motor activities</li>
          <li>Aggression or restlessness (but not in all cases)</li>
        </ul>
      </p>

      <p>Delirium can develop at all ages (including children) and for many different reasons. Please read ‘causes’ to understand more. </p>
      <small>(Grossberg and Isik, 2019; NICE, 2019)</small>

    </div>
    <div className="info-section">
      <h3>Types of Delirium</h3>
      <p>There are three main types of delirium;
        <ul>
          <li>Hyperactive</li>
          <li>Hypoactive</li>
          <li>Mixed</li>
        </ul>
      </p>
      <p>Hyperactive delirium symptoms include:
        <ul>
          <li>Restlessness, pacing</li>
          <li>Agitation, aggression</li>
          <li>Rapid mood changes</li>
          <li>Hallucinations</li>
          <li>Refusal to co-operate with care</li>
        </ul>
      </p>
      <p>Hypoactive delirium symptoms include:
        <ul>
          <li>Inacitvity, sluggishness, withdrawn</li>
          <li>Reduced mood</li>
          <li>Seem to be ‘in a daze’</li>
          <li>Abnormal drowsiness</li>
        </ul>
      </p>
      <p>
        Mixed delirium includes symptoms of both hyperactive and hypoactive delirium. 
        Patients may switch between each state quickly and without warning (e.g. drowsy to restless and pacing, or calm then agitated which makes them a high falls risk)
      </p>
    </div>
    <div className="info-section">
      <h3>Risk Factors</h3>
      <p>Risk factors for developing delirium are:
        <ul>
          <li>Age >70 years</li>
          <li>Pre-existing dementia</li>
          <li>Critically ill or recent surgery</li>
          <li>History of previous delirium</li>
          <li>Visual and hearing impairment</li>
          <li>Depression</li>
          <li>Polypharmacy</li>
          <li>Alcohol/ Benzodiazepine use</li>
        </ul>
      </p>
      <p>
        Most patients won’t just have one risk factor. 
        Remember that noticing changes in your patients’ behaviour is as important as recalling risk factors
      </p>
    </div>
    <div className="info-section">
      <h3>Post-Op Care</h3>
      <p>
        Delirium is the most common post-operative complication in older adults and is usually seen on the first or second post-operative day, 
        and symptoms are often aggravated at night.
      </p>
      <p>
        Delirium occurs when there is an imbalance in neuro-transmitters responsible for cognition, mood and behavior. 
        This imbalance is made worse when there is a change in inflammatory response and oxidative metabolism in the body, both of which are caused by surgery. 
        The main neuro-transmitters that we can link to causing delirium are high levels of dopamine and low levels of acetylcholine. 
      </p>
      <p>
        The inflammatory response then causes a release of cell-signaling proteins, which can lead to a prothrombotic state (which may result in reduced blood flow to the brain) 
        and may trigger delirium. We know this increases dopamine levels and decreased acetylcholine levels. 
        This can disrupt the functioning of the thalamus (controller of information to the cerebral cortex) and permeability of the blood-brain barrier and leads onto delirium.
      </p>
      <p>
        Opiates used in surgery and post op care are strongly associated with delirium. 
        They often change the levels of serotonin and acetylcholine and therefore, may cause delirium. Changes in sleep pattern can also reduce acetylcholine and melatonin levels, 
        therefore exacerbating delirium.
      </p>
      <p>
        It must be noted that older people also produce less acetylcholine than that of younger adults, and the fasting process also reduces this hormone in the brain.
      </p>
      <p>
        The link between anesthesia itself and delirium is still unclear. We know that regional anesthesia has a reduced risk of developing delirium that general anaesthesia, 
        but this may only be due to the usage of muscle relaxants in GA may cause hypoxemia, which has been linked to delirium causation. 
        Other medication used intra-op or post-op such as CNS depressant drugs, antihypertensives, digoxin and antihistamines have been linked to causing delirium too.
      </p>
    </div>
    <div className="info-section">
      <h3>Delirium vs Dementia</h3>
      <p>
        You may have heard the saying ‘Dementia impacts memory, delirium impacts awareness’. 
        This statement is true, but we should delve a little deeper into the specifics
      </p>
      <p>
        There are three main differences between the two diagnoses:
        <ul>
          <li>
            <strong>Onset</strong> - Dementia is slow to progress, it develops over years; delirium is acute and can occur within hours
          </li>
          <li>
            <strong>Fluctuation</strong> - Patients living with dementia have ‘good’ and ‘bad’ parts of the day for behaviour e.g. sundowning. 
            Patients with delirium can fluctuate in behaviour within minutes e.g. drowsy to wandering.
          </li>
          <li>
            <strong>Attention</strong> - Delirium impacts awareness severely, you may notice a significant change in level of awareness in your patient with delirium. 
            However, patients living with dementia have a consistent level of attention span, but this will change as the disease progresses
          </li>
        </ul>
      </p>
      <p>
        The main points to remember:
        <ul>
          <li>Delirium and dementia are <strong>not</strong> the same!</li>
          <li>You can have both dementia and delirium</li>
          <li>It can be difficult to decipher between the two, ask relatives/carers about your patients’ baseline of cognition if unsure</li>
          <li>Delirium should be treated before dementia</li>
          <li>Dementia impacts memory, delirium impacts awareness</li>
          <li>A referral to the Mental Health Liaison Team may assist in diagnosis questioning</li>
        </ul>
      </p>
      </div>
  </div>
  </Layout>
)

export default About

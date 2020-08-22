import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Causes = () => (
  <Layout
  breadCrumb={
    <><Link className="custom-link" to="/">Home</Link> \ <Link className="custom-link" to="/DeliriumKnowledge">Delirium Knowledge</Link>\ Causes</>   
  }
  >
    <SEO title="Causes of Delirium" />
<div className="info-section-wrapper">
  <div className="info-section">
    <h3>Causes of Delirium</h3> 
    <p>
      Unfortunately, there are many causes of delirium that we know about and many more we don’t understand. 
      In nursing, we focus on seven main causes that we can control which include the very basics of nursing care and managing patients’ activities of daily living.
    </p>
    <p>
      There’s a very handy acronym to remember the main seven causes of delirium :
    </p>
    <div className="progress-bar">
      <div className="inprogress">P</div>
      <div className="inprogress">I</div>
      <div className="inprogress">N</div>
      <div className="inprogress">C</div>
      <div className="inprogress">H</div>
      <div className="inprogress">M</div>
      <div className="inprogress">E</div>
    </div>
    <h4 style={{textAlign:'center'}}>Pain - Infection - Nutrition - Constipation - Hydration - Medication - Environment</h4>
  </div>

  <div className="info-section">
    <h3>Pain</h3>
    <div style={{display:'flex'}}>
      <div style={{minWidth:'64px'}}>
        <img className="info-icon" src="https://img.icons8.com/nolan/64/sad.png" alt="Pain"></img>
      </div>
      <p>Uncontrolled pain has been linked to delirium development in all ages. If your patients cannot communicate their pain, use a non-verbal assessment such as the Abbey Pain Scale</p>
    </div>
  </div>

  <div className="info-section">
    <h3>Infection</h3>
    <div style={{display:'flex'}}>
      <div style={{minWidth:'64px'}}>
        <img className="info-icon" src="https://img.icons8.com/nolan/64/bacteria.png" alt="Infection"></img>
      </div>
      <p>
        The main three in surgery are chest infection, urinary tract infections and surgical site infections. 
        Always be aware of symptomatic patients for these infections and remember to communicate with the medical team if suspected
      </p>
    </div>
  </div>

  <div className="info-section">
    <h3>Nutrition</h3>
    <div style={{display:'flex'}}>
      <div style={{minWidth:'64px'}}>
        <img className="info-icon" src="https://img.icons8.com/nolan/64/vegetarian-food.png" alt="Nutrition"></img>
      </div>
      <p>
        Malnutrition is a cause of cognitive dysfunction, and therefore, delirium. 
        This may be an issue in those who do not eat good portions already, as post-operative recovery will require a higher nutritional intake. 
        Monitor patients’ intakes and follow up on issues around nutrition, which may include poor swallow, poor oral health, nausea or lack of dentures
      </p>
    </div>
  </div>

  <div className="info-section">
    <h3>Constipation</h3>
    <div style={{display:'flex'}}>
      <div style={{minWidth:'64px'}}>
        <img className="info-icon" src="https://img.icons8.com/nolan/64/toilet-bowl.png" alt="Constipation"></img>
      </div>
      <p>
        Constipation plays a major factor in confusion in the elderly patient. 
        Monitor patients’ bowel movements and assess if nursing intervention is required. 
        Use regular laxatives if recently post-operative
      </p>
    </div>
  </div>

  <div className="info-section">
    <h3>Hydration</h3>
    <div style={{display:'flex'}}>
      <div style={{minWidth:'64px'}}>
        <img className="info-icon" src="https://img.icons8.com/nolan/64/water.png" alt="Hydration"></img>
      </div>
      <p>
        Dehydration and overloading of fluid may cause confusion, as well as many other medical concerns. 
        Keep strict input/output charts and monitor confused patients if they need assistance
      </p>
    </div>
  </div>

    <div className="info-section">
      <h3>Medication</h3>
      <div style={{display:'flex'}}>
        <div style={{minWidth:'64px'}}>
          <img className="info-icon" src="https://img.icons8.com/nolan/64/syringe.png" alt="Medication"></img>
        </div>
        <p>
          Introduction of new medication, changes to regular medication and withdrawal are all linked to cognitive changes. 
          Have we started any new medications for their mental health, cardiac problems, antiepileptics or antiemetics? 
          Has your patient undergone recent surgery, especially if under a general anaesthetic? 
          If yes, they may need some time to adjust to these medication or a medication review by the medical team/pharmacists. 
          Consider illicit substances too. Is your patient using or have a history of recreational drug use, or have a history of alcoholism? 
          If so, alert the medical team if not already aware
        </p>
      </div>
    </div>

    <div className="info-section">
      <h3>Environment</h3>
      <div style={{display:'flex'}}>
        <div style={{minWidth:'64px'}}>
          <img className="info-icon" src="https://img.icons8.com/nolan/64/hospital-bed.png" alt="Environment"></img>
        </div>
        <p>
          Bed transfers may be needed but should be reduced if possible. 
          Encouraging good sleep hygiene is crucial to reducing the potential of developing delirium or reducing the impact of a delirious episode. 
          This includes turning down ward lighting, reducing noise and settling patients down early on to encourage rest
        </p>
      </div>
    </div>

  </div>
  </Layout>
)

export default Causes

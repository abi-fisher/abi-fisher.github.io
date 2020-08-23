import React from "react"
import * as jsPDF from "jspdf"
import * as html2canvas from "html2canvas"

const download = () =>{

    html2canvas(document.getElementById('content'), { windowWidth: 630,//595,
      onclone: (d)=>{
      d.getElementById('content').style.opacity = 1;
    }
    }).then(function (canvas) {
    
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 320; 
      var pageHeight = 590;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'px');
      var position = 10;
      
      doc.addImage(imgData, 'PNG', 60, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 60, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      let today = new Date();
      let fileName = `Delirium Assessment tool - ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`

      if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) {
          window.open(doc.output('bloburl', { filename: fileName }))
      } else {
          doc.save(fileName)
      }

  });

}

function Output(props) {  

  const {
    painModel, 
    infectionModel, 
    nutritionModel, 
    constipationModel,
    hydrationModel, 
    medicationModel, 
    environmentModel,
  } = props;
  
  return(
    <>
    <p style={{textAlign: 'center'}}>
      <button 
        className="btn btn-primary"
        onClick={()=>{
          console.log("this is props", props);
          download()
        }
        } >
          Download PDF
      </button>
    </p>

    <div id="content" className="outputDocument">
      <h1>Daily delirium assessment tool</h1>

      <table className="userComplete">
        <tbody>
          <tr><td style={{padding: 0 }}><small style={{color: '#ccc'}}>(label)</small></td></tr>
          <tr>
            <td>Patient name:</td>
            <td>Date:</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>Time:</td>
          </tr>
          <tr>
            <td>Patient Number:</td>
            <td>Signed:</td>
          </tr>
          </tbody>
      </table>
      <p>Using the ‘PINCH ME’ acronym, please use this assessment tool when delirium is suspected. Use your clinical judgment as needed.</p>
      <p>If circled a <strong>bold answer</strong> to any question, use the Delirium Care Plan. This tool must be reviewed daily and may be discontinued at the nurse’s discretion.</p>
      <p className="important">PLEASE FILE IN NURSING NOTES NOT MEDICAL NOTES AS THIS IS A TRIAL, THANK YOU</p>

<h2>Pain</h2>
<table>
  <tbody>
  <tr>
      <td className="question">Average Abbey Pain Scale Score</td> 
      <td>
      <span className="answer">{(painModel && painModel.painScore === 0)?"[ None ]":"None"}</span>
        <span className="answer">{(painModel && painModel.painScore === 1)?"[ Mild ]":"Mild"}</span>
        <span className="answer important">{(painModel && painModel.painScore === 2)?"[ Moderate ]":"Moderate"}</span>
        <span className="answer important">{(painModel && painModel.painScore === 3)?"[ Severe ]":"Severe"}</span>
      </td>
    </tr>	                         
    <tr>
      <td className="question">Is there a history of confusion/hallucinations with opiates?</td> 
      <td className="answer-2">
        <span className="answer important">{(painModel && painModel.painHistory === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(painModel && painModel.painHistory === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Are we using PRN analgesia when required?</td> 
      <td className="answer-2">
        <span className="answer">{(painModel && painModel.painAnalgesia === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer"> {(painModel && painModel.painAnalgesia === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Is the patient’s pain uncontrolled or advice is required?</td> 
      <td className="answer-2">
        <span className="answer important">{(painModel && painModel.painAdvise === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(painModel && painModel.painAdvise === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Infection</h2>
<table>
  <tbody>
  <tr>
      <td className="question-2">Are they symptomatic of infection?</td> 
      <td>Date of sample</td>
      <td/>
    </tr>	                         
    <tr>
      <td className="question-2">Chest</td> 
      <td><span className="important">{(infectionModel && infectionModel.infectionChest === true)?"[ Yes ]":"Yes"}</span> - {infectionModel && infectionModel.infectionChestDate}</td>
      <td className="answer">
        <span className="answer important">{(infectionModel && infectionModel.infectionChest === "A/T")?"[ Already Treating ]":"Already Treating"}</span>
        <span className="answer">{(infectionModel && infectionModel.infectionChest === "N/A")?"[ N/A ]":"N/A"}</span>
      </td>
    </tr>
    <tr>
      <td className="question-2">Urine</td> 
      <td><span className="important">{(infectionModel && infectionModel.infectionUrine === true)?"[ Yes ]":"Yes"}</span> - {infectionModel && infectionModel.infectionUrineDate}</td>
      <td className="answer">
        <span className="answer important">{(infectionModel && infectionModel.infectionUrine === "A/T")?"[ Already Treating ]":"Already Treating"}</span>
        <span className="answer">{(infectionModel && infectionModel.infectionUrine === "N/A")?"[ N/A ]":"N/A"}</span>
      </td>
    </tr>
    <tr>
      <td className="question-2">Surgical wound(s)</td> 
      <td><span className="important">{(infectionModel && infectionModel.infectionSurgical === true)?"[ Yes ]":"Yes"}</span> - {infectionModel && infectionModel.infectionSurgicalDate}</td>
      <td className="answer">
        <span className="answer important">{(infectionModel && infectionModel.infectionSurgical === "A/T")?"[ Already Treating ]":"Already Treating"}</span>
        <span className="answer">{(infectionModel && infectionModel.infectionSurgical === "N/A")?"[ N/A ]":"N/A"}</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Nutrition</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Poor nutritional intake? If so, start food charting </td> 
      <td className="answer-2">
        <span className="answer important">{(nutritionModel && nutritionModel.nutritionIntake === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(nutritionModel && nutritionModel.nutritionIntake === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Is the patient symptomatic of aspiration/slow swallow/pouching?</td> 
      <td className="answer-2">
        <span className="answer important">{(nutritionModel && nutritionModel.nutritionSymptom === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer"> {(nutritionModel && nutritionModel.nutritionSymptom === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Constipation</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Has the patient had a bowel movement in 3 days?</td> 
      <td className="answer-2">
        <span className="answer">{(constipationModel && constipationModel.constipationBowel === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer important">{(constipationModel && constipationModel.constipationBowel === false)?"[ No ]":"No"} - PR {(constipationModel && constipationModel.constipationBowelPR === true)?"✓":""}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has the patient been prescribed and given sufficient laxatives?</td> 
      <td className="answer-2">
        <span className="answer">{(constipationModel && constipationModel.constipationLaxatives === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer important">{(constipationModel && constipationModel.constipationLaxatives === false)?"[ No ]":"No"} </span>
      </td>
    </tr>
  </tbody>
</table>

<br/>
<br/>

<h2>Hydration</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Does the patient look dehydrated/overloaded?</td> 
      <td className="answer-2">
        <span className="answer important">{(hydrationModel && hydrationModel.hydrationOverloaded === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(hydrationModel && hydrationModel.hydrationOverloaded === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Oral intake for shift</td> 
      <td className="answer">
        <span className="answer">{hydrationModel && hydrationModel.hydrationIntake} ml</span>
      </td>
    </tr>
    <tr>
      <td className="question">Urine output for shift</td> 
      <td className="answer">
        <span className="answer">{hydrationModel && hydrationModel.hydrationOutput} ml</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Medication</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Has there been a change/omission in regular dementia medications?</td> 
      <td className="answer-3">
        <span className="answer important">{(medicationModel && medicationModel.medicationDementia === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationDementia === false)?"[ No ]":"No"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationDementia === "N/A")?"[ N/A ]":"N/A"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has there been a change/omission in regular Parkinson’s medication?</td> 
      <td className="answer-3">
        <span className="answer important">{(medicationModel && medicationModel.medicationParkinsons === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationParkinsons === false)?"[ No ]":"No"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationParkinsons === "N/A")?"[ N/A ]":"N/A"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has new analgesia been given recently? Specifically NSAIDs/opiates</td> 
      <td className="answer-2">
        <span className="answer important">{(medicationModel && medicationModel.medicationAnalgesia === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationAnalgesia === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Have new anti-emetics/anti-epileptic/cardiac/mental health medications been given recently?</td> 
      <td className="answer-2">
        <span className="answer important">{(medicationModel && medicationModel.medicationMedications === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(medicationModel && medicationModel.medicationMedications === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Environment</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Has there been a change in bed space within the last 48 hours?</td> 
      <td className="answer-2">
        <span className="answer important">{(environmentModel && environmentModel.environmentBed === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(environmentModel && environmentModel.environmentBed === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
    <tr>
      <td className="question">Is there a history of?
        <ul>
          <li>Long term confusion with no diagnosis/poor 4AT score</li>
          <li>Previous excessive alcohol use</li>
          <li>Previous drug use</li>
        </ul>
      </td> 
      <td className="answer-2">
        <span className="answer important">{(environmentModel && environmentModel.environmentHistory === true)?"[ Yes ]":"Yes"}</span>
        <span className="answer">{(environmentModel && environmentModel.environmentHistory === false)?"[ No ]":"No"}</span>
      </td>
    </tr>
  </tbody>
</table>

<div style={{textAlign: 'left'}}>
  <h2 style={{display: 'inline-block'}}>Identified Issues</h2><p style={{display: 'inline'}}> - tick each box that is an identified issue for the patient</p>
</div>
<table>
  <tbody>   
    <tr>
        <td /> 
        <td className="question"><strong>Potential cause of confusion?</strong></td> 
    </tr>                 
    <tr>
      <td className="question"><strong>P</strong>ain</td> 
      <td className="answer">
      <span className="answer important">{(painModel && painModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>I</strong>nfection</td> 
      <td className="answer">
        <span className="answer important">{(infectionModel && infectionModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>N</strong>utrition</td> 
      <td className="answer">
        <span className="answer important">{(nutritionModel && nutritionModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>C</strong>onstipation</td> 
      <td className="answer">
        <span className="answer important">{(constipationModel && constipationModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>H</strong>ydration</td> 
      <td className="answer">
        <span className="answer important">{(hydrationModel && hydrationModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>M</strong>edication</td> 
      <td className="answer">
        <span className="answer important">{(medicationModel && medicationModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
    <tr>
      <td className="question"><strong>E</strong>nvironment</td> 
      <td className="answer">
        <span className="answer important">{(environmentModel && environmentModel.identified) ? '✓' : ''}</span>
      </td>
    </tr>
  </tbody>
</table>

</div>
</>
)}

export default Output

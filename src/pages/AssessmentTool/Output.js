import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


if (typeof window !== `undefined`) {
  import * as jsPDF from "jspdf"
  import * as html2canvas from "html2canvas"
}

const download = () =>{

    html2canvas(document.getElementById('content'), { windowWidth: 595,
      onclone: (d)=>{
      d.getElementById('content').style.opacity = 1;
    }
    }).then(function (canvas) {

      if(0===1){
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
          putOnlyUsedFonts:true
        });
        doc.addImage(img, 'JPEG',10,10);
        doc.save('test.pdf');  
      }

      
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 420; 
      var pageHeight = 600;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'px');
      var position = 10;
      
      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save( 'file.pdf');

  });

}

const DeliriumKnowledge = () => (
  <Layout>
    <SEO title="Delirium Knowledge" />
    <h1>Assessment Tool</h1>
    <p>this page will give final summary of the assessment results and allow the user to download a pdf version
      of the document.
    </p>
<p>
<Link to="/">Go Home</Link>
</p>


    <p><button onClick={()=>download()}>TEST ME</button></p>

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
        <span className="answer">None</span>
        <span className="answer">Mild</span>
        <span className="answer important">Moderate</span>
        <span className="answer important">Severe</span>
      </td>
    </tr>	                         
    <tr>
      <td className="question">Is there a history of confusion/hallucinations with opiates?</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
      </td>
    </tr>
    <tr>
      <td className="question">Are we using PRN analgesia when required?</td> 
      <td className="answer-2">
        <span className="answer">Yes</span>
        <span className="answer"> No</span>
      </td>
    </tr>
    <tr>
      <td className="question">Is the patient’s pain uncontrolled or advice is required?</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
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
      <td><span className="important">Yes</span> - </td>
      <td className="answer">
        <span className="answer important">Already Treating</span>
        <span className="answer">N/A</span>
      </td>
    </tr>
    <tr>
      <td className="question-2">Urine</td> 
      <td><span className="important">Yes</span> - </td>
      <td className="answer">
        <span className="answer important">Already Treating</span>
        <span className="answer">N/A</span>
      </td>
    </tr>
    <tr>
      <td className="question-2">Surgical wound(s)</td> 
      <td><span className="important">Yes</span> - </td>
      <td className="answer">
        <span className="answer important">Already Treating</span>
        <span className="answer">N/A</span>
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
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
      </td>
    </tr>
    <tr>
      <td className="question">Is the patient symptomatic of aspiration/slow swallow/pouching?</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer"> No</span>
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
        <span className="answer">Yes</span>
        <span className="answer important">No - PR &#9745;</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has the patient been prescribed and given sufficient laxatives?</td> 
      <td className="answer-2">
        <span className="answer">Yes</span>
        <span className="answer important"> No</span>
      </td>
    </tr>
  </tbody>
</table>

<h2>Hydration</h2>
<table>
  <tbody>                    
    <tr>
      <td className="question">Does the patient look dehydrated/overloaded?</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
      </td>
    </tr>
    <tr>
      <td className="question">Oral intake for shift</td> 
      <td className="answer">
        <span className="answer">____________________ ml</span>
      </td>
    </tr>
    <tr>
      <td className="question">Urine output for shift</td> 
      <td className="answer">
        <span className="answer">____________________ ml</span>
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
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
        <span className="answer">N/A</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has there been a change/omission in regular Parkinson’s medication?</td> 
      <td className="answer-3">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
        <span className="answer">N/A</span>
      </td>
    </tr>
    <tr>
      <td className="question">Has new analgesia been given recently? Specifically NSAIDs/opiates</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
      </td>
    </tr>
    <tr>
      <td className="question">Have new anti-emetics/anti-epileptic/cardiac/mental health medications been given recently?</td> 
      <td className="answer-2">
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
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
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
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
        <span className="answer important">Yes</span>
        <span className="answer">No</span>
      </td>
    </tr>
  </tbody>
</table>

<h1>a</h1>
<h1>a</h1>
<h1>a</h1>
<h1>a</h1>


</div>

<div id="elementH"></div>
    


    
  </Layout>
)

export default DeliriumKnowledge

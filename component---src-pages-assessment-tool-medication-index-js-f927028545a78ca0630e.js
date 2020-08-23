(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,27,28,29],{"5Scy":function(e,t,n){"use strict";n.r(t),n.d(t,"MedicationParkinsons",(function(){return l}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),s="btn btn-primary btn-selected",l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={question:"medicationParkinsons",answer:null,identified:null},n}Object(a.a)(t,e);var n=t.prototype;return n.handleAnswer=function(e){this.setState({answer:e,identified:e})},n.handleSubmit=function(){var e=[{name:this.state.question,value:this.state.answer},{name:"medicationParkinsonsDone",value:!0}];this.props.onUpdateMany(e,this.state.identified)},n.render=function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement("h3",null,"Has there been a change/omission in regular Parkinson’s medication?"),r.a.createElement("p",null,r.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!0)}},"Yes"),r.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!1)}},"No"),r.a.createElement("button",{className:"N/A"===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer("N/A")}},"N/A")),r.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleSubmit()}},"Next"):r.a.createElement(r.a.Fragment,null)))},t}(r.a.Component);t.default=l},"7a0L":function(e,t,n){"use strict";n.r(t),n.d(t,"MedicationDementia",(function(){return l}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),s="btn btn-primary btn-selected",l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={question:"medicationDementia",answer:null,identified:null},n}Object(a.a)(t,e);var n=t.prototype;return n.handleAnswer=function(e){this.setState({answer:e,identified:e})},n.handleSubmit=function(){var e=[{name:this.state.question,value:this.state.answer},{name:"medicationDementiaDone",value:!0}];this.props.onUpdateMany(e,this.state.identified)},n.render=function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement("h3",null,"Has there been a change/omission in regular dementia medications?"),r.a.createElement("p",null,r.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!0)}},"Yes"),r.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!1)}},"No"),r.a.createElement("button",{className:"N/A"===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer("N/A")}},"N/A")),r.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleSubmit()}},"Next"):r.a.createElement(r.a.Fragment,null)))},t}(r.a.Component);t.default=l},DxXU:function(e,t,n){"use strict";n.r(t),n.d(t,"MedicationAnalgesia",(function(){return l}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),s="btn btn-primary btn-selected",l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={question:"medicationAnalgesia",answer:null,identified:null},n}Object(a.a)(t,e);var n=t.prototype;return n.handleAnswer=function(e){this.setState({answer:e,identified:e})},n.handleSubmit=function(){var e=[{name:this.state.question,value:this.state.answer},{name:"medicationAnalgesiaDone",value:!0}];this.props.onUpdateMany(e,this.state.identified)},n.render=function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement("h3",null,"Has new analgesia been given recently? Specifically NSAIDs/opiates"),r.a.createElement("p",null,r.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!0)}},"Yes"),r.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!1)}},"No")),r.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleSubmit()}},"Next"):r.a.createElement(r.a.Fragment,null)))},t}(r.a.Component);t.default=l},Y2aD:function(e,t,n){"use strict";n.r(t),n.d(t,"MedicationMedications",(function(){return l}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),s="btn btn-primary btn-selected",l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={question:"medicationMedications",answer:null,identified:null},n}Object(a.a)(t,e);var n=t.prototype;return n.handleAnswer=function(e){this.setState({answer:e,identified:e})},n.handleSubmit=function(){var e=[{name:this.state.question,value:this.state.answer},{name:"medicationMedicationsDone",value:!0}];this.props.onUpdateMany(e,this.state.identified,!0)},n.render=function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement("h3",null,"Have new anti-emetics/anti-epileptic/cardiac/mental health medications been given recently?"),r.a.createElement("p",null,r.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!0)}},"Yes"),r.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!1)}},"No")),r.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleSubmit()}},"Next"):r.a.createElement(r.a.Fragment,null)))},t}(r.a.Component);t.default=l},vByj:function(e,t,n){"use strict";n.r(t),n.d(t,"Medication",(function(){return o}));var a=n("q1tI"),i=n.n(a),r=n("7a0L"),s=n("5Scy"),l=n("DxXU"),c=n("Y2aD");function o(e){var t=e.model?e.model:{};return t.medicationDementiaDone?t.medicationParkinsonsDone?t.medicationAnalgesiaDone?t.medicationMedicationsDone?i.a.createElement("p",null,"there are no further questions for this section."):i.a.createElement(c.default,e):i.a.createElement(l.default,e):i.a.createElement(s.default,e):i.a.createElement(r.default,e)}t.default=o}}]);
//# sourceMappingURL=component---src-pages-assessment-tool-medication-index-js-f927028545a78ca0630e.js.map
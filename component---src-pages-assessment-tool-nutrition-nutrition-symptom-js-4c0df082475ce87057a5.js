(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"58Pc":function(t,e,n){"use strict";n.r(e),n.d(e,"NutritionSymptom",(function(){return o}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),s="btn btn-primary btn-selected",o=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={question:"nutritionSymptom",answer:null,identified:null},n}Object(a.a)(e,t);var n=e.prototype;return n.handleAnswer=function(t){this.setState({answer:t,identified:t})},n.handleSubmit=function(){var t=[{name:this.state.question,value:this.state.answer},{name:"nutritionSymptomDone",value:!0}];this.props.onUpdateMany(t,this.state.identified,!0)},n.render=function(){var t=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement("h3",null,"Is the patient symptomatic of aspiration/slow swallow/pouching?"),r.a.createElement("p",null,r.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!0)}},"Yes"),r.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!1)}},"No")),r.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.handleSubmit()}},"Next"):r.a.createElement(r.a.Fragment,null)))},e}(r.a.Component);e.default=o}}]);
//# sourceMappingURL=component---src-pages-assessment-tool-nutrition-nutrition-symptom-js-4c0df082475ce87057a5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[30,31,32],{"32Xf":function(t,e,n){"use strict";n.r(e),n.d(e,"NutritionIntake",(function(){return o}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),s="btn btn-primary btn-selected",o=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={question:"nutritionIntake",answer:null,identified:null},n}Object(a.a)(e,t);var n=e.prototype;return n.handleAnswer=function(t){this.setState({answer:t,identified:t})},n.handleSubmit=function(){var t=[{name:this.state.question,value:this.state.answer},{name:"nutritionIntakeDone",value:!0}];this.props.onUpdateMany(t,this.state.identified)},n.render=function(){var t=this;return i.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},i.a.createElement("h3",null,"Poor nutritional intake? If so, start food charting "),i.a.createElement("p",null,i.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!0)}},"Yes"),i.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!1)}},"No")),i.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.handleSubmit()}},"Next"):i.a.createElement(i.a.Fragment,null)))},e}(i.a.Component);e.default=o},"58Pc":function(t,e,n){"use strict";n.r(e),n.d(e,"NutritionSymptom",(function(){return o}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),s="btn btn-primary btn-selected",o=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={question:"nutritionSymptom",answer:null,identified:null},n}Object(a.a)(e,t);var n=e.prototype;return n.handleAnswer=function(t){this.setState({answer:t,identified:t})},n.handleSubmit=function(){var t=[{name:this.state.question,value:this.state.answer},{name:"nutritionSymptomDone",value:!0}];this.props.onUpdateMany(t,this.state.identified,!0)},n.render=function(){var t=this;return i.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},i.a.createElement("h3",null,"Is the patient symptomatic of aspiration/slow swallow/pouching?"),i.a.createElement("p",null,i.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!0)}},"Yes"),i.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return t.handleAnswer(!1)}},"No")),i.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.handleSubmit()}},"Next"):i.a.createElement(i.a.Fragment,null)))},e}(i.a.Component);e.default=o},n9GQ:function(t,e,n){"use strict";n.r(e),n.d(e,"Nutrition",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("32Xf"),s=n("58Pc");function o(t){var e=t.model?t.model:{};return e.nutritionIntakeDone?e.nutritionSymptomDone?r.a.createElement("p",null,"there are no further questions for this section."):r.a.createElement(s.default,t):r.a.createElement(i.default,t)}e.default=o}}]);
//# sourceMappingURL=component---src-pages-assessment-tool-nutrition-index-js-93f9eb8d0de42149b9c5.js.map
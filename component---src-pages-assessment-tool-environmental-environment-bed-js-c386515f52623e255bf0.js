(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1CFT":function(e,t,n){"use strict";n.r(t),n.d(t,"EnvironmentBed",(function(){return l}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),s="btn btn-primary btn-selected",l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={question:"environmentBed",answer:null,identified:null},n}Object(a.a)(t,e);var n=t.prototype;return n.handleAnswer=function(e){this.setState({answer:e,identified:e})},n.handleSubmit=function(){var e=[{name:this.state.question,value:this.state.answer},{name:"environmentBedDone",value:!0}];this.props.onUpdateMany(e,this.state.identified)},n.render=function(){var e=this;return i.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},i.a.createElement("h3",null,"Has there been a change in bed space within the last 48 hours?"),i.a.createElement("p",null,i.a.createElement("button",{className:!0===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!0)}},"Yes"),i.a.createElement("button",{className:!1===this.state.answer?s:"btn btn-primary",onClick:function(){return e.handleAnswer(!1)}},"No")),i.a.createElement("p",{style:{marginTop:"4em"}},null!==this.state.answer?i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.handleSubmit()}},"Next"):i.a.createElement(i.a.Fragment,null)))},t}(i.a.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-assessment-tool-environmental-environment-bed-js-c386515f52623e255bf0.js.map
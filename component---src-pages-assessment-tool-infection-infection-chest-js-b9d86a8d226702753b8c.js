(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0d/q":function(t,e,n){"use strict";n.r(e),n.d(e,"InfectionChest",(function(){return l}));var a=n("dI71"),s=n("q1tI"),i=n.n(s),r="btn btn-primary btn-selected",l=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleShowDate=function(){n.setState({answer:!0,identified:!0,showDate:!0})},n.state={question:"infectionChest",answer:null,identified:null,showDate:!1,date:""},n}Object(a.a)(e,t);var n=e.prototype;return n.handleAnswer=function(t){this.setState({answer:t,identified:"N/A"!==t,showDate:!1,date:""})},n.handleSubmit=function(){var t=[{name:this.state.question,value:this.state.answer},{name:"infectionChestDone",value:!0}];if(this.state.showDate){var e={name:"infectionChestDate",value:this.state.date};t.push(e)}this.props.onUpdateMany(t,this.state.identified)},n.render=function(){var t=this;return i.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},i.a.createElement("p",null,"Are they symptomatic of infection?"),i.a.createElement("h3",null,"Chest"),i.a.createElement("p",null,i.a.createElement("button",{className:!0===this.state.showDate?r:"btn btn-primary",onClick:function(){return t.handleShowDate()}},"Yes"),i.a.createElement("button",{className:"A/T"===this.state.answer?r:"btn btn-primary",onClick:function(){return t.handleAnswer("A/T")}},"Already Treating"),i.a.createElement("button",{className:"N/A"===this.state.answer?r:"btn btn-primary",onClick:function(){return t.handleAnswer("N/A")}},"N/A")),!0===this.state.showDate&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"Date of Sample"),i.a.createElement("p",null,i.a.createElement("input",{className:"assessment-input",type:"date",value:this.state.date,onChange:function(e){return t.setState({date:e.target.value})}}))),i.a.createElement("p",{style:{marginTop:"4em"}},!1===this.state.showDate&&null!==this.state.answer||!0===this.state.showDate&&this.state.date.length>0?i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.handleSubmit()}},"Next"):i.a.createElement(i.a.Fragment,null)))},e}(i.a.Component);e.default=l}}]);
//# sourceMappingURL=component---src-pages-assessment-tool-infection-infection-chest-js-b9d86a8d226702753b8c.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,s){t.exports={notification:"Notification_notification__3Zb-R"}},19:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),n=s(6),i=s.n(n),o=s(7),r=s(8),l=s(9),b=s(12),u=s(11),d=s(4),j=s.n(d),h=s(0),f=function(t){var e=t.children;return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsx)("h2",{className:j.a.title,children:"Please leave feedback"}),e]})},O=s(5),p=s.n(O),_=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(h.jsx)("ul",{className:p.a.list,children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{className:p.a.button,onClick:s,children:t},t)}))})},v=s(10),x=s.n(v),m=function(t){var e=t.message;return Object(h.jsx)("p",{className:x.a.notification,children:e})},k=s(2),g=s.n(k),N=function(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:g.a.title,children:"Statistics"}),c?Object(h.jsxs)("ul",{className:g.a.list,children:[Object(h.jsxs)("p",{className:g.a.statistics,children:["Good: ",e]}),Object(h.jsxs)("p",{className:g.a.statistics,children:["Neutral: ",s]}),Object(h.jsxs)("p",{className:g.a.statistics,children:["Bad: ",a]}),Object(h.jsxs)("p",{className:g.a.statistics,children:["Total: ",c]}),Object(h.jsxs)("p",{className:g.a.statistics,children:["Positive feedback:"," ",Number.isNaN(n)?0:n,"%"]})]}):Object(h.jsx)(m,{message:"No feedback given"})]})},F=function(t){Object(b.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){var s=e.target.textContent.toLowerCase();t.setState((function(t){return Object(o.a)({},s,t[s]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(e){return 100*t.state.good/e},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=Math.round(this.countPositiveFeedbackPercentage(t));return Object(h.jsxs)(f,{children:[Object(h.jsx)(_,{options:this.state,onLeaveFeedback:this.onLeaveFeedback}),Object(h.jsx)(N,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})]})}}]),s}(a.Component);s(18);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={title:"Statistics_title__18i9_",list:"Statistics_list__3pIX_",statistics:"Statistics_statistics__H9Q2W"}},4:function(t,e,s){t.exports={section:"SectionTitle_section__3JUS4",title:"SectionTitle_title__PSMmN"}},5:function(t,e,s){t.exports={list:"FeedbackOptions_list__7AVzg",button:"FeedbackOptions_button__vqXf2"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a477b9f2.chunk.js.map
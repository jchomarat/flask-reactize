(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(9),i=n.n(c),a=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))}),u=n(3),o=n(4),d=n(7),j=n(6),h=n(2),l=n.n(h),b=n(5),f=n(0),p=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/reqres/users",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={isFetching:!0,users:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){t.ok&&t.json().then((function(t){e.setState({isFetching:!1,users:t.data.map((function(e){return e.last_name+" "+e.first_name}))})}))})).catch((function(){e.setState({isFetching:!1})}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"List of users"}),Object(f.jsx)("ul",{children:this.state.isFetching?Object(f.jsx)("i",{children:"Fetchin' data ..."}):this.state.users.map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]})}}]),n}(s.Component),m=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/reqres/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addUser=function(t){t.preventDefault();var n=document.getElementById("name").value,s=document.getElementById("job").value;m({name:n,job:s}).then((function(t){t.ok&&t.json().then((function(t){e.setState({userAdded:!0,newUserID:t.id})}))}))},e.state={userAdded:!1,newUserID:null},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Add a user"}),Object(f.jsxs)("form",{onSubmit:this.addUser,children:[Object(f.jsxs)("div",{class:"form-field",children:[Object(f.jsx)("label",{for:"name",children:"New user's name:"}),Object(f.jsx)("input",{type:"text",id:"name"})]}),Object(f.jsxs)("div",{class:"form-field",children:[Object(f.jsx)("label",{for:"job",children:"New user's job:"}),Object(f.jsx)("input",{type:"Text",id:"job"})]}),Object(f.jsx)("button",{type:"submit",children:"Add user"})]}),this.state.userAdded?Object(f.jsxs)("span",{class:"green",children:["User added successfuly. New ID: ",this.state.newUserID]}):Object(f.jsx)("span",{})]})}}]),n}(s.Component);i.a.render(Object(f.jsxs)(r.a.StrictMode,{children:[Object(f.jsxs)("h1",{children:["Demo site for ",Object(f.jsx)("i",{children:"flask-reactize"})]}),Object(f.jsx)(O,{}),Object(f.jsx)(x,{})]}),document.getElementById("root")),a()}},[[17,1,2]]]);
//# sourceMappingURL=main.80c50aba.chunk.js.map
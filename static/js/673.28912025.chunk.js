"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[673],{9673:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,o,s=t(168),c=t(6444),u=c.ZP.form(r||(r=(0,s.Z)(["\n  border: 1px solid black;\n  padding-left: 5px;\n  padding-top: 10px;\n"]))),i=c.ZP.input(a||(a=(0,s.Z)(["\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  border: 1px solid grey;\n  outline: none;\n  :hover,\n  :focus {\n    border-color: blue;\n  }\n"]))),l=c.ZP.button(o||(o=(0,s.Z)(["\n  background-color: #fff;\n  border: 1px solid blueviolet;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  transition: background-color 1s;\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),d=t(3329),p=function(){var n=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}();return(0,d.jsxs)(u,{onSubmit:function(n){n.preventDefault(),console.log(n.target.name.value),console.log(n.target.number.value)},children:[(0,d.jsxs)("label",{htmlFor:n,children:["Name",(0,d.jsx)(i,{type:"text",name:"name",id:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{htmlFor:n,children:["Number",(0,d.jsx)(i,{type:"tel",name:"number",id:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)(l,{type:"submit",children:"Add contact"})]})},b=function(){return(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)(i,{type:"text"})]})},h=t(2791),m=t(9434),f=t(5861),g=t(7757),x=t.n(g),v=t(1243),j=t(6382),k=(0,j.hg)("contacts/fetchAll",function(){var n=(0,f.Z)(x().mark((function n(e,t){var r,a;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.Z.get("/contacts");case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",t.rejectWithValue(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()),y=((0,j.hg)("contacts/addContact",function(){var n=(0,f.Z)(x().mark((function n(e,t){var r,a,o,s;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.name,a=e.number,n.prev=1,n.next=4,v.Z.post("/contacts",{name:r,number:a});case 4:return o=n.sent,s=o.data,n.abrupt("return",s);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",t.rejectWithValue(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}()),function(){var n=(0,m.I0)();return(0,h.useEffect)((function(){n(k())}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsx)(b,{})]})})}}]);
//# sourceMappingURL=673.28912025.chunk.js.map
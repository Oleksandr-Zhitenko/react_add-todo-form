(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(4),n=a.n(i),s=a(3),o=a(5),r=a(6),c=a(8),l=a(7),d=a(1),m=a.n(d),u=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=a(0),b=function(e){var t=e.todos;return Object(h.jsx)("ul",{className:"list-group-item",children:t.map((function(e){var t=u.find((function(t){return t.id===e.userId}));return Object(h.jsx)("li",{className:"list-group-item list-group-item-secondary",children:Object(h.jsxs)("div",{children:["Name:"," ",null===t||void 0===t?void 0:t.name,Object(h.jsx)("br",{}),e.title]})},e.id)}))})},p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={todos:Object(s.a)(p),title:"",name:"",chooseUser:"",writeTitle:""},e.addNewTodo=function(){e.state.title||e.setState({writeTitle:"Please enter the title"}),u.some((function(t){return e.state.name===t.name}))||e.setState({chooseUser:"Please choose a user"}),u.some((function(t){return e.state.name===t.name}))&&e.state.title&&e.setState((function(e){var t=e.todos[e.todos.length-1].id+1,a=e.title,i=u.findIndex((function(t){return t.name===e.name})),n={id:t,title:a,userId:u[i].id};return{todos:[].concat(Object(s.a)(e.todos),[n]),title:"",writeTitle:"",chooseUser:""}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{children:"Add todo form"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addNewTodo()},children:[Object(h.jsx)("div",{className:"input",children:Object(h.jsxs)("select",{name:"users",value:this.state.name,className:"form-control form-control-sm",onChange:function(t){return e.setState({name:t.target.value,chooseUser:""})},children:[Object(h.jsx)("option",{children:"Choose a user"}),u.map((function(e){return Object(h.jsx)("option",{children:e.name})}))]})}),Object(h.jsx)("div",{className:"errors",children:this.state.chooseUser&&this.state.chooseUser}),Object(h.jsx)("div",{className:"input",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-sm",placeholder:"Add ToDo",value:this.state.title,onChange:function(t){e.setState({title:t.target.value,writeTitle:""})}})}),Object(h.jsx)("div",{className:"errors",children:this.state.writeTitle&&this.state.writeTitle}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add"})})]}),Object(h.jsx)("p",{children:Object(h.jsx)(b,{todos:this.state.todos})})]})}}]),a}(m.a.Component);n.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a6276fd7.chunk.js.map
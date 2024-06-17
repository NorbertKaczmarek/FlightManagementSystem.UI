import{$ as k,A as U,B as H,C as G,D as w,E as N,F as A,G as gt,H as I,I as q,J as ft,K as vt,L as _t,Q,R as D,S as j,T as K,U as M,V,W as yt,Y as z,Z as Y,_ as J,a as ct,aa as X,b as lt,ba as St,c as O,ca as at,d as dt,e as pt,ea as b,f as B,fa as xt,g as ht,ga as bt,h as y,ha as Ct,i as $,ia as Ft,j as u,ja as Z,k as g,ka as tt,l as ut,la as et,m,n as f,o as S,p as c,pa as wt,q as o,qa as Et,r,s as v,t as C,u as p,v as d,x as a,y as _,z as R}from"./chunk-MUP74BBE.js";function Wt(i,n){i&1&&(o(0,"li",9)(1,"a",11),a(2,"Flight"),r()())}function Pt(i,n){i&1&&(o(0,"li",9)(1,"a",12),a(2,"Login"),r()())}function Nt(i,n){i&1&&(o(0,"li",9)(1,"a",13),a(2,"Sign up"),r()())}function At(i,n){if(i&1&&(o(0,"li",9)(1,"a",14),a(2),r()()),i&2){let s=d();m(2),_(s.email)}}function zt(i,n){if(i&1){let s=C();o(0,"li",9)(1,"a",15),p("click",function(){u(s);let t=d();return g(t.onLogout())}),a(2,"Logout"),r()()}}var It=(()=>{let n=class n{constructor(e,t){this.authService=e,this.router=t,this.isAuthenticated=!0,this.email=null}ngOnInit(){this.userSub=this.authService.token.subscribe(e=>{this.isAuthenticated=!!e,this.authService.getAccountInfo().subscribe(t=>{this.email=t.email})})}ngOnDestroy(){this.userSub.unsubscribe()}onLogout(){this.authService.logout()}onDemoLogin(){let e="demo1@demo.com",t="demo1",l="demo1@demo.com";this.authService.signup(e,t,l,"demo1@demo.com").subscribe(()=>{this.authService.login(e,l).subscribe(x=>{localStorage.setItem("authToken",x),this.router.navigate(["flight"])},x=>{})},x=>{this.authService.login(e,l).subscribe(L=>{localStorage.setItem("authToken",L),this.router.navigate(["flight"])},L=>{})})}};n.\u0275fac=function(t){return new(t||n)(f(Y),f(M))},n.\u0275cmp=y({type:n,selectors:[["app-header"]],decls:17,vars:5,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"navbar-nav","mb-2","d-flex"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",2,"cursor","pointer",3,"click"],["routerLinkActive","active","routerLink","/flight",1,"nav-link"],["routerLinkActive","active","routerLink","/login",1,"nav-link"],["routerLinkActive","active","routerLink","/signup",1,"nav-link"],["routerLinkActive","active","routerLink","/account",1,"nav-link"],[1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(t,l){t&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Flight Management System"),r(),o(4,"button",3),v(5,"span",4),r(),o(6,"div",5)(7,"ul",6),S(8,Wt,3,0,"li",7),r(),o(9,"ul",8)(10,"li",9)(11,"a",10),p("click",function(){return l.onDemoLogin()}),a(12,"Demo login"),r()(),S(13,Pt,3,0,"li",7)(14,Nt,3,0,"li",7)(15,At,3,1,"li",7)(16,zt,3,0,"li",7),r()()()()),t&2&&(m(8),c("ngIf",l.isAuthenticated),m(5),c("ngIf",!l.isAuthenticated),m(),c("ngIf",!l.isAuthenticated),m(),c("ngIf",l.isAuthenticated),m(),c("ngIf",l.isAuthenticated))},dependencies:[I,V,yt]});let i=n;return i})();var le=(()=>{let n=class n{constructor(e){this.authService=e,this.title="FlightManagementSystem.UI"}ngOnInit(){this.authService.autoLogin()}};n.\u0275fac=function(t){return new(t||n)(f(Y))},n.\u0275cmp=y({type:n,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(t,l){t&1&&(o(0,"div",0),v(1,"app-header")(2,"router-outlet"),r())},dependencies:[K,It]});let i=n;return i})(),E=function(i){return i[i.ASC=0]="ASC",i[i.DESC=1]="DESC",i}(E||{});var T=(()=>{let n=class n{notifyOther(e){e&&this.notify.next(e)}constructor(e){this.http=e,this.url="flight",this.notify=new ct(""),this.notifyObservable$=this.notify.asObservable()}getFlights(e="",t=1,l=5,h="",x=E.ASC){let L=new vt().set("SearchPhrase",e).set("PageNumber",t).set("PageSize",l).set("SortBy",h).set("SortDirection",x.toString());return this.http.get(`${D.apiUrl}/${this.url}`,{params:L})}getFlightById(e){return this.http.get(`${D.apiUrl}/${this.url}/${e}`)}updateFlight(e){return this.http.post(`${D.apiUrl}/${this.url}/${e.id}`,e)}updateFlightWithId(e,t){return this.http.post(`${D.apiUrl}/${this.url}/${e}`,t).pipe(O(this.handleError))}createFlight(e){return this.http.post(`${D.apiUrl}/${this.url}`,e,{observe:"response"}).pipe(O(this.handleError))}deleteFlight(e){return this.http.delete(`${D.apiUrl}/${this.url}/${e.id}`).pipe(O(this.handleError))}handleError(e){let t="An unknown error occurred!";if(!e.status)return lt(()=>new Error(t));switch(e.status){case 401:t="You must be logged in to do it."}return e.error&&(e.error.errors?(t="",Object.values(e.error.errors).forEach(h=>{t+=h})):t=e.error),lt(()=>new Error(t))}};n.\u0275fac=function(t){return new(t||n)(ht(_t))},n.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();function $t(i,n){if(i&1&&(o(0,"div",12)(1,"p"),a(2),r()()),i&2){let s=d(2);m(2),_(s.error)}}function Rt(i,n){if(i&1){let s=C();o(0,"div")(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),a(5," Manage Flight "),v(6,"span",5),r(),o(7,"ul",6)(8,"li",7)(9,"a",8),p("click",function(){u(s);let t=d();return g(t.onEditFlight())}),a(10,"Edit Flight"),r()(),o(11,"li",7)(12,"a",8),p("click",function(){u(s);let t=d();return g(t.onDeleteFlight())}),a(13,"Delete Flight"),r()()()()()(),v(14,"hr"),S(15,$t,3,1,"div",9),o(16,"table",10)(17,"tbody")(18,"tr")(19,"th",11),a(20,"Numer lotu"),r(),o(21,"td"),a(22),r()(),o(23,"tr")(24,"th",11),a(25,"Data wylotu"),r(),o(26,"td"),a(27),N(28,"date"),r()(),o(29,"tr")(30,"th",11),a(31,"Miejsce wylotu"),r(),o(32,"td"),a(33),r()(),o(34,"tr")(35,"th",11),a(36,"Miejsce przylotu"),r(),o(37,"td"),a(38),r()(),o(39,"tr")(40,"th",11),a(41,"Typ samolotu"),r(),o(42,"td"),a(43),r()()()()()}if(i&2){let s=d();m(15),c("ngIf",s.error),m(7),_(s.flight.numerLotu),m(5),_(A(28,6,s.flight.dataWylotu,"yyyy-MM-dd HH:mm")),m(6),_(s.flight.miejsceWylotu),m(5),_(s.flight.miejscePrzylotu),m(5),_(s.flight.typSamolotu)}}var Mt=(()=>{let n=class n{constructor(e,t,l,h){this.flightService=e,this.route=t,this.router=l,this.titleService=h,this.flight=null,this.error=null}ngOnInit(){this.route.paramMap.pipe(dt(e=>(this.id=Number(e.get("id")),this.flightService.getFlightById(this.id)))).subscribe(e=>{this.flight=e,this.titleService.setTitle(`${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`)})}fetchFlight(){this.flightService.getFlightById(this.id).subscribe(e=>this.flight=e)}onEditFlight(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteFlight(){this.flightService.deleteFlight(this.flight).subscribe(()=>{this.flightService.notifyOther({refresh:!0}),this.router.navigate(["/flight"])},e=>{this.error=e.message})}};n.\u0275fac=function(t){return new(t||n)(f(T),f(j),f(M),f(Q))},n.\u0275cmp=y({type:n,selectors:[["app-flight-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"d-flex","justify-content-between","p-2"],[1,"col-xs-12"],[1,"btn-group","mb-3"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[1,"dropdown-item"],[2,"cursor","pointer",3,"click"],["class","alert alert-danger",4,"ngIf"],[1,"table"],["scope","row"],[1,"alert","alert-danger"]],template:function(t,l){t&1&&S(0,Rt,44,9,"div",0),t&2&&c("ngIf",l.flight)},dependencies:[I,q]});let i=n;return i})();var st=function(i){return i[i.Embraer=0]="Embraer",i[i.Boeing=1]="Boeing",i[i.Airbus=2]="Airbus",i}(st||{}),rt=class{constructor(n,s,e,t,l){this.numerLotu=n,this.dataWylotu=s,this.miejsceWylotu=e,this.miejscePrzylotu=t,this.typSamolotu=l}};function Ht(i,n){i&1&&(o(0,"span"),a(1,"Save"),r())}function Gt(i,n){i&1&&(o(0,"span"),a(1,"Create"),r())}function qt(i,n){if(i&1&&(o(0,"div",26)(1,"p"),a(2),r()()),i&2){let s=d(2);m(2),_(s.error)}}function Qt(i,n){if(i&1){let s=C();o(0,"div")(1,"div",1)(2,"div",2)(3,"form",3),p("ngSubmit",function(){u(s);let t=d();return g(t.onSubmit())}),o(4,"div",4)(5,"div",5)(6,"button",6),S(7,Ht,2,0,"span",0)(8,Gt,2,0,"span",0),r(),a(9," | "),o(10,"button",7),p("click",function(){u(s);let t=d();return g(t.onCancel())}),a(11," Cancel "),r(),a(12," | "),o(13,"button",8),p("click",function(){u(s);let t=d();return g(t.onFeedTestData())}),a(14," Feed Test Data "),r()()(),v(15,"hr"),o(16,"div",1)(17,"div",2),S(18,qt,3,1,"div",9),o(19,"div",10)(20,"label",11),a(21,"Numer lotu"),r(),v(22,"input",12),r()()(),o(23,"div",1)(24,"div",2)(25,"div",10)(26,"label",13),a(27,"Data wylotu"),r(),v(28,"input",14),r(),o(29,"div",10)(30,"label",15),a(31,"Godzina wylotu"),r(),v(32,"input",16),r()()(),o(33,"div",1)(34,"div",2)(35,"div",10)(36,"label",17),a(37,"Miejsce wylotu"),r(),v(38,"input",18),r()()(),o(39,"div",1)(40,"div",2)(41,"div",10)(42,"label",19),a(43,"Miejsce przylotu"),r(),v(44,"input",20),r()()(),o(45,"div",1)(46,"div",2)(47,"div",10)(48,"label",21),a(49,"Typ samolotu"),r(),o(50,"select",22)(51,"option",23),a(52,"Embraer"),r(),o(53,"option",24),a(54,"Boeing"),r(),o(55,"option",25),a(56,"Airbus"),r()()()()()()()()()}if(i&2){let s=d();m(3),c("formGroup",s.flightForm),m(3),c("disabled",!s.flightForm.valid),m(),c("ngIf",s.editMode),m(),c("ngIf",!s.editMode),m(10),c("ngIf",s.error)}}var mt=(()=>{let n=class n{constructor(e,t,l,h){this.route=e,this.flightService=t,this.router=l,this.titleService=h,this.flight=null,this.editMode=!1,this.error=null}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=e.id!=null,this.initForm(),this.editMode?this.flightService.getFlightById(this.id).subscribe(t=>{this.flight=t,this.titleService.setTitle(`${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`),this.initForm()}):this.titleService.setTitle("New Flight")})}onSubmit(){let e=this.flightForm.value.dataWylotu,t=this.flightForm.value.czasWylotu,l=new rt(this.flightForm.value.numerLotu,new Date(`${e}T${t}`),this.flightForm.value.miejsceWylotu,this.flightForm.value.miejscePrzylotu,this.flightForm.value.typSamolotu);this.editMode?this.flightService.updateFlightWithId(this.id,l).subscribe(()=>{this.flightService.notifyOther({refresh:!0}),this.onCancel()},h=>{this.error=h.message}):this.flightService.createFlight(l).subscribe(h=>{let x=h.headers.get("location");this.router.navigate([x]),this.flightService.notifyOther({refresh:!0})},h=>{this.error=h.message})}refreshGridInAnotherComponent(){this.flightService.notifyOther({refresh:!0})}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}getDateFromDate(e){return e.toISOString().slice(0,10)}getTimeFromDate(e){return e.toTimeString().slice(0,5)}initForm(){let e=null,t=this.getDateFromDate(new Date),l=this.getTimeFromDate(new Date),h="",x="",L=null;this.editMode&&(this.fetchFlight(),this.flight&&(e=this.flight.numerLotu,t=this.getDateFromDate(new Date(this.flight.dataWylotu)),l=this.getTimeFromDate(new Date(this.flight.dataWylotu)),h=this.flight.miejsceWylotu,x=this.flight.miejscePrzylotu,L=this.flight.typSamolotu)),this.flightForm=new at({numerLotu:new b(e,k.required),dataWylotu:new b(t,k.required),czasWylotu:new b(l,k.required),miejsceWylotu:new b(h,k.required),miejscePrzylotu:new b(x,k.required),typSamolotu:new b(L,k.required)})}fetchFlight(){this.flightService.getFlightById(this.id).subscribe(e=>this.flight=e)}onFeedTestData(){this.flightForm=new at({numerLotu:new b(Math.floor(Math.random()*10*Math.random()*100)),dataWylotu:new b(this.getDateFromDate(new Date(2010+Math.floor(Math.random()*14),Math.floor(Math.random()*12),Math.floor(Math.random()*30)))),czasWylotu:new b(this.getTimeFromDate(new Date(2024,1,1,Math.floor(Math.random()*24),Math.floor(Math.random()*60)))),miejsceWylotu:new b(ot[Math.floor(Math.random()*ot.length)]),miejscePrzylotu:new b(ot[Math.floor(Math.random()*ot.length)]),typSamolotu:new b(st[Math.floor(Math.random()*3)])})}};n.\u0275fac=function(t){return new(t||n)(f(j),f(T),f(M),f(Q))},n.\u0275cmp=y({type:n,selectors:[["app-flight-edit"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-xs-12"],[3,"ngSubmit","formGroup"],[1,"row","d-flex","justify-content-between","p-2"],[1,"col-xs-12","mb-3"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["class","alert alert-danger",4,"ngIf"],[1,"form-group"],["for","numerLotu"],["type","text","id","numerLotu","formControlName","numerLotu",1,"form-control"],["for","dataWylotu"],["type","date","id","dataWylotu","formControlName","dataWylotu",1,"form-control"],["for","czasWylotu"],["type","time","id","czasWylotu","formControlName","czasWylotu",1,"form-control"],["for","miejsceWylotu"],["type","text","id","miejsceWylotu","formControlName","miejsceWylotu",1,"form-control"],["for","miejscePrzylotu"],["type","text","id","miejscePrzylotu","formControlName","miejscePrzylotu",1,"form-control"],["for","typSamolotu"],["id","typSamolotu","formControlName","typSamolotu",1,"form-select"],["selected","","value","Embraer"],["value","Boeing"],["value","Airbus"],[1,"alert","alert-danger"]],template:function(t,l){t&1&&S(0,Qt,57,5,"div",0),t&2&&c("ngIf",l.flightForm)},dependencies:[bt,tt,et,J,Z,X,St,Ct,Ft,I]});let i=n;return i})(),ot=["Warszawa","Krak\xF3w","Gda\u0144sk","Wroc\u0142aw","Pozna\u0144","Szczecin","\u0141\xF3d\u017A","Katowice","Gdynia","Cz\u0119stochowa"];var Tt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=y({type:n,selectors:[["app-flight-start"]],decls:0,vars:0,template:function(t,l){}});let i=n;return i})();var Kt=["app-flight-item",""],P=i=>[i],Lt=(()=>{let n=class n{constructor(e){this.flightService=e,this.flightToUpdate=new ut}editFlight(e){this.flightService.getFlightById(this.index).subscribe(t=>this.flightToUpdate.emit(t))}};n.\u0275fac=function(t){return new(t||n)(f(T))},n.\u0275cmp=y({type:n,selectors:[["","app-flight-item",""]],inputs:{flight:"flight",index:"index"},outputs:{flightToUpdate:"flightToUpdate"},attrs:Kt,decls:14,vars:30,consts:[[3,"routerLink"]],template:function(t,l){t&1&&(o(0,"td",0),a(1),r(),o(2,"td",0),a(3),N(4,"date"),r(),o(5,"td",0),a(6),N(7,"date"),r(),o(8,"td",0),a(9),r(),o(10,"td",0),a(11),r(),o(12,"td",0),a(13),r()),t&2&&(c("routerLink",w(18,P,l.flight.id)),m(),_(l.flight.numerLotu),m(),c("routerLink",w(20,P,l.flight.id)),m(),_(A(4,12,l.flight.dataWylotu,"yyyy-MM-dd")),m(2),c("routerLink",w(22,P,l.flight.id)),m(),_(A(7,15,l.flight.dataWylotu,"HH:mm")),m(2),c("routerLink",w(24,P,l.flight.id)),m(),_(l.flight.miejsceWylotu),m(),c("routerLink",w(26,P,l.flight.id)),m(),_(l.flight.miejscePrzylotu),m(),c("routerLink",w(28,P,l.flight.id)),m(),_(l.flight.typSamolotu))},dependencies:[V,q]});let i=n;return i})();var Jt=i=>[i];function Xt(i,n){i&1&&(o(0,"div",10)(1,"p"),a(2,"Loading..."),r()())}function Zt(i,n){if(i&1){let s=C();o(0,"tr",16),p("flightToUpdate",function(t){u(s);let l=d(2);return g(l.editFlight(t))}),r()}if(i&2){let s=n.$implicit;c("flight",s)("index",s.id)("routerLink",w(3,Jt,s.id))}}function te(i,n){i&1&&(o(0,"tr")(1,"td",17),a(2,"No flights found"),r()())}function ee(i,n){if(i&1){let s=C();o(0,"div",11)(1,"table",12)(2,"thead")(3,"tr")(4,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("NumerLotu"))}),a(5,"Numer lotu"),r(),o(6,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("DataWylotu"))}),a(7,"Data wylotu"),r(),o(8,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("DataWylotu"))}),a(9,"Czas wylotu"),r(),o(10,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("MiejsceWylotu"))}),a(11,"Miejsce wylotu"),r(),o(12,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("MiejscePrzylotu"))}),a(13,"Miejsce przylotu"),r(),o(14,"th",13),p("click",function(){u(s);let t=d();return g(t.Sort("TypSamolotu"))}),a(15,"Typ samolotu"),r()()(),o(16,"tbody"),S(17,Zt,1,5,"tr",14)(18,te,3,0,"tr",15),r()()()}if(i&2){let s=d();m(17),c("ngForOf",s.flights),m(),c("ngIf",s.flights.length==0)}}function ie(i,n){if(i&1&&(o(0,"option",21),a(1),r()),i&2){let s=n.$implicit;c("ngValue",s),m(),R(" ",s," ")}}function ne(i,n){if(i&1){let s=C();o(0,"div",1)(1,"select",18),G("ngModelChange",function(t){u(s);let l=d();return H(l.PageNumber,t)||(l.PageNumber=t),g(t)}),p("change",function(){u(s);let t=d();return g(t.onQueryChange())}),S(2,ie,2,2,"option",19),r(),o(3,"select",20),G("ngModelChange",function(t){u(s);let l=d();return H(l.PageSize,t)||(l.PageSize=t),g(t)}),p("change",function(){u(s);let t=d();return g(t.onQueryChange())}),o(4,"option",21),a(5,"5 items per page"),r(),o(6,"option",21),a(7,"10 items per page"),r(),o(8,"option",21),a(9,"15 items per page"),r()(),o(10,"button",22),a(11),r(),o(12,"button",22),a(13),r()()}if(i&2){let s=d();m(),U("ngModel",s.PageNumber),m(),c("ngForOf",s.totalPagesArray),m(),U("ngModel",s.PageSize),m(),c("ngValue",5),m(2),c("ngValue",10),m(2),c("ngValue",15),m(3),R(" Total Pages: ",s.FlightResponse.totalPages," "),m(2),R(" Total Items: ",s.FlightResponse.totalItemsCount," ")}}var Dt=(()=>{let n=class n{constructor(e,t,l){this.flightService=e,this.router=t,this.route=l,this.flights=[],this.isLoading=!1,this.SearchPhrase="",this.PageNumber=1,this.PageSize=5,this.SortBy="Id",this.SortDirection=E.DESC,this.totalPagesArray=[]}ngOnInit(){this.isLoading=!0,this.fetchData(),this.flightService.notifyObservable$.subscribe(e=>{e.refresh&&this.fetchData()})}fetchData(){this.flightService.getFlights(this.SearchPhrase,this.PageNumber,this.PageSize,this.SortBy,this.SortDirection).subscribe(e=>{this.flights=e.items,this.FlightResponse=e,this.isLoading=!1,this.totalPagesArray=[];for(let t=1;t<=this.FlightResponse.totalPages;t++)this.totalPagesArray.push(t)})}initSearch(){this.fetchData()}Sort(e){this.SortBy==e?this.SortDirection==E.ASC?this.SortDirection=E.DESC:this.SortDirection=E.ASC:(this.SortBy=e,this.SortDirection=E.ASC),this.onQueryChange()}initNewFlight(){this.router.navigate(["new"],{relativeTo:this.route})}onQueryChange(){this.fetchData()}};n.\u0275fac=function(t){return new(t||n)(f(T),f(M),f(j))},n.\u0275cmp=y({type:n,selectors:[["app-flight-list"]],inputs:{flights:"flights"},decls:16,vars:4,consts:[["style","text-align: center",4,"ngIf"],[1,"d-flex","justify-content-between","p-2"],[1,"col-xs-3","col-sm-auto"],[1,"btn","btn-success",3,"click"],[1,"mb-3","row","justify-content-md-evenly"],["for","table-complete-search",1,"col-xs-3","col-sm-auto","col-form-label"],["id","table-complete-search","type","text","name","searchTerm",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"btn","btn-primary",3,"click"],["class","table",4,"ngIf"],["class","d-flex justify-content-between p-2",4,"ngIf"],[2,"text-align","center"],[1,"table"],[1,"table","table-striped"],[3,"click"],["app-flight-item","",3,"flight","index","routerLink","flightToUpdate",4,"ngFor","ngForOf"],[4,"ngIf"],["app-flight-item","",3,"flightToUpdate","flight","index","routerLink"],["colspan","6",2,"text-align","center"],["name","PageNumber",1,"form-select","bg-light",2,"width","auto",3,"ngModelChange","change","ngModel"],[3,"ngValue",4,"ngFor","ngForOf"],["name","PageSize",1,"form-select","bg-light",2,"width","auto",3,"ngModelChange","change","ngModel"],[3,"ngValue"],[1,"btn","btn-light"]],template:function(t,l){t&1&&(S(0,Xt,3,0,"div",0),o(1,"div",1)(2,"div",2)(3,"button",3),p("click",function(){return l.initNewFlight()}),a(4," Create New Flight "),r()(),o(5,"div",4)(6,"label",5),a(7,"Full text search:"),r(),o(8,"div",2)(9,"input",6),G("ngModelChange",function(x){return H(l.SearchPhrase,x)||(l.SearchPhrase=x),x}),p("input",function(){return l.onQueryChange()}),r()(),o(10,"div",2)(11,"button",7),p("click",function(){return l.initSearch()}),a(12,"Search"),r()()()(),v(13,"hr"),S(14,ee,19,2,"div",8)(15,ne,14,8,"div",9)),t&2&&(c("ngIf",l.isLoading),m(9),U("ngModel",l.SearchPhrase),m(5),c("ngIf",!l.isLoading),m(),c("ngIf",l.FlightResponse))},dependencies:[V,tt,et,J,Z,X,xt,gt,I,Lt]});let i=n;return i})();var kt=(()=>{let n=class n{constructor(){}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=y({type:n,selectors:[["app-flight"]],decls:7,vars:0,consts:[[1,"row"],[1,"col-lg-8"],[1,"col-lg-4"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"div",1),v(2,"br")(3,"app-flight-list"),r(),o(4,"div",2),v(5,"br")(6,"router-outlet"),r()())},dependencies:[K,Dt]});let i=n;return i})();var oe=[{path:"",title:"flight",component:kt,children:[{path:"",component:Tt},{path:"new",component:mt},{path:":id",component:Mt},{path:":id/edit",component:mt}]}],jt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=$({type:n}),n.\u0275inj=B({imports:[z.forChild(oe),z]});let i=n;return i})();var Qe=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=$({type:n}),n.\u0275inj=B({imports:[z,Et,wt,jt,ft]});let i=n;return i})();export{le as a,Qe as b};

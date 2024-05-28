import{A as C,B as w,C as L,D as z,E as ot,F as D,G as U,H as nt,I as lt,N as A,O as E,P as j,Q as at,R as T,S as P,V as k,W as st,X as I,Y as mt,Z as dt,_ as K,a as Z,aa as f,b as H,c as O,ca as ct,d as tt,da as ht,ea as pt,f as et,fa as ut,g as V,ga as ft,h as it,ha as gt,i as g,j as B,k as S,l as b,la as vt,m as rt,ma as yt,n as m,o as c,p as F,q as d,r as n,s as o,t as h,u as M,v,w as p,y as l,z as y}from"./chunk-327CQD4X.js";var x=(()=>{let e=class e{constructor(t){this.http=t,this.url="flight",this.notify=new Z(""),this.notifyObservable$=this.notify.asObservable()}getFlights(){return this.http.get(`${E.apiUrl}/${this.url}`)}getFlightById(t){return this.http.get(`${E.apiUrl}/${this.url}/${t}`)}updateFlight(t){return this.http.post(`${E.apiUrl}/${this.url}/${t.id}`,t)}updateFlightWithId(t,r){return this.http.post(`${E.apiUrl}/${this.url}/${t}`,r).pipe(O(this.handleError))}createFlight(t){return this.http.post(`${E.apiUrl}/${this.url}`,t,{observe:"response"}).pipe(O(this.handleError))}deleteFlight(t){return this.http.delete(`${E.apiUrl}/${this.url}/${t.id}`).pipe(O(this.handleError))}notifyOther(t){t&&this.notify.next(t)}handleError(t){let r="An unknown error occurred!";if(!t.status)return H(()=>new Error(r));switch(t.status){case 401:r="You must be logged in to do it."}return H(()=>new Error(r))}};e.\u0275fac=function(r){return new(r||e)(it(lt))},e.\u0275prov=et({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Et(i,e){if(i&1&&(n(0,"div",10)(1,"p"),l(2),o()()),i&2){let s=p(2);m(2),y(s.error)}}function It(i,e){if(i&1){let s=M();n(0,"div"),h(1,"br"),n(2,"div",1)(3,"div",2),F(4,Et,3,1,"div",3),n(5,"div",4)(6,"button",5),l(7," Manage Flight "),h(8,"span",6),o(),n(9,"ul",7)(10,"li",8)(11,"a",9),v("click",function(){S(s);let r=p();return b(r.onEditFlight())}),l(12,"Edit Flight"),o()(),n(13,"li",8)(14,"a",9),v("click",function(){S(s);let r=p();return b(r.onDeleteFlight())}),l(15,"Delete Flight"),o()()()()()(),h(16,"hr"),n(17,"div",1)(18,"div",2)(19,"h1"),l(20),o()()(),n(21,"div",1)(22,"div",2),l(23),o()(),n(24,"div",1)(25,"div",2),l(26),L(27,"date"),o()(),n(28,"div",1)(29,"div",2),l(30),o()(),n(31,"div",1)(32,"div",2),l(33),o()(),n(34,"div",1)(35,"div",2),l(36),o()()()}if(i&2){let s=p();m(4),d("ngIf",s.error),m(16),C("ID: ",s.flight.id,""),m(3),C("Numer lotu: ",s.flight.numerLotu,""),m(3),C("Data wylotu: ",z(27,7,s.flight.dataWylotu,"yyyy-MM-dd HH:mm"),""),m(4),C("Miejsce wylotu: ",s.flight.miejsceWylotu,""),m(3),C("Miejsce przylotu: ",s.flight.miejscePrzylotu,""),m(3),C("Typ samolotu: ",s.flight.typSamolotu,"")}}var Ft=(()=>{let e=class e{constructor(t,r,a,u){this.flightService=t,this.route=r,this.router=a,this.titleService=u,this.flight=null,this.error=null}ngOnInit(){this.route.paramMap.pipe(tt(t=>(this.id=Number(t.get("id")),this.flightService.getFlightById(this.id)))).subscribe(t=>{this.flight=t,this.titleService.setTitle(`${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`)})}fetchFlight(){this.flightService.getFlightById(this.id).subscribe(t=>this.flight=t)}onEditFlight(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteFlight(){this.flightService.deleteFlight(this.flight).subscribe(()=>{this.flightService.notifyOther({refresh:!0}),this.router.navigate(["/flight"])},t=>{this.error=t.message})}};e.\u0275fac=function(r){return new(r||e)(c(x),c(j),c(T),c(A))},e.\u0275cmp=g({type:e,selectors:[["app-flight-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-xs-12"],["class","alert alert-danger",4,"ngIf"],[1,"btn-group"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[1,"dropdown-item"],[2,"cursor","pointer",3,"click"],[1,"alert","alert-danger"]],template:function(r,a){r&1&&F(0,It,37,10,"div",0),r&2&&d("ngIf",a.flight)},dependencies:[D,U]});let i=e;return i})();var J=function(i){return i[i.Embraer=0]="Embraer",i[i.Boeing=1]="Boeing",i[i.Airbus=2]="Airbus",i}(J||{}),G=class{constructor(e,s,t,r,a){this.numerLotu=e,this.dataWylotu=s,this.miejsceWylotu=t,this.miejscePrzylotu=r,this.typSamolotu=a}};function Mt(i,e){if(i&1&&(n(0,"div",24)(1,"p"),l(2),o()()),i&2){let s=p(2);m(2),y(s.error)}}function Dt(i,e){i&1&&(n(0,"span"),l(1,"Save"),o())}function jt(i,e){i&1&&(n(0,"span"),l(1,"Create"),o())}function Tt(i,e){if(i&1){let s=M();n(0,"div")(1,"div",1)(2,"div",2),F(3,Mt,3,1,"div",3),n(4,"form",4),v("ngSubmit",function(){S(s);let r=p();return b(r.onSubmit())}),n(5,"div",1)(6,"div",2)(7,"button",5),F(8,Dt,2,0,"span",0)(9,jt,2,0,"span",0),o(),l(10," | "),n(11,"button",6),v("click",function(){S(s);let r=p();return b(r.onCancel())}),l(12," Cancel "),o(),l(13," | "),n(14,"button",7),v("click",function(){S(s);let r=p();return b(r.onFeedTestData())}),l(15," Feed Test Data "),o()()(),n(16,"div",1)(17,"div",2)(18,"div",8)(19,"label",9),l(20,"Numer lotu"),o(),h(21,"input",10),o()()(),n(22,"div",1)(23,"div",2)(24,"div",8)(25,"label",11),l(26,"Data wylotu"),o(),h(27,"input",12),o(),n(28,"div",8)(29,"label",13),l(30,"Godzina wylotu"),o(),h(31,"input",14),o()()(),n(32,"div",1)(33,"div",2)(34,"div",8)(35,"label",15),l(36,"Miejsce wylotu"),o(),h(37,"input",16),o()()(),n(38,"div",1)(39,"div",2)(40,"div",8)(41,"label",17),l(42,"Miejsce przylotu"),o(),h(43,"input",18),o()()(),n(44,"div",1)(45,"div",2)(46,"div",8)(47,"label",19),l(48,"Typ samolotu"),o(),n(49,"select",20)(50,"option",21),l(51,"Embraer"),o(),n(52,"option",22),l(53,"Boeing"),o(),n(54,"option",23),l(55,"Airbus"),o()()()()()()()()()}if(i&2){let s=p();m(3),d("ngIf",s.error),m(),d("formGroup",s.flightForm),m(3),d("disabled",!s.flightForm.valid),m(),d("ngIf",s.editMode),m(),d("ngIf",!s.editMode)}}var Q=(()=>{let e=class e{constructor(t,r,a,u){this.route=t,this.flightService=r,this.router=a,this.titleService=u,this.flight=null,this.editMode=!1,this.error=null}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.editMode=t.id!=null,this.initForm(),this.editMode?this.flightService.getFlightById(this.id).subscribe(r=>{this.flight=r,this.titleService.setTitle(`${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`),this.initForm()}):this.titleService.setTitle("New Flight")})}onSubmit(){let t=this.flightForm.value.dataWylotu,r=this.flightForm.value.czasWylotu,a=new G(this.flightForm.value.numerLotu,new Date(`${t}T${r}`),this.flightForm.value.miejsceWylotu,this.flightForm.value.miejscePrzylotu,this.flightForm.value.typSamolotu);this.editMode?this.flightService.updateFlightWithId(this.id,a).subscribe(()=>{this.flightService.notifyOther({refresh:!0}),this.onCancel()},u=>{this.error=u.message}):this.flightService.createFlight(a).subscribe(u=>{let $=u.headers.get("location");this.router.navigate([$]),this.flightService.notifyOther({refresh:!0})},u=>{this.error=u.message})}refreshGridInAnotherComponent(){this.flightService.notifyOther({refresh:!0})}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}getDateFromDate(t){return t.toISOString().slice(0,10)}getTimeFromDate(t){return t.toTimeString().slice(0,5)}initForm(){let t=null,r=this.getDateFromDate(new Date),a=this.getTimeFromDate(new Date),u="",$="",X=null;this.editMode&&(this.fetchFlight(),this.flight&&(t=this.flight.numerLotu,r=this.getDateFromDate(new Date(this.flight.dataWylotu)),a=this.getTimeFromDate(new Date(this.flight.dataWylotu)),u=this.flight.miejsceWylotu,$=this.flight.miejscePrzylotu,X=this.flight.typSamolotu)),this.flightForm=new K({numerLotu:new f(t,I.required),dataWylotu:new f(r,I.required),czasWylotu:new f(a,I.required),miejsceWylotu:new f(u,I.required),miejscePrzylotu:new f($,I.required),typSamolotu:new f(X,I.required)})}fetchFlight(){this.flightService.getFlightById(this.id).subscribe(t=>this.flight=t)}onFeedTestData(){this.flightForm=new K({numerLotu:new f(Math.floor(Math.random()*10*Math.random()*100)),dataWylotu:new f(this.getDateFromDate(new Date(2010+Math.floor(Math.random()*14),Math.floor(Math.random()*12),Math.floor(Math.random()*30)))),czasWylotu:new f(this.getTimeFromDate(new Date(2024,1,1,Math.floor(Math.random()*24),Math.floor(Math.random()*60)))),miejsceWylotu:new f(q[Math.floor(Math.random()*q.length)]),miejscePrzylotu:new f(q[Math.floor(Math.random()*q.length)]),typSamolotu:new f(J[Math.floor(Math.random()*3)])})}};e.\u0275fac=function(r){return new(r||e)(c(j),c(x),c(T),c(A))},e.\u0275cmp=g({type:e,selectors:[["app-flight-edit"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-xs-12"],["class","alert alert-danger",4,"ngIf"],[3,"ngSubmit","formGroup"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"form-group"],["for","numerLotu"],["type","text","id","numerLotu","formControlName","numerLotu",1,"form-control"],["for","dataWylotu"],["type","date","id","dataWylotu","formControlName","dataWylotu",1,"form-control"],["for","czasWylotu"],["type","time","id","czasWylotu","formControlName","czasWylotu",1,"form-control"],["for","miejsceWylotu"],["type","text","id","miejsceWylotu","formControlName","miejsceWylotu",1,"form-control"],["for","miejscePrzylotu"],["type","text","id","miejscePrzylotu","formControlName","miejscePrzylotu",1,"form-control"],["for","typSamolotu"],["id","typSamolotu","formControlName","typSamolotu",1,"form-select"],["selected","","value","Embraer"],["value","Boeing"],["value","Airbus"],[1,"alert","alert-danger"]],template:function(r,a){r&1&&F(0,Tt,56,5,"div",0),r&2&&d("ngIf",a.flightForm)},dependencies:[ct,ft,gt,st,ut,mt,dt,ht,pt,D]});let i=e;return i})(),q=["Warszawa","Krak\xF3w","Gda\u0144sk","Wroc\u0142aw","Pozna\u0144","Szczecin","\u0141\xF3d\u017A","Katowice","Gdynia","Cz\u0119stochowa"];var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-flight-start"]],decls:0,vars:0,template:function(r,a){}});let i=e;return i})();var Wt=["app-flight-item",""],W=i=>[i],St=(()=>{let e=class e{constructor(t){this.flightService=t,this.flightToUpdate=new rt}editFlight(t){this.flightService.getFlightById(this.index).subscribe(r=>this.flightToUpdate.emit(r))}};e.\u0275fac=function(r){return new(r||e)(c(x))},e.\u0275cmp=g({type:e,selectors:[["","app-flight-item",""]],inputs:{flight:"flight",index:"index"},outputs:{flightToUpdate:"flightToUpdate"},attrs:Wt,decls:14,vars:30,consts:[[3,"routerLink"]],template:function(r,a){r&1&&(n(0,"td",0),l(1),o(),n(2,"td",0),l(3),L(4,"date"),o(),n(5,"td",0),l(6),L(7,"date"),o(),n(8,"td",0),l(9),o(),n(10,"td",0),l(11),o(),n(12,"td",0),l(13),o()),r&2&&(d("routerLink",w(18,W,a.flight.id)),m(),y(a.flight.numerLotu),m(),d("routerLink",w(20,W,a.flight.id)),m(),y(z(4,12,a.flight.dataWylotu,"yyyy-MM-dd")),m(2),d("routerLink",w(22,W,a.flight.id)),m(),y(z(7,15,a.flight.dataWylotu,"HH:mm")),m(2),d("routerLink",w(24,W,a.flight.id)),m(),y(a.flight.miejsceWylotu),m(),d("routerLink",w(26,W,a.flight.id)),m(),y(a.flight.miejscePrzylotu),m(),d("routerLink",w(28,W,a.flight.id)),m(),y(a.flight.typSamolotu))},dependencies:[P,U]});let i=e;return i})();var zt=i=>[i];function kt(i,e){i&1&&(n(0,"div",2)(1,"p"),l(2,"Loading..."),o()())}function Nt(i,e){if(i&1){let s=M();n(0,"tr",6),v("flightToUpdate",function(r){S(s);let a=p(2);return b(a.editFlight(r))}),o()}if(i&2){let s=e.$implicit;d("flight",s)("index",s.id)("routerLink",w(3,zt,s.id))}}function $t(i,e){if(i&1&&(n(0,"div",3)(1,"table",4)(2,"thead")(3,"tr")(4,"th"),l(5,"Numer lotu"),o(),n(6,"th"),l(7,"Data wylotu"),o(),n(8,"th"),l(9,"Czas wylotu"),o(),n(10,"th"),l(11,"Miejsce wylotu"),o(),n(12,"th"),l(13,"Miejsce przylotu"),o(),n(14,"th"),l(15,"Typ samolotu"),o()()(),n(16,"tbody"),F(17,Nt,1,5,"tr",5),o()()()),i&2){let s=p();m(17),d("ngForOf",s.flights)}}var bt=(()=>{let e=class e{constructor(t){this.flightService=t,this.flights=[],this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.fetchData(),this.flightService.notifyObservable$.subscribe(t=>{t.refresh&&this.fetchData()})}fetchData(){this.flightService.getFlights().subscribe(t=>{this.flights=t,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(c(x))},e.\u0275cmp=g({type:e,selectors:[["app-flight-list"]],inputs:{flights:"flights"},decls:3,vars:2,consts:[["style","text-align: center;",4,"ngIf"],["class","table",4,"ngIf"],[2,"text-align","center"],[1,"table"],[1,"table","table-striped","table-sm"],["app-flight-item","",3,"flight","index","routerLink","flightToUpdate",4,"ngFor","ngForOf"],["app-flight-item","",3,"flightToUpdate","flight","index","routerLink"]],template:function(r,a){r&1&&(h(0,"hr"),F(1,kt,3,0,"div",0)(2,$t,18,1,"div",1)),r&2&&(m(),d("ngIf",a.isLoading),m(),d("ngIf",!a.isLoading))},dependencies:[P,ot,D,St]});let i=e;return i})();var wt=(()=>{let e=class e{constructor(t,r,a){this.flightService=t,this.router=r,this.route=a}initNewFlight(){this.router.navigate(["new"],{relativeTo:this.route})}};e.\u0275fac=function(r){return new(r||e)(c(x),c(T),c(j))},e.\u0275cmp=g({type:e,selectors:[["app-flight"]],decls:7,vars:0,consts:[[1,"row"],[1,"col-lg-8"],[1,"btn","btn-success",3,"click"],[1,"col-lg-4"]],template:function(r,a){r&1&&(n(0,"div",0)(1,"div",1)(2,"button",2),v("click",function(){return a.initNewFlight()}),l(3,"Create New Flight"),o(),h(4,"app-flight-list"),o(),n(5,"div",3),h(6,"router-outlet"),o()())},dependencies:[at,bt]});let i=e;return i})();var Vt=[{path:"",title:"flight",component:wt,children:[{path:"",component:xt},{path:"new",component:Q},{path:":id",component:Ft},{path:":id/edit",component:Q}]}],_t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=V({imports:[k.forChild(Vt),k]});let i=e;return i})();var _e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=V({imports:[k,yt,vt,_t,nt]});let i=e;return i})();export{_e as a};

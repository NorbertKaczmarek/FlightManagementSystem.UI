import{A as Y,B as k,C as B,H as w,J as O,Q as J,U as L,Y as G,Z as _,_ as V,aa as T,ba as F,da as P,f as b,fa as j,ga as q,h as g,i as y,j as h,k as v,m,ma as A,n as c,na as D,o as S,oa as W,p as d,pa as z,q as r,r as o,s as f,t as I,u as M,v as p,w as x,x as l,y as N,z as E}from"./chunk-MUP74BBE.js";function ee(i,e){if(i&1&&(r(0,"div")(1,"p"),l(2),o(),r(3,"p"),l(4),o(),r(5,"p"),l(6),o()()),i&2){let s=p();m(2),E("Your id: ",s.user.id,""),m(2),E("Your name: ",s.user.fullName,""),m(2),E("Your email: ",s.user.email,"")}}var Q=(()=>{let e=class e{constructor(n,t){this.authService=n,this.titleService=t}ngOnInit(){this.authService.getAccountInfo().subscribe(n=>{this.user=n,this.titleService.setTitle(`User: ${this.user.fullName}`)})}decodeToken(n){let a=n.split(".")[1].replace(/-/g,"+").replace(/_/,"/"),u=decodeURIComponent(atob(a).split("").map(C=>"%"+("00"+C.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(u)}};e.\u0275fac=function(t){return new(t||e)(c(_),c(J))},e.\u0275cmp=g({type:e,selectors:[["app-account"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,a){t&1&&S(0,ee,7,3,"div",0),t&2&&d("ngIf",a.user)},dependencies:[w]});let i=e;return i})();function ne(i,e){if(i&1&&(r(0,"div",7)(1,"p"),l(2),o()()),i&2){let s=p();m(2),N(s.error)}}function oe(i,e){}function re(i,e){i&1&&(r(0,"div",8)(1,"p"),l(2,"Loading..."),o()())}function ae(i,e){if(i&1){let s=I();r(0,"form",9,0),M("ngSubmit",function(){h(s);let t=x(1),a=p();return v(a.onSubmit(t))}),r(2,"div",10)(3,"label",11),l(4,"E-Mail"),o(),r(5,"input",12),B("ngModelChange",function(t){h(s);let a=p();return k(a.email,t)||(a.email=t),v(t)}),o()(),r(6,"div",10)(7,"label",13),l(8,"Password"),o(),r(9,"input",14),B("ngModelChange",function(t){h(s);let a=p();return k(a.password,t)||(a.password=t),v(t)}),o()(),f(10,"br"),r(11,"div")(12,"button",15),l(13," Login "),o()()()}if(i&2){let s=x(1),n=p();m(5),Y("ngModel",n.email),m(4),Y("ngModel",n.password),m(3),d("disabled",!s.valid)}}var X=(()=>{let e=class e{constructor(n,t){this.authService=n,this.router=t,this.error=null,this.isLoading=!1,this.email=null,this.password=null}onSubmit(n){n.valid&&(this.isLoading=!0,this.authService.login(this.email,this.password).subscribe(t=>{localStorage.setItem("authToken",t),this.router.navigate(["flight"]),this.isLoading=!1,n.reset()},t=>{this.error=t,this.password="",this.isLoading=!1}))}};e.\u0275fac=function(t){return new(t||e)(c(_),c(L))},e.\u0275cmp=g({type:e,selectors:[["app-login"]],decls:6,vars:3,consts:[["authForm","ngForm"],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","alert alert-danger",4,"ngIf"],["appPlaceholder",""],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[1,"alert","alert-danger"],[2,"text-align","center"],[3,"ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","required","","email","",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","","minlength","6",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,a){t&1&&(r(0,"div",1)(1,"div",2),S(2,ne,3,1,"div",3)(3,oe,0,0,"ng-template",4)(4,re,3,0,"div",5)(5,ae,14,3,"form",6),o()()),t&2&&(m(2),d("ngIf",a.error),m(2),d("ngIf",a.isLoading),m(),d("ngIf",!a.isLoading))},dependencies:[q,V,T,F,A,W,D,j,P,w]});let i=e;return i})();function le(i,e){if(i&1&&(r(0,"div",16)(1,"p"),l(2),o()()),i&2){let s=p();m(2),N(s.error)}}function me(i,e){}var Z=(()=>{let e=class e{constructor(n,t){this.authService=n,this.router=t,this.error=null}onSubmit(n){if(!n.valid)return;let t=n.value.email,a=n.value.fullName,u=n.value.password,C=n.value.confirmPassword;u==C?this.authService.signup(t,a,u,C).subscribe(()=>{this.router.navigate(["login"]),n.reset()},U=>{this.error=U}):this.error="Passwords are different."}};e.\u0275fac=function(t){return new(t||e)(c(_),c(L))},e.\u0275cmp=g({type:e,selectors:[["app-signup"]],decls:26,vars:2,consts:[["authForm2","ngForm"],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","alert alert-danger",4,"ngIf"],["appPlaceholder",""],[3,"ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","fullName"],["type","text","id","fullName","ngModel","","name","fullName","required","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["for","confirmPassword"],["type","password","id","confirmPassword","ngModel","","name","confirmPassword","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"]],template:function(t,a){if(t&1){let u=I();r(0,"div",1)(1,"div",2),S(2,le,3,1,"div",3)(3,me,0,0,"ng-template",4),r(4,"form",5,0),M("ngSubmit",function(){h(u);let U=x(5);return v(a.onSubmit(U))}),r(6,"div",6)(7,"label",7),l(8,"E-Mail"),o(),f(9,"input",8),o(),r(10,"div",6)(11,"label",9),l(12,"Full Name"),o(),f(13,"input",10),o(),r(14,"div",6)(15,"label",11),l(16,"Password"),o(),f(17,"input",12),o(),r(18,"div",6)(19,"label",13),l(20,"Confirm password"),o(),f(21,"input",14),o(),f(22,"br"),r(23,"div")(24,"button",15),l(25," Signup "),o()()()()()}if(t&2){let u=x(5);m(2),d("ngIf",a.error),m(22),d("disabled",!u.valid)}},dependencies:[q,V,T,F,A,W,D,j,P,w]});let i=e;return i})();var se=[{path:"login",title:"Login",component:X},{path:"signup",title:"Signup",component:Z},{path:"account",title:"Account",component:Q}],$=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=b({imports:[G.forChild(se),G]});let i=e;return i})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=b({imports:[z,O,$]});let i=e;return i})();export{Ee as a};

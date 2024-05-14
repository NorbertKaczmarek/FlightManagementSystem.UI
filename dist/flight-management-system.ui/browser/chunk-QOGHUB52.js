import{D as k,G as W,H as X,M as Y,N as F,Q as b,U as B,V as D,X as V,Y as _,_ as L,a as z,aa as U,b as O,ba as $,c as G,e as K,ea as P,f as Q,fa as A,g as C,ga as q,h as J,ha as Z,i as h,j as I,k as E,l as N,n as c,o as d,p as v,q as u,r as s,s as n,t as p,u as T,v as M,w as j,x as w,y as l,z as S}from"./chunk-5VBXVKB6.js";var f=class extends Error{};f.prototype.name="InvalidTokenError";function ae(r){return decodeURIComponent(atob(r).replace(/(.)/g,(e,m)=>{let t=m.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}function se(r){let e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return ae(e)}catch{return atob(e)}}function ee(r,e){if(typeof r!="string")throw new f("Invalid token specified: must be a string");e||(e={});let m=e.header===!0?0:1,t=r.split(".")[m];if(typeof t!="string")throw new f(`Invalid token specified: missing part #${m+1}`);let i;try{i=se(t)}catch(o){throw new f(`Invalid token specified: invalid base64 for part #${m+1} (${o.message})`)}try{return JSON.parse(i)}catch(o){throw new f(`Invalid token specified: invalid json for part #${m+1} (${o.message})`)}}var x=(()=>{let e=class e{constructor(t,i){this.http=t,this.router=i,this.url="auth",this.token=new z(null)}signup(t,i,o,a){return this.http.post(`${F.apiUrl}/${this.url}/signup`,{email:t,fullName:i,password:o,confirmPassword:a}).pipe(G(this.handleError))}login(t,i){return this.http.post(`${F.apiUrl}/${this.url}/login`,{email:t,password:i},{responseType:"text"}).pipe(G(this.handleError),K(o=>{localStorage.setItem("authToken",o),this.token.next(o)}))}autoLogin(){let t=localStorage.getItem("authToken");if(t&&t){this.token.next(t);let i=ee(t),o=new Date(0);o.setUTCSeconds(i.exp);let a=new Date(o).getTime()-new Date().getTime();this.autoLogout(a)}}logout(){this.token.next(null),this.router.navigate(["/login"]),localStorage.removeItem("authToken"),this.tokenExpirationTimer&&clearTimeout(this.tokenExpirationTimer)}autoLogout(t){this.tokenExpirationTimer=setTimeout(()=>{this.logout()},t)}getAccountInfo(){return this.http.get(`${F.apiUrl}/${this.url}/account`)}handleError(t){let i="An unknown error occurred!";return t.error?O(t.error):O(i)}};e.\u0275fac=function(i){return new(i||e)(J(X),J(b))},e.\u0275prov=Q({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function me(r,e){if(r&1&&(s(0,"div")(1,"p"),l(2),n(),s(3,"p"),l(4),n(),s(5,"p"),l(6),n()()),r&2){let m=j();c(2),S(m.user.id),c(2),S(m.user.fullName),c(2),S(m.user.email)}}var ie=(()=>{let e=class e{constructor(t,i){this.authService=t,this.titleService=i}ngOnInit(){this.authService.getAccountInfo().subscribe(t=>{this.user=t,this.titleService.setTitle(`User: ${this.user.fullName}`)})}decodeToken(t){let o=t.split(".")[1].replace(/-/g,"+").replace(/_/,"/"),a=decodeURIComponent(atob(o).split("").map(g=>"%"+("00"+g.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(a)}};e.\u0275fac=function(i){return new(i||e)(d(x),d(Y))},e.\u0275cmp=h({type:e,selectors:[["app-account"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(i,o){i&1&&v(0,me,7,3,"div",0),i&2&&u("ngIf",o.user)},dependencies:[k]});let r=e;return r})();function pe(r,e){if(r&1&&(s(0,"div",12)(1,"p"),l(2),n()()),r&2){let m=j();c(2),S(m.error)}}function de(r,e){}var re=(()=>{let e=class e{constructor(t,i){this.authService=t,this.router=i,this.error=null}onSubmit(t){if(!t.valid)return;let i=t.value.email,o=t.value.password;this.authService.login(i,o).subscribe(a=>{localStorage.setItem("authToken",a),this.router.navigate(["flight"])},a=>{this.error=a}),t.reset()}};e.\u0275fac=function(i){return new(i||e)(d(x),d(b))},e.\u0275cmp=h({type:e,selectors:[["app-login"]],decls:18,vars:2,consts:[["authForm","ngForm"],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["class","alert alert-danger",4,"ngIf"],["appPlaceholder",""],[3,"ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"]],template:function(i,o){if(i&1){let a=T();s(0,"div",1)(1,"div",2),v(2,pe,3,1,"div",3)(3,de,0,0,"ng-template",4),s(4,"form",5,0),M("ngSubmit",function(){E(a);let R=w(5);return N(o.onSubmit(R))}),s(6,"div",6)(7,"label",7),l(8,"E-Mail"),n(),p(9,"input",8),n(),s(10,"div",6)(11,"label",9),l(12,"Password"),n(),p(13,"input",10),n(),p(14,"br"),s(15,"div")(16,"button",11),l(17," Login "),n()()()()()}if(i&2){let a=w(5);c(2),u("ngIf",o.error),c(14),u("disabled",!a.valid)}},dependencies:[$,D,V,_,P,q,A,U,L,k]});let r=e;return r})();function ue(r,e){}var oe=(()=>{let e=class e{constructor(t,i){this.authService=t,this.router=i}onSubmit(t){if(!t.valid)return;let i=t.value.email,o=t.value.fullName,a=t.value.password,g=t.value.confirmPassword;a==g&&(this.authService.signup(i,o,a,g).subscribe(()=>this.router.navigate(["login"])),t.reset())}};e.\u0275fac=function(i){return new(i||e)(d(x),d(b))},e.\u0275cmp=h({type:e,selectors:[["app-signup"]],decls:25,vars:1,consts:[["authForm2","ngForm"],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["appPlaceholder",""],[3,"ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","fullName"],["type","text","id","fullName","ngModel","","name","fullName","required","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["for","confirmPassword"],["type","password","id","confirmPassword","ngModel","","name","confirmPassword","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(i,o){if(i&1){let a=T();s(0,"div",1)(1,"div",2),v(2,ue,0,0,"ng-template",3),s(3,"form",4,0),M("ngSubmit",function(){E(a);let R=w(4);return N(o.onSubmit(R))}),s(5,"div",5)(6,"label",6),l(7,"E-Mail"),n(),p(8,"input",7),n(),s(9,"div",5)(10,"label",8),l(11,"Full Name"),n(),p(12,"input",9),n(),s(13,"div",5)(14,"label",10),l(15,"Password"),n(),p(16,"input",11),n(),s(17,"div",5)(18,"label",12),l(19,"Confirm password"),n(),p(20,"input",13),n(),p(21,"br"),s(22,"div")(23,"button",14),l(24," Signup "),n()()()()()}if(i&2){let a=w(4);c(23),u("disabled",!a.valid)}},dependencies:[$,D,V,_,P,q,A,U,L]});let r=e;return r})();var fe=[{path:"login",title:"Login",component:re},{path:"signup",title:"Signup",component:oe},{path:"account",title:"Account",component:ie}],ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=C({imports:[B.forChild(fe),B]});let r=e;return r})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=C({imports:[Z,W,ne]});let r=e;return r})();export{x as a,Pe as b};
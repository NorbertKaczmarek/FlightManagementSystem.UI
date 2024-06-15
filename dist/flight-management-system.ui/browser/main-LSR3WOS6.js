import{a as b,b as B}from"./chunk-J6RSOKRE.js";import{a as z}from"./chunk-SUCWHNCC.js";import{I as A,K as L,M as E,N as F,O as H,P as D,Q as N,T as j,U as R,V as P,W as V,X as O,Y as _,f as T,g as h,i as m,j as g,k as S,l as x,n as s,o as u,p as k,q as c,r,s as a,t as d,u as y,v as M,w as v,y as l,z as w}from"./chunk-TUFQYNZZ.js";function Y(t,e){t&1&&(r(0,"li",9)(1,"a",10),l(2,"Flight"),a()())}function Z(t,e){if(t&1){let p=y();r(0,"li",9)(1,"a",11),M("click",function(){S(p);let i=v();return x(i.onDemoLogin())}),l(2,"Demo login"),a()()}}function q(t,e){t&1&&(r(0,"li",9)(1,"a",12),l(2,"Login"),a()())}function ee(t,e){t&1&&(r(0,"li",9)(1,"a",13),l(2,"Sign up"),a()())}function te(t,e){if(t&1&&(r(0,"li",9)(1,"a",14),l(2),a()()),t&2){let p=v();s(2),w(p.email)}}function ie(t,e){if(t&1){let p=y();r(0,"li",9)(1,"a",15),M("click",function(){S(p);let i=v();return x(i.onLogout())}),l(2,"Logout"),a()()}}var U=(()=>{let e=class e{constructor(o,i){this.authService=o,this.router=i,this.isAuthenticated=!0,this.email=null}ngOnInit(){this.userSub=this.authService.token.subscribe(o=>{this.isAuthenticated=!!o,this.authService.getAccountInfo().subscribe(i=>{this.email=i.email})})}ngOnDestroy(){this.userSub.unsubscribe()}onLogout(){this.authService.logout()}onDemoLogin(){let o="demo1@demo.com",i="demo1",n="demo1@demo.com";this.authService.signup(o,i,n,"demo1@demo.com").subscribe(()=>{this.authService.login(o,n).subscribe(C=>{localStorage.setItem("authToken",C),this.router.navigate(["flight"])},C=>{})},C=>{this.authService.login(o,n).subscribe(I=>{localStorage.setItem("authToken",I),this.router.navigate(["flight"])},I=>{})})}};e.\u0275fac=function(i){return new(i||e)(u(b),u(R))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],decls:15,vars:6,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"navbar-nav","mb-2","d-flex"],[1,"nav-item"],["routerLinkActive","active","routerLink","/flight",1,"nav-link"],["routerLinkActive","active",1,"nav-link",2,"cursor","pointer",3,"click"],["routerLinkActive","active","routerLink","/login",1,"nav-link"],["routerLinkActive","active","routerLink","/signup",1,"nav-link"],["routerLinkActive","active","routerLink","/account",1,"nav-link"],[1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(i,n){i&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"Flight Management System"),a(),r(4,"button",3),d(5,"span",4),a(),r(6,"div",5)(7,"ul",6),k(8,Y,3,0,"li",7),a(),r(9,"ul",8),k(10,Z,3,0,"li",7)(11,q,3,0,"li",7)(12,ee,3,0,"li",7)(13,te,3,1,"li",7)(14,ie,3,0,"li",7),a()()()()),i&2&&(s(8),c("ngIf",n.isAuthenticated),s(2),c("ngIf",!n.isAuthenticated),s(),c("ngIf",!n.isAuthenticated),s(),c("ngIf",!n.isAuthenticated),s(),c("ngIf",n.isAuthenticated),s(),c("ngIf",n.isAuthenticated))},dependencies:[A,P,V]});let t=e;return t})();var $=(()=>{let e=class e{constructor(o){this.authService=o,this.title="FlightManagementSystem.UI"}ngOnInit(){this.authService.autoLogin()}};e.\u0275fac=function(i){return new(i||e)(u(b))},e.\u0275cmp=m({type:e,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(i,n){i&1&&(d(0,"app-header"),r(1,"div",0),d(2,"router-outlet"),a())},dependencies:[j,U]});let t=e;return t})();var G=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-page-not-found"]],decls:2,vars:0,template:function(i,n){i&1&&(r(0,"p"),l(1,"page-not-found works!"),a())}});let t=e;return t})();var ne=[{path:"",redirectTo:"/flight",pathMatch:"full"},{path:"",loadChildren:()=>import("./chunk-LQHWISR4.js").then(t=>t.AuthModule)},{path:"flight",loadChildren:()=>import("./chunk-DITSXHJP.js").then(t=>t.FlightModule)},{path:"**",component:G}],J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[L,_.forRoot(ne,{preloadingStrategy:O}),_]});let t=e;return t})();var K=(()=>{let e=class e{intercept(o,i){let n=localStorage.getItem("authToken");return n&&(o=o.clone({setHeaders:{Authorization:`Bearer ${n}`}})),i.handle(o)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})();var Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e,bootstrap:[$]}),e.\u0275inj=h({providers:[{provide:E,useClass:K,multi:!0},N],imports:[D,F,J,B,z]});let t=e;return t})();H().bootstrapModule(Q).catch(t=>console.error(t));

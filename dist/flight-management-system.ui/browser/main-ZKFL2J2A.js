import{a as v,b as j}from"./chunk-FM6V4WA7.js";import{a as R}from"./chunk-VYCORWUZ.js";import{D as A,G as I,I as T,J as L,K as w,L as F,M as E,P as _,R as H,S as N,T as D,U as g,f as C,g as d,i as l,j as f,k as b,l as y,n as p,o as h,p as S,q as c,r as n,s as r,t as s,u as k,v as x,w as M,y as m}from"./chunk-Q3F7V2Z4.js";function K(e,t){e&1&&(n(0,"li",8)(1,"a",9),m(2,"Flight"),r()())}function Q(e,t){e&1&&(n(0,"li",8)(1,"a",10),m(2,"Login"),r()())}function W(e,t){e&1&&(n(0,"li",8)(1,"a",11),m(2,"Sign up"),r()())}function X(e,t){e&1&&(n(0,"li",8)(1,"a",12),m(2,"Account"),r()())}function Y(e,t){if(e&1){let $=k();n(0,"li",8)(1,"a",13),x("click",function(){b($);let i=M();return y(i.onLogout())}),m(2,"Logout"),r()()}}var O=(()=>{let t=class t{constructor(o){this.authService=o,this.isAuthenticated=!0}ngOnInit(){this.userSub=this.authService.token.subscribe(o=>{this.isAuthenticated=!!o})}ngOnDestroy(){this.userSub.unsubscribe()}onLogout(){this.authService.logout()}};t.\u0275fac=function(i){return new(i||t)(h(v))},t.\u0275cmp=l({type:t,selectors:[["app-header"]],decls:13,vars:5,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["routerLinkActive","active","routerLink","/flight",1,"nav-link"],["routerLinkActive","active","routerLink","/login",1,"nav-link"],["routerLinkActive","active","routerLink","/signup",1,"nav-link"],["routerLinkActive","active","routerLink","/account",1,"nav-link"],[1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(i,a){i&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),m(3,"Flight Management System"),r(),n(4,"button",3),s(5,"span",4),r(),n(6,"div",5)(7,"ul",6),S(8,K,3,0,"li",7)(9,Q,3,0,"li",7)(10,W,3,0,"li",7)(11,X,3,0,"li",7)(12,Y,3,0,"li",7),r()()()()),i&2&&(p(8),c("ngIf",a.isAuthenticated),p(),c("ngIf",!a.isAuthenticated),p(),c("ngIf",!a.isAuthenticated),p(),c("ngIf",a.isAuthenticated),p(),c("ngIf",a.isAuthenticated))},dependencies:[A,H,N]});let e=t;return e})();var P=(()=>{let t=class t{constructor(o){this.authService=o,this.title="FlightManagementSystem.UI"}ngOnInit(){this.authService.autoLogin()}};t.\u0275fac=function(i){return new(i||t)(h(v))},t.\u0275cmp=l({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(i,a){i&1&&(s(0,"app-header"),n(1,"div",0),s(2,"router-outlet"),r())},dependencies:[_,O]});let e=t;return e})();var B=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["app-page-not-found"]],decls:2,vars:0,template:function(i,a){i&1&&(n(0,"p"),m(1,"page-not-found works!"),r())}});let e=t;return e})();var q=[{path:"",redirectTo:"/flight",pathMatch:"full"},{path:"",loadChildren:()=>import("./chunk-TEI4SBGL.js").then(e=>e.AuthModule)},{path:"flight",loadChildren:()=>import("./chunk-H3ZE7MBS.js").then(e=>e.FlightModule)},{path:"**",component:B}],V=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[I,g.forRoot(q,{preloadingStrategy:D}),g]});let e=t;return e})();var z=(()=>{let t=class t{intercept(o,i){let a=localStorage.getItem("authToken");return a&&(o=o.clone({setHeaders:{Authorization:`Bearer ${a}`}})),i.handle(o)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t,bootstrap:[P]}),t.\u0275inj=d({providers:[{provide:T,useClass:z,multi:!0},E],imports:[F,L,V,j,R]});let e=t;return e})();w().bootstrapModule(U).catch(e=>console.error(e));

"use strict";(self.webpackChunkfinal_project_client=self.webpackChunkfinal_project_client||[]).push([[537],{6537:(X,h,g)=>{g.r(h),g.d(h,{UserModule:()=>H});var m=g(6814),p=g(2895);function y(t,s,e,o,i,a,l){try{var c=t[a](l),d=c.value}catch(_){return void e(_)}c.done?s(d):Promise.resolve(d).then(o,i)}var n=g(4946),u=g(7528),r=g(95);function O(t,s){if(1&t&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&t){const e=s.$implicit;n.xp6(1),n.hij(" ",e," ")}}function P(t,s){if(1&t&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&t){const e=s.$implicit;n.xp6(1),n.hij(" ",e," ")}}let b=(()=>{class t{constructor(e,o){this.userAuthService=e,this.router=o,this.userAuthService.getProfile().subscribe({next:i=>{console.log(i)},error:i=>{console.log("Error occurred:",i)}}),this.profileUser=this.userAuthService.user,this.appsBought=this.userAuthService.user.appsBought}ngOnInit(){this.userAuthService.getProfile().subscribe({next:e=>{console.log(e)},error:e=>{console.log("Error occurred:",e)}}),this.profileUser=this.userAuthService.user,this.appsBought=this.userAuthService.user.appsBought}ngOnChanges(e){this.userAuthService.getProfile().subscribe({next:o=>{console.log(o)},error:o=>{console.log("Error occurred:",o)}}),this.profileUser=this.userAuthService.user,this.appsBought=this.userAuthService.user.appsBought}profileEdit(e){var o=this;return function C(t){return function(){var s=this,e=arguments;return new Promise(function(o,i){var a=t.apply(s,e);function l(d){y(a,o,i,l,c,"next",d)}function c(d){y(a,o,i,l,c,"throw",d)}l(void 0)})}}(function*(){console.log(e.value);const i=o.profileUser.email,{username:a,firstname:l,lastName:c,email:d,phoneNumber:_,country:K,city:V,aboutMe:G}=e.value;yield o.userAuthService.editUserProfile(i,a,l,c,d,_,K,V,G),o.userAuthService.getProfile().subscribe({next:f=>{console.log(f)},error:f=>{console.log("Error occurred:",f)}}),o.profileUser=o.userAuthService.user,o.appsBought=o.userAuthService.user.appsBought})()}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(u.K),n.Y36(p.F0))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-profile"]],features:[n.TTD],decls:124,vars:15,consts:[[1,"my-app"],[1,"my-app__header"],[1,"container"],[1,"my-app__header-inner"],[1,"my-app__header-text","media"],[1,"fa-solid","fa-circle-user"],[1,"media-body"],[1,"my-app__header-title"],[1,"my-app__body"],[1,"row"],[1,"col-4"],[1,"my-card","card"],[1,"my-card__header","card-header"],[1,"my-card__header-title"],[1,"my-text-overline"],[4,"ngFor","ngForOf"],[1,"my-card__header-link"],[1,"my-card__body","card-body"],[1,"my-list","my-list--simple","list-inline","mb-0"],[1,"numberOfBA"],[1,"my-divider"],[1,"col-8",3,"ngSubmit"],["profileEditForm","ngForm"],[1,"my-alert","alert","alert-info"],[1,"my-alert__text"],[1,"my-card__header-title","card-title"],[1,"my-list","list-group","list-group-flush"],[1,"my-list-item","list-group-item"],[1,"my-list-item__date"],[1,"my-list-item__date-day"],[1,"my-list-item__text"],["name","username","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["usernameInput","ngModel"],["name","firstname","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["firstNameInput","ngModel"],["name","lastName","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["lastNameInput","ngModel"],["name","email","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["emailInput","ngModel"],["name","phoneNumber","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["phoneNumberInput","ngModel"],["name","country","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["countryInput","ngModel"],["name","city","ngModel","",1,"my-list-item__text-title",3,"ngModel"],["cityInput","ngModel"],["name","aboutMe","ngModel","",1,"my-list-item__date-day",3,"ngModel"],["aboutMeInput","ngModel"]],template:function(o,i){if(1&o){const a=n.EpF();n.TgZ(0,"div",0)(1,"main")(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4),n._UZ(6,"i",5),n.TgZ(7,"div",6)(8,"h1",7),n._uU(9),n.qZA()()()()()(),n.TgZ(10,"section",8)(11,"div",2)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14),n._uU(18,"Apps you created"),n.qZA(),n.TgZ(19,"ul"),n.YNc(20,O,2,1,"li",15),n.qZA()(),n.TgZ(21,"h1",16),n._uU(22),n.qZA()()(),n.TgZ(23,"div",11)(24,"div",17)(25,"div",14),n._uU(26,"Bought and liked apps"),n.qZA(),n.TgZ(27,"ul",18)(28,"div",19)(29,"h5"),n._uU(30,"Bought apps"),n.qZA(),n.TgZ(31,"p"),n._uU(32),n.qZA()(),n.TgZ(33,"ul")(34,"li"),n._uU(35),n.qZA()(),n._UZ(36,"hr",20),n.TgZ(37,"div",19)(38,"h5"),n._uU(39,"Liked apps"),n.qZA(),n.TgZ(40,"p"),n._uU(41),n.qZA()(),n.TgZ(42,"ul"),n.YNc(43,P,2,1,"li",15),n.qZA()()()()(),n.TgZ(44,"form",21,22),n.NdJ("ngSubmit",function(){n.CHM(a);const c=n.MAs(45);return n.KtG(i.profileEdit(c))}),n.TgZ(46,"div",23)(47,"button"),n._uU(48,"Save"),n.qZA(),n.TgZ(49,"span",24),n._uU(50," Your latest activity is shown here. Make changes to your profile. "),n.qZA()(),n.TgZ(51,"div",11)(52,"div",12)(53,"h3",25),n._uU(54," Personal Information "),n.qZA()(),n.TgZ(55,"ul",26)(56,"li",27)(57,"div",28)(58,"span",29),n._uU(59,"Username"),n.qZA()(),n.TgZ(60,"div",30),n._UZ(61,"input",31,32),n.qZA()(),n.TgZ(63,"li",27)(64,"div",28)(65,"span",29),n._uU(66,"First Name"),n.qZA()(),n.TgZ(67,"div",30),n._UZ(68,"input",33,34),n.qZA()(),n.TgZ(70,"li",27)(71,"div",28)(72,"span",29),n._uU(73,"Last Name"),n.qZA()(),n.TgZ(74,"div",30),n._UZ(75,"input",35,36),n.qZA()()()(),n.TgZ(77,"div",11)(78,"div",12)(79,"h3",25),n._uU(80," Contact Information "),n.qZA()(),n.TgZ(81,"ul",26)(82,"li",27)(83,"div",28)(84,"span",29),n._uU(85,"Email"),n.qZA()(),n.TgZ(86,"div",30),n._UZ(87,"input",37,38),n.qZA()(),n.TgZ(89,"li",27)(90,"div",28)(91,"span",29),n._uU(92,"Phone Number"),n.qZA()(),n.TgZ(93,"div",30),n._UZ(94,"input",39,40),n.qZA()()()(),n.TgZ(96,"div",11)(97,"div",12)(98,"h3",25),n._uU(99,"Address"),n.qZA()(),n.TgZ(100,"ul",26)(101,"li",27)(102,"div",28)(103,"span",29),n._uU(104,"Country"),n.qZA()(),n.TgZ(105,"div",30),n._UZ(106,"input",41,42),n.qZA()(),n.TgZ(108,"li",27)(109,"div",28)(110,"span",29),n._uU(111,"City"),n.qZA()(),n.TgZ(112,"div",30),n._UZ(113,"input",43,44),n.qZA()()()(),n.TgZ(115,"div",11)(116,"div",12)(117,"h3",25),n._uU(118,"About Me"),n.qZA()(),n.TgZ(119,"ul",26)(120,"li",27)(121,"div",28),n._UZ(122,"textarea",45,46),n.qZA()()()()()()()()()()}2&o&&(n.xp6(9),n.hij(" Hi, ",i.profileUser.username,"! "),n.xp6(11),n.Q6J("ngForOf",i.profileUser.appsCreated),n.xp6(2),n.hij(" ",i.profileUser.appsCreated.length," "),n.xp6(10),n.Oqu(i.profileUser.appsBought.length),n.xp6(3),n.hij(" ",i.appsBought," "),n.xp6(6),n.Oqu(i.profileUser.appsLiked.length),n.xp6(2),n.Q6J("ngForOf",i.profileUser.appsLiked),n.xp6(18),n.Q6J("ngModel",i.profileUser.username),n.xp6(7),n.Q6J("ngModel",i.profileUser.firstName),n.xp6(7),n.Q6J("ngModel",i.profileUser.lastName),n.xp6(12),n.Q6J("ngModel",i.profileUser.email),n.xp6(7),n.Q6J("ngModel",i.profileUser.phoneNumber),n.xp6(12),n.Q6J("ngModel",i.profileUser.country),n.xp6(7),n.Q6J("ngModel",i.profileUser.city),n.xp6(9),n.Q6J("ngModel",i.profileUser.aboutMe))},dependencies:[m.sg,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F],styles:[".my-app[_ngcontent-%COMP%]{background-color:#fbfbfd;color:#3e3f42;font-family:Roboto,Arial,sans-serif;font-size:14px}.my-navbar[_ngcontent-%COMP%]{padding:1rem 1.875rem;box-shadow:0 0 1px #eaedf3}.my-navbar__logo[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:1.875rem;font-size:1rem;font-weight:500}.navbar-light[_ngcontent-%COMP%]   .my-navbar__logo[_ngcontent-%COMP%]{color:#3e3f42}.my-navbar__logo-icon[_ngcontent-%COMP%]{margin-right:.875rem}.my-navbar-button[_ngcontent-%COMP%]{padding:0;border:none;background:none}.my-navbar-button[_ngcontent-%COMP%] + .my-navbar-button[_ngcontent-%COMP%]{margin-left:1rem}.navbar-nav[_ngcontent-%COMP%]{padding-left:.937rem;border-left:1px solid #eaedf3}.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-right:.937rem;padding-left:.937rem}.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#6b6c6f}.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#1665d8}.my-app__header[_ngcontent-%COMP%]{padding-top:1.875rem;padding-bottom:1.875rem;border-bottom:1px solid #eee;background-color:#ffbd4a;padding:4em 0;margin-bottom:5em}.my-app__header-inner[_ngcontent-%COMP%]{display:flex}.my-app__header-text[_ngcontent-%COMP%]{align-items:center;display:flex}.my-app__header-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4.6em;margin:.2em}.my-app__header-text[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em}.my-app__header-title[_ngcontent-%COMP%]{margin:0 0 .625rem;font-size:22px;font-weight:400;line-height:32px}.my-action-buttons[_ngcontent-%COMP%]{display:flex}.my-action-button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border:none;background:none;line-height:1}.my-action-button[_ngcontent-%COMP%]:hover, .my-action-button[_ngcontent-%COMP%]:active, .my-action-button[_ngcontent-%COMP%]:focus{outline:none}.my-action-button__icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;margin-bottom:.875rem;border:1px solid #e2e5ed;border-radius:54px;color:#1665d8;object-fit:none}.my-app__body[_ngcontent-%COMP%]{padding-top:1.875rem;padding-bottom:1.875rem}.my-card[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.875rem}.my-card__header[_ngcontent-%COMP%]{display:flex;padding:1.5rem 1.875rem;border-width:0 0 1px;border-color:#00000020;background:none}.my-card__header-title[_ngcontent-%COMP%]{flex:1;margin:0;font-size:18px;font-weight:500}.my-card__header-link[_ngcontent-%COMP%]{color:#9ea0a5}.my-card__header-link[_ngcontent-%COMP%]:hover, .my-card__header-link[_ngcontent-%COMP%]:focus{color:#9ea0a5}.my-card__body[_ngcontent-%COMP%]{padding:1.5rem 1.875rem}.my-list-item[_ngcontent-%COMP%]{display:flex;padding:1rem 1.875rem}.my-list-item__date[_ngcontent-%COMP%], .my-list-item__text[_ngcontent-%COMP%], .my-list-item__fee[_ngcontent-%COMP%]{display:flex;flex-direction:column}.my-list-item__date[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-right:25px;color:#9ea0a5}.my-list-item__date-day[_ngcontent-%COMP%]{font-size:18px;line-height:22px}.my-list-item__date-month[_ngcontent-%COMP%]{margin-bottom:4px;font-size:12px;font-weight:500;line-height:14px;text-transform:uppercase}.my-list-item__text[_ngcontent-%COMP%]{flex:1}.my-list-item__text[_ngcontent-%COMP%]{border:1px solid black;border-radius:2em}.my-list-item__text-description[_ngcontent-%COMP%]{margin:0;color:#9ea0a5;font-size:12px;line-height:14px}.my-list-item__fee[_ngcontent-%COMP%]{text-align:right}.my-list-item__fee-delta[_ngcontent-%COMP%]{color:#3bad4b;font-weight:500}.my-list-item__fee-currency[_ngcontent-%COMP%]{color:#9ea0a5;font-size:12px}.my-list-inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5rem}@media (min-width: 992px){.my-dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{float:left;color:#9ea0a5;font-weight:400}.my-dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{text-align:right}}.my-text-headline[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:400}.my-text-overline[_ngcontent-%COMP%]{color:#9ea0a5;font-size:12px;font-weight:500;text-transform:uppercase}.my-divider[_ngcontent-%COMP%]{margin:1.25rem 0}.my-input[_ngcontent-%COMP%]{max-width:186px}.my-select[_ngcontent-%COMP%]{border-color:#d8dce6;box-shadow:0 1px 2px #00000014;font-size:14px}@media (max-width: 1199px){.container[_ngcontent-%COMP%]{max-width:100%}}.my-alert[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-bottom:1.875rem;padding-top:.937rem;padding-bottom:.937rem;border:none;box-shadow:none}.my-alert.alert-info[_ngcontent-%COMP%]{background-color:#ffbd4a;color:#fff}.my-alert__icon[_ngcontent-%COMP%]{margin-right:1.25rem}.list__icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:64px;height:40px;border:1px solid #e2e5ed;border-radius:.25rem}input[_ngcontent-%COMP%]{all:unset}.my-card[_ngcontent-%COMP%]   .my-list-item__date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:7em}.my-app__body[_ngcontent-%COMP%]   .my-card__body[_ngcontent-%COMP%]   .my-text-overline[_ngcontent-%COMP%], .my-app__body[_ngcontent-%COMP%]   .my-card__header-title[_ngcontent-%COMP%]   .my-text-overline[_ngcontent-%COMP%]{font-size:1.2em;font-style:initial;color:#000}.my-app__body[_ngcontent-%COMP%]   .my-card__header-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1em;display:flex;flex-direction:column;margin-left:1em}.my-app__body[_ngcontent-%COMP%]   .my-card__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:orange;font-size:2.2em;font-weight:900}.my-app__body[_ngcontent-%COMP%]   .my-card__body[_ngcontent-%COMP%]   .my-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2em;font-style:initial;color:#000}.my-app__body[_ngcontent-%COMP%]   .my-card__body[_ngcontent-%COMP%]   .my-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:orange;font-size:1.8em;font-weight:900}.my-app__body[_ngcontent-%COMP%]   .my-card__body[_ngcontent-%COMP%]   .my-list[_ngcontent-%COMP%]   .numberOfBA[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:.6em .4em}.my-app__body[_ngcontent-%COMP%]   .my-card__body[_ngcontent-%COMP%]   .my-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1em;display:flex;flex-direction:column;margin-left:1em}.col-8[_ngcontent-%COMP%]   .my-alert[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.my-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid #000;border-radius:.5em;display:flex;align-items:center;justify-content:center;resize:none;width:38em;height:10vh}"]})}return t})();var Z=g(1084);new n.OlP("API_ERROR");const M=["bg","com"];let x=(()=>{class t{constructor(){this.appEmail=[]}validate(e){console.log("validate",e.value);const i=this.emailValidator(this.appEmail)(e);return console.log({result:i}),i}emailValidator(e){const o=e.join("|"),i=new RegExp(`[A-Za-z0-9]+@gmail.(${o})`);return a=>""===a.value||i.test(a.value)?null:{emailValidator:!0}}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275dir=n.lG2({type:t,selectors:[["","appEmail",""]],inputs:{appEmail:"appEmail"},features:[n._Bn([{provide:r.Cf,useExisting:r.on,multi:!0}])]})}return t})();function A(t,s){1&t&&(n.TgZ(0,"p",24),n._uU(1,"Invalid username or password"),n.qZA())}function U(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"NOT VALID EMAIL"),n.qZA())}function T(t,s){if(1&t&&(n.ynx(0),n.YNc(1,U,2,0,"p",12),n.BQk()),2&t){n.oxw();const e=n.MAs(22);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.emailValidator)}}function w(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"Password is required"),n.qZA())}function q(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1," Password must be at least 6 characters long "),n.qZA())}function k(t,s){if(1&t&&(n.ynx(0),n.YNc(1,w,2,0,"p",12),n.YNc(2,q,2,0,"p",12),n.BQk()),2&t){n.oxw();const e=n.MAs(24);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.minlength)}}const I=function(){return["/user/singup"]};let z=(()=>{class t{constructor(e,o){this.userAuthService=e,this.router=o,this.domains=M,this.error=null}handleLogin(e){if(e.invalid)return;const{email:o,password:i}=e.value;this.userAuthService.login(o,i).subscribe(a=>{console.log(a),"invalid username!!!!!!!!! or password"!==a?(localStorage.setItem("auth",JSON.stringify(a)),this.userAuthService.getProfile(),this.router.navigate(["/app-finder"])):this.error=a})}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(u.K),n.Y36(p.F0))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],features:[n._Bn([Z.J,r.on])],decls:46,vars:6,consts:[["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://use.fontawesome.com/releases/v5.8.1/css/all.css","integrity","sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf","crossorigin","anonymous"],["id","container",1,"container"],[1,"form-container","sign-in-container"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"social-container"],["href","#",1,"social"],[1,"fab","fa-facebook-f"],[1,"fab","fa-google-plus-g"],[1,"fab","fa-linkedin-in"],["class","error",4,"ngIf"],[4,"ngIf"],["type","email","placeholder","Email","name","email","ngModel","","required","",3,"appEmail"],["emailInput","ngModel"],["type","password","placeholder","Password","name","password","ngModel","","required","","minlength","6"],["passwordInput","ngModel"],["href","#"],[1,"overlay-container"],[1,"overlay"],[1,"overlay-panel","overlay-left"],["id","signIn",1,"ghost"],[1,"overlay-panel","overlay-right"],["id","signUp",1,"ghost",3,"routerLink"],[1,"error"]],template:function(o,i){if(1&o){const a=n.EpF();n.TgZ(0,"head"),n._UZ(1,"meta",0)(2,"link",1),n.qZA(),n.TgZ(3,"body")(4,"div",2)(5,"div",3)(6,"form",4,5),n.NdJ("ngSubmit",function(){n.CHM(a);const c=n.MAs(7);return n.KtG(i.handleLogin(c))}),n.TgZ(8,"h1"),n._uU(9,"LogIn"),n.qZA(),n.TgZ(10,"div",6)(11,"a",7),n._UZ(12,"i",8),n.qZA(),n.TgZ(13,"a",7),n._UZ(14,"i",9),n.qZA(),n.TgZ(15,"a",7),n._UZ(16,"i",10),n.qZA()(),n.TgZ(17,"span"),n._uU(18,"or use your account"),n.qZA(),n.YNc(19,A,2,0,"p",11),n.YNc(20,T,2,1,"ng-container",12),n._UZ(21,"input",13,14)(23,"input",15,16),n.YNc(25,k,3,2,"ng-container",12),n.TgZ(26,"a",17),n._uU(27,"Forgot your password?"),n.qZA(),n.TgZ(28,"button"),n._uU(29,"LogIn"),n.qZA()()(),n.TgZ(30,"div",18)(31,"div",19)(32,"div",20)(33,"h1"),n._uU(34,"Welcome Back!"),n.qZA(),n.TgZ(35,"p"),n._uU(36,"To keep connected with us please login with your personal info"),n.qZA(),n.TgZ(37,"button",21),n._uU(38,"Sign In"),n.qZA()(),n.TgZ(39,"div",22)(40,"h1"),n._uU(41,"Hello, Friend!"),n.qZA(),n.TgZ(42,"p"),n._uU(43,"If you do not have account:"),n.qZA(),n.TgZ(44,"button",23),n._uU(45," Sign Up "),n.qZA()()()()()()}if(2&o){const a=n.MAs(22),l=n.MAs(24);n.xp6(19),n.Q6J("ngIf",i.error),n.xp6(1),n.Q6J("ngIf",a.touched),n.xp6(1),n.Q6J("appEmail",i.domains),n.xp6(4),n.Q6J("ngIf",l.touched),n.xp6(19),n.Q6J("routerLink",n.DdM(5,I))}},dependencies:[m.O5,p.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.On,r.F,x],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:400,800";*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#f6f5f7;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:Montserrat,sans-serif;height:80vh}h1[_ngcontent-%COMP%]{font-weight:700;margin:0}p[_ngcontent-%COMP%]{font-size:14px;font-weight:100;line-height:20px;letter-spacing:.5px;margin:20px 0 30px}span[_ngcontent-%COMP%]{font-size:12px}a[_ngcontent-%COMP%]{color:#333;font-size:14px;text-decoration:none;margin:15px 0}button[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #45D9AD;background-color:#45d9ad;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in}button[_ngcontent-%COMP%]:active{transform:scale(.95)}button[_ngcontent-%COMP%]:focus{outline:none}button.ghost[_ngcontent-%COMP%]{background-color:transparent;border-color:#fff}form[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 50px;height:100%;text-align:center}input[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%}.social-container[_ngcontent-%COMP%]{margin:20px 0}.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:1px solid #dddddd;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px}.form-container[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.sign-in-container[_ngcontent-%COMP%]{left:0;width:50%;z-index:2}.sign-up-container[_ngcontent-%COMP%]{left:0;width:50%;opacity:0;z-index:1}.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%]{transform:translate(100%)}.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%]{transform:translate(100%);opacity:1;z-index:5;animation:_ngcontent-%COMP%_show .6s}@keyframes _ngcontent-%COMP%_show{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.overlay-container[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]{transform:translate(-100%)}.overlay[_ngcontent-%COMP%]{background:#24D7BF;background:linear-gradient(to right,#45D9AD,#24D7BF);background-repeat:no-repeat;background-size:cover;background-position:0 0;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translate(0);transition:transform .6s ease-in-out}.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{transform:translate(50%)}.overlay-panel[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translate(0);transition:transform .6s ease-in-out}.overlay-left[_ngcontent-%COMP%]{transform:translate(-20%)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%]{transform:translate(0)}.overlay-right[_ngcontent-%COMP%]{right:0;transform:translate(0)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%]{transform:translate(20%)}.error[_ngcontent-%COMP%]{color:red}']})}return t})();function S(t,s){if(1&t&&(n.TgZ(0,"p",26),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Oqu(e.error)}}function J(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"NOT VALID EMAIL"),n.qZA())}function F(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"Email is required"),n.qZA())}function E(t,s){if(1&t&&(n.ynx(0),n.YNc(1,J,2,0,"p",24),n.YNc(2,F,2,0,"p",24),n.BQk()),2&t){n.oxw();const e=n.MAs(39);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.emailValidator),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.required)}}function N(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"Password is required"),n.qZA())}function B(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1," Password must be at least 6 characters long "),n.qZA())}function Q(t,s){if(1&t&&(n.ynx(0),n.YNc(1,N,2,0,"p",24),n.YNc(2,B,2,0,"p",24),n.BQk()),2&t){n.oxw();const e=n.MAs(41);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.minlength)}}let L=(()=>{class t{constructor(e,o){this.userAuthService=e,this.router=o,this.domains=M,this.error=null}handleSingUp(e){if(e.invalid)return;if(!e.value.username||e.value.username.length<4)return void(this.error="The username must be at least 4 characters");if(!e.value.email||!e.value.email.includes("@"))return void(this.error="Enter a valid email");if(!e.value.password||e.value.password<6)return void(this.error="The password should be at least 6 characters");const{username:o,email:i,password:a}=e.value;this.userAuthService.register(o,i,a).subscribe(l=>{console.log(l),localStorage.setItem("auth",JSON.stringify(l)),this.userAuthService.getProfile(),this.router.navigate(["/"])})}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(u.K),n.Y36(p.F0))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-register"]],features:[n._Bn([r.on])],decls:48,vars:4,consts:[["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://use.fontawesome.com/releases/v5.8.1/css/all.css","integrity","sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf","crossorigin","anonymous"],["id","container",1,"container"],[1,"overlay-container"],[1,"overlay"],[1,"overlay-panel","overlay-left"],["id","signIn",1,"ghost"],[1,"overlay-panel","overlay-right"],["id","signUp","routerLink","/user/login",1,"ghost"],[1,"form-container","sign-in-container"],[3,"ngSubmit"],["singUpForm","ngForm"],[1,"social-container"],["href","#",1,"social"],[1,"fab","fa-facebook-f"],[1,"fab","fa-google-plus-g"],[1,"fab","fa-linkedin-in"],["class","error1",4,"ngIf"],["type","text","placeholder","Username","name","username","ngModel",""],["usernameInput","ngModel"],["type","email","placeholder","Email","name","email","ngModel","","required","",3,"appEmail"],["emailInput","ngModel"],["type","password","placeholder","Password","name","password","ngModel","","required","","minlength","6"],["passwordInput","ngModel"],[4,"ngIf"],["href","#"],[1,"error1"]],template:function(o,i){if(1&o){const a=n.EpF();n.TgZ(0,"head"),n._UZ(1,"meta",0)(2,"link",1),n.qZA(),n.TgZ(3,"body")(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"h1"),n._uU(9,"Welcome Back!"),n.qZA(),n.TgZ(10,"p"),n._uU(11,"To keep connected with us please login with your personal info"),n.qZA(),n.TgZ(12,"button",6),n._uU(13,"Sign In"),n.qZA()(),n.TgZ(14,"div",7)(15,"h1"),n._uU(16,"Hello, Friend!"),n.qZA(),n.TgZ(17,"p"),n._uU(18,"Alredy have an account?"),n.qZA(),n.TgZ(19,"button",8),n._uU(20,"LogIn"),n.qZA()()()(),n.TgZ(21,"div",9)(22,"form",10,11),n.NdJ("ngSubmit",function(){n.CHM(a);const c=n.MAs(23);return n.KtG(i.handleSingUp(c))}),n.TgZ(24,"h1"),n._uU(25,"SingUp"),n.qZA(),n.TgZ(26,"div",12)(27,"a",13),n._UZ(28,"i",14),n.qZA(),n.TgZ(29,"a",13),n._UZ(30,"i",15),n.qZA(),n.TgZ(31,"a",13),n._UZ(32,"i",16),n.qZA()(),n.TgZ(33,"span"),n._uU(34,"or use your account"),n.qZA(),n.YNc(35,S,2,1,"p",17),n._UZ(36,"input",18,19)(38,"input",20,21)(40,"input",22,23),n.YNc(42,E,3,2,"ng-container",24),n.YNc(43,Q,3,2,"ng-container",24),n.TgZ(44,"a",25),n._uU(45,"Forgot your password?"),n.qZA(),n.TgZ(46,"button"),n._uU(47,"SingUp"),n.qZA()()()()()}if(2&o){const a=n.MAs(39),l=n.MAs(41);n.xp6(35),n.Q6J("ngIf",i.error),n.xp6(3),n.Q6J("appEmail",i.domains),n.xp6(4),n.Q6J("ngIf",a.touched),n.xp6(1),n.Q6J("ngIf",l.touched)}},dependencies:[m.O5,p.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.On,r.F,x],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:400,800";*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#f6f5f7;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:Montserrat,sans-serif;height:80vh}h1[_ngcontent-%COMP%]{font-weight:700;margin:0}p[_ngcontent-%COMP%]{font-size:14px;font-weight:100;line-height:20px;letter-spacing:.5px;margin:20px 0 30px}span[_ngcontent-%COMP%]{font-size:12px}a[_ngcontent-%COMP%]{color:#333;font-size:14px;text-decoration:none;margin:15px 0}button[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #45D9AD;background-color:#45d9ad;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in}button[_ngcontent-%COMP%]:active{transform:scale(.95)}button[_ngcontent-%COMP%]:focus{outline:none}button.ghost[_ngcontent-%COMP%]{background-color:transparent;border-color:#fff}form[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 50px;height:100%;text-align:center}input[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%}.social-container[_ngcontent-%COMP%]{margin:20px 0}.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:1px solid #dddddd;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px}.form-container[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.sign-in-container[_ngcontent-%COMP%]{left:0;width:50%;z-index:2}.sign-up-container[_ngcontent-%COMP%]{left:0;width:50%;opacity:0;z-index:1}.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%]{transform:translate(100%)}.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%]{transform:translate(100%);opacity:1;z-index:5;animation:_ngcontent-%COMP%_show .6s}@keyframes _ngcontent-%COMP%_show{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.overlay-container[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]{transform:translate(-100%)}.overlay[_ngcontent-%COMP%]{background:#24D7BF;background:linear-gradient(to right,#b2d945,#b6d724);background-repeat:no-repeat;background-size:cover;background-position:0 0;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translate(0);transition:transform .6s ease-in-out}.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{transform:translate(50%)}.overlay-panel[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translate(0);transition:transform .6s ease-in-out}.overlay-left[_ngcontent-%COMP%]{transform:translate(-20%)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%]{transform:translate(0)}.overlay-right[_ngcontent-%COMP%]{right:0;transform:translate(0)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%]{transform:translate(20%)}.error1[_ngcontent-%COMP%]{color:red;font-size:1em;padding:0;margin:.6em 0}']})}return t})();var v=g(3684);const Y=[{path:"login",component:z},{path:"singup",component:L},{path:"profile",component:b,canActivate:[v.O],data:{title:"Profile",loginRequired:!0}},{path:"logout",component:(()=>{class t{constructor(e,o){this.router=e,this.userAuthService=o,this.userAuthService.logout(),this.router.navigate(["/"])}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(p.F0),n.Y36(u.K))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-logout"]],decls:2,vars:0,template:function(o,i){1&o&&(n.TgZ(0,"p"),n._uU(1,"logout works!"),n.qZA())}})}return t})(),canActivate:[v.O],data:{title:"logout",loginRequired:!0}}];let R=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[p.Bz.forChild(Y),p.Bz]})}return t})(),D=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[m.ez]})}return t})(),H=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[m.ez,R,p.Bz,r.u5,D]})}return t})()}}]);
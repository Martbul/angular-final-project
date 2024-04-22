"use strict";(self.webpackChunkfinal_project_client=self.webpackChunkfinal_project_client||[]).push([[258],{7258:(j,m,a)=>{a.r(m),a.d(m,{AppFinerModule:()=>Q});var g=a(6814),s=a(2895),t=a(4946),u=a(9862);let h=(()=>{class e{constructor(n){this.http=n}deleteApp(n){this.http.delete(`http://localhost:5050/app-finder/delete/${n}`,n).subscribe(o=>console.log("Success!",o),o=>console.error("Error:",o))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var C=a(7528),M=a(9462);let _=(()=>{class e{constructor(n){this.http=n,this.baseUrl="http://localhost:5050"}getApps(){return this.http.get(`${this.baseUrl}/app-finder`)}getSingleApp(n){console.log(n);const{apiUrl:o}=M.environment;return console.log(o),this.http.get(`${o}/app-finder/${n}`)}like(n,o){console.log(n),console.log(o),this.http.post(`${this.baseUrl}/app-finder/like`,{email:n,id:o}).subscribe(i=>console.log("Success!",i),i=>console.error("Error:",i))}subtrLike(n,o){this.http.post(`${this.baseUrl}/app-finder/subtrLike`,{email:n,id:o}).subscribe(i=>console.log("Success!",i),i=>console.error("Error:",i))}buy(n,o){this.http.post(`${this.baseUrl}/app-finder/buy`,{email:n,id:o}).subscribe(i=>console.log("Success!",i),i=>console.error("Error:",i))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function O(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.buy())}),t._uU(1," BUY "),t.qZA()}}function P(e,c){1&e&&(t.ynx(0),t._uU(1," You Bought this app "),t.BQk())}function x(e,c){if(1&e&&(t.TgZ(0,"button",15),t._uU(1," Edit "),t.qZA()),2&e){const n=t.oxw();t.Q6J("routerLink","/app-finder/app-finder/edit/"+n.app._id)}}function b(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.deleteApp())}),t._uU(1," Delete "),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("routerLink","/app-finder/app-finder/delete/"+n.app._id)}}function y(e,c){if(1&e&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(n.numberOfLikes)}}function v(e,c){if(1&e&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(n.numberOfLikes)}}function A(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"i",24),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.addLike())}),t.qZA()}}function k(e,c){1&e&&t._UZ(0,"i",25)}function w(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",17)(2,"div",18),t.YNc(3,y,2,1,"p",19),t.YNc(4,v,2,1,"p",19),t.qZA(),t.TgZ(5,"div",20),t.YNc(6,A,1,0,"i",21),t.YNc(7,k,1,0,"i",22),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",!n.liked),t.xp6(1),t.Q6J("ngIf",n.liked),t.xp6(2),t.Q6J("ngIf",!n.liked),t.xp6(1),t.Q6J("ngIf",n.liked)}}let Z=(()=>{class e{constructor(n,o,i,p){this.activeRoute=n,this.detailsService=o,this.userAuthService=i,this.appService=p,this.app={},this.renderTrigger=!1,this.boughtApp=!1,this.logedUser=!0,console.log(this.userAuthService.user2)}ngOnInit(){this.userAuthService.getProfile().subscribe({next:n=>{console.log(n),this.currentUser=n.username,console.log(this.currentUser)},error:n=>{console.log("Error occurred:",n)}}),null==this.userAuthService.user&&(this.logedUser=!1),this.activeRoute.params.subscribe(n=>{this.appService.getSingleApp(n.appId).subscribe(i=>{this.app=i,this.numberOfLikes=this.app.likes;const l=this.userAuthService.user.appsBought;this.liked=!!this.userAuthService.user.appsLiked.includes(this.app.title),this.boughtApp=!!l.includes(this.app.title)})})}ngOnChanges(n){}deleteApp(){this.activeRoute.params.subscribe(n=>{const o=n.appId;console.log(o),this.detailsService.deleteApp(o)})}addLike(){this.activeRoute.params.subscribe(n=>{const o=n.appId;this.userEmail=this.userAuthService.userFromLocaleStorage.email,this.appService.like(this.userEmail,o),this.numberOfLikes++,this.liked=!0,this.userAuthService.getProfile().subscribe({next:i=>{console.log(i)},error:i=>{console.log("Error occurred:",i)}})})}buy(){this.activeRoute.params.subscribe(n=>{const o=n.appId;this.userEmail=this.userAuthService.userFromLocaleStorage.email,this.appService.buy(this.userEmail,o)}),this.boughtApp=!0,this.userAuthService.getProfile().subscribe({next:n=>{console.log(n)},error:n=>{console.log("Error occurred:",n)}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(s.gz),t.Y36(h),t.Y36(C.K),t.Y36(_))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-app-details"]],features:[t.TTD],decls:27,vars:12,consts:[[1,"details-container"],[1,"content"],[1,"category"],[1,"heading"],[1,"text"],[1,"media"],["alt","",3,"src"],[1,"bottom-layout"],[1,"buttons"],[3,"click",4,"ngIf"],[4,"ngIf"],[3,"routerLink",4,"ngIf"],[3,"routerLink","click",4,"ngIf"],[1,"interactions"],[3,"click"],[3,"routerLink"],[3,"routerLink","click"],[1,"all-like"],[1,"all-like-num"],["class","likeCount",4,"ngIf"],[1,"all-like-hearth"],["class","fa-regular fa-heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart","style","color: #ff0000;",4,"ngIf"],[1,"likeCount"],[1,"fa-regular","fa-heart",3,"click"],[1,"fa-solid","fa-heart",2,"color","#ff0000"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),t._uU(4),t.qZA()(),t.TgZ(5,"div",3)(6,"h1"),t._uU(7),t.qZA(),t.TgZ(8,"h1"),t._uU(9),t.qZA()(),t.TgZ(10,"div",4)(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA()(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.TgZ(17,"div",5),t._UZ(18,"img",6),t.qZA(),t.TgZ(19,"div",7)(20,"div",8),t.YNc(21,O,2,0,"button",9),t.YNc(22,P,2,0,"ng-container",10),t.YNc(23,x,2,1,"button",11),t.YNc(24,b,2,1,"button",12),t.qZA(),t.YNc(25,w,8,4,"ng-container",10),t.qZA(),t._UZ(26,"div",13),t.qZA()()),2&o&&(t.xp6(4),t.Oqu(i.app.category),t.xp6(3),t.Oqu(i.app.title),t.xp6(2),t.hij("$",i.app.price,""),t.xp6(3),t.Oqu(i.app.description),t.xp6(2),t.hij("Last updated on: ",i.app.posted_at,""),t.xp6(2),t.hij("Creator: ",i.app.creator,""),t.xp6(2),t.s9C("src",i.app.imgUrl,t.LSH),t.xp6(3),t.Q6J("ngIf",!i.boughtApp&&i.logedUser&&i.currentUser!==i.app.creator),t.xp6(1),t.Q6J("ngIf",i.boughtApp),t.xp6(1),t.Q6J("ngIf",i.currentUser==i.app.creator),t.xp6(1),t.Q6J("ngIf",i.currentUser==i.app.creator),t.xp6(1),t.Q6J("ngIf",i.logedUser))},dependencies:[g.O5,s.rH],styles:[".details-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:70em;margin:0 auto;border:1px solid black;border-radius:1em;padding:1em}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:1em 3em}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{font-style:italic}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4em}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10em}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{display:flex;justify-content:center}.details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:30em}i[_ngcontent-%COMP%]{font-size:2.4em;cursor:pointer}.bottom-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin:2em 1em}.buttons[_ngcontent-%COMP%]{display:flex;gap:1em}.likeGroup[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:.6em}.likeGroup[_ngcontent-%COMP%]   .likeCount[_ngcontent-%COMP%]{padding-top:.3em;text-align:center;font-size:2em}.all-like[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6em}.all-like[_ngcontent-%COMP%]   .all-like-num[_ngcontent-%COMP%]{padding-top:.45em;font-size:1.8em}"]})}return e})();var r=a(95);function T(e,c){if(1&e&&(t.TgZ(0,"div",40)(1,"div",41)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"h1"),t._uU(5),t.qZA()(),t._UZ(6,"img",42),t.TgZ(7,"div",43)(8,"button",44),t._uU(9,"Details"),t.qZA()()()),2&e){const n=c.$implicit;t.xp6(3),t.Oqu(n.title),t.xp6(2),t.hij("$",n.price,""),t.xp6(1),t.s9C("src",n.imgUrl,t.LSH),t.xp6(2),t.Q6J("routerLink",n._id)}}let U=(()=>{class e{constructor(n){this.appService=n,this.apps=[]}ngOnInit(){this.fetchApps()}fetchApps(n){console.log(n?.value.title),this.appService.getApps().subscribe(o=>{if(n&&(n.value.title||n.value.price||n.value.category)){let i=o.filter(p=>{const l=p.title.toLowerCase().includes(n.value.title.toLowerCase()),d=p.price.toString().includes(n.value.price),f=p.category.toLowerCase().includes(n.value.category.toLowerCase());return l&&d&&f});this.apps=i}else this.apps=o;console.log(this.apps)})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(_))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-app-card"]],decls:66,vars:1,consts:[[1,"searchAndCards"],[1,"search-layout"],["id","header-search-people","novalidate","novalidate","autocomplete","off",1,"form-area",3,"ngSubmit"],["searchForm","ngForm"],[1,"row"],[1,"col-md-10"],[1,"styled-input","wide","multi"],["id","input-title",1,"first-name"],["type","text","name","title","id","title","autocomplete","off","data-placeholder-focus","false","ngModel",""],["titleInput","ngModel"],["width","21px","height","17px","viewBox","0 0 21 17","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"icon--check"],["id","Page-1","stroke","none","stroke-width","1","fill","none","fill-rule","evenodd","stroke-linecap","round"],["id","UI-Elements-Forms","transform","translate(-255.000000, -746.000000)","fill-rule","nonzero","stroke","#81B44C","stroke-width","3"],["id","Path-2","points","257 754.064225 263.505943 760.733489 273.634603 748"],["width","15px","height","15px","viewBox","0 0 15 15","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"icon--error"],["id","UI-Elements-Forms","transform","translate(-550.000000, -747.000000)","fill-rule","nonzero","stroke","#D0021B","stroke-width","3"],["id","Group","transform","translate(552.000000, 749.000000)"],["d","M0,11.1298982 L11.1298982,-5.68434189e-14","id","Path-2-Copy"],["d","M0,11.1298982 L11.1298982,-5.68434189e-14","id","Path-2-Copy-2","transform","translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) "],["id","input-price",1,"last-name"],["type","text","name","price","id","price","autocomplete","off","data-placeholder-focus","false","ngModel",""],["priceInput","ngModel"],["id","select-state",1,"state"],["name","category","ngModel",""],["value","Game"],["value","Social Media"],["value","Puzzle"],["value","Money"],["value","Action"],["value","Strategy"],["value","Adventure"],["width","17px","height","10px","viewBox","0 0 17 10","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"chevron-down"],["id","Page-1","stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["id","UI-Elements-Forms","transform","translate(-840.000000, -753.000000)","stroke","#4A4A4A","stroke-width","0.9"],["id","Done-Copy-2","transform","translate(622.000000, 727.000000)"],["id","Rectangle-16","transform","translate(226.400000, 27.400000) rotate(-45.000000) translate(-226.400000, -27.400000) ","points","231.8 32.8 221 32.8 221 22"],[1,"col-md-2","no-pad-left-10"],["type","submit","id","submit_btn",1,"primary-btn","serach-btn"],[1,"Cardss"],["class","app-card",4,"ngFor","ngForOf"],[1,"app-card"],[1,"el1"],["alt","",1,"media",3,"src"],[1,"bottomPart"],[3,"routerLink"]],template:function(o,i){if(1&o){const p=t.EpF();t.TgZ(0,"section",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(p);const d=t.MAs(3);return t.KtG(i.fetchApps(d))}),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t._UZ(8,"input",8,9),t.TgZ(10,"label"),t._uU(11,"Title"),t.qZA(),t.O4$(),t.TgZ(12,"svg",10)(13,"g",11)(14,"g",12),t._UZ(15,"polyline",13),t.qZA()()(),t.TgZ(16,"svg",14)(17,"g",11)(18,"g",15)(19,"g",16),t._UZ(20,"path",17)(21,"path",18),t.qZA()()()()(),t.kcU(),t.TgZ(22,"div",19),t._UZ(23,"input",20,21),t.TgZ(25,"label"),t._uU(26,"Price"),t.qZA(),t.O4$(),t.TgZ(27,"svg",10)(28,"g",11)(29,"g",12),t._UZ(30,"polyline",13),t.qZA()()(),t.TgZ(31,"svg",14)(32,"g",11)(33,"g",15)(34,"g",16),t._UZ(35,"path",17)(36,"path",18),t.qZA()()()()(),t.kcU(),t.TgZ(37,"div",22)(38,"select",23,9)(40,"option",24),t._uU(41,"Game"),t.qZA(),t.TgZ(42,"option",25),t._uU(43,"Social Media"),t.qZA(),t.TgZ(44,"option",26),t._uU(45,"Puzzle"),t.qZA(),t.TgZ(46,"option",27),t._uU(47,"Money"),t.qZA(),t.TgZ(48,"option",28),t._uU(49,"Action"),t.qZA(),t.TgZ(50,"option",29),t._uU(51,"Strategy "),t.qZA(),t.TgZ(52,"option",30),t._uU(53,"Adventure "),t.qZA()(),t.TgZ(54,"label"),t._uU(55,"Category"),t.qZA(),t.O4$(),t.TgZ(56,"svg",31)(57,"g",32)(58,"g",33)(59,"g",34),t._UZ(60,"polyline",35),t.qZA()()()()()()(),t.kcU(),t.TgZ(61,"div",36)(62,"button",37),t._uU(63," SEARCH "),t.qZA()()()()(),t.TgZ(64,"section",38),t.YNc(65,T,10,4,"div",39),t.qZA()()}2&o&&(t.xp6(65),t.Q6J("ngForOf",i.apps))},dependencies:[g.sg,s.rH,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.On,r.F],styles:[".searchAndCards[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.Cardss[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4em}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:20em;border:1px solid black;padding:2em;border-radius:1em;margin:4em 1em 1em}.app-card[_ngcontent-%COMP%]   .el1[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.app-card[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;margin:1em 0}.bottomPart[_ngcontent-%COMP%]{margin:1em 0;align-items:center;display:flex;justify-content:center}.media[_ngcontent-%COMP%]{float:left;width:200px;height:200px;object-fit:cover}.Cardss[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;margin:0 16em}.search-layout[_ngcontent-%COMP%]{display:flex;margin:2.4em 0}body[_ngcontent-%COMP%]{background:#4a3b8f;background-image:linear-gradient(-90deg,#4a3b8f 10%,#353167 88%);height:100vh;display:flex;align-items:center;justify-content:center;padding:10px}*[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}form[_ngcontent-%COMP%]{max-width:1100px;width:100%}.styled-input[_ngcontent-%COMP%]{float:left;background:#fff;border:1px solid #efefef;border-radius:1em;box-shadow:inset 0 -1px 4px #0003;width:100%;position:relative;margin-bottom:10px;font-family:Lato,sans-serif}.styled-input.multi[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-between;padding:12px 0;height:auto}.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#9b9b9b;font-size:16px;text-transform:uppercase;font-weight:700;letter-spacing:1.92px;position:absolute;top:0;left:0;transition:all .25s cubic-bezier(.2,0,.03,1);pointer-events:none}.styled-input.multi[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:10px 0 0}.styled-input.active[_ngcontent-%COMP%]{border:1px solid #d0e5ba;box-shadow:inset 0 -2px 4px #d5eebb}.styled-input[_ngcontent-%COMP%]   .icon--check[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   .icon--error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   .chevron-down[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:50%;right:2%;transform:translate(-50%,-50%);z-index:0}.styled-input[_ngcontent-%COMP%]   .icon--check[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   .icon--error[_ngcontent-%COMP%]{display:none}.styled-input[_ngcontent-%COMP%]   .icon--check[_ngcontent-%COMP%]{right:0%}.styled-input[_ngcontent-%COMP%]   input.success[_ngcontent-%COMP%] ~ .icon--check[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] ~ .icon--error[_ngcontent-%COMP%]{display:inline-block}.styled-input[_ngcontent-%COMP%]   label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#fn[_ngcontent-%COMP%]:valid ~ label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#ln[_ngcontent-%COMP%]:valid ~ label.error[_ngcontent-%COMP%]{font-size:15px;text-transform:none;letter-spacing:normal;color:#ff523d;top:53px;left:-3px}.styled-input.multi.error[_ngcontent-%COMP%]{margin-bottom:20px}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%;border-right:2px solid #ccc}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-last-of-type(1){border-right:0}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:12px}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-top:20px}.styled-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .styled-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .styled-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none}.styled-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#4a4a4a;border:0;width:90%;font-size:18px;padding-top:20px;background:transparent}.styled-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;background:transparent;border:0;appearance:none;position:relative;z-index:1;left:11px}.styled-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#fn[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#ln[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#city[filled=true][_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   #select-state[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:13px;letter-spacing:1.56px;color:#4a3b8f;top:-12.8px;transition:all .125s cubic-bezier(.2,0,.03,1)}@media (min-width: 991px){.styled-input.multi[_ngcontent-%COMP%]{height:70px}}@media (min-width: 768px) and (max-width: 990px){.styled-input.multi[_ngcontent-%COMP%]{height:60px;padding:8px 0}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-top:18px}.styled-input.multi[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:7px 0 0}.styled-input[_ngcontent-%COMP%]   input#fn[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#ln[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#city[filled=true][_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input.multi[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   #select-state[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{top:-9px}.styled-input.multi.error[_ngcontent-%COMP%]{margin-bottom:30px}.styled-input[_ngcontent-%COMP%]   label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#fn[_ngcontent-%COMP%]:valid ~ label.error[_ngcontent-%COMP%], .styled-input[_ngcontent-%COMP%]   input#ln[_ngcontent-%COMP%]:valid ~ label.error[_ngcontent-%COMP%]{font-size:13px;top:53px}.search-area[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]{height:60px;padding:0}}@media (max-width: 767.98px){.examples[_ngcontent-%COMP%]   [class^=col-][_ngcontent-%COMP%]{padding:0}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:10px;display:block;border:1px solid #efefef;border-radius:3px;box-shadow:inset 0 -1px 4px #0003;width:100%;padding:16px 16px 8px 11.2px;height:50px}.styled-input.multi[_ngcontent-%COMP%]{flex-direction:column;border:0;box-shadow:none;background:transparent;margin-bottom:0}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:12px 0 0 12px}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], .styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], .styled-input.multi[_ngcontent-%COMP%]   #select-state[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding-top:15px}.styled-input.multi[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:0;padding-top:2px;position:relative;z-index:2;width:100%}.styled-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{left:0;padding-top:2px}.styled-input.multi.error[_ngcontent-%COMP%]{margin-bottom:0}.styled-input.multi[_ngcontent-%COMP%] > div.error[_ngcontent-%COMP%]{margin-bottom:30px}.styled-input.multi[_ngcontent-%COMP%] > div.error[_ngcontent-%COMP%]   label.error[_ngcontent-%COMP%]{padding-top:0}}.no-pad-left-10[_ngcontent-%COMP%]{padding-left:5px}@media (max-width: 991px) and (min-width: 768px){.no-pad-left-10[_ngcontent-%COMP%]{padding-left:0;margin-left:-5px;width:calc(16.66666667% + 5px)}}@media (max-width: 767px){.no-pad-left-10[_ngcontent-%COMP%]{padding-left:15px;margin-left:0}}.form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;border:none;font-size:24px;background:#ffbd4a;text-align:center;color:#fff;text-transform:uppercase;font-weight:700;letter-spacing:1.01px;width:100%;height:70px;transition:all .25s ease-out;-webkit-transition:all .25s ease-out;-moz-transition:all .25s ease-out}.form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]:hover{background:#ffb12b;box-shadow:-2px -2px 4px -4px #00000005,0 3px 9px #0000001a,0 2px 4px #00000024}.form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]:focus{outline:none}@media only screen and (max-width: 991px){.form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]{font-size:20px;height:60px;padding:0}}@media only screen and (max-width: 767px){.form-area[_ngcontent-%COMP%]   button.serach-btn[_ngcontent-%COMP%]{font-size:22px;padding:7px 20px;width:100%;height:50px;border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;margin-top:-12px;margin-bottom:20px}}"]})}return e})(),I=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-app-finder"]],decls:2,vars:0,consts:[[1,"cards"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-app-card"),t.qZA())},dependencies:[U]})}return e})();var q=a(3684);let S=(()=>{class e{constructor(n){this.http=n}editApp(n,o){console.log(n),this.http.put(`http://localhost:5050/app-finder/edit/${o}`,n,o).subscribe(i=>console.log("Success!",i),i=>console.error("Error:",i))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function F(e,c){1&e&&t.GkF(0)}function E(e,c){1&e&&t.GkF(0)}function z(e,c){1&e&&t.GkF(0)}function J(e,c){1&e&&t.GkF(0)}function L(e,c){if(1&e&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.error)}}const Y=[{path:"app-finder",component:I},{path:"app-finder",children:[{path:":appId",component:Z}]},{path:"app-finder/edit/:appId",component:(()=>{class e{constructor(n,o,i,p){this.appService=n,this.activeRoute=o,this.editService=i,this.router=p,this.app={},this.error=null}ngOnInit(){this.activeRoute.params.subscribe(n=>{const o=n.appId;console.log(o),this.appService.getSingleApp(o).subscribe(i=>{this.app=i,this.title=this.app.title,this.price=this.app.price,this.description=this.app.description,this.imgUrl=this.app.imgUrl,this.category=this.app.category,this._id=this.app._id,console.log(this.app.title)})})}handleEdit(n){if(!n.invalid)return n.value.title?void(n.value.price?n.value.imgUrl?n.value.category?n.value.description?(this.editService.editApp(n.value,this._id),n.setValue({title:"",price:"",imgUrl:"",category:"",description:""}),this.error=null,this.router.navigate(["/app-finder"])):this.error="Description is required":this.error="Category is required":this.error="Image is required":this.error="Price is required"):(this.error="Title is required",void console.log("title ir required"))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(_),t.Y36(s.gz),t.Y36(S),t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-app-edit"]],decls:24,vars:10,consts:[[1,"form",3,"ngSubmit"],["editForm","ngForm"],[1,"layout"],[1,"form-name"],["type","text","placeholder","TITLE","name","title","ngModel","",1,"form-first",3,"ngModel"],["titleInput","ngModel"],["type","text","placeholder","PRICE","name","price","ngModel","",1,"form-last",3,"ngModel"],["priceInput","ngModel"],[4,"ngIf"],["type","text","placeholder","IMAGE","name","imgUrl","ngModel","",1,"form-first",3,"ngModel"],["imageInput","ngModel"],["type","text","placeholder","CATEGORY","name","category","ngModel","",1,"form-last",3,"ngModel"],["categoryInput","ngModel"],["placeholder","DESCRIPTION","name","description","ngModel","",1,"form-comment",3,"ngModel"],["descriptionInput","ngModel"],["class","error",4,"ngIf"],[1,"primary-color"],[1,"error"]],template:function(o,i){if(1&o){const p=t.EpF();t.TgZ(0,"form",0,1),t.NdJ("ngSubmit",function(){t.CHM(p);const d=t.MAs(1);return t.KtG(i.handleEdit(d))}),t.TgZ(2,"div",2)(3,"h1"),t._uU(4,"Edit App"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"input",4,5)(8,"input",6,7),t.YNc(10,F,1,0,"ng-container",8),t.qZA(),t.TgZ(11,"div",3),t._UZ(12,"input",9,10),t.YNc(14,E,1,0,"ng-container",8),t._UZ(15,"input",11,12),t.YNc(17,z,1,0,"ng-container",8),t.qZA(),t._UZ(18,"input",13,14),t.YNc(20,J,1,0,"ng-container",8),t.YNc(21,L,2,1,"p",15),t.TgZ(22,"button",16),t._uU(23,"Edit APP"),t.qZA()()()}if(2&o){const p=t.MAs(9),l=t.MAs(13),d=t.MAs(16),f=t.MAs(19);t.xp6(6),t.Q6J("ngModel",i.title),t.xp6(2),t.Q6J("ngModel",i.price),t.xp6(2),t.Q6J("ngIf",p.touched),t.xp6(2),t.Q6J("ngModel",i.imgUrl),t.xp6(2),t.Q6J("ngIf",l.touched),t.xp6(1),t.Q6J("ngModel",i.category),t.xp6(2),t.Q6J("ngIf",d.touched),t.xp6(1),t.Q6J("ngModel",i.description),t.xp6(2),t.Q6J("ngIf",f.touched),t.xp6(1),t.Q6J("ngIf",i.error)}},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F],styles:["[_ngcontent-%COMP%]:root{--bg: rgb(175, 202, 192);--placeholder: rgb(178, 207, 195);--text: rgb(149,171,165)}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.form[_ngcontent-%COMP%]{margin:0 auto}body[_ngcontent-%COMP%]{height:100vh;display:grid;place-items:center;background-color:#4a977b}.form[_ngcontent-%COMP%]{width:min(500px,90vw);display:flex;flex-direction:column;gap:1rem}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:1rem;font:900 .85rem futura,sans-serif;color:#000;text-transform:uppercase;background-color:#fff1d8;border:1px solid black;border-radius:2em;outline:0}.form[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-name[_ngcontent-%COMP%]{width:100%;padding:1rem;font:900 .85rem futura,sans-serif;color:#000;text-transform:uppercase;background-color:#ffbd4a;border:none;outline:0}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1em 4em;background-color:#fff;border:1px solid black;width:-moz-fit-content;width:fit-content;margin:1em auto 0}.form[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:7em 0}[_ngcontent-%COMP%]::placeholder{color:#000}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{background-color:#00000080}.form-name[_ngcontent-%COMP%]{display:flex;gap:1rem;padding:0;background-color:transparent}.form-comment[_ngcontent-%COMP%]{height:13rem;resize:none}.form-submit[_ngcontent-%COMP%]{color:#b2cfc3;pointer-events:none;cursor:pointer}.form-submit[_ngcontent-%COMP%]:active{background-color:#fffffff2;color:#b2cfc3}.enable[_ngcontent-%COMP%]{pointer-events:auto;color:#00d39b}.error[_ngcontent-%COMP%]{color:red;margin:1em auto 0;font-size:1.2em}.layout[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 auto}"]})}return e})(),canActivate:[q.O],data:{title:"Edit-App",loginRequired:!0}},{path:"app-finder/delete/:appId",redirectTo:"/app-finder",data:{title:"delete-app",loginRequired:!0}}];let N=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(Y),s.Bz]})}return e})(),Q=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[g.ez,N,r.u5,s.Bz]})}return e})()}}]);
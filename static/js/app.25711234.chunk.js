(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{162:function(e,t,n){"use strict";var r=n(8),o=n.n(r),i=n(0),a=n.n(i),l=n(99),s=n(23),c=n(2),p=n.n(c),u=n(3),h=n.n(u),g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Lorem Ipsum",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Lorem Ipsum is a sample project",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"https://www.google.com",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";p()(this,e),this.title=t,this.description=r,this.href=o,this.image_href=i,this.tag=n}return h()(e,[{key:"getTitle",value:function(){return this.title}},{key:"getDescription",value:function(){return this.description}},{key:"getHref",value:function(){return this.href}},{key:"getImage_href",value:function(){return this.image_href&&this.image_href.includes("drive.google.com")?"https://drive.google.com/thumbnail?id="+this.image_href.split("/d/")[1].split("/")[0]:this.image_href}}]),e}(),m=[];m.push(new g("Simple local eCommerce","[Study project]","Mockup and deploy a simple eCommerce based on Wallapop","https://github.com/pablogomezponce/PW_PWPOP_GROUP_06","https://drive.google.com/file/d/13lsRZMLVFU5t4sDFv47yJK5CVlMOCtAq/view")),m.push(new g("Remote user testing","[Internship delivery]","No cost remote user test for desktop platforms workflow and protocol","https://drive.google.com/file/d/15DpZiUZB4I0sveJ57eOS2PsNeMNTbIg_/view?usp=sharing","https://estudy.salle.url.edu/pluginfile.php/1/theme_moove/logo/1601481989/logo-lasalle-estudy.png")),m.push(new g("Simple pomodoro web app","[Discontinued]","React Native for Web app to manage study sprints","https://pgomezponce.github.io/gtd-timer/","https://avatars1.githubusercontent.com/u/9919?s=200&v=4")),m.push(new g("Pomodoro app redesign","[In Progress]",'Visual redefinition for "Simple Pomodoro Web App"',"https://drive.google.com/file/d/1TElnm_V5T1cjOnJs8K-BznVfs4LlPUdR/view?usp=sharing","https://www.adobe.com/content/dam/cc/us/en/creative-cloud/xd.svg")),m.push(new g("Interaction dashboard","[In progress]","Project associated to the GRETEL group. It is based on LEDA Principles and based my Engineering final thesis.","https://drive.google.com/file/d/1un5qq_vYRynr4WsTjWpxVwAQf1tQWgKw/view?usp=sharing","https://estudy.salle.url.edu/pluginfile.php/1/theme_moove/logo/1601481989/logo-lasalle-estudy.png")),m.push(new g("Simple Task Manager","CD/CI","A simple task manager with Firebase dependencies.","https://pgomezponce.github.io/digital-backlog/","https://github.com/pgomezponce/digital-backlog/blob/master/assets/images/favicon.png?raw=true"));var d=n(44),f=n(74),y=n(33),v=n(75),w=n(5),E=n.n(w),b=n(6),x=n.n(b),j=n(4),k=n.n(j),P=n(38),C=n(7);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x()(this,n)}}var _=function(e){var t=e.title,n=e.tag;return a.a.createElement(C.a,null,a.a.createElement(s.Text,{category:"h6",style:{textAlign:"center",backgroundColor:"gray",color:"white",paddingVertical:5}},t),""!==n?a.a.createElement(s.Text,{style:{textAlign:"center"}},n):null)},R=function(e){var t=e.href;return a.a.createElement(s.Layout,{style:{justifyContent:"center",alignItems:"flex-end",padding:10}},a.a.createElement(s.Button,{onPress:function(){d.a.openURL(t)}},"Discover it!"))},T=function(e){E()(n,e);var t=I(n);function n(){return p()(this,n),t.apply(this,arguments)}return h()(n,[{key:"render",value:function(){var e=this;return a.a.createElement(s.Card,{style:{minWidth:300,width:"25%",maxWidth:500,margin:"2%",height:300,borderRadius:25},header:function(t){return a.a.createElement(_,{title:e.props.project.title,tag:e.props.project.tag})},footer:function(t){return a.a.createElement(R,{href:e.props.project.href})}},a.a.createElement(s.Layout,{style:{height:"100%"}},a.a.createElement(s.Text,null,this.props.project.description),""!==this.props.project.image_href?a.a.createElement(P.a,{style:{width:250,height:100,marginTop:10,alignSelf:"center",resizeMode:"contain"},source:{uri:this.props.project.getImage_href()}}):a.a.createElement(C.a,null)))}}]),n}(i.Component),L=function(){return a.a.createElement(y.a,{contentContainerStyle:{width:"100%",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},style:{width:"100%",height:"90%"}},m.map((function(e){return a.a.createElement(T,{key:e.title,project:e})})))};t.a=function(){return a.a.createElement(s.ApplicationProvider,o()({},l,{theme:l.light}),a.a.createElement(f.a,null,a.a.createElement(v.a,null),a.a.createElement(s.Layout,{style:{width:"100%",backgroundColor:"#EF6969",height:50,justifyContent:"center",alignItems:"center"}},a.a.createElement(s.Text,{category:"h3"},"Pablo G\xf3mez")),a.a.createElement(s.Layout,{style:{width:"100%",backgroundColor:"#FFAAAA",height:35,justifyContent:"center",alignItems:"center"}},a.a.createElement(s.Text,{category:"h4"},"Projects")),a.a.createElement(L,null),a.a.createElement(s.Layout,{style:{alignItems:"center",justifyContent:"center"}},a.a.createElement(s.Text,{style:{textAlign:"center"}},"You may contact me at: "),a.a.createElement(s.Text,{onPress:function(){d.a.openURL("mailto:pgomezponce@gmail.com")},style:{color:"blue",textDecorationLine:"underline"}},"pgomezponce@gmail.com"))))}},163:function(e,t,n){e.exports=n(278)}},[[163,1,2]]]);
//# sourceMappingURL=app.25711234.chunk.js.map
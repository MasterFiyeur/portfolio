(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/personal_site-min.01494cdc.jpg"},function(e,t,a){e.exports=a.p+"static/media/monopoly-min.2235d3a6.jpg"},function(e,t,a){e.exports=a.p+"static/media/ascenseur-min.5def14c2.jpg"},function(e,t,a){e.exports=a.p+"static/media/bataille_navale-min.3add2f39.jpg"},function(e,t,a){e.exports=a.p+"static/media/machine_mots-min.e1b5b764.jpg"},function(e,t,a){e.exports=a.p+"static/media/myeisti-min.49f2a3da.jpg"},function(e,t,a){e.exports=a.p+"static/media/site_rencontre-min.075037e5.jpg"},function(e,t,a){e.exports=a.p+"static/media/JULIEN_Theo_CV_FR.a5f2bd45.pdf"},function(e,t,a){e.exports=a.p+"static/media/JULIEN_Theo_CV_US.cb5f2fd3.pdf"},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),o=a.n(s),r=(a(35),a(3)),c=a(4),i=a(6),m=a(5),u=(a(36),a(17),a(1)),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={show:!1,end:!1,twoPointFiveSecond:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({twoPointFiveSecond:!0})}),2e3)}},{key:"render",value:function(){var e=this;return this.state.end?l.a.createElement(u.a,{to:"/menu"}):l.a.createElement("div",{id:"body_Accueil"},l.a.createElement("div",{id:"title_Accueil"},l.a.createElement("div",{className:"wrapper_Accueil"},l.a.createElement("svg",{className:this.state.show?"svg_Accueil opacity0":"svg_Accueil",width:"170.35mm",height:"37.286mm",version:"1.1",viewBox:"0 0 250.35 37.286"},l.a.createElement("g",{transform:"translate(154.37 97.118)"},l.a.createElement("text",{x:"-152.70239",y:"-63.5",className:"text_Theo"},l.a.createElement("tspan",{x:"-152.70239",y:"-63.5",className:"tspan_Theo"},"Th\xe9o Julien")))))),l.a.createElement("div",{id:"triangle-down",className:this.state.show?"usenand":""}),l.a.createElement("div",{id:"triangle-up",className:this.state.show?"usenand":""}),l.a.createElement("div",{id:"button_Accueil",className:this.state.show||!this.state.twoPointFiveSecond?"opacity0":"opacity1",onClick:function(){e.setState({show:!0}),setTimeout((function(){return e.setState({end:!0})}),2200)}},l.a.createElement("svg",{className:"bi bi-chevron-double-left chevron-left_Accueil",width:"5.5vh",height:"5.5vh",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),l.a.createElement("svg",{className:"bi bi-chevron-double-right chevron-right_Accueil",width:"5.5vh",height:"5.5vh",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"}))),l.a.createElement("div",{style:{height:"100vh",backgroundColor:"rgb(14,12,23)"}}))}}]),a}(n.Component),h=a(10),p=(a(41),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={show:!1,hideMenu:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body_Menu"},l.a.createElement("ul",{className:"ul_Menu"},l.a.createElement(h.b,{to:"/"},l.a.createElement("li",{datatype:"Home",className:"li_Menu"},l.a.createElement("div",{className:"a_Menu "+(1===this.state.hideMenu?"opacity1":0!==this.state.hideMenu&&"opacity0"),onMouseOver:function(){return e.setState({hideMenu:1})},onMouseOut:function(){return e.setState({hideMenu:0})}},"Home"))),l.a.createElement(h.b,{to:"/a-propos"}," ",l.a.createElement("li",{datatype:"About me",className:"li_Menu"},l.a.createElement("div",{className:"a_Menu "+(2===this.state.hideMenu?"opacity1":0!==this.state.hideMenu&&"opacity0"),onMouseOver:function(){return e.setState({hideMenu:2})},onMouseOut:function(){return e.setState({hideMenu:0})}},"About me"))),l.a.createElement(h.b,{to:"/projets"},l.a.createElement("li",{datatype:"Projects",className:"li_Menu"},l.a.createElement("div",{className:"a_Menu "+(3===this.state.hideMenu?"opacity1":0!==this.state.hideMenu&&"opacity0"),onMouseOver:function(){return e.setState({hideMenu:3})},onMouseOut:function(){return e.setState({hideMenu:0})}},"Projects"))),l.a.createElement(h.b,{to:"/contact"},l.a.createElement("li",{datatype:"Contact",className:"li_Menu"},l.a.createElement("div",{className:"a_Menu "+(4===this.state.hideMenu?"opacity1":0!==this.state.hideMenu&&"opacity0"),onMouseOver:function(){return e.setState({hideMenu:4})},onMouseOut:function(){return e.setState({hideMenu:0})}},"Contact")))))}}]),a}(n.Component)),v=(a(42),a(21)),E=a.n(v),g=a(22),f=a.n(g),b=a(23),_=a.n(b),y=a(24),w=a.n(y),N=a(25),j=a.n(N),P=a(26),k=a.n(P),M=a(27),I=a.n(M),C=(a(43),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={back:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.state.back?l.a.createElement(u.a,{to:"/menu"}):l.a.createElement("svg",{id:"backArrow",onClick:function(){e.setState({back:!0})},width:"6vh",height:"6vh",viewBox:"0 0 16 16",className:"bi bi-arrow-bar-left",fill:"#fff",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"}))}}]),a}(n.Component)),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={show:!1},n}return Object(c.a)(a,[{key:"openURL",value:function(e){window.open(e,"_blank").focus()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body_Projets"},l.a.createElement(C,null),l.a.createElement("h1",{className:"title_Projets"},"Projects"),l.a.createElement("div",{className:"all_Projet_Projets"},l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:E.a,alt:"Site personnel"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Portfolio")," - July 2020"),l.a.createElement("div",{className:"description_text_Projets"},"Website in the purpose to introduce myself with my projects."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Languages : HTML / CSS / JS (React)"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/portfolio")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Portfolio"),l.a.createElement("h4",null,"July 2020"),l.a.createElement("div",null,"Languages : HTML / CSS / JS (React)"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"Website in the purpose to introduce myself with my projects."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/portfolio")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:k.a,alt:"MyEISTI"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"MyEISTI")," - June 2020"),l.a.createElement("div",{className:"description_text_Projets"},"An application firstly dedicated to facilitate the call roll of teachers at the beginning of the course, but which also contains other features."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Languages : Java / PHP / SQL"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/MyEistiApp")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"MyEISTI"),l.a.createElement("h4",null,"June 2020"),l.a.createElement("div",null,"Languages : Java / PHP / SQL"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"An application firstly dedicated to facilitate the call roll of teachers at the beginning of the course, but which also contains other features."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/MyEistiApp")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:I.a,alt:"Site rencontre"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Dating site")," - June 2020"),l.a.createElement("div",{className:"description_text_Projets"},"A website that offers to users to like or dislike profiles and to establish communication between two users if they like each other."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Languages : HTML / CSS / JS (React) / PHP / SQL"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/meeting-app-for-students")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Dating site"),l.a.createElement("h4",null,"June 2020"),l.a.createElement("div",null,"Languages : HTML / CSS / JS (React) / PHP / SQL"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"A website that offers to users to like or dislike profiles and to establish communication between two users if they like each other."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/meeting-app-for-students")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:w.a,alt:"Bataille navale"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Battleship")," - January 2020"),l.a.createElement("div",{className:"description_text_Projets"},"A battleship game whose rules can be changed."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Language : C"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/battleships")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Battleship"),l.a.createElement("h4",null,"January 2020"),l.a.createElement("div",null,"Language : C"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"A battleship game whose rules can be changed."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/battleships")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:_.a,alt:"Ascenseur"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Ascenseur")," - June 2019"),l.a.createElement("div",{className:"description_text_Projets"},"A card game where you can bet how many rounds you will win."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Language : Pascal"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/ascenseur")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Ascenseur"),l.a.createElement("h4",null,"June 2019"),l.a.createElement("div",null,"Language : Pascal"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"A card game where you can bet how many rounds you will win."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/ascenseur")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:j.a,alt:"Machine \xe0 inventer des mots"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Word making machine")," - January 2019"),l.a.createElement("div",{className:"description_text_Projets"},"Invention of words according to the probabilities of the sequences of letters in a dictionary."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Language : Pascal"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/inventing-machine")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Word making machine"),l.a.createElement("h4",null,"January 2019"),l.a.createElement("div",null,"Language : Pascal"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"Invention of words according to the probabilities of the sequences of letters in a dictionary."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/inventing-machine")}},"GitHub"))))),l.a.createElement("div",{className:"liste_Projet_Projets"},l.a.createElement("img",{className:"img_large",src:f.a,alt:"Monopoly"}),l.a.createElement("div",{className:"description_large_Projets d-none d-lg-flex"},l.a.createElement("h1",null,l.a.createElement("span",{className:"project_title"},"Monopoly")," - June 2018"),l.a.createElement("div",{className:"description_text_Projets"},"A monopoly in which we can buy the classrooms of my high school."),l.a.createElement("div",{className:"info_info-button_Projets"},l.a.createElement("div",{className:"langages_lg_Projets"},"Languages : HTML / CSS / JS"),l.a.createElement("div",{className:"voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/monopoly")}},"GitHub"))),l.a.createElement("div",{className:"description_nolarge_Projets d-lg-none d-block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-4"},l.a.createElement("h1",null,"Monopoly"),l.a.createElement("h4",null,"June 2018"),l.a.createElement("div",null,"Languages : HTML / CSS / JS"),l.a.createElement("hr",{className:"d-md-none d-sm-none"})),l.a.createElement("div",{className:"col-12 col-sm-8 description_centered_Projets"},l.a.createElement("div",null,"A monopoly in which we can buy the classrooms of my high school."),l.a.createElement("div",{className:"btn_voir_Projets",onClick:function(){return e.openURL("https://github.com/MasterFiyeur/monopoly")}},"GitHub")))))))}}]),a}(n.Component),L=(a(44),a(28)),A=a.n(L),x=a(29),O=a.n(x),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={IAM:"Th\xe9o"},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){switch(e.state.IAM){case"Th\xe9o":e.setState({IAM:"a computer engineering student"});break;case"a computer engineering student":e.setState({IAM:"a figure skater"});break;case"a figure skater":e.setState({IAM:"Th\xe9o"});break;default:e.setState({IAM:"Th\xe9o"}),console.log("Default case switch this.interval")}}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",{className:"body_APropos"},l.a.createElement(C,null),l.a.createElement("div",{className:"banner_APropos"},l.a.createElement("h1",{className:"title"},"I'm "+this.state.IAM)),l.a.createElement("svg",{width:"10vh",height:"10vh",viewBox:"0 0 16 16",className:"bi bi-chevron-compact-down APropos_down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})),l.a.createElement("div",{className:"content_APropos"},l.a.createElement("div",{className:"APropos_text"},"You can find my CV ",l.a.createElement("b",{onClick:function(){return window.open(O.a,"_blank").focus()}},"there")," (french version\xa0",l.a.createElement("b",{onClick:function(){return window.open(A.a,"_blank").focus()}},"here"),")."),l.a.createElement("h1",null," My life's summary"),l.a.createElement("div",{className:"APropos_text"},"My name is Th\xe9o Julien, I'm 20 years old and I'm currently in my first year of engineering school in computer science. I'm from Orl\xe9ans but I moved house to Cergy for ice skating. In my second year in high school I decided to stop figure skating because high level sport requires a lot of sacrifices and I had already enjoyed it a lot so I focused on studies and other personal projects such as my first lines of code ! I obtained my scientific baccalaureate (high school diploma) option Computer Science and Numerical Sciences with mention bien (good), I got 20/20 in my option. After high school, I joined the EISTI's integrated preparatory class (currently CY Tech) because the classic cursus to obtain the engineering degree is to do 2 years of preparatory class after the baccalaureate then 3 years in an engineering school and I want to be an engineer. EISTI was my first choice because there was more computer science in the program than other schools and I was already passionate about computer science at that time. These two years were difficult, but I also enjoyed them a lot because at the end of each semester we had an IT project to do. Here are my averages of the computer science teaching unit during the preparatory class :",l.a.createElement("ul",null,l.a.createElement("li",null,"Semester 1 : 19.5/20 (class average : \xa0\xa09.78/20)"),l.a.createElement("li",null,"Semester 2 : 19.0/20 (class average : 10.23/20)"),l.a.createElement("li",null,"Semester 3 : 17.5/20 (class average : 11,27/20)"),l.a.createElement("li",null,"Semester 4 : 19.5/20 (class average : 15.25/20)")),"Validating my preparatory class in June 2020, I am now in the first year of the engineering cycle at CY Tech (ex-EISTI) so in my third year after the baccalaureate."),l.a.createElement("h1",null,"IT in my life"),l.a.createElement("div",{className:"APropos_text"},"In 2016 at the end of my first year in high school I wrote my first line of code which was in VB.NET for Windows software development. I followed some tutorials on the internet to understand how coding works. Very quickly I became involved in small projects that made IT more and more fascinating and interesting for me, so I spent most of my free time writing code. My first program was a kitchen timer, we could choose what we wanted to cook (eggs, pasta...) and a timer was launched according to what we had chosen. Always in search of the possibilities that computer science offers, I developed several other personal programs and then chose the computer science option of the baccalaureate where I was introduced to web development. During my last year of high school I was also interested in hardware, I wanted to go beyond and understand how a computer works so I learned about the functions of the components that made a computer and then I bought each part individually and assembled my computer at home. Everything I had discovered about computer science fascinated me so being curious about what I didn't know yet I decided to make computer science my professional orientation. When we had projects during my preparatory class years, I did first what was asked in the topic given by the teachers and then it was like a competition between two other classmates and me, whoever had the best program with the most features. You can see them ",l.a.createElement(h.b,{to:"/projets"},l.a.createElement("b",null,"here")),". I am passionate about the different fields of computer science and I see a lot of opportunities for the future to make this world a better place."),l.a.createElement("div",{className:"APropos_quote"},"We don't know what the future will be made of, but we know who will."),l.a.createElement("h1",null,"More about me..."),l.a.createElement("div",{className:"APropos_text"},"There are a lot of things I do at the same time of school. I am a former high level figure skating athlete, I was twice French champion and have travelled to Hungary, Latvia, Italy and Spain to do competitions. Currently I am no longer figure skating but I do coach groups of skaters and I judge a few competitions. Since September 2019 I am an ambassador of my school, I represent it at student fairs and I present the school at open days. I am involved as an ambassador because I am proud of my school and I like the social contact with other people who want to discover my school. And since this year I am a tutor at Parkours, I go to middle schools to help people with their homeworks in small groups (usually 5 students). As you will have understood, this activity is very pleasant for me because I love to pass on my knowledge and intellectual curiosity.",l.a.createElement("br",null),"Here is a video of me doing figure skating :"),l.a.createElement("div",{className:"APropos_video"},l.a.createElement("iframe",{src:"https://www.youtube.com/embed/xCseddb6-Uo",frameBorder:"0",allowFullScreen:!0,title:"Th\xe9o Julien doing figure skating"}))))}}]),a}(n.Component),H=(a(45),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"openURL",value:function(e){window.open(e,"_blank").focus()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body_Contact"},l.a.createElement(C,null),l.a.createElement("h1",{className:"title_Contact"},"Contact"),l.a.createElement("div",{className:"Contact_icons"},l.a.createElement("div",{className:"Contact_square"},l.a.createElement("div",{className:"Contact_link",onClick:function(){return e.openURL("https://github.com/MasterFiyeur")}},l.a.createElement("div",{className:"layer"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"fab fa-github"})),l.a.createElement("div",{className:"link_text"},"GitHub")),l.a.createElement("div",{className:"Contact_link",onClick:function(){return e.openURL("https://www.linkedin.com/in/th%C3%A9o-julien-7888981ab/")}},l.a.createElement("div",{className:"layer"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"fab fa-linkedin-in"})),l.a.createElement("div",{className:"link_text"},"LinkedIn"))),l.a.createElement("div",{className:"Contact_square"},l.a.createElement("div",{className:"Contact_link"},l.a.createElement("div",{className:"layer"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"far fa-envelope"})),l.a.createElement("div",{className:"link_text"},"julientheo@eisti.eu")),l.a.createElement("div",{className:"Contact_link"},l.a.createElement("div",{className:"layer"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",{className:"fas fa-phone"})),l.a.createElement("div",{className:"link_text"},"(+33)6.86.25.88.50")))),l.a.createElement("div",{className:"Contact_footer"},"\xa9 2020 Th\xe9o Julien - All right reserved"))}}]),a}(n.Component)),J=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/",exact:!0},l.a.createElement(d,null)),l.a.createElement(u.b,{path:"/a-propos"},l.a.createElement(T,null)),l.a.createElement(u.b,{path:"/contact"},l.a.createElement(H,null)),l.a.createElement(u.b,{path:"/menu"},l.a.createElement(p,null)),l.a.createElement(u.b,{path:"/projets"},l.a.createElement(S,null)))))}}]),a}(n.Component);a(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.0dd1338e.chunk.js.map
(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],f=0,d=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"49d8":function(e,t,a){"use strict";a("af67")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("034f"),a("2877")),r={},c=Object(s["a"])(r,o,i,!1,null,null,null),l=c.exports,u=a("9483");Object(u["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contenedor"},[a("div",{staticClass:"seccion"},[a("div",{staticClass:"w-100 text-center"},[a("boton-de-whatsapp"),a("encabezado"),a("redes-sociales",{attrs:{icono:"fa-facebook",descripcion:"Sígueme en Facebook",clases:"mt-5",enlace:"http://facebook.com/ejonathanv"}}),a("redes-sociales",{attrs:{icono:"fa-instagram",descripcion:"Sígueme en Instagram",clases:"mt-4",enlace:"http://instagram.com/ejonathanv"}}),a("redes-sociales",{attrs:{icono:"fa-linkedin",descripcion:"Sígueme en LinkedIn",clases:"mt-4",enlace:"https://www.linkedin.com/in/ejonathanv/"}}),a("p",{staticClass:"text-muted small mt-5"},[e._v("©"+e._s(e.fecha)+" Jonathan Velazquez, Desarrollador Web.")])],1)]),e._m(0)])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seccion oscura"},[a("div",{staticClass:"w-100 text-center text-md-left"},[a("h3",{staticClass:"text-white"},[e._v("Hola!")]),a("p",{staticClass:"mt-4 text-white-50 descripcion"},[e._v(" Mi nombre es Jonathan Velazquez, vivo en Tijuana Baja California y tengo 33 años, me dedico a programar aplicaciones para la web desde el 2012. Como desarrollador web busco siempre mantener limpieza y simplicidad en backend y frontend. ")]),a("h3",{staticClass:"text-white mt-5 mb-4"},[e._v("Tecnologías que utilizo")]),a("i",{staticClass:"fab fa-html5 text-white-50 icono-tec",attrs:{title:"HTML"}}),a("i",{staticClass:"fab fa-css3-alt text-white-50 icono-tec",attrs:{title:"CSS"}}),a("i",{staticClass:"fab fa-js text-white-50 icono-tec",attrs:{title:"Javascript"}}),a("i",{staticClass:"fab fa-php text-white-50 icono-tec",attrs:{title:"PHP"}}),a("i",{staticClass:"fab fa-laravel text-white-50 icono-tec",attrs:{title:"Laravel - Framework"}}),a("i",{staticClass:"fab fa-vuejs text-white-50 icono-tec",attrs:{title:"Vue.js"}}),a("i",{staticClass:"fab fa-git text-white-50 icono-tec",attrs:{title:"Git"}})])])}],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"d-inline-block whatsapp rounded mb-7 text-center",attrs:{href:"https://wa.me/6643864368"}},[a("i",{staticClass:"fab fa-whatsapp"}),e._v(" Hablemos por WhatsApp ")])}],b={name:"BotonDeWhatsapp",data(){return{}}},v=b,g=(a("ae9e"),Object(s["a"])(v,m,h,!1,null,"d224c5f2",null)),w=g.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-block align-items-center mt-4"},[a("div",{staticClass:"avatar d-inline-block mb-3",staticStyle:{"background-image":"url('/img/jonathan_velazquez.jpg')"}}),a("div",[a("h2",{staticClass:"nombre"},[a("b",[e._v("Jonathan Velazquez")])]),a("p",{staticClass:"lead m-0"},[e._v("Desarrollador Web")])])])}],C={name:"Encabezado",data(){return{}}},y=C,j=(a("49d8"),Object(s["a"])(y,_,x,!1,null,"ed80ee3e",null)),k=j.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"enlace",class:e.clases,attrs:{href:e.enlace,target:"_blank"}},[a("i",{staticClass:"fab fa-fw fa-lg mr-3 icono",class:e.icono}),a("b",{domProps:{textContent:e._s(e.descripcion)}})])},P=[],z={name:"RedesSociales",props:["enlace","icono","descripcion","clases"],data(){return{}}},S=z,E=(a("d674"),Object(s["a"])(S,O,P,!1,null,"51451762",null)),$=E.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-100 proyecto p-5 d-flex flex-column",style:e.imagen_de_fondo},[a("h3",{staticClass:"text-white",domProps:{textContent:e._s(e.titulo)}}),a("p",{staticClass:"text-white-50",domProps:{textContent:e._s(e.fecha)}}),a("a",{staticClass:"text-white mt-auto",attrs:{href:"#"}},[e._v("Ver proyecto")])])},D=[],q={name:"PrevisualizacionDeProyecto",props:["id","imagen","titulo","fecha"],data(){return{imagen_de_fondo:{backgroundImage:"url('"+this.imagen+"')"}}}},J=q,L=(a("6f09"),Object(s["a"])(J,A,D,!1,null,"7ce9ca97",null)),M=L.exports,T={name:"Inicio",components:{BotonDeWhatsapp:w,Encabezado:k,RedesSociales:$,PrevisualizacionDeProyecto:M},data(){return{fecha:(new Date).getFullYear(),proyectos:[{id:1,imagen:"http://placehold.it/1300x700",titulo:"Lorem ipsum ad his scripta blandit partiendo",fecha:"06 Abril 2021"},{id:2,imagen:"http://placehold.it/1300x700",titulo:"Lorem ipsum ad his scripta blandit partiendo",fecha:"06 Abril 2021"},{id:3,imagen:"http://placehold.it/1300x700",titulo:"Lorem ipsum ad his scripta blandit partiendo",fecha:"06 Abril 2021"}]}}},F=T,I=(a("9bb2"),Object(s["a"])(F,d,p,!1,null,"472cd276",null)),V=I.exports;n["a"].use(f["a"]);const W=[{path:"/",name:"Inicio",component:V}],B=new f["a"]({mode:"history",base:"/",routes:W});var H=B,N=a("2f62");n["a"].use(N["a"]);var R=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4989"),a("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:H,store:R,render:function(e){return e(l)}}).$mount("#app")},"57f7":function(e,t,a){},"6f09":function(e,t,a){"use strict";a("fd69")},"85ec":function(e,t,a){},"9bb2":function(e,t,a){"use strict";a("acb5")},acb5:function(e,t,a){},ae9e:function(e,t,a){"use strict";a("57f7")},af67:function(e,t,a){},b51e:function(e,t,a){},d674:function(e,t,a){"use strict";a("b51e")},fd69:function(e,t,a){}});
//# sourceMappingURL=app.d4dfad3e.js.map
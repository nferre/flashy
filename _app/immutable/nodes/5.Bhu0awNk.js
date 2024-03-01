import{s as Y,d as H,n as z,r as ie}from"../chunks/scheduler.CEdikFY2.js";import{S as F,i as G,e as x,k as L,s as I,c as $,a as w,l as U,d as v,j as D,h as M,b as _,f as j,m as c,n as X,z as ae,o as te,A as oe,t as S,r as ce,q as de,g as A,v as q,w as T,x as W,y as B}from"../chunks/index.DEczat12.js";import{a as J,B as fe}from"../chunks/buttons.7AitpKBR.js";import{d as Z,g as ue,I as he}from"../chunks/icon_streak.Dq-VWyb2.js";function Q(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function me(r){let e,t,s,f,u,a,d="Session finished",h,n;return{c(){e=x("div"),t=x("div"),s=x("span"),f=L(r[0]),u=I(),a=x("span"),a.textContent=d,this.h()},l(l){e=$(l,"DIV",{class:!0});var i=w(e);t=$(i,"DIV",{class:!0});var m=w(t);s=$(m,"SPAN",{class:!0});var o=w(s);f=U(o,r[0]),o.forEach(v),u=D(m),a=$(m,"SPAN",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-v5qh7d"&&(a.textContent=d),m.forEach(v),i.forEach(v),this.h()},h(){_(s,"class","text-green-600 text-5xl"),_(a,"class",""),_(t,"class","flex flex-col justify-around items-center font-virgil text-2xl h-full py-6"),_(e,"class","flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg")},m(l,i){j(l,e,i),c(e,t),c(t,s),c(s,f),c(t,u),c(t,a),h||(n=H(J.call(null,s,{type:"underline",iterations:3,visible:!0,strokeWidth:4,color:"#2f9e44"})),h=!0)},p(l,[i]){i&1&&X(f,l[0])},i:z,o:z,d(l){l&&v(e),h=!1,n()}}}function ve(r,e,t){let s;return Z.subscribe(f=>{t(0,s=f.nb_session)}),[s]}class ge extends F{constructor(e){super(),G(this,e,ve,me,Y,{})}}function pe(r){let e,t,s,f,u,a,d,h="card memorized",n,l;return{c(){e=x("div"),t=x("div"),s=x("span"),f=L(r[0]),u=L("%"),a=I(),d=x("span"),d.textContent=h,this.h()},l(i){e=$(i,"DIV",{class:!0});var m=w(e);t=$(m,"DIV",{class:!0});var o=w(t);s=$(o,"SPAN",{class:!0});var k=w(s);f=U(k,r[0]),u=U(k,"%"),k.forEach(v),a=D(o),d=$(o,"SPAN",{class:!0,"data-svelte-h":!0}),M(d)!=="svelte-1j1bdr3"&&(d.textContent=h),o.forEach(v),m.forEach(v),this.h()},h(){_(s,"class","text-orange-400 text-5xl"),_(d,"class",""),_(t,"class","flex flex-col justify-around items-center font-virgil text-2xl h-full sm:py-6 py-4"),_(e,"class","flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg")},m(i,m){j(i,e,m),c(e,t),c(t,s),c(s,f),c(s,u),c(t,a),c(t,d),n||(l=H(J.call(null,s,{type:"underline",iterations:3,visible:!0,strokeWidth:3,color:"#fb923c"})),n=!0)},p(i,[m]){m&1&&X(f,i[0])},i:z,o:z,d(i){i&&v(e),n=!1,l()}}}function xe(r,e,t){let s=0;return Z.subscribe(f=>{t(0,s=f.card_memorized)}),[s]}class $e extends F{constructor(e){super(),G(this,e,xe,pe,Y,{})}}function _e(r){let e,t,s,f,u,a,d="until next session",h,n;return{c(){e=x("div"),t=x("div"),s=x("span"),f=L(r[0]),u=I(),a=x("span"),a.textContent=d,this.h()},l(l){e=$(l,"DIV",{class:!0});var i=w(e);t=$(i,"DIV",{class:!0});var m=w(t);s=$(m,"SPAN",{class:!0});var o=w(s);f=U(o,r[0]),o.forEach(v),u=D(m),a=$(m,"SPAN",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-67rvol"&&(a.textContent=d),m.forEach(v),i.forEach(v),this.h()},h(){_(s,"class","text-green-600 text-3xl"),_(a,"class","max-w-[90%]"),_(t,"class","flex flex-col justify-center items-center font-virgil text-2xl size-full gap-y-5"),_(e,"class","flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg")},m(l,i){j(l,e,i),c(e,t),c(t,s),c(s,f),c(t,u),c(t,a),h||(n=H(J.call(null,s,{type:"underline",iterations:2,visible:!0,strokeWidth:3})),h=!0)},p(l,[i]){i&1&&X(f,l[0])},i:z,o:z,d(l){l&&v(e),h=!1,n()}}}function be(r,e,t){let s,f;return Z.subscribe(u=>{s=u.timer}),setInterval(()=>{t(0,f=ue(s))},1e3),[f]}class ye extends F{constructor(e){super(),G(this,e,be,_e,Y,{})}}function se(r,e,t){const s=r.slice();return s[4]=e[t],s[6]=t,s}function le(r){let e,t=r[4]+"",s,f,u,a,d;function h(){return r[3](r[6])}return{c(){e=x("div"),s=L(t),f=I(),this.h()},l(n){e=$(n,"DIV",{class:!0});var l=w(e);s=U(l,t),f=D(l),l.forEach(v),this.h()},h(){_(e,"class",u=`select-none rounded-lg text-white hover:ring-4 ${r[0]==r[6]?"ring-4 ring-blue-500":""} border-[3px] py-1 px-3`),te(e,"border-color",r[2][r[6]%4].border),te(e,"background-color",r[2][r[6]%4].bg)},m(n,l){j(n,e,l),c(e,s),c(e,f),a||(d=oe(e,"click",h),a=!0)},p(n,l){r=n,l&1&&u!==(u=`select-none rounded-lg text-white hover:ring-4 ${r[0]==r[6]?"ring-4 ring-blue-500":""} border-[3px] py-1 px-3`)&&_(e,"class",u)},d(n){n&&v(e),a=!1,d()}}}function we(r){let e,t,s,f="Tags",u,a,d,h,n=Q(r[1]),l=[];for(let i=0;i<n.length;i+=1)l[i]=le(se(r,n,i));return{c(){e=x("div"),t=x("div"),s=x("h2"),s.textContent=f,u=I(),a=x("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=$(i,"DIV",{class:!0});var m=w(e);t=$(m,"DIV",{class:!0});var o=w(t);s=$(o,"H2",{"data-svelte-h":!0}),M(s)!=="svelte-k21knl"&&(s.textContent=f),u=D(o),a=$(o,"DIV",{class:!0});var k=w(a);for(let C=0;C<l.length;C+=1)l[C].l(k);k.forEach(v),o.forEach(v),m.forEach(v),this.h()},h(){_(a,"class","flex flex-wrap gap-5 place-content-center"),_(t,"class","flex flex-col items-center justify-center gap-y-5 mb-8 max-w-full h-full"),_(e,"class","basis-1/2 border-2 border-slate-600 rounded-xl shadow-lg font-virgil text-2xl")},m(i,m){j(i,e,m),c(e,t),c(t,s),c(t,u),c(t,a);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(a,null);d||(h=H(J.call(null,s,{type:"underline",visible:!0,strokeWidth:2,iterations:2})),d=!0)},p(i,[m]){if(m&7){n=Q(i[1]);let o;for(o=0;o<n.length;o+=1){const k=se(i,n,o);l[o]?l[o].p(k,m):(l[o]=le(k),l[o].c(),l[o].m(a,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},i:z,o:z,d(i){i&&v(e),ae(l,i),d=!1,h()}}}function ke(r,e,t){let s=-1;return[s,["rein","poumon","vessie","coeur","rate"],[{bg:"#ef4444",border:"#b91c1c"},{bg:"#14b8a6",border:"#0f766e"},{bg:"#06b6d4",border:"#0e7490"},{bg:"#a855f7",border:"#7e22ce"}],d=>{t(0,s=s==d?-1:d)}]}class Ee extends F{constructor(e){super(),G(this,e,ke,we,Y,{})}}function re(r,e,t){const s=r.slice();return s[1]=e[t],s}function ne(r){let e,t,s,f=r[1].letter+"",u,a,d;return t=new he({props:{size:"size-10",mode:r[1].mode}}),{c(){e=x("div"),q(t.$$.fragment),s=I(),u=L(f),a=I(),this.h()},l(h){e=$(h,"DIV",{class:!0});var n=w(e);T(t.$$.fragment,n),s=D(n),u=U(n,f),a=D(n),n.forEach(v),this.h()},h(){_(e,"class","flex flex-col items-center")},m(h,n){j(h,e,n),W(t,e,null),c(e,s),c(e,u),c(e,a),d=!0},p:z,i(h){d||(S(t.$$.fragment,h),d=!0)},o(h){A(t.$$.fragment,h),d=!1},d(h){h&&v(e),B(t)}}}function Ce(r){let e,t,s,f="Streak this week :",u,a,d,h,n,l,i="Total streak :",m,o,k="12 🔥",C,V,P,p=Q(r[0]),g=[];for(let b=0;b<p.length;b+=1)g[b]=ne(re(r,p,b));const N=b=>A(g[b],1,1,()=>{g[b]=null});return{c(){e=x("div"),t=x("div"),s=x("h2"),s.textContent=f,u=I(),a=x("div");for(let b=0;b<g.length;b+=1)g[b].c();d=I(),h=x("div"),n=x("h2"),l=x("span"),l.textContent=i,m=I(),o=x("span"),o.textContent=k,this.h()},l(b){e=$(b,"DIV",{class:!0});var E=w(e);t=$(E,"DIV",{class:!0});var y=w(t);s=$(y,"H2",{class:!0,"data-svelte-h":!0}),M(s)!=="svelte-1c81r2u"&&(s.textContent=f),u=D(y),a=$(y,"DIV",{class:!0});var K=w(a);for(let R=0;R<g.length;R+=1)g[R].l(K);K.forEach(v),y.forEach(v),d=D(E),h=$(E,"DIV",{class:!0});var ee=w(h);n=$(ee,"H2",{class:!0});var O=w(n);l=$(O,"SPAN",{"data-svelte-h":!0}),M(l)!=="svelte-ygqcy1"&&(l.textContent=i),m=D(O),o=$(O,"SPAN",{class:!0,"data-svelte-h":!0}),M(o)!=="svelte-qa0sc0"&&(o.textContent=k),O.forEach(v),ee.forEach(v),E.forEach(v),this.h()},h(){_(s,"class","m-2"),_(a,"class","flex"),_(t,"class","flex flex-col items-center justify-center basis-1/2 gap-y-5"),_(o,"class","text-2xl text-red-500 ml-2 text-truncate"),_(n,"class","flex sm:inline flex-col items-center"),_(h,"class","flex items-center basis-1/2"),_(e,"class","flex flex-col items-center basis-1/2 border-2 border-slate-600 rounded-xl shadow-lg font-virgil text-2xl")},m(b,E){j(b,e,E),c(e,t),c(t,s),c(t,u),c(t,a);for(let y=0;y<g.length;y+=1)g[y]&&g[y].m(a,null);c(e,d),c(e,h),c(h,n),c(n,l),c(n,m),c(n,o),C=!0,V||(P=[H(J.call(null,s,{type:"underline",visible:!0,iterations:1})),H(J.call(null,l,{type:"underline",visible:!0,padding:2})),H(J.call(null,o,{type:"circle",visible:!0,color:"#ef4444",padding:10}))],V=!0)},p(b,[E]){if(E&1){p=Q(b[0]);let y;for(y=0;y<p.length;y+=1){const K=re(b,p,y);g[y]?(g[y].p(K,E),S(g[y],1)):(g[y]=ne(K),g[y].c(),S(g[y],1),g[y].m(a,null))}for(ce(),y=p.length;y<g.length;y+=1)N(y);de()}},i(b){if(!C){for(let E=0;E<p.length;E+=1)S(g[E]);C=!0}},o(b){g=g.filter(Boolean);for(let E=0;E<g.length;E+=1)A(g[E]);C=!1},d(b){b&&v(e),ae(g,b),V=!1,ie(P)}}}function Ie(r){return[[{mode:"check",letter:"L"},{mode:"check",letter:"M"},{mode:"cross",letter:"M"},{mode:"cross_gray",letter:"J"},{mode:"cross_gray",letter:"V"},{mode:"cross_gray",letter:"S"},{mode:"cross_gray",letter:"D"}]]}class De extends F{constructor(e){super(),G(this,e,Ie,Ce,Y,{})}}function Ve(r){let e,t,s,f,u,a,d,h,n,l,i,m,o,k,C,V,P;return s=new ge({}),u=new $e({}),d=new ye({}),l=new Ee({}),m=new De({}),V=new fe({props:{style:"rough",color:"#14b8a6",text:"STUDY !"}}),{c(){e=x("div"),t=x("div"),q(s.$$.fragment),f=I(),q(u.$$.fragment),a=I(),q(d.$$.fragment),h=I(),n=x("div"),q(l.$$.fragment),i=I(),q(m.$$.fragment),o=I(),k=x("div"),C=x("a"),q(V.$$.fragment),this.h()},l(p){e=$(p,"DIV",{class:!0});var g=w(e);t=$(g,"DIV",{class:!0});var N=w(t);T(s.$$.fragment,N),f=D(N),T(u.$$.fragment,N),a=D(N),T(d.$$.fragment,N),N.forEach(v),h=D(g),n=$(g,"DIV",{class:!0});var b=w(n);T(l.$$.fragment,b),i=D(b),T(m.$$.fragment,b),b.forEach(v),g.forEach(v),o=D(p),k=$(p,"DIV",{class:!0});var E=w(k);C=$(E,"A",{class:!0,href:!0});var y=w(C);T(V.$$.fragment,y),y.forEach(v),E.forEach(v),this.h()},h(){_(t,"class","flex flex-col md:flex-row w-[70%] md:size-full gap-5"),_(n,"class","flex flex-col md:flex-row w-[70%] md:size-full gap-5"),_(e,"class","flex flex-col max-w-[95%] lg:max-h-[85%] mb-28 md:mb-0 items-center size-full gap-5"),_(C,"class","cursor-pointer"),_(C,"href","/flashy/study"),_(k,"class","fixed z-10 bottom-0 flex justify-center max-h-[15%] w-full lg:w-[80%] bg-yellow-50 py-5")},m(p,g){j(p,e,g),c(e,t),W(s,t,null),c(t,f),W(u,t,null),c(t,a),W(d,t,null),c(e,h),c(e,n),W(l,n,null),c(n,i),W(m,n,null),j(p,o,g),j(p,k,g),c(k,C),W(V,C,null),P=!0},p:z,i(p){P||(S(s.$$.fragment,p),S(u.$$.fragment,p),S(d.$$.fragment,p),S(l.$$.fragment,p),S(m.$$.fragment,p),S(V.$$.fragment,p),P=!0)},o(p){A(s.$$.fragment,p),A(u.$$.fragment,p),A(d.$$.fragment,p),A(l.$$.fragment,p),A(m.$$.fragment,p),A(V.$$.fragment,p),P=!1},d(p){p&&(v(e),v(o),v(k)),B(s),B(u),B(d),B(l),B(m),B(V)}}}class Ne extends F{constructor(e){super(),G(this,e,null,Ve,Y,{})}}export{Ne as component};
import{S as Ne,i as ze,s as Je,e as U,t as H,c as N,a as w,h as E,d as Z,b as V,K as re,g as D,J as m,j as ie,n as We,l as he,p as C,q as fe,r as A,L as ce,k as M,m as x,M as Be,N as Ve,O as Ie,P as ue,Q as Me,o as de,R as xe,x as we,y as Te,z as Se,C as He}from"../chunks/index-87fdb8f6.js";function Oe(s){let e,t=(s[3]?"\u2588".repeat(s[1].length):s[1])+"",l,o;return{c(){e=U("span"),l=H(t),this.h()},l(n){e=N(n,"SPAN",{id:!0,class:!0});var r=w(e);l=E(r,t),r.forEach(Z),this.h()},h(){V(e,"id",s[0]),V(e,"class",o=re(s[2]?"highlight":"")+" svelte-s9xmm7")},m(n,r){D(n,e,r),m(e,l)},p(n,[r]){r&10&&t!==(t=(n[3]?"\u2588".repeat(n[1].length):n[1])+"")&&ie(l,t),r&1&&V(e,"id",n[0]),r&4&&o!==(o=re(n[2]?"highlight":"")+" svelte-s9xmm7")&&V(e,"class",o)},i:We,o:We,d(n){n&&Z(e)}}}function Ce(s,e,t){let{id:l}=e,{value:o=""}=e,{highlight:n=!1}=e,{redacted:r=!1}=e;return s.$$set=i=>{"id"in i&&t(0,l=i.id),"value"in i&&t(1,o=i.value),"highlight"in i&&t(2,n=i.highlight),"redacted"in i&&t(3,r=i.redacted)},[l,o,n,r]}class Ee extends Ne{constructor(e){super(),ze(this,e,Ce,Oe,Je,{id:0,value:1,highlight:2,redacted:3})}}var Pe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},je={exports:{}};(function(s){(function(e){if(typeof t!="function"){var t=function(u){return u};t.nonNative=!0}const l=t("plaintext"),o=t("html"),n=t("comment"),r=/<(\w*)>/g,i=/<\/?([^\s\/>]+)/;function c(u,W,F){u=u||"",W=W||[],F=F||"";let I=X(W,F);return J(u,I)}function a(u,W){u=u||[],W=W||"";let F=X(u,W);return function(z){return J(z||"",F)}}c.init_streaming_mode=a;function X(u,W){return u=R(u),{allowable_tags:u,tag_replacement:W,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function J(u,W){if(typeof u!="string")throw new TypeError("'html' parameter must be a string");let F=W.allowable_tags,I=W.tag_replacement,z=W.state,_=W.tag_buffer,y=W.depth,Y=W.in_quote_char,B="";for(let P=0,S=u.length;P<S;P++){let k=u[P];if(z===l)switch(k){case"<":z=o,_+=k;break;default:B+=k;break}else if(z===o)switch(k){case"<":if(Y)break;y++;break;case">":if(Y)break;if(y){y--;break}Y="",z=l,_+=">",F.has(g(_))?B+=_:B+=I,_="";break;case'"':case"'":k===Y?Y="":Y=Y||k,_+=k;break;case"-":_==="<!-"&&(z=n),_+=k;break;case" ":case`
`:if(_==="<"){z=l,B+="< ",_="";break}_+=k;break;default:_+=k;break}else if(z===n)switch(k){case">":_.slice(-2)=="--"&&(z=l),_="";break;default:_+=k;break}}return W.state=z,W.tag_buffer=_,W.depth=y,W.in_quote_char=Y,B}function R(u){let W=new Set;if(typeof u=="string"){let F;for(;F=r.exec(u);)W.add(F[1])}else!t.nonNative&&typeof u[t.iterator]=="function"?W=new Set(u):typeof u.forEach=="function"&&u.forEach(W.add,W);return W}function g(u){let W=i.exec(u);return W?W[1].toLowerCase():null}s.exports?s.exports=c:e.striptags=c})(Pe)})(je);var Le=je.exports;function ge(s,e,t){const l=s.slice();return l[28]=e[t],l[30]=t,l}function Ge(s,e,t){const l=s.slice();return l[31]=e[t],l[30]=t,l}function Xe(s,e,t){const l=s.slice();return l[33]=e[t],l}function Ze(s,e,t){const l=s.slice();return l[33]=e[t],l}function _e(s){let e,t;return{c(){e=U("p"),t=H("loading..."),this.h()},l(l){e=N(l,"P",{class:!0});var o=w(e);t=E(o,"loading..."),o.forEach(Z),this.h()},h(){V(e,"class","svelte-4p15iz")},m(l,o){D(l,e,o),m(e,t)},d(l){l&&Z(e)}}}function ve(s){let e,t,l=Object.keys(s[0]).length+"",o,n;return{c(){e=U("p"),t=H("Solved in "),o=H(l),n=H(" guesses!"),this.h()},l(r){e=N(r,"P",{class:!0});var i=w(e);t=E(i,"Solved in "),o=E(i,l),n=E(i," guesses!"),i.forEach(Z),this.h()},h(){V(e,"class","svelte-4p15iz")},m(r,i){D(r,e,i),m(e,t),m(e,o),m(e,n)},p(r,i){i[0]&1&&l!==(l=Object.keys(r[0]).length+"")&&ie(o,l)},d(r){r&&Z(e)}}}function De(s){let e,t,l,o=s[31].tokens,n=[];for(let i=0;i<o.length;i+=1)n[i]=Fe(Xe(s,o,i));const r=i=>C(n[i],1,1,()=>{n[i]=null});return{c(){e=U("p");for(let i=0;i<n.length;i+=1)n[i].c();t=M(),this.h()},l(i){e=N(i,"P",{class:!0});var c=w(e);for(let a=0;a<n.length;a+=1)n[a].l(c);t=x(c),c.forEach(Z),this.h()},h(){V(e,"class","svelte-4p15iz")},m(i,c){D(i,e,c);for(let a=0;a<n.length;a+=1)n[a].m(e,null);m(e,t),l=!0},p(i,c){if(c[0]&4){o=i[31].tokens;let a;for(a=0;a<o.length;a+=1){const X=Xe(i,o,a);n[a]?(n[a].p(X,c),A(n[a],1)):(n[a]=Fe(X),n[a].c(),A(n[a],1),n[a].m(e,t))}for(de(),a=o.length;a<n.length;a+=1)r(a);fe()}},i(i){if(!l){for(let c=0;c<o.length;c+=1)A(n[c]);l=!0}},o(i){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)C(n[c]);l=!1},d(i){i&&Z(e),ue(n,i)}}}function qe(s){let e,t,l,o=s[31].tokens,n=[];for(let i=0;i<o.length;i+=1)n[i]=Re(Ze(s,o,i));const r=i=>C(n[i],1,1,()=>{n[i]=null});return{c(){e=U("h2");for(let i=0;i<n.length;i+=1)n[i].c();t=M(),this.h()},l(i){e=N(i,"H2",{id:!0,class:!0});var c=w(e);for(let a=0;a<n.length;a+=1)n[a].l(c);t=x(c),c.forEach(Z),this.h()},h(){V(e,"id","headline-section-"+s[30]),V(e,"class","svelte-4p15iz")},m(i,c){D(i,e,c);for(let a=0;a<n.length;a+=1)n[a].m(e,null);m(e,t),l=!0},p(i,c){if(c[0]&4){o=i[31].tokens;let a;for(a=0;a<o.length;a+=1){const X=Ze(i,o,a);n[a]?(n[a].p(X,c),A(n[a],1)):(n[a]=Re(X),n[a].c(),A(n[a],1),n[a].m(e,t))}for(de(),a=o.length;a<n.length;a+=1)r(a);fe()}},i(i){if(!l){for(let c=0;c<o.length;c+=1)A(n[c]);l=!0}},o(i){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)C(n[c]);l=!1},d(i){i&&Z(e),ue(n,i)}}}function Fe(s){let e,t;return e=new Ee({props:{id:s[33].id,value:s[33].value,redacted:s[33].redacted,highlight:s[33].highlight||!1}}),{c(){we(e.$$.fragment)},l(l){Te(e.$$.fragment,l)},m(l,o){Se(e,l,o),t=!0},p(l,o){const n={};o[0]&4&&(n.id=l[33].id),o[0]&4&&(n.value=l[33].value),o[0]&4&&(n.redacted=l[33].redacted),o[0]&4&&(n.highlight=l[33].highlight||!1),e.$set(n)},i(l){t||(A(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){He(e,l)}}}function Re(s){let e,t;return e=new Ee({props:{id:s[33].id,value:s[33].value,redacted:s[33].redacted,highlight:s[33].highlight||!1}}),{c(){we(e.$$.fragment)},l(l){Te(e.$$.fragment,l)},m(l,o){Se(e,l,o),t=!0},p(l,o){const n={};o[0]&4&&(n.id=l[33].id),o[0]&4&&(n.value=l[33].value),o[0]&4&&(n.redacted=l[33].redacted),o[0]&4&&(n.highlight=l[33].highlight||!1),e.$set(n)},i(l){t||(A(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){He(e,l)}}}function Ye(s){let e,t,l,o;const n=[qe,De],r=[];function i(c,a){return c[31].headline?0:1}return e=i(s),t=r[e]=n[e](s),{c(){t.c(),l=he()},l(c){t.l(c),l=he()},m(c,a){r[e].m(c,a),D(c,l,a),o=!0},p(c,a){let X=e;e=i(c),e===X?r[e].p(c,a):(de(),C(r[X],1,1,()=>{r[X]=null}),fe(),t=r[e],t?t.p(c,a):(t=r[e]=n[e](c),t.c()),A(t,1),t.m(l.parentNode,l))},i(c){o||(A(t),o=!0)},o(c){C(t),o=!1},d(c){r[e].d(c),c&&Z(l)}}}function Qe(s){let e,t,l=s[28]+"",o,n,r=s[0][s[28]]+"",i,c,a,X,J;return{c(){e=U("span"),t=U("b"),o=H(l),n=H("("),i=H(r),c=H(")"),this.h()},l(R){e=N(R,"SPAN",{class:!0});var g=w(e);t=N(g,"B",{});var u=w(t);o=E(u,l),u.forEach(Z),n=E(g,"("),i=E(g,r),c=E(g,")"),g.forEach(Z),this.h()},h(){V(e,"class",a=re((s[4]==s[28]?"highlight":"")+(s[0][s[28]]>0?" hit":" miss")+" word")+" svelte-4p15iz")},m(R,g){D(R,e,g),m(e,t),m(t,o),m(e,n),m(e,i),m(e,c),X||(J=ce(e,"click",function(){xe(s[6](s[28],!0))&&s[6](s[28],!0).apply(this,arguments)}),X=!0)},p(R,g){s=R,g[0]&1&&l!==(l=s[28]+"")&&ie(o,l),g[0]&1&&r!==(r=s[0][s[28]]+"")&&ie(i,r),g[0]&17&&a!==(a=re((s[4]==s[28]?"highlight":"")+(s[0][s[28]]>0?" hit":" miss")+" word")+" svelte-4p15iz")&&V(e,"class",a)},d(R){R&&Z(e),X=!1,J()}}}function ye(s){let e,t=Qe(s);return{c(){t&&t.c(),e=he()},l(l){t&&t.l(l),e=he()},m(l,o){t&&t.m(l,o),D(l,e,o)},p(l,o){t?t.p(l,o):(t=Qe(l),t.c(),t.m(e.parentNode,e))},d(l){t&&t.d(l),l&&Z(e)}}}function Ke(s){let e,t,l,o,n,r,i,c,a,X,J,R,g,u,W,F=Object.keys(s[0]).length+"",I,z,_,y,Y,B,P,S,k,O,se,L,K,ae,f,h=s[5]&&_e(),G=s[1]&&ve(s),Q=s[2],d=[];for(let b=0;b<Q.length;b+=1)d[b]=Ye(Ge(s,Q,b));const j=b=>C(d[b],1,1,()=>{d[b]=null});let ee=Object.keys(s[0]).reverse(),T=[];for(let b=0;b<ee.length;b+=1)T[b]=ye(ge(s,ee,b));return{c(){e=U("div"),t=U("nav"),l=U("h1"),o=H("Redactle Unlimited"),n=M(),r=U("p"),i=H(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),c=M(),a=U("div"),h&&h.c(),X=M(),G&&G.c(),J=M();for(let b=0;b<d.length;b+=1)d[b].c();R=M(),g=U("div"),u=U("h3"),W=H("Guesses ("),I=H(F),z=H(")"),_=M(),y=U("form"),Y=U("button"),B=H("\u25B2 Top"),P=M(),S=U("input"),k=M(),O=U("input"),se=M(),L=U("guess-list");for(let b=0;b<T.length;b+=1)T[b].c();this.h()},l(b){e=N(b,"DIV",{id:!0,class:!0});var v=w(e);t=N(v,"NAV",{class:!0});var p=w(t);l=N(p,"H1",{class:!0});var q=w(l);o=E(q,"Redactle Unlimited"),q.forEach(Z),n=x(p),r=N(p,"P",{class:!0});var be=w(r);i=E(be,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),be.forEach(Z),p.forEach(Z),c=x(v),a=N(v,"DIV",{id:!0,class:!0});var le=w(a);h&&h.l(le),X=x(le),G&&G.l(le),J=x(le);for(let $=0;$<d.length;$+=1)d[$].l(le);le.forEach(Z),R=x(v),g=N(v,"DIV",{id:!0,class:!0});var te=w(g);u=N(te,"H3",{class:!0});var oe=w(u);W=E(oe,"Guesses ("),I=E(oe,F),z=E(oe,")"),oe.forEach(Z),_=x(te),y=N(te,"FORM",{id:!0,class:!0});var ne=w(y);Y=N(ne,"BUTTON",{id:!0,type:!0,class:!0});var pe=w(Y);B=E(pe,"\u25B2 Top"),pe.forEach(Z),P=x(ne),S=N(ne,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,class:!0}),k=x(ne),O=N(ne,"INPUT",{id:!0,type:!0,class:!0}),ne.forEach(Z),se=x(te),L=N(te,"GUESS-LIST",{class:!0});var me=w(L);for(let $=0;$<T.length;$+=1)T[$].l(me);me.forEach(Z),te.forEach(Z),v.forEach(Z),this.h()},h(){V(l,"class","svelte-4p15iz"),V(r,"class","info svelte-4p15iz"),V(t,"class","svelte-4p15iz"),V(a,"id","article"),V(a,"class","svelte-4p15iz"),V(u,"class","svelte-4p15iz"),V(Y,"id","btn-top"),V(Y,"type","button"),V(Y,"class","svelte-4p15iz"),V(S,"id","input-guess"),V(S,"placeholder","guess a word..."),V(S,"autocomplete","off"),V(S,"class","svelte-4p15iz"),V(O,"id","submit"),V(O,"type","submit"),O.value="Guess",V(O,"class","svelte-4p15iz"),V(y,"id","guess-form"),V(y,"class","svelte-4p15iz"),Be(L,"class","svelte-4p15iz"),V(g,"id","guesses"),V(g,"class","svelte-4p15iz"),V(e,"id","main"),V(e,"class","svelte-4p15iz")},m(b,v){D(b,e,v),m(e,t),m(t,l),m(l,o),m(t,n),m(t,r),m(r,i),m(e,c),m(e,a),h&&h.m(a,null),m(a,X),G&&G.m(a,null),m(a,J);for(let p=0;p<d.length;p+=1)d[p].m(a,null);m(e,R),m(e,g),m(g,u),m(u,W),m(u,I),m(u,z),m(g,_),m(g,y),m(y,Y),m(Y,B),m(y,P),m(y,S),Ve(S,s[3]),m(y,k),m(y,O),m(g,se),m(g,L);for(let p=0;p<T.length;p+=1)T[p].m(L,null);K=!0,ae||(f=[ce(Y,"click",s[8]),ce(S,"input",s[9]),ce(y,"submit",Ie(s[7]))],ae=!0)},p(b,v){if(b[5]?h||(h=_e(),h.c(),h.m(a,X)):h&&(h.d(1),h=null),b[1]?G?G.p(b,v):(G=ve(b),G.c(),G.m(a,J)):G&&(G.d(1),G=null),v[0]&4){Q=b[2];let p;for(p=0;p<Q.length;p+=1){const q=Ge(b,Q,p);d[p]?(d[p].p(q,v),A(d[p],1)):(d[p]=Ye(q),d[p].c(),A(d[p],1),d[p].m(a,null))}for(de(),p=Q.length;p<d.length;p+=1)j(p);fe()}if((!K||v[0]&1)&&F!==(F=Object.keys(b[0]).length+"")&&ie(I,F),v[0]&8&&S.value!==b[3]&&Ve(S,b[3]),v[0]&81){ee=Object.keys(b[0]).reverse();let p;for(p=0;p<ee.length;p+=1){const q=ge(b,ee,p);T[p]?T[p].p(q,v):(T[p]=ye(q),T[p].c(),T[p].m(L,null))}for(;p<T.length;p+=1)T[p].d(1);T.length=ee.length}},i(b){if(!K){for(let v=0;v<Q.length;v+=1)A(d[v]);K=!0}},o(b){d=d.filter(Boolean);for(let v=0;v<d.length;v+=1)C(d[v]);K=!1},d(b){b&&Z(e),h&&h.d(),G&&G.d(),ue(d,b),ue(T,b),ae=!1,Me(f)}}}let $e=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const Ae="solved_game_history";function el(){return JSON.parse(window.localStorage.getItem(Ae)||"{}")}function ll(){let s=document.getElementById("headline-section-0");s&&s.scrollIntoView()}function ke(s,e){return`${tl(s).replaceAll("=","a")}${e}`}function tl(s){let e=encodeURIComponent(s).replace(/%([a-f0-9]{2})/gi,(t,l)=>String.fromCharCode(parseInt(l,16)));return btoa(e)}function nl(s){let e=atob(s).replace(/[\x80-\uffff]/g,t=>`%${t.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ue(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function sl(s,e,t){let l=[],o={},n=!1;const r=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let i={};r.forEach(f=>i[f]=1);const c=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let a=[],X={},J="",R="",g=0,u={},W=!0,F="";I();function I(){const f=Math.floor(Math.random()*c.length);F=nl(c[f]),fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${F}`).then(h=>h.json()).then(h=>{let G=0;h.lead.displaytitle;let Q=h.lead.sections[0].text,d=z(Q);G+=d.length,l.push({text:d,headline:h.lead.displaytitle});let j=0;for(;G<1e5&&j<h.remaining.sections.length;)Q=h.remaining.sections[j].text,d=z(Q),G+=d.length,l.push({text:d,headline:h.remaining.sections[j].line}),j++;_()})}function z(f){let h=f.replace(/(<style.*>.*<\/style>|<table.*>.*<\/table>)/ig,"");return h=h.replace(/(<\/li>)/," </li>"),h=Le(h),h=h.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),h=h.replace(/\[\d+\]/ig,""),h}function _(){console.log("rendering..."),t(2,a=[]),u={};for(const f in l)B(l[f].headline,!0),B(l[f].text,!1);t(5,W=!1)}function y(){let f=a[0].tokens.find(h=>h.redacted);t(1,n=f===void 0),n&&(Y(),_())}function Y(){let f=el(),h=new Date,G={title:F,guesses:Object.keys(o).length,time:h.getTime()};f[F]=G,window.localStorage.setItem(Ae,JSON.stringify(f)),console.log(`solved: ${n}`)}function B(f,h){let G=[...f.matchAll($e)],Q=P(G);a.push({headline:h,tokens:Q})}function P(f){let h=[];for(const G in f){let Q=f[G][1];if(Q){let d=Ue(Q);u[d]=d in u?u[d]+1:1;let j={value:Q,wordNormal:d,id:ke(d,u[d]-1),redacted:k(d),highlight:d==R};d in X||(X[d]=[]),X[d].push(j),h.push(j)}f[G][2]&&h.push({value:f[G][2]})}return h}function S(f){!X.hasOwnProperty(f)||(X[f].forEach(h=>{h.redacted=k(f),h.highlight=f==R}),t(2,a=[...a]))}function k(f){return!n&&!i.hasOwnProperty(f)&&!o.hasOwnProperty(f)}function O(f,h){g=R==f?g+1:0,f in u&&u[f]>0&&(g=g%u[f]),t(4,R=f),a.forEach(d=>{d.tokens.filter(j=>j.highlight==!0).forEach(j=>{j.highlight=!1})});const G=ke(R,g);let Q=document.getElementById(G);Q&&h&&Q.scrollIntoView(),S(f)}function se(){let f=Ue(J);if(!L(f)){console.log("invalid guess"),t(3,J="");return}t(0,o[f]=u[f]||0,o),O(f,!1),t(3,J=""),y(),f=="togglecheats"&&(t(1,n=!n),_())}function L(f){return!(f in i||/^\w+$/.test(f)==!1)}const K=()=>ll();function ae(){J=this.value,t(3,J)}return[o,n,a,J,R,W,O,se,K,ae]}class il extends Ne{constructor(e){super(),ze(this,e,sl,Ke,Je,{},null,[-1,-1])}}export{il as default};

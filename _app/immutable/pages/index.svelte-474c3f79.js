import{S as Be,i as Oe,s as Ce,l as he,g as q,n as me,d as w,e as Q,t as S,c as T,a as z,h as J,b,K as de,J as g,L as le,j as ne,M as lt,N as st,p as ee,q as We,r as I,k as P,m as M,O as _e,P as ot,Q as ve,R as rt,w as nt,T as at,o as ye,U as it,x as Le,y as Ie,z as xe,C as Pe}from"../chunks/index-9232a623.js";function ut(l){let e,t=(l[3]?"\u2588".repeat(l[1].length):l[1])+"",s,u,o,d;return{c(){e=Q("span"),s=S(t),this.h()},l(n){e=T(n,"SPAN",{id:!0,class:!0});var a=z(e);s=J(a,t),a.forEach(w),this.h()},h(){b(e,"id",l[0]),b(e,"class",u=de((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-h2j861")},m(n,a){q(n,e,a),g(e,s),o||(d=le(e,"click",l[5]),o=!0)},p(n,a){a&10&&t!==(t=(n[3]?"\u2588".repeat(n[1].length):n[1])+"")&&ne(s,t),a&1&&b(e,"id",n[0]),a&12&&u!==(u=de((n[2]?"highlight":"")+(n[3]?" redacted":""))+" svelte-h2j861")&&b(e,"class",u)},d(n){n&&w(e),o=!1,d()}}}function ct(l){let e,t=(l[3]?"\u2588".repeat(l[1].length-`${l[1].length}`.length):l[1])+"",s,u,o,d,n=l[3]&&Ze(l);return{c(){e=Q("span"),n&&n.c(),s=S(t),this.h()},l(a){e=T(a,"SPAN",{id:!0,class:!0});var i=z(e);n&&n.l(i),s=J(i,t),i.forEach(w),this.h()},h(){b(e,"id",l[0]),b(e,"class",u=de((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-h2j861")},m(a,i){q(a,e,i),n&&n.m(e,null),g(e,s),o||(d=le(e,"click",l[5]),o=!0)},p(a,i){a[3]?n?n.p(a,i):(n=Ze(a),n.c(),n.m(e,s)):n&&(n.d(1),n=null),i&10&&t!==(t=(a[3]?"\u2588".repeat(a[1].length-`${a[1].length}`.length):a[1])+"")&&ne(s,t),i&1&&b(e,"id",a[0]),i&12&&u!==(u=de((a[2]?"highlight":"")+(a[3]?" redacted":""))+" svelte-h2j861")&&b(e,"class",u)},d(a){a&&w(e),n&&n.d(),o=!1,d()}}}function Ze(l){let e,t=l[1].length+"",s;return{c(){e=Q("span"),s=S(t),this.h()},l(u){e=T(u,"SPAN",{class:!0});var o=z(e);s=J(o,t),o.forEach(w),this.h()},h(){b(e,"class","char_count svelte-h2j861")},m(u,o){q(u,e,o),g(e,s)},p(u,o){o&2&&t!==(t=u[1].length+"")&&ne(s,t)},d(u){u&&w(e)}}}function ht(l){let e;function t(o,d){return o[4]?ct:ut}let s=t(l),u=s(l);return{c(){u.c(),e=he()},l(o){u.l(o),e=he()},m(o,d){u.m(o,d),q(o,e,d)},p(o,[d]){s===(s=t(o))&&u?u.p(o,d):(u.d(1),u=s(o),u&&(u.c(),u.m(e.parentNode,e)))},i:me,o:me,d(o){u.d(o),o&&w(e)}}}function dt(l,e,t){let{id:s}=e,{value:u=""}=e,{highlight:o=!1}=e,{redacted:d=!1}=e,n=!1;function a(){t(4,n=!n)}return l.$$set=i=>{"id"in i&&t(0,s=i.id),"value"in i&&t(1,u=i.value),"highlight"in i&&t(2,o=i.highlight),"redacted"in i&&t(3,d=i.redacted)},[s,u,o,d,n,a]}class Me extends Be{constructor(e){super(),Oe(this,e,dt,ht,Ce,{id:0,value:1,highlight:2,redacted:3})}}var qe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ft(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var De={exports:{}};(function(l){(function(e){if(typeof t!="function"){var t=function(m){return m};t.nonNative=!0}const s=t("plaintext"),u=t("html"),o=t("comment"),d=/<(\w*)>/g,n=/<\/?([^\s\/>]+)/;function a(m,r,f){m=m||"",r=r||[],f=f||"";let Z=v(r,f);return F(m,Z)}function i(m,r){m=m||[],r=r||"";let f=v(m,r);return function(X){return F(X||"",f)}}a.init_streaming_mode=i;function v(m,r){return m=V(m),{allowable_tags:m,tag_replacement:r,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function F(m,r){if(typeof m!="string")throw new TypeError("'html' parameter must be a string");let f=r.allowable_tags,Z=r.tag_replacement,X=r.state,y=r.tag_buffer,N=r.depth,j=r.in_quote_char,O="";for(let Y=0,E=m.length;Y<E;Y++){let U=m[Y];if(X===s)switch(U){case"<":X=u,y+=U;break;default:O+=U;break}else if(X===u)switch(U){case"<":if(j)break;N++;break;case">":if(j)break;if(N){N--;break}j="",X=s,y+=">",f.has(R(y))?O+=y:O+=Z,y="";break;case'"':case"'":U===j?j="":j=j||U,y+=U;break;case"-":y==="<!-"&&(X=o),y+=U;break;case" ":case`
`:if(y==="<"){X=s,O+="< ",y="";break}y+=U;break;default:y+=U;break}else if(X===o)switch(U){case">":y.slice(-2)=="--"&&(X=s),y="";break;default:y+=U;break}}return r.state=X,r.tag_buffer=y,r.depth=N,r.in_quote_char=j,O}function V(m){let r=new Set;if(typeof m=="string"){let f;for(;f=d.exec(m);)r.add(f[1])}else!t.nonNative&&typeof m[t.iterator]=="function"?r=new Set(m):typeof m.forEach=="function"&&m.forEach(r.add,r);return r}function R(m){let r=n.exec(m);return r?r[1].toLowerCase():null}l.exports?l.exports=a:e.striptags=a})(qe)})(De);var Ve=De.exports;function mt(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}var se={$(l){return typeof l=="string"?document.querySelector(l):l},extend(...l){return Object.assign(...l)},cumulativeOffset(l){let e=0,t=0;do e+=l.offsetTop||0,t+=l.offsetLeft||0,l=l.offsetParent;while(l);return{top:e,left:t}},directScroll(l){return l&&l!==document&&l!==document.body},scrollTop(l,e){let t=e!==void 0;return this.directScroll(l)?t?l.scrollTop=e:l.scrollTop:t?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(l,e){let t=e!==void 0;return this.directScroll(l)?t?l.scrollLeft=e:l.scrollLeft:t?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const pt={container:"body",duration:500,delay:0,offset:0,easing:mt,onStart:me,onDone:me,onAborting:me,scrollX:!1,scrollY:!0},gt=l=>{let{offset:e,duration:t,delay:s,easing:u,x:o=0,y:d=0,scrollX:n,scrollY:a,onStart:i,onDone:v,container:F,onAborting:V,element:R}=l;typeof e=="function"&&(e=e());var m=se.cumulativeOffset(F),r=R?se.cumulativeOffset(R):{top:d,left:o},f=se.scrollLeft(F),Z=se.scrollTop(F),X=r.left-m.left+e,y=r.top-m.top+e,N=X-f,j=y-Z;let O=!0,Y=!1,E=lt()+s,U=E+t;function oe(A,C,D){n&&se.scrollLeft(A,D),a&&se.scrollTop(A,C)}function H(A){A||(Y=!0,i(R,{x:o,y:d}))}function K(A){oe(F,Z+j*A,f+N*A)}function L(){O=!1}return st(A=>{if(!Y&&A>=E&&H(!1),Y&&A>=U&&(K(1),L(),v(R,{x:o,y:d})),!O)return V(R,{x:o,y:d}),!1;if(Y){const C=A-E,D=0+1*u(C/t);K(D)}return!0}),H(s),K(0),L},bt=l=>{let e=se.extend({},pt,l);return e.container=se.$(e.container),e.element=se.$(e.element),e},we=l=>gt(bt(l));var Ke={exports:{}};(function(l,e){(function(t,s){typeof ft=="function"&&!0?l.exports=s():t.pluralize=s()})(qe,function(){var t=[],s=[],u={},o={},d={};function n(r){return typeof r=="string"?new RegExp("^"+r+"$","i"):r}function a(r,f){return r===f?f:r===r.toLowerCase()?f.toLowerCase():r===r.toUpperCase()?f.toUpperCase():r[0]===r[0].toUpperCase()?f.charAt(0).toUpperCase()+f.substr(1).toLowerCase():f.toLowerCase()}function i(r,f){return r.replace(/\$(\d{1,2})/g,function(Z,X){return f[X]||""})}function v(r,f){return r.replace(f[0],function(Z,X){var y=i(f[1],arguments);return a(Z===""?r[X-1]:Z,y)})}function F(r,f,Z){if(!r.length||u.hasOwnProperty(r))return f;for(var X=Z.length;X--;){var y=Z[X];if(y[0].test(f))return v(f,y)}return f}function V(r,f,Z){return function(X){var y=X.toLowerCase();return f.hasOwnProperty(y)?a(X,y):r.hasOwnProperty(y)?a(X,r[y]):F(y,X,Z)}}function R(r,f,Z,X){return function(y){var N=y.toLowerCase();return f.hasOwnProperty(N)?!0:r.hasOwnProperty(N)?!1:F(N,N,Z)===N}}function m(r,f,Z){var X=f===1?m.singular(r):m.plural(r);return(Z?f+" ":"")+X}return m.plural=V(d,o,t),m.isPlural=R(d,o,t),m.singular=V(o,d,s),m.isSingular=R(o,d,s),m.addPluralRule=function(r,f){t.push([n(r),f])},m.addSingularRule=function(r,f){s.push([n(r),f])},m.addUncountableRule=function(r){if(typeof r=="string"){u[r.toLowerCase()]=!0;return}m.addPluralRule(r,"$0"),m.addSingularRule(r,"$0")},m.addIrregularRule=function(r,f){f=f.toLowerCase(),r=r.toLowerCase(),d[r]=f,o[f]=r},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(r){return m.addIrregularRule(r[0],r[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(r){return m.addPluralRule(r[0],r[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(r){return m.addSingularRule(r[0],r[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m})})(Ke);const{window:Re}=at;function ke(l,e,t){const s=l.slice();return s[35]=e[t],s[37]=t,s}function Fe(l,e,t){const s=l.slice();return s[38]=e[t],s[37]=t,s}function Ye(l,e,t){const s=l.slice();return s[40]=e[t],s}function Qe(l,e,t){const s=l.slice();return s[40]=e[t],s}function Te(l){let e,t;return{c(){e=Q("p"),t=S("loading..."),this.h()},l(s){e=T(s,"P",{class:!0});var u=z(e);t=J(u,"loading..."),u.forEach(w),this.h()},h(){b(e,"class","svelte-13hd9ro")},m(s,u){q(s,e,u),g(e,t)},d(s){s&&w(e)}}}function Ue(l){let e,t,s=Object.keys(l[4].guesses).length+"",u,o,d=l[8]()+"",n,a;return{c(){e=Q("p"),t=S("Solved in "),u=S(s),o=S(" guesses with "),n=S(d),a=S("% accuracy!"),this.h()},l(i){e=T(i,"P",{id:!0,class:!0});var v=z(e);t=J(v,"Solved in "),u=J(v,s),o=J(v," guesses with "),n=J(v,d),a=J(v,"% accuracy!"),v.forEach(w),this.h()},h(){b(e,"id","solved-message"),b(e,"class","svelte-13hd9ro")},m(i,v){q(i,e,v),g(e,t),g(e,u),g(e,o),g(e,n),g(e,a)},p(i,v){v[0]&16&&s!==(s=Object.keys(i[4].guesses).length+"")&&ne(u,s)},d(i){i&&w(e)}}}function vt(l){let e,t,s,u=l[38].tokens,o=[];for(let n=0;n<u.length;n+=1)o[n]=Ne(Ye(l,u,n));const d=n=>ee(o[n],1,1,()=>{o[n]=null});return{c(){e=Q("p");for(let n=0;n<o.length;n+=1)o[n].c();t=P(),this.h()},l(n){e=T(n,"P",{class:!0});var a=z(e);for(let i=0;i<o.length;i+=1)o[i].l(a);t=M(a),a.forEach(w),this.h()},h(){b(e,"class","svelte-13hd9ro")},m(n,a){q(n,e,a);for(let i=0;i<o.length;i+=1)o[i].m(e,null);g(e,t),s=!0},p(n,a){if(a[0]&1){u=n[38].tokens;let i;for(i=0;i<u.length;i+=1){const v=Ye(n,u,i);o[i]?(o[i].p(v,a),I(o[i],1)):(o[i]=Ne(v),o[i].c(),I(o[i],1),o[i].m(e,t))}for(ye(),i=u.length;i<o.length;i+=1)d(i);We()}},i(n){if(!s){for(let a=0;a<u.length;a+=1)I(o[a]);s=!0}},o(n){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)ee(o[a]);s=!1},d(n){n&&w(e),ve(o,n)}}}function Wt(l){let e,t,s,u=l[38].tokens,o=[];for(let n=0;n<u.length;n+=1)o[n]=ze(Qe(l,u,n));const d=n=>ee(o[n],1,1,()=>{o[n]=null});return{c(){e=Q("h2");for(let n=0;n<o.length;n+=1)o[n].c();t=P(),this.h()},l(n){e=T(n,"H2",{id:!0,class:!0});var a=z(e);for(let i=0;i<o.length;i+=1)o[i].l(a);t=M(a),a.forEach(w),this.h()},h(){b(e,"id","headline-section-"+l[37]),b(e,"class","svelte-13hd9ro")},m(n,a){q(n,e,a);for(let i=0;i<o.length;i+=1)o[i].m(e,null);g(e,t),s=!0},p(n,a){if(a[0]&1){u=n[38].tokens;let i;for(i=0;i<u.length;i+=1){const v=Qe(n,u,i);o[i]?(o[i].p(v,a),I(o[i],1)):(o[i]=ze(v),o[i].c(),I(o[i],1),o[i].m(e,t))}for(ye(),i=u.length;i<o.length;i+=1)d(i);We()}},i(n){if(!s){for(let a=0;a<u.length;a+=1)I(o[a]);s=!0}},o(n){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)ee(o[a]);s=!1},d(n){n&&w(e),ve(o,n)}}}function Ne(l){let e,t;return e=new Me({props:{id:l[40].id,value:l[40].value,redacted:l[40].redacted,highlight:l[40].highlight||!1}}),{c(){Le(e.$$.fragment)},l(s){Ie(e.$$.fragment,s)},m(s,u){xe(e,s,u),t=!0},p(s,u){const o={};u[0]&1&&(o.id=s[40].id),u[0]&1&&(o.value=s[40].value),u[0]&1&&(o.redacted=s[40].redacted),u[0]&1&&(o.highlight=s[40].highlight||!1),e.$set(o)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Pe(e,s)}}}function ze(l){let e,t;return e=new Me({props:{id:l[40].id,value:l[40].value,redacted:l[40].redacted,highlight:l[40].highlight||!1}}),{c(){Le(e.$$.fragment)},l(s){Ie(e.$$.fragment,s)},m(s,u){xe(e,s,u),t=!0},p(s,u){const o={};u[0]&1&&(o.id=s[40].id),u[0]&1&&(o.value=s[40].value),u[0]&1&&(o.redacted=s[40].redacted),u[0]&1&&(o.highlight=s[40].highlight||!1),e.$set(o)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Pe(e,s)}}}function Se(l){let e,t,s,u;const o=[Wt,vt],d=[];function n(a,i){return a[38].headline?0:1}return e=n(l),t=d[e]=o[e](l),{c(){t.c(),s=he()},l(a){t.l(a),s=he()},m(a,i){d[e].m(a,i),q(a,s,i),u=!0},p(a,i){let v=e;e=n(a),e===v?d[e].p(a,i):(ye(),ee(d[v],1,1,()=>{d[v]=null}),We(),t=d[e],t?t.p(a,i):(t=d[e]=o[e](a),t.c()),I(t,1),t.m(s.parentNode,s))},i(a){u||(I(t),u=!0)},o(a){ee(t),u=!1},d(a){d[e].d(a),a&&w(s)}}}function Je(l){let e,t,s=l[35]+"",u,o,d=l[4].guesses[l[35]]+"",n,a,i,v,F;return{c(){e=Q("span"),t=Q("b"),u=S(s),o=S("("),n=S(d),a=S(")"),this.h()},l(V){e=T(V,"SPAN",{class:!0});var R=z(e);t=T(R,"B",{});var m=z(t);u=J(m,s),m.forEach(w),o=J(R,"("),n=J(R,d),a=J(R,")"),R.forEach(w),this.h()},h(){b(e,"class",i=de((l[2]==l[35]?"highlight":"")+(l[4].guesses[l[35]]>0?" hit":" miss")+" word")+" svelte-13hd9ro")},m(V,R){q(V,e,R),g(e,t),g(t,u),g(e,o),g(e,n),g(e,a),v||(F=le(e,"click",function(){it(l[7](l[35],!0))&&l[7](l[35],!0).apply(this,arguments)}),v=!0)},p(V,R){l=V,R[0]&16&&s!==(s=l[35]+"")&&ne(u,s),R[0]&16&&d!==(d=l[4].guesses[l[35]]+"")&&ne(n,d),R[0]&20&&i!==(i=de((l[2]==l[35]?"highlight":"")+(l[4].guesses[l[35]]>0?" hit":" miss")+" word")+" svelte-13hd9ro")&&b(e,"class",i)},d(V){V&&w(e),v=!1,F()}}}function $e(l){let e,t=(l[5].showMisses||l[4].guesses[l[35]]>0||l[37]==0)&&Je(l);return{c(){t&&t.c(),e=he()},l(s){t&&t.l(s),e=he()},m(s,u){t&&t.m(s,u),q(s,e,u)},p(s,u){s[5].showMisses||s[4].guesses[s[35]]>0||s[37]==0?t?t.p(s,u):(t=Je(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&w(e)}}}function yt(l){let e,t,s,u,o,d,n,a,i,v,F,V,R,m,r,f,Z,X,y=Object.keys(l[4].guesses).length+"",N,j,O,Y,E,U,oe,H,K,L,A,C,D,fe,pe,B=l[3]&&Te(),$=l[4].solved&&Ue(l),te=l[0],c=[];for(let h=0;h<te.length;h+=1)c[h]=Se(Fe(l,te,h));const _=h=>ee(c[h],1,1,()=>{c[h]=null});let k=Object.keys(l[4].guesses).reverse(),W=[];for(let h=0;h<k.length;h+=1)W[h]=$e(ke(l,k,h));return{c(){e=Q("div"),t=Q("nav"),s=Q("h1"),u=S("Redactle Unlimited"),o=P(),d=Q("button"),n=S("New Game"),a=P(),i=Q("p"),v=S(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),F=P(),V=Q("div"),B&&B.c(),R=P(),$&&$.c(),m=P();for(let h=0;h<c.length;h+=1)c[h].c();r=P(),f=Q("div"),Z=Q("h3"),X=S("Guesses ("),N=S(y),j=S(")"),O=P(),Y=Q("form"),E=Q("button"),U=S("\u25B2 Top"),oe=P(),H=Q("input"),K=P(),L=Q("input"),A=P(),C=Q("div");for(let h=0;h<W.length;h+=1)W[h].c();this.h()},l(h){e=T(h,"DIV",{id:!0,class:!0});var G=z(e);t=T(G,"NAV",{class:!0});var p=z(t);s=T(p,"H1",{class:!0});var x=z(s);u=J(x,"Redactle Unlimited"),x.forEach(w),o=M(p),d=T(p,"BUTTON",{id:!0,class:!0});var ge=z(d);n=J(ge,"New Game"),ge.forEach(w),a=M(p),i=T(p,"P",{class:!0});var ae=z(i);v=J(ae,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),ae.forEach(w),p.forEach(w),F=M(G),V=T(G,"DIV",{id:!0,class:!0});var ie=z(V);B&&B.l(ie),R=M(ie),$&&$.l(ie),m=M(ie);for(let re=0;re<c.length;re+=1)c[re].l(ie);ie.forEach(w),r=M(G),f=T(G,"DIV",{id:!0,class:!0});var ue=z(f);Z=T(ue,"H3",{class:!0});var be=z(Z);X=J(be,"Guesses ("),N=J(be,y),j=J(be,")"),be.forEach(w),O=M(ue),Y=T(ue,"FORM",{id:!0,class:!0});var ce=z(Y);E=T(ce,"BUTTON",{id:!0,type:!0,class:!0});var Ge=z(E);U=J(Ge,"\u25B2 Top"),Ge.forEach(w),oe=M(ce),H=T(ce,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,title:!0,class:!0}),K=M(ce),L=T(ce,"INPUT",{id:!0,type:!0,class:!0}),ce.forEach(w),A=M(ue),C=T(ue,"DIV",{id:!0,class:!0});var Xe=z(C);for(let re=0;re<W.length;re+=1)W[re].l(Xe);Xe.forEach(w),ue.forEach(w),G.forEach(w),this.h()},h(){b(s,"class","svelte-13hd9ro"),b(d,"id","new-game"),b(d,"class","svelte-13hd9ro"),b(i,"class","info svelte-13hd9ro"),b(t,"class","svelte-13hd9ro"),b(V,"id","article"),b(V,"class","svelte-13hd9ro"),b(Z,"class","svelte-13hd9ro"),b(E,"id","btn-top"),b(E,"type","button"),b(E,"class","svelte-13hd9ro"),b(H,"id","input-guess"),b(H,"placeholder","guess a word..."),b(H,"autocomplete","off"),b(H,"title","Hold shift key to pluralize."),b(H,"class","svelte-13hd9ro"),b(L,"id","submit"),b(L,"type","submit"),L.value="Guess",b(L,"class","svelte-13hd9ro"),b(Y,"id","guess-form"),b(Y,"class","svelte-13hd9ro"),b(C,"id","guess-list"),b(C,"class","svelte-13hd9ro"),b(f,"id","guesses"),b(f,"class","svelte-13hd9ro"),b(e,"id","main"),b(e,"class","svelte-13hd9ro")},m(h,G){q(h,e,G),g(e,t),g(t,s),g(s,u),g(t,o),g(t,d),g(d,n),g(t,a),g(t,i),g(i,v),g(e,F),g(e,V),B&&B.m(V,null),g(V,R),$&&$.m(V,null),g(V,m);for(let p=0;p<c.length;p+=1)c[p].m(V,null);g(e,r),g(e,f),g(f,Z),g(Z,X),g(Z,N),g(Z,j),g(f,O),g(f,Y),g(Y,E),g(E,U),g(Y,oe),g(Y,H),_e(H,l[1]),g(Y,K),g(Y,L),g(f,A),g(f,C);for(let p=0;p<W.length;p+=1)W[p].m(C,null);D=!0,fe||(pe=[le(Re,"keydown",l[9]),le(Re,"keyup",l[10]),le(d,"click",l[6]),le(E,"click",l[12]),le(H,"input",l[13]),le(Y,"submit",ot(l[11]))],fe=!0)},p(h,G){if(h[3]?B||(B=Te(),B.c(),B.m(V,R)):B&&(B.d(1),B=null),h[4].solved?$?$.p(h,G):($=Ue(h),$.c(),$.m(V,m)):$&&($.d(1),$=null),G[0]&1){te=h[0];let p;for(p=0;p<te.length;p+=1){const x=Fe(h,te,p);c[p]?(c[p].p(x,G),I(c[p],1)):(c[p]=Se(x),c[p].c(),I(c[p],1),c[p].m(V,null))}for(ye(),p=te.length;p<c.length;p+=1)_(p);We()}if((!D||G[0]&16)&&y!==(y=Object.keys(h[4].guesses).length+"")&&ne(N,y),G[0]&2&&H.value!==h[1]&&_e(H,h[1]),G[0]&180){k=Object.keys(h[4].guesses).reverse();let p;for(p=0;p<k.length;p+=1){const x=ke(h,k,p);W[p]?W[p].p(x,G):(W[p]=$e(x),W[p].c(),W[p].m(C,null))}for(;p<W.length;p+=1)W[p].d(1);W.length=k.length}},i(h){if(!D){for(let G=0;G<te.length;G+=1)I(c[G]);D=!0}},o(h){c=c.filter(Boolean);for(let G=0;G<c.length;G+=1)ee(c[G]);D=!1},d(h){h&&w(e),B&&B.d(),$&&$.d(),ve(c,h),ve(W,h),fe=!1,rt(pe)}}}let Vt=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const et="solved_game_history";function Gt(){let e=window.location.hash.substring(1).split("&"),t=new Map;return e.forEach(s=>{const u=s.split("/");u.length===2&&t.set(u[0],u[1])}),t}function je(l,e){try{gtag("event",l,e)}catch(t){console.log(t)}}function Xt(){return JSON.parse(localStorage.getItem(et)||"{}")}function _t(){let l=document.getElementById("headline-section-0");l&&l.scrollIntoView()}function Ee(l,e){return`${tt(l).replaceAll("=","a")}${e}`}function tt(l){let e=encodeURIComponent(l).replace(/%([a-f0-9]{2})/gi,(t,s)=>String.fromCharCode(parseInt(s,16)));return btoa(e)}function He(l){let e=atob(l).replace(/[\x80-\uffff]/g,t=>`%${t.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ae(l){return l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().split(" ")[0]}function Zt(l,e,t){let s=[];const u=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let o={};u.forEach(c=>o[c]=1);const d=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let n=[],a={},i="",v="",F=0,V={},R=!0,m={showMisses:!0,pluralizeGuesses:!1},r=X();nt(async()=>{f(),N()});function f(){try{let _=localStorage.getItem("gameState");if(_!==null){t(4,r=JSON.parse(_));return}}catch(_){console.log(_)}t(4,r=X());const c=Gt();c.has("article")&&t(4,r.urlTitle=He(c.get("article")),r)}function Z(){t(4,r.updated=new Date().getTime(),r);try{localStorage.setItem("gameState",JSON.stringify(r))}catch(c){console.log(c)}}function X(){const c=Math.floor(Math.random()*d.length);return{urlTitle:He(d[c]),guesses:{},solved:!1,updated:new Date().getTime()}}function y(){!confirm("Are you sure you want to start a new game?")||(t(4,r=X()),window.location.hash="#",N(),Z())}async function N(){let _=await(await fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${r.urlTitle}`)).json(),k=0,W=_.lead.sections[0].text,h=j(W);t(3,R=!0),k+=h.length,s=[],s.push({text:h,headline:Ve(_.lead.displaytitle)});let G=0;for(;k<1e5&&G<_.remaining.sections.length;)W=_.remaining.sections[G].text,h=j(W),k+=h.length,s.push({text:h,headline:Ve(_.remaining.sections[G].line)}),G++;window.location.href="#article/"+tt(r.urlTitle),O()}function j(c){if(typeof window!="undefined"){var _=new window.DOMParser,k=_.parseFromString(c,"text/html");["style","table","figure"].forEach(p=>{let x=k.getElementsByTagName(p);Array.prototype.slice.call(x,0).forEach(ae=>ae.remove())}),["navigation-not-searchable","thumbinner","gallery","infobox","hatnote","thumb"].forEach(p=>{let x=k.getElementsByClassName(p);Array.prototype.slice.call(x,0).forEach(ae=>ae.remove())}),c=k.body.innerHTML}let W=Ve(c);return W=W.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),W=W.replace(/\[\d+\]/ig,""),W}function O(){console.log("rendering..."),t(0,n=[]),V={};for(const c in s)U(s[c].headline,!0),U(s[c].text,!1);t(3,R=!1)}function Y(){let c=n[0].tokens.find(_=>_.redacted);t(4,r.solved=c===void 0,r),r.solved&&(E(),je("win_game",{title:r.urlTitle}),O(),we({container:"#article",element:"#solved-message",duration:150,offset:-25}))}function E(){let c=Xt(),_=r;c[r.urlTitle]=_,localStorage.setItem(et,JSON.stringify(c)),console.log(`solved: ${r.solved}`)}function U(c,_){let k=[...c.matchAll(Vt)],W=oe(k);n.push({headline:_,tokens:W})}function oe(c){let _=[];for(const k in c){let W=c[k][1];if(W){let h=Ae(W);V[h]=h in V?V[h]+1:1;let G={value:W,wordNormal:h,id:Ee(h,V[h]-1),redacted:K(h),highlight:h==v};h in a||(a[h]=[]),a[h].push(G),_.push(G)}c[k][2]&&_.push({value:c[k][2]})}return _}function H(c){!a.hasOwnProperty(c)||(a[c].forEach(_=>{_.redacted=K(c),_.highlight=c==v}),t(0,n=[...n]))}function K(c){return!r.solved&&!o.hasOwnProperty(c)&&!r.guesses.hasOwnProperty(c)}function L(c,_){if(F=v==c?F+1:0,!V.hasOwnProperty(c))return;F=F%V[c];let k=v==c&&F==0;t(2,v=c),n.forEach(G=>{G.tokens.filter(p=>p.highlight==!0).forEach(p=>{p.highlight=!1})});const W=Ee(v,F);document.getElementById(W)&&_&&we({container:"#article",element:`#${W}`,duration:k?500:150,offset:-25}),H(c)}function A(){let c=Object.keys(r.guesses).length;if(c==0)return 0;const k=Object.values(r.guesses).filter(W=>W>0).length/c;return`${Math.round(k*1e4)/100}`}let C=!1;function D(c){console.log(c),c.keyCode==16&&(C=!0)}function fe(c){console.log(c),c.keyCode==16&&(C=!1)}function pe(c){console.log(c);let _=Ae(i);if(!B(_)){console.log("invalid guess"),t(1,i="");return}let k=[_];if(m.pluralizeGuesses||C){let h=Ke.exports.plural(_);h&&k.push(h)}let W=k.map(h=>({word:h,count:V[h]||0})).sort((h,G)=>h.count-G.count);W.forEach(h=>{t(4,r.guesses[h.word]=h.count||0,r),je("guess",{word:h.word})}),L(W[W.length-1].word,!1),t(1,i=""),Y(),Z(),_=="togglecheats"&&(t(4,r.solved=!r.solved,r),O())}function B(c){return!(c in o||/^\w+$/.test(c)==!1)}const $=()=>_t();function te(){i=this.value,t(1,i)}return[n,i,v,R,r,m,y,L,A,D,fe,pe,$,te]}class Rt extends Be{constructor(e){super(),Oe(this,e,Zt,yt,Ce,{},null,[-1,-1])}}export{Rt as default};

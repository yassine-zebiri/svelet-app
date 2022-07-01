const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};J();function $(){}function q(t){return t()}function B(){return Object.create(null)}function k(t){t.forEach(q)}function Q(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function v(){return N(" ")}function A(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function U(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let T;function x(t){T=t}const y=[],I=[],E=[],M=[],X=Promise.resolve();let P=!1;function Y(){P||(P=!0,X.then(F))}function S(t){E.push(t)}const L=new Set;let w=0;function F(){const t=T;do{for(;w<y.length;){const e=y[w];w++,x(e),Z(e.$$)}for(x(null),y.length=0,w=0;I.length;)I.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];L.has(n)||(L.add(n),n())}E.length=0}while(y.length);for(;M.length;)M.pop()();P=!1,L.clear(),x(t)}function Z(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const C=new Set;let tt;function K(t,e){t&&t.i&&(C.delete(t),t.i(e))}function et(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),tt.c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function nt(t){t&&t.c()}function V(t,e,n,o){const{fragment:r,on_mount:l,on_destroy:s,after_update:c}=t.$$;r&&r.m(e,n),o||S(()=>{const u=l.map(q).filter(Q);s?s.push(...u):k(u),t.$$.on_mount=[]}),c.forEach(S)}function D(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(y.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,o,r,l,s,c=[-1]){const u=T;x(t);const i=t.$$={fragment:null,ctx:null,props:l,update:$,not_equal:r,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:B(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};s&&s(i.root);let h=!1;if(i.ctx=n?n(t,e.props||{},(f,_,...g)=>{const m=g.length?g[0]:_;return i.ctx&&r(i.ctx[f],i.ctx[f]=m)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](m),h&&rt(t,f)),_}):[],i.update(),h=!0,k(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const f=U(e.target);i.fragment&&i.fragment.l(f),f.forEach(b)}else i.fragment&&i.fragment.c();e.intro&&K(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),F()}x(u)}class H{$destroy(){D(this,1),this.$destroy=$}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function it(t){let e,n,o,r,l,s,c,u,i,h,f,_,g;return{c(){e=p("main"),n=p("h1"),o=N("counter : "),r=N(t[0]),l=v(),s=p("div"),c=p("button"),c.textContent="+",u=v(),i=p("button"),i.textContent="rest",h=v(),f=p("button"),f.textContent="-",d(n,"class","text-white"),d(c,"class","btn btn-primary"),d(i,"class","btn btn-secondary"),d(f,"class","btn btn-danger"),d(s,"class","group-btn p-1 pt-5 svelte-l4xj6b"),d(e,"class","mt-5 w-100")},m(m,j){O(m,e,j),a(e,n),a(n,o),a(n,r),a(e,l),a(e,s),a(s,c),a(s,u),a(s,i),a(s,h),a(s,f),_||(g=[A(c,"click",t[3]),A(i,"click",t[4]),A(f,"click",t[5])],_=!0)},p(m,[j]){j&1&&W(r,m[0])},i:$,o:$,d(m){m&&b(e),_=!1,k(g)}}}function ot(t,e,n){let o=0;const r=i=>{n(0,o+=i)},l=()=>{n(0,o=0)};return[o,r,l,()=>r(1),()=>l(),()=>r(-1)]}class lt extends H{constructor(e){super(),G(this,e,ot,it,z,{})}}function st(t){let e,n,o,r,l,s,c,u;return c=new lt({}),{c(){e=p("link"),n=v(),o=p("main"),r=p("header"),r.textContent="SVELTE APP",l=v(),s=p("div"),nt(c.$$.fragment),d(e,"rel","stylesheet"),d(e,"href","/src/css/bootstrap-5.css"),d(e,"class","svelte-1tnivi1"),d(r,"class","mb-5 header svelte-1tnivi1"),d(s,"class","mt-5  svelte-1tnivi1"),d(o,"class","container-fluid p-1 my-contant svelte-1tnivi1")},m(i,h){a(document.head,e),O(i,n,h),O(i,o,h),a(o,r),a(o,l),a(o,s),V(c,s,null),u=!0},p:$,i(i){u||(K(c.$$.fragment,i),u=!0)},o(i){et(c.$$.fragment,i),u=!1},d(i){b(e),i&&b(n),i&&b(o),D(c)}}}class ct extends H{constructor(e){super(),G(this,e,null,st,z,{})}}new ct({target:document.getElementById("app")});

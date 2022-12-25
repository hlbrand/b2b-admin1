import{r as te,R as N,a as U}from"./index.271b9a35.js";var m={exports:{}},re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=re,oe=ne;function z(){}function V(){}V.resetWarningCache=z;var ae=function(){function t(r,o,a,u,i,c){if(c!==oe){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V,resetWarningCache:z};return n.PropTypes=n,n};m.exports=ae();function ie(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var X=te.exports,ce=ie(X);function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var ue=!!(typeof window<"u"&&window.document&&window.document.createElement);function fe(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],i;function c(){i=t(u.map(function(f){return f.props})),s.canUseDOM?e(i):n&&(i=n(i))}var s=function(f){se(p,f);function p(){return f.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=i;return i=void 0,u=[],y};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){u.push(this),c()},d.componentDidUpdate=function(){c()},d.componentWillUnmount=function(){var y=u.indexOf(this);u.splice(y,1),c()},d.render=function(){return ce.createElement(a,this.props)},p}(X.PureComponent);return q(s,"displayName","SideEffect("+r(a)+")"),q(s,"canUseDOM",ue),s}}var le=fe,pe=typeof Element<"u",de=typeof Map=="function",Te=typeof Set=="function",me=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!L(t[r],e[r]))return!1;return!0}var a;if(de&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!L(r.value[1],e.get(r.value[0])))return!1;return!0}if(Te&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(me&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(pe&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!L(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var he=function(e,n){try{return L(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;function ge(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Ee(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ae=Ee()?Object.assign:function(t,e){for(var n,r=ge(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var u in n)ve.call(n,u)&&(r[u]=n[u]);if(Y){o=Y(n);for(var i=0;i<o.length;i++)ye.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r},S={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(l).map(function(t){return l[t]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},be=Object.keys(x).reduce(function(t,e){return t[x[e]]=e,t},{}),Oe=[l.NOSCRIPT,l.SCRIPT,l.STYLE],g="data-react-helmet",Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ce=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Pe=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},$=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Re=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},H=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_e=function(e){var n=P(e,l.TITLE),r=P(e,I.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=P(e,I.DEFAULT_TITLE);return n||o||void 0},Ie=function(e){return P(e,I.ON_CHANGE_CLIENT_STATE)||function(){}},j=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return v({},r,o)},{})},Le=function(e,n){return n.filter(function(r){return typeof r[l.BASE]<"u"}).map(function(r){return r[l.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),u=0;u<a.length;u++){var i=a[u],c=i.toLowerCase();if(e.indexOf(c)!==-1&&o[c])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Ne("Helmet: "+e+' should be of type "Array". Instead found type "'+Se(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,u){var i={};u.filter(function(d){for(var T=void 0,y=Object.keys(d),E=0;E<y.length;E++){var A=y[E],b=A.toLowerCase();n.indexOf(b)!==-1&&!(T===h.REL&&d[T].toLowerCase()==="canonical")&&!(b===h.REL&&d[b].toLowerCase()==="stylesheet")&&(T=b),n.indexOf(A)!==-1&&(A===h.INNER_HTML||A===h.CSS_TEXT||A===h.ITEM_PROP)&&(T=A)}if(!T||!d[T])return!1;var w=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var c=Object.keys(i),s=0;s<c.length;s++){var f=c[s],p=Ae({},o[f],i[f]);o[f]=p}return a},[]).reverse()},P=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},xe=function(e){return{baseTag:Le([h.HREF,h.TARGET],e),bodyAttributes:j(S.BODY,e),defer:P(e,I.DEFER),encode:P(e,I.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:j(S.HTML,e),linkTags:R(l.LINK,[h.REL,h.HREF],e),metaTags:R(l.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:R(l.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:Ie(e),scriptTags:R(l.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:R(l.STYLE,[h.CSS_TEXT],e),title:_e(e),titleAttributes:j(S.TITLE,e)}},F=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){F(e)},0)}}(),G=function(e){return clearTimeout(e)},je=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||F:global.requestAnimationFrame||F,Me=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:global.cancelAnimationFrame||G,Ne=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},_=null,He=function(e){_&&Me(_),e.defer?_=je(function(){W(e,function(){_=null})}):(W(e),_=null)},W=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,u=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,f=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;D(l.BODY,o),D(l.HTML,a),Fe(d,T);var y={baseTag:C(l.BASE,r),linkTags:C(l.LINK,u),metaTags:C(l.META,i),noscriptTags:C(l.NOSCRIPT,c),scriptTags:C(l.SCRIPT,f),styleTags:C(l.STYLE,p)},E={},A={};Object.keys(y).forEach(function(b){var w=y[b],B=w.newTags,ee=w.oldTags;B.length&&(E[b]=B),ee.length&&(A[b]=y[b].oldTags)}),n&&n(),s(e,E,A)},Q=function(e){return Array.isArray(e)?e.join(""):e},Fe=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Q(e)),D(l.TITLE,n)},D=function(e,n){var r=document.getElementsByTagName(e)[0];if(!!r){for(var o=r.getAttribute(g),a=o?o.split(","):[],u=[].concat(a),i=Object.keys(n),c=0;c<i.length;c++){var s=i[c],f=n[s]||"";r.getAttribute(s)!==f&&r.setAttribute(s,f),a.indexOf(s)===-1&&a.push(s);var p=u.indexOf(s);p!==-1&&u.splice(p,1)}for(var d=u.length-1;d>=0;d--)r.removeAttribute(u[d]);a.length===u.length?r.removeAttribute(g):r.getAttribute(g)!==i.join(",")&&r.setAttribute(g,i.join(","))}},C=function(e,n){var r=document.head||document.querySelector(l.HEAD),o=r.querySelectorAll(e+"["+g+"]"),a=Array.prototype.slice.call(o),u=[],i=void 0;return n&&n.length&&n.forEach(function(c){var s=document.createElement(e);for(var f in c)if(c.hasOwnProperty(f))if(f===h.INNER_HTML)s.innerHTML=c.innerHTML;else if(f===h.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=c.cssText:s.appendChild(document.createTextNode(c.cssText));else{var p=typeof c[f]>"u"?"":c[f];s.setAttribute(f,p)}s.setAttribute(g,"true"),a.some(function(d,T){return i=T,s.isEqualNode(d)})?a.splice(i,1):u.push(s)}),a.forEach(function(c){return c.parentNode.removeChild(c)}),u.forEach(function(c){return r.appendChild(c)}),{oldTags:a,newTags:u}},J=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},De=function(e,n,r,o){var a=J(r),u=Q(n);return a?"<"+e+" "+g+'="true" '+a+">"+H(u,o)+"</"+e+">":"<"+e+" "+g+'="true">'+H(u,o)+"</"+e+">"},ke=function(e,n,r){return n.reduce(function(o,a){var u=Object.keys(a).filter(function(s){return!(s===h.INNER_HTML||s===h.CSS_TEXT)}).reduce(function(s,f){var p=typeof a[f]>"u"?f:f+'="'+H(a[f],r)+'"';return s?s+" "+p:p},""),i=a.innerHTML||a.cssText||"",c=Oe.indexOf(e)===-1;return o+"<"+e+" "+g+'="true" '+u+(c?"/>":">"+i+"</"+e+">")},"")},Z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[x[o]||o]=e[o],r},n)},Ue=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[be[o]||o]=e[o],r},n)},Be=function(e,n,r){var o,a=(o={key:n},o[g]=!0,o),u=Z(r,a);return[U(l.TITLE,{...u,children:n})]},qe=function(e,n){return n.map(function(r,o){var a,u=(a={key:o},a[g]=!0,a);return Object.keys(r).forEach(function(i){var c=x[i]||i;if(c===h.INNER_HTML||c===h.CSS_TEXT){var s=r.innerHTML||r.cssText;u.dangerouslySetInnerHTML={__html:s}}else u[c]=r[i]}),N.createElement(e,u)})},O=function(e,n,r){switch(e){case l.TITLE:return{toComponent:function(){return Be(e,n.title,n.titleAttributes)},toString:function(){return De(e,n.title,n.titleAttributes,r)}};case S.BODY:case S.HTML:return{toComponent:function(){return Z(n)},toString:function(){return J(n)}};default:return{toComponent:function(){return qe(e,n)},toString:function(){return ke(e,n,r)}}}},K=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,u=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,f=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:O(l.BASE,n,o),bodyAttributes:O(S.BODY,r,o),htmlAttributes:O(S.HTML,a,o),link:O(l.LINK,u,o),meta:O(l.META,i,o),noscript:O(l.NOSCRIPT,c,o),script:O(l.SCRIPT,s,o),style:O(l.STYLE,f,o),title:O(l.TITLE,{title:d,titleAttributes:T},o)}},Ye=function(e){var n,r;return r=n=function(o){we(a,o);function a(){return Ce(this,a),Re(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!he(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,c){if(!c)return null;switch(i.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:c};case l.STYLE:return{cssText:c}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var c,s=i.child,f=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return v({},f,(c={},c[s.type]=[].concat(f[s.type]||[],[v({},p,this.mapNestedChildrenToProps(s,d))]),c))},a.prototype.mapObjectTypeChildren=function(i){var c,s,f=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(f.type){case l.TITLE:return v({},p,(c={},c[f.type]=T,c.titleAttributes=v({},d),c));case l.BODY:return v({},p,{bodyAttributes:v({},d)});case l.HTML:return v({},p,{htmlAttributes:v({},d)})}return v({},p,(s={},s[f.type]=v({},d),s))},a.prototype.mapArrayTypeChildrenToProps=function(i,c){var s=v({},c);return Object.keys(i).forEach(function(f){var p;s=v({},s,(p={},p[f]=i[f],p))}),s},a.prototype.warnOnInvalidChildren=function(i,c){return!0},a.prototype.mapChildrenToProps=function(i,c){var s=this,f={};return N.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,y=$(d,["children"]),E=Ue(y);switch(s.warnOnInvalidChildren(p,T),p.type){case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:f=s.flattenArrayTypeChildren({child:p,arrayTypeChildren:f,newChildProps:E,nestedChildren:T});break;default:c=s.mapObjectTypeChildren({child:p,newProps:c,newChildProps:E,nestedChildren:T});break}}}),c=this.mapArrayTypeChildrenToProps(f,c),c},a.prototype.render=function(){var i=this.props,c=i.children,s=$(i,["children"]),f=v({},s);return c&&(f=this.mapChildrenToProps(c,f)),U(e,{...f})},Pe(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(N.Component),n.propTypes={base:m.exports.object,bodyAttributes:m.exports.object,children:m.exports.oneOfType([m.exports.arrayOf(m.exports.node),m.exports.node]),defaultTitle:m.exports.string,defer:m.exports.bool,encodeSpecialCharacters:m.exports.bool,htmlAttributes:m.exports.object,link:m.exports.arrayOf(m.exports.object),meta:m.exports.arrayOf(m.exports.object),noscript:m.exports.arrayOf(m.exports.object),onChangeClientState:m.exports.func,script:m.exports.arrayOf(m.exports.object),style:m.exports.arrayOf(m.exports.object),title:m.exports.string,titleAttributes:m.exports.object,titleTemplate:m.exports.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},$e=function(){return null},Ge=le(xe,He,K)($e),k=Ye(Ge);k.renderStatic=k.rewind;const M={siteMetadata:{title:"Admin",description:"The best ecommerce software.",author:"@medusajs"}};function We({description:t,lang:e,meta:n,title:r}){const o=t||M.siteMetadata.description;return U(k,{htmlAttributes:{lang:e},title:r,titleTemplate:`%s ${M.siteMetadata.title}`,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(n)})}We.defaultProps={lang:"en",meta:[],description:""};export{We as S,he as r};

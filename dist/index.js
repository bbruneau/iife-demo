!function(Tn){!function(){"use strict";function r(){}function o(){}o.resetWarningCache=r;var e,a=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}()}(e={exports:{}},e.exports),e.exports),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){},c={},p=[],l=[];function w(e,t){var n,r,o,i,a=l;for(i=arguments.length;2<i--;)p.push(arguments[i]);for(t&&null!=t.children&&(p.length||p.push(t.children),delete t.children);p.length;)if((r=p.pop())&&void 0!==r.pop)for(i=r.length;i--;)p.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?a[a.length-1]+=r:a===l?a=[r]:a.push(r),n=o;var s=new u;return s.nodeName=e,s.children=a,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==c.vnode&&c.vnode(s),s}function N(e,t){for(var n in t)e[n]=t[n];return e}function d(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var t="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,n=[];function s(e){!e._dirty&&(e._dirty=!0)&&1==n.push(e)&&t(v)}function v(){for(var e;e=n.pop();)e._dirty&&A(e)}function C(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function x(e){var t=N({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function T(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)d(n,null),d(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":h(r))){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===f.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](c.event&&c.event(e)||e)}var E=[],j=0,m=!1,g=!1;function k(){for(var e;e=E.shift();)e.componentDidMount&&e.componentDidMount()}function R(e,t,n,r,o,i){j++||(m=null!=o&&void 0!==o.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var a=D(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--j||(g=!1,i||k()),a}function D(e,t,n,r,o){var i=e,a=m;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),I(e,!0))),i.__preactattr_=!0,i;var s,u,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,c=x(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(q(o,c,3,n,r),e=o.base):(i&&!s&&(M(i),e=a=null),o=U(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),q(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,I(a,!1)));return e}(e,t,n,r);if(m="svg"===c||"foreignObject"!==c&&m,c=String(c),(!e||!C(e,c))&&(s=c,(u=m?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=u,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),I(e,!0)}var p=i.firstChild,l=i.__preactattr_,d=t.children;if(null==l){l=i.__preactattr_={};for(var f=i.attributes,h=f.length;h--;)l[f[h].name]=f[h].value}return!g&&d&&1===d.length&&"string"==typeof d[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=d[0]&&(p.nodeValue=d[0]):(d&&d.length||null!=p)&&function(e,t,n,r,o){var i,a,s,u,c,p=e.childNodes,l=[],d={},f=0,h=0,v=p.length,y=0,b=t?t.length:0;if(0!==v)for(var m=0;m<v;m++){var g=p[m],O=g.__preactattr_,w=b&&O?g._component?g._component.__key:O.key:null;null!=w?(f++,d[w]=g):(O||(void 0!==g.splitText?!o||g.nodeValue.trim():o))&&(l[y++]=g)}if(0!==b)for(var m=0;m<b;m++){u=t[m],c=null;var w=u.key;if(null!=w)f&&void 0!==d[w]&&(c=d[w],d[w]=void 0,f--);else if(h<y)for(i=h;i<y;i++)if(void 0!==l[i]&&(P=a=l[i],_=o,"string"==typeof(S=u)||"number"==typeof S?void 0!==P.splitText:"string"==typeof S.nodeName?!P._componentConstructor&&C(P,S.nodeName):_||P._componentConstructor===S.nodeName)){c=a,l[i]=void 0,i===y-1&&y--,i===h&&h++;break}c=D(c,u,n,r),s=p[m],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?T(s):e.insertBefore(c,s))}var P,S,_;if(f)for(var m in d)void 0!==d[m]&&I(d[m],!1);for(;h<=y;)void 0!==(c=l[y--])&&I(c,!1)}(i,d,n,r,g||null!=l.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,m);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],m)}(i,t.attributes,l),m=a,i}function I(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&d(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||T(e),O(e))}function O(e){for(e=e.lastChild;e;){var t=e.previousSibling;I(e,!0),e=t}}var P=[];function U(e,t,n){var r,o=P.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),_.call(r,t,n)):((r=new _(t,n)).constructor=e,r.render=S);o--;)if(P[o].constructor===e)return r.nextBase=P[o].nextBase,P.splice(o,1),r;return r}function S(e,t,n){return this.constructor(e,n)}function q(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===c.syncComponentUpdates&&e.base?s(e):A(e,1,o)),d(e.__ref,e))}function A(e,t,n,r){if(!e._disable){var o,i,a,s=e.props,u=e.state,c=e.context,p=e.prevProps||s,l=e.prevState||u,d=e.prevContext||c,f=e.base,h=e.nextBase,v=f||h,y=e._component,b=!1,m=d;if(e.constructor.getDerivedStateFromProps&&(u=N(N({},u),e.constructor.getDerivedStateFromProps(s,u)),e.state=u),f&&(e.props=p,e.state=l,e.context=d,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,u,c)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(s,u,c),e.props=s,e.state=u,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){o=e.render(s,u,c),e.getChildContext&&(c=N(N({},c),e.getChildContext())),f&&e.getSnapshotBeforeUpdate&&(m=e.getSnapshotBeforeUpdate(p,l));var g,O,w=o&&o.nodeName;if("function"==typeof w){var P=x(o);(i=y)&&i.constructor===w&&P.key==i.__key?q(i,P,1,c,!1):(g=i,e._component=i=U(w,P,c),i.nextBase=i.nextBase||h,i._parentComponent=e,q(i,P,0,c,!1),A(i,1,n,!0)),O=i.base}else a=v,(g=y)&&(a=e._component=null),(v||1===t)&&(a&&(a._component=null),O=R(a,o,c,n||!f,v&&v.parentNode,!0));if(v&&O!==v&&i!==y){var S=v.parentNode;S&&O!==S&&(S.replaceChild(O,v),g||(v._component=null,I(v,!1)))}if(g&&M(g),(e.base=O)&&!r){for(var _=e,C=e;C=C._parentComponent;)(_=C).base=O;O._component=_,O._componentConstructor=_.constructor}}for(!f||n?E.push(e):b||e.componentDidUpdate&&e.componentDidUpdate(p,l,m);e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);j||r||k()}}function M(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(null!=t.__preactattr_&&d(t.__preactattr_.ref,null),T(e.nextBase=t),P.push(e),O(t)),d(e.__ref,null)}function _(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function W(e,t,n){return R(n,e,{},!1,t,!1)}N(_.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=N(N({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),s(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),A(this,2)},render:function(){}});var L="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,F="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",H={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},V=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,z={},G=!1;try{G=!1}catch(e){}function $(){return null}var K=w("a",null).constructor;K.prototype.$$typeof=B,K.prototype.preactCompatUpgraded=!1,K.prototype.preactCompatNormalized=!1,Object.defineProperty(K.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(K.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var Y=c.event;c.event=function(e){return Y&&(e=Y(e)),e.persist=Object,e.nativeEvent=e};var Z=c.vnode;function J(e,t,n){var r=t&&t._preactCompatRendered&&t._preactCompatRendered.base;r&&r.parentNode!==t&&(r=null),!r&&t&&(r=t.firstElementChild);for(var o=t.childNodes.length;o--;)t.childNodes[o]!==r&&t.removeChild(t.childNodes[o]);var i=W(e,t,r);return t&&(t._preactCompatRendered=i&&(i._component||{base:i})),"function"==typeof n&&n(),i&&i._component||i}c.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes=null==e.attributes?{}:de({},e.attributes);"function"==typeof t?(!0===t[F]||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),e.preactCompatNormalized||ce(e),function(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&de(e.attributes,t.defaultProps);n&&de(e.attributes,n)}(e)):(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),function(e,t){var n,r,o;if(t){for(o in t)if(n=V.test(o))break;if(n)for(o in r=e.attributes={},t)t.hasOwnProperty(o)&&(r[V.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}(e,n))}Z&&Z(e)};var X=function(){};function Q(e,t,n,r){var o=J(w(X,{context:e.context},t),n),i=o._component||o.base;return r&&r.call(i,o),i}function ee(e){Q(this,e.vnode,e.container)}X.prototype.getChildContext=function(){return this.props.context},X.prototype.render=function(e){return e.children[0]};var te,ne=[],re={map:function(e,t,n){return null==e?null:(e=re.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){if(null==e)return null;e=re.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e&&e.length||0},only:function(e){if(1!==(e=re.toArray(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:ne.concat(e)}};function oe(e){return ue.bind(null,e)}for(var ie={},ae=L.length;ae--;)ie[L[ae]]=oe(L[ae]);function se(e){var t,n=e[F];return n?!0===n?e:n:(n=ve({displayName:(t=e).displayName||t.name,render:function(){return t(this.props,this.context)}}),Object.defineProperty(n,F,{configurable:!0,value:!0}),n.displayName=e.displayName,n.propTypes=e.propTypes,n.defaultProps=e.defaultProps,Object.defineProperty(e,F,{configurable:!0,value:n}),n)}function ue(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return function e(t,n){for(var r=n||0;r<t.length;r++){var o=t[r];Array.isArray(o)?e(o):o&&"object"===(void 0===o?"undefined":h(o))&&!pe(o)&&(o.props&&o.type||o.attributes&&o.nodeName||o.children)&&(t[r]=ue(o.type||o.nodeName,o.props||o.attributes,o.children))}}(e,2),ce(w.apply(void 0,e))}function ce(e){var t;e.preactCompatNormalized=!0,function(e){var t=e.attributes||(e.attributes={});le.enumerable="className"in t,t.className&&(t.class=t.className);Object.defineProperty(t,"className",le)}(e),"function"!=typeof(t=e.nodeName)||t.prototype&&t.prototype.render||(e.nodeName=se(e.nodeName));var n,r,o=e.attributes.ref,i=o&&(void 0===o?"undefined":h(o));return!te||"string"!==i&&"number"!==i||(e.attributes.ref=(n=o,(r=te)._refProxies[n]||(r._refProxies[n]=function(e){r&&r.refs&&null===(r.refs[n]=e)&&(delete r._refProxies[n],r=null)}))),function(e){var t=e.nodeName,n=e.attributes;if(!n||"string"!=typeof t)return;var r={};for(var o in n)r[o.toLowerCase()]=o;r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]);if(r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=be([n[i],n[r.onchange]]),delete n[r.onchange])}}(e),e}function pe(e){return e&&(e instanceof K||e.$$typeof===B)}var le={configurable:!0,get:function(){return this.class},set:function(e){this.class=e}};function de(e,t){for(var n=arguments,r=1,o=void 0;r<arguments.length;r++)if(o=n[r])for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);return e}function fe(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function he(){}function ve(e){function t(e,t){!function(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||H.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}(this),Pe.call(this,e,t,z),me.call(this,e,t)}return(e=de({constructor:t},e)).mixins&&function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=be(t[n].concat(e[n]||ne),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}(e,function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}(e.mixins)),e.statics&&de(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps.call(t)),he.prototype=Pe.prototype,t.prototype=de(new he,e),t.displayName=e.displayName||"Component",t}function ye(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function be(i,a){return function(){for(var e,t=arguments,n=0;n<i.length;n++){var r=ye(this,i[n],t);if(a&&null!=r)for(var o in e||(e={}),r)r.hasOwnProperty(o)&&(e[o]=r[o]);else void 0!==r&&(e=r)}return e}}function me(e,t){ge.call(this,e,t),this.componentWillReceiveProps=be([ge,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=be([ge,Oe,this.render||"render",we])}function ge(e,t){if(e){var n=e.children;if(n&&Array.isArray(n)&&1===n.length&&("string"==typeof n[0]||"function"==typeof n[0]||n[0]instanceof K)&&(e.children=n[0],e.children&&"object"===h(e.children)&&(e.children.length=1,e.children[0]=e.children)),G){var r="function"==typeof this?this:this.constructor,o=this.propTypes||r.propTypes,i=this.displayName||r.name;o&&a.checkPropTypes(o,e,"prop",i)}}}function Oe(e){te=this}function we(){te===this&&(te=null)}function Pe(e,t,n){_.call(this,e,t),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},n!==z&&me.call(this,e,t)}function Se(e,t){Pe.call(this,e,t)}de(Pe.prototype=new _,{constructor:Pe,isReactComponent:{},replaceState:function(e,t){for(var n in this.setState(e,t),this.state)n in e||delete this.state[n]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),he.prototype=Pe.prototype,(Se.prototype=new he).isPureReactComponent=!0,Se.prototype.shouldComponentUpdate=function(e,t){return fe(this.props,e)||fe(this.state,t)};var _e={version:"15.1.0",DOM:ie,PropTypes:a,Children:re,render:J,createClass:ve,createPortal:function(e,t){return w(ee,{vnode:e,container:t})},createFactory:oe,createElement:ue,cloneElement:function(e,t){for(var n=[],r=arguments.length-2;0<r--;)n[r]=arguments[r+2];if(!pe(e))return e;var o=e.attributes||e.props,i=[w(e.nodeName||e.type,de({},o),e.children||o&&o.children),t];return n&&n.length?i.push(n):t&&t.children&&i.push(t.children),ce(function(e,t){return w(e.nodeName,N(N({},e.attributes),t),2<arguments.length?[].slice.call(arguments,2):e.children)}.apply(void 0,i))},isValidElement:pe,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},unmountComponentAtNode:function(e){var t=e._preactCompatRendered&&e._preactCompatRendered.base;return!(!t||t.parentNode!==e||(W(w($),e,t),0))},Component:Pe,PureComponent:Se,unstable_renderSubtreeIntoContainer:Q,unstable_batchedUpdates:function(e){e()},__spread:de},Ce="object"==("undefined"==typeof global?"undefined":h(global))&&global&&global.Object===Object&&global,Ne="object"==("undefined"==typeof self?"undefined":h(self))&&self&&self.Object===Object&&self,xe=(Ce||Ne||Function("return this")()).Symbol,Te=Object.prototype,Ee=Te.hasOwnProperty,je=Te.toString,ke=xe?xe.toStringTag:void 0;var Re=Object.prototype.toString;var De="[object Null]",Ie="[object Undefined]",Ue=xe?xe.toStringTag:void 0;function qe(e){return null==e?void 0===e?Ie:De:Ue&&Ue in Object(e)?function(e){var t=Ee.call(e,ke),n=e[ke];try{var r=!(e[ke]=void 0)}catch(e){}var o=je.call(e);return r&&(t?e[ke]=n:delete e[ke]),o}(e):(t=e,Re.call(t));var t}var Ae,Me,We=(Ae=Object.getPrototypeOf,Me=Object,function(e){return Ae(Me(e))});var Le,Be="[object Object]",Fe=Function.prototype,He=Object.prototype,Ve=Fe.toString,ze=He.hasOwnProperty,Ge=Ve.call(Object);function $e(e){if(null==(t=e)||"object"!=(void 0===t?"undefined":h(t))||qe(e)!=Be)return!1;var t,n=We(e);if(null===n)return!0;var r=ze.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&Ve.call(r)==Ge}Le="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")();var Ke,Ye,Ze=("function"==typeof(Ye=Le.Symbol)?Ye.observable?Ke=Ye.observable:(Ke=Ye("observable"),Ye.observable=Ke):Ke="@@observable",Ke),Je={INIT:"@@redux/INIT"};function Xe(e,t){return function(){return t(e.apply(void 0,arguments))}}var Qe=function(e){return e&&e[0]||null};function et(){}var tt={element:et.isRequired=et,func:et,shape:function(){return et},instanceOf:function(){return et}},nt=tt.shape({trySubscribe:tt.func.isRequired,tryUnsubscribe:tt.func.isRequired,notifyNestedSubs:tt.func.isRequired,isSubscribed:tt.func.isRequired}),rt=tt.shape({subscribe:tt.func.isRequired,dispatch:tt.func.isRequired,getState:tt.func.isRequired});function ot(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}var it="function"==typeof Symbol&&"symbol"===h(Symbol.iterator)?function(e){return void 0===e?"undefined":h(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":h(e)},at=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ut=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":h(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ct=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},pt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":h(t))&&"function"!=typeof t?e:t},lt=!1;var dt=function(){var e,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"store",t=arguments[1]||i+"Subscription",n=function(r){function o(e,t){at(this,o);var n=pt(this,r.call(this,e,t));return n[i]=e.store,n}return ut(o,r),o.prototype.getChildContext=function(){var e;return(e={})[i]=this[i],e[t]=null,e},o.prototype.render=function(){return Qe(this.props.children)},o}(_);return n.prototype.componentWillReceiveProps=function(e){this[i]!==e.store&&(lt||(lt=!0,ot("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions.")))},n.childContextTypes=((e={})[i]=rt.isRequired,e[t]=nt,e),n}(),ft={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},ht={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vt=Object.defineProperty,yt=Object.getOwnPropertyNames,bt=Object.getOwnPropertySymbols,mt=Object.getOwnPropertyDescriptor,gt=Object.getPrototypeOf,Ot=gt&&gt(Object),wt=function e(t,n,r){if("string"==typeof n)return t;if(Ot){var o=gt(n);o&&o!==Ot&&e(t,o,r)}var i=yt(n);bt&&(i=i.concat(bt(n)));for(var a=0;a<i.length;++a){var s=i[a];if(!(ft[s]||ht[s]||r&&r[s])){var u=mt(n,s);try{vt(t,s,u)}catch(e){}}}return t},Pt=function(){},St={notify:function(){}};var _t=function(){function r(e,t,n){at(this,r),this.store=e,this.parentSub=t,this.onStateChange=n,this.unsubscribe=null,this.listeners=St}return r.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},r.prototype.notifyNestedSubs=function(){this.listeners.notify()},r.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},r.prototype.trySubscribe=function(){var n,r;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(n=[],r=[],{clear:function(){n=r=null},notify:function(){for(var e=n=r,t=0;t<e.length;t++)e[t]()},get:function(){return r},subscribe:function(e){var t=!0;return r===n&&(r=n.slice()),r.push(e),function(){t&&null!==n&&(t=!1,r===n&&(r=n.slice()),r.splice(r.indexOf(e),1))}}}))},r.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=St)},r}(),Ct=0,Nt={};function xt(){}function Tt(s){var e,t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=n.getDisplayName,o=void 0===r?function(e){return"ConnectAdvanced("+e+")"}:r,i=n.methodName,u=void 0===i?"connectAdvanced":i,a=n.renderCountProp,c=void 0===a?void 0:a,p=n.shouldHandleStateChanges,l=void 0===p||p,d=n.storeKey,f=void 0===d?"store":d,h=n.withRef,v=void 0!==h&&h,y=ct(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),b=f+"Subscription",m=Ct++,g=((e={})[f]=rt,e[b]=nt,e),O=((t={})[b]=nt,t);return function(t){Pt("function"==typeof t,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(t));var e=t.displayName||t.name||"Component",i=o(e),a=st({},y,{getDisplayName:o,methodName:u,renderCountProp:c,shouldHandleStateChanges:l,storeKey:f,withRef:v,displayName:i,wrappedComponentName:e,WrappedComponent:t}),n=function(r){function o(e,t){at(this,o);var n=pt(this,r.call(this,e,t));return n.version=m,n.state={},n.renderCount=0,n.store=e[f]||t[f],n.propsMode=Boolean(e[f]),n.setWrappedInstance=n.setWrappedInstance.bind(n),Pt(n.store,'Could not find "'+f+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+f+'" as a prop to "'+i+'".'),n.initSelector(),n.initSubscription(),n}return ut(o,r),o.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[b]=t||this.context[b],e},o.prototype.componentDidMount=function(){l&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},o.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},o.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},o.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=xt,this.store=null,this.selector.run=xt,this.selector.shouldComponentUpdate=!1},o.prototype.getWrappedInstance=function(){return this.wrappedInstance},o.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},o.prototype.initSelector=function(){var n,r,o,e=s(this.store.dispatch,a);this.selector=(n=e,r=this.store,o={run:function(e){try{var t=n(r.getState(),e);(t!==o.props||o.error)&&(o.shouldComponentUpdate=!0,o.props=t,o.error=null)}catch(e){o.shouldComponentUpdate=!0,o.error=e}}}),this.selector.run(this.props)},o.prototype.initSubscription=function(){if(l){var e=(this.propsMode?this.props:this.context)[b];this.subscription=new _t(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},o.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(Nt)):this.notifyNestedSubs()},o.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},o.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},o.prototype.addExtraProps=function(e){if(!(v||c||this.propsMode&&this.subscription))return e;var t=st({},e);return v&&(t.ref=this.setWrappedInstance),c&&(t[c]=this.renderCount++),this.propsMode&&this.subscription&&(t[b]=this.subscription),t},o.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return w(t,this.addExtraProps(e.props))},o}(_);return n.WrappedComponent=t,n.displayName=i,n.childContextTypes=O,n.contextTypes=g,n.prototype.componentWillUpdate=function(){var t=this;if(this.version!==m){this.version=m,this.initSelector();var e=[];this.subscription&&(e=this.subscription.listeners.get(),this.subscription.tryUnsubscribe()),this.initSubscription(),l&&(this.subscription.trySubscribe(),e.forEach(function(e){return t.subscription.listeners.subscribe(e)}))}},wt(n,t)}}var Et=Object.prototype.hasOwnProperty;function jt(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function kt(e,t){if(jt(e,t))return!0;if("object"!==(void 0===e?"undefined":it(e))||null===e||"object"!==(void 0===t?"undefined":it(t))||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Et.call(t,n[o])||!jt(e[n[o]],t[n[o]]))return!1;return!0}var Rt="object"==("undefined"==typeof global?"undefined":it(global))&&global&&global.Object===Object&&global,Dt="object"==("undefined"==typeof self?"undefined":it(self))&&self&&self.Object===Object&&self,It=(Rt||Dt||Function("return this")()).Symbol,Ut=Object.prototype,qt=Ut.hasOwnProperty,At=Ut.toString,Mt=It?It.toStringTag:void 0;var Wt=Object.prototype.toString;var Lt="[object Null]",Bt="[object Undefined]",Ft=It?It.toStringTag:void 0;function Ht(e){return null==e?void 0===e?Bt:Lt:Ft&&Ft in Object(e)?function(e){var t=qt.call(e,Mt),n=e[Mt];try{var r=!(e[Mt]=void 0)}catch(e){}var o=At.call(e);return r&&(t?e[Mt]=n:delete e[Mt]),o}(e):(t=e,Wt.call(t));var t}var Vt,zt,Gt=(Vt=Object.getPrototypeOf,zt=Object,function(e){return Vt(zt(e))});var $t="[object Object]",Kt=Function.prototype,Yt=Object.prototype,Zt=Kt.toString,Jt=Yt.hasOwnProperty,Xt=Zt.call(Object);function Qt(e){if(null==(t=e)||"object"!=(void 0===t?"undefined":it(t))||Ht(e)!=$t)return!1;var t,n=Gt(e);if(null===n)return!0;var r=Jt.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&Zt.call(r)==Xt}function en(e,t,n){Qt(e)||ot(n+"() in "+t+" must return a plain object. Instead received "+e+".")}function tn(o){return function(e,t){var n=o(e,t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function nn(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function rn(i,a){return function(e,t){var r=t.displayName,o=function(e,t){return o.dependsOnOwnProps?o.mapToProps(e,t):o.mapToProps(e)};return o.dependsOnOwnProps=!0,o.mapToProps=function(e,t){o.mapToProps=i,o.dependsOnOwnProps=nn(i);var n=o(e,t);return"function"==typeof n&&(o.mapToProps=n,o.dependsOnOwnProps=nn(n),n=o(e,t)),en(n,r,a),n},o}}var on=[function(e){return"function"==typeof e?rn(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:tn(function(e){return{dispatch:e}})},function(t){return t&&"object"===(void 0===t?"undefined":it(t))?tn(function(e){return function(e,t){if("function"==typeof e)return Xe(e,t);if("object"!==(void 0===e?"undefined":h(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":h(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=Xe(a,t))}return r}(t,e)}):void 0}];var an=[function(e){return"function"==typeof e?rn(e,"mapStateToProps"):void 0},function(e){return e?void 0:tn(function(){return{}})}];function sn(e,t,n){return st({},n,e,t)}var un=[function(e){return"function"==typeof e?(c=e,function(e,t){var o=t.displayName,i=t.pure,a=t.areMergedPropsEqual,s=!1,u=void 0;return function(e,t,n){var r=c(e,t,n);return s?i&&a(r,u)||(u=r):(s=!0,en(u=r,o,"mergeProps")),u}}):void 0;var c},function(e){return e?void 0:function(){return sn}}];function cn(e,t,n){if(!e)throw new Error("Unexpected value for "+t+" in "+n+".");"mapStateToProps"!==t&&"mapDispatchToProps"!==t||e.hasOwnProperty("dependsOnOwnProps")||ot("The selector for "+t+" of "+n+" did not specify a value for dependsOnOwnProps.")}function pn(n,r,o,i){return function(e,t){return o(n(e,t),r(i,t),t)}}function ln(a,s,u,c,e){var p=e.areStatesEqual,l=e.areOwnPropsEqual,d=e.areStatePropsEqual,n=!1,f=void 0,h=void 0,v=void 0,y=void 0,b=void 0;function r(e,t){var n,r,o=!l(t,h),i=!p(e,f);return f=e,h=t,o&&i?(v=a(f,h),s.dependsOnOwnProps&&(y=s(c,h)),b=u(v,y,h)):o?(a.dependsOnOwnProps&&(v=a(f,h)),s.dependsOnOwnProps&&(y=s(c,h)),b=u(v,y,h)):(i&&(n=a(f,h),r=!d(n,v),v=n,r&&(b=u(v,y,h))),b)}return function(e,t){return n?r(e,t):(v=a(f=e,h=t),y=s(c,h),b=u(v,y,h),n=!0,b)}}function dn(e,t){var n,r,o,i,a=t.initMapStateToProps,s=t.initMapDispatchToProps,u=t.initMergeProps,c=ct(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),p=a(e,c),l=s(e,c),d=u(e,c);return n=p,r=l,o=d,i=c.displayName,cn(n,"mapStateToProps",i),cn(r,"mapDispatchToProps",i),cn(o,"mergeProps",i),(c.pure?ln:pn)(p,l,d,e,c)}function fn(n,e,r){for(var t=e.length-1;0<=t;t--){var o=e[t](n);if(o)return o}return function(e,t){throw new Error("Invalid value of type "+(void 0===n?"undefined":it(n))+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function hn(e,t){return e===t}var vn=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,m=void 0===t?Tt:t,n=e.mapStateToPropsFactories,g=void 0===n?an:n,r=e.mapDispatchToPropsFactories,O=void 0===r?on:r,o=e.mergePropsFactories,w=void 0===o?un:o,i=e.selectorFactory,P=void 0===i?dn:i;return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=r.pure,i=void 0===o||o,a=r.areStatesEqual,s=void 0===a?hn:a,u=r.areOwnPropsEqual,c=void 0===u?kt:u,p=r.areStatePropsEqual,l=void 0===p?kt:p,d=r.areMergedPropsEqual,f=void 0===d?kt:d,h=ct(r,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),v=fn(e,g,"mapStateToProps"),y=fn(t,O,"mapDispatchToProps"),b=fn(n,w,"mergeProps");return m(P,st({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:v,initMapDispatchToProps:y,initMergeProps:b,pure:i,areStatesEqual:s,areOwnPropsEqual:c,areStatePropsEqual:l,areMergedPropsEqual:f},h))}}(),yn=0,bn="SHOW_ALL",mn="SHOW_COMPLETED",gn="SHOW_ACTIVE",On=function(e){var t=e.active,n=e.children,r=e.onClick;return _e.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)};On.propTypes={active:a.bool.isRequired,children:a.node.isRequired,onClick:a.func.isRequired};var wn=vn(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(On),Pn=function(){return _e.createElement("div",null,_e.createElement("span",null,"Show: "),_e.createElement(wn,{filter:bn},"All"),_e.createElement(wn,{filter:gn},"Active"),_e.createElement(wn,{filter:mn},"Completed"))},Sn=vn()(function(e){var n=e.dispatch,r=void 0;return _e.createElement("div",null,_e.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),r.value.trim()&&(n((t=r.value,{type:"ADD_TODO",id:yn++,text:t})),r.value="")}},_e.createElement("input",{ref:function(e){return r=e}}),_e.createElement("button",{type:"submit"},Tn.ADD_TODO_TEXT)))}),_n=function(e){var t=e.onClick,n=e.completed,r=e.text;return _e.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)};_n.propTypes={onClick:a.func.isRequired,completed:a.bool.isRequired,text:a.string.isRequired};var Cn=function(e){var t=e.todos,n=e.toggleTodo;return _e.createElement("ul",null,t.map(function(e){return _e.createElement(_n,i({key:e.id},e,{onClick:function(){return n(e.id)}}))}))};Cn.propTypes={todos:a.arrayOf(a.shape({id:a.number.isRequired,completed:a.bool.isRequired,text:a.string.isRequired}).isRequired).isRequired,toggleTodo:a.func.isRequired};var Nn=vn(function(e){return{todos:function(e,t){switch(t){case bn:return e;case mn:return e.filter(function(e){return e.completed});case gn:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}}(e.todos,e.visibilityFilter)}},function(t){return{toggleTodo:function(e){return t({type:"TOGGLE_TODO",id:e})}}})(Cn),xn=function e(t,n,r){var o;if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,a=n,s=[],u=s,c=!1;function p(){u===s&&(u=s.slice())}function l(){return a}function d(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var n=!0;return p(),u.push(t),function(){if(n){n=!1,p();var e=u.indexOf(t);u.splice(e,1)}}}function f(e){if(!$e(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,a=i(a,e)}finally{c=!1}for(var t=s=u,n=0;n<t.length;n++)(0,t[n])();return e}return f({type:Je.INIT}),(o={dispatch:f,subscribe:d,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,f({type:Je.INIT})}})[Ze]=function(){var e,n=d;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":h(e)))throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(l())}return t(),{unsubscribe:n(t)}}})[Ze]=function(){return this},e},o}(function(e){for(var t=Object.keys(e),f={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(f[r]=e[r])}var o,h=Object.keys(f),v=void 0;try{o=f,Object.keys(o).forEach(function(e){var t=o[e];if(void 0===t(void 0,{type:Je.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+Je.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}catch(e){v=e}return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(v)throw v;for(var n,r,o,i=!1,a={},s=0;s<h.length;s++){var u=h[s],c=f[u],p=e[u],l=c(p,t);if(void 0===l){var d=(n=u,o=void 0,"Given action "+((o=(r=t)&&r.type)&&'"'+o.toString()+'"'||"an action")+', reducer "'+n+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');throw new Error(d)}a[u]=l,i=i||l!==p}return i?a:e}}({todos:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_TODO":return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?i({},e,{completed:!e.completed}):e});default:return e}},visibilityFilter:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:bn,t=arguments[1];switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}}}));J(_e.createElement(dt,{store:xn},_e.createElement(function(){return _e.createElement("div",null,_e.createElement(Sn,null),_e.createElement(Nn,null),_e.createElement(Pn,null))},null)),document.getElementById("root"))}()}(AUTOMAT_OPTIONS);

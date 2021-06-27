(()=>{var e={441:(e,t,n)=>{var r;!function(o,a,i){if(o){for(var c,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},f=1;f<20;++f)l[111+f]="f"+f;for(f=0;f<=9;++f)l[f+96]=f.toString();g.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},g.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},g.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},g.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},g.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(k(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},g.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},g.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);c=null},g.init=function(){var e=g(a);for(var t in e)"_"!==t.charAt(0)&&(g[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},g.init(),o.Mousetrap=g,e.exports&&(e.exports=g),void 0===(r=function(){return g}.call(t,n,t,e))||(e.exports=r)}function h(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function d(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return l[e.which]?l[e.which]:s[e.which]?s[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function m(e,t,n){return n||(n=function(){if(!c)for(var e in c={},l)e>95&&e<112||l.hasOwnProperty(e)&&(c[l[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function v(e,t){var n,r,o,a=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)r=n[o],p[r]&&(r=p[r]),t&&"keypress"!=t&&u[r]&&(r=u[r],a.push("shift")),y(r)&&a.push(r);return{key:r,modifiers:a,action:t=m(r,a,t)}}function k(e,t){return null!==e&&e!==a&&(e===t||k(e.parentNode,t))}function g(e){var t=this;if(e=e||a,!(t instanceof g))return new g(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},o=!1,i=!1,c=!1;function l(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function s(e,n,o,a,i,c){var l,s,u,p,f=[],h=o.type;if(!t._callbacks[e])return[];for("keyup"==h&&y(e)&&(n=[e]),l=0;l<t._callbacks[e].length;++l)if(s=t._callbacks[e][l],(a||!s.seq||r[s.seq]==s.level)&&h==s.action&&("keypress"==h&&!o.metaKey&&!o.ctrlKey||(u=n,p=s.modifiers,u.sort().join(",")===p.sort().join(",")))){var d=!a&&s.combo==i,m=a&&s.seq==a&&s.level==c;(d||m)&&t._callbacks[e].splice(l,1),f.push(s)}return f}function u(e,n,r,o){t.stopCallback(n,n.target||n.srcElement,r,o)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function p(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=d(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function f(e,a,i,p,h){t._directMap[e+":"+i]=a;var y,m=(e=e.replace(/\s+/g," ")).split(" ");m.length>1?function(e,t,a,i){function s(t){return function(){c=t,++r[e],clearTimeout(n),n=setTimeout(l,1e3)}}function p(t){u(a,t,e),"keyup"!==i&&(o=d(t)),setTimeout(l,10)}r[e]=0;for(var h=0;h<t.length;++h){var y=h+1===t.length?p:s(i||v(t[h+1]).action);f(t[h],y,i,e,h)}}(e,m,a,i):(y=v(e,i),t._callbacks[y.key]=t._callbacks[y.key]||[],s(y.key,y.modifiers,{type:y.action},p,e,h),t._callbacks[y.key][p?"unshift":"push"]({callback:a,modifiers:y.modifiers,action:y.action,seq:p,level:h,combo:e}))}t._handleKey=function(e,t,n){var r,o=s(e,t,n),a={},p=0,f=!1;for(r=0;r<o.length;++r)o[r].seq&&(p=Math.max(p,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=p)continue;f=!0,a[o[r].seq]=1,u(o[r].callback,n,o[r].combo,o[r].seq)}else f||u(o[r].callback,n,o[r].combo);var h="keypress"==n.type&&i;n.type!=c||y(e)||h||l(a),i=f&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)f(e[r],t,n)},h(e,"keypress",p),h(e,"keydown",p),h(e,"keyup",p)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{"use strict";window.exampleApp=function(){return{color:"red",toggleColor:function(){"red"==this.color?this.color="green":this.color="red"}}},console.log("fn: ","Hello - Launch Kit"),window.feather.replace(),n(441).bind("mod+k",(function(){document.getElementById("searchbox").focus()})),new SmoothScroll("a.smoothscroll")})()})();
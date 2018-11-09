(function(window,undefined){(function(){function f(a,g,n){if(a===g)return 0!==a||1/a==1/g;if(null==a||null==g)return a===g;a._chain&&(a=a._wrapped);g._chain&&(g=g._wrapped);if(a.isEqual&&c.isFunction(a.isEqual))return a.isEqual(g);if(g.isEqual&&c.isFunction(g.isEqual))return g.isEqual(a);var p=r.call(a);if(p!=r.call(g))return!1;switch(p){case "[object String]":return a==String(g);case "[object Number]":return a!=+a?g!=+g:0==a?1/a==1/g:a==+g;case "[object Date]":case "[object Boolean]":return+a==+g;case "[object RegExp]":return a.source==
g.source&&a.global==g.global&&a.multiline==g.multiline&&a.ignoreCase==g.ignoreCase}if("object"!=typeof a||"object"!=typeof g)return!1;for(var b=n.length;b--;)if(n[b]==a)return!0;n.push(a);var b=0,d=!0;if("[object Array]"==p){if(b=a.length,d=b==g.length)for(;b--&&(d=b in a==b in g&&f(a[b],g[b],n)););}else{if("constructor"in a!="constructor"in g||a.constructor!=g.constructor)return!1;for(var e in a)if(c.has(a,e)&&(b++,!(d=c.has(g,e)&&f(a[e],g[e],n))))break;if(d){for(e in g)if(c.has(g,e)&&!b--)break;
d=!b}}n.pop();return d}var e=this,h=e._,l={},d=Array.prototype,k=Object.prototype,b=d.slice,C=d.unshift,r=k.toString,G=k.hasOwnProperty,s=d.forEach,z=d.map,x=d.reduce,u=d.reduceRight,q=d.filter,y=d.every,D=d.some,w=d.indexOf,A=d.lastIndexOf,k=Array.isArray,t=Object.keys,m=Function.prototype.bind,c=function(a){return new B(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=c),exports._=c):e._=c;c.VERSION="1.3.1";var v=c.each=c.forEach=function(a,
g,n){if(null!=a)if(s&&a.forEach===s)a.forEach(g,n);else if(a.length===+a.length)for(var p=0,b=a.length;p<b&&!(p in a&&g.call(n,a[p],p,a)===l);p++);else for(p in a)if(c.has(a,p)&&g.call(n,a[p],p,a)===l)break};c.map=c.collect=function(a,g,c){var p=[];if(null==a)return p;if(z&&a.map===z)return a.map(g,c);v(a,function(a,b,d){p[p.length]=g.call(c,a,b,d)});a.length===+a.length&&(p.length=a.length);return p};c.reduce=c.foldl=c.inject=function(a,g,n,p){var b=2<arguments.length;null==a&&(a=[]);if(x&&a.reduce===
x)return p&&(g=c.bind(g,p)),b?a.reduce(g,n):a.reduce(g);v(a,function(a,c,d){b?n=g.call(p,n,a,c,d):(n=a,b=!0)});if(!b)throw new TypeError("Reduce of empty array with no initial value");return n};c.reduceRight=c.foldr=function(a,g,n,p){var b=2<arguments.length;null==a&&(a=[]);if(u&&a.reduceRight===u)return p&&(g=c.bind(g,p)),b?a.reduceRight(g,n):a.reduceRight(g);var d=c.toArray(a).reverse();p&&!b&&(g=c.bind(g,p));return b?c.reduce(d,g,n,p):c.reduce(d,g)};c.find=c.detect=function(a,g,c){var p;L(a,function(a,
b,d){if(g.call(c,a,b,d))return p=a,!0});return p};c.filter=c.select=function(a,g,c){var p=[];if(null==a)return p;if(q&&a.filter===q)return a.filter(g,c);v(a,function(a,b,d){g.call(c,a,b,d)&&(p[p.length]=a)});return p};c.reject=function(a,g,c){var b=[];if(null==a)return b;v(a,function(a,d,e){g.call(c,a,d,e)||(b[b.length]=a)});return b};c.every=c.all=function(a,g,c){var b=!0;if(null==a)return b;if(y&&a.every===y)return a.every(g,c);v(a,function(a,d,e){if(!(b=b&&g.call(c,a,d,e)))return l});return b};
var L=c.some=c.any=function(a,g,n){g||(g=c.identity);var b=!1;if(null==a)return b;if(D&&a.some===D)return a.some(g,n);v(a,function(a,c,d){if(b||(b=g.call(n,a,c,d)))return l});return!!b};c.include=c.contains=function(a,g){return null==a?!1:w&&a.indexOf===w?-1!=a.indexOf(g):L(a,function(a){return a===g})};c.invoke=function(a,g){var n=b.call(arguments,2);return c.map(a,function(a){return(c.isFunction(g)?g||a:a[g]).apply(a,n)})};c.pluck=function(a,g){return c.map(a,function(a){return a[g]})};c.max=function(a,
g,n){if(!g&&c.isArray(a))return Math.max.apply(Math,a);if(!g&&c.isEmpty(a))return-Infinity;var b={computed:-Infinity};v(a,function(a,c,d){c=g?g.call(n,a,c,d):a;c>=b.computed&&(b={value:a,computed:c})});return b.value};c.min=function(a,g,n){if(!g&&c.isArray(a))return Math.min.apply(Math,a);if(!g&&c.isEmpty(a))return Infinity;var b={computed:Infinity};v(a,function(a,c,d){c=g?g.call(n,a,c,d):a;c<b.computed&&(b={value:a,computed:c})});return b.value};c.shuffle=function(a){var c=[],b;v(a,function(a,d){0==
d?c[0]=a:(b=Math.floor(Math.random()*(d+1)),c[d]=c[b],c[b]=a)});return c};c.sortBy=function(a,g,b){return c.pluck(c.map(a,function(a,c,d){return{value:a,criteria:g.call(b,a,c,d)}}).sort(function(a,c){var g=a.criteria,b=c.criteria;return g<b?-1:g>b?1:0}),"value")};c.groupBy=function(a,g){var b={},d=c.isFunction(g)?g:function(a){return a[g]};v(a,function(a,c){var g=d(a,c);(b[g]||(b[g]=[])).push(a)});return b};c.sortedIndex=function(a,g,b){b||(b=c.identity);for(var d=0,e=a.length;d<e;){var f=d+e>>1;
b(a[f])<b(g)?d=f+1:e=f}return d};c.toArray=function(a){return!a?[]:a.toArray?a.toArray():c.isArray(a)?b.call(a):c.isArguments(a)?b.call(a):c.values(a)};c.size=function(a){return c.toArray(a).length};c.first=c.head=function(a,c,n){return null!=c&&!n?b.call(a,0,c):a[0]};c.initial=function(a,c,n){return b.call(a,0,a.length-(null==c||n?1:c))};c.last=function(a,c,n){return null!=c&&!n?b.call(a,Math.max(a.length-c,0)):a[a.length-1]};c.rest=c.tail=function(a,c,n){return b.call(a,null==c||n?1:c)};c.compact=
function(a){return c.filter(a,function(a){return!!a})};c.flatten=function(a,g){return c.reduce(a,function(a,b){if(c.isArray(b))return a.concat(g?b:c.flatten(b));a[a.length]=b;return a},[])};c.without=function(a){return c.difference(a,b.call(arguments,1))};c.uniq=c.unique=function(a,g,b){b=b?c.map(a,b):a;var d=[];c.reduce(b,function(b,n,e){if(0==e||(!0===g?c.last(b)!=n:!c.include(b,n)))b[b.length]=n,d[d.length]=a[e];return b},[]);return d};c.union=function(){return c.uniq(c.flatten(arguments,!0))};
c.intersection=c.intersect=function(a){var g=b.call(arguments,1);return c.filter(c.uniq(a),function(a){return c.every(g,function(g){return 0<=c.indexOf(g,a)})})};c.difference=function(a){var g=c.flatten(b.call(arguments,1));return c.filter(a,function(a){return!c.include(g,a)})};c.zip=function(){for(var a=b.call(arguments),g=c.max(c.pluck(a,"length")),d=Array(g),e=0;e<g;e++)d[e]=c.pluck(a,""+e);return d};c.indexOf=function(a,g,b){if(null==a)return-1;var d;if(b)return b=c.sortedIndex(a,g),a[b]===g?
b:-1;if(w&&a.indexOf===w)return a.indexOf(g);b=0;for(d=a.length;b<d;b++)if(b in a&&a[b]===g)return b;return-1};c.lastIndexOf=function(a,c){if(null==a)return-1;if(A&&a.lastIndexOf===A)return a.lastIndexOf(c);for(var b=a.length;b--;)if(b in a&&a[b]===c)return b;return-1};c.range=function(a,c,b){1>=arguments.length&&(c=a||0,a=0);b=arguments[2]||1;for(var d=Math.max(Math.ceil((c-a)/b),0),e=0,f=Array(d);e<d;)f[e++]=a,a+=b;return f};var M=function(){};c.bind=function(a,g){var d,e;if(a.bind===m&&m)return m.apply(a,
b.call(arguments,1));if(!c.isFunction(a))throw new TypeError;e=b.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(g,e.concat(b.call(arguments)));M.prototype=a.prototype;var c=new M,f=a.apply(c,e.concat(b.call(arguments)));return Object(f)===f?f:c}};c.bindAll=function(a){var g=b.call(arguments,1);0==g.length&&(g=c.functions(a));v(g,function(b){a[b]=c.bind(a[b],a)});return a};c.memoize=function(a,b){var d={};b||(b=c.identity);return function(){var e=b.apply(this,arguments);
return c.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};c.delay=function(a,c){var d=b.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},c)};c.defer=function(a){return c.delay.apply(c,[a,1].concat(b.call(arguments,1)))};c.throttle=function(a,b){var d,e,f,h,k,s=c.debounce(function(){k=h=!1},b);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;k&&a.apply(d,e);s()},b));h?k=!0:a.apply(d,e);s();h=!0}};c.debounce=function(a,c){var b;return function(){var d=this,e=arguments;
clearTimeout(b);b=setTimeout(function(){b=null;a.apply(d,e)},c)}};c.once=function(a){var c=!1,b;return function(){if(c)return b;c=!0;return b=a.apply(this,arguments)}};c.wrap=function(a,c){return function(){var d=[a].concat(b.call(arguments,0));return c.apply(this,d)}};c.compose=function(){var a=arguments;return function(){for(var c=arguments,b=a.length-1;0<=b;b--)c=[a[b].apply(this,c)];return c[0]}};c.after=function(a,c){return 0>=a?c():function(){if(1>--a)return c.apply(this,arguments)}};c.keys=
t||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)c.has(a,d)&&(b[b.length]=d);return b};c.values=function(a){return c.map(a,c.identity)};c.functions=c.methods=function(a){var b=[],d;for(d in a)c.isFunction(a[d])&&b.push(d);return b.sort()};c.extend=function(a){v(b.call(arguments,1),function(c){for(var b in c)a[b]=c[b]});return a};c.defaults=function(a){v(b.call(arguments,1),function(c){for(var b in c)null==a[b]&&(a[b]=c[b])});return a};c.clone=function(a){return!c.isObject(a)?
a:c.isArray(a)?a.slice():c.extend({},a)};c.tap=function(a,c){c(a);return a};c.isEqual=function(a,c){return f(a,c,[])};c.isEmpty=function(a){if(c.isArray(a)||c.isString(a))return 0===a.length;for(var b in a)if(c.has(a,b))return!1;return!0};c.isElement=function(a){return!!(a&&1==a.nodeType)};c.isArray=k||function(a){return"[object Array]"==r.call(a)};c.isObject=function(a){return a===Object(a)};c.isArguments=function(a){return"[object Arguments]"==r.call(a)};c.isArguments(arguments)||(c.isArguments=
function(a){return!(!a||!c.has(a,"callee"))});c.isFunction=function(a){return"[object Function]"==r.call(a)};c.isString=function(a){return"[object String]"==r.call(a)};c.isNumber=function(a){return"[object Number]"==r.call(a)};c.isNaN=function(a){return a!==a};c.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"==r.call(a)};c.isDate=function(a){return"[object Date]"==r.call(a)};c.isRegExp=function(a){return"[object RegExp]"==r.call(a)};c.isNull=function(a){return null===a};c.isUndefined=
function(a){return void 0===a};c.has=function(a,c){return G.call(a,c)};c.noConflict=function(){e._=h;return this};c.identity=function(a){return a};c.times=function(a,c,b){for(var d=0;d<a;d++)c.call(b,d)};c.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};c.mixin=function(a){v(c.functions(a),function(b){E(b,c[b]=a[b])})};var N=0;c.uniqueId=function(a){var c=N++;return a?a+c:c};c.templateSettings=
{evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/.^/,I=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};c.template=function(a,b){var d=c.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||H,function(a,c){return"',_.escape("+I(c)+"),'"}).replace(d.interpolate||H,function(a,c){return"',"+I(c)+",'"}).replace(d.evaluate||H,function(a,
c){return"');"+I(c).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return b?e(b,c):function(a){return e.call(this,a,c)}};c.chain=function(a){return c(a).chain()};var B=function(a){this._wrapped=a};c.prototype=B.prototype;var J=function(a,b){return b?c(a).chain():a},E=function(a,d){B.prototype[a]=function(){var a=b.call(arguments);C.call(a,this._wrapped);return J(d.apply(c,a),this._chain)}};
c.mixin(c);v("pop push reverse shift sort splice unshift".split(" "),function(a){var c=d[a];B.prototype[a]=function(){var b=this._wrapped;c.apply(b,arguments);var d=b.length;("shift"==a||"splice"==a)&&0===d&&delete b[0];return J(b,this._chain)}});v(["concat","join","slice"],function(a){var c=d[a];B.prototype[a]=function(){return J(c.apply(this._wrapped,arguments),this._chain)}});B.prototype.chain=function(){this._chain=!0;return this};B.prototype.value=function(){return this._wrapped}}).call(this);
TINY={};TINY.box=function(){var j,m,b,g,v,p=0;return{show:function(o){v={opacity:70,close:1,animate:1,fixed:1,mask:1,maskid:'',boxid:'',topsplit:2,url:0,post:0,height:0,width:0,html:0,iframe:0};for(var s in o){v[s]=o[s]}if(!p){j=document.createElement('div');j.className='tbox';p=document.createElement('div');p.className='tinner';b=document.createElement('div');b.className='tcontent';m=document.createElement('div');m.className='tmask';g=document.createElement('div');g.className='tclose';g.v=0;document.body.appendChild(m);document.body.appendChild(j);j.appendChild(p);p.appendChild(b);m.onclick=g.onclick=TINY.box.hide;window.onresize=TINY.box.resize}else{j.style.display='none';clearTimeout(p.ah);if(g.v){p.removeChild(g);g.v=0}}p.id=v.boxid;m.id=v.maskid;j.style.position=v.fixed?'fixed':'absolute';if(v.html&&!v.animate){p.style.backgroundImage='none';b.innerHTML=v.html;b.style.display='';p.style.width=v.width?v.width+'px':'auto';p.style.height=v.height?v.height+'px':'auto'}else{b.style.display='none';if(!v.animate&&v.width&&v.height){p.style.width=v.width+'px';p.style.height=v.height+'px'}else{p.style.width=p.style.height='100px'}}if(v.mask){this.mask();this.alpha(m,1,v.opacity)}else{this.alpha(j,1,100)}if(v.autohide){p.ah=setTimeout(TINY.box.hide,1000*v.autohide)}else{document.onkeyup=TINY.box.esc}},fill:function(c,u,k,a,w,h){if(u){if(v.image){var i=new Image();i.onload=function(){w=w||i.width;h=h||i.height;TINY.box.psh(i,a,w,h)};i.src=v.image}else if(v.iframe){this.psh('<iframe src="'+v.iframe+'" width="'+v.width+'" frameborder="0" height="'+v.height+'"></iframe>',a,w,h)}else{var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){p.style.backgroundImage='';TINY.box.psh(x.responseText,a,w,h)}};if(k){x.open('POST',c,true);x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(k)}else{x.open('GET',c,true);x.send(null)}}}else{this.psh(c,a,w,h)}},psh:function(c,a,w,h){if(typeof c=='object'){b.appendChild(c)}else{b.innerHTML=c}var x=p.style.width,y=p.style.height;if(!w||!h){p.style.width=w?w+'px':'';p.style.height=h?h+'px':'';b.style.display='';if(!h){h=parseInt(b.offsetHeight)}if(!w){w=parseInt(b.offsetWidth)}b.style.display='none'}p.style.width=x;p.style.height=y;this.size(w,h,a)},esc:function(e){e=e||window.event;if(e.keyCode==27){TINY.box.hide()}},hide:function(){TINY.box.alpha(j,-1,0,3);document.onkeypress=null;if(v.closejs){v.closejs()}},resize:function(){TINY.box.pos();TINY.box.mask()},mask:function(){m.style.height=this.total(1)+'px';m.style.width=this.total(0)+'px'},pos:function(){var t;if(typeof v.top!='undefined'){t=v.top}else{t=(this.height()/v.topsplit)-(j.offsetHeight/2);t=t<20?20:t}if(!v.fixed&&!v.top){t+=this.top()}j.style.top=t+'px';j.style.left=typeof v.left!='undefined'?v.left+'px':(this.width()/2)-(j.offsetWidth/2)+'px'},alpha:function(e,d,a){clearInterval(e.ai);if(d){e.style.opacity=0;e.style.filter='alpha(opacity=0)';e.style.display='block';TINY.box.pos()}e.ai=setInterval(function(){TINY.box.ta(e,a,d)},20)},ta:function(e,a,d){var o=Math.round(e.style.opacity*100);if(o==a){clearInterval(e.ai);if(d==-1){e.style.display='none';e==j?TINY.box.alpha(m,-1,0,2):b.innerHTML=p.style.backgroundImage=''}else{if(e==m){this.alpha(j,1,100)}else{j.style.filter='';TINY.box.fill(v.html||v.url,v.url||v.iframe||v.image,v.post,v.animate,v.width,v.height)}}}else{var n=a-Math.floor(Math.abs(a-o)*.5)*d;e.style.opacity=n/100;e.style.filter='alpha(opacity='+n+')'}},size:function(w,h,a){if(a){clearInterval(p.si);var wd=parseInt(p.style.width)>w?-1:1,hd=parseInt(p.style.height)>h?-1:1;p.si=setInterval(function(){TINY.box.ts(w,wd,h,hd)},20)}else{p.style.backgroundImage='none';if(v.close){p.appendChild(g);g.v=1}p.style.width=w+'px';p.style.height=h+'px';b.style.display='';this.pos();if(v.openjs){v.openjs()}}},ts:function(w,wd,h,hd){var cw=parseInt(p.style.width),ch=parseInt(p.style.height);if(cw==w&&ch==h){clearInterval(p.si);p.style.backgroundImage='none';b.style.display='block';if(v.close){p.appendChild(g);g.v=1}if(v.openjs){v.openjs()}}else{if(cw!=w){p.style.width=(w-Math.floor(Math.abs(w-cw)*.6)*wd)+'px'}if(ch!=h){p.style.height=(h-Math.floor(Math.abs(h-ch)*.6)*hd)+'px'}this.pos()}},top:function(){return document.documentElement.scrollTop||document.body.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},total:function(d){var b=document.body,e=document.documentElement;return d?Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight)):Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))}}}();
/**
 * Library utilities and extensions
 */
(function() {
  function buildParams(prefix, obj, add) {
    var rbracket = /\[\]$/;

    if (_.isArray(obj)) {
      // Serialize array item.
      _.each(obj, function(i, v) {
        if (rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // If array item is non-scalar (array or object), encode its
          // numeric index to resolve deserialization ambiguity issues.
          // Note that rack (as of 1.0.0) can't currently deserialize
          // nested arrays properly, and attempting to do so may cause
          // a server error. Possible fixes are to modify rack's
          // deserialization algorithm or to provide an option or flag
          // to force array serialization to be shallow.
          buildParams(prefix + "[" + (typeof v === "object" || _.isArray(v) ? i : "") + "]", v, add);
        }
      });
    } else if (obj !== null && typeof obj === "object") {
      // Serialize object item.
      for (var name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  // Collection of additional library functions
  _.mixin({
    // Delete the values specified by a passed in arguments list
    nullify: function(obj) {
      _.each(_.toArray(arguments).slice(1), function(elem, index, list) {
        for (var i in elem) {
          delete obj[elem[i]];
        }
      });
      return obj;
    },

    // Serialize an array of form elements or a set of
    // key/values into a query string
    param: function(a) {
      var r20 = /%20/g,
        s = [],
        add = function(key, value) {
          // If value is a function, invoke it and return its value
          value = _.isFunction(value) ? value() : value;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };

      // If an array was passed in, assume that it is an array of form elements.
      if (_.isArray(a)) {
        // Serialize the form elements
        _.each(a, function() {
          add(this.name, this.value);
        });
      } else {
        // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (var prefix in a) {
          buildParams(prefix, a[prefix], add);
        }
      }

      // Return the resulting serialization
      return s.join("&").replace(r20, "+");
    },

    // A crude way of determining if an object is a window
    isWindow: function(obj) {
      return obj && typeof obj === "object" && "setInterval" in obj;
    },

    randomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //get the current height of the viewport
    getViewportHeight: function() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight
      );
    },

    compiled: function(str) {
      // Underscore returns a function if we don't pass in a context (even if its just empty)
      _.templateSettings = {
        interpolate: /<%=([\s\S]+?)%>/g
      };

      var template = _.template(str);
      return template(window.APP_CONFIG || {});
    },

    /**
     * getProp utility - an alternative to lodash.get
     * from https://gist.github.com/harish2704/d0ee530e6ee75bad6fd30c98e5ad9dab
     * @param {Object} object
     * @param {String|Array} path
     * @param {*} defaultVal
     */
    get: function(object, path, defaultVal) {
      var i, len;

      for (i = 0, path = path.split("."), len = path.length; i < len; i++) {
        if (!object || typeof object !== "object") return defaultVal;
        object = object[path[i]];
      }

      if (object === undefined) return defaultVal;
      return object;
    }
  });
})();
/**
 * @fileoverview Common methods for namespacing.
 */
PTS = window.PTS || {};

/**
 * Provide a namespace function common to all modules
 * @param {String} ns The namespace to use beneath 'PTS'.
 * @return Parent namespace object.
 */
PTS.namespace = function(ns) {
  var parts = ns.split("."),
    parent = PTS;

  // strip redundant
  if (parts[0] === "PTS") {
    parts = parts.slice(1);
  }

  for (var i = 0; i < parts.length; i++) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};
/**
 * @class Ajax url invoker based on 'Lightweight JSONP fetcher - www.nonobtrusive.com'
 * ... This class provides a service to make an HTTP request and expect a JSONP payload.
 * @constructor
 */
PTS.JsonpFetcher = (function(window, document, undefined) {
  "use strict";
  var counter = 0,
    head,
    query,
    key,
    self = {},
    load,
    get,
    callbackName;

  load = function(url, failureCallback) {
    var script = document.createElement("script"),
      done = false;

    script.src = url;
    script.async = true;
    script.onerror = function() {
      if (failureCallback) {
        failureCallback();
      }
    };
    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        script.onload = script.onreadystatechange = null;
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }
    };
    if (!head) {
      head = document.getElementsByTagName("head")[0];
    }

    head.appendChild(script);
  };

  self.get = function(url, params, callback, failureCallback) {
    query = "?";
    params = params || {};

    for (key in params) {
      if (params.hasOwnProperty(key)) {
        query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
      }
    }

    callbackName = "pts_json" + ++counter;
    window[callbackName] = function(data) {
      callback(data);

      try {
        delete window[callbackName];
      } catch (e) {}

      window[callbackName] = null;
    };

    load(url + query + "callback=" + callbackName, failureCallback);
    return callbackName;
  };

  return self;
})(window, document);
/**
 * @fileoverview Logging library.
 */
PTS.namespace("PTS.logging");

/**
 * @class Console logger
 * ... This class provides a service to log a message to the javascript console.
 *
 * @param {string} logFormat The format of the log message.
 * @constructor
 */
PTS.logging.Logger = function(logFormat) {
  if (_.isNull(logFormat)) {
    logFormat = "?error={{ message }}";
  }
  this._logFormat = logFormat;
};

/**
 * A method to log a message to the console.
 *
 * @param {String} logFormat The format of the log message.
 * @param {Object} context The log messages, a dictionary of key/value pairs, to create the log message to the console.
 * @return {String} The log message with all available tokens replaced.
 */
PTS.logging.Logger.prototype.replaceTokens = function(logFormat, context) {
  // mustache.js style templates: {{ foo }}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  var message = _.template(logFormat);
  return message(context);
};

/**
 * A method to log a message to the console.
 * @param {Error} error Contains stack trace information.
 * @param {Object} context The log messages, a dictionary of key/value pairs, to create the log message to the console.
 */
PTS.logging.Logger.prototype.log = function(error, context) {
  var message = this.replaceTokens(this._logFormat, context);
  if (window.console) {
    console.log(message);
    if (PTS.debugMode && !_.isUndefined(error)) {
      console.log(error.stack);
    }
  }
};

/**
 * @class Server-side logger
 * ... This class provides a service to log a message to the server.
 *
 * @param {String} logFormat The format of the log message.
 * @constructor
 */
PTS.logging.RemoteLogger = function(logFormat) {
  if (_.isNull(logFormat)) {
    logFormat = "?error={{ message }}";
  }
  this._logFormat = logFormat;
};

/**
 * An extension of the Logger class
 */
PTS.logging.RemoteLogger.prototype = new PTS.logging.Logger();

/**
 * A method to log a message to the server.
 *
 * @param {String} context The log messages, a dictionary of key/value pairs, to send the log message to the remote server.
 */
PTS.logging.RemoteLogger.prototype.log = function(error, context) {
  var logUrl;
  logUrl = this.replaceTokens(this._logFormat, context);
  PTS.JsonpFetcher.get(logUrl);
};
/**
 * @fileoverview Error package containing error handling functions.
 */
PTS.namespace("PTS.errors");

/**
 * Custom ErrorHandler class
 */
PTS.errors.ErrorHandler = (function() {
  var constr = function() {};

  constr.prototype = {
    constructor: PTS.errors.ErrorHandler,
    handleError: function(e, callback) {
      if (e instanceof PTS.errors.ValidationError) {
        // check if user supplied error callback
        if (_.isFunction(callback)) {
          // execute user supplied callback
          // todo: figure out what to use here and what context is needed for this
          callback(e);
        }
        // fallback to default error handling
        else {
          if (e.visible) {
            alert(
              "Our system is temporarily unavailable. Please refresh the page and try again, or contact customer service."
            );
          }
        }
      }
    }
  };
  return constr;
})();

/**
 * Validation Error subclassing the native JavaScript error class.
 * @param {Object} message Can be a string or object or array.
 * @param {String} visible Whether the message should be made visible (via an alert).
 */
PTS.errors.ValidationError = (function(message, visible) {
  var constr = function(message, visible) {
    this.message = message || "";
    this.visible = !!visible;
    this.name = "ValidationError";
  };

  constr.prototype = {
    constr: PTS.errors.ValidationError
  };
  return constr;
})();
PTS.errors.ValidationError.prototype = new Error();
(function(window, document, _) {
  "use strict";
  TINY.box = TINY.box || {};

  var KEYCODE_TAB = 9;

  function getAllTabbableElements(context) {
    var tabbableElements =
      "a[href], area[href], input:not([disabled])," +
      "select:not([disabled]), textarea:not([disabled])," +
      "button:not([disabled]), iframe, object, embed, *[tabindex]," +
      "*[contenteditable]";
    context = context || document;
    return context.querySelectorAll(tabbableElements);
  }

  function keepFocusOn(element) {
    // elem.focus() does not work for FF unless it's wrapped in setTimeout
    setTimeout(function() {
      element.focus();
    }, 10);
  }

  function keyListener(event) {
    var allTabbableElements = getAllTabbableElements(getTinyBoxRootElement()),
      firstTabbableElement = allTabbableElements[0],
      lastTabbableElement = allTabbableElements[allTabbableElements.length - 1];
    var keyCode = event.which || event.keyCode;

    // Polyfill to prevent the default behavior of events
    event.preventDefault =
      event.preventDefault ||
      function() {
        event.returnValue = false;
      };

    if (keyCode === KEYCODE_TAB) {
      // Move focus to first element that can be tabbed if Shift isn't used
      if (event.target === lastTabbableElement && !event.shiftKey) {
        event.preventDefault();
        keepFocusOn(firstTabbableElement);
        // Move focus to last element that can be tabbed if Shift is used
      } else if (event.target === firstTabbableElement && event.shiftKey) {
        event.preventDefault();
        keepFocusOn(lastTabbableElement);
      }
    }
  }

  function getTinyBoxRootElement() {
    return document.querySelector(".tbox");
  }

  function isElementVisible(elem) {
    if (elem === document) {
      return true;
    }

    return !elem.hidden && elem.style.display !== "none" && isElementVisible(elem.parentNode);
  }

  function focusListener(event) {
    if (TINY.box.isOpen) {
      var elem = document.querySelector(".tclose");
      elem.focus();
    }
  }

  function preventTabbingOutOfTinyBoxWhenOpen(tinyBoxRootElement) {
    // This is a hack to prevent tabbing out of the lightbox with iframe
    // when the lightbox is open.
    //
    // When the focus is shifted to the lightbox, the host page loses control
    // over the tab sequence.  When the focus is on the first element of
    // the iframe and SHIFT+TAB is hit,
    // the host page's keydown listener won't get called and
    // therefore, not able to reset the focus back to the lightbox.
    //
    // The hack is to register a focus event on the visible element of the
    // host page immediately before the lightbox element, and when that element
    // gets focus when the lightbox is open (which it shouldn't), we reset
    // the focus back to the lightbox.
    //
    // The focus listener is not registered on element immediately after
    // the lightbox because the close button is the "last tabbable element"
    // on the lightbox, so tabbing out of the iframe will focus
    // on the close button, which is the right behaviour.
    var allTabbableElements = getAllTabbableElements(),
      allTabbableElementsInTinyBox = getAllTabbableElements(tinyBoxRootElement),
      allTabbableElementsNotInTinyBox = _
        .filter(allTabbableElements, function(element) {
          return !_.contains(allTabbableElementsInTinyBox, element);
        })
        .reverse();

    var previousElement = _.find(allTabbableElementsNotInTinyBox, isElementVisible);

    if (previousElement) {
      previousElement.addEventListener("focus", focusListener, false);
    }
  }

  TINY.box.keepFocus = function() {
    var tinyBoxRootElement = getTinyBoxRootElement();
    tinyBoxRootElement.addEventListener("keydown", keyListener, false);
    preventTabbingOutOfTinyBoxWhenOpen(tinyBoxRootElement);
  };
})(window, document, _);
// Pre-offer eligibility
PTS.namespace("PTS.isEligibleForOffer");
PTS.isEligibleForOffer = function(config) {
  var cabinThresholds = {
    Economy: 0.8,
    Business: 0.5,
    "First Class": 0.5
  };
  var cabin = _.get(config, "flightBookingDetails.cabin");
  if (!_.contains(_.keys(cabinThresholds), cabin)) {
    return true;
  }
  var percentNeededToRedeem = (config.redemptionQuantity - config.transactionQuantity) / config.redemptionQuantity;
  return percentNeededToRedeem >= cabinThresholds[cabin];
};

// if config contains mvDelegate and offerCallback AND the request fulfils required eligibility
// (see https://jira.points.com/browse/DBGTLCP-7923 for eligibility criteria)
//  then send offer data through the offerCallback function
PTS.namespace("PTS.performOptionalOfferCallback");
PTS.performOptionalOfferCallback = function(config) {
  if (!_.isFunction(config.offerCallback)) {
    return;
  }

  var EMPTY_OFFER = { offer: null };

  if (!_.isString(config.mvDelegate) || !PTS.isEligibleForOffer(config)) {
    // Should not block on partner-specified code, so invoke the callback function asynchronously.
    setTimeout(function() {
      config.offerCallback(EMPTY_OFFER);
    });
    return;
  }

  var failCallback = function() {
    config.offerCallback(EMPTY_OFFER);
  };

  var successCallback = function(data) {
    var offer = data.offer;
    if (!_.get(offer, "increments.length")) {
      config.offerCallback(EMPTY_OFFER);
      return;
    }

    var highestIncrementPoints = _.max(
      _.map(offer.increments, function(increment) {
        return increment.bonus ? increment.basePoints + increment.bonus.calculatedAmount : increment.basePoints;
      })
    );

    if (config.transactionQuantity > highestIncrementPoints) {
      config.offerCallback(EMPTY_OFFER);
      return;
    }

    config.offerCallback({ offer: offer });
  };

  var url = _.compiled('https://storefront-staging.lxc.points.com') + "/" + config.partnerName + "/apis/offer";

  return PTS.JsonpFetcher.get(
    url,
    {
      mvDelegate: config.mvDelegate,
      transactionQuantity: config.transactionQuantity
    },
    successCallback,
    failCallback
  );
};
/**
 * Define the Inline Buy Library as a single function.
 * @return {PTS.inlineBuy} The inlineBuy library.
 */

var UNIQUE_ID_PREFIX = "pts-box-" + new Date().getTime();
var MASK_ID = UNIQUE_ID_PREFIX + "-mask";
PTS.namespace("PTS.inlineBuy");
PTS.inlineBuy = (function() {
  var document = window.document,
    // keep a handle on original tinybox hide function
    originalTinyHide = TINY.box.hide;
  var tinyBox;
  var globalConfig = {
    memberId: "",
    transactionQuantity: "",
    memberEmail: "",
    successUrl: window.location.href,
    partnerName: "",
    firstName: "",
    lastName: "",
    accountBalance: "",
    redemptionQuantity: "",
    languageCode: "",
    currencyCode: "",
    membershipLevel: "",
    product: "buy",
    closeConfirm: "Are you sure you want to close this dialog?",
    closeDialogCallback: null
  };

  // We do not allow these options to be overridden in production
  var disableDebugOptions = ["cssUrl", "loggingBaseUrl", "ssoGatewayUrl"];

  // Only allow debug mode conditionally
  var disableDebugMode = !!_.compiled('');

  // defines the config elements that are mandatory for a transaction
  var pointsRequiredConfigSso = ["memberId", "partnerName", "product"];

  var pointsRequiredConfigMvDelegate = _.without(pointsRequiredConfigSso, "memberId");

  // partner required config elements that are not required for a transaction
  var partnerRequiredConfigSso = [
    "transactionQuantity",
    "memberEmail",
    "successUrl",
    "firstName",
    "lastName",
    "accountBalance",
    "redemptionQuantity"
  ];

  var partnerRequiredConfigMvDelegate = _.without(
    partnerRequiredConfigSso,
    "memberEmail",
    "firstName",
    "lastName",
    "accountBalance"
  );

  var errorHandler = new PTS.errors.ErrorHandler();

  var consoleLogger = new PTS.logging.Logger("{{ message }}");

  var remoteLogger = new PTS.logging.RemoteLogger(
    _.compiled('https://staging.api.points.com/log') +
      "/bgt/{{ partnerName }}/buy/error/?f={{ filename }}&error={{ message }}&url={{ url }}"
  );

  var log = function(error) {
    if (!(error instanceof Error)) {
      error = new Error(error || "noErrorMessage");
    }

    var context = {
      partnerName: globalConfig.partnerName || "noPartnerName",
      filename: "inline-buy.js",
      message: error.name.toString() + ": " + error.message.toString(),
      url: window.location || "noUrl"
    };

    remoteLogger.log(error, context);

    if (PTS.debugMode) {
      msg = _.isArray(error) ? error.toString() : error;
      consoleLogger.log(error, {
        message: msg
      });
    }
  };

  var openDialog = function(options) {
    // reinitialize local config each time openDialog is called. This is the working set.
    var iframeUrl,
      localConfig = {},
      partnerRequiredErrors,
      pointsRequiredErrors;

    _.extend(localConfig, globalConfig, options);

    localConfig.partnerTransactionId =
      localConfig.partnerTransactionId || generatePartnerTransactionId(localConfig.partnerName);

    // remove debug options
    if (disableDebugMode || !PTS.debugMode) {
      _.nullify(localConfig, disableDebugOptions);
    }

    // validate points required config elements
    var pointsRequiredConfig;

    if (localConfig.mvDelegate) {
      pointsRequiredConfig = pointsRequiredConfigMvDelegate;
    } else {
      pointsRequiredConfig = localConfig.memberData
        ? _.without(pointsRequiredConfigSso, "memberId")
        : pointsRequiredConfigSso;
    }
    pointsRequiredErrors = validateConfig(localConfig, pointsRequiredConfig);
    if (!_.isEmpty(pointsRequiredErrors)) {
      // do not show dialog if points req'd config elements are missing
      throw new PTS.errors.ValidationError(pointsRequiredErrors, "visible");
    }

    // validate partner required config elements
    var partnerRequiredConfig;
    if (localConfig.mvDelegate) {
      partnerRequiredConfig = partnerRequiredConfigMvDelegate;
    } else {
      partnerRequiredConfig = localConfig.memberData
        ? _.without(partnerRequiredConfigSso, [
            "transactionQuantity",
            "memberEmail",
            "firstName",
            "lastName",
            "accountBalance"
          ])
        : partnerRequiredConfigSso;
    }
    partnerRequiredErrors = validateConfig(localConfig, partnerRequiredConfig);
    if (!_.isEmpty(partnerRequiredErrors)) {
      log(new PTS.errors.ValidationError(partnerRequiredErrors));
    }

    // Template out the SSO gateway url
    if (localConfig.mvDelegate) {
      iframeUrl =
        _.compiled('https://storefront-staging.lxc.points.com') +
        "/" +
        localConfig.partnerName +
        "/sso/mv-delegate/" +
        localConfig.product +
        "?";
      iframeUrl += _.param({
        partnerTransactionId: localConfig.partnerTransactionId,
        transactionQuantity: localConfig.transactionQuantity,
        token: localConfig.mvDelegate
      });
    } else {
      iframeUrl = localConfig.ssoGatewayUrl || _.compiled('https://staging.ssogateway.points.com/SSOGateway/gateway.do');
      iframeUrl += iframeUrl.indexOf("?") === -1 ? "?" : "&";
      var iframeUrlParams = {
        accountNumber: localConfig.memberId,
        balance: localConfig.accountBalance,
        currencyCode: localConfig.currencyCode,
        email: localConfig.memberEmail,
        externalTxId: localConfig.partnerTransactionId,
        firstName: localConfig.firstName,
        languageCode: localConfig.languageCode,
        lastName: localConfig.lastName,
        membershipLevel: localConfig.membershipLevel,
        redemptionQuantity: localConfig.redemptionQuantity,
        ssoProduct: localConfig.product,
        ssoSource: localConfig.partnerName,
        successURL: localConfig.successUrl,
        transactionQuantity: localConfig.transactionQuantity
      };
      if (localConfig.memberData) {
        iframeUrlParams.ssoData = localConfig.memberData;
      }
      iframeUrl += _.param(iframeUrlParams);
    }

    // disable close dialog via esc key
    TINY.box.esc = function() {};

    // Hijack the hide function
    TINY.box.hide = function(event) {
      //do nothing if we haven't clicked on the close button (e.g. we just clicked on the mask)
      if (!isValidCloseEvent(event)) {
        return;
      }

      // Emirates sometimes overwrites window.confirm, in which case we shouldn't try to confirm
      // intent to close the dialog. See: https://jira.points.com/browse/DBGTLCP-9238
      var shouldConfirmClose = _.isFunction(confirm);

      // https://jira.points.com/browse/DBGTLCP-8540
      if (_.isFunction(localConfig.closeDialogCallback)) {
        if (!shouldConfirmClose || confirm(localConfig.closeConfirm)) {
          // Should not block on partner-specified code, so invoke the callback function asynchronously.
          setTimeout(function() {
            localConfig.closeDialogCallback(localConfig.partnerTransactionId);
          });
          originalTinyHide();
        }
        return;
      }

      var currTxStatus = "";

      var closeButton;

      var checkOrderStatusThenHide = function() {
        if (currTxStatus === "COMPLETED") {
          if (localConfig.successUrl !== "") {
            window.location.href = localConfig.successUrl;
          } else {
            window.location.reload();
          }
        }
        //jsonp call returned, but the transaction is not yet completed
        originalTinyHide();
      };

      var successCallback = function(data) {
        var status = data.status;
        if (status === "COMPLETED" || (status === "NOT_COMPLETED" && currTxStatus === "")) {
          currTxStatus = status;
        }
        // Otherwise, leave `currTxStatus` unchanged.
      };

      // send jsonp call to check for transaction status
      PTS.JsonpFetcher.get(
        _.compiled('https://storefront-staging.lxc.points.com/order-status'),
        // The /order-status endpoint uses the param name "external_transaction_id" instead of
        // "partnerTransactionId" in order to maintain backward compatibility with SWA and Shangri-la which use
        // older versions of this library and cannot easily be updated.
        { external_transaction_id: localConfig.partnerTransactionId },
        successCallback
      );

      if (!shouldConfirmClose || confirm(localConfig.closeConfirm)) {
        //scenario 1: currTxStatus is populated
        if (currTxStatus !== "") {
          checkOrderStatusThenHide();
          return;
        }

        //scenario 2: currTxStatus isn't populated yet
        //hide the close button bring up the spinner instead
        closeButton = tinyBox.querySelector(".tclose");
        closeButton.className += " pts-close-waiting";

        window.setTimeout(function() {
          if (currTxStatus !== "") {
            checkOrderStatusThenHide();
            return;
          }

          //failure, log the error, and tell GA as well
          log("transaction status jsonp call never returned");
          originalTinyHide();
        }, 2000);
      }
    };

    TINY.box.show({
      iframe: iframeUrl,
      width: localConfig.boxWidth || 750,
      height: Math.max(Math.floor(_.getViewportHeight()) - (localConfig.boxVerticalMargin || 80), 400),
      fixed: false,
      boxid: UNIQUE_ID_PREFIX,
      maskid: MASK_ID,
      maskopacity: 40,
      openjs: function() {
        // target the current instance of tinybox because client uses inline buy improperly
        // (by calling openDialog multiple times)
        tinyBox = document.getElementById(UNIQUE_ID_PREFIX);
        var tinyBoxLabel = document.createElement("span"),
          tinyBoxDescription = document.createElement("span");
        var ptsIframe = tinyBox.getElementsByTagName("iframe")[0];
        ptsIframe.className = "pts-iframe";
        ptsIframe.setAttribute("title", "Buy Points");

        tinyBoxLabel.id = UNIQUE_ID_PREFIX + "-label";
        tinyBoxLabel.setAttribute("style", "display:none");
        tinyBoxLabel.innerText = "Buy Points Popup Dialog Box";

        tinyBoxDescription.id = UNIQUE_ID_PREFIX + "-description";
        tinyBoxDescription.setAttribute("style", "display:none");
        tinyBoxDescription.innerText =
          "In this modal window you can top up your account to complete the booking with points.";

        tinyBox.setAttribute("role", "dialog");
        tinyBox.setAttribute("aria-labelledby", UNIQUE_ID_PREFIX + "-label");
        tinyBox.setAttribute("aria-describedby", UNIQUE_ID_PREFIX + "-description");

        tinyBox.appendChild(tinyBoxLabel);
        tinyBox.appendChild(tinyBoxDescription);

        //need to fix tinybox's mistakes, i.e. have "close lightbox" text just in case css/images fail to load
        var closeButton = tinyBox.querySelector(".tclose");
        //inject html + css
        if (closeButton) {
          closeButton.innerHTML =
            '<span aria-hidden="true" class="pts-close-x">×</span> <span class="pts-close-text">Close</span>';
          closeButton.setAttribute("tabindex", 0);
          closeButton.setAttribute("role", "button");
          closeButton.focus();

          PTS._closeButtonKeyDownHandler =
            PTS._closeButtonKeyDownHandler ||
            function(event) {
              var keyCode = event.which || event.keyCode;
              var KEY_CODE_ENTER = 13;
              if (keyCode === KEY_CODE_ENTER) {
                TINY.box.hide(event);
              }
            };

          closeButton.addEventListener("keydown", PTS._closeButtonKeyDownHandler, false);
        }

        TINY.box.keepFocus();
        TINY.box.isOpen = true;
      },

      closejs: function() {
        var closeButton = tinyBox.querySelector(".tclose");

        //cleanup
        closeButton.className = closeButton.className.replace(" pts-close-waiting", "");
        TINY.box.isOpen = false;
      }
    });
  };

  var validateConfig = function(local, required) {
    var errors = [];
    _.each(required, function(element) {
      var val = local[element];
      if (_.isUndefined(val) || _.isNull(val) || (_.isString(val) && val.length === 0)) {
        errors.push(element + " is required");
      }
    });
    return errors;
  };

  var generatePartnerTransactionId = function(partnerName) {
    var components = [
      partnerName,
      +new Date(), //current timestamp
      _.randomInt(10000, 100000) // random padding
    ];
    return components.join("");
  };

  var isValidCloseEvent = function(event) {
    // get window.event if argument is falsy (in IE)
    event = event || window.event;

    // get srcElement if target is falsy (IE)
    var targetElement = event.target || event.srcElement;

    // check if clicking on mask
    return targetElement.id !== MASK_ID;
  };

  if (_.isUndefined(window.pointsAsyncInit)) {
    var error = new Error("Missing window.pointsAsyncInit() function.");
    errorHandler.handleError(error);
    log(error);
    return;
  }

  // Extend the defaults with partner-supplied configuration
  try {
    _.extend(globalConfig, window.pointsAsyncInit() || {});

    if (disableDebugMode || !PTS.debugMode) {
      _.nullify(globalConfig, disableDebugOptions);
    }

    var link = document.createElement("link");
    link.id = "pts-inline-style";
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", _.compiled('https://pts-inlinebuy-staging.s3.amazonaws.com/latest/inline-buy.css'));
    document.getElementsByTagName("head")[0].appendChild(link);

    PTS.performOptionalOfferCallback(globalConfig);
  } catch (e) {
    e.message = "Error when executing window.pointsAsyncInit(): " + e.message;
    errorHandler.handleError(e);
    log(e);
    return;
  }

  return {
    openDialog: function(options) {
      options = options || {};
      try {
        openDialog(options);
      } catch (e) {
        // Handle error with (possible) callback and log
        var callback = options.errorCallback || globalConfig.errorCallback;
        errorHandler.handleError(e, callback);
        log(e);
      }
    }
  };
})();
})(window);

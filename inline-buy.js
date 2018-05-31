(function(window,undefined){(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
TINY={};TINY.box=function(){var j,m,b,g,v,p=0;return{show:function(o){v={opacity:70,close:1,animate:1,fixed:1,mask:1,maskid:'',boxid:'',topsplit:2,url:0,post:0,height:0,width:0,html:0,iframe:0};for(s in o){v[s]=o[s]}if(!p){j=document.createElement('div');j.className='tbox';p=document.createElement('div');p.className='tinner';b=document.createElement('div');b.className='tcontent';m=document.createElement('div');m.className='tmask';g=document.createElement('div');g.className='tclose';g.v=0;document.body.appendChild(m);document.body.appendChild(j);j.appendChild(p);p.appendChild(b);m.onclick=g.onclick=TINY.box.hide;window.onresize=TINY.box.resize}else{j.style.display='none';clearTimeout(p.ah);if(g.v){p.removeChild(g);g.v=0}}p.id=v.boxid;m.id=v.maskid;j.style.position=v.fixed?'fixed':'absolute';if(v.html&&!v.animate){p.style.backgroundImage='none';b.innerHTML=v.html;b.style.display='';p.style.width=v.width?v.width+'px':'auto';p.style.height=v.height?v.height+'px':'auto'}else{b.style.display='none';if(!v.animate&&v.width&&v.height){p.style.width=v.width+'px';p.style.height=v.height+'px'}else{p.style.width=p.style.height='100px'}}if(v.mask){this.mask();this.alpha(m,1,v.opacity)}else{this.alpha(j,1,100)}if(v.autohide){p.ah=setTimeout(TINY.box.hide,1000*v.autohide)}else{document.onkeyup=TINY.box.esc}},fill:function(c,u,k,a,w,h){if(u){if(v.image){var i=new Image();i.onload=function(){w=w||i.width;h=h||i.height;TINY.box.psh(i,a,w,h)};i.src=v.image}else if(v.iframe){this.psh('<iframe src="'+v.iframe+'" width="'+v.width+'" frameborder="0" height="'+v.height+'"></iframe>',a,w,h)}else{var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){p.style.backgroundImage='';TINY.box.psh(x.responseText,a,w,h)}};if(k){x.open('POST',c,true);x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(k)}else{x.open('GET',c,true);x.send(null)}}}else{this.psh(c,a,w,h)}},psh:function(c,a,w,h){if(typeof c=='object'){b.appendChild(c)}else{b.innerHTML=c}var x=p.style.width,y=p.style.height;if(!w||!h){p.style.width=w?w+'px':'';p.style.height=h?h+'px':'';b.style.display='';if(!h){h=parseInt(b.offsetHeight)}if(!w){w=parseInt(b.offsetWidth)}b.style.display='none'}p.style.width=x;p.style.height=y;this.size(w,h,a)},esc:function(e){e=e||window.event;if(e.keyCode==27){TINY.box.hide()}},hide:function(){TINY.box.alpha(j,-1,0,3);document.onkeypress=null;if(v.closejs){v.closejs()}},resize:function(){TINY.box.pos();TINY.box.mask()},mask:function(){m.style.height=this.total(1)+'px';m.style.width=this.total(0)+'px'},pos:function(){var t;if(typeof v.top!='undefined'){t=v.top}else{t=(this.height()/v.topsplit)-(j.offsetHeight/2);t=t<20?20:t}if(!v.fixed&&!v.top){t+=this.top()}j.style.top=t+'px';j.style.left=typeof v.left!='undefined'?v.left+'px':(this.width()/2)-(j.offsetWidth/2)+'px'},alpha:function(e,d,a){clearInterval(e.ai);if(d){e.style.opacity=0;e.style.filter='alpha(opacity=0)';e.style.display='block';TINY.box.pos()}e.ai=setInterval(function(){TINY.box.ta(e,a,d)},20)},ta:function(e,a,d){var o=Math.round(e.style.opacity*100);if(o==a){clearInterval(e.ai);if(d==-1){e.style.display='none';e==j?TINY.box.alpha(m,-1,0,2):b.innerHTML=p.style.backgroundImage=''}else{if(e==m){this.alpha(j,1,100)}else{j.style.filter='';TINY.box.fill(v.html||v.url,v.url||v.iframe||v.image,v.post,v.animate,v.width,v.height)}}}else{var n=a-Math.floor(Math.abs(a-o)*.5)*d;e.style.opacity=n/100;e.style.filter='alpha(opacity='+n+')'}},size:function(w,h,a){if(a){clearInterval(p.si);var wd=parseInt(p.style.width)>w?-1:1,hd=parseInt(p.style.height)>h?-1:1;p.si=setInterval(function(){TINY.box.ts(w,wd,h,hd)},20)}else{p.style.backgroundImage='none';if(v.close){p.appendChild(g);g.v=1}p.style.width=w+'px';p.style.height=h+'px';b.style.display='';this.pos();if(v.openjs){v.openjs()}}},ts:function(w,wd,h,hd){var cw=parseInt(p.style.width),ch=parseInt(p.style.height);if(cw==w&&ch==h){clearInterval(p.si);p.style.backgroundImage='none';b.style.display='block';if(v.close){p.appendChild(g);g.v=1}if(v.openjs){v.openjs()}}else{if(cw!=w){p.style.width=(w-Math.floor(Math.abs(w-cw)*.6)*wd)+'px'}if(ch!=h){p.style.height=(h-Math.floor(Math.abs(h-ch)*.6)*hd)+'px'}this.pos()}},top:function(){return document.documentElement.scrollTop||document.body.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},total:function(d){var b=document.body,e=document.documentElement;return d?Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight)):Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))}}}();
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
                buildParams(prefix + '[' + (typeof v === 'object' || _.isArray(v) ? i : '') + ']', v, add);
            }
        });

    } else if (obj !== null && typeof obj === 'object') {
        // Serialize object item.
        for (var name in obj) {
            buildParams(prefix + '[' + name + ']', obj[name], add);
        }

    } else {
        // Serialize scalar item.
        add(prefix, obj);
    }
}

// Collection of additional library functions
_.mixin({
    // Delete the values specified by a passed in arguments list
    nullify: function(obj)  {
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
                s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
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
        return s.join('&').replace(r20, '+');
    },

    // A crude way of determining if an object is a window
    isWindow: function(obj) {
        return obj && typeof obj === 'object' && 'setInterval' in obj;
    },

    randomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //get the current height of the viewport
    getViewportHeight: function() {
        return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    },

    compiled: function(str) {
        // Underscore returns a function if we don't pass in a context (even if its just empty)
        _.templateSettings = {
            interpolate: /<%=([\s\S]+?)%>/g
        };

        var template = _.template(str);
        return template(window.APP_CONFIG || {});
    },

    getChildByClassName: function(parentID, cls) {
        var parentEl = document.getElementById(parentID),
            childNodes, i, l;

        if (parentEl) {
            childNodes = parentEl.childNodes;
        }

        // find the close button (I hate that I don't have jQuery!)
        for (i = 0, l = childNodes.length; i < l; i++) {
            var currEl = childNodes[i];
            if (currEl.className.indexOf(cls) > -1) {
                return currEl;
            }
        }
        return null;
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

        for (i = 0,path = path.split('.'), len = path.length; i < len; i++) {
            if(!object || typeof object !== 'object') return defaultVal;
            object = object[path[i]];
        }

        if(object === undefined) return defaultVal;
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
  var parts = ns.split('.'), parent = PTS;

  // strip redundant
  if (parts[0] === 'PTS') {
      parts = parts.slice(1);
  }

  for (var i = 0; i < parts.length; i++) {
      if (typeof parent[parts[i]] === 'undefined') {
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
PTS.JsonpFetcher = function (window, document, undefined) {
    'use strict';
    var counter = 0,
        head,
        query,
        key,
        self = {},
        load,
        get,
        callbackName;

    load = function (url, failureCallback) {
        var script = document.createElement('script'),
            done = false;

        script.src = url;
        script.async = true;
        script.onerror = function() {
            if (failureCallback) {
                failureCallback();
            }
        };
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                done = true;
                script.onload = script.onreadystatechange = null;
                if (script && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            }
        };
        if (!head) {
            head = document.getElementsByTagName('head')[0];
        }

        head.appendChild(script);

    };

    self.get = function (url, params, callback, failureCallback) {
        query = '?';
        params = params || {};

        for (key in params) {
            if (params.hasOwnProperty(key)) {
                query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&';
            }
        }

        callbackName = 'pts_json' + (++counter);
        window[callbackName] = function (data) {
            callback(data);

            try {
                delete window[callbackName];
            } catch (e) {}

            window[callbackName] = null;
        };

        load(url + query + 'callback=' + callbackName, failureCallback);
        return callbackName;
    };

    return self;
}(window, document);
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
        logFormat = '?error={{ message }}';
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
        logFormat = '?error={{ message }}';
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
 * @fileoverview Wrapper for Server-side Google Analytics.
 */
PTS.namespace('PTS.analytics');

/**
 * @class Server-side Event Tracker.
 *      This class provides an API for remote server side event tracking.
 *
 * @param {Integer} account The GA tracker account.
 * @param {String} baseUrl The base url of the remote tracker.
 * @constructor
 */
PTS.analytics.EventTracker = function(account, baseUrl) {
    if (!_.isString(account) || _.isEmpty(account)) {
        throw new Error('account as string is required');
    }

    if (!_.isString(baseUrl) || _.isEmpty(baseUrl)) {
        throw new Error('baseUrl as string is reuired');
    }

    this._account = account;
    this._baseUrl = baseUrl;
};

PTS.analytics.EventTracker.prototype.getImgUrl = function(eventName, partnerName) {
    var url, query, path,
    referer = window.document.referer,
    location = window.location;

    url = this._baseUrl + '?';
    url += 'utmac=' + this._account;
    url += '&utmn=' + _.randomInt(1000, 100000000);

    query = location.search;
    path = location.pathname.substring(1);

    if (_.isEmpty(referer)) {
        referer = '-';
    }

    url += '&utmr=' + encodeURIComponent(referer);

    if (!_.isEmpty(path)) {
        url += '&utmp=' + encodeURIComponent(path);
    }

    if (!_.isEmpty(eventName)) {
        url += encodeURIComponent('/' + eventName);
    }

    if (!_.isEmpty(partnerName)) {
        var utme = '8(Language*4!Currency*Partner)9(en*4!USD*'+ partnerName +')11(2*4!2*2)';
        url += '&utme=' + encodeURIComponent(utme);
    }

    url += '&guid=ON';

    return url;
};
/**
 * @fileoverview Error package containing error handling functions.
 */
PTS.namespace('PTS.errors');

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
                        alert('Our system is temporarily unavailable. Please refresh the page and try again, or contact customer service.');
                    }
                }
            }
        }
    };
    return constr;
}());

/**
 * Validation Error subclassing the native JavaScript error class.
 * @param {Object} message Can be a string or object or array.
 * @param {String} visible Whether the message should be made visible (via an alert).
 */
PTS.errors.ValidationError = (function(message, visible) {
    var constr = function(message, visible) {
        this.message = message || '';
        this.visible = !!visible;
        this.name = 'ValidationError';
    };

    constr.prototype = {
        constr: PTS.errors.ValidationError
    };
    return constr;
}());
PTS.errors.ValidationError.prototype = new Error();
(function(window, document, _) {
  'use strict';
  TINY.box = TINY.box || {};

  var KEYCODE_TAB = 9;

  function getAllTabbableElements(context) {
    var tabbableElements = 'a[href], area[href], input:not([disabled]),' +
      'select:not([disabled]), textarea:not([disabled]),' +
      'button:not([disabled]), iframe, object, embed, *[tabindex],' +
      '*[contenteditable]';
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
    event.preventDefault = event.preventDefault || function () {
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
    return document.querySelector('.tbox');
  }

  function isElementVisible(elem) {
    if (elem === document) {
      return true;
    }

    return !elem.hidden && elem.style.display !== 'none' && isElementVisible(elem.parentNode);
  }

  function focusListener(event) {
    if (TINY.box.isOpen) {
      var elem = document.querySelector('.tclose');
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
        allTabbableElementsNotInTinyBox = _.filter(allTabbableElements, function(element) {
      return !_.contains(allTabbableElementsInTinyBox, element);
    }).reverse();

    var previousElement = _.find(allTabbableElementsNotInTinyBox, isElementVisible);

    if (previousElement) {
      previousElement.addEventListener('focus', focusListener, false);
    }
  }

  TINY.box.keepFocus = function() {
    var tinyBoxRootElement = getTinyBoxRootElement();
    tinyBoxRootElement.addEventListener('keydown', keyListener, false);
    preventTabbingOutOfTinyBoxWhenOpen(tinyBoxRootElement);
  };
})(window, document, _);
PTS.namespace('PTS.isEligibleForOffer');
// Pre-offer eligibility
PTS.isEligibleForOffer = function(config) {
  var cabinThresholds = {
    'Economy': 0.8,
    'Business': 0.75,
    'First Class': 0.7
  };
  var cabin =  _.get(config, 'flightBookingDetails.cabin');
  if (!_.contains(_.keys(cabinThresholds), cabin)) {
      return true;
  }
  var percentNeededToRedeem = ((config.redemptionQuantity - config.transactionQuantity) / config.redemptionQuantity);
  return percentNeededToRedeem  >= cabinThresholds[cabin];
};

// if config contains mvDelegate and offerCallback AND the request fulfils required eligibility
// (see https://jira.points.com/browse/DBGTLCP-7923 for eligibility criteria)
//  then send offer data through the offerCallback function
PTS.namespace('PTS.performOptionalOfferCallback');
PTS.performOptionalOfferCallback = function(config) {
    var EMPTY_OFFER = {offer: null};
    if (!_.isString(config.mvDelegate) || !_.isFunction(config.offerCallback) || !PTS.isEligibleForOffer(config)) {
        return config.offerCallback(EMPTY_OFFER);
    }

    var successCb = function(data) {
        var offer = data.offer;
        if (!_.get(offer, 'increments.length')) {
            return config.offerCallback(EMPTY_OFFER);
        }

        var highestIncrementPoints = _.max(_.map(offer.increments, function(increment) {
            return increment.bonus
                ? increment.basePoints + increment.bonus.calculatedAmount
                : increment.basePoints;
        }));
        if (config.transactionQuantity > highestIncrementPoints) {
            return config.offerCallback(EMPTY_OFFER);
        }

        config.offerCallback({'offer': offer});
    };

    var failCb = function() {
        config.offerCallback(EMPTY_OFFER);
    };

    var url =_.compiled('https://storefront-staging.lxc.points.com')  + '/' + config.partnerName + '/apis/offer';

    return PTS.JsonpFetcher.get(url, {
      mvDelegate: config.mvDelegate,
      transactionQuantity: config.transactionQuantity
    }, successCb, failCb);
};
/**
 * @fileoverview Main Inline Buy Library.
 */
PTS.namespace('PTS.inlineBuy');

/**
 * Define the Inline Buy Library as a single function.
 * @return {PTS.inlineBuy} The inlineBuy library.
 */
PTS.inlineBuy = function() {
    var document = window.document,
        transactionCompleted = false,
        // keep a handle on original tinybox hide function
        originalTinyHide = TINY.box.hide,

    // alias for convenience
    inline = {},

    config = {
        memberId: '',
        transactionQuantity: '',
        memberEmail: '',
        successUrl: location.href,
        partnerName: '',
        firstName: '',
        lastName: '',
        accountBalance: '',
        redemptionQuantity: '',
        languageCode: '',
        currencyCode: '',
        membershipLevel: '',
        product: 'buy',
        closeConfirm: 'Are you sure you want to close this dialog?',
        cssVersion: "1.0"
    },

    // We do not allow these options to be overridden in production
    disableDebugOptions = [
        'ssoGatewayUrl',
        'iframeUrl',
        'loggingBaseUrl',
        'txnStatusUrls',
        'cssUrl'
    ],

    // Only allow debug mode conditionally
    disableDebugMode = !!_.compiled(''),

    // defines the config elements that are mandatory for a transaction
    pointsRequiredConfigSso = [
        'memberId',
        'partnerName',
        'product'
    ],
    pointsRequiredConfigMvDelegate = _.without(pointsRequiredConfigMvDelegate, 'memberId'),

    // partner required config elements that are not required for a transaction
    partnerRequiredConfigSso = [
        'transactionQuantity',
        'memberEmail',
        'successUrl',
        'firstName',
        'lastName',
        'accountBalance',
        'redemptionQuantity',
        'cssVersion'
    ],
    partnerRequiredConfigMvDelegate = _.without(partnerRequiredConfigSso,
      'memberEmail', 'firstName', 'lastName', 'accountBalance'),

    errorHandler = new PTS.errors.ErrorHandler(),
    consoleLogger = new PTS.logging.Logger('{{ message }}'),
    remoteLogger = new PTS.logging.RemoteLogger(
        _.compiled('https://staging.api.points.com/log') + '/bgt/{{ partnerName }}/buy/error/?f={{ filename }}&error={{ message }}&url={{ url }}'
    ),

    trackEvent = function(eventName) {
        var imgUrl, img, tracker,

        GA_ACCOUNT = _.compiled('MO-15827413-1'),
        PIXEL_URL = _.compiled('https://staging.api.points.com/ga/v1/pts.jsp');

        if (!_.isEmpty(GA_ACCOUNT) && !_.isEmpty(PIXEL_URL)) {
            tracker = new PTS.analytics.EventTracker(GA_ACCOUNT, PIXEL_URL);

            imgUrl = tracker.getImgUrl(eventName, config.partnerName);

            img = document.createElement('img');
            img.setAttribute('src', imgUrl);
            img.setAttribute('id', 'GA_' + eventName);
            img.style.display = 'none';
            document.getElementsByTagName('body')[0].appendChild(img);
        }
    },

    log = function(error) {
        var filename, context;

        if (!(error instanceof Error)) {
            var errorMessage = error || 'noErrorMessage';
            error = new Error(errorMessage);
        }

        filename = _.compiled('inline-buy.js');
        context = {
            partnerName: config.partnerName || 'noPartnerName',
            filename: filename,
            message: error.name.toString() + ': ' + error.message.toString(),
            url: window.location || 'noUrl'
        };

        remoteLogger.log(error, context);

        if (PTS.debugMode) {
            msg = (_.isArray(error) ? error.toString() : error);
            consoleLogger.log(error, {
                message: msg
            });
        }
    },

    openDialog = function(options) {
        // reinitialize local config each time openDialog is called. This is the working set.
        var localConfig = {},

        // location of iframe target
        iframeUrl,

        // Object with errors when missing required params
        pointsRequiredErrors, partnerRequiredErrors,

        // generated external transaction id
        externalTxId = {externalTxId: generateExtTxnId(options.partnerName || config.partnerName || 'noPartnerName')};

        // merge the local config object with global config and whatever is passed in options
        _.extend(localConfig, config, options, externalTxId);

        // remove debug options
        if (disableDebugMode || !PTS.debugMode) _.nullify(localConfig, disableDebugOptions);

        // validate points required config elements
        var pointsRequiredConfig = localConfig.mvDelegate ? pointsRequiredConfigMvDelegate : pointsRequiredConfigSso;
        pointsRequiredErrors = validateConfig(localConfig, pointsRequiredConfig);
        if (!_.isEmpty(pointsRequiredErrors)) {
            // do not show dialog if points req'd config elements are missing
            throw new PTS.errors.ValidationError(pointsRequiredErrors, 'visible');
        }

        var partnerRequiredConfig = localConfig.mvDelegate ? partnerRequiredConfigMvDelegate : partnerRequiredConfigSso;
        // validate partner required config elements
        partnerRequiredErrors = validateConfig(localConfig, partnerRequiredConfig);
        if (!_.isEmpty(partnerRequiredErrors)) {
            // log errors
            log(new PTS.errors.ValidationError(partnerRequiredErrors));
        }

        if (localConfig.mvDelegate) {
          // Template out the SSO gateway url
          if (localConfig.iframeUrl) {
            iframeUrl = localConfig.iframeUrl;
          } else {
            iframeUrl = _.compiled('https://storefront-staging.lxc.points.com') + '/'
              + localConfig.partnerName + '/sso/mv-delegate/' + localConfig.product;
          }
          iframeUrl += (iframeUrl.indexOf('?') === -1) ? '?' : '&';
          iframeUrl += _.param({
              token: localConfig.mvDelegate,
              transactionQuantity: localConfig.transactionQuantity,
	      externalTxId: localConfig.externalTxId	  
          });
        } else {
          // Template out the SSO gateway url
          iframeUrl = localConfig.ssoGatewayUrl || _.compiled('https://staging.ssogateway.points.com/SSOGateway/gateway.do');
          iframeUrl += (iframeUrl.indexOf('?') === -1) ? '?' : '&';
          iframeUrl += _.param({
              accountNumber: localConfig.memberId,
              transactionQuantity: localConfig.transactionQuantity,
              email: localConfig.memberEmail,
              successURL: localConfig.successUrl,
              ssoSource: localConfig.partnerName,
              firstName: localConfig.firstName,
              lastName: localConfig.lastName,
              balance: localConfig.accountBalance,
              languageCode: localConfig.languageCode,
              currencyCode: localConfig.currencyCode,
              membershipLevel: localConfig.membershipLevel,
              redemptionQuantity: localConfig.redemptionQuantity,
              ssoProduct: localConfig.product,
              externalTxId: localConfig.externalTxId
          });
        }

        // disable close dialog via esc key
        TINY.box.esc = function() {
            return;
        };

        // Hijack the hide function
        TINY.box.hide = function(event) {
            var currTxStatus = '',
                closeButton,
                newHide = function() {
                    if (currTxStatus === 'COMPLETED') {
                        //GA should go here, but the page redirect is gonna kill any attempts to do this.
                        if (localConfig.successUrl !== '') {
                            top.location = localConfig.successUrl;
                        } else {
                            top.location.reload();
                        }
                    }
                    else {
                        //jsonp call returned, transaction is not yet completed
                        trackEvent('close/txn-not-completed');
                        return originalTinyHide();
                    }
                },

                // send jsonp call to check for transaction status
                statusUrls = {
                    'ebgt': _.compiled('https://staging.buy.points.com/PointsPartner/service/transaction/status'),
                    'bgt3': _.compiled('https://storefront-staging.lxc.points.com/order-status')
                },

                successCallback = function(data) {
                    var status = data.status;
                    if (status === 'COMPLETED') {
                        currTxStatus = status;
                    } else if (status === 'NOT_COMPLETED' && currTxStatus === '') {
                        currTxStatus = status;
                    } else {
                        // Leave it alone
                    }
                },

                failureCallback = function() {
                };

            _.extend(statusUrls, localConfig.txnStatusUrls);

            //do nothing if we haven't clicked on the close button (e.g. we just clicked on the mask)
            if (!isValidCloseEvent(event)) {
                return;
            }

            //track that the user has clicked on the close button
            trackEvent('closeclicked');

            PTS.JsonpFetcher.get(
                statusUrls.bgt3,
                {external_transaction_id: localConfig.externalTxId},
                successCallback
            );

            if (confirm(localConfig.closeConfirm)) {
                //scenario 1: currTxStatus is populated
                if (currTxStatus !== '') {
                    return newHide();
                } else { //scenario 2: currTxStatus isn't populated yet
                    //hide the close button bring up the spinner instead
                    closeButton = _.getChildByClassName('pts-box', 'tclose');

                    closeButton.className += ' pts-close-waiting';
                    window.setTimeout(function() {
                        if (currTxStatus !== '') {
                            return newHide();
                        } else {
                            //failure, log the error, and tell GA as well
                            log('transaction status jsonp call never returned');
                            trackEvent('close/failed-txn-status');
                            return originalTinyHide();
                        }
                    }, 2000);
                }
            }

            else {
                trackEvent('closecancelled');
                return false;
            }
        };

        TINY.box.show({
            iframe: iframeUrl,
            boxid: 'pts-box',
            maskid: 'pts-mask',
            width: localConfig.boxWidth || 750,
            height: Math.max(Math.floor(_.getViewportHeight()) - (localConfig.boxVerticalMargin || 80), 400),
            fixed: false,
            maskopacity: 40,
            openjs: function() {
                var tinyBox = document.getElementById('pts-box'),
                    tinyBoxLabel = document.createElement('span'),
                    tinyBoxDescription = document.createElement('span'),
                    ptsIframe = null;

                tinyBoxLabel.id = 'pts-box-label';
                tinyBoxLabel.setAttribute('style', 'display:none');
                tinyBoxLabel.innerText = 'Buy Points Popup Dialog Box';

                tinyBoxDescription.id = 'pts-box-description';
                tinyBoxDescription.setAttribute('style', 'display:none');
                tinyBoxDescription.innerText = "In this modal window you can top up your account to complete the booking with points.";

                tinyBox.setAttribute('role', 'dialog');
                tinyBox.setAttribute('aria-labelledby', 'pts-box-label');
                tinyBox.setAttribute('aria-describedby', 'pts-box-description');

                tinyBox.appendChild(tinyBoxLabel);
                tinyBox.appendChild(tinyBoxDescription);

                tinyBox.getElementsByTagName('iframe')[0].setAttribute('id', 'pts-iframe');
                //need to fix tinybox's mistakes, i.e. have "close lightbox" text just in case css/images fail to load
                var closeButton = _.getChildByClassName('pts-box', 'tclose');

                //inject html + css
                if (closeButton) {
                    closeButton.innerHTML = '<span aria-hidden="true" class="pts-close-x">×</span> <span class="pts-close-text">Close</span>';
                    closeButton.style.position = 'absolute';
                    closeButton.style.top = '0';
                    closeButton.style.cursor = 'pointer';
                    closeButton.style.fontFamily = 'helvetica,sans-serif';
                    closeButton.style.fontSize = '20px';
                    closeButton.setAttribute('tabindex', 0);
                    closeButton.setAttribute('role', 'button');
                    closeButton.focus();

                    PTS._closeButtonKeyDownHandler = PTS._closeButtonKeyDownHandler || function(event) {
                      var keyCode = event.which || event.keyCode,
                      KEYCODE_ENTER = 13;

                      if (keyCode === KEYCODE_ENTER) {
                        TINY.box.hide(event);
                      }
                    },

                    closeButton.addEventListener('keydown', PTS._closeButtonKeyDownHandler, false);
                }

                ptsIframe = document.getElementById('pts-iframe');
                ptsIframe.setAttribute('title', 'Buy Points');
                TINY.box.keepFocus();
                TINY.box.isOpen = true;
            },

            closejs: function() {
                var closeButton = _.getChildByClassName('pts-box', 'tclose');

                //cleanup
                closeButton.className = closeButton.className.replace(' pts-close-waiting','');
                TINY.box.isOpen = false;
            },
        });
    },

    validateConfig = function(local, required) {
        var errors = [];
        _.each(required, function(element) {
            var val = local[element];
            if (_.isUndefined(val) || _.isNull(val) || (_.isString(val) && val.length === 0)) {
                errors.push(element + ' is required');
            }
        });
        return errors;
    },

    generateExtTxnId = function(partnerName) {
        // setup the ingredients for the random number
        var components = [
            partnerName,
            (+new Date()), //current timestamp
            _.randomInt(10000, 100000) // random padding
        ];

        //join all the ingredients together as a string
        return components.join('');
    },

    isValidCloseEvent = function(event) {
        // get window.event if argument is falsy (in IE)
        event = event || window.event;

        // get srcElement if target is falsy (IE)
        var targetElement = event.target || event.srcElement;

        // check if clicking on mask
        if (targetElement.id == 'pts-mask') {
            return false;
        }

        return true;
    };

    // Extend the defaults with partner-supplied configuration
    try {
        if (!_.isUndefined(window.pointsAsyncInit)) {
            var generated_stylez, params,
                styleLink = document.createElement('link'),
                stylez = document.createElement('style'),
                cssHref = _.compiled('https://staging.static.points.com/buy'),
                cssFile = _.compiled('inline.css'),
                cssPath = _.compiled('style'),
                body = document.getElementsByTagName('body')[0],
                head = document.getElementsByTagName('head')[0];

            _.extend(config, window.pointsAsyncInit() || {});
            if (disableDebugMode || !PTS.debugMode) _.nullify(config, disableDebugOptions);

            //inject default stylez
            stylez.setAttribute('type', 'text/css');
            generated_stylez = document.createTextNode('.tbox{position:absolute;display:none;padding:14px 17px;z-index:900}#pts-box{padding:15px;-moz-border-radius:5px;border-radius:5px;background:#fff url(https://staging.static.points.com/buy/default/buy/images/preload.gif) no-repeat 50% 50%;border-right:1px solid #333;border-bottom:1px solid #333}#pts-mask{position:absolute;display:none;top:0;left:0;height:100%;width:100%;background:#000;z-index:800}#pts-box .pts-close-x{position:relative;top:2px;}#pts-box .tclose{position:absolute;top:10px !important;right:10px !important;width:80px;height:30px;cursor:pointer;font-family:helvetica,sans-serif;font-size:20px}#pts-box .pts-close-waiting{background:url(https://staging.static.points.com/buy/default/buy/images/closespinner.gif) no-repeat 100% 0; text-indent:-5000px; top:15px !important; right: 19px !important;}#pts-box .pts-close-text{font-size:12px;}');

            // check for ie
            if (stylez.styleSheet) {
                stylez.styleSheet.cssText = generated_stylez.nodeValue;
            }
            // other browsers
            else {
                stylez.appendChild(generated_stylez);
            }

            if (PTS.debugMode) cssHref = config.cssUrl || cssHref;

            params = [cssHref, config.partnerName, config.cssVersion, cssPath, cssFile];

            //inject partner-specific css stylesheet
            styleLink.id = 'pts-inline-style';
            styleLink.setAttribute('type', 'text/css');
            styleLink.setAttribute('rel', 'stylesheet');
            styleLink.setAttribute('href', params.join('/'));

            head.appendChild(stylez);
            head.appendChild(styleLink);
            trackEvent('loaded');
            PTS.performOptionalOfferCallback(config);
        } else {
            var error = new Error('Missing window.pointsAsyncInit() function.');
            errorHandler.handleError(error);
            log(error);
        }
    } catch (e) {
        e.message = 'Error when executing window.pointsAsyncInit() function: ' + e.message;
        errorHandler.handleError(e);
        log(e);
    }


    // ############################################################
    // Public API
    // ############################################################
    inline.openDialog = function(options) {
        try {
            options = options || {};
            openDialog(options);
            trackEvent('open');
        } catch (e) {
            // callback specified in global config (via pointsAsyncInit) or in options to openDialog

            // Handle error with (possible) callback and log
            errorHandler.handleError(e, options.errorCallback || config.errorCallback);
            log(e);
            trackEvent('/open/error');
        }
    };
    return inline;
}();
})(window);

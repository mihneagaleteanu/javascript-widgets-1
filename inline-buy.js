var script = document.createElement('script');
script.src = "https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js";

document.head.appendChild(script); 

// inline-buy.js for staging
//
// Points Inline Buy Library (c) Copyright Points International Ltd. 2012. All Rights Reserved
// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
// TinyBox2
// (c) Commons Creative License
(function(n, D) {
    (function() {
        function f(a, g, q) {
            if (a === g) return 0 !== a || 1 / a == 1 / g;
            if (null == a || null == g) return a === g;
            a._chain && (a = a._wrapped);
            g._chain && (g = g._wrapped);
            if (a.isEqual && c.isFunction(a.isEqual)) return a.isEqual(g);
            if (g.isEqual && c.isFunction(g.isEqual)) return g.isEqual(a);
            var p = r.call(a);
            if (p != r.call(g)) return !1;
            switch (p) {
                case "[object String]":
                    return a == String(g);
                case "[object Number]":
                    return a != +a ? g != +g : 0 == a ? 1 / a == 1 / g : a == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +g;
                case "[object RegExp]":
                    return a.source ==
                        g.source && a.global == g.global && a.multiline == g.multiline && a.ignoreCase == g.ignoreCase
            }
            if ("object" != typeof a || "object" != typeof g) return !1;
            for (var b = q.length; b--;)
                if (q[b] == a) return !0;
            q.push(a);
            var b = 0,
                d = !0;
            if ("[object Array]" == p) {
                if (b = a.length, d = b == g.length)
                    for (; b-- && (d = b in a == b in g && f(a[b], g[b], q)););
            } else {
                if ("constructor" in a != "constructor" in g || a.constructor != g.constructor) return !1;
                for (var e in a)
                    if (c.has(a, e) && (b++, !(d = c.has(g, e) && f(a[e], g[e], q)))) break;
                if (d) {
                    for (e in g)
                        if (c.has(g, e) && !b--) break;
                    d = !b
                }
            }
            q.pop();
            return d
        }
        var e = this,
            h = e._,
            l = {},
            d = Array.prototype,
            k = Object.prototype,
            b = d.slice,
            E = d.unshift,
            r = k.toString,
            B = k.hasOwnProperty,
            t = d.forEach,
            A = d.map,
            v = d.reduce,
            x = d.reduceRight,
            n = d.filter,
            F = d.every,
            y = d.some,
            z = d.indexOf,
            u = d.lastIndexOf,
            k = Array.isArray,
            m = Object.keys,
            G = Function.prototype.bind,
            c = function(a) {
                return new C(a)
            };
        "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = c), exports._ = c) : e._ = c;
        c.VERSION = "1.3.1";
        var w = c.each = c.forEach = function(a,
            g, q) {
            if (null != a)
                if (t && a.forEach === t) a.forEach(g, q);
                else if (a.length === +a.length)
                for (var p = 0, b = a.length; p < b && !(p in a && g.call(q, a[p], p, a) === l); p++);
            else
                for (p in a)
                    if (c.has(a, p) && g.call(q, a[p], p, a) === l) break
        };
        c.map = c.collect = function(a, g, c) {
            var p = [];
            if (null == a) return p;
            if (A && a.map === A) return a.map(g, c);
            w(a, function(a, b, d) {
                p[p.length] = g.call(c, a, b, d)
            });
            a.length === +a.length && (p.length = a.length);
            return p
        };
        c.reduce = c.foldl = c.inject = function(a, g, q, p) {
            var b = 2 < arguments.length;
            null == a && (a = []);
            if (v && a.reduce ===
                v) return p && (g = c.bind(g, p)), b ? a.reduce(g, q) : a.reduce(g);
            w(a, function(a, c, d) {
                b ? q = g.call(p, q, a, c, d) : (q = a, b = !0)
            });
            if (!b) throw new TypeError("Reduce of empty array with no initial value");
            return q
        };
        c.reduceRight = c.foldr = function(a, g, q, p) {
            var b = 2 < arguments.length;
            null == a && (a = []);
            if (x && a.reduceRight === x) return p && (g = c.bind(g, p)), b ? a.reduceRight(g, q) : a.reduceRight(g);
            var d = c.toArray(a).reverse();
            p && !b && (g = c.bind(g, p));
            return b ? c.reduce(d, g, q, p) : c.reduce(d, g)
        };
        c.find = c.detect = function(a, g, c) {
            var p;
            K(a, function(a,
                b, d) {
                if (g.call(c, a, b, d)) return p = a, !0
            });
            return p
        };
        c.filter = c.select = function(a, g, c) {
            var b = [];
            if (null == a) return b;
            if (n && a.filter === n) return a.filter(g, c);
            w(a, function(a, d, e) {
                g.call(c, a, d, e) && (b[b.length] = a)
            });
            return b
        };
        c.reject = function(a, g, c) {
            var b = [];
            if (null == a) return b;
            w(a, function(a, d, e) {
                g.call(c, a, d, e) || (b[b.length] = a)
            });
            return b
        };
        c.every = c.all = function(a, g, c) {
            var b = !0;
            if (null == a) return b;
            if (F && a.every === F) return a.every(g, c);
            w(a, function(a, d, e) {
                if (!(b = b && g.call(c, a, d, e))) return l
            });
            return b
        };
        var K = c.some = c.any = function(a, g, q) {
            g || (g = c.identity);
            var b = !1;
            if (null == a) return b;
            if (y && a.some === y) return a.some(g, q);
            w(a, function(a, c, d) {
                if (b || (b = g.call(q, a, c, d))) return l
            });
            return !!b
        };
        c.include = c.contains = function(a, c) {
            return null == a ? !1 : z && a.indexOf === z ? -1 != a.indexOf(c) : K(a, function(a) {
                return a === c
            })
        };
        c.invoke = function(a, g) {
            var q = b.call(arguments, 2);
            return c.map(a, function(a) {
                return (c.isFunction(g) ? g || a : a[g]).apply(a, q)
            })
        };
        c.pluck = function(a, g) {
            return c.map(a, function(a) {
                return a[g]
            })
        };
        c.max = function(a,
            g, q) {
            if (!g && c.isArray(a)) return Math.max.apply(Math, a);
            if (!g && c.isEmpty(a)) return -Infinity;
            var b = {
                computed: -Infinity
            };
            w(a, function(a, c, d) {
                c = g ? g.call(q, a, c, d) : a;
                c >= b.computed && (b = {
                    value: a,
                    computed: c
                })
            });
            return b.value
        };
        c.min = function(a, g, b) {
            if (!g && c.isArray(a)) return Math.min.apply(Math, a);
            if (!g && c.isEmpty(a)) return Infinity;
            var d = {
                computed: Infinity
            };
            w(a, function(a, c, e) {
                c = g ? g.call(b, a, c, e) : a;
                c < d.computed && (d = {
                    value: a,
                    computed: c
                })
            });
            return d.value
        };
        c.shuffle = function(a) {
            var c = [],
                b;
            w(a, function(a, d) {
                0 ==
                    d ? c[0] = a : (b = Math.floor(Math.random() * (d + 1)), c[d] = c[b], c[b] = a)
            });
            return c
        };
        c.sortBy = function(a, g, b) {
            return c.pluck(c.map(a, function(a, c, d) {
                return {
                    value: a,
                    criteria: g.call(b, a, c, d)
                }
            }).sort(function(a, c) {
                var g = a.criteria,
                    b = c.criteria;
                return g < b ? -1 : g > b ? 1 : 0
            }), "value")
        };
        c.groupBy = function(a, g) {
            var b = {},
                d = c.isFunction(g) ? g : function(a) {
                    return a[g]
                };
            w(a, function(a, c) {
                var g = d(a, c);
                (b[g] || (b[g] = [])).push(a)
            });
            return b
        };
        c.sortedIndex = function(a, g, b) {
            b || (b = c.identity);
            for (var d = 0, e = a.length; d < e;) {
                var f = d + e >> 1;
                b(a[f]) < b(g) ? d = f + 1 : e = f
            }
            return d
        };
        c.toArray = function(a) {
            return !a ? [] : a.toArray ? a.toArray() : c.isArray(a) ? b.call(a) : c.isArguments(a) ? b.call(a) : c.values(a)
        };
        c.size = function(a) {
            return c.toArray(a).length
        };
        c.first = c.head = function(a, c, d) {
            return null != c && !d ? b.call(a, 0, c) : a[0]
        };
        c.initial = function(a, c, d) {
            return b.call(a, 0, a.length - (null == c || d ? 1 : c))
        };
        c.last = function(a, c, d) {
            return null != c && !d ? b.call(a, Math.max(a.length - c, 0)) : a[a.length - 1]
        };
        c.rest = c.tail = function(a, c, d) {
            return b.call(a, null == c || d ? 1 : c)
        };
        c.compact =
            function(a) {
                return c.filter(a, function(a) {
                    return !!a
                })
            };
        c.flatten = function(a, g) {
            return c.reduce(a, function(a, b) {
                if (c.isArray(b)) return a.concat(g ? b : c.flatten(b));
                a[a.length] = b;
                return a
            }, [])
        };
        c.without = function(a) {
            return c.difference(a, b.call(arguments, 1))
        };
        c.uniq = c.unique = function(a, g, b) {
            b = b ? c.map(a, b) : a;
            var d = [];
            c.reduce(b, function(b, q, e) {
                if (0 == e || (!0 === g ? c.last(b) != q : !c.include(b, q))) b[b.length] = q, d[d.length] = a[e];
                return b
            }, []);
            return d
        };
        c.union = function() {
            return c.uniq(c.flatten(arguments, !0))
        };
        c.intersection = c.intersect = function(a) {
            var g = b.call(arguments, 1);
            return c.filter(c.uniq(a), function(a) {
                return c.every(g, function(g) {
                    return 0 <= c.indexOf(g, a)
                })
            })
        };
        c.difference = function(a) {
            var g = c.flatten(b.call(arguments, 1));
            return c.filter(a, function(a) {
                return !c.include(g, a)
            })
        };
        c.zip = function() {
            for (var a = b.call(arguments), g = c.max(c.pluck(a, "length")), d = Array(g), e = 0; e < g; e++) d[e] = c.pluck(a, "" + e);
            return d
        };
        c.indexOf = function(a, g, b) {
            if (null == a) return -1;
            var d;
            if (b) return b = c.sortedIndex(a, g), a[b] === g ?
                b : -1;
            if (z && a.indexOf === z) return a.indexOf(g);
            b = 0;
            for (d = a.length; b < d; b++)
                if (b in a && a[b] === g) return b;
            return -1
        };
        c.lastIndexOf = function(a, c) {
            if (null == a) return -1;
            if (u && a.lastIndexOf === u) return a.lastIndexOf(c);
            for (var b = a.length; b--;)
                if (b in a && a[b] === c) return b;
            return -1
        };
        c.range = function(a, c, b) {
            1 >= arguments.length && (c = a || 0, a = 0);
            b = arguments[2] || 1;
            for (var d = Math.max(Math.ceil((c - a) / b), 0), e = 0, f = Array(d); e < d;) f[e++] = a, a += b;
            return f
        };
        var L = function() {};
        c.bind = function(a, g) {
            var d, e;
            if (a.bind === G && G) return G.apply(a,
                b.call(arguments, 1));
            if (!c.isFunction(a)) throw new TypeError;
            e = b.call(arguments, 2);
            return d = function() {
                if (!(this instanceof d)) return a.apply(g, e.concat(b.call(arguments)));
                L.prototype = a.prototype;
                var c = new L,
                    f = a.apply(c, e.concat(b.call(arguments)));
                return Object(f) === f ? f : c
            }
        };
        c.bindAll = function(a) {
            var g = b.call(arguments, 1);
            0 == g.length && (g = c.functions(a));
            w(g, function(b) {
                a[b] = c.bind(a[b], a)
            });
            return a
        };
        c.memoize = function(a, b) {
            var d = {};
            b || (b = c.identity);
            return function() {
                var e = b.apply(this, arguments);
                return c.has(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            }
        };
        c.delay = function(a, c) {
            var d = b.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(a, d)
            }, c)
        };
        c.defer = function(a) {
            return c.delay.apply(c, [a, 1].concat(b.call(arguments, 1)))
        };
        c.throttle = function(a, b) {
            var d, e, f, h, k, t = c.debounce(function() {
                k = h = !1
            }, b);
            return function() {
                d = this;
                e = arguments;
                f || (f = setTimeout(function() {
                    f = null;
                    k && a.apply(d, e);
                    t()
                }, b));
                h ? k = !0 : a.apply(d, e);
                t();
                h = !0
            }
        };
        c.debounce = function(a, c) {
            var b;
            return function() {
                var d = this,
                    e = arguments;
                clearTimeout(b);
                b = setTimeout(function() {
                    b = null;
                    a.apply(d, e)
                }, c)
            }
        };
        c.once = function(a) {
            var c = !1,
                b;
            return function() {
                if (c) return b;
                c = !0;
                return b = a.apply(this, arguments)
            }
        };
        c.wrap = function(a, c) {
            return function() {
                var d = [a].concat(b.call(arguments, 0));
                return c.apply(this, d)
            }
        };
        c.compose = function() {
            var a = arguments;
            return function() {
                for (var c = arguments, b = a.length - 1; 0 <= b; b--) c = [a[b].apply(this, c)];
                return c[0]
            }
        };
        c.after = function(a, c) {
            return 0 >= a ? c() : function() {
                if (1 > --a) return c.apply(this, arguments)
            }
        };
        c.keys =
            m || function(a) {
                if (a !== Object(a)) throw new TypeError("Invalid object");
                var b = [],
                    d;
                for (d in a) c.has(a, d) && (b[b.length] = d);
                return b
            };
        c.values = function(a) {
            return c.map(a, c.identity)
        };
        c.functions = c.methods = function(a) {
            var b = [],
                d;
            for (d in a) c.isFunction(a[d]) && b.push(d);
            return b.sort()
        };
        c.extend = function(a) {
            w(b.call(arguments, 1), function(c) {
                for (var b in c) a[b] = c[b]
            });
            return a
        };
        c.defaults = function(a) {
            w(b.call(arguments, 1), function(c) {
                for (var b in c) null == a[b] && (a[b] = c[b])
            });
            return a
        };
        c.clone = function(a) {
            return !c.isObject(a) ?
                a : c.isArray(a) ? a.slice() : c.extend({}, a)
        };
        c.tap = function(a, c) {
            c(a);
            return a
        };
        c.isEqual = function(a, c) {
            return f(a, c, [])
        };
        c.isEmpty = function(a) {
            if (c.isArray(a) || c.isString(a)) return 0 === a.length;
            for (var b in a)
                if (c.has(a, b)) return !1;
            return !0
        };
        c.isElement = function(a) {
            return !!(a && 1 == a.nodeType)
        };
        c.isArray = k || function(a) {
            return "[object Array]" == r.call(a)
        };
        c.isObject = function(a) {
            return a === Object(a)
        };
        c.isArguments = function(a) {
            return "[object Arguments]" == r.call(a)
        };
        c.isArguments(arguments) || (c.isArguments =
            function(a) {
                return !(!a || !c.has(a, "callee"))
            });
        c.isFunction = function(a) {
            return "[object Function]" == r.call(a)
        };
        c.isString = function(a) {
            return "[object String]" == r.call(a)
        };
        c.isNumber = function(a) {
            return "[object Number]" == r.call(a)
        };
        c.isNaN = function(a) {
            return a !== a
        };
        c.isBoolean = function(a) {
            return !0 === a || !1 === a || "[object Boolean]" == r.call(a)
        };
        c.isDate = function(a) {
            return "[object Date]" == r.call(a)
        };
        c.isRegExp = function(a) {
            return "[object RegExp]" == r.call(a)
        };
        c.isNull = function(a) {
            return null === a
        };
        c.isUndefined =
            function(a) {
                return void 0 === a
            };
        c.has = function(a, c) {
            return B.call(a, c)
        };
        c.noConflict = function() {
            e._ = h;
            return this
        };
        c.identity = function(a) {
            return a
        };
        c.times = function(a, c, b) {
            for (var d = 0; d < a; d++) c.call(b, d)
        };
        c.escape = function(a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
        };
        c.mixin = function(a) {
            w(c.functions(a), function(b) {
                M(b, c[b] = a[b])
            })
        };
        var D = 0;
        c.uniqueId = function(a) {
            var c = D++;
            return a ? a + c : c
        };
        c.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var H = /.^/,
            I = function(a) {
                return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
            };
        c.template = function(a, b) {
            var d = c.templateSettings,
                d = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.escape || H, function(a, c) {
                    return "',_.escape(" + I(c) + "),'"
                }).replace(d.interpolate || H, function(a, c) {
                    return "'," + I(c) + ",'"
                }).replace(d.evaluate || H, function(a,
                    c) {
                    return "');" + I(c).replace(/[\r\n\t]/g, " ") + ";__p.push('"
                }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
                e = new Function("obj", "_", d);
            return b ? e(b, c) : function(a) {
                return e.call(this, a, c)
            }
        };
        c.chain = function(a) {
            return c(a).chain()
        };
        var C = function(a) {
            this._wrapped = a
        };
        c.prototype = C.prototype;
        var J = function(a, b) {
                return b ? c(a).chain() : a
            },
            M = function(a, d) {
                C.prototype[a] = function() {
                    var a = b.call(arguments);
                    E.call(a, this._wrapped);
                    return J(d.apply(c, a), this._chain)
                }
            };
        c.mixin(c);
        w("pop push reverse shift sort splice unshift".split(" "), function(a) {
            var c = d[a];
            C.prototype[a] = function() {
                var b = this._wrapped;
                c.apply(b, arguments);
                var d = b.length;
                ("shift" == a || "splice" == a) && 0 === d && delete b[0];
                return J(b, this._chain)
            }
        });
        w(["concat", "join", "slice"], function(a) {
            var c = d[a];
            C.prototype[a] = function() {
                return J(c.apply(this._wrapped, arguments), this._chain)
            }
        });
        C.prototype.chain = function() {
            this._chain = !0;
            return this
        };
        C.prototype.value = function() {
            return this._wrapped
        }
    }).call(this);
    TINY = {};
    TINY.box = function() {
        var f, e, h, l, d, k = 0;
        return {
            show: function(b) {
                d = {
                    opacity: 70,
                    close: 1,
                    animate: 1,
                    fixed: 1,
                    mask: 1,
                    maskid: "",
                    boxid: "",
                    topsplit: 2,
                    url: 0,
                    post: 0,
                    height: 0,
                    width: 0,
                    html: 0,
                    iframe: 0
                };
                for (s in b) d[s] = b[s];
                k ? (f.style.display = "none", clearTimeout(k.ah), l.v && (k.removeChild(l), l.v = 0)) : (f = document.createElement("div"), f.className = "tbox", k = document.createElement("div"), k.className = "tinner", h = document.createElement("div"), h.className = "tcontent", e = document.createElement("div"), e.className = "tmask",
                    l = document.createElement("div"), l.className = "tclose", l.v = 0, document.body.appendChild(e), document.body.appendChild(f), f.appendChild(k), k.appendChild(h), e.onclick = l.onclick = TINY.box.hide, n.onresize = TINY.box.resize);
                k.id = d.boxid;
                e.id = d.maskid;
                f.style.position = d.fixed ? "fixed" : "absolute";
                d.html && !d.animate ? (k.style.backgroundImage = "none", h.innerHTML = d.html, h.style.display = "", k.style.width = d.width ? d.width + "px" : "auto", k.style.height = d.height ? d.height + "px" : "auto") : (h.style.display = "none", !d.animate && d.width &&
                    d.height ? (k.style.width = d.width + "px", k.style.height = d.height + "px") : k.style.width = k.style.height = "100px");
                d.mask ? (this.mask(), this.alpha(e, 1, d.opacity)) : this.alpha(f, 1, 100);
                d.autohide ? k.ah = setTimeout(TINY.box.hide, 1E3 * d.autohide) : document.onkeyup = TINY.box.esc
            },
            fill: function(b, e, f, h, t, l) {
                if (e)
                    if (d.image) {
                        var v = new Image;
                        v.onload = function() {
                            t = t || v.width;
                            l = l || v.height;
                            TINY.box.psh(v, h, t, l)
                        };
                        v.src = d.image
                    } else if (d.iframe) this.psh('<iframe src="' + d.iframe + '" width="' + d.width + '" frameborder="0" height="' +
                    d.height + '"></iframe>', h, t, l);
                else {
                    var x = n.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    x.onreadystatechange = function() {
                        4 == x.readyState && 200 == x.status && (k.style.backgroundImage = "", TINY.box.psh(x.responseText, h, t, l))
                    };
                    f ? (x.open("POST", b, !0), x.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), x.send(f)) : (x.open("GET", b, !0), x.send(null))
                } else this.psh(b, h, t, l)
            },
            psh: function(b, d, e, f) {
                "object" == typeof b ? h.appendChild(b) : h.innerHTML = b;
                b = k.style.width;
                var t =
                    k.style.height;
                if (!e || !f) k.style.width = e ? e + "px" : "", k.style.height = f ? f + "px" : "", h.style.display = "", f || (f = parseInt(h.offsetHeight)), e || (e = parseInt(h.offsetWidth)), h.style.display = "none";
                k.style.width = b;
                k.style.height = t;
                this.size(e, f, d)
            },
            esc: function(b) {
                b = b || n.event;
                27 == b.keyCode && TINY.box.hide()
            },
            hide: function() {
                TINY.box.alpha(f, -1, 0, 3);
                document.onkeypress = null;
                d.closejs && d.closejs()
            },
            resize: function() {
                TINY.box.pos();
                TINY.box.mask()
            },
            mask: function() {
                e.style.height = this.total(1) + "px";
                e.style.width = this.total(0) +
                    "px"
            },
            pos: function() {
                var b;
                "undefined" != typeof d.top ? b = d.top : (b = this.height() / d.topsplit - f.offsetHeight / 2, b = 20 > b ? 20 : b);
                !d.fixed && !d.top && (b += this.top());
                f.style.top = b + "px";
                f.style.left = "undefined" != typeof d.left ? d.left + "px" : this.width() / 2 - f.offsetWidth / 2 + "px"
            },
            alpha: function(b, d, e) {
                clearInterval(b.ai);
                d && (b.style.opacity = 0, b.style.filter = "alpha(opacity=0)", b.style.display = "block", TINY.box.pos());
                b.ai = setInterval(function() {
                    TINY.box.ta(b, e, d)
                }, 20)
            },
            ta: function(b, l, r) {
                var n = Math.round(100 * b.style.opacity);
                n == l ? (clearInterval(b.ai), -1 == r ? (b.style.display = "none", b == f ? TINY.box.alpha(e, -1, 0, 2) : h.innerHTML = k.style.backgroundImage = "") : b == e ? this.alpha(f, 1, 100) : (f.style.filter = "", TINY.box.fill(d.html || d.url, d.url || d.iframe || d.image, d.post, d.animate, d.width, d.height))) : (l -= Math.floor(0.5 * Math.abs(l - n)) * r, b.style.opacity = l / 100, b.style.filter = "alpha(opacity=" + l + ")")
            },
            size: function(b, e, f) {
                if (f) {
                    clearInterval(k.si);
                    var n = parseInt(k.style.width) > b ? -1 : 1,
                        t = parseInt(k.style.height) > e ? -1 : 1;
                    k.si = setInterval(function() {
                        TINY.box.ts(b,
                            n, e, t)
                    }, 20)
                } else k.style.backgroundImage = "none", d.close && (k.appendChild(l), l.v = 1), k.style.width = b + "px", k.style.height = e + "px", h.style.display = "", this.pos(), d.openjs && d.openjs()
            },
            ts: function(b, e, f, n) {
                var t = parseInt(k.style.width),
                    A = parseInt(k.style.height);
                t == b && A == f ? (clearInterval(k.si), k.style.backgroundImage = "none", h.style.display = "block", d.close && (k.appendChild(l), l.v = 1), d.openjs && d.openjs()) : (t != b && (k.style.width = b - Math.floor(0.6 * Math.abs(b - t)) * e + "px"), A != f && (k.style.height = f - Math.floor(0.6 * Math.abs(f -
                    A)) * n + "px"), this.pos())
            },
            top: function() {
                return document.documentElement.scrollTop || document.body.scrollTop
            },
            width: function() {
                return self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            },
            height: function() {
                return self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            },
            total: function(b) {
                var d = document.body,
                    e = document.documentElement;
                return b ? Math.max(Math.max(d.scrollHeight, e.scrollHeight), Math.max(d.clientHeight, e.clientHeight)) : Math.max(Math.max(d.scrollWidth,
                    e.scrollWidth), Math.max(d.clientWidth, e.clientWidth))
            }
        }
    }();
    (function() {
        function f(e, h, l) {
            var d = /\[\]$/;
            if (_.isArray(h)) _.each(h, function(b, h) {
                d.test(e) ? l(e, h) : f(e + "[" + ("object" === typeof h || _.isArray(h) ? b : "") + "]", h, l)
            });
            else if (null !== h && "object" === typeof h)
                for (var k in h) f(e + "[" + k + "]", h[k], l);
            else l(e, h)
        }
        _.mixin({
            nullify: function(e) {
                _.each(_.toArray(arguments).slice(1), function(f, l, d) {
                    for (var k in f) delete e[f[k]]
                });
                return e
            },
            param: function(e) {
                var h = [],
                    l = function(d, b) {
                        b = _.isFunction(b) ? b() : b;
                        h[h.length] =
                            encodeURIComponent(d) + "=" + encodeURIComponent(b)
                    };
                if (_.isArray(e)) _.each(e, function() {
                    l(this.name, this.value)
                });
                else
                    for (var d in e) f(d, e[d], l);
                return h.join("&").replace(/%20/g, "+")
            },
            isWindow: function(e) {
                return e && "object" === typeof e && "setInterval" in e
            },
            randomInt: function(e, f) {
                return Math.floor(Math.random() * (f - e + 1)) + e
            },
            getViewportHeight: function() {
                return n.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight
            },
            compiled: function(e) {
                _.templateSettings = {
                    interpolate: /<%=([\s\S]+?)%>/g
                };
                return _.template(e)(n.APP_CONFIG || {})
            },
            getChildByClassName: function(e, f) {
                var l = document.getElementById(e),
                    d, k;
                l && (d = l.childNodes);
                l = 0;
                for (k = d.length; l < k; l++) {
                    var b = d[l];
                    if (-1 < b.className.indexOf(f)) return b
                }
                return null
            },
            get: function(e, f, l) {
                var d, k;
                d = 0;
                f = f.split(".");
                for (k = f.length; d < k; d++) {
                    if (!e || "object" !== typeof e) return l;
                    e = e[f[d]]
                }
                return e === D ? l : e
            }
        })
    })();
    DIALOGID = ["pts-box",+new Date, _.randomInt(1E4, 1E5)].join("");
    PTS = n.PTS || {};
    PTS.namespace = function(f) {
        f = f.split(".");
        var e = PTS;
        "PTS" === f[0] && (f = f.slice(1));
        for (var h = 0; h <
            f.length; h++) "undefined" === typeof e[f[h]] && (e[f[h]] = {}), e = e[f[h]];
        return e
    };
    PTS.JsonpFetcher = function(f, e, h) {
        var l = 0,
            d, k, b;
        h = {};
        var n, r;
        n = function(b, f) {
            var h = e.createElement("script"),
                k = !1;
            h.src = b;
            h.async = !0;
            h.onerror = function() {
                f && f()
            };
            h.onload = h.onreadystatechange = function() {
                if (!k && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) k = !0, h.onload = h.onreadystatechange = null, h && h.parentNode && h.parentNode.removeChild(h)
            };
            d || (d = e.getElementsByTagName("head")[0]);
            d.appendChild(h)
        };
        h.get = function(d, e, h, v) {
            k = "?";
            e = e || {};
            for (b in e) e.hasOwnProperty(b) && (k += encodeURIComponent(b) + "=" + encodeURIComponent(e[b]) + "&");
            r = "pts_json" + ++l;
            f[r] = function(b) {
                h(b);
                try {
                    delete f[r]
                } catch (d) {}
                f[r] = null
            };
            n(d + k + "callback=" + r, v);
            return r
        };
        return h
    }(n, document);
    PTS.namespace("PTS.logging");
    PTS.logging.Logger = function(f) {
        _.isNull(f) && (f = "?error={{ message }}");
        this._logFormat = f
    };
    PTS.logging.Logger.prototype.replaceTokens = function(f, e) {
        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };
        return _.template(f)(e)
    };
    PTS.logging.Logger.prototype.log = function(f, e) {
        var h = this.replaceTokens(this._logFormat, e);
        n.console && (console.log(h), PTS.debugMode && !_.isUndefined(f) && console.log(f.stack))
    };
    PTS.logging.RemoteLogger = function(f) {
        _.isNull(f) && (f = "?error={{ message }}");
        this._logFormat = f
    };
    PTS.logging.RemoteLogger.prototype = new PTS.logging.Logger;
    PTS.logging.RemoteLogger.prototype.log = function(f, e) {
        var h;
        h = this.replaceTokens(this._logFormat, e);
        PTS.JsonpFetcher.get(h)
    };
    PTS.namespace("PTS.errors");
    PTS.errors.ErrorHandler =
        function() {
            var f = function() {};
            f.prototype = {
                constructor: PTS.errors.ErrorHandler,
                handleError: function(e, f) {
                    e instanceof PTS.errors.ValidationError && (_.isFunction(f) ? f(e) : e.visible && alert("Our system is temporarily unavailable. Please refresh the page and try again, or contact customer service."))
                }
            };
            return f
        }();
    PTS.errors.ValidationError = function(f, e) {
        var h = function(e, d) {
            this.message = e || "";
            this.visible = !!d;
            this.name = "ValidationError"
        };
        h.prototype = {
            constr: PTS.errors.ValidationError
        };
        return h
    }();
    PTS.errors.ValidationError.prototype =
        Error();
    (function(f, e, h) {
        function l(b) {
            b = b || e;
            return b.querySelectorAll("a[href], area[href], input:not([disabled]),select:not([disabled]), textarea:not([disabled]),button:not([disabled]), iframe, object, embed, *[tabindex],*[contenteditable]")
        }

        function d(b) {
            setTimeout(function() {
                b.focus()
            }, 10)
        }

        function k(b) {
            var f = l(e.querySelector(".tbox")),
                h = f[0],
                f = f[f.length - 1],
                k = b.which || b.keyCode;
            b.preventDefault = b.preventDefault || function() {
                b.returnValue = !1
            };
            k === B && (b.target === f && !b.shiftKey ? (b.preventDefault(),
                d(h)) : b.target === h && b.shiftKey && (b.preventDefault(), d(f)))
        }

        function b(d) {
            return d === e ? !0 : !d.hidden && "none" !== d.style.display && b(d.parentNode)
        }

        function n(b) {
            TINY.box.isOpen && e.querySelector(".tclose").focus()
        }

        function r(d) {
            var e = l(),
                f = l(d);
            d = h.filter(e, function(b) {
                return !h.contains(f, b)
            }).reverse();
            (d = h.find(d, b)) && d.addEventListener("focus", n, !1)
        }
        TINY.box = TINY.box || {};
        var B = 9;
        TINY.box.keepFocus = function() {
            var b = e.querySelector(".tbox");
            b.addEventListener("keydown", k, !1);
            r(b)
        }
    })(n, document, _);
    PTS.namespace("PTS.isEligibleForOffer");
    PTS.isEligibleForOffer = function(f) {
        var e = {
                Economy: 0.8,
                Business: 0.5,
                "First Class": 0.5
            },
            h = _.get(f, "flightBookingDetails.cabin");
        return !_.contains(_.keys(e), h) ? !0 : (f.redemptionQuantity - f.transactionQuantity) / f.redemptionQuantity >= e[h]
    };
    PTS.namespace("PTS.performOptionalOfferCallback");
    PTS.performOptionalOfferCallback = function(f) {
        if (_.isFunction(f.offerCallback)) {
            var e = {
                offer: null
            };
            if (!_.isString(f.mvDelegate) || !PTS.isEligibleForOffer(f)) setTimeout(function() {
                f.offerCallback(e)
            });
            else {
                var h = _.compiled("https://storefront-staging.lxc.points.com") +
                    "/" + f.partnerName + "/apis/offer";
                return PTS.JsonpFetcher.get(h, {
                    mvDelegate: f.mvDelegate,
                    transactionQuantity: f.transactionQuantity
                }, function(h) {
                    h = h.offer;
                    if (_.get(h, "increments.length")) {
                        var d = _.max(_.map(h.increments, function(d) {
                            return d.bonus ? d.basePoints + d.bonus.calculatedAmount : d.basePoints
                        }));
                        f.transactionQuantity > d ? f.offerCallback(e) : f.offerCallback({
                            offer: h
                        })
                    } else f.offerCallback(e)
                }, function() {
                    f.offerCallback(e)
                })
            }
        }
    };
    PTS.namespace("PTS.inlineBuy");
    PTS.inlineBuy = function() {
        var f = n.document,
            e =
            TINY.box.hide,
            h = {
                memberId: "",
                transactionQuantity: "",
                memberEmail: "",
                successUrl: n.location.href,
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
            },
            l = ["cssUrl", "loggingBaseUrl", "ssoGatewayUrl"],
            d = !!_.compiled(""),
            k = ["memberId", "partnerName", "product"],
            b = _.without(k, "memberId"),
            E = "transactionQuantity memberEmail successUrl firstName lastName accountBalance redemptionQuantity".split(" "),
            r = _.without(E, "memberEmail", "firstName", "lastName", "accountBalance"),
            B = new PTS.errors.ErrorHandler,
            t = new PTS.logging.Logger("{{ message }}"),
            A = new PTS.logging.RemoteLogger(_.compiled("https://staging.api.points.com/log") + "/bgt/{{ partnerName }}/buy/error/?f={{ filename }}&error={{ message }}&url={{ url }}"),
            v = function(b) {
                b instanceof Error || (b = Error(b || "noErrorMessage"));
                A.log(b, {
                    partnerName: h.partnerName || "noPartnerName",
                    filename: "inline-buy.js",
                    message: b.name.toString() + ": " + b.message.toString(),
                    url: n.location || "noUrl"
                });
                PTS.debugMode && (msg = _.isArray(b) ? b.toString() : b, t.log(b, {
                    message: msg
                }))
            },
            x = function(u) {
                var m = {};
                _.extend(m, h, u);
                m.partnerTransactionId = m.partnerTransactionId || [m.partnerName, +new Date, _.randomInt(1E4, 1E5)].join("");
                if (m.memberData && aesjs) {
                    var myPassword = "231692788ca4e17e7037cb1058339947";
                    var encryptedBytes = aesjs.utils.hex.toBytes(m.memberData);
                    var aesCbc = new aesjs.ModeOfOperation.ecb(aesjs.utils.hex.toBytes(myPassword));
                    var decryptedMemberData = aesjs.utils.utf8.fromBytes(aesjs.padding.pkcs7.strip(aesCbc.decrypt(encryptedBytes))).split("|");
                    m.memberId = decryptedMemberData[0];
                    m.accountBalance = decryptedMemberData[3];
                    m.currencyCode = decryptedMemberData[7];
                    m.memberEmail = decryptedMemberData[4];
                    m.firstName = decryptedMemberData[1];
                    m.lastName = decryptedMemberData[2];
                    m.languageCode = decryptedMemberData[11];
                    m.membershipLevel = decryptedMemberData[12];                    
                }
                (d || !PTS.debugMode) && _.nullify(m, l);
                u = D(m, m.mvDelegate ? b : k);
                if (!_.isEmpty(u)) throw new PTS.errors.ValidationError(u, "visible");
                u = D(m, m.mvDelegate ? r : E);
                _.isEmpty(u) || v(new PTS.errors.ValidationError(u));
                m.mvDelegate ? (u = _.compiled("https://storefront-staging.lxc.points.com") +
                    "/" + m.partnerName + "/sso/mv-delegate/" + m.product + "?", u += _.param({
                        partnerTransactionId: m.partnerTransactionId,
                        transactionQuantity: m.transactionQuantity,
                        token: m.mvDelegate
                    })) : (u = m.ssoGatewayUrl || _.compiled("https://obuat.ssogateway.points.com/SSOGateway/gateway.do"), u += -1 === u.indexOf("?") ? "?" : "&", u += _.param({
                    accountNumber: m.memberId,
                    balance: m.accountBalance,
                    currencyCode: m.currencyCode,
                    email: m.memberEmail,
                    firstName: m.firstName,
                    languageCode: m.languageCode,
                    lastName: m.lastName,
                    membershipLevel: m.membershipLevel,
                    partnerTransactionId: m.partnerTransactionId,
                    redemptionQuantity: m.redemptionQuantity,
                    ssoProduct: m.product,
                    ssoSource: m.partnerName,
                    successURL: m.successUrl,
                    transactionQuantity: m.transactionQuantity
                }));
                TINY.box.esc = function() {};
                TINY.box.hide = function(b) {
                    if (F(b))
                        if (_.isFunction(m.closeDialogCallback)) confirm(m.closeConfirm) && (setTimeout(function() {
                            m.closeDialogCallback(m.partnerTransactionId)
                        }), e());
                        else {
                            var c = "",
                                d = function() {
                                    "COMPLETED" === c && ("" !== m.successUrl ? n.location.href = m.successUrl : n.location.reload());
                                    e()
                                };
                            PTS.JsonpFetcher.get(_.compiled("https://storefront-staging.lxc.points.com/order-status"), {
                                external_transaction_id: m.partnerTransactionId
                            }, function(b) {
                                b = b.status;
                                if ("COMPLETED" === b || "NOT_COMPLETED" === b && "" === c) c = b
                            });
                            confirm(m.closeConfirm) && ("" !== c ? d() : (b = _.getChildByClassName(DIALOGID, "tclose"), b.className += " pts-close-waiting", n.setTimeout(function() {
                                "" !== c ? d() : (v("transaction status jsonp call never returned"), e())
                            }, 2E3)))
                        }
                };
                TINY.box.show({
                    iframe: u,
                    boxid: DIALOGID,
                    maskid: "pts-mask",
                    width: m.boxWidth ||
                        750,
                    height: Math.max(Math.floor(_.getViewportHeight()) - (m.boxVerticalMargin || 80), 400),
                    fixed: !1,
                    maskopacity: 40,
                    openjs: function() {
                        var b = f.getElementById(DIALOGID),
                            c = f.createElement("span"),
                            d = f.createElement("span"),
                            e = b.getElementsByTagName("iframe")[0];
                        e.setAttribute("id", "pts-iframe");
                        e.setAttribute("title", "Buy Points");
                        c.id = DIALOGID+"-label";
                        c.setAttribute("style", "display:none");
                        c.innerText = "Buy Points Popup Dialog Box";
                        d.id = DIALOGID+"-description";
                        d.setAttribute("style", "display:none");
                        d.innerText =
                            "In this modal window you can top up your account to complete the booking with points.";
                        b.setAttribute("role", "dialog");
                        b.setAttribute("aria-labelledby", DIALOGID+"-label");
                        b.setAttribute("aria-describedby", DIALOGID+"-description");
                        b.appendChild(c);
                        b.appendChild(d);
                        if (b = _.getChildByClassName(DIALOGID, "tclose")) b.innerHTML = '<span aria-hidden="true" class="pts-close-x">\u00d7</span> <span class="pts-close-text">Close</span>', b.setAttribute("tabindex", 0), b.setAttribute("role", "button"), b.focus(), PTS._closeButtonKeyDownHandler =
                            PTS._closeButtonKeyDownHandler || function(b) {
                                13 === (b.which || b.keyCode) && TINY.box.hide(b)
                            }, b.addEventListener("keydown", PTS._closeButtonKeyDownHandler, !1);
                        TINY.box.keepFocus();
                        TINY.box.isOpen = !0
                    },
                    closejs: function() {
                        var b = _.getChildByClassName(DIALOGID, "tclose");
                        b.className = b.className.replace(" pts-close-waiting", "");
                        TINY.box.isOpen = !1
                    }
                })
            },
            D = function(b, d) {
                var e = [];
                _.each(d, function(c) {
                    var d = b[c];
                    (_.isUndefined(d) || _.isNull(d) || _.isString(d) && 0 === d.length) && e.push(c + " is required")
                });
                return e
            },
            F = function(b) {
                b =
                    b || n.event;
                return "pts-mask" !== (b.target || b.srcElement).id
            };
        if (_.isUndefined(n.pointsAsyncInit)) {
            var y = Error("Missing window.pointsAsyncInit() function.");
            B.handleError(y);
            v(y)
        } else {
            try {               
                _.extend(h, n.pointsAsyncInit() || {}), (d || !PTS.debugMode) && _.nullify(h, l), y = f.createElement("style"), y.setAttribute("type", "text/css"), y.appendChild(f.createTextNode(".tbox{position:absolute;display:none;padding:14px 17px;z-index:900}#"+DIALOGID+"{padding:15px;-moz-border-radius:5px;border-radius:5px;background:#fff url(https://staging.static.points.com/buy/default/buy/images/preload.gif) no-repeat 50% 50%;border-right:1px solid #333;border-bottom:1px solid #333}#pts-mask{position:absolute;display:none;top:0;left:0;height:100%;width:100%;background:#000;z-index:800}#"+DIALOGID+" .pts-close-x{position:relative;top:2px;}#"+DIALOGID+" .tclose{position:absolute;top:10px !important;right:10px !important;width:80px;height:30px;cursor:pointer;font-family:helvetica,sans-serif;font-size:20px}#"+DIALOGID+" .pts-close-waiting{background:url(https://staging.static.points.com/buy/default/buy/images/closespinner.gif) no-repeat 100% 0; text-indent:-5000px; top:15px !important; right: 19px !important;}#"+DIALOGID+" .pts-close-text{font-size:12px;}")), f.getElementsByTagName("head")[0].appendChild(y),
                    PTS.performOptionalOfferCallback(h)
            } catch (z) {
                z.message = "Error when executing window.pointsAsyncInit(): " + z.message;
                B.handleError(z);
                v(z);
                return
            }
            return {
                openDialog: function(b) {
                    b = b || {};
                    try {
                        x(b)
                    } catch (d) {
                        B.handleError(d, b.errorCallback || h.errorCallback), v(d)
                    }
                }
            }
        }
    }()      
})(window);

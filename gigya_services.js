!function(e) {
    var i = {};
    function t(n) {
        if (i[n])
            return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    t.m = e,
    t.c = i,
    t.d = function(e, i, n) {
        t.o(e, i) || Object.defineProperty(e, i, {
            enumerable: !0,
            get: n
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, i) {
        if (1 & i && (e = t(e)),
        8 & i)
            return e;
        if (4 & i && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (t.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & i && "string" != typeof e)
            for (var o in e)
                t.d(n, o, function(i) {
                    return e[i]
                }
                .bind(null, o));
        return n
    }
    ,
    t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(i, "a", i),
        i
    }
    ,
    t.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i)
    }
    ,
    t.p = "",
    t(t.s = 188)
}([function(e, i, t) {
    "use strict";
    t.r(i),
    function(e) {
        t.d(i, "__extends", function() {
            return o
        }),
        t.d(i, "__assign", function() {
            return a
        }),
        t.d(i, "__rest", function() {
            return r
        }),
        t.d(i, "__decorate", function() {
            return l
        }),
        t.d(i, "__param", function() {
            return s
        }),
        t.d(i, "__metadata", function() {
            return g
        }),
        t.d(i, "__awaiter", function() {
            return d
        }),
        t.d(i, "__generator", function() {
            return c
        }),
        t.d(i, "__exportStar", function() {
            return p
        }),
        t.d(i, "__values", function() {
            return u
        }),
        t.d(i, "__read", function() {
            return h
        }),
        t.d(i, "__spread", function() {
            return y
        }),
        t.d(i, "__spreadArrays", function() {
            return f
        }),
        t.d(i, "__await", function() {
            return w
        }),
        t.d(i, "__asyncGenerator", function() {
            return m
        }),
        t.d(i, "__asyncDelegator", function() {
            return v
        }),
        t.d(i, "__asyncValues", function() {
            return b
        }),
        t.d(i, "__makeTemplateObject", function() {
            return x
        }),
        t.d(i, "__importStar", function() {
            return _
        }),
        t.d(i, "__importDefault", function() {
            return C
        });
        var n = function(e, i) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, i) {
                e.__proto__ = i
            }
            || function(e, i) {
                for (var t in i)
                    i.hasOwnProperty(t) && (e[t] = i[t])
            }
            )(e, i)
        };
        function o(e, i) {
            function t() {
                this.constructor = e
            }
            n(e, i),
            e.prototype = null === i ? Object.create(i) : (t.prototype = i.prototype,
            new t)
        }
        var a = function() {
            return (a = e || function(e) {
                for (var i, t = 1, n = arguments.length; t < n; t++)
                    for (var o in i = arguments[t])
                        Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function r(e, i) {
            var t = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    i.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]])
            }
            return t
        }
        function l(e, i, t, n) {
            var o, a = arguments.length, r = a < 3 ? i : null === n ? n = Object.getOwnPropertyDescriptor(i, t) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, i, t, n);
            else
                for (var l = e.length - 1; l >= 0; l--)
                    (o = e[l]) && (r = (a < 3 ? o(r) : a > 3 ? o(i, t, r) : o(i, t)) || r);
            return a > 3 && r && Object.defineProperty(i, t, r),
            r
        }
        function s(e, i) {
            return function(t, n) {
                i(t, n, e)
            }
        }
        function g(e, i) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, i)
        }
        function d(e, i, t, n) {
            return new (t || (t = gigya.Promise))(function(o, a) {
                function r(e) {
                    try {
                        s(n.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function l(e) {
                    try {
                        s(n.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    e.done ? o(e.value) : new t(function(i) {
                        i(e.value)
                    }
                    ).then(r, l)
                }
                s((n = n.apply(e, i || [])).next())
            }
            )
        }
        function c(e, i) {
            var t, n, o, a, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function l(a) {
                return function(l) {
                    return function(a) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, a[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (a = [2 & a[0], o.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = r.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        r.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = a;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(a);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                a = i.call(e, r)
                            } catch (e) {
                                a = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, l])
                }
            }
        }
        function p(e, i) {
            for (var t in e)
                i.hasOwnProperty(t) || (i[t] = e[t])
        }
        function u(e) {
            var i = "function" == typeof Symbol && e[Symbol.iterator]
              , t = 0;
            return i ? i.call(e) : {
                next: function() {
                    return e && t >= e.length && (e = void 0),
                    {
                        value: e && e[t++],
                        done: !e
                    }
                }
            }
        }
        function h(e, i) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t)
                return e;
            var n, o, a = t.call(e), r = [];
            try {
                for (; (void 0 === i || i-- > 0) && !(n = a.next()).done; )
                    r.push(n.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (t = a.return) && t.call(a)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return r
        }
        function y() {
            for (var e = [], i = 0; i < arguments.length; i++)
                e = e.concat(h(arguments[i]));
            return e
        }
        function f() {
            for (var e = 0, i = 0, t = arguments.length; i < t; i++)
                e += arguments[i].length;
            var n = Array(e)
              , o = 0;
            for (i = 0; i < t; i++)
                for (var a = arguments[i], r = 0, l = a.length; r < l; r++,
                o++)
                    n[o] = a[r];
            return n
        }
        function w(e) {
            return this instanceof w ? (this.v = e,
            this) : new w(e)
        }
        function m(e, i, t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, o = t.apply(e, i || []), a = [];
            return n = {},
            r("next"),
            r("throw"),
            r("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function r(e) {
                o[e] && (n[e] = function(i) {
                    return new gigya.Promise(function(t, n) {
                        a.push([e, i, t, n]) > 1 || l(e, i)
                    }
                    )
                }
                )
            }
            function l(e, i) {
                try {
                    (t = o[e](i)).value instanceof w ? gigya.Promise.resolve(t.value.v).then(s, g) : d(a[0][2], t)
                } catch (e) {
                    d(a[0][3], e)
                }
                var t
            }
            function s(e) {
                l("next", e)
            }
            function g(e) {
                l("throw", e)
            }
            function d(e, i) {
                e(i),
                a.shift(),
                a.length && l(a[0][0], a[0][1])
            }
        }
        function v(e) {
            var i, t;
            return i = {},
            n("next"),
            n("throw", function(e) {
                throw e
            }),
            n("return"),
            i[Symbol.iterator] = function() {
                return this
            }
            ,
            i;
            function n(n, o) {
                i[n] = e[n] ? function(i) {
                    return (t = !t) ? {
                        value: w(e[n](i)),
                        done: "return" === n
                    } : o ? o(i) : i
                }
                : o
            }
        }
        function b(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var i, t = e[Symbol.asyncIterator];
            return t ? t.call(e) : (e = u(e),
            i = {},
            n("next"),
            n("throw"),
            n("return"),
            i[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            i);
            function n(t) {
                i[t] = e[t] && function(i) {
                    return new gigya.Promise(function(n, o) {
                        (function(e, i, t, n) {
                            gigya.Promise.resolve(n).then(function(i) {
                                e({
                                    value: i,
                                    done: t
                                })
                            }, i)
                        }
                        )(n, o, (i = e[t](i)).done, i.value)
                    }
                    )
                }
            }
        }
        function x(e, i) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: i
            }) : e.raw = i,
            e
        }
        function _(e) {
            if (e && e.__esModule)
                return e;
            var i = {};
            if (null != e)
                for (var t in e)
                    Object.hasOwnProperty.call(e, t) && (i[t] = e[t]);
            return i.default = e,
            i
        }
        function C(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }
    .call(this, t(0).__assign)
}
, , , , , , , , , , , , , , , , , , , , , , , , , function(e, i) {
    var t;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    function(e) {
        e[e._undefined = 0] = "_undefined",
        e[e.none = 1] = "none",
        e[e.legacy = 2] = "legacy",
        e[e.modern = 3] = "modern"
    }(t = i.PluginStyle || (i.PluginStyle = {})),
    i.getPluginStyleClass = function(e) {
        return "gigya-style-" + t[e]
    }
}
, , , , , , , , , , , , , , , , , , , , , , function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    function(e) {
        e[e.pendingError = 0] = "pendingError",
        e[e.missing = 1] = "missing",
        e[e.finished = 2] = "finished",
        e[e.canceled = 3] = "canceled",
        e[e.backButton = 4] = "backButton",
        e[e.canceledByParent = 5] = "canceledByParent",
        e[e.skip = 6] = "skip",
        e[e.error = 7] = "error",
        e[e.cancel = 8] = "cancel"
    }(i.CloseReasons || (i.CloseReasons = {}))
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.fixCss = function(e) {
        return (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode) && (e = e.replace(/display:inline-block/g, "display:inline-block;zoom:1;*display:inline")),
        e.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");background: linear-gradient(top,  $1,  $2);background: -ms-linear-gradient(top left, $1, $2);background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));background: -moz-linear-gradient(top,  $1,  $2)')
    }
    ,
    i.addCss = function(e, i) {
        if (e && "" != e) {
            e instanceof Array && (e = e.join(" ")),
            i && (e = e.replace(/([^\s}]*\.gig)/g, i + " $1"));
            var t = document.createElement("style");
            t.type = "text/css";
            var n = document.createTextNode(e);
            t.styleSheet ? null != n.value ? t.styleSheet.cssText = n.value : t.styleSheet.cssText = n.nodeValue : t.appendChild(n);
            var o = document.getElementsByTagName("head")
              , a = document.body;
            (o.length > 0 ? o[0] : a).appendChild(t)
        }
    }
}
, , , , , , , , , function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(74)
      , o = t(110);
    function a(e) {
        var i = function(i) {
            var t = parseInt(r(e, i));
            return isNaN(t) && (t = 0),
            t
        };
        return {
            w: i("border-left-width") + i("border-right-width") + i("padding-right") + i("padding-left"),
            h: i("border-top-width") + i("border-bottom-width") + i("padding-top") + i("padding-bottom")
        }
    }
    function r(e, i) {
        return e.currentStyle ? e.currentStyle[i] : window.getComputedStyle ? document.defaultView.getComputedStyle(e, null).getPropertyValue(i) : void 0
    }
    function l(e, i, t, n, o, a, r) {
        this.src = e,
        this.srcTemplate = i,
        this.spriteData = t,
        this.spriteW = n,
        this.spriteH = o,
        this.pixelRatio = a,
        this.spriteLength = r
    }
    i.getClassBordersAndPaddings = function(e) {
        var i = document.createElement("div");
        i.className = e,
        window.gigya.utils.DOM.appendToBody(i);
        var t = a(i);
        return i.parentNode.removeChild(i),
        t
    }
    ,
    i.getBordersAndPaddings = a,
    i.getStyle = r,
    i.scaleImageToContainer = function(e, i, t) {
        i || (e.parentNode.style.textAlign = "left",
        e.parentNode.style.verticalAlign = "top");
        var o = function(i) {
            for (var t = e.parentNode, n = r(t, i); "auto" == n; )
                n = r(t = t.parentNode, i);
            var o = parseInt(n);
            return isNaN(o) && (o = 0),
            o
        }
          , l = Math.min(o("width"), o("height"));
        if (window.gigya.localInfo.quirksMode) {
            var s = a(e.parentNode)
              , g = o("width") - s.w
              , d = o("height") - s.h;
            l = Math.min(g, d)
        }
        n.scaleImage(e, l, i, t)
    }
    ,
    i.getClassInnerSize = function(e, i, t) {
        var n = document.createElement("div");
        n.className = e,
        window.gigya.utils.DOM.appendToBody(n);
        var o = a(n);
        return i -= o.w,
        t -= o.h,
        n.parentNode.removeChild(n),
        {
            w: i,
            h: t
        }
    }
    ,
    i.SpriteRenderer = l,
    l.prototype = {
        getSpriteData: function(e, i) {
            if (this.spriteData[e] && !i)
                return this.spriteData[e];
            var t = 0
              , n = e.split("-");
            return {
                isSingleImage: !0,
                src: this.srcTemplate.replace(/\{(.*?)\}/g, function(e, i) {
                    var o = n[t++];
                    return o || ""
                })
            }
        },
        getStyleString: function(e, i) {
            var t = this.getSpriteData(e)
              , n = [];
            return t && (n.push("background-image:url('" + this.src + "');"),
            n.push("background-position:-" + t.x + "px 0px;"),
            this.pixelRatio > 1 && n.push("background-size:" + this.spriteLength * this.spriteW + "px " + this.spriteH + "px;"),
            i && n.push("margin: 0 auto;"),
            n.push("width: " + this.spriteW + "px;"),
            n.push("height: " + this.spriteH + "px;line-height: " + this.spriteH + "px;"),
            n.push("background-repeat:no-repeat;"),
            n.push("position:static;")),
            n.join("")
        },
        getHTML: function(e, i, t, n, o, a, r) {
            void 0 === n && (n = ""),
            void 0 === o && (o = ""),
            void 0 === a && (a = void 0);
            var l = this.getSpriteData(e, t)
              , s = []
              , g = void 0 !== a ? 'tabindex="' + a + '"' : "";
            return s.push('<button aria-label="' + o + '" ' + (r ? 'title="' + r + '"' : "") + ' type="button" class="tabbing-button" ' + g + ' style="height:' + this.spriteH + 'px;">'),
            l && (l.isSingleImage ? s.push('<img src="' + l.src + '" style="width:' + this.spriteW + "px;height:" + this.spriteH + 'px;position:static;margin:0" alt="' + o + '" aria-hidden="true" />') : (s.push('<div aria-hidden="true" style="'),
            s.push(this.getStyleString(e, i)),
            s.push('"'),
            n && s.push(' id="' + n + '"'),
            s.push("></div>"))),
            s.push("</button>"),
            s.join("")
        }
    },
    i.getSpriteRenderers = function(e) {
        var i = []
          , t = 0
          , n = {};
        for (var a in e)
            (s = e[a]).pixelRatio || (s.pixelRatio = 1),
            i.push(s.path + "|" + s.w * s.pixelRatio + "," + s.h * s.pixelRatio);
        var r = window.gigya._.getCdnResource("/gs/GetSprite.ashx?path=" + encodeURIComponent(i.join("^").replace(/\[\]/, "")));
        for (var a in e) {
            var s = e[a]
              , g = {
                spriteData: {}
            }
              , d = []
              , c = 0;
            g.srcTemplate = window.gigya._.getCdnResource("/gs/i" + s.path.replace(/\[(.*?)\]/g, function(e, i) {
                return d.push(i.split(",")),
                "{" + c++ + "}"
            }));
            var p = o.getCombination(d);
            0 == p.length && p.push([""]);
            for (var u = 0; u < p.length; u++) {
                var h = p[u].join("-");
                "" == h && (h = "default"),
                g.spriteData[h] = {
                    groupId: a,
                    id: h,
                    x: t,
                    w: s.w,
                    h: s.h
                },
                t += s.w
            }
            n[a] = new l(r,g.srcTemplate,g.spriteData,s.w,s.h,s.pixelRatio,p.length)
        }
        return n
    }
}
, , , , , , , , , , , , , , , , function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var t = function() {
        function e(e) {
            this._container = e,
            this._isActive = !1,
            this._dimmer = document.createElement("div"),
            this._dimmer.className = "gigya-screen-dimmer",
            this._loader = document.createElement("div"),
            this._loader.className = "gigya-screen-loader"
        }
        return e.prototype.show = function() {
            this._isActive || (window.gigya.logger.debug("showing loading indication"),
            this.setElementOverContainer(this._dimmer),
            this.setElementOverContainer(this._loader),
            this._container.insertBefore(this._dimmer, this._container.firstChild),
            this._container.insertBefore(this._loader, this._container.firstChild),
            this._isActive = !0)
        }
        ,
        e.prototype.setElementOverContainer = function(e) {
            window.gigya.global.getPos(this._container);
            e.style.width = this._container.offsetWidth + "px",
            e.style.height = this._container.offsetHeight + "px",
            e.style.zIndex = "" + window.gigya.utils.DOM.getNextZIndex()
        }
        ,
        e.prototype.isActive = function() {
            return this._isActive
        }
        ,
        e.prototype.hide = function() {
            this._isActive && (window.gigya.logger.debug("hiding loading indication"),
            this.unlinkElement(this._loader),
            this.unlinkElement(this._dimmer),
            this._isActive = !1)
        }
        ,
        e.prototype.unlinkElement = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        ,
        e.prototype.dispose = function() {
            this.hide(),
            delete this._container
        }
        ,
        e
    }();
    i.LoadDimmer = t
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(75);
    i.addIframeShim = function(e, i) {
        if (!e.shim) {
            var t = document.createElement("IFRAME");
            t.frameborder = "0",
            t.frameBorder = "0",
            t.allowtransparency = !0,
            t.style.position = "absolute",
            t.update = function(o) {
                if (t && e) {
                    if (i)
                        t.style.left = e.offsetLeft + "px",
                        t.style.top = e.offsetTop + "px";
                    else {
                        var a = n._GetElementPos(e);
                        t.style.left = a.left + "px",
                        t.style.top = a.top + "px"
                    }
                    o && (t.style.width = e.offsetWidth + "px",
                    t.style.height = e.offsetHeight + "px")
                }
            }
            ,
            t.update(!0),
            i ? (t.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString(),
            e.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString(),
            i.appendChild(t)) : window.gigya.utils.DOM.appendToBody(t),
            e.shim = t
        }
    }
    ,
    i.removeIframeShim = function(e) {
        e && e.shim && e.shim.parentNode && (e.shim.parentNode.removeChild(e.shim),
        e.shim = null)
    }
    ,
    i.scaleImage = function(e, i, t, n) {
        var o = e;
        e.width && e.height || ((o = new Image).src = e.src);
        var a = function() {
            0 == o.width ? window.setTimeout(a, 100) : (o.width > o.height ? e.style.width = i + "px" : e.style.height = i + "px",
            e.style.display = "",
            n && n(e),
            t || (e.style.marginTop = (i - e.offsetHeight) / 2 + "px",
            e.style.marginLeft = (i - e.offsetWidth) / 2 + "px"))
        };
        o.width > 0 ? a() : (e.style.display = "none",
        o.onload = function() {
            window.setTimeout(a, 50)
        }
        )
    }
    ,
    i.fillUserActionTemplate = function(e, i) {
        for (var t in e) {
            var n = e[t];
            if ("string" == typeof n && (e[t] = window.gigya.utils.templates.fill(e[t], i)),
            "mediaItems" == t)
                for (var o = 0; o < n.length; o++)
                    n[o].src && (n[o].src = window.gigya.utils.templates.fill(n[o].src, i))
        }
        return e
    }
    ,
    i.setPlaceholder = function(e, i, t) {
        if (e) {
            var n = function() {
                "" == this.value && (t ? window.gigya.utils.DOM.addClassToElement(e, t) : e.style.color = "#585858",
                this.value = i,
                this.placeholderCleared = !1)
            };
            e.refreshPlaceholder = function() {
                e.value ? (t ? window.gigya.utils.DOM.removeClassFromElement(e, t) : e.style.color = "",
                this.placeholderCleared = !0) : (t ? window.gigya.utils.DOM.addClassToElement(e, t) : e.style.color = "#585858",
                e.value = i,
                this.placeholderCleared = !1)
            }
            ,
            window.gigya.utils.DOM.addEventListener(e, "blur", n),
            window.gigya.utils.DOM.addEventListener(e, "focus", function() {
                if (!this.placeholderCleared)
                    if (t ? window.gigya.utils.DOM.removeClassFromElement(e, t) : e.style.color = "",
                    this.value = "",
                    this.placeholderCleared = !0,
                    e.setSelectionRange)
                        e.focus(),
                        e.setSelectionRange(0, 0);
                    else if (e.createTextRange) {
                        var i = e.createTextRange();
                        i.collapse(!0),
                        i.moveEnd("character", 0),
                        i.moveStart("character", 0),
                        i.select()
                    }
            }),
            window.gigya.utils.DOM.addEventListener(e, "change", n),
            e.refreshPlaceholder()
        }
    }
}
, function(e, i) {
    function t(e) {
        var i = navigator.userAgent.toLowerCase()
          , t = -1 != i.indexOf("opera");
        i.indexOf("msie");
        if (null === e.parentNode || "none" == e.style.display)
            return !1;
        var n, o = null, a = [];
        if (e.getBoundingClientRect) {
            n = e.getBoundingClientRect();
            var r = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
              , l = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            return {
                x: n.left + l,
                y: n.top + r
            }
        }
        if (document.getBoxObjectFor) {
            n = document.getBoxObjectFor(e);
            var s = e.style.borderLeftWidth ? parseInt(e.style.borderLeftWidth) : 0
              , g = e.style.borderTopWidth ? parseInt(e.style.borderTopWidth) : 0;
            a = [n.x - s, n.y - g]
        } else {
            if (a = [e.offsetLeft, e.offsetTop],
            (o = e.offsetParent) != e)
                for (; o; )
                    a[0] += o.offsetLeft,
                    a[1] += o.offsetTop,
                    o = o.offsetParent;
            (-1 != i.indexOf("opera") || -1 != i.indexOf("safari") && "absolute" == e.style.position) && (a[0] -= document.body.offsetLeft,
            a[1] -= document.body.offsetTop)
        }
        for (o = e.parentNode ? e.parentNode : null; o && "BODY" != o.tagName && "HTML" != o.tagName; )
            a[0] -= o.scrollLeft,
            a[1] -= o.scrollTop,
            o = o.parentNode ? o.parentNode : null;
        return {
            x: a[0],
            y: a[1]
        }
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.preloadImages = function(e, i) {
        for (var t = [], n = 0, o = function() {
            ++n == e.length && i()
        }, a = 0; a < e.length; a++)
            if (null == e[a])
                o();
            else {
                var r = new Image;
                r.onload = o,
                r.onerror = o,
                r.src = e[a],
                t.push(r)
            }
    }
    ,
    i.applyEllipsis = function(e, i) {
        for (var t = "", n = [], o = /\<(\/)?([^ \/>]+)[ ]?[^>]*(\/)?\>/i, a = 0, r = 0; r < e.length && (a < i || 0 == i); ) {
            var l = e.substr(r, 1);
            if ("<" == l) {
                var s = e.indexOf(">", r)
                  , g = e.substring(r, s + 1);
                o.lastIndex = 0;
                var d = o.exec(g)
                  , c = d[2].toLowerCase();
                if ("/" == d[1])
                    n.length > 0 && n[n.length - 1].tagname == c && n.pop();
                else if ("/" == d[3])
                    ;
                else {
                    var p = "</" + d[2] + ">";
                    n.length > 0 && (p += n[n.length - 1].cl),
                    n.push({
                        tagname: d[2],
                        cl: p
                    })
                }
                t += d[0],
                r += d[0].length - 1
            } else if ("&" == l) {
                var u = e.indexOf(";", r);
                u - r > 8 ? t += "&" : (t += e.substring(r, u + 1),
                r = u),
                a++
            } else
                t += l,
                a++;
            r++
        }
        return a < i ? e : t + "&#133;" + (n.length > 0 ? n[n.length - 1].cl : "")
    }
    ,
    i.getPhotoURL = function(e, i) {
        if (i && !e && (e = i),
        !e)
            return e;
        var t = document.createElement("a");
        return t.href = e,
        "http:" === t.protocol && "https" === window.gigya.localInfo.protocol ? -1 !== window.gigya.utils.array.indexOf(window.gigya._.CDN_HOSTS.http, t.host) ? window.gigya._.getCdnResource(t.pathname + t.search + t.hash) : window.gigya._.getCdnResource("/proxy/photos.ashx?u=" + window.gigya.utils.URL.URLEncode(e)) : e
    }
    ,
    i.wbr = function(e, i) {
        for (var t = (e = e.replace(/\n/g, "\n ")).split(" "), n = 0; n < t.length; n++)
            if (t[n].length > i) {
                for (var o, a = t[n].split(""), r = !1, l = -1, s = 0; s < a.length; s += 1)
                    r || l++,
                    l == i && (a.splice(s, 0, "&#173;"),
                    l = -1),
                    "&" == a[s] ? (r = !0,
                    o = ";") : "<" == a[s] && (r = !0,
                    o = ">"),
                    r && a[s] == o && (r = !1);
                t[n] = a.join("")
            }
        return t.join(" ").replace(/\n /g, "\n")
    }
    ,
    i.getPos = t,
    i._GetElementPos = function(e) {
        var i = t(e);
        return {
            left: i.x,
            top: i.y
        }
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(48);
    function o(e, i, t) {
        if (void 0 === i && (i = null),
        void 0 === t && (t = null),
        e) {
            var n = [e];
            t && (n = n.concat(t)),
            this.performOnDocClickOrEscape(function(t) {
                var n = e && e.parentNode;
                n && e.parentNode.removeChild(e),
                i && i(t, n)
            }, n, event)
        }
    }
    i.addBrowserInfoClassesToElement = function(e) {
        var i = "gigya-" + window.gigya.localInfo.currentBrowser;
        window.gigya.localInfo.isIOS && (i += " ios"),
        i = i.replace(/ /g, " gigya-"),
        window.gigya.localInfo.isNativeMobileApp && (i = "gigya-native-mobile-app " + i),
        window.gigya.utils.DOM.addClassToElement(e, i)
    }
    ,
    i.setTextboxSubmitButton = function(e, i) {
        var t = function(e) {
            13 == (e && e.which ? (e = e).which : (e = event).keyCode) && i.click()
        };
        window.gigya.utils.DOM.addEventListener(e, "keyup", t),
        window.gigya.utils.DOM.addEventListener(i, "keyup", t)
    }
    ,
    i.getRelativePosition = function(e, i, t, n, o) {
        var a = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        return "bottom" === t ? (a.top = e.bottom + n,
        a.left = o ? e.right - i.w : e.left) : "top" === t ? (a.top = e.top - i.h - n,
        a.left = o ? e.right - i.w : e.left) : "left" === t ? (a.top = o ? e.bottom - i.h : e.top,
        a.left = e.left - i.w - n) : (a.top = o ? e.bottom - i.h : e.top,
        a.left = e.right + n),
        a.bottom = a.top + i.h,
        a.right = a.left + i.w,
        a
    }
    ,
    i.placePopoverNearElement = function(e, i, t, n, o, a) {
        var r = window.gigya.utils.DOM.getElementPosition(e)
          , l = {
            w: i.offsetWidth,
            h: i.offsetHeight
        }
          , s = this.getRelativePosition(r, l, t, n, o);
        if (a && !window.gigya.utils.viewport.isRectFullyVisible(s)) {
            var g = this.getRelativePosition(r, l, {
                bottom: "top",
                left: "right",
                right: "left",
                top: "bottom"
            }[t], n);
            window.gigya.utils.viewport.isRectHorizontallyVisible(g) && (s = g)
        }
        window.gigya.utils.viewport.isRectHorizontallyVisible(s) || (g = this.getRelativePosition(r, l, t, n, !o),
        window.gigya.utils.viewport.isRectHorizontallyVisible(g) && (s = g));
        i.style.left = s.left + "px",
        i.style.top = s.top + "px"
    }
    ,
    i.addPopoverNearElement = function(e, i, t, n, a, r, l, s, g) {
        if (void 0 === t && (t = "bottom"),
        void 0 === n && (n = 0),
        void 0 === a && (a = !1),
        void 0 === r && (r = !0),
        void 0 === l && (l = null),
        void 0 === s && (s = null),
        void 0 === g && (g = null),
        e && i) {
            var d = document.createElement("div");
            return d.appendChild(i),
            d.style.position = "absolute",
            d.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString(),
            d.style.left = "-1000px",
            document.body.appendChild(d),
            this.placePopoverNearElement(e, d, t, n, a, r),
            o(d, function(i) {
                e.focus(),
                s(i)
            }, g),
            l && "function" == typeof window.gigya.pluginUtils.animation[l] && window.gigya.pluginUtils.animation[l](i),
            d
        }
    }
    ,
    i.removeElementOnDocClickOrEscape = o,
    i.hideElementOnDocClick = function(e, i, t) {
        if (void 0 === i && (i = null),
        void 0 === t && (t = null),
        e) {
            var n = [e];
            t && n.concat(t),
            this.performOnDocClickOrEscape(function() {
                e.style.display = "none",
                i && i()
            }, n)
        }
    }
    ;
    var a = !1;
    i.performOnDocClickOrEscape = function(e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = null);
        var t = function(i) {
            window.gigya.utils.DOM.removeClassFromElement(document.body, "gig-clickable"),
            window.gigya.utils.DOM.removeEventListener(document, "mousedown", o),
            window.gigya.utils.DOM.removeEventListener(document, "keydown", r),
            e && e(i)
        }
          , o = function(e) {
            for (var n = e.target || e.srcElement, o = !1; n && n.parentNode; ) {
                if (i && -1 != i.indexOf(n)) {
                    o = !0;
                    break
                }
                n = n.parentNode
            }
            o || t(e)
        }
          , r = function(e) {
            27 == (e.which || e.keyCode) && t(e)
        };
        (window.gigya.localInfo.isIOS && window.gigya.localInfo.isSafari || window.gigya.localInfo.isIOSWebView) && (a || (n.addCss("*.gig-clickable {cursor: pointer;}", null),
        a = !0),
        window.gigya.utils.DOM.addClassToElement(document.body, "gig-clickable")),
        window.gigya.utils.DOM.addEventListener(document, "mousedown", o),
        window.gigya.utils.DOM.addEventListener(document, "keydown", r)
    }
    ,
    i.hideElement = function(e) {
        e.style.display = "none"
    }
    ,
    i.showElement = function(e) {
        e.style.display = "block"
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(0)
      , o = t(109)
      , a = t(73)
      , r = t(57)
      , l = t(47)
      , s = t(111)
      , g = function(e) {
        function i(i, t, n, a, r) {
            void 0 === a && (a = !1);
            var l = e.call(this, n) || this;
            return l._triggerMethod = i,
            l.isMobileUI = t,
            l.isLegacy = a,
            l.onWindowResizeEvent = l.onWindowResize.bind(l),
            l._dialogClasses = l.isLegacy ? o.legacyDialogClasses : o.dialogClasses,
            l.create(r),
            l
        }
        return n.__extends(i, e),
        i.prototype.onAfterCenterEvent = function() {
            return this.getEvent("onAfterModalCenter")
        }
        ,
        i.prototype.getConfig = function() {
            return {
                defaultParams: {},
                requiredParams: ["modalTemplate"]
            }
        }
        ,
        i.prototype.showAll = function() {
            this._allContainer || this.create(),
            this.center(),
            this.isMobileUI && window.gigya.utils.DOM.addClassToElement(document.documentElement, this._dialogClasses.document_mobile),
            this._allContainer.style.visibility = "visible",
            this._allContainer.focus(),
            window.gigya.utils.tabbable.bindTabLooping(this.getModalDialogContainer())
        }
        ,
        i.prototype.hideAll = function() {
            this._allContainer && (this._allContainer.style.visibility = "hidden",
            this.isMobileUI && (this.removeWindowResizeListener(),
            document.documentElement.style.height = "",
            window.gigya.utils.DOM.removeClassFromElement(document.documentElement, this._dialogClasses.document_mobile)),
            window.gigya.utils.tabbable.unbindTabLooping(this._contentContainer))
        }
        ,
        i.prototype.showMainDialog = function() {
            this._mainContainer && (this._mainContainer.style.visibility = "visible")
        }
        ,
        i.prototype.hideMainDialog = function() {
            this._mainContainer && (this._mainContainer.style.visibility = "visibile")
        }
        ,
        i.prototype.showLoading = function() {
            this._loader && this._loader.show()
        }
        ,
        i.prototype.hideLoading = function() {
            this._loader && this._loader.hide()
        }
        ,
        i.prototype.changeToMobile = function() {
            this._allContainer.className = this._dialogClasses.all_mobile
        }
        ,
        i.prototype.changeToWeb = function() {
            this._allContainer.className = this._dialogClasses.all_web
        }
        ,
        i.prototype.isLoading = function() {
            return this._loader && this._loader.isActive()
        }
        ,
        i.prototype.resize = function(e) {
            e && (window.gigya.logger.debug("resizing and centering modal dialog"),
            this.applyStyle("height", e.height),
            this.applyStyle("minHeight", e.minHeight),
            this.applyStyle("width", e.width),
            this.applyStyle("minWidth", e.minWidth),
            this.center())
        }
        ,
        i.prototype.applyStyle = function(e, i) {
            null === i ? this._mainContainer.style[e] = "" : i && (this._mainContainer.style[e] = i)
        }
        ,
        i.prototype.addWindowResizeListener = function() {
            window.gigya.utils.DOM.addEventListener(window, "resize", this.onWindowResizeEvent)
        }
        ,
        i.prototype.removeWindowResizeListener = function() {
            window.gigya.utils.DOM.removeEventListener(window, "resize", this.onWindowResizeEvent)
        }
        ,
        i.prototype.onWindowResize = function() {
            this.isMobileUI && this.adjustWindowHeight()
        }
        ,
        i.prototype.adjustWindowHeight = function() {
            document.documentElement.style.height = window.getComputedStyle(this._allContainer).height
        }
        ,
        i.prototype.center = function() {
            if (this.isMobileUI)
                this.adjustWindowHeight(),
                this.addWindowResizeListener();
            else {
                var e = !1;
                if (this.isLoading() && (this.hideLoading(),
                e = !0),
                "absolute" == r.getStyle(this._allContainer, "position")) {
                    var i = window.gigya.utils.viewport.getMiddleCenter()
                      , t = this._allContainer.offsetWidth
                      , n = this._allContainer.offsetHeight
                      , o = i.top - Math.floor(n / 2)
                      , a = i.left - Math.round(t / 2);
                    o < 10 && (o = 10),
                    a < 10 && (a = 10),
                    this._allContainer.style.top = o + "px",
                    this._allContainer.style.left = a + "px"
                } else {
                    var l = window.gigya.utils.viewport.getInnerSize()
                      , s = Math.max(0, (l.h - this._allContainer.clientHeight) / 2)
                      , g = Math.max(0, (l.w - this._allContainer.clientWidth) / 2);
                    this._allContainer.style.top = s.toString() + "px",
                    this._allContainer.style.left = g.toString() + "px"
                }
                e && this.showLoading()
            }
            this.dispatchEvent("onAfterModalCenter")
        }
        ,
        i.prototype.create = function(e) {
            var i = this;
            void 0 === e && (e = !0);
            var t = window.gigya.utils.DOM.getCenteredDivID(this._triggerMethod);
            this.params.newModal && (t += (new Date).getTime()),
            this._allContainer = window.gigya.utils.DOM.createTopLevelDiv(t),
            e && this.hideAll(),
            this._allContainer.innerHTML = window.gigya.utils.templates.fill(this.params.modalTemplate, {
                modalID: t,
                title: this.params.captionText,
                closeImage: this.params.closeImage,
                overlayDisplay: !this.isMobileUI && this.params.dimDialogBackground ? "block" : "none"
            }),
            this._allContainer.setAttribute("role", "dialog"),
            this._allContainer.setAttribute("aria-labelledby", "gigya-screen-dialog-caption-" + t),
            this._allContainer.setAttribute("tabindex", "-1"),
            s.addCss(this.params.modalCss, void 0, !1),
            this._mainContainer = window.gigya.utils.DOM.getElementsByClass(this._allContainer, this._dialogClasses.main)[0],
            this._captionContainer = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.caption)[0],
            this._closeButtonElement = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.closeButton)[0],
            this._closeButtonElement && window.gigya.utils.DOM.addEventListener(this._closeButtonElement, "click", function(e) {
                window.gigya.utils.DOM.disableDefaultEventHandling(e),
                i.hideAll(),
                i.params.onModalClose && i.params.onModalClose(l.CloseReasons.canceled)
            }),
            this._contentContainer = window.gigya.utils.DOM.getElementsByClass(this._mainContainer, this._dialogClasses.content, !0)[0],
            this._contentContainer.id = "gigya-modal-plugin-container-" + this._triggerMethod,
            this._loader = new a.LoadDimmer(this._contentContainer),
            this.isMobileUI ? window.gigya.utils.DOM.addClassToElement(this._allContainer, this._dialogClasses.all_mobile) : window.gigya.utils.DOM.addClassToElement(this._allContainer, this._dialogClasses.all_web),
            this.center()
        }
        ,
        i.prototype.getMainContainer = function() {
            return this._mainContainer
        }
        ,
        i.prototype.getContentContainer = function() {
            return this._contentContainer
        }
        ,
        i.prototype.getCaptionContainer = function() {
            return this._captionContainer
        }
        ,
        i.prototype.getModalDialogContainer = function() {
            return this._allContainer
        }
        ,
        i.prototype.getLoadingIndicator = function() {
            return this._loader
        }
        ,
        i.prototype.dispose = function() {
            this.hideAll(),
            this._allContainer && this._allContainer.parentElement && this._allContainer.parentElement.removeChild(this._allContainer),
            this._loader && this._loader.dispose(),
            delete this.params,
            e.prototype.dispose.call(this)
        }
        ,
        i
    }(window.gigya._.BaseObject);
    i.ModalDialog = g
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.dialogClasses = {
        document_mobile: "gigya-mobile-modal-mode",
        all_web: "gigya-screen-dialog",
        all_mobile: "gigya-screen-dialog-mobile",
        main: "gigya-screen-dialog-main",
        caption: "gigya-screen-dialog-caption",
        closeButton: "gigya-screen-dialog-close",
        content: "gigya-screen-dialog-inner"
    },
    i.legacyDialogClasses = window.gigya.utils.object.clone(i.dialogClasses),
    i.legacyDialogClasses.main = i.legacyDialogClasses.content
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.getCombination = function e(i, t) {
        if (void 0 === t && (t = 0),
        t || (t = 0),
        !i || 0 == i.length)
            return [];
        var n = i[t];
        if (t == i.length - 1) {
            for (var o = [], a = 0; a < n.length; a++)
                o.push([n[a]]);
            return o
        }
        o = [];
        var r = e(i, t + 1);
        if (n)
            for (a = 0; a < n.length; a++)
                for (var l = 0; l < r.length; l++)
                    o.push([n[a]].concat(r[l]));
        return o
    }
    ,
    i.resolveProviders = function(e, i, t) {
        for (var n = window.gigya.utils.array.getArrayFromString(e, ",", !0), o = window.gigya.utils.array.getArrayFromString(i, ",", !0), a = window.gigya.utils.array.getArrayFromString(t, ",", !0), r = 0; r < o.length; r++)
            window.gigya.utils.array.removeByValue(n, o[r]);
        var l = window.gigya._.providers.getProvidersByName(n.join(","));
        for (r = 0; r < o.length; r++)
            window.gigya.utils.array.removeByProperty(l, "name", o[r]);
        return window.gigya.socialize.getProvidersForRequiredCapabilities(l, a)
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.fixCss = function(e) {
        return (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode) && (e = e.replace(/display:inline-block/g, "display:inline-block;zoom:1;*display:inline")),
        e.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");background: linear-gradient(top,  $1,  $2);background: -ms-linear-gradient(top left, $1, $2);background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));background: -moz-linear-gradient(top,  $1,  $2)')
    }
    ;
    var t = {};
    i.addCss = function(e, i, n, o) {
        if (void 0 === n && (n = !0),
        e && "" != e && (e instanceof Array && (e = e.join(" ")),
        i && (e = e.replace(/([^\s}]*\.gig)/g, i + " $1")),
        o || (o = window.gigya.utils.object.getMurmurHash(e).toString()),
        !t[o] || n)) {
            t[o] = !0;
            var a = document.createElement("style");
            a.type = "text/css";
            var r = document.createTextNode(e);
            a.styleSheet ? null != r.value ? a.styleSheet.cssText = r.value : a.styleSheet.cssText = r.nodeValue : a.appendChild(r);
            var l = document.getElementsByTagName("head")
              , s = document.body;
            (l.length > 0 ? l[0] : s).appendChild(a)
        }
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var t = function() {
        function e(e) {
            void 0 === e && (e = "object" == typeof console && console.log ? console.log : function() {}
            ),
            this._logger = e,
            this._intervalID = void 0,
            this._actions = []
        }
        return e.prototype.addActions = function() {
            for (var e = this, i = [], t = 0; t < arguments.length; t++)
                i[t] = arguments[t];
            window.gigya.utils.array.forEach(i, function(i) {
                e._actions.push(i)
            })
        }
        ,
        e.prototype.hasActions = function() {
            return this._actions.length > 0
        }
        ,
        e.prototype.start = function(e, i) {
            var t = this;
            if (void 0 === i && (i = !1),
            this.isStarted())
                return 1;
            if (!this.hasActions && !i)
                throw "Poller has no actions to perform on interval";
            this._intervalID = setInterval(function() {
                window.gigya.utils.array.forEach(t._actions, function(e) {
                    e instanceof Function ? e() : e.act()
                })
            }, e)
        }
        ,
        e.prototype.stop = function() {
            this._intervalID && (clearInterval(this._intervalID),
            delete this._intervalID)
        }
        ,
        e.prototype.isStarted = function() {
            return Boolean(this._intervalID)
        }
        ,
        e.prototype.dispose = function() {
            for (var e in this.stop(),
            this._actions)
                this._actions[e]instanceof Function || !this._actions.hasOwnProperty(e) || this._actions[e].dispose();
            delete this._actions,
            delete this._logger
        }
        ,
        e
    }();
    i.Poller = t
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.getTemplates = function(e) {
        var i = [];
        for (var t in e)
            i.push(window.gigya._.plugins.resources.html[e[t]]);
        return window.gigya.utils.object.merge(i)
    }
    ,
    i.getCss = function(e) {
        var i = [];
        for (var t in e)
            i.push(window.gigya._.plugins.resources.css[e[t]]);
        return window.gigya.utils.object.merge(i)
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(0)
      , o = function() {
        function e(e, i, t) {
            this._object = e,
            this._propery = i,
            this.callback = t
        }
        return e.prototype.act = function() {
            this._object[this._propery] || this.callback()
        }
        ,
        e.prototype.dispose = function() {
            delete this._object,
            delete this.callback
        }
        ,
        e
    }();
    i.InvalidPropertyAction = o;
    var a = function() {
        function e(e) {
            this.callback = e,
            this._last = {
                width: void 0,
                height: void 0
            }
        }
        return e.prototype.act = function() {
            var e = this.getCurrSize();
            this.isChanged(this._last, e) && this.callback(this._last, e),
            this._last = e
        }
        ,
        e.prototype.dispose = function() {
            delete this.callback
        }
        ,
        e.prototype.getCurrSize = function() {}
        ,
        e.prototype.isChanged = function(e, i) {
            return i.width != this._last.width || i.height != this._last.height
        }
        ,
        e
    }();
    i.SizeChangeAction = a;
    var r = function(e) {
        function i(i, t) {
            var n = e.call(this, t) || this;
            return n._container = i,
            n
        }
        return n.__extends(i, e),
        i.prototype.getCurrSize = function() {
            return {
                width: this._container && this._container.style ? this._container.clientWidth : void 0,
                height: this._container && this._container.style ? this._container.clientHeight : void 0
            }
        }
        ,
        i.prototype.dispose = function() {
            delete this._container,
            e.prototype.dispose.call(this)
        }
        ,
        i
    }(a);
    i.ContainerSizeAction = r;
    var l = function(e) {
        function i(i) {
            return e.call(this, i) || this
        }
        return n.__extends(i, e),
        i.prototype.getCurrSize = function() {
            var e = window.gigya.utils.viewport.getInnerSize()
              , i = window.gigya.utils.viewport.getOrientation();
            return {
                width: e.w,
                height: e.h,
                orientation: i
            }
        }
        ,
        i.prototype.isChanged = function(i, t) {
            return e.prototype.isChanged.call(this, i, t) || i.orientation != t.orientation
        }
        ,
        i
    }(a);
    i.ViewportSizeAction = l
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var t = "en";
    function n(e, i) {
        var t = e.indexOf("-");
        return t > 0 ? e.substr(0, t) : e !== i ? i : void 0
    }
    i.getLocalizedText = function e(i, o, a, r, l) {
        if ("te-st" == a)
            return "TEST_" + o.substring(0, 10);
        a || (a = t);
        var s = window.gigya.i18n[i][a];
        if (!s)
            return e(i, o, n(a, t), r, l);
        var g = s[o];
        return g && r && (g = g.replace(r, l)),
        g
    }
    ,
    i.getTranslationsFromContainer = function e(i, o, a, r) {
        if (void 0 === a && (a = !0),
        void 0 === r && (r = t),
        i && i.translations) {
            if (i.translations[o])
                return i.translations[o];
            var l = n(o, r);
            return a && l ? e(i, l) : void 0
        }
    }
    ,
    i.getFallbackLang = n
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(117)
      , o = t(118);
    function a(e) {
        var i, t = e.split("@"), n = document.getElementById(t[2] + "_" + t[1]), o = t[2];
        null == (i = window.gigya.utils.DOM._pseudoContainers[o]) && (i = document.getElementById(t[2]));
        var a = null;
        null != i && (a = i.Reqs);
        var r = null;
        return null != a && (r = a[parseInt(t[0])]),
        {
            rid: e,
            container: i,
            Reqs: a,
            req: r,
            swf: n
        }
    }
    i._fixGrayPosition = function() {
        var e = document.getElementById("darkenScreenObject");
        if (e) {
            var i = document.documentElement
              , t = document.body
              , n = i.scrollTop;
            0 == n && (n = t.scrollTop);
            var o = i.scrollLeft;
            0 == o && (o = t.scrollLeft);
            var a = i.clientHeight;
            0 == a && (a = t.clientHeight);
            var r = i.clientWidth;
            0 == r && (r = t.clientWidth),
            window.gigya.localInfo.isIE6 && (r -= 1),
            e.style.top = n.toString(),
            e.style.left = o.toString()
        }
    }
    ,
    i._fixGraySize = function() {
        var e = document.getElementById("darkenScreenObject");
        if (e) {
            var i = document.documentElement
              , t = document.body
              , n = i.clientHeight;
            0 == n && (n = t.clientHeight);
            var o = i.clientWidth;
            0 == o && (o = t.clientWidth),
            window.gigya.localInfo.isIE6 && (o -= 1),
            e.style.width = o + "px",
            e.style.height = n + "px"
        }
    }
    ,
    i._createJSPopup = function(e, i, t, o) {
        var r = a(e).req
          , l = r.p
          , s = r.c;
        window.gigya.utils.validation.isExplicitFalse(l.showCaption) && (o = !0);
        var g = document.getElementById(l.containerID);
        r.container = g;
        var d = i.Resolve("+/config/body/background")
          , c = i.Resolve("+/config/body/captions")
          , p = '<table role="presentation" style="' + n.getStyleString(d) + ';empty-cells:show;" cellpadding="0" cellspacing="0" >';
        o ? p += "<tr><td>" : (p += '<tr style="' + n.getStyleString(c) + '"><td><table role="presentation" style="width:100%" width="100%" cellpadding="0" cellspacing="0"><tr id="' + l.containerID + '_caption"><td style="vertical-align:middle"><div style="' + n.getStyleString(c) + ';padding:7px">' + t + '</div></td><td style="vertical-align:middle">',
        p += '<div align="right" style="padding-right: 7px; cursor: pointer;' + n.getStyleString(c) + '"><img onclick="gigya.services.socialize._closeComponent(\'' + e + '\', true);"  src="' + window.gigya._.getCdnResource("/gs/i/HTMLLogin/closeIcon.gif") + '" alt="" /></div></td></tr></table></td></tr><tr><td colspan="2">'),
        p += '<div id="' + l.containerID + '_container"></div></td></tr></table>',
        g.innerHTML = p;
        var u = {}
          , h = {};
        for (var y in l)
            u[y] = l[y];
        for (y in s)
            h[y] = s[y];
        var f = document.getElementById(u.containerID + "_caption");
        return u.height = u.height - 2 * d["frame-thickness"],
        o || (u.height -= f.offsetHeight),
        u.width = u.width - 2 * d["frame-thickness"],
        window.gigya.utils.DOM._popupContainers[u.containerID] = g,
        u.containerID = u.containerID + "_container",
        {
            c: h,
            p: u
        }
    }
    ,
    i._createJSPopup2 = function(e, i, t, r, l, s) {
        var g = a(e).req
          , d = g.p
          , c = g.c
          , p = document.getElementById(d.containerID);
        g.container = p;
        var u = i.Resolve("+/config/body/captions");
        t || (t = 10),
        r || (r = window.gigya._.getCdnResource("/gs/i/Dialog/DialogBg_"));
        var h, y = "width:" + t + "px;height:" + t + "px";
        s && (h = "1px solid #555555");
        var f = '<table role="presentation" style="font-size:1px;padding:0px;margin:0px;vertical-align:middle;font-size:1px;line-height:1px;empty-cells:show;" cellpadding="0" cellspacing="0" >';
        f += '<tr><td height="' + t + '" style="font-size:1px"><div style="height:' + t + 'px"><img src="' + r + 'TopLeft.png" style="' + y + '" alt="" /></div></td><td height="' + t + '" style="background-image:url(\'' + r + 'filler.png\');bakground-repeat:repeat"></td><td height="' + t + '" style="font-size:1px;"><div style="height:' + t + 'px"><img style="' + y + '" src="' + r + 'TopRight.png" alt="" /></div></td></tr>',
        l && (f += "<tr><td style=\"background-image:url('" + r + 'filler.png\');background-repeat:repeat"></td><td><table width="100%" cellspacing="0" cellpadding="0" style="border-top:' + h + ";border-left:" + h + ";border-right:" + h + ';width:100%;background-color:#FFFFFF"><tr><td style="padding-top:10px;padding-left:10px;' + n.getStyleString(u) + '">' + l + '</td><td align="right" valign="top" style="' + n.getStyleString(u) + '"><div style="padding-right:5px;padding-top:5px;text-align:right;"><img style="cursor:pointer" onclick="gigya.services.socialize._closeComponent(\'' + e + '\', true);" src="' + r + 'close.png" alt="" /></div></td></tr></table></td><td style="background-image:url(\'' + r + "filler.png');background-repeat:repeat\"></td></tr>"),
        f += "<tr><td style=\"background-image:url('" + r + 'filler.png\');background-repeat:repeat"></td><td><div style="border-bottom:' + h + ";border-left:" + h + ";border-right:" + h + ';background-color:#FFFFFF" id="' + d.containerID + '_container"></div></td><td style="background-image:url(\'' + r + "filler.png');background-repeat:repeat\"></td></tr>",
        f += '<tr><td height="' + t + '" style="font-size:1px;"><div style="height:' + t + 'px"><img style="' + y + '" src="' + r + 'BottomLeft.png" alt="" /></div></td><td height="' + t + '" style="background-image:url(\'' + r + 'filler.png\');bakground-repeat:repeat"></td><td height="' + t + '" style="font-size:1px;"><div style="height:' + t + 'px"><img style="' + y + '" src="' + r + 'BottomRight.png" alt="" /></div></td></tr></table>',
        p.innerHTML = f;
        var w = {}
          , m = {};
        for (var v in d)
            w[v] = d[v];
        for (v in c)
            m[v] = c[v];
        return window.gigya.utils.DOM._popupContainers[w.containerID] = p,
        w.containerID = w.containerID + "_container",
        w.height = w.height - 2 * t,
        l && ("" == l.replace(/ /g, "") ? w.height -= 10 : w.height -= o.measureText(l, u).h + 10),
        w.width = w.width - 2 * t,
        {
            c: m,
            p: w
        }
    }
    ,
    i._parseRID = a
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.getStyleString = function(e, i) {
        var t = "";
        return t += "line-height: normal;",
        i && (t += "cursor:pointer;"),
        e.underline && (t += "text-decoration:underline;"),
        e.font && (t += "font-family:" + e.font + ";"),
        e.size && (t += "font-size:" + e.size + "px;"),
        e.color && (t += "color:" + e.color + ";"),
        e.bold && (t += "font-weight:bold;"),
        e["frame-thickness"] && (t += "border-style:solid; border-width:" + e["frame-thickness"] + "px;"),
        e["frame-color"] && (t += "border-color:" + e["frame-color"] + ";"),
        e["background-color"] && (t += "background-color:" + e["background-color"] + ";"),
        t
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.measureText = function(e, i, t) {
        void 0 === t && (t = 0),
        (isNaN(t) || t < 0) && (t = 0);
        var n = document.getElementById("gigya_ruler")
          , o = document.getElementById("gigya_ruler_text");
        null == n && (n = document.createElement("div"),
        o = document.createElement("span"),
        n.id = "gigya_ruler",
        o.id = "gigya_ruler_text",
        n.style.visibility = "hidden",
        n.style.position = "absolute",
        n.style.margin = "0px",
        n.style.padding = "0px",
        n.appendChild(o),
        window.gigya.utils.DOM.appendToBody(n)),
        i && (n.style.lineHeight = i.size + "px",
        n.style.fontFamily = i.font,
        n.style.fontSize = i.size + "px",
        n.style.fontWeight = "true" == ("" + i.bold).toLowerCase() ? "bold" : ""),
        t ? (n.style.whiteSpace = "",
        n.style.width = t + "px") : (n.style.whiteSpace = "nowrap",
        n.style.width = "auto"),
        n.style.overflow = "hidden",
        n.style.display = "",
        o.innerHTML = e;
        var a = o.offsetWidth
          , r = o.offsetHeight;
        return 0 != a && 0 != r || (a = n.offsetWidth,
        r = n.offsetHeight),
        n.style.display = "none",
        {
            w: a,
            h: r
        }
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.CreateXMLFromString = function(e) {
        var i = null;
        if (window.ActiveXObject && (window.gigya.localInfo.isIE8 || window.gigya.localInfo.isIE9))
            try {
                (i = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                i.loadXML(e)
            } catch (e) {
                window.gigya.log.addLog("Failed to create Microsoft.XMLDOM ActiveX parser", e)
            }
        else
            i = (new DOMParser).parseFromString(e, "text/xml");
        return i
    }
    ,
    i.CopyProperties = function(e, i, t, n) {
        if (void 0 === t && (t = ""),
        void 0 === i && (i = {}),
        null != n)
            for (var o in e)
                i[t + o] = n(o, e[o]);
        else
            for (var a in e)
                i[t + a] = e[a];
        return i
    }
    ,
    i.CollectAttributesFromXMLPathToObject = function(e, i, t, n, o) {
        for (var a = 0; a < i.length && void 0 !== e; a++)
            null != (e = e.childNodes[i[a]]) && n && this.CopyProperties(e.attributes, t, "", o);
        void 0 !== e && this.CopyProperties(e.attributes, t, "", o)
    }
    ,
    i.mergeNodes = function(e, i) {
        void 0 === i.attributes && (i.attributes = {}),
        void 0 === i.childNodes && (i.childNodes = {});
        var t, n = i.attributes, o = e.attributes;
        if (o)
            for (var a = 0; a < o.length; a++)
                null != o[a].value ? n[o[a].nodeName] = o[a].value : n[o[a].nodeName] = o[a].nodeValue;
        for (var r = 0; r < e.childNodes.length; r++) {
            var l = e.childNodes[r];
            void 0 === (t = i.childNodes[l.nodeName]) && (t = i.childNodes[l.nodeName] = {
                attributes: {},
                childNodes: {}
            }),
            this.mergeNodes(l, t)
        }
        return i
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, i, t) {
    (function(e) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t(189)
          , o = t(190)
          , a = t(194)
          , r = t(47)
          , l = t(25)
          , s = t(198)
          , g = t(199)
          , d = t(48)
          , c = t(200)
          , p = t(201)
          , u = t(202)
          , h = t(203)
          , y = t(73)
          , f = t(108)
          , w = t(109)
          , m = t(112)
          , v = t(114)
          , b = t(204)
          , x = t(205)
          , _ = t(206)
          , C = t(207)
          , M = t(208)
          , I = t(209)
          , D = t(110)
          , O = t(210)
          , k = t(115)
          , E = t(211)
          , S = t(212)
          , P = t(213)
          , T = t(76)
          , F = t(74)
          , z = t(214)
          , A = t(215)
          , B = t(216)
          , L = t(118)
          , j = t(217)
          , R = t(57)
          , N = t(111)
          , H = t(117)
          , U = t(113)
          , $ = t(75)
          , W = t(218)
          , G = t(116)
          , Z = t(119)
          , q = t(219)
          , V = t(220)
          , X = t(221)
          , J = t(222)
          , K = t(223);
        t(224),
        t(225),
        t(226),
        t(227),
        t(228),
        t(229),
        t(230),
        window.gigya._ || (window.gigya._ = {}),
        window.gigya._.plugins || (window.gigya._.plugins = {}),
        window.gigya._.plugins.resources || (window.gigya._.plugins.resources = {}),
        window.gigya._.plugins.resources.html || (window.gigya._.plugins.resources.html = {}),
        window.gigya._.plugins.resources.html.base || (window.gigya._.plugins.resources.html.base = {}),
        window.gigya._.plugins.resources.css || (window.gigya._.plugins.resources.css = {}),
        window.gigya._.plugins.resources.css.base || (window.gigya._.plugins.resources.css.base = {}),
        window.gigya._.plugins.utUtils || (window.gigya._.plugins.utUtils = {}),
        window.gigya._.plugins.utils || (window.gigya._.plugins.utils = {}),
        window.gigya._.plugins.utils.Collections || (window.gigya._.plugins.utils.Collections = {}),
        window.gigya._.plugins.utils.css || (window.gigya._.plugins.utils.css = {}),
        window.gigya._.plugins.utils.URL || (window.gigya._.plugins.utils.URL = {}),
        window.gigya._.plugins.utils.DOM || (window.gigya._.plugins.utils.DOM = {}),
        window.resolver || (window.resolver = {});
        var Y = window.resolver;
        window.gigya._.plugins.modal || (window.gigya._.plugins.modal = {}),
        window.gigya._.plugins.pollerActions || (window.gigya._.plugins.pollerActions = {}),
        window.gigya.global || (window.gigya.global = {}),
        window.gigya.global.date || (window.gigya.global.date = {}),
        window.gigya.utils || (window.gigya.utils = {}),
        window.gigya.utils.object || (window.gigya.utils.object = {}),
        window.gigya.pluginUtils || (window.gigya.pluginUtils = {}),
        window.gigya.pluginUtils.lang || (window.gigya.pluginUtils.lang = {}),
        window.gigya.pluginUtils.animation || (window.gigya.pluginUtils.animation = {}),
        window.gigya.services || (window.gigya.services = {}),
        window.gigya.services.socialize || (window.gigya.services.socialize = {}),
        window.gigya.pluginUtils.DOM || (window.gigya.pluginUtils.DOM = {}),
        window.gigya.utils.DOM || (window.gigya.utils.DOM = {}),
        window.gigya.pluginUtils.css || (window.gigya.pluginUtils.css = {}),
        window.gigya.pluginUtils.layout || (window.gigya.pluginUtils.layout = {}),
        window.gigya.pluginUtils.text || (window.gigya.pluginUtils.text = {}),
        window.gigya.global.XMLUtils || (window.gigya.global.XMLUtils = {}),
        window.gigya.global.resolver || (window.gigya.global.resolver = {}),
        window.gigya.pluginUtils.validation || (window.gigya.pluginUtils.validation = {}),
        window.gigya.pluginUtils.domain || (window.gigya.pluginUtils.domain = {}),
        e(window.gigya._.plugins, n, r, l, h, y, b, x, _, C, M),
        e(window.gigya._.plugins.resources.html.base, o),
        e(window.gigya._.plugins.resources.css.base, a),
        e(window.gigya._.plugins.utUtils, s),
        e(window.gigya._.plugins.utils.Collections, g),
        e(window.gigya._.plugins.utils.css, d, N),
        e(window.gigya._.plugins.utils.URL, c, W),
        e(window.gigya._.plugins.utils.DOM, p, z),
        e(Y, u),
        e(window.gigya._.plugins.modal, f, w),
        e(window.gigya._, m),
        e(window.gigya._.plugins.pollerActions, v),
        e(window.gigya.global.date, I),
        e(window.gigya.global, D, S, F, R, $, q, K),
        e(window.gigya.utils.object, O),
        e(window.gigya.pluginUtils.lang, k),
        e(window.gigya.pluginUtils.animation, E),
        e(window.gigya.services.socialize, P, H, G),
        e(window.gigya.pluginUtils.DOM, T),
        e(window.gigya.utils.DOM, A),
        e(window.gigya.pluginUtils.css, B),
        e(window.gigya.pluginUtils.layout, L),
        e(window.gigya.pluginUtils.text, j),
        e(window.gigya._.plugins.resources, U),
        e(window.gigya.global.XMLUtils, Z),
        e(window.gigya.global.resolver, V),
        e(window.gigya.pluginUtils.validation, X),
        e(window.gigya.pluginUtils.domain, J),
        window.gigya.utils.object.add(window.gigya.pluginUtils.lang, {
            getDateString: function(e, i) {
                if (e && e.dateFormat) {
                    var t = e.dateFormat
                      , n = i.getDate()
                      , o = i.getMonth() + 1
                      , a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i.getMonth()]
                      , r = i.getFullYear();
                    return t.replace(/%dd/g, ("0" + n).slice(-2)).replace(/%d/g, n).replace(/%MMMM/g, a).replace(/%MMM/g, a.substr(0, 3)).replace(/%MM/g, ("0" + o).slice(-2)).replace(/%M/g, o).replace(/%yyyy/g, r).replace(/%yy/g, r.toString().slice(-2))
                }
            }
        })
    }
    ).call(this, t(0).__assign)
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(0)
      , o = t(108)
      , a = t(25)
      , r = t(73)
      , l = t(112)
      , s = t(113)
      , g = t(114)
      , d = t(76)
      , c = t(47)
      , p = t(48)
      , u = t(115);
    i.cssFlags = {};
    var h = function(e) {
        function t(i, n, o) {
            var r = e.call(this, i, n, !1) || this;
            return r.params = i,
            r.explicitParams = n,
            r.injectionInfo = o,
            r._pixelRatio = t.globalPixelRatio,
            r._imgBase = t.globalImgBase,
            r._imgExt = "png",
            r.MOBILE_MODAL_MIN_WIDTH = 400,
            r.lang = r.params.lang,
            r._style = a.PluginStyle.modern,
            r._poller = new l.Poller,
            r.POLL_INTERVAL = 150,
            r.config = window.gigya.utils.object.merge([r.injectionInfo, r.getConfig()]),
            r.localizedJsName = r.getTranslationJsName(),
            r
        }
        return n.__extends(t, e),
        t.prototype.onRefreshExternalComponentsEvent = function() {
            return this.getEvent("onRefreshExternalComponentsEvent")
        }
        ,
        t.prototype.refreshExternalComponents = function() {
            this.dispatchPluginEvent("onRefreshExternalComponentsEvent")
        }
        ,
        t.prototype.getTranslationJsName = function() {
            var e = this.config.jsName;
            return -1 === (e = e.split("_v")[0]).indexOf(".js") && (e += ".js"),
            e
        }
        ,
        t.prototype.start = function() {
            var e = this;
            if (this.params.containerID || this.config.allowModal)
                if (this.params.containerID) {
                    if (this.container = document.getElementById(this.params.containerID),
                    !this.container)
                        return void this.dispatchInvalidParamError("containerID");
                    this.container.innerHTML = "",
                    this.containerID = this.params.containerID
                } else
                    this.isModal = !0,
                    this.params = window.gigya.utils.object.merge([this.config.defaultModalParams, this.params]);
            else
                this.dispatchInvalidParamError("containerID");
            this.validateParams() && window.gigya.logger.group("init " + this.injectionInfo.name + " (" + this.containerID + ")").endWhen(new gigya.Promise(function(i) {
                e.initUI(),
                e.params._noInit ? (e.loadComplete(),
                i()) : e.init(function(t) {
                    e.loadComplete(t),
                    i()
                })
            }
            ))
        }
        ,
        t.prototype.initUI = function() {
            var e = this;
            this._templates = s.getTemplates(["base", this.config.name]),
            this._css = s.getCss(["base", this.config.name]);
            var i = window.gigya._.DeviceTypes._undefined;
            this.params.deviceType && (i = window.gigya._.DeviceTypes[this.params.deviceType.toLowerCase()]),
            i = i || this.getConfig().defaultDeviceType || window.gigya._.DeviceTypes.desktop,
            this.params.deviceType = window.gigya._.DeviceTypes[i],
            this.isMobileUI = i == window.gigya._.DeviceTypes.mobile || i == window.gigya._.DeviceTypes.auto && window.gigya.localInfo.isMobile && window.gigya.localInfo.isMobileApp,
            this.isRtl = "he" == this.lang || "ar" == this.lang,
            this.initContainer(),
            this._style != a.PluginStyle.none && this.injectCss(),
            this._poller.addActions(new g.InvalidPropertyAction(this,"container",function() {
                return e.dispose()
            }
            ))
        }
        ,
        t.prototype.loadComplete = function(e) {
            var i = this;
            void 0 === e && (e = !0),
            e && (this.dispatchPluginEvent("load"),
            this.container && (this.isModal ? (this._modalDialog && !this.config.disableModalContainerInit && this._modalDialog.showAll(),
            this.config.enableViewportPolling && this._poller.addActions(new g.ViewportSizeAction(function(e, t) {
                i.onViewportSizeChanged(e, t),
                i.centerModal(),
                i.refreshExternalComponents()
            }
            ))) : !this.config.enableSizePolling || this.params.width && -1 === this.params.width.toString().indexOf("%", this.params.width.length - 1) || this._poller.addActions(new g.ContainerSizeAction(this.container,function(e, t) {
                i.resizePlugin(e, t),
                i.refreshExternalComponents()
            }
            )),
            this._poller.hasActions() && this._poller.start(this.POLL_INTERVAL)))
        }
        ,
        t.prototype.initContainer = function() {
            this.isModal ? this.initModalContainer() : (window.gigya.utils.DOM.setSize(this.container, this.params.width, this.params.height, !1),
            this.addMetaDataClasses(this.container),
            this.params.responsive && (this.container.style.width = "auto"),
            this._loadingIndicator = new r.LoadDimmer(this.container))
        }
        ,
        t.prototype.initModalContainer = function() {
            this._style = this.getPluginStyle(),
            this.createModalDialog(),
            this._captionElement = this._modalDialog.getCaptionContainer(),
            this.container = this._modalDialog.getContentContainer(),
            this.containerID = this.container.id,
            this._loadingIndicator = this._modalDialog.getLoadingIndicator()
        }
        ,
        t.prototype.addMetaDataClasses = function(e) {
            var i = this.getPluginStyle();
            switch (i) {
            case a.PluginStyle.legacy:
            case a.PluginStyle.modern:
                window.gigya.utils.DOM.addClassToElement(e, a.getPluginStyleClass(i))
            }
            d.addBrowserInfoClassesToElement(e)
        }
        ,
        t.prototype.getPluginStyle = function() {
            return a.PluginStyle[this.params.dialogStyle] || this.config.defaultDialogStyle || this._style
        }
        ,
        t.prototype.setContainerMinSize = function() {
            this.params.height && "auto" != this.params.height && -1 == this.params.height.indexOf("%") && (this.container.style.minHeight = this.params.height + "px"),
            this.params.width && "auto" != this.params.width && -1 == this.params.width.indexOf("%") && (this.container.style.minWidth = this.params.width + "px")
        }
        ,
        t.prototype.createModalDialog = function() {
            var e, i, t, n, r = this;
            e = this.params.captionText ? this.params.captionText : this.params.captionTextKey ? this.getText(this.params.captionTextKey) : "&nbsp;",
            t = void 0 !== this.params.dimDialogBackground ? this.params.dimDialogBackground : !(!this.config.defaultModalParams || void 0 === this.config.defaultModalParams.dimDialogBackground) && this.config.defaultModalParams.dimDialogBackground;
            var l = this.params.modalCss
              , s = !1;
            if (!l)
                switch (this._style) {
                case a.PluginStyle.modern:
                    l = this.getCss().modern_modal,
                    n = this.getPhotoFullName("gm/close");
                    break;
                case a.PluginStyle.legacy:
                    s = !0,
                    l = this.getCss().legacy_modal,
                    n = this._imgBase + "gm/CloseButton." + this._imgExt;
                    break;
                case a.PluginStyle.none:
                    l = "",
                    n = this.getPhotoFullName("gm/close");
                    break;
                default:
                    throw new Error("unrecognized dialog style")
                }
            l = window.gigya.utils.templates.fill(l, {
                imgBase: this._imgBase
            }),
            i = this.params.closeImage ? this.params.closeImage : window.gigya.utils.templates.fill(this.getTemplates().modalCloseButton, {
                imgUrl: this.params.closeImageUrl || n,
                imgHeight: this.params.closeImageHeight || 15,
                imgWidth: this.params.closeImageWidth || 15
            }),
            this._modalDialog = new o.ModalDialog(this.injectionInfo.methodName,this.isMobileUI,{
                modalTemplate: this.params.modalTemplate || (s ? this.getTemplates().legacyModal : this.getTemplates().modal),
                modalCss: l,
                captionText: e,
                closeImage: i,
                dimDialogBackground: t,
                newModal: this.params.newModal,
                onModalClose: function(e) {
                    return r.close(c.CloseReasons[e])
                }
            },s),
            this.addMetaDataClasses(this._modalDialog.getModalDialogContainer());
            window.gigya.utils.keyboard.onHotKeyClicked({
                key: 27
            }, function() {
                r.close()
            })
        }
        ,
        t.prototype.injectCss = function() {
            var e = ""
              , t = this.params.cssPrefix
              , n = this.getCss()
              , o = this.config.jsName;
            i.cssFlags[o] || (i.cssFlags[o] = {});
            var a = i.cssFlags[o];
            !t && this.addedCss || (e = this.addCssIfDidntLoad("reset", n, a, e),
            this.isRtl && (e = this.addCssIfDidntLoad("resetRtl", n, a, e)),
            e = this.addCssIfDidntLoad("global", n, a, e),
            this.isRtl && (e = this.addCssIfDidntLoad("globalRtl", n, a, e)),
            this.isMobileUI ? (e = this.addCssIfDidntLoad("mobile", n, a, e),
            this.isRtl && (e = this.addCssIfDidntLoad("mobileRtl", n, a, e))) : (e = this.addCssIfDidntLoad("nonMobile", n, a, e),
            this.isRtl && (e = this.addCssIfDidntLoad("nonMobileRtl", n, a, e))),
            e && p.addCss(e, t),
            this.addedCss = !0),
            this.config.hasMobileUI && this.isMobileUI && this.container && (this.container.style.width = "100%")
        }
        ,
        t.prototype.init = function(e) {
            this.error(window.gigya._.BaseObject.NOT_IMPLEMENTED_ERROR, 400096),
            e(!1)
        }
        ,
        t.prototype.resizePlugin = function(e, i) {}
        ,
        t.prototype.onViewportSizeChanged = function(e, i) {}
        ,
        t.prototype.shouldClose = function() {
            return !0
        }
        ,
        t.prototype.centerModal = function() {
            this._modalDialog && !this.isMobileUI && this._modalDialog.center()
        }
        ,
        t.prototype.resizeModal = function(e) {
            if (this.isModal && this._modalDialog && !this.isMobileUI) {
                this.getPluginStyle() === a.PluginStyle.legacy && (e.height && (e.minHeight = parseInt(e.height) + "px",
                delete e.height),
                e.width && (e.minWidth = parseInt(e.width) + "px",
                delete e.width));
                this.container.clientHeight,
                this.container.clientWidth;
                this._modalDialog.resize(e);
                this.container.clientHeight,
                this.container.clientWidth;
                this.config.disableModalContainerInit || this.centerModal()
            }
        }
        ,
        t.prototype.getPhotoFullName = function(e, i, t, n) {
            return void 0 === i && (i = this._pixelRatio),
            void 0 === t && (t = this._imgExt),
            void 0 === n && (n = this._imgBase),
            n + e + "_x" + i + "." + t
        }
        ,
        t.prototype.dispatchPluginEvent = function(e, i) {
            return void 0 === i && (i = {}),
            window.gigya.logger.info(this.injectionInfo.name + " dispatches " + e + " event:", i),
            this.dispatchEvent(e, i)
        }
        ,
        t.prototype.getTemplates = function() {
            return this._templates
        }
        ,
        t.prototype.getCss = function() {
            return this._css
        }
        ,
        t.prototype.addCssIfDidntLoad = function(e, i, t, n) {
            return i[e] && !t[e] ? (t[e] = !0,
            n + " " + i[e]) : n
        }
        ,
        t.prototype.getText = function(e, i, t) {
            return (this.params.customLang && this.params.customLang[e] ? this.params.customLang[e] : u.getLocalizedText(this.localizedJsName, e, this.lang)).replace(i, t)
        }
        ,
        t.prototype.toString = function() {
            return this.params.containerID + "." + this.injectionInfo.name
        }
        ,
        t.prototype.error = function(e, i, t) {
            void 0 === i && (i = 300001);
            var n = {
                statusMessage: t && t.response && t.response.statusMessage,
                errorMessage: e,
                errorCode: i,
                errorDetails: this.toString(),
                containerID: this.params.containerID,
                params: this.params,
                info: t
            };
            this.warn(e, t),
            this.dispatchErrorFromResponse(n)
        }
        ,
        t.prototype.close = function(e, i) {
            i || (i = {}),
            i.reason = e,
            this.dispatchPluginEvent("hide", i),
            window.gigya.logger.info("closing " + this.injectionInfo.name + " (reason: " + e + ")"),
            this.shouldClose() && this.dispose()
        }
        ,
        t.prototype.dispose = function() {
            this._isDisposed || (this._poller.dispose(),
            this.container && (this.container.innerHTML = ""),
            this._modalDialog && this._modalDialog.dispose(),
            this._loadingIndicator && this._loadingIndicator.dispose(),
            this.container = null,
            window.gigya._.plugins.removePluginInstance(this.params, this.injectionInfo),
            e.prototype.dispose.call(this))
        }
        ,
        t.globalPixelRatio = window.devicePixelRatio ? Math.min(Math.ceil(window.devicePixelRatio), 3) : 1,
        t.globalImgBase = window.gigya._.getImgCdnResource(),
        t
    }(window.gigya._.BaseObject);
    i.BasePlugin = h
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.legacyModal = t(191),
    i.modal = t(192),
    i.modalCloseButton = t(193)
}
, function(e, i) {
    e.exports = '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\r\n<div class="gigya-screen-dialog-inner">\r\n    <div class="gigya-screen-dialog-top">\r\n        <div class="gigya-screen-dialog-caption" id="gigya-screen-dialog-caption-${modalID}">$title</div>\r\n        <div class="gigya-screen-dialog-close"></div>\r\n    </div>\r\n</div>'
}
, function(e, i) {
    e.exports = '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\r\n<div class="gigya-screen-dialog-main">\r\n    <div class="gigya-screen-dialog-top">\r\n        <div class="gigya-screen-dialog-caption" id="gigya-screen-dialog-caption-${modalID}">$title</div>\r\n        <div class="gigya-screen-dialog-close">\r\n            <a href="#">${closeImage}</a>\r\n        </div>\r\n    </div>\r\n    <div class="gigya-screen-dialog-inner">\r\n    </div>\r\n</div>\r\n'
}
, function(e, i) {
    e.exports = '<img src="${imgUrl}" alt="X" height="${imgHeight}" width="${imgWidth}" />\r\n'
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.legacy_modal = t(195),
    i.modern_modal = t(196),
    i.defaultCSS = t(197)
}
, function(e, i) {
    e.exports = "/* legacy modal */\r\n\r\ndiv.gigya-screen-dialog {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 25px;\r\n    left: 25px;\r\n    border: 8px solid #CCCCCC;\r\n    border-radius: 8px;\r\n    background-color: #FFFFFF;\r\n    outline: none;\r\n}\r\n\r\ndiv.gigya-screen-dialog-inner {\r\n    border: 1px solid #AAAAAA;\r\n}\r\n\r\ndiv.gigya-screen-dialog-close {\r\n    line-height: 33px;\r\n    height: 33px;\r\n    width: 20px;\r\n    float: right;\r\n    cursor: pointer;\r\n    background-image: url('${imgBase}/accounts/close_dialog.png');\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\ndiv.gigya-screen-dialog-caption {\r\n    float: left;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    font-family: arial;\r\n}\r\n\r\ndiv.gigya-screen-dialog-mobile {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #FFFFFF;\r\n    width: 100%;\r\n}\r\n\r\ndiv.gigya-screen-dialog-top {\r\n    overflow: hidden;\r\n    zoom: 1;\r\n    background-color: #F3F3F3;\r\n    line-height: 33px;\r\n    padding: 0 10px 0 11px;\r\n}\r\n\r\n#gigya-screen-dialog-page-overlay {\r\n        width : 100vw;\r\n        height : 100vh;\r\n        background : black;\r\n        position : fixed;\r\n        top : 0;\r\n        left : 0;\r\n        z-index : -1;\r\n        filter : alpha(opacity=20);\r\n        opacity : 0.2;\r\n    }"
}
, function(e, i) {
    e.exports = '/*modern modal*/\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-main {\n    border: 0.5px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    max-height: 99vh;\n    max-width: 99vw;\n    overflow: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #1371B9;\n    line-height: 38px;\n    padding: 0 10px 0 11px;\n    border-radius: 3px 3px 0px 0px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: initial;\n    float: right;\n    cursor: pointer;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\n    margin-top: 11px;\n    vertical-align: initial;\n    border: 0px;\n    width: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-caption {\n    float: left;\n    font-size: 19px;\n    font-family: arial;\n    color: #FFFFFF;\n    padding-right: 20px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-inner {\n    padding: 0px;\n    overflow: hidden;\n    min-width: 32px;\n    min-height: 64px;\n    background-color: white;\n}\n\n.gigya-style-modern div.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n    background-color: #FFFFFF;\n}\n\n.gigya-style-modern div.gigya-screen-loader {\n    position: absolute;\n    background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n    min-height: 32px;\n    min-width: 32px;\n}\n\n.gigya-style-modern.gigya-screen-dialog {\n    position: fixed;\n    border: none;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\n    max-height: 100vh;\n    max-width: 100vw;\n    box-shadow: initial;\n    overflow: visible;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: fixed;\n    top: 0px;\n    border-radius: 0px;\n    line-height: 27px;\n    box-sizing: border-box;\n    width: 100%;\n    z-index: 1;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\n    font-size: 14px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\n    margin-top: 5px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\n    border: 0px;\n    margin-top: 27px;\n    box-sizing: border-box;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\n    margin: 0 auto;\n}\n\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: absolute;\n}\n\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\n    overflow: auto;\n}\n\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\n    width: 100%;\n    height: 100%;\n}\n\nhtml.gigya-mobile-modal-mode {\n    overflow: hidden;\n}\nhtml.gigya-mobile-modal-mode body {\n    height: 0px;\n    overflow: hidden;\n}\n'
}
, function(e, i) {
    e.exports = ".gigya-consent-title {\n     font-weight: bold;\n     display: block;\n     font-weight: 700;\n     font-size: 15px;\n     font-family: arial;\n }\n.gigya-consent-subtitle {\n    font-weight: bold;\n    display: block;\n    font-weight: 700;\n    font-size: 13px;\n    font-family: arial;\n     }\n\n.gigya-consent-text {\n    display: inline-block;\n}\n.gigya-composite-control-captcha-widget iframe {\n    width: 100%;\n}\n#FunCaptcha {\n    text-align: center;\n}\n.gigya-reset *, div.gigya-reset, .gigya-reset span, .gigya-reset a:hover, .gigya-reset a:visited, .gigya-reset a:link, .gigya-reset a:active {\n    border: none;\n    padding: 0px;\n    margin: 0px;\n    color: inherit;\n    text-decoration: none;\n    width: auto;\n    float: none;\n    -moz-border-radius: 0;\n    border-radius: 0;   \n    font-family: arial;\n    font-size: 12px;\n    color: #333333;\n    text-align: left;\n}\n\n.gigya-screen .gigya-error-msg {\n    color: #DD4B39;\n    font-size: 11px;\n    display: block;\n    visibility: hidden;\n}\n\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\n    color: #DD4B39;\n    font-size: 11px;\n    display: block;\n    visibility: visible;\n}\n\n.gigya-screen .gigya-terms-error,\n.gigya-screen input.gigya-error,\n.gigya-screen input[type=text].gigya-error,\n.gigya-screen input[type=password].gigya-error,\n.gigya-screen input[type=email].gigya-error,\n.gigya-screen select.gigya-error {\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #DD4B39;\n    -webkit-box-shadow: none !important;\n\t-moz-box-shadow: none !important;\n\tbox-shadow: none !important;\n}\n\n.gigya-screen input.gigya-error[type=checkbox],\n .gigya-screen input.gigya-error[type=radio]{\n    padding: 0;\n}\n\n.gigya-screen input[disabled],\n.gigya-screen input:disabled {\n    background-color: #e1e1e1;\n    color: #4a4a4a;\n    border-color: #cccccc;\n}\n\ndiv.gigya-attach-file-upload-form {\n    position: absolute;\n    overflow: hidden;\n    font-size: 50px;\n    cursor: pointer;\n    filter: alpha(opacity=0);\n    opacity: 0;\n}\n\ndiv.gigya-photo-upload-form > input {\n    font-size: 500px;\n    direction: rtl;\n    height: 100%;\n    cursor: pointer;\n}\n\n.gigya-password-strength-bubble .gig-balloon-nub {\n    background-image: url('${imgBase}/screenSet/triangle_left.png');\n    height: 16px;\n    width: 10px;\n    left: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-up {\n    background-image: url('${imgBase}/screenSet/triangle_up.png');\n    height: 10px;\n    width: 16px;\n    top: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-right {\n    background-image: url('${imgBase}/screenSet/triangle_right.png');\n    height: 16px;\n    width: 10px;\n    left: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-down {\n    background-image: url('${imgBase}/screenSet/triangle_down.png');\n    height: 10px;\n    width: 16px;\n    top: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-frame {\n    background-color: #F3F5F6;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    border: 1px solid #BFCFDA;\n    -webkit-box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\n    -moz-box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\n    box-shadow: inset 0 0 1px 1px RGBA(0,0,0,0.05);\n}\n\n.gigya-password-strength-bubble .gig-balloon {\n    position: relative;\n}\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\n    left: +10px;\n    top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\n    left: -10px;\n    top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\n    left: -5px;\n    top: +17px;\n}\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\n    left: -5px;\n    top: -12px;\n}\n\n.gigya-passwordStrength-text {\n    text-align: center;\n}\n\nspan.gigya-passwordStrength-text {\n    font-weight: bold;\n    display: inline-block;\n}\n\ndiv.gigya-passwordStrength-text-requirements {\n    text-align: center;\n    width: 100%;\n    margin-top: 8px;\n}\n\nspan.gigya-passwordStrength-scoreText {\n    margin-left: 3px;\n}\n\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\n    color: #e76468;\n}\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\n    color: #e76468;\n}\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\n    color: #d99b4b;\n}\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\n    color: #4ababc;\n}\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\n    color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar {\n    width: 100%;\n    height: 1px;\n    background-color: #b6b6b6;\n    margin-top: 8px;\n}\n\ndiv.gigya-passwordStrength-bar-too_weak {\n    width: 20%;\n    height: 100%;\n    background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-weak {\n    width: 40%;\n    height: 100%;\n    background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-fair {\n    width: 60%;\n    height: 100%;\n    background-color: #d99b4b;\n}\n\ndiv.gigya-passwordStrength-bar-strong {\n    width: 80%;\n    height: 100%;\n    background-color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar-very_strong {\n    width: 100%;\n    height: 100%;\n    background-color: #4ababc;\n}\n\n.gigya-calculate-size {\n    position: absolute !important;\n    -ms-zoom: 1 !important;\n    zoom: 1 !important;\n    left: 10px !important;\n    top: -1000px !important;\n}\n\n.gigya-calculate-size div.gigya-captcha {\n    min-width: 318px;\n    min-height: 80px;\n    _width: 318px;\n    _height: 80px;\n}\n.gigya-calculate-size div.gigya-captcha.v2 {\n    min-height: 80px;\n    _height: 80px;\n}\n\n.gigya-calculate-size div.gigya-social-login {\n    min-width: 110px;\n    min-height: 120px;\n    _width: 110px;\n    _height: 120px;\n}\n\n.gigya-calculate-size div.gigya-tfa {\n    min-width: 325px;\n    min-height: 200px;\n    _width: 325px;\n    _height: 200px;\n}\n\ndiv.gigya-container {\n    display: none;\n}\n\n    div.gigya-container.gigya-container-enabled {\n        display: block;\n    }\n\ndiv.gigya-loginID-availability {\n    line-height: 18px;\n    background-repeat: no-repeat;\n    background-position: left center;\n}\n\ndiv.gigya-loginID-availability-available {\n    padding-left: 17px;\n    background-image: url('${imgBase}/accounts/ok.png');\n    color: #4FA373;\n}\n\ndiv.gigya-loginID-availability-not-available {\n    padding-left: 16px;\n    background-image: url('${imgBase}/accounts/error.png');\n    color: #DD4B39;\n}\n\ndiv.gigya-loginID-availability-progress {\n    padding-left: 20px;\n    background-image: url('${imgBase}/accounts/smallLoader.gif');\n    color: #666666;\n}\n\ndiv.gigya-profile-photo {\n    border-radius: 3px;\n}\n\n.gigya-calculate-size div.gigya-profile-photo {\n    min-width: 64px;\n    min-height: 64px;\n}\n\ndiv.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.5;\n    filter: 'alpha(opacity=50)';\n    background-color: #FFFFFF;\n}\n\ndiv.gigya-screen-loader {\n    position: absolute;\n    background: transparent url('${imgBase}/accounts/bigLoader.gif') no-repeat center center;\n    min-height:32px;\n    min-width:32px;\n}\n\ndiv.gigya-screen-dialog-content {\n    overflow: auto;\n    padding: 25px;\n}\n\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\n    padding: 0;\n}\n\ndiv.gigya-screen-dialog-mobile .gigya-screen {\n    width: 100%;\n}\n\ndiv.gigya-secret-question {\n    display: none;\n}\n\ndiv.gigya-photo-upload {\n    height: 63px;\n    width: 300px;\n    zoom: 1;\n}\n\ndiv.gigya-photo-upload-button {\n    display: inline-block;\n    zoom: 1;\n    margin: 0 8px 8px 0;\n    font-weight: normal;\n    border: 1px solid #CECECE;\n    cursor: pointer;\n    padding: 0 12px;\n    color: #333333;\n    font-weight: bold;\n    border-radius: 4px;\n    line-height: 28px;\n    background: #F2F2F2;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#FFFFFF\", endColorstr=\"#F2F2F2\");\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F2F2F2));\n    background: -moz-linear-gradient(top, #FFFFFF, #F2F2F2);\n}\n\n    div.gigya-photo-upload-button:hover {\n        background: #FFFFFF;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#F2F2F2\", endColorstr=\"#FFFFFF\");\n        background: -webkit-gradient(linear, left top, left bottom, from(#F2F2F2), to(#FFFFFF));\n        background: -moz-linear-gradient(top, #F2F2F2, #FFFFFF);\n    }\n\ndiv.gigya-photo-upload-text {\n    font-size: 11px;\n    color: #666666;\n}\n\ndiv.gigya-photo-upload-image {\n    border-radius: 6px;\n    background-position: center center;\n    background-repeat: no-repeat;\n    width: 64px;\n    height: 64px;\n    background-color: #F2F2F2;\n    float: left;\n    margin-right: 8px;\n}\n\ndiv.gigya-photo-upload-path {\n    white-space: nowrap;\n    width: 107px;\n    vertical-align: middle;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    padding-right: 10px;\n    background-position: right;\n    background-repeat: no-repeat;\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    padding-right: 20px;\n}\n\nh1.gigya-screen-caption {\n    border-bottom: 1px solid #dbdbdb;\n    font-size: 16px;\n    font-weight: bold;\n    color: #333;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    margin: 0 auto;\n}\n\n.gigya-error-display {\n    display: none;\n}\n\n    .gigya-error-display.gigya-error-display-active {\n        display: block;\n    }\n\n.gigya-hidden {\n    display: none !important;\n}\n\n.gigya-screen .gigya-tfa input[type=text] {\n    margin: 5px 0px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #CCCCCC;\n}\n\n    .gigya-screen .gigya-tfa input[type=text]:focus, .gigya-screen .gigya-tfa input[type=text]:focus {\n        border-color: #87B9EA;\n    }\n\n    .gigya-show-checkmark.gigya-valid {\n        background-image: url('${imgBase}/screenSet/checkmarkValid.png');\n        background-position-x: 100%;\n        background-position-y: 50%;\n        background-position: right 5px center;\n        background-repeat: no-repeat;\n        padding-right: 25px;\n    }\n\n    .gigya-show-checkmark.gigya-valid.gigya-empty {\n        background-image: none;\n        padding-right: 5px;\n    }\n\n    .gigya-show-checkmark.gigya-pending {\n        background-image: url('${imgBase}/screenSet/checkmarkPending.gif');\n        background-position-x: 100%;\n        background-position-y: 50%;\n        background-position: right 5px center;\n        background-repeat: no-repeat;\n        padding-right: 25px;\n    }\n\n/* If changed, update UI Builder too. */\n.gigya-screen .gigya-composite-control-image {\n    overflow: hidden;\n}\n.gigya-image {\n    background-repeat: no-repeat;\n    box-sizing: content-box;\n    background-position: center;\n    min-height: 10px;\n}\n.gigya-image[data-background-size=\"fit\"] {\n    background-size: contain;\n}\n.gigya-image[data-background-size=\"fit-horizontally\"] {\n    background-size: 100% auto;\n}\n.gigya-image[data-background-size=\"fit-vertically\"] {\n    background-size: auto 100%;\n}\n.gigya-image[data-background-size=\"stretch\"] {\n    background-size: 100% 100%;\n}\n\n/*IE8*/\n.gigya-ie8 .gigya-layout-cell {\n    overflow: hidden;\n    margin-left: -1px!important;\n}\n\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\n    width: 1000px;\n}\n\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\n    _width: 64px;\n    _height: 64px;\n}\n\n.gigya-ie8 div.gigya-photo-upload {\n    *display: inline;\n}\n\n.gigya-ie8 div.gigya-photo-upload-button {\n    *display: inline;\n}\n.gigya-ie8 .gigya-screen .gigya-placeholder {\n    color: #A9A9BB;\n    padding-left: 5px;\n    text-indent: 0;\n}\n.gigya-ie8 .gigya-placeholder:focus {\n    padding-left: 5px;\n}\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\n    padding-left: 5px;\n    text-indent: 0;\n}\n.gigya-ie8 .gigya-screen.gigya-input-text, .gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\n    padding-top: 12px;\n}\n\n/*IE9*/\n.gigya-ie9 .gigya-screen input.gigya-input-text, \n.gigya-ie9 .gigya-screen input.gigya-input-password {\n    padding-top: 1px;\n    text-indent: 0;   \n    padding-bottom: 5px;\n}\n\n.gigya-ie9 .gigya-screen .gigya-input-text:focus, .gigya-ie9 .gigya-screen .gigya-input-password:focus {\n    box-shadow: 0px 0px 5px 0px #1d87ff;\n    border: 1px solid #87B9EA;\n    /*padding-left: 5px;*/\n    text-indent: 0;\n}\n\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder, .gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\n    color: #A9A9BB;\n    padding-top: 5px;\n     text-indent: 0;\n    /*padding-left: 4px;*/\n}\n\n/*IE10*/\n.gigya-ie10 .gigya-screen input.gigya-input-text, \n.gigya-ie10 .gigya-screen input.gigya-input-password {\n    padding-top: 1px;   \n}\n\n/*remove bottom padding for outline when focused (not needed anyway)*/\n.gigya-screen .forgot-password-cell a,\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\n.gigya-screen .gigya-composite-control.gigya-composite-control-link{\n    padding-bottom: 0px;\n}\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\n    display: none;\n}\n.gigya-screen .gigya-composite-control-array-widget {\n    margin: 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\n    margin: 10px;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\n    padding: 10px 0 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\n    border-bottom: 1px #C1C1C1 solid;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\n    text-align: right;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\n    background: none;\n    outline: none!important;\n    color: #1371b9;\n    padding: 10px;\n    cursor: pointer;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\n    display: none;\n}\n.gigya-screen .gigya-disabled-text {\n    color: #8a8a8a;\n    cursor: default;\n}\n\n.gigya-screen .gigya-disabled-text:hover {\n    text-decoration: none;\n    cursor: default;\n}\n\n.gigya-screen .gigya-disabled-text:active {\n    color: #8a8a8a;\n    cursor: default;\n}\n"
}
, function(module, exports) {
    var destination;
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    destination = window,
    destination.gigya || (destination.gigya = {}),
    destination.gigya._ || (destination.gigya._ = {}),
    destination.gigya._.plugins || (destination.gigya._.plugins = {}),
    destination.gigya._.plugins.BasePlugin || (destination.gigya._.plugins.BasePlugin = function(e, i, t) {}
    ,
    destination.gigya._.plugins.BasePlugin.isMock = !0);
    var PluginTester = function() {
        function PluginTester(e, i, t) {
            var n = this;
            void 0 === i && (i = null),
            this.defaultContainerID = i,
            this._instanceCount = 0,
            this.injector = new Map,
            this.disposeInstanceAfterTest = !0,
            this.neverInit = !1,
            beforeAll(function(i) {
                window.gigya.boot.ensureJsSdkLoaded(PluginTester.apiKey, function() {
                    if (t || (t = e.injectionInfo()),
                    n._loadPlugin = PluginTester.getLoadFunc(t),
                    !n.defaultContainerID) {
                        var o = document.createElement("div");
                        o.id = t.name + "Ut",
                        document.body.appendChild(o)
                    }
                    i()
                })
            }),
            afterEach(function(e) {
                n._instance && n.disposeInstanceAfterTest && (n._instance.dispose(),
                delete n._instance),
                e()
            })
        }
        return PluginTester.prototype.getInstance = function(e, i, t, n) {
            var o = this;
            this._instance ? n && n(this._instance) : this.loadNewInstance(e, i, t, function(e) {
                o._instance = e,
                PluginTester.setMocks(o._instance, o.injector),
                n && n(o._instance)
            })
        }
        ,
        PluginTester.setMocks = function(e, i) {
            i.forEach(function(i, t) {
                void 0 !== e[t] && (e[t] = i)
            })
        }
        ,
        PluginTester.prototype.isInstanceLoaded = function() {
            return Boolean(this._instance)
        }
        ,
        PluginTester.prototype.loadNewInstance = function(e, i, t, n) {
            e || (e = {});
            var o = e.getInstance;
            e.getInstance = function(e) {
                o && o(e),
                n && n(e)
            }
            ,
            this.neverInit && void 0 === e._noInit && (e._noInit = !0),
            e.containerID || (e.containerID = this.defaultContainerID),
            e.utInstanceCount = ++this._instanceCount,
            this._loadPlugin(e, i, t)
        }
        ,
        PluginTester.getLoadFunc = function(injectionInfo) {
            var funcName = "gigya." + window.gigya._.UiApi.getApiName(injectionInfo.jsName, injectionInfo.methodName)
              , func = eval(funcName);
            return func || "object" == typeof console && console.warn && console.warn(injectionInfo.name + "'s method could not be found in the api-list: " + funcName),
            func
        }
        ,
        PluginTester.apiKey = "3_9mGTgVStj1nTVaUGCQsP4GSNLl6gsHSoTSzd1MdhZ4cjDrYqKYra3fxqfAO5CFSE",
        PluginTester
    }();
    exports.PluginTester = PluginTester
}
, function(e, i) {
    function t(e, i) {
        for (var t = 0; t < e.length; ++t)
            i(e[t], t, e)
    }
    function n(e, i) {
        for (var t = 0; t < e.length; ++t)
            if (i(e[t], t, e))
                return !0;
        return !1
    }
    function o(e, i) {
        var t;
        return n(e, function(e, n, o) {
            return !!i(e, n, o) && (t = n,
            !0)
        }),
        t
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.LastIndexOf = function(e, i, t) {
        void 0 === t && (t = 0);
        for (var n = e.length; --n >= t; )
            if (e[n] === i)
                return n;
        return -1
    }
    ,
    i.ForEach = t,
    i.ForEachProp = function(e, i) {
        for (var t in e)
            e.hasOwnProperty(t) && i(e[t], t, e)
    }
    ,
    i.Some = n,
    i.Every = function(e, i) {
        for (var t = 0; t < e.length; ++t)
            if (!i(e[t], t, e))
                return !1;
        return !0
    }
    ,
    i.EveryProp = function(e, i) {
        for (var t in e)
            if (e.hasOwnProperty(t) && !i(e[t], t, e))
                return !1;
        return !0
    }
    ,
    i.Map = function(e, i) {
        var n = new Array;
        return t(e, function(e, t, o) {
            return n.push(i(e, t, o))
        }),
        n
    }
    ,
    i.FirstIndex = o,
    i.First = function(e, i) {
        return e[o(e, i)]
    }
}
, function(e, i) {
    function t(e, i, t) {
        var n = "#";
        if (-1 != e.indexOf("#")) {
            if (-1 != e.indexOf(i)) {
                var o = i + "=" + this.getHashParamValue(e, i);
                return e.replace(o, i + "=" + t),
                e
            }
            n = "&"
        }
        return e + n + i + "=" + t
    }
    function n(e, i) {
        if (-1 == e.indexOf("#"))
            return e;
        var t = e.split("#")[1]
          , n = o(e, i);
        n && (t = t.replace(i + "=" + n, "")),
        (t = (t = t.replace("&" + i, "")).replace("#" + i, "#")).length > 0 && (t[0] += "&") && (t = t.substring(1, t.length));
        var a = e.split("#")[0];
        return 0 == t.length ? a : a + "#" + t
    }
    function o(e, i) {
        if (i += "=",
        -1 == e.indexOf("#") || -1 == e.indexOf(i, e.indexOf("#")))
            return null;
        var t = e.indexOf(i, e.indexOf("#"))
          , n = e.indexOf("&", t);
        return -1 == n && (n = e.length),
        e.substring(t + i.length, n)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.addOrReplaceHashFragment = function(e, i, o) {
        return e = t(e = n(e, i), i, o)
    }
    ,
    i.addHashFragment = t,
    i.removeHashFragment = n,
    i.getHashParamValue = o
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.replaceLinksWithHTMLElements = function(e) {
        var i = e.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g);
        if (i)
            for (var t = 0; t < i.length; t++) {
                var n = window.gigya.utils.sanitize.sanitizeAttribute(i[t]);
                e = e.replace(n, '<a href="' + n + '" target="_blank" rel="nofollow">' + n + "</a>")
            }
        return e
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.defaultProccessor = function(e, i) {
        var t = e.toLowerCase()
          , n = t.indexOf("-");
        switch (-1 != n && (t = t.substring(n + 1, t.length)),
        t) {
        case "bold":
        case "italic":
        case "underline":
            return "true" == i.toString().toLowerCase();
        case "width":
        case "height":
            return i.replace("%", "");
        case "size":
            return parseInt(i);
        default:
            return i
        }
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(0)
      , o = function(e) {
        function i() {
            var i = e.call(this, void 0, !1) || this;
            return i._actions = [],
            i
        }
        return n.__extends(i, e),
        i.prototype.onActionRegisterEvent = function() {
            return this.getEvent(i._eventNames.onActionRegister)
        }
        ,
        i.prototype.onActionUnRegisterEvent = function() {
            return this.getEvent(i._eventNames.onActionUnRegister)
        }
        ,
        i.prototype.onNoActionsPendingEvent = function() {
            return this.getEvent(i._eventNames.onNoActionsPending)
        }
        ,
        i.prototype.register = function(e) {
            this._actions.push(e),
            this.dispatchEvent(i._eventNames.onActionRegister)
        }
        ,
        i.prototype.unregister = function(e) {
            window.gigya.utils.array.removeByValue(this._actions, e),
            this.dispatchEvent(i._eventNames.onActionUnRegister),
            this.isActive() || this.dispatchEvent(i._eventNames.onNoActionsPending)
        }
        ,
        i.prototype.call = function(e, i, t) {
            var n = this;
            void 0 === t && (t = "callback"),
            this.register(e);
            var o = i[t];
            i[t] = function() {
                for (var i = [], t = 0; t < arguments.length; t++)
                    i[t] = arguments[t];
                "function" == typeof o && o.call(n, i),
                n.unregister(e)
            }
            ,
            e(i)
        }
        ,
        i.prototype.isActive = function() {
            return this._actions && this._actions.length > 0
        }
        ,
        i._eventNames = {
            onActionRegister: "onActionRegister",
            onActionUnRegister: "onActionUnRegister",
            onNoActionsPending: "onNoActionsPending"
        },
        i
    }(window.gigya._.BaseObject);
    i.AsyncManager = o
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.getISODate = function(e) {
        var i = null;
        if (window.gigya.localInfo.isIE8)
            i = function(e) {
                var i, t, n = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/.exec(e) || [];
                if (n[1]) {
                    i = n[1].split(/\D/);
                    for (var o = 0, a = i.length; o < a; o++)
                        i[o] = parseInt(i[o], 10) || 0;
                    return i[1] -= 1,
                    (i = new Date(Date.UTC.apply(Date, i))).getDate() ? (n[5] && (t = 60 * parseInt(n[5], 10),
                    n[6] && (t += parseInt(n[6], 10)),
                    "+" == n[4] && (t *= -1),
                    t && i.setUTCMinutes(i.getUTCMinutes() + t)),
                    i) : null
                }
                return null
            }(e);
        else if ((/^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/.exec(e) || [])[1]) {
            var t = Date.parse(e);
            i = new Date(t)
        }
        return i
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.cloneParamsForPlugin = function(e) {
        var i = window.gigya.utils.object.clone(e);
        return delete i.instanceID,
        delete i.getInstance,
        i
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(57);
    i.fadeIn = function(e, i) {
        void 0 === i && (i = 1),
        null == e.style.opacity ? e.style.filter = "alpha(opacity=0)" : e.style.opacity = "0",
        window.setTimeout(function() {
            null == e.style.opacity ? e.style.filter = "alpha(opacity=" + 100 * i + ")" : e.style.opacity = i + ""
        }, 10)
    }
    ,
    i.slideDown = function(e) {
        var i = n.getClassBordersAndPaddings(e.className)
          , t = e.offsetHeight - i.h
          , o = e.style.transitionProperty;
        e.style.maxHeight = "1px",
        e.style.transitionProperty = e.style.webkitTransitionProperty = "max-height",
        window.setTimeout(function() {
            e.style.maxHeight = t + "px",
            e.style.transitionProperty = e.style.webkitTransitionProperty = o
        }, 100);
        var a = function() {
            e.style.maxHeight = "999px",
            window.gigya.utils.DOM.removeEventListener(e, "transitionend", a),
            window.gigya.utils.DOM.removeEventListener(e, "webkitTransitionEnd", a)
        };
        window.gigya.utils.DOM.addEventListener(e, "transitionend", a),
        window.gigya.utils.DOM.addEventListener(e, "webkitTransitionEnd", a),
        window.setTimeout(a, 500)
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(57)
      , o = t(76)
      , a = t(74)
      , r = t(75);
    function l(e) {
        e.interval && clearInterval(e.interval),
        e.style.opacity = "0",
        e.interval = setInterval(function() {
            var i = parseFloat(e.style.opacity);
            i >= 1 && clearInterval(e.interval),
            e.style.opacity = i + .1
        }, 10)
    }
    function s(e, i, t, o, a, r, l, s, g) {
        window.gigya.global.addedBalloonCSS || (window.gigya.global.addCSS([".gig-balloons *, div.gig-balloons, .gig-balloons span, .gig-balloons a:hover, .gig-balloons a:visited, .gig-balloons a:link, .gig-balloons a:active{", "border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;", "font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}", "div.gig-balloon-frame {", "zoom:1;padding:15px 10px 10px 10px; border:1px solid #b4b4b4; min-height:80px; background-color:#FFFFFF; z-index:" + window.gigya.utils.DOM.getNextZIndex() + ";", "box-shadow:0 0 5px RGBA(0,0,0,0.6);-webkit-box-shadow:0 0 5px RGBA(0,0,0,0.6);-moz-box-shadow:0 0 5px RGBA(0,0,0,0.6);}", 'div.gig-balloon-nub {left:+1px; position:relative;background-image:url("' + window.gigya._.getCdnResource("/gs/i/gm/nub.png") + '");width:13px;height:25px; z-index:' + window.gigya.utils.DOM.getNextZIndex() + " }", 'div.gig-balloon-nub-right { left:-1px; position:relative;background-image:url("' + window.gigya._.getCdnResource("/gs/i/gm/nub_right.png") + '");width:13px;height:25px; z-index:' + window.gigya.utils.DOM.getNextZIndex() + " }", 'div.gig-balloon-nub-up { top:+1px; position:relative;background-image:url("' + window.gigya._.getCdnResource("/gs/i/gm/nub_up.png") + '");width:25px;height:13px; z-index:' + window.gigya.utils.DOM.getNextZIndex() + " }", 'div.gig-balloon-nub-down { top:-1px; position:relative;background-image:url("' + window.gigya._.getCdnResource("/gs/i/gm/nub_down.png") + '");width:25px;height:13px; z-index:' + window.gigya.utils.DOM.getNextZIndex() + " }", 'span.gig-balloon-closeImage { cursor:pointer; float:right;background-image:url("' + window.gigya._.getCdnResource("/gs/i/gm/CloseButton.png") + '"); width:14px;height:14px; margin:-7px -2px 0 0  }', "div.gig-balloon-caption {font-family:arial; font-size: 12px; font-weight:bold; color: #0b81c1; border-bottom: 1px solid #e8e8e8;padding-bottom:2px;}", "span.gig-balloon-caption-text {float:left}"]),
        !window.gigya.localInfo.isIE || !window.gigya.localInfo.quirksMode && window.gigya.localInfo.isIE9 || window.gigya.global.addCSS(["div.gig-balloon-frame {", "-ms-filter: \"progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#B4B4B4');\";", "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#B4B4B4');}", "}", "div.gig-balloon-nub-right { left:-5px;}"]),
        window.gigya.global.addedBalloonCSS = !0);
        var d = "";
        if (window.gigya.localInfo.quirksMode) {
            var c = n.getClassBordersAndPaddings("gig-balloon-frame");
            t && (t += c.w),
            o && (o += c.h)
        }
        t && (d += "width: " + t + "px;"),
        o && (d += "height: " + o + "px;");
        var p = "";
        a && (p += "left" === r || "right" === r ? "top: " + a + "px;" : "left: " + a + "px;");
        var u, h = "";
        return h += i ? '<div class="gig-balloon-caption"><span class="gig-balloon-caption-text" style="width:' + (t - 20) + 'px">' + i + "</span>" : '<div class="gig-balloon-caption" style="border-bottom:none">',
        !l && s && (h += '<span tabindex="0" role="button" class="gig-balloon-closeImage" onclick="' + s + '" onkeydown="if((event.which || event.keyCode) == 13) ' + s + '"></span>'),
        h += '<div style="clear:both;height:0;width:0;font-size:1px;">\x3c!-- empty divs=100% height IE --\x3e</div></div><div class="gig-balloon-body">' + e + "</div>",
        a ? (u = '<table role="presentation" cellpadding="0" cellspacing="0" class="gig-balloon"><tr>',
        "up" === r && (u += '<td style=""><div class="gig-balloon-nub-up" style="' + p + '"></div></td></tr><tr>'),
        "left" === r && (u += '<td style="vertical-align:top"><div class="gig-balloon-nub" style="' + p + '"></div></td>'),
        u += '<td style="vertical-align:top"><div id="' + g + '" class="gig-balloon-frame" style="' + d + '">' + h + "</div></td>",
        "right" === r && (u += '<td style="vertical-align:top"><div class="gig-balloon-nub-right" style="' + p + '"></div></td>'),
        "down" === r && (u += '</tr><tr><td style="vertical-align:top"><div class="gig-balloon-nub-down" style="' + p + '"></div></td>'),
        u += "</tr></table>",
        u += '<div style="clear:both;height:0;width:0;font-size:1px;">\x3c!-- empty divs=100% height IE --\x3e</div>') : u = '<div class="gig-balloon gig-balloon-frame" style="' + d + '">' + h + "</div>",
        u
    }
    function g(e, i, t, n, a, r, g, c, p, u) {
        u = u ? "gig-balloon " + u : "gig-balloon",
        d();
        var h = "gig_gmBalloon_" + (new Date).getTime();
        c && (h = c);
        var y = s(e, i, t, n, a, r, g, "gigya.global.removeGMBalloon()", h + "_frame")
          , f = document.createElement("div");
        return f.className = u,
        f.style.position = "absolute",
        f.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString(),
        f.innerHTML = y,
        f.id = h,
        f.setAttribute("role", "alert"),
        f.setAttribute("aria-live", "assertive"),
        f.setAttribute("aria-atomic", "true"),
        l(f),
        window.gigya.utils.DOM.appendToBody(f),
        window.gigya.global.divGMBalloon = f,
        p || window.setTimeout(function() {
            o.removeElementOnDocClickOrEscape(f)
        }, 50),
        f
    }
    function d(e) {
        var i;
        if (e)
            for ((i = e.target) || (i = e.srcElement); null != i && i.offsetParent && -1 == i.id.indexOf(window.gigya.global.divGMBalloon.id); )
                i = i.offsetParent;
        if (!i || -1 == i.id.indexOf(window.gigya.global.divGMBalloon.id))
            try {
                a.removeIframeShim(document.getElementById(window.gigya.global.divGMBalloon.id + "_frame")),
                window.gigya.global.divGMBalloon.parentNode.removeChild(window.gigya.global.divGMBalloon),
                document.detachEvent ? document.detachEvent("onclick", d) : document.removeEventListener && document.removeEventListener("click", d, !1)
            } catch (e) {}
    }
    i.showLoader = function(e, i, t) {
        void 0 === i && (i = ""),
        void 0 === t && (t = void 0),
        e && (t || (t = parseInt(n.getStyle(e, "height"))),
        e.innerHTML = '<div class="' + i + '" style="height:' + t + "px;background-image:url('" + window.gigya._.getCdnResource("/gs/i/gm/loader.gif") + "'); background-repeat:no-repeat;background-position:center center\"></div>")
    }
    ,
    i.fadeIn = l,
    i.getBalloonHTML = s,
    i.createGMBalloon = g,
    i.removeGMBalloon = d,
    i.putGMBalloonNextTo = function(e, i, t, n, o, a, r, l, s, g) {
        void 0 === s && (s = ["left", "right", "up", "down"]),
        void 0 === g && (g = "");
        for (var d = {
            body: i,
            caption: t,
            w: n,
            h: o,
            hideClose: a,
            id: r,
            dontHideOnClick: l,
            balloonClass: g
        }, c = 0; c < s.length && !this.positionGMBalloonNextTo(e, s[c], d); c++)
            ;
    }
    ,
    i.positionGMBalloonNextTo = function(e, i, t) {
        "left" === i || "right" === i ? g(t.body, t.caption, t.w, t.h, 47, "left", t.hideClose, t.id, t.dontHideOnClick, t.balloonClass) : g(t.body, t.caption, t.w, t.h, 10, "down", t.hideClose, t.id, t.dontHideOnClick, t.balloonClass);
        var n, o, l = window.gigya.global.divGMBalloon.offsetWidth, s = window.gigya.global.divGMBalloon.offsetHeight, d = r._GetElementPos(e), c = document.documentElement, p = document.body, u = c.clientHeight;
        0 == u && (u = p.clientHeight);
        var h = c.clientWidth;
        0 == h && (h = p.clientWidth),
        window.innerHeight && (u = p.scrollHeight && p.scrollHeight < window.innerHeight ? p.scrollHeight : window.innerHeight,
        h = p.scrollWidth && p.scrollWidth < window.innerWidth ? p.scrollWidth : window.innerWidth);
        var y, f, w = window.gigya.utils.viewport.getScroll().top + u;
        if ("left" === i || "right" === i) {
            f = 47,
            (o = d.top + e.offsetHeight / 2 - 47 - 12.5) + s > w && (o = w - s - 10);
            var m = d.left - l - 5
              , v = d.left + e.offsetWidth + 5;
            if ("left" === i) {
                if (!(m > 10))
                    return null;
                n = m,
                y = "right",
                t.balloonClass += " gig-balloon-left"
            } else {
                if (!(h - v - l > 10))
                    return null;
                n = v,
                y = "left",
                t.balloonClass += " gig-balloon-right"
            }
        } else {
            if ("up" !== i && "down" !== i)
                return null;
            f = 10,
            n = d.left;
            var b = d.top - s - 10
              , x = d.top + e.offsetHeight + 5;
            if ("up" === i) {
                if (!(b > 5))
                    return null;
                o = b,
                y = "down",
                t.balloonClass += " gig-balloon-up"
            } else
                o = x,
                y = "up",
                t.balloonClass += " gig-balloon-down"
        }
        var _ = g(t.body, t.caption, t.w, t.h, f, y, t.hideClose, t.id, t.dontHideOnClick, t.balloonClass);
        if (n < 10 && (n = 10),
        o < 10 && (o = 10),
        window.gigya.global.divGMBalloon.style.left = n + "px",
        window.gigya.global.divGMBalloon.style.top = o + "px",
        window.gigya.localInfo.isIE) {
            var C = document.getElementById(window.gigya.global.divGMBalloon.id + "_frame");
            C && a.addIframeShim(C)
        }
        return _
    }
    ,
    i.scrollToElement = function(e) {
        if (e) {
            var i = r._GetElementPos(e);
            window.scrollTo(i.left, i.top)
        }
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(116);
    function o(e, i) {
        var t = i || {}
          , o = t.zindex || 50
          , a = t.opacity || 70
          , r = a / 100
          , l = t.bgcolor || "#000000"
          , s = document.getElementById("darkenScreenObject")
          , g = document.body;
        if (!s) {
            var d = window.gigya.localInfo.isMobile || window.gigya.localInfo.isIE6 || "BackCompat" == document.compatMode
              , c = document.documentElement.scrollTop;
            0 == c && (c = document.body.scrollTop);
            var p = document.createElement("div");
            d ? (p.style.position = "absolute",
            p.style.top = c + "px") : (p.style.position = "fixed",
            p.style.top = "0px"),
            p.style.overflow = "hidden",
            p.style.left = "0px",
            p.style.display = "none",
            p.id = "darkenScreenObject",
            p.innerHTML = "&#160;",
            g.appendChild(p),
            s = document.getElementById("darkenScreenObject"),
            window.gigya.attachedFixGray || (window.gigya.attachedFixGray = !0,
            window.addEventListener && window.addEventListener("resize", n._fixGraySize, !1),
            window.attachEvent && window.attachEvent("onresize", n._fixGraySize),
            d && (window.addEventListener && window.addEventListener("scroll", n._fixGrayPosition, !1),
            window.attachEvent && window.attachEvent("onscroll", n._fixGrayPosition)))
        }
        if (e) {
            var u, h;
            if (window.innerHeight && (u = window.innerHeight,
            h = window.innerWidth),
            void 0 === u) {
                var y = document.documentElement;
                u = y.clientHeight,
                h = y.clientWidth
            }
            0 == h && (h = g.clientWidth),
            0 == u && (u = g.clientHeight),
            s.style.opacity = r.toString(),
            s.style.MozOpacity = r,
            s.style.width = h + "px",
            s.style.height = u + "px",
            s.style.filter = "alpha(opacity=" + a + ")",
            s.style.zIndex = o,
            s.style.backgroundColor = l,
            s.style.display = "block"
        } else
            g.removeChild(s)
    }
    i.GrayOut = o,
    i.hideUI = function() {
        var e = window.gigya.utils.object.merge([window.gigya.thisScript.globalConf, arguments]);
        for (var i in o(!1),
        window.gigya._.plugins.instances) {
            var t = window.gigya._.plugins.instances[i];
            t.isModal && t.dispose()
        }
        for (var n in window.gigya.utils.DOM._popupContainers) {
            var a = window.gigya.utils.DOM._popupContainers[n];
            null != a && (a.innerHTML = "",
            a.parentNode && (a.style.display = "none"));
            var r = document.getElementById("gigya_ifr_" + n);
            null != r && (r.style.display = "none")
        }
        if (window.gigya.events.global.dispatch({
            eventName: "HideUIRequested"
        }),
        "function" == typeof e.callback) {
            var l = {
                status: "OK",
                statusMessage: "",
                operation: "hideUI",
                context: e.context,
                errorMessage: "",
                errorCode: 0
            };
            e.callback(l)
        }
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.replaceLinksWithHTMLElements = function(e, i) {
        var t = e.match(/(?:(?:https?):\/\/|www\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.;]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.;])*(?:\([-A-Z0-9+&@#\/%=~_;|$?!:,.;]*\)|[A-Z0-9+&@#\/%=~_|;$])/gim)
          , n = "";
        if (t)
            for (var o = 0; o < t.length; o++) {
                var a = "";
                -1 === t[o].indexOf("http:") && -1 === t[o].indexOf("https:") && (a = "http://");
                var r = "";
                i && (r = ' class="' + i + '"');
                var l = e.substr(0, e.indexOf(t[o]) + t[o].length);
                e = e.substr(l.length, e.length - l.length);
                var s = t[o].replace(/&#173;/g, "");
                n += l.replace(t[o], "<a" + r + ' href="' + a + s + '" target="_blank" rel="nofollow">' + t[o] + "</a>")
            }
        return e.length > 0 && (n += e),
        n
    }
    ,
    i.setAttribute = function(e, i, t) {
        "class" !== i ? (e.setAttribute(i, t),
        null === t && e.removeAttribute(i)) : e.className = t
    }
    ,
    i.getAttribute = function(e, i) {
        var t;
        if (window.gigya.localInfo.isIE8)
            t = e.getAttribute(i);
        else {
            if (!e.hasAttributeNS("", i))
                return null;
            t = e.getAttributeNS("", i)
        }
        return t
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.enableSafeCopy = function(e) {
        e.addedSafeCopy || (window.gigya.utils.DOM.addEventListener(e, "copy", function(e) {
            var i = (e = e || window.event).target || e.srcElement
              , t = i && i.nodeName ? i.nodeName.toLowerCase() : "";
            if ("textarea" != t && "input" != t) {
                var n = document.createElement("div");
                n.style.color = window.getComputedStyle ? window.getComputedStyle(document.body).backgroundColor : "#FFFFFF",
                n.style.fontSize = "0px",
                window.gigya.utils.DOM.appendToBody(n);
                var o, a, r = new RegExp("(&shy;|" + String.fromCharCode(173) + ")","g");
                if (window.getSelection) {
                    e.stopPropagation();
                    var l = (o = window.getSelection()).getRangeAt(0);
                    n.appendChild(l.cloneContents()),
                    n.innerHTML = n.innerHTML.replace(r, ""),
                    o.selectAllChildren(n);
                    var s = function() {
                        n.parentNode.removeChild(n),
                        o.removeAllRanges(),
                        o.addRange(l)
                    }
                } else
                    e.cancelBubble = !0,
                    o = window.document.selection,
                    l = o.createRange(),
                    n.innerHTML = l.htmlText,
                    n.innerHTML = n.innerHTML.replace(r, ""),
                    (a = document.body.createTextRange()).moveToElementText(n),
                    a.select(),
                    s = function() {
                        n.parentNode.removeChild(n),
                        "" !== l.text && l.select()
                    }
                    ;
                window.setTimeout(s, 0)
            }
        }),
        e.addedSafeCopy = !0)
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.fixCss = function(e) {
        return (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode) && (e = e.replace(/display:inline-block/g, "display:inline-block;zoom:1;*display:inline")),
        e.replace(/gradient\((.*?),(.*?)\)/g, 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");background: linear-gradient(top,  $1,  $2);background: -ms-linear-gradient(top left, $1, $2);background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));background: -moz-linear-gradient(top,  $1,  $2)')
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.normalizeLinebreaks = function(e) {
        return void 0 === e && (e = void 0),
        e && e.replace ? e.replace(/\r/, "").replace(/\n/g, "\r\n") : e
    }
    ,
    i.fixTextWidows = function(e) {
        var i = e.lastIndexOf(" ");
        return -1 === i ? e : e.substr(0, i) + "&nbsp;" + e.substr(i + 1)
    }
}
, function(e, i) {
    function t(e, i, t) {
        var n = "#";
        if (-1 != e.indexOf("#")) {
            if (-1 != e.indexOf(i)) {
                var o = i + "=" + this.getHashParamValue(e, i);
                return e.replace(o, i + "=" + t),
                e
            }
            n = "&"
        }
        return e + n + i + "=" + t
    }
    function n(e, i) {
        if (-1 == e.indexOf("#"))
            return e;
        var t = e.split("#")[1]
          , n = o(e, i);
        n && (t = t.replace(i + "=" + n, "")),
        (t = (t = t.replace("&" + i, "")).replace("#" + i, "#")).length > 0 && (t = t.substring(1, t.length));
        var a = e.split("#")[0];
        return 0 == t.length ? a : a + "#" + t
    }
    function o(e, i) {
        if (i += "=",
        -1 == e.indexOf("#") || -1 == e.indexOf(i, e.indexOf("#")))
            return null;
        var t = e.indexOf(i, e.indexOf("#"))
          , n = e.indexOf("&", t);
        return -1 == n && (n = e.length),
        e.substring(t + i.length, n)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.addOrReplaceHashFragment = function(e, i, o) {
        return e = t(e = n(e, i), i, o)
    }
    ,
    i.addHashFragment = t,
    i.removeHashFragment = n,
    i.getHashParamValue = o
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(119);
    i.resolver = function(e) {
        this.configurations = [],
        this.mergedConfig = {},
        this.isMerged = !0,
        this._processor = e,
        this.merge = function() {
            if (!this.isMerged) {
                this.mergedConfig = {
                    attributes: {},
                    childNodes: {}
                };
                for (var e = 0; e < this.configurations.length; e++) {
                    var i = this.configurations[e];
                    n.mergeNodes(i, this.mergedConfig)
                }
                this.isMerged = !0
            }
        }
        ,
        this.Resolve = function(e, i) {
            this.merge && this.merge();
            var t = {};
            "object" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1]);
            for (var o = 0; o < arguments.length; o++) {
                var a = arguments[o]
                  , r = a.constructor;
                if (r == String)
                    for (var l = a.split("|"), s = l.length - 1; s >= 0; s--) {
                        var g = this.trimCharsAtSuffix(this.trimCharsAtPrefix(l[s], " \n\r\t"), " \n\r\t")
                          , d = "+" == g.charAt(0)
                          , c = g.split("/").slice(1);
                        d && (g = g.substring(1)),
                        n.CollectAttributesFromXMLPathToObject(this.mergedConfig, c, t, d, this._processor)
                    }
                else if (r == Array)
                    for (var p = 0; p < a.length; p++)
                        this.Resolve(a[p], t)
            }
            return t
        }
        ,
        this.trimCharsAtPrefix = function(e, i) {
            var t = 0;
            if (void 0 === e || 0 == e.length)
                return "";
            for (var n = e.length; t <= n && i.indexOf(e.charAt(t)) > -1; )
                t++;
            return e.substring(t, n)
        }
        ,
        this.trimCharsAtSuffix = function(e, i) {
            if (void 0 === e || 0 == e.length)
                return "";
            for (var t = e.length - 1; t >= 0 && i.indexOf(e.charAt(t)) > -1; )
                t--;
            return e.substring(0, t + 1)
        }
        ,
        this.addConfig = function(e) {
            "string" == typeof e && (this.configurations.push(n.CreateXMLFromString(e)),
            this.isMerged = !1)
        }
        ,
        this.getTextFromKey = function(e) {
            return this.Resolve("/config/lang/" + e).text
        }
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.defaultProccessor = function(e, i) {
        var t = e.toLowerCase()
          , n = t.indexOf("-");
        switch (-1 != n && (t = t.substring(n + 1, t.length)),
        t) {
        case "bold":
        case "italic":
        case "underline":
            return "true" == i.toString().toLowerCase();
        case "width":
        case "height":
            return i.replace("%", "");
        case "size":
            return parseInt(i);
        default:
            return i
        }
    }
}
, function(e, i) {
    function t(e) {
        for (var i = new RegExp("((\"[^<]+<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>\")|((\"[^\"]*\" *)?<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>)|(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))))"), t = e.split(","), n = 0; n < t.length; n++)
            if (!i.test(t[n]))
                return !1;
        return !0
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.isValidEmailLoginID = function(e) {
        var i = new RegExp("^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))$","ig").test(e);
        return window.gigya.logger.info("LoginID validation with email : " + e + ", passed : " + i),
        i
    }
    ,
    i.isEmailValid = function(e) {
        return t(e)
    }
    ,
    i.isEmailListValid = t
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.isInDomain = function(e, i) {
        if (void 0 === e && (e = void 0),
        void 0 === i && (i = window.gigya.thisScript.globalConf.topDomain || document.domain),
        e) {
            var t = "^" + e.replace(/\./g, "\\.").replace(/\*\\./g, "([a-zA-Z0-9]+\\.)*") + "$";
            return new RegExp(t).test(i)
        }
    }
}
, function(e, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.isEmail = function(e) {
        if (e.indexOf(" ") >= 0)
            return !1;
        var i = e.split("@");
        if (2 != i.length)
            return !1;
        if (0 == i[0].length)
            return !1;
        if (0 == i[1].length)
            return !1;
        var t = i[1].split(".");
        if (t.length < 2)
            return !1;
        for (var n = 0; n < t.length; n++)
            if (0 == t[n].length || t[n].indexOf(" ") > 0)
                return !1;
        return !0
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(48);
    window.gigya.utils.functions.createAlias("gigya.global.addCSS", n.addCss),
    window.gigya.utils.functions.createAlias("gigya.pluginUtils.css.fixCss", n.fixCss)
}
, function(e, i) {}
, function(e, i) {}
, function(e, i) {}
, function(module, exports) {
    window.gigya.socialize._AddJSRequest = function(servicedBy, methodName, needsContainer, params) {
        if (document.body) {
            params || (params = {}),
            window.gigya.log.logCall(methodName.split(".").pop(), params);
            var containerID = params.containerID, blnCenter = !1, container;
            if (needsContainer ? void 0 === containerID || "" == containerID ? (containerID = window.gigya.utils.DOM.getCenteredDivID(methodName),
            params.containerID = containerID,
            blnCenter = !0,
            params.isPopup = !0,
            container = document.getElementById(containerID),
            null == container && (container = window.gigya.utils.DOM.createTopLevelDiv(containerID))) : container = document.getElementById(containerID) : (null == window.gigya.utils.DOM._pseudoContainers[containerID] && (window.gigya.utils.DOM._pseudoContainers[containerID] = {}),
            container = window.gigya.utils.DOM._pseudoContainers[containerID]),
            container) {
                var localMethodName = methodName.split(".").pop();
                if (container.setAttribute && container.setAttribute("gigid", (params.source && params.source != localMethodName ? params.source + "_" : "") + localMethodName),
                container.style) {
                    container.style.display = "",
                    container.style.visibility = "",
                    container.innerHTML = "";
                    var ifrel = document.getElementById("gigya_ifr_" + containerID);
                    ifrel && (ifrel.style.display = "",
                    ifrel.style.visibility = "");
                    var fncFixPosition = function() {
                        null != ifrel && (window.gigya.utils.DOM.setSize(ifrel, params.width, params.height, blnCenter),
                        ifrel.style.visibility = "visible"),
                        window.gigya.utils.DOM.setSize(container, params.width, params.height, blnCenter)
                    };
                    fncFixPosition()
                }
                var Reqs = container.Reqs ? container.Reqs : container.Reqs = []
                  , rid = Reqs.length + "@" + servicedBy + "@" + containerID;
                params.rid = rid;
                var operation = methodName;
                params._operation && (operation = params._operation);
                for (var req = Reqs[Reqs.length] = {
                    rid: rid,
                    servicedBy: servicedBy,
                    container: container,
                    method: methodName,
                    context: params.context,
                    c: params,
                    p: params,
                    i: params,
                    operation: operation,
                    isHTML: !0
                }, methodNameParts = methodName.split("."), node = eval(methodNameParts[0]), pfxi = 1; null != (node = node[methodNameParts[pfxi]]) && ++pfxi < methodNameParts.length; )
                    ;
                var func = node;
                return window.gigya.utils.script.load(window.gigya._.getCdnResource("/js/" + servicedBy + ".min.js" + (params.lang ? "?lang=" + params.lang : "")), null, function() {
                    window.gigya.reports.reportLoad(methodName, params),
                    window.gigya.utils.functions.callFunction(methodName, [params, params, params])
                }, !0),
                containerID
            }
            window.gigya.events.dispatchInvalidParamError(params, "containerID")
        } else {
            var args = arguments;
            window.setTimeout(function() {
                window.gigya.socialize._AddJSRequest.apply(this, args)
            }, 300)
        }
    }
    ,
    window.gigya.socialize._parseRID = function(e) {
        var i, t = e.split("@"), n = document.getElementById(t[2] + "_" + t[1]), o = t[2];
        null == (i = window.gigya.utils.DOM._pseudoContainers[o]) && (i = document.getElementById(t[2]));
        var a = null;
        null != i && (a = i.Reqs);
        var r = null;
        return null != a && (r = a[parseInt(t[0])]),
        {
            rid: e,
            container: i,
            Reqs: a,
            req: r,
            swf: n
        }
    }
}
, function(e, i, t) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = t(48);
    window.gigya.utils.functions.createAlias("gigya.global.addCSS", n.addCss),
    window.gigya.utils.functions.createAlias("gigya.pluginUtils.css.fixCss", n.fixCss)
}
, function(e, i) {
    window.gigya.socialize._closeComponent = function(e, i) {
        var t = window.gigya.socialize._parseRID(e).req;
        window.gigya.socialize.GrayOut && window.gigya.socialize.GrayOut(!1);
        var n = document.getElementById("gigya_ifr_" + t.container.id);
        null != n && (n.style.display = "none"),
        i && window.gigya.events.dispatchForWidget({
            eventName: "close"
        }, t.p),
        t.container.style.display = "none"
    }
}
]);
// Injected language object
if (!gigya.i18n)
    gigya.i18n = {};
if (!gigya.i18n['gigya.services.comments.plugins.comments2.js'])
    gigya.i18n['gigya.services.comments.plugins.comments2.js'] = {};
gigya.i18n['gigya.services.comments.plugins.comments2.js']['es'] = {
    "commenting_frequency_limit_reached": "Límite de frecuencia de comentarios alcanzado",
    "post_anonymously": "Publicar anónimamente",
    "anonymous": "Anónimo",
    "when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_review.": "Al publicar anónimamente, otros usuarios no verán su información personal al lado de su reseña.",
    "when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_comment.": "Al publicar anónimamente, otros usuarios no verán su información personal al lado de su comentario.",
    "daily_commenting_limit_reached": "Límite de comentarios diarios alcanzado",
    "comment_edit_rejected": "Su comentario editado no se ha guardado porque viola la política del sitio",
    "review_edit_rejected": "Su revisión editada no se ha guardado porque viola la política del sitio",
    "this_comment_has_been_deleted": "Este comentario ha sido eliminado",
    "this_comment_is_awaiting_moderation": "Este comentario está pendiente de moderación",
    "this_review_has_been_deleted": "Esta reseña ha sido eliminada",
    "this_review_is_awaiting_moderation": "Esta reseña está pendiente de moderación",
    "deleted": "Eliminado",
    "rich_text_formatting": "Formato de texto enriquecido",
    "embed_a_media_item": "Incrustar un elemento multimedia",
    "tag_commenters": "Comentaristas de etiquetas",
    "tip_use_trusted_urls": "Consejo: use URL de sitios web de imágenes, vídeo y audio de confianza.",
    "edited": "Editado",
    "editing": "Editando",
    "edit": "Editar",
    "moderator": "Moderador",
    "review_summary": "Escriba un título para el comentario",
    "write_a_review": "Escriba su comentario",
    "sign_in_with": "Inicie sesión con:",
    "you_must_login_in_order_to_attach_a_media_item": "Deberá iniciar sesión para adjuntar un elemento multimedia",
    "enter_url": "Introducir la URL:",
    "for_best_results_try_a_url_from_one_of_our_supported_services": "Para obtener mejores resultados, inténtelo con la URL de uno de los servicios compatibles con los nuestros.",
    "the_provided_url_is_not_supported": "La URL proporcionada no es compatible",
    "tag_a_commenter": "Etiquetar comentador",
    "unlike": "Ya no me gusta",
    "like": "Me gusta",
    "review": "Reseña",
    "summary": "Resumen",
    "write_a_comment": "Escribir un comentario",
    "show_more": "Ver más",
    "as_guest": "Como Invitado",
    "ratings": "Puntuaciones",
    "most_voted": "Más votado",
    "oldest": "Más antiguos",
    "most_recent": "Más recientes",
    "sort": "Ordenar",
    "share_colon": "Compartir:",
    "hello_username": "Hola %username",
    "via_provider": "Mediante %provider",
    "username_rated_pagetitle_as_rating_5": "%username ha puntuado %pageTitle con un %rating/6",
    "username_commented_on_pagetitle": "%username lo ha comentado en %pagetitle",
    "username_posted_a_review_on_pagetitle": "%username ha publicado una reseña en %pagetitle",
    "delete": "Eliminar",
    "click_to_show": "Haz clic para mostrar",
    "1_review_was_recently_added": "1 revisión se añadió recientemente",
    "num_reviews_were_recently_added": "%num revisiones se añadieron recientemente",
    "1_new_review_was_recently_posted": "1 nueva revisión reciente",
    "num_new_reviews_were_recently_posted": "%num nuevas revisiones recientes",
    "1_comment_was_recently_added": "1 comentario se añadió recientemente",
    "num_comments_were_recently_added": "%num comentarios se añadieron recientemente",
    "1_new_comment_was_recently_posted": "1 nuevo comentario reciente",
    "num_new_comments_were_recently_posted": "%num nuevos comentarios recientes",
    "new": "NUEVO",
    "resume_stream": "Finalizar la transferencia de datos",
    "pause_stream": "Pausar stream",
    "enter_your_email_to_subscribe_to_new_comments_in_this_stream_colon": "Escribe tu email para suscribirte a nuevas revisiones en este stream:",
    "enter_your_email_to_subscribe_to_new_reviews_in_this_stream_colon": "Escribe tu email para suscribirte a nuevas revisiones en este stream:",
    "follow_replies_to_my_comments": "Seguir las respuestas a mis comentarios",
    "follow_replies_to_my_reviews": "Seguir las respuestas a mis revisiones",
    "your_review": "Su revisión",
    "my_rating_colon": "Mi puntuación:",
    "least_voted": "Menos votado",
    "most_relevant": "Más relevante",
    "old_to_new": "De más antiguo a más nuevo",
    "new_to_old": "De más nuevo a más antiguo",
    "comment_edited_by_a_moderator": "Comentario editado por un moderador",
    "review_edited_by_a_moderator": "Reseña editada por un moderador",
    "share_to_provider": "Compartir en %provider",
    "new_comments_will_be_sent_directly_to_your_email_inbox": "Los comentarios nuevos se enviarán directamente a su buzón de e-mail",
    "new_reviews_will_be_sent_directly_to_your_email_inbox": "Las nuevas reseñas se enviarán directamente a la bandeja de entrada de su e-mail",
    "you_have_successfully_unsubscribed_for_updates_in_the_current_discussion": "Ha cancelado satisfactoriamente su suscripción en el actual hilo de discusión",
    "thank_you_for_subscribing": "Gracias por suscribirse",
    "you_have_successfully_unsubscribed": "Ha cancelado satisfactoriamente su suscripción",
    "enter_your_email_to_receive_notifications_when_someone_replies_to_your_comments_colon": "Introduzca su e-mail para recibir notificaciones cuando alguien responda a sus comentarios",
    "enter_your_email_to_receive_notifications_when_someone_comments_on_your_reviews_colon": "Introduzca su e-mail para recibir notificaciones cuando alguien comente sus reseñas:",
    "follow_my_reviews": "Seguir mis reseñas",
    "unfollow": "Dejar de seguir",
    "follow": "Seguir",
    "following": "Siguiendo",
    "notify_me_when_someone_comments_on_my_review": "Notifíqueme cuando alguien comente sobre mi reseña",
    "thank_you_for_subscribing,_new_reviews_will_be_sent_directly_to_your_email_inbox": "Gracias por suscribirse, las nuevas reseñas se enviarán directamente a su buzón de e-mail",
    "login_to_review": "Conectarse a la reseña",
    "rss": "RSS",
    "delete_review": "Borrar reseña",
    "delete_comment": "Borrar comentario",
    "are_you_sure_you_want_to_permanently_delete_your_review_qm": "¿Estás seguro de que quieres borrar permanentemente tu reseña?",
    "are_you_sure_you_want_to_permanently_delete_your_comment_qm": "¿Estás seguro de que quieres borrar permanentemente tu comentario?",
    "notify_me_when_someone_replies_to_my_comments": "Notificarme cuando alguien conteste a mis comentarios",
    "more_share_destinations": "Más destinos compartidos",
    "notifications_settings": "Ajustes de notificaciones",
    "follow_my_comments": "Seguir mis comentarios",
    "unsubscribe": "Darse de baja",
    "subscribe": "Suscribirse",
    "thank_you_for_subscribing,_new_comments_will_be_sent_directly_to_your_email_inbox.": "Gracias por suscribirte, los nuevos comentarios se enviarán directamente a tu bandeja de entrada.",
    "post_to_provider": "Publicar en %provider",
    "login_to_comment": "Iniciar sesión para comentar",
    "i_rated_pagetitle_as_rating_5": "He valorado %pageTitle con un %rating/5",
    "my_review_on_colon_pagetitle": "Mis observaciones en: %pageTitle",
    "commented_on_colon_pagetitle": "Comentado en: %pageTitle",
    "rated_pagetitle": "%pageTitle valorada",
    "please_select_your_rating": "Por favor, seleccione su valoración",
    "show_more_ratings": "Mostrar más clasificaciones",
    "please_login": "Por favor, inicia sesión",
    "please_provide_a_valid_email_address": "Provea una dirección válida de correo electrónico",
    "overall_rating": "Puntuación general",
    "yes_flag_this_review": "Sí, marcar esta reseña",
    "are_you_sure_you_want_to_mark_this_review_as_inappropriate": "¿Está seguro de que quiere marcar esta reseña como inapropiada?",
    "report_review_to_site_owner": "Denunciar la reseña al propietario del sitio",
    "your_edited_comment_is_awaiting_moderation": "Su comentario editado está pendiente de moderación",
    "your_edited_review_is_awaiting_moderation": "Su revisión editada está pendiente de moderación",
    "your_review_is_awaiting_moderation": "Su reseña está a la espera de moderación",
    "one_day_ago": "Hace 1 día",
    "one_hour_ago": "Hace 1 hora",
    "one_minute_ago": "Hace 1 minuto",
    "one_reply": "1 respuesta",
    "only_one_review_per_product_is_allowed": "Solo se permite una opinión por producto",
    "please_fill_required_fields": "Por favor, rellene los campos obligatorios",
    "one_review": "1 opinión",
    "num_reviews": "%num opiniones",
    "i_love_it": "Me encanta",
    "i_like_it": "Me gusta",
    "its_ok": "Está bien",
    "i_dont_like_it": "No me gusta",
    "i_hate_it": "Lo odio",
    "show_more_reviews": "Mostrar más opiniones",
    "comment_on_username_review": "Comentar la opinión de %username",
    "comment": "Comentario",
    "review_colon": "Opinión:",
    "summary_colon": "Resumen:",
    "login_to_post_your_review": "Inicie sesión para publicar su opinión",
    "post_your_review": "Publicar la opinión",
    "report_comment_to_site_owner": "Denunciar comentario al propietario del sitio.",
    "are_you_sure_you_want_to_mark_this_comment_as_inappropriate": "¿Está seguro/a de que quiere marcar este comentario como inapropiado?",
    "yes_flag_this_comment": "Sí, marcar este comentario.",
    "one_comment": "1 Comentario",
    "show_more_comments": "Mostrar más comentarios",
    "an_error_has_occurred_please_try_again_later": "Se ha producido un error. Por favor, inténtelo de nuevo más tarde (%errorCode)",
    "num_replies": "%num respuestas",
    "share_to": "Compartir con:",
    "less_than_a_minute_ago": "Hace menos de un minuto",
    "nickname_should_be_at_least_3_characters": "El alias debe tener al menos 3 caracteres.",
    "change": "Cambiar",
    "num_minutes_ago": "Hace %num minutos",
    "num_days_ago": "Hace %num días",
    "num_hours_ago": "Hace %num horas",
    "your_comment_is_awaiting_moderation": "Su comentario está en proceso de moderación",
    "post": "Enviar",
    "reply_to_username": "Responder a %username",
    "email_not_displayed_publicly": "*El correo electrónico no se muestra públicamente",
    "num_comments": "%num comentarios",
    "email_optional": "Correo electrónico (opcional)",
    "nickname": "Alias",
    "post_a_new_comment": "Enviar nuevo comentario",
    "or": "O",
    "guest": "Invitado",
    "reply": "Responder",
    "share": "Compartir",
    "login": "Iniciar sesión",
    "logout": "Cerrar sesión",
    "yes": "Sí",
    "no": "No",
    "ok": "Aceptar",
    "cancel": "Cancelar",
    "done": "Hecho",
    "more": "Más",
    "email": "Email"
};
// End injected language object

gigya._.UI.registerPlugin(function() {
    if (typeof gigya === 'undefined') {
        gigya = window.gigya;
    }
    !function(e) {
        var t = {};
        function i(o) {
            if (t[o])
                return t[o].exports;
            var n = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, i),
            n.l = !0,
            n.exports
        }
        i.m = e,
        i.c = t,
        i.d = function(e, t, o) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        i.t = function(e, t) {
            if (1 & t && (e = i(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var o = Object.create(null);
            if (i.r(o),
            Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var n in e)
                    i.d(o, n, function(t) {
                        return e[t]
                    }
                    .bind(null, n));
            return o
        }
        ,
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return i.d(t, "a", t),
            t
        }
        ,
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        i.p = "",
        i(i.s = 360)
    }({
        0: function(e, t, i) {
            "use strict";
            i.r(t),
            function(e) {
                i.d(t, "__extends", function() {
                    return n
                }),
                i.d(t, "__assign", function() {
                    return s
                }),
                i.d(t, "__rest", function() {
                    return a
                }),
                i.d(t, "__decorate", function() {
                    return g
                }),
                i.d(t, "__param", function() {
                    return r
                }),
                i.d(t, "__metadata", function() {
                    return l
                }),
                i.d(t, "__awaiter", function() {
                    return m
                }),
                i.d(t, "__generator", function() {
                    return d
                }),
                i.d(t, "__exportStar", function() {
                    return c
                }),
                i.d(t, "__values", function() {
                    return u
                }),
                i.d(t, "__read", function() {
                    return p
                }),
                i.d(t, "__spread", function() {
                    return h
                }),
                i.d(t, "__spreadArrays", function() {
                    return b
                }),
                i.d(t, "__await", function() {
                    return x
                }),
                i.d(t, "__asyncGenerator", function() {
                    return f
                }),
                i.d(t, "__asyncDelegator", function() {
                    return v
                }),
                i.d(t, "__asyncValues", function() {
                    return y
                }),
                i.d(t, "__makeTemplateObject", function() {
                    return w
                }),
                i.d(t, "__importStar", function() {
                    return E
                }),
                i.d(t, "__importDefault", function() {
                    return _
                });
                var o = function(e, t) {
                    return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    )(e, t)
                };
                function n(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    o(e, t),
                    e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                    new i)
                }
                var s = function() {
                    return (s = e || function(e) {
                        for (var t, i = 1, o = arguments.length; i < o; i++)
                            for (var n in t = arguments[i])
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }
                    ).apply(this, arguments)
                };
                function a(e, t) {
                    var i = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (o = Object.getOwnPropertySymbols(e); n < o.length; n++)
                            t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (i[o[n]] = e[o[n]])
                    }
                    return i
                }
                function g(e, t, i, o) {
                    var n, s = arguments.length, a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                        a = Reflect.decorate(e, t, i, o);
                    else
                        for (var g = e.length - 1; g >= 0; g--)
                            (n = e[g]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
                    return s > 3 && a && Object.defineProperty(t, i, a),
                    a
                }
                function r(e, t) {
                    return function(i, o) {
                        t(i, o, e)
                    }
                }
                function l(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                        return Reflect.metadata(e, t)
                }
                function m(e, t, i, o) {
                    return new (i || (i = gigya.Promise))(function(n, s) {
                        function a(e) {
                            try {
                                r(o.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function g(e) {
                            try {
                                r(o.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function r(e) {
                            e.done ? n(e.value) : new i(function(t) {
                                t(e.value)
                            }
                            ).then(a, g)
                        }
                        r((o = o.apply(e, t || [])).next())
                    }
                    )
                }
                function d(e, t) {
                    var i, o, n, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0])
                                throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: g(0),
                        throw: g(1),
                        return: g(2)
                    },
                    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    s;
                    function g(s) {
                        return function(g) {
                            return function(s) {
                                if (i)
                                    throw new TypeError("Generator is already executing.");
                                for (; a; )
                                    try {
                                        if (i = 1,
                                        o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o),
                                        0) : o.next) && !(n = n.call(o, s[1])).done)
                                            return n;
                                        switch (o = 0,
                                        n && (s = [2 & s[0], n.value]),
                                        s[0]) {
                                        case 0:
                                        case 1:
                                            n = s;
                                            break;
                                        case 4:
                                            return a.label++,
                                            {
                                                value: s[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                            o = s[1],
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = a.ops.pop(),
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                                a.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && a.label < n[1]) {
                                                a.label = n[1],
                                                n = s;
                                                break
                                            }
                                            if (n && a.label < n[2]) {
                                                a.label = n[2],
                                                a.ops.push(s);
                                                break
                                            }
                                            n[2] && a.ops.pop(),
                                            a.trys.pop();
                                            continue
                                        }
                                        s = t.call(e, a)
                                    } catch (e) {
                                        s = [6, e],
                                        o = 0
                                    } finally {
                                        i = n = 0
                                    }
                                if (5 & s[0])
                                    throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, g])
                        }
                    }
                }
                function c(e, t) {
                    for (var i in e)
                        t.hasOwnProperty(i) || (t[i] = e[i])
                }
                function u(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator]
                      , i = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && i >= e.length && (e = void 0),
                            {
                                value: e && e[i++],
                                done: !e
                            }
                        }
                    }
                }
                function p(e, t) {
                    var i = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!i)
                        return e;
                    var o, n, s = i.call(e), a = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(o = s.next()).done; )
                            a.push(o.value)
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (i = s.return) && i.call(s)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return a
                }
                function h() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e = e.concat(p(arguments[t]));
                    return e
                }
                function b() {
                    for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                        e += arguments[t].length;
                    var o = Array(e)
                      , n = 0;
                    for (t = 0; t < i; t++)
                        for (var s = arguments[t], a = 0, g = s.length; a < g; a++,
                        n++)
                            o[n] = s[a];
                    return o
                }
                function x(e) {
                    return this instanceof x ? (this.v = e,
                    this) : new x(e)
                }
                function f(e, t, i) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError("Symbol.asyncIterator is not defined.");
                    var o, n = i.apply(e, t || []), s = [];
                    return o = {},
                    a("next"),
                    a("throw"),
                    a("return"),
                    o[Symbol.asyncIterator] = function() {
                        return this
                    }
                    ,
                    o;
                    function a(e) {
                        n[e] && (o[e] = function(t) {
                            return new gigya.Promise(function(i, o) {
                                s.push([e, t, i, o]) > 1 || g(e, t)
                            }
                            )
                        }
                        )
                    }
                    function g(e, t) {
                        try {
                            (i = n[e](t)).value instanceof x ? gigya.Promise.resolve(i.value.v).then(r, l) : m(s[0][2], i)
                        } catch (e) {
                            m(s[0][3], e)
                        }
                        var i
                    }
                    function r(e) {
                        g("next", e)
                    }
                    function l(e) {
                        g("throw", e)
                    }
                    function m(e, t) {
                        e(t),
                        s.shift(),
                        s.length && g(s[0][0], s[0][1])
                    }
                }
                function v(e) {
                    var t, i;
                    return t = {},
                    o("next"),
                    o("throw", function(e) {
                        throw e
                    }),
                    o("return"),
                    t[Symbol.iterator] = function() {
                        return this
                    }
                    ,
                    t;
                    function o(o, n) {
                        t[o] = e[o] ? function(t) {
                            return (i = !i) ? {
                                value: x(e[o](t)),
                                done: "return" === o
                            } : n ? n(t) : t
                        }
                        : n
                    }
                }
                function y(e) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, i = e[Symbol.asyncIterator];
                    return i ? i.call(e) : (e = u(e),
                    t = {},
                    o("next"),
                    o("throw"),
                    o("return"),
                    t[Symbol.asyncIterator] = function() {
                        return this
                    }
                    ,
                    t);
                    function o(i) {
                        t[i] = e[i] && function(t) {
                            return new gigya.Promise(function(o, n) {
                                (function(e, t, i, o) {
                                    gigya.Promise.resolve(o).then(function(t) {
                                        e({
                                            value: t,
                                            done: i
                                        })
                                    }, t)
                                }
                                )(o, n, (t = e[i](t)).done, t.value)
                            }
                            )
                        }
                    }
                }
                function w(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t,
                    e
                }
                function E(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var i in e)
                            Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e,
                    t
                }
                function _(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            }
            .call(this, i(0).__assign)
        },
        157: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(29)
              , n = function() {
                function e(e, t, i) {
                    var o = this;
                    this.composeBox = e,
                    this.onResult = t;
                    var n = null;
                    this.selectedIndex = 0,
                    i && (n = this.getUserPrefix(i)),
                    this.fetchRelatedUsers(n),
                    this.keydownDelegate = function(e) {
                        o.processKeyDown(e)
                    }
                    ,
                    window.gigya.utils.DOM.addEventListener(e.uiElements.textArea, "keydown", this.keydownDelegate)
                }
                return e.prototype.fetchRelatedUsers = function(e) {
                    var t = this
                      , i = this.composeBox.plugin.getComment(this.composeBox.data.parentID);
                    window.gigya.comments.getRelatedUsers({
                        usernamePrefix: e,
                        categoryID: this.composeBox.plugin.params.categoryID,
                        streamID: this.composeBox.plugin.params.streamID,
                        parentCommentID: i ? i.id : null,
                        limit: 10,
                        cacheTimeout: 3e4,
                        callback: function(e) {
                            e.relatedUsers ? (t.relatedUsers = e.relatedUsers,
                            t.container ? t.updateUsers() : t.draw()) : t.cancel()
                        }
                    })
                }
                ,
                e.prototype.draw = function() {
                    var e = this
                      , t = this.composeBox.uiElements.editor
                      , i = document.createElement("div");
                    i.innerHTML = window.gigya.utils.templates.fill(this.composeBox.plugin.templates.userTaggingBox, {
                        title: this.composeBox.plugin.getText("tag_a_commenter")
                    }),
                    this.container = window.gigya.pluginUtils.DOM.addPopoverNearElement(t, i, "bottom", 0, !this.composeBox.plugin.isRtl, !1, null, function(t, i) {
                        e.cancel(),
                        t && i && o.Events.cancelEvent(t)
                    }, [this.composeBox.uiElements.textArea]),
                    this.changeSelectedByIndex(0),
                    this.updateUsers();
                    var n = this.getElement("suggestions");
                    window.gigya.utils.DOM.addEventListener(n, "mouseover", function(t) {
                        for (var i = t.target || t.srcElement; i && !window.gigya.utils.DOM.isElementClass(i, "gig-usertagging-user"); )
                            i = i.parentElement;
                        var o = e.getChildNodeIndex(n, i);
                        e.changeSelectedByIndex(o)
                    }),
                    window.gigya.utils.DOM.addEventListener(n, "mousedown", function(t) {
                        window.gigya.utils.DOM.cancelEvent(t),
                        e.confirmSelection()
                    })
                }
                ,
                e.prototype.getChildNodeIndex = function(e, t) {
                    for (var i = 0; i < e.childNodes.length; i++)
                        if (e.childNodes[i] == t)
                            return i;
                    return -1
                }
                ,
                e.prototype.updateUsers = function() {
                    if (0 == this.relatedUsers.length)
                        this.cancel();
                    else {
                        for (var e = !1, t = this.getElement("suggestions"), i = 0, n = t.childElementCount, s = 0; s < n; s++) {
                            var a = {};
                            i < this.relatedUsers.length && (a = this.relatedUsers[i]);
                            var g = t.childNodes[i];
                            a.uid && a.uid == g.getAttribute("data-gig-uid") ? (a.uid == this.selectedUID && (e = !0,
                            this.selectedIndex = i),
                            i++) : t.removeChild(g)
                        }
                        for (s = i; s < this.relatedUsers.length; s++) {
                            var r = this.relatedUsers[s]
                              , l = document.createElement("li");
                            window.gigya.utils.DOM.addClassToElement(l, "gig-usertagging-user"),
                            r.uid && l.setAttribute("data-gig-uid", r.uid),
                            l.innerHTML = window.gigya.utils.templates.fill(this.composeBox.plugin.templates.userTaggingOption, {
                                name: r.name,
                                photoURL: window.gigya.global.getPhotoURL(r.photoURL, o.Images.getPhotoFullName("Avatar_empty", this.composeBox.plugin.pixelRatio))
                            }),
                            this.selectedUID && r.uid == this.selectedUID && (window.gigya.utils.DOM.addClassToElement(l, "gig-usertagging-selected"),
                            this.selectedIndex = s,
                            e = !0),
                            t.appendChild(l);
                            var m = l.getElementsByTagName("img");
                            if (m && m.length > 0) {
                                var d = m[0];
                                d.style.visibility = "hidden",
                                window.gigya.utils.DOM.addEventListener(d, "load", function(e) {
                                    var t = e.target || e.srcElement;
                                    window.gigya.global.scaleImageToContainer(t, !0, function() {
                                        t.style.visibility = ""
                                    })
                                })
                            }
                        }
                        e || this.changeSelectedByIndex(0)
                    }
                }
                ,
                e.prototype.cancel = function() {
                    this.container && this.container.parentElement && this.container.parentElement.removeChild(this.container),
                    this.onResult && this.onResult(null, null),
                    window.gigya.utils.DOM.removeEventListener(this.composeBox.uiElements.textArea, "keydown", this.keydownDelegate)
                }
                ,
                e.prototype.getUserPrefix = function(e, t) {
                    if (void 0 === t && (t = e.lastIndexOf("@")),
                    -1 != t) {
                        var i = "";
                        return e.length > 1 && (i = e.substring(t + 1)),
                        i
                    }
                }
                ,
                e.prototype.processTextChanged = function(e) {
                    var t = e.lastIndexOf("@");
                    if (0 === t || t > 0 && " " == e.charAt(t - 1)) {
                        var i = this.getUserPrefix(e, t);
                        void 0 !== i && this.fetchRelatedUsers(i)
                    } else
                        this.cancel()
                }
                ,
                e.prototype.getElement = function(e) {
                    return window.gigya.utils.DOM.getElementsByClass(this.container, "gig-usertagging-" + e)[0]
                }
                ,
                e.prototype.changeSelectedByIndex = function(e) {
                    var t = this.getElement("suggestions")
                      , i = this.relatedUsers.length;
                    this.selectedUID = "",
                    this.selectedIndex >= 0 && this.selectedIndex < i && window.gigya.utils.DOM.removeClassFromElement(t.childNodes[this.selectedIndex], "gig-usertagging-selected"),
                    e >= 0 && e < i ? (this.selectedUID = this.relatedUsers[e].uid,
                    window.gigya.utils.DOM.addClassToElement(t.childNodes[e], "gig-usertagging-selected")) : e < 0 ? e = -1 : e >= i && (e = i),
                    this.selectedIndex = parseInt(e)
                }
                ,
                e.prototype.confirmSelection = function() {
                    if (this.onResult) {
                        var e = this.relatedUsers[this.selectedIndex]
                          , t = o.UserTagging.createTaggedUserElement(e.name, e.uid);
                        this.onResult(e.uid, t)
                    }
                    this.container && this.container.parentElement.removeChild(this.container),
                    window.gigya.utils.DOM.removeEventListener(this.composeBox.uiElements.textArea, "keydown", this.keydownDelegate)
                }
                ,
                e.prototype.processKeyDown = function(t) {
                    if (-1 != e.taggingConfirmationKeys.indexOf(t.keyCode))
                        this.relatedUsers && this.selectedIndex < this.relatedUsers.length && (window.gigya.utils.DOM.cancelEvent(t),
                        this.confirmSelection());
                    else if (-1 != e.taggingTerminatorKeys.indexOf(t.keyCode))
                        window.gigya.utils.DOM.cancelEvent(t),
                        this.cancel();
                    else if (t.keyCode in e.verticalKeys) {
                        "up" == e.verticalKeys[t.keyCode] ? this.changeSelectedByIndex(this.selectedIndex - 1) : this.changeSelectedByIndex(this.selectedIndex + 1),
                        window.gigya.utils.DOM.cancelEvent(t)
                    }
                }
                ,
                e.taggingTerminatorKeys = [27],
                e.taggingConfirmationKeys = [9, 13],
                e.verticalKeys = {
                    38: "up",
                    40: "down"
                },
                e.horizontalKeys = {
                    37: "left",
                    39: "right"
                },
                e
            }();
            t.UserTaggingBox = n
        },
        158: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(94)
              , n = i(36)
              , s = i(29)
              , a = i(160)
              , g = function() {
                function e(e, t, i, o, n, s, a, g) {
                    void 0 === i && (i = 0),
                    void 0 === n && (n = !1),
                    void 0 === s && (s = !1),
                    this.plugin = e,
                    this.level = i,
                    this.viaProvider = o,
                    this.isTemp = n,
                    this.isNew = s,
                    this.error = a,
                    this.info = g,
                    this.replies = [],
                    this.descendantsCount = 0,
                    this.reset(t),
                    this.updateParents()
                }
                return e.prototype.updateParents = function() {
                    var e = this.getParent();
                    e && e.data && e.data.replies && -1 == window.gigya.utils.array.indexOf(e.data.replies, this.data) && e.data.replies.push(this.data),
                    e && e.replies && -1 == window.gigya.utils.array.indexOf(e.replies, this) && e.replies.push(this),
                    e || -1 != window.gigya.utils.array.indexOf(this.plugin.comments, this) || this.plugin.comments.push(this)
                }
                ,
                e.prototype.updateDescendantsCountInParents = function(e) {
                    for (; e; )
                        e.descendantsCount = (e.descendantsCount || 0) + (this.isRemovedComment() || !this.data.status ? 0 : 1),
                        e.updateRepliesCount(),
                        this.plugin.setLinks(e.getContainer()),
                        e = e.getParent()
                }
                ,
                e.prototype.setElementHtml = function(e, t) {
                    var i = this.getElement(e);
                    i && (i.innerHTML = t)
                }
                ,
                e.prototype.bindButtonSubmitElement = function(e, t) {
                    var i = this.getElement(e);
                    i && window.gigya.utils.DOM.addButtonSubmitListener(i, t.bind(this))
                }
                ,
                e.prototype.getElement = function(e) {
                    var t = window.gigya.utils.DOM.getElementsByClass(this.getContainer(), "gig-comment-" + e);
                    return t.length > 0 ? t[0] : null
                }
                ,
                e.prototype.dispose = function() {
                    this.plugin.removeComment(this)
                }
                ,
                e.prototype.reset = function(t, i, o) {
                    if (delete this.plugin.commentInstances[this.id],
                    this.id = t.ID,
                    this.plugin.commentInstances[this.id] = this,
                    this.data = t,
                    isNaN(this.data.posVotes) && (this.data.posVotes = 0),
                    isNaN(this.data.negVotes) && (this.data.negVotes = 0),
                    t.sender.name && "anonymous" == t.sender.name.toLowerCase() ? t.sender.name = this.plugin.getText("anonymous") : !t.sender.name && t.isModerator ? t.sender.name = this.plugin.getText("moderator") : t.sender.name && "guest" == t.sender.name.toLowerCase() && (t.sender.name = this.plugin.getText("guest")),
                    this.updateAll(),
                    t.replies) {
                        this.descendantsCount = 0;
                        for (var n = 0; n < t.replies.length; n++) {
                            var s = t.replies[n]
                              , a = this.plugin.getComment(s.ID);
                            a ? a.reset(s, i) : a = new e(this.plugin,s,this.level + 1,null,null,this.isNew || i)
                        }
                        this.updateRepliesCount()
                    }
                    this.updateDescendantsCountInParents(this.getParent())
                }
                ,
                e.prototype.removeChild = function(e) {
                    window.gigya.utils.array.removeByProperty(this.replies, "id", e),
                    window.gigya.utils.array.removeByProperty(this.data.replies, "ID", e)
                }
                ,
                e.prototype.getUsername = function() {
                    return this.data.sender.name || (this.data.isModerator ? this.plugin.getText("moderator") : this.plugin.getText("guest"))
                }
                ,
                e.prototype.getContainer = function() {
                    return this.container
                }
                ,
                e.prototype.getParent = function() {
                    return this.plugin.getComment(this.data.parentID)
                }
                ,
                e.prototype.getText = function(e, t, i) {
                    return this.plugin.getText(e, t, i)
                }
                ,
                e.prototype.expand = function() {
                    var e = this.getElement("repliesArrow")
                      , t = this.getElement("replies");
                    e && t && (window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-replies-collapsed"),
                    window.gigya.utils.DOM.removeClassFromElement(e, "gig-comment-repliesArrow-collapsed")),
                    this.updateReplies(!0)
                }
                ,
                e.prototype.collapse = function() {
                    var e = this.getElement("repliesArrow")
                      , t = this.getElement("replies");
                    e && t && (window.setTimeout(function() {
                        window.gigya.utils.DOM.addClassToElement(t, "gig-comment-replies-collapsed")
                    }, 1),
                    window.gigya.utils.DOM.addClassToElement(e, "gig-comment-repliesArrow-collapsed")),
                    this.detachReplies(),
                    t.innerHTML = ""
                }
                ,
                e.prototype.isCollapse = function() {
                    return this.container.getElementsByClassName("gig-comment-replies-collapsed").length > 0
                }
                ,
                e.prototype.expandCollapse = function() {
                    var e = this.getElement("replies");
                    if (e)
                        if (window.gigya.utils.DOM.isElementClass(e, "gig-comment-replies-collapsed")) {
                            this.expand();
                            var t = e.querySelector(".gig-comment");
                            t && t.focus()
                        } else
                            this.collapse()
                }
                ,
                e.prototype.detachReplies = function() {
                    for (var e = 0; e < this.replies.length; e++) {
                        var t = this.replies[e];
                        t.container = null,
                        t.plugin.tempComposeBox && t.plugin.tempComposeBox.close(),
                        t.detachReplies()
                    }
                }
                ,
                e.prototype.updateRepliesCount = function() {
                    var e = this.getContainer();
                    if (e) {
                        var t = this.getElement("repliesArrow")
                          , i = this.getElement("repliesArrow-text")
                          , o = this.descendantsCount || 0;
                        if (o > 0) {
                            if (t && (t.style.display = ""),
                            i) {
                                var s;
                                s = 1 == o ? this.plugin.textMode == n.TextMode.COMMENTS ? "one_reply" : "one_comment" : this.plugin.textMode == n.TextMode.COMMENTS ? "num_replies" : "num_comments";
                                var a = this.getText(s, "%num", o.toString());
                                "fr" == this.plugin.params.lang && 0 == o && (a = (a = this.getText(this.plugin.textMode == n.TextMode.COMMENTS ? "one_reply" : "one_comment", "%num", o.toString())).replace("1", "0")),
                                i.innerHTML = a
                            }
                        } else
                            t && (t.style.display = "none");
                        this.plugin.setLinks(e)
                    }
                }
                ,
                e.prototype.markAsFlagged = function() {
                    this.isFlagged = !0;
                    var e = this.getElement("flag");
                    e && (window.gigya.utils.DOM.addClassToElement(e, "gig-comment-flag-submitted"),
                    e.setAttribute("tabindex", "-1"),
                    e.setAttribute("aria-disabled", "true")),
                    this.plugin.state.flags || (this.plugin.state.flags = {});
                    var t = this.plugin.user.isGuest ? "guest" : this.plugin.user.UID;
                    this.plugin.state.flags[t + "_" + this.id] = !0
                }
                ,
                e.prototype.getHtml = function() {
                    return window.gigya.utils.templates.fill(this.plugin.templates.comment, {
                        commentId: this.id,
                        like: this.getText("like"),
                        unlike: this.getText("unlike"),
                        reply: this.plugin.textMode == n.TextMode.COMMENTS ? this.getText("reply") : this.getText("comment"),
                        delete: this.getText("delete"),
                        share: this.getText("share"),
                        edit: this.getText("edit"),
                        edited: this.getText("edited").toLowerCase()
                    })
                }
                ,
                e.prototype.getChildrenHtml = function() {
                    for (var e = [], t = 0; t < this.replies.length; t++)
                        e.push(this.replies[t].getHtml());
                    return e.join("")
                }
                ,
                e.prototype.isRemovedComment = function() {
                    return !this.isPost && -1 != ["rejected", "pending"].indexOf(this.data.status) || "deleted" === this.data.status
                }
                ,
                e.prototype.isPostPending = function() {
                    return this.isPost && this.data && "pending" == this.data.status
                }
                ,
                e.prototype.updateCommentIDAttribute = function() {
                    this.container.setAttribute("data-comment-id", this.data.ID),
                    this.container.setAttribute("tabindex", "0")
                }
                ,
                e.prototype.updateCommentUIDAttribute = function() {
                    this.data.sender.UID && this.container.setAttribute("data-gig-uid", this.data.sender.UID)
                }
                ,
                e.prototype.updateAll = function(e, t) {
                    void 0 === e && (e = !1),
                    void 0 === t && (t = !0);
                    var i = !1;
                    if (!this.container || !this.container.parentNode) {
                        i = !0,
                        e = !0;
                        var o = this.getParent();
                        if (!o && this.data.parentID)
                            return;
                        var n = o ? o.getElement("replies") : this.plugin.getElement("comments");
                        if (!n)
                            return;
                        var s = document.createElement("div");
                        if (s.setAttribute("class", "gig-comment"),
                        this.isNew && (window.gigya.utils.DOM.addClassToElement(s, "gig-comment-newComment"),
                        this.plugin.isMobileUI && window.setTimeout(function() {
                            window.gigya.utils.DOM.removeClassFromElement(s, "gig-comment-newComment"),
                            this.updateCommentHighlightingBadgesBackgroundColorForNewComment(this.data.highlightGroups)
                        }, 5e3)),
                        s.setAttribute("data-level", this.level.toString()),
                        this.data.tags)
                            for (var a = 0; a < this.data.tags.length; a++)
                                s.setAttribute("data-tag-" + this.data.tags[a].replace(/[^A-Za-z0-9]/g, "_"), "1");
                        s.innerHTML = this.getHtml(),
                        (this.isTemp || this.isNew) && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s),
                        this.container = s
                    }
                    e && (this.container.innerHTML = this.getHtml()),
                    this.isRemovedComment() && !this.isTemp && this.setRemovedCommentProp(),
                    this.updateComment(e),
                    this.updateVote(),
                    this.updateRepliesCount(),
                    this.updateMediaItem(),
                    this.updateTitle(e),
                    this.updateCommentIDAttribute(),
                    this.updateCommentUIDAttribute(),
                    t && this.updateReplies(e),
                    this.plugin.setLinks(this.getContainer()),
                    (i || e) && this.bindAll()
                }
                ,
                e.prototype.setRemovedCommentProp = function() {
                    "pending" == this.data.status ? this.data.commentText = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("this_review_is_awaiting_moderation") : this.getText("this_comment_is_awaiting_moderation") : this.data.commentText = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("this_review_has_been_deleted") : this.getText("this_comment_has_been_deleted"),
                    this.data.mediaItems = null,
                    this.data.taggedUsers = null,
                    this.data.ratings = null,
                    this.data.highlightGroups = null,
                    window.gigya.utils.DOM.addClassToElement(this.getElement("self-data"), "gig-comment-data-removed"),
                    window.gigya.utils.DOM.addClassToElement(this.getElement("photo"), "gig-comment-photo-removed"),
                    window.gigya.utils.DOM.addClassToElement(this.getElement("title"), "gig-comment-title-removed"),
                    this.data.replies && 0 !== this.data.replies.length || this.dispose()
                }
                ,
                e.prototype.showRatings = function() {
                    var e = this.getElement("rating-drop");
                    window.gigya.utils.DOM.addClassToElement(e, "gig-comment-rating-drop-down");
                    var t = 0
                      , i = document.createElement("div");
                    i.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString(),
                    window.gigya.utils.DOM.appendToBody(i),
                    i.className = "gig-comments-container gig-comment-rating-dimensions",
                    i.id = "gig_" + (new Date).getTime();
                    var o = this.plugin.settings.ratingDims;
                    if (o && i && this.data.ratings) {
                        for (var n = 0; n < o.length; n++) {
                            var s = o[n];
                            if ("_overall" != s.id && this.data.ratings[s.id]) {
                                var a = document.createElement("div");
                                a.innerHTML = this.plugin.templates.rating,
                                a.className = "gig-comment-rating",
                                i.appendChild(a);
                                var g = window.gigya.utils.DOM.getElementsByClass(a, "gig-comment-rating-title")[0];
                                g && (g.innerHTML = s.name + ":"),
                                t = Math.max(t, g.offsetWidth + 2);
                                var r = window.gigya.utils.DOM.getElementsByClass(a, "gig-comment-rating-value")[0];
                                r && (r.innerHTML = "",
                                this.updateStarsElement(r, s.id))
                            }
                        }
                        window.gigya._.plugins.utils.css.addCss("#" + i.id + " *.gig-comment-rating-title { width:" + t + "px; }", "");
                        var l = window.gigya.utils.DOM.getElementPosition(e);
                        i.style.top = l.top + e.offsetHeight + "px";
                        var m = Math.max(5, l.left + (e.offsetWidth - i.offsetWidth) / 2);
                        i.style.left = m + "px";
                        var d = l.left - m - 11;
                        window.gigya._.plugins.utils.css.addCss("#" + i.id + ".gig-comment-rating-dimensions:before {margin-left: " + d + "px}", "")
                    }
                    window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(i, function(t, i) {
                        window.gigya.utils.DOM.removeClassFromElement(e, "gig-comment-rating-drop-down"),
                        i && t.target == e && (t.stopPropagation(),
                        t.preventDefault())
                    }, null)
                }
                ,
                e.prototype.updateTitle = function(e) {
                    var t = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-comment-title")[0];
                    if (t) {
                        if (e && this.setElementHtml("title", this.plugin.templates.commentTitle),
                        this.data.ratings && this.data.ratings._overall || this.data.commentTitle && !this.data.parentID) {
                            t.style.display = "",
                            this.setElementHtml("summary", this.data.commentTitle || "");
                            var i = this.getElement("rating")
                              , o = this.getElement("rating-drop");
                            if (i)
                                if (o && (o.style.display = "none"),
                                i.innerHTML = "",
                                this.data.ratings && this.data.ratings._overall) {
                                    for (var n in i.style.display = "",
                                    this.updateStarsElement(i, "_overall"),
                                    this.data.ratings)
                                        if ("_overall" != n) {
                                            o && (o.style.display = "");
                                            break
                                        }
                                } else
                                    i.style.display = "none"
                        } else
                            t.style.display = "none";
                        var s = this.getElement("header-left");
                        this.plugin.removeUserBadges(s);
                        var a = this.getElement("username")
                          , g = this.plugin.createUserHighlightingBadges(a, this.data.highlightGroups)
                          , r = this.getElement("self-data");
                        g ? window.gigya.utils.DOM.addClassToElement(r, "gig-comment-withBadges") : window.gigya.utils.DOM.removeClassFromElement(r, "gig-comment-withBadges")
                    }
                }
                ,
                e.prototype.updateStarsElement = function(e, t) {
                    for (var i = this.data.ratings[t], o = 0; o < 5; o++) {
                        var n = document.createElement("div");
                        window.gigya.utils.DOM.addClassToElement(n, "gig-comment-rating-star");
                        var s = "";
                        o < Math.floor(i) ? s = "gig-comment-rating-star-full" : o == i - .5 && (s = "gig-comment-rating-star-half"),
                        window.gigya.utils.DOM.addClassToElement(n, s),
                        e.appendChild(n)
                    }
                }
                ,
                e.prototype.updateMediaItem = function() {
                    var e = this.getElement("mediaItem");
                    if (e)
                        if (this.data.mediaItems && this.data.mediaItems.length > 0) {
                            e.style.display = "";
                            var t = this.data.mediaItems[0];
                            e.innerHTML = "",
                            this.plugin.buildMediaItemElement(e, t)
                        } else
                            e.style.display = "none"
                }
                ,
                e.prototype.updateVote = function() {
                    this.plugin.user || (this.data.vote = "none");
                    var e = this.getElement("vote-pos")
                      , t = this.getElement("vote-neg")
                      , i = this.getElement("vote-total")
                      , o = this.getElement("likeLink")
                      , n = this.plugin.settings.enableVoting
                      , s = this.plugin.settings.allowNegativeVoting;
                    e && (e.style.display = n ? "" : "none"),
                    t && (t.style.display = n ? "" : "none"),
                    i && (i.style.display = n ? "" : "none");
                    var a = this.getElement("footer-right");
                    switch (a && (this.plugin.settings.displayPosNegVotes ? window.gigya.utils.DOM.removeClassFromElement(a, "gig-comment-vote-posneg") : window.gigya.utils.DOM.addClassToElement(a, "gig-comment-vote-posneg")),
                    t && (t.style.display = s ? "" : "none"),
                    this.data.vote) {
                    case "pos":
                        e && window.gigya.utils.DOM.addClassToElement(e, "gig-comment-vote-pos-down"),
                        t && window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-vote-neg-down"),
                        o && (o.innerHTML = this.getText("unlike"));
                        break;
                    case "neg":
                        e && window.gigya.utils.DOM.removeClassFromElement(e, "gig-comment-vote-pos-down"),
                        t && window.gigya.utils.DOM.addClassToElement(t, "gig-comment-vote-neg-down");
                        break;
                    default:
                        e && window.gigya.utils.DOM.removeClassFromElement(e, "gig-comment-vote-pos-down"),
                        t && window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-vote-neg-down"),
                        o && (o.innerHTML = this.getText("like"))
                    }
                    if (i)
                        if (!this.plugin.settings.displayPosNegVotes && this.plugin.settings.allowNegativeVoting) {
                            var g = this.data.posVotes - this.data.negVotes
                              , r = g.toString();
                            g > 0 && (r = "+" + g),
                            i.innerHTML = r,
                            i.style.display = ""
                        } else
                            i.style.display = "none";
                    e && (this.plugin.settings.displayPosNegVotes || !this.plugin.settings.allowNegativeVoting ? (e.innerHTML = this.data.posVotes.toString(),
                    window.gigya.utils.DOM.addClassToElement(e, "gig-comment-vote-with-value")) : (window.gigya.utils.DOM.removeClassFromElement(e, "gig-comment-vote-with-value"),
                    e.innerHTML = "")),
                    t && (this.plugin.settings.displayPosNegVotes ? (t.innerHTML = this.data.negVotes.toString(),
                    window.gigya.utils.DOM.addClassToElement(t, "gig-comment-vote-with-value")) : (t.innerHTML = "",
                    window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-vote-with-value"))),
                    a && (this.isTemp ? a.style.display = "none" : a.style.display = "")
                }
                ,
                e.prototype.listenForCombination = function(e) {
                    if (e || (e = window.event),
                    40 == e.keyCode && e.shiftKey) {
                        var t = window.gigya.utils.stringUtils.format('<div class="gig-comments-container">Stream ID: {0}<br />Comment ID: {1}</div>', this.plugin.params.streamID, this.id);
                        window.gigya.global.putGMBalloonNextTo(this.getContainer(), t, "Comment Data", 400, 100),
                        e.preventDefault && e.preventDefault()
                    }
                }
                ,
                e.prototype.mouseOver = function() {
                    var e = this;
                    this.plugin.isMobileUI || (this.keydownDelegate || (this.keydownDelegate = function(t) {
                        return e.listenForCombination(t)
                    }
                    ),
                    window.gigya.utils.DOM.isElementClass(this.container, "gig-comment-newComment") && (window.gigya.utils.DOM.removeClassFromElement(this.container, "gig-comment-newComment"),
                    this.updateCommentHighlightingBadgesBackgroundColorForNewComment(this.data.highlightGroups),
                    this.plugin.newCommentsCount--,
                    this.plugin.updateStrip()),
                    window.gigya.utils.DOM.addEventListener(document, "keydown", this.keydownDelegate))
                }
                ,
                e.prototype.mouseOut = function() {
                    try {
                        window.gigya.utils.DOM.removeEventListener(document, "keydown", this.keydownDelegate)
                    } catch (e) {}
                }
                ,
                e.prototype.updateComment = function(e) {
                    this.updateStatus();
                    var t = window.gigya.utils.sanitize.sanitizeHTML(window.gigya.global.wbr(this.getUsername(), 20)).replace(/\$/g, "&#36;");
                    this.setElementHtml("username", t),
                    this.setElementHtml("time", this.getTimeString());
                    var i = this.getElement("viaProvider");
                    i && (this.viaProvider ? (i.innerHTML = this.getText("via_provider", "%provider", this.viaProvider),
                    window.gigya.utils.DOM.addClassToElement(i, "gig-comment-viaProvider-" + this.viaProvider.toLowerCase()),
                    i.style.display = "") : (i.innerHTML = "",
                    i.style.display = "none"));
                    var o = this.createCommentHighlightingBadges(this.data.highlightGroups)
                      , n = this.getElement("self-data");
                    o ? window.gigya.utils.DOM.addClassToElement(n, "gig-comment-withBadges") : window.gigya.utils.DOM.removeClassFromElement(n, "gig-comment-withBadges");
                    var a = (this.data.commentText || "").replace(/\$/g, "&#36;");
                    a = a.replace(/\n/g, "<br />"),
                    this.plugin.settings.enableLinks && (a = window.gigya._.plugins.utils.DOM.replaceLinksWithHTMLElements(a)),
                    this.setElementHtml("body", a);
                    var g = this.getElement("edited");
                    g && (this.plugin.settings.userEditComment && this.data.edited ? g.style.display = "" : g.style.display = "none");
                    var r = this.getElement("likeLink");
                    r && (this.plugin.settings.enableVoting && !this.plugin.settings.allowNegativeVoting ? r.style.display = "" : r.style.display = "none");
                    var l = this.getElement("editLink");
                    l && (this.plugin.settings.userEditComment && this.data.sender.isSelf && !this.plugin.settings.readOnly ? l.style.display = "" : l.style.display = "none");
                    var m = this.getElement("deleteLink");
                    m && (this.plugin.settings.allowCommentDeletion && this.data.sender.isSelf && !this.plugin.user.isGuest ? m.style.display = "" : m.style.display = "none");
                    var d = this.getElement("replyLink");
                    if (d) {
                        !this.isTemp && !this.viaProvider && "pending" != this.data.status && this.level < this.plugin.settings.threadingDepth && !this.plugin.settings.readOnly && "disabled" != this.plugin.settings.enableCommentBody && "readOnly" != this.plugin.streamInfo.status ? d.style.display = "" : d.style.display = "none";
                        this.getElement("likeLink")
                    }
                    var c = this.getElement("shareLink");
                    if (c && (c.style.display = this.plugin.params.shareUserAction && !this.plugin.params.hideShareButtons && this.plugin.shareEnabled ? "" : "none"),
                    this.plugin.setLinks(this.container),
                    this.data.ratings) {
                        var u = ""
                          , p = this.plugin.templates.rating;
                        for (var h in this.data.ratings)
                            u += window.gigya.utils.templates.fill(p, {
                                starClassName: "gig-comments-star",
                                ratingID: h,
                                value: this.data.ratings[h]
                            });
                        this.setElementHtml("ratings", u)
                    }
                    var b = this.data.sender.loginProvider
                      , x = window.gigya.utils.templates.fill(this.plugin.templates.photo, {
                        photoURL: window.gigya.global.getPhotoURL(this.data.sender.photoURL, s.Images.getPhotoFullName(this.data.isModerator ? "mod_icon" : "Avatar_empty", this.plugin.pixelRatio)),
                        providerImage: b && "site" != b.toLowerCase() && "customopenid" != b.toLowerCase() ? this.plugin.templates.providerImage : "",
                        providerImageUrl: b ? s.Images.getPhotoFullName("providers/" + this.data.sender.loginProvider + "User", this.plugin.pixelRatio) : ""
                    })
                      , f = this.getElement("photo");
                    if (f && "" == f.innerHTML) {
                        f.style.visibility = "hidden",
                        f.innerHTML = x;
                        var v = f.getElementsByTagName("img");
                        if (v && v.length > 0) {
                            var y = v[0];
                            window.gigya.utils.DOM.addEventListener(y, "load", function() {
                                window.gigya.global.scaleImageToContainer(v[0], !0, function() {
                                    f.style.visibility = ""
                                })
                            })
                        }
                    }
                    var w = this.getElement("flag");
                    if (w) {
                        var E = this.plugin.user.isGuest ? "guest" : this.plugin.user.UID;
                        w.style.display = !this.plugin.settings.enableFlagging || window.gigya.localInfo.isTouch || this.isTemp ? "none" : "",
                        this.plugin.state.flags && this.plugin.state.flags[E + "_" + this.id] && this.markAsFlagged()
                    }
                }
                ,
                e.prototype.createCommentHighlightingBadges = function(e) {
                    var t = this.getElement("header-right")
                      , i = this.plugin.getHighlightingBadges(e, ["comment"])
                      , o = i ? i[0] : null
                      , s = this.getElement("commentBadge")
                      , a = this.getElement("content")
                      , g = this.getElement("photo");
                    return window.gigya.utils.DOM.removeClassFromElement(a, "gig-comment-badge-", !0),
                    o ? (s ? (s.innerHTML = "",
                    window.gigya.utils.DOM.removeClassFromElement(s, "gig-badge-", !0),
                    window.gigya.utils.DOM.removeClassFromElement(s, "gig-badge-border")) : (s = document.createElement("div"),
                    t.appendChild(s)),
                    window.gigya.utils.DOM.addClassToElement(s, "gig-comment-commentBadge"),
                    window.gigya.utils.DOM.addClassToElement(s, o.className),
                    this.plugin.isMobileUI || (s.innerHTML = o.badgeText),
                    n.BadgeFrameEnum[o.badgeFrame] === n.BadgeFrameEnum.rectangle && window.gigya.utils.DOM.addClassToElement(s, "gig-badge-border"),
                    window.gigya.utils.DOM.addClassToElement(a, "gig-comment-colored-background"),
                    window.gigya.utils.DOM.isElementClass(this.container, "gig-comment-newComment") || window.gigya.utils.DOM.addClassToElement(a, o.commentClassName),
                    !0) : (window.gigya.utils.DOM.removeClassFromElement(g, "gig-comment-photo-badge"),
                    window.gigya.utils.DOM.removeClassFromElement(a, "gig-comment-colored-background"),
                    s && (s.style.display = "none"),
                    !1)
                }
                ,
                e.prototype.updateCommentHighlightingBadgesBackgroundColorForNewComment = function(e) {
                    if (e) {
                        var t = this.plugin.getHighlightingBadges(e, ["comment"])[0];
                        if (t) {
                            var i = this.getElement("self-data");
                            window.gigya.utils.DOM.addClassToElement(i, t.commentClassName)
                        }
                    }
                }
                ,
                e.prototype.clearError = function() {
                    this.error = null
                }
                ,
                e.prototype.updateStatus = function(e) {
                    null != e && (this.error = e);
                    var t = this.getElement("status");
                    t && (window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-status-info"),
                    window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-status-error"),
                    window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-status-pending"),
                    window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-status-moderator-edited"),
                    this.error ? (window.gigya.utils.DOM.addClassToElement(t, "gig-comment-status-error"),
                    t.innerHTML = this.error) : this.info ? (window.gigya.utils.DOM.addClassToElement(t, "gig-comment-status-info"),
                    t.innerHTML = this.info) : this.isPostPending() ? (window.gigya.utils.DOM.addClassToElement(t, "gig-comment-status-info"),
                    t.innerHTML = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("your_review_is_awaiting_moderation") : this.getText("your_comment_is_awaiting_moderation")) : this.data.moderatorEdit ? (window.gigya.utils.DOM.addClassToElement(t, "gig-comment-status-moderator-edited"),
                    window.gigya.utils.DOM.addClassToElement(t, "gig-comment-status-info"),
                    t.innerHTML = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("review_edited_by_a_moderator") : this.getText("comment_edited_by_a_moderator")) : t.innerHTML = "")
                }
                ,
                e.prototype.updateReplies = function(e) {
                    void 0 === e && (e = !1);
                    for (var t = 0; t < this.replies.length; t++)
                        this.replies[t].updateAll(e)
                }
                ,
                e.prototype.getTimeString = function() {
                    var e = (new Date).getTime();
                    (new Date).setTime(this.data.timestamp);
                    var t = (e - this.data.timestamp) / 1e3 / 60 / 60;
                    return 60 * t < 1 ? this.getText("less_than_a_minute_ago") : t < 1 ? 1 == Math.round(60 * t) ? this.getText("one_minute_ago") : this.getText("num_minutes_ago", "%num", Math.round(60 * t).toString()) : t < 24 ? 1 == Math.round(t) ? this.getText("one_hour_ago") : this.getText("num_hours_ago", "%num", Math.round(t).toString()) : 1 == Math.round(t / 24) ? this.getText("one_day_ago") : this.getText("num_days_ago", "%num", Math.round(t / 24).toString())
                }
                ,
                e.prototype.bindAll = function() {
                    var e = this
                      , t = this.getContainer();
                    t && (this.bindButtonSubmitElement("repliesArrow", this.expandCollapse),
                    this.bindButtonSubmitElement("deleteLink", this.showDeleteDialog),
                    this.bindButtonSubmitElement("replyLink", this.showReplyBox),
                    this.bindButtonSubmitElement("likeLink", this.onVotePosClick),
                    this.bindButtonSubmitElement("vote-pos", this.onVotePosClick),
                    this.bindButtonSubmitElement("vote-neg", this.onVoteNegClick),
                    this.bindButtonSubmitElement("shareLink", this.onShareClick),
                    this.bindButtonSubmitElement("editLink", this.onEditClick),
                    this.bindButtonSubmitElement("flag", this.showFlagDialog),
                    this.bindButtonSubmitElement("rating-drop", this.showRatings),
                    window.gigya.utils.DOM.addEventListener(this.getContainer(), "mouseover", function() {
                        return e.mouseOver()
                    }),
                    window.gigya.utils.DOM.addEventListener(this.getContainer(), "mouseout", function() {
                        return e.mouseOut()
                    }),
                    window.gigya.utils.DOM.enableSafeCopy(t))
                }
                ,
                e.prototype.onEditClick = function(e) {
                    var t = this
                      , i = this.getElement("editbox");
                    if (i) {
                        this.plugin.tempComposeBox && (this.plugin.tempComposeBox.data.ID == this.id ? this.plugin.tempComposeBox.focus() : this.plugin.tempComposeBox.close());
                        var o = this.getElement("self-data");
                        o.style.display = "none",
                        i.style.display = "block";
                        var n = this.getElement("photo");
                        n && (n.style.display = "none");
                        var s = this.getElement("title")
                          , g = s.style.display;
                        s && (s.style.display = "none"),
                        this.plugin.tempComposeBox = new a.EditCommentBox(this.plugin,i,this.data,function() {
                            o.style.display = "",
                            i.style.display = "none",
                            n && (n.style.display = ""),
                            s && (s.style.display = g),
                            t.plugin.tempComposeBox = null
                        }
                        ),
                        this.plugin.tempComposeBox.open()
                    }
                }
                ,
                e.prototype.showReplyBox = function() {
                    var e = this;
                    if (this.plugin.tempComposeBox) {
                        if (this.plugin.tempComposeBox.data.parentID == this.id)
                            return void this.plugin.tempComposeBox.focus();
                        this.plugin.tempComposeBox.close()
                    }
                    this.composebox = new o.NewCommentBox(this.plugin,this.getElement("replybox"),this.data.ID,function() {
                        e.composebox = null,
                        e.plugin.tempComposeBox = null
                    }
                    ),
                    this.plugin.tempComposeBox = this.composebox,
                    this.composebox.open()
                }
                ,
                e.prototype.onShareClick = function(e) {
                    var t = this;
                    if (e.target == this.plugin.simpleShareSource)
                        this.plugin.simpleShareSource = null;
                    else {
                        var i = this.getElement("shareLink");
                        i.id || (i.id = this.id + "_lnkShare"),
                        this.plugin.simpleShareSource = i;
                        var o = this.getShareUserAction(this.level > 0);
                        if (o && this.plugin.settings.enableDirectCommentLinking && (o.linkBack = window.gigya._.plugins.utils.URL.addOrReplaceHashFragment(o.linkBack, "gig_comment_id", this.id)),
                        this.data.mediaItems && this.data.mediaItems.length > 0) {
                            var n = this.data.mediaItems[0];
                            "rich" != n.type.toLowerCase() && "video" != n.type.toLowerCase() || o.setDescription(o.description + "\n" + n.url)
                        }
                        window.gigya.socialize.showShareUI(this.plugin.params, {
                            containerID: null,
                            width: null,
                            height: null,
                            operationMode: "simpleShare",
                            snapToElementID: i.id,
                            userAction: o,
                            onClose: function() {
                                t.plugin.simpleShareSource = null,
                                i.focus()
                            }
                        })
                    }
                }
                ,
                e.prototype.getShareUserAction = function(e) {
                    var t = this.plugin.params.shareUserAction;
                    if (t)
                        return (t = t.clone()).description && t.setDescription(this.replacePlaceholders(t.description)),
                        t.title && t.setTitle(this.replacePlaceholders(t.title)),
                        t
                }
                ,
                e.prototype.replacePlaceholders = function(e) {
                    return e.replace(/%username/gi, this.data.sender.name || this.plugin.getText("guest")).replace(/%pagetitle/gi, document.title).replace(/%rating/gi, this.data.ratings && this.data.ratings._overall ? this.data.ratings._overall.toString() : "").replace(/%commenttext/gi, this.data.commentText).replace(/%commenttitle/gi, this.data.commentTitle)
                }
                ,
                e.prototype.setVote = function(e, t) {
                    var i = this;
                    if (this.plugin.user && this.plugin.user.isConnected) {
                        if (!this.voteInProgress) {
                            switch (this.voteInProgress = !0,
                            window.gigya.comments.vote(this.plugin.params, {
                                vote: e,
                                commentID: this.id,
                                callback: function() {
                                    i.voteInProgress = !1
                                }
                            }),
                            e) {
                            case "pos":
                                this.data.posVotes++;
                                break;
                            case "neg":
                                this.data.negVotes++
                            }
                            switch (this.data.vote) {
                            case "pos":
                                this.data.posVotes--;
                                break;
                            case "neg":
                                this.data.negVotes--
                            }
                            this.data.vote = e,
                            this.updateVote();
                            var o = {
                                eventName: "commentVoted",
                                categoryID: this.plugin.params.categoryID,
                                streamID: this.plugin.params.streamID,
                                comment: this.data,
                                vote: e,
                                mode: this.plugin.textMode
                            };
                            window.gigya.events.dispatchForWidget(o, this.plugin.params),
                            (o = window.gigya.utils.object.clone(o)).eventName = "commentVote",
                            window.gigya.events.dispatchForWidget(o, this.plugin.params)
                        }
                    } else
                        this.plugin.settings.useSiteLogin ? this.plugin.mainComposeBox.onSiteLoginClick() : this.plugin.mainComposeBox.onLoginClick(t, !1, function() {
                            i.setVote(e, t)
                        })
                }
                ,
                e.prototype.onVotePosClick = function(e) {
                    var t = e.target || e.srcElement;
                    "pos" == this.data.vote ? this.setVote("none", t) : this.setVote("pos", t)
                }
                ,
                e.prototype.onVoteNegClick = function(e) {
                    var t = e.target || e.srcElement;
                    "neg" == this.data.vote ? this.setVote("none", t) : this.setVote("neg", t)
                }
                ,
                e.prototype.showDeleteDialog = function() {
                    var e = this;
                    if (this.plugin.settings.allowCommentDeletion) {
                        var t = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("delete_review") : this.getText("delete_comment")
                          , i = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("are_you_sure_you_want_to_permanently_delete_your_review_qm") : this.getText("are_you_sure_you_want_to_permanently_delete_your_comment_qm");
                        this.plugin.showDialog(t, i, this.getText("yes"), function() {
                            e.deleteComment()
                        }, this.getText("no"))
                    }
                }
                ,
                e.prototype.showFlagDialog = function() {
                    var e = this;
                    if (this.plugin.settings.enableFlagging && !this.isFlagged) {
                        var t = this.getElement("flag");
                        window.gigya.utils.DOM.addClassToElement(t, "gig-comment-flag-visible");
                        var i = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("report_review_to_site_owner") : this.getText("report_comment_to_site_owner")
                          , o = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("are_you_sure_you_want_to_mark_this_review_as_inappropriate") : this.getText("are_you_sure_you_want_to_mark_this_comment_as_inappropriate")
                          , s = this.plugin.textMode == n.TextMode.REVIEWS && 0 == this.level ? this.getText("yes_flag_this_review") : this.getText("yes_flag_this_comment");
                        this.plugin.showDialog(i, o, s, function() {
                            e.flag(),
                            t.focus()
                        }, this.getText("cancel"), function() {
                            window.gigya.utils.DOM.removeClassFromElement(t, "gig-comment-flag-visible"),
                            t.focus()
                        })
                    }
                }
                ,
                e.prototype.flag = function() {
                    window.gigya.comments.flagComment(this.plugin.params, {
                        commentID: this.id
                    }),
                    this.markAsFlagged(),
                    this.plugin.saveState()
                }
                ,
                e.prototype.deleteComment = function() {
                    window.gigya.comments.deleteComment(this.plugin.params, {
                        commentID: this.id
                    });
                    for (var e = this.getParent(); e; )
                        e.descendantsCount--,
                        e.updateRepliesCount(),
                        e = e.getParent();
                    this.plugin.updateCount(),
                    this.changeStatus("deleted"),
                    "published" === this.data.previousStatus && (this.plugin.streamInfo.commentCount--,
                    this.data.isReply() || this.plugin.streamInfo.ratingCount--),
                    this.updateAll(),
                    this.plugin.updateCount()
                }
                ,
                e.prototype.changeStatus = function(e) {
                    this.data.previousStatus = this.data.status,
                    this.data.status = e
                }
                ,
                e
            }();
            t.Comment = g
        },
        159: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(29)
              , n = function() {
                function e(e, t, i, o) {
                    void 0 === o && (o = {}),
                    this.container = e,
                    this.plugin = t,
                    this.providers = i,
                    this.userIdentities = o,
                    this.selectedProviders = {},
                    this.shownProviders = {},
                    this.initUI(),
                    this.loadSelected()
                }
                return e.prototype.getSelected = function() {
                    var e = [];
                    for (var t in this.selectedProviders)
                        e.push(t);
                    return e
                }
                ,
                e.prototype.isProviderConnected = function(e) {
                    return this.userIdentities && null != this.userIdentities[e]
                }
                ,
                e.prototype.initUI = function() {
                    var e = this;
                    this.container.innerHTML = "";
                    for (var t = [], i = [], n = 0; n < this.providers.length; n++) {
                        var s = this.providers[n];
                        this.isProviderConnected(s.name) ? t.push(s) : i.push(s)
                    }
                    this.providers = t.concat(i);
                    var a = this.plugin.params.minShareOptions || (this.plugin.isMobileUI ? 1 : 2)
                      , g = Math.max(a, t.length);
                    for (n = 0; n < this.providers.length; n++) {
                        s = this.providers[n];
                        if (!this.getProviderElement(s.name)) {
                            var r = this.isProviderConnected(s.name)
                              , l = document.createElement("div");
                            l.className = "gig-comments-share-provider",
                            l.style.backgroundImage = 'url("' + o.Images.getPhotoFullName("shareToProviders/" + s.name + "_" + (r ? "color" : "grey"), this.plugin.pixelRatio) + '")',
                            l.setAttribute("data-provider", s.name),
                            l.innerHTML = '<div class="gig-comments-share-provider-checkbox gig-comments-checkbox" data-provider="' + s.name + '"></div>',
                            l.setAttribute("aria-label", s.displayName),
                            window.gigya.utils.DOM.addButtonSubmitListener(l, function(t) {
                                return e.providerClick(t)
                            }),
                            this.container.appendChild(l),
                            n < g && this.showProvider(s.name)
                        }
                    }
                    if (this.providers.length > g) {
                        var m = document.createElement("div");
                        m.className = "gig-comments-share-more",
                        m.setAttribute("data-provider", "more"),
                        m.setAttribute("aria-label", this.plugin.getText("show_more")),
                        this.container.appendChild(m),
                        window.gigya.utils.DOM.addButtonSubmitListener(m, function() {
                            e.showMore(m)
                        })
                    }
                }
                ,
                e.prototype.showProvider = function(e) {
                    this.shownProviders[e] = 1;
                    var t = this.getProviderElement(e);
                    t && window.gigya.utils.DOM.addClassToElement(t, "gig-comments-share-provider-shown")
                }
                ,
                e.prototype.check = function(e, t) {
                    if (this.isProviderConnected(e)) {
                        this.selectedProviders[e] = 1;
                        var i = this.getProviderElement(e)
                          , o = window.gigya.utils.DOM.getElementsByClass(i, "gig-comments-checkbox")[0];
                        window.gigya.utils.DOM.addClassToElement(o, "gig-comments-checkbox-checked")
                    } else
                        t || this.connectProvider(e)
                }
                ,
                e.prototype.uncheck = function(e) {
                    delete this.selectedProviders[e];
                    var t = this.getProviderElement(e)
                      , i = window.gigya.utils.DOM.getElementsByClass(t, "gig-comments-checkbox")[0];
                    window.gigya.utils.DOM.removeClassFromElement(i, "gig-comments-checkbox-checked")
                }
                ,
                e.prototype.isProviderChecked = function(e) {
                    return null != this.selectedProviders[e]
                }
                ,
                e.prototype.providerClick = function(e) {
                    var t = this
                      , i = (e.target || e.srcElement).getAttribute("data-provider");
                    this.plugin.user.isConnected ? this.isProviderChecked(i) ? this.uncheck(i) : this.check(i) : window.gigya.socialize.login(this.plugin.params, {
                        provider: i,
                        callback: function(e) {
                            0 == e.errorCode && e.user && e.user.identities && (t.userIdentities = e.user.identities,
                            t.updateProviderIcon(i),
                            t.check(i))
                        }
                    })
                }
                ,
                e.prototype.getProviderElement = function(e) {
                    return window.gigya.utils.DOM.getElementsByAttribute(this.container, "*", "data-provider", e)[0]
                }
                ,
                e.prototype.showMore = function(e) {
                    var t = this
                      , i = window.gigya.utils.DOM.getElementPosition(e)
                      , n = document.createElement("div");
                    this.divMore = n,
                    n.setAttribute("role", "dialog"),
                    n.setAttribute("tabindex", "-1"),
                    n.style.position = "absolute",
                    null != n.style.zIndex && (n.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString()),
                    n.className = "gig-comments-container gig-composebox-morebox",
                    document.body.appendChild(n);
                    var s = window.gigya.utils.viewport.getInnerSize()
                      , a = Math.max(0, window.gigya.localInfo.quirksMode ? i.left - 2 : i.left);
                    a + n.offsetWidth > s.w - 40 && (a = (s.w - n.offsetWidth) / 2),
                    n.style.left = a + "px",
                    n.style.top = i.top + e.offsetHeight - 2 + (window.gigya.localInfo.quirksMode ? -2 : 0) + "px",
                    n.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.composeShareMoreBox, {
                        more_share_destinations: this.plugin.getText("more_share_destinations")
                    });
                    var g = window.gigya.utils.DOM.getElementsByClass(n, "gig-composebox-morebox-providers")[0];
                    if (g)
                        for (var r = 0; r < this.providers.length; r++) {
                            var l = this.providers[r];
                            if (!this.shownProviders[this.providers[r].name] && l) {
                                var m = document.createElement("li");
                                m.style.backgroundImage = 'url("' + o.Images.getPhotoFullName("shareToProviders/" + l.name + "_color", this.plugin.pixelRatio) + '")',
                                m.innerHTML = l.displayName,
                                m.setAttribute("data-provider", l.name),
                                m.setAttribute("role", "button"),
                                m.setAttribute("tabindex", "0"),
                                window.gigya.utils.DOM.addButtonSubmitListener(m, function(e) {
                                    return t.moreProviderClick(e)
                                }),
                                g.appendChild(m)
                            }
                        }
                    var d = window.gigya.utils.DOM.getElementsByClass(n, "gig-composebox-morebox-close")[0];
                    window.gigya.utils.DOM.addButtonSubmitListener(d, function() {
                        return t.closeMore(e)
                    }),
                    window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(n, function(t, i) {
                        i && t.target == e && o.Events.cancelEvent(t)
                    }, null),
                    n.focus()
                }
                ,
                e.prototype.closeMore = function(e) {
                    this.divMore && this.divMore.parentNode.removeChild(this.divMore),
                    e && e.focus()
                }
                ,
                e.prototype.moreProviderClick = function(e) {
                    var t = (e.target || e.srcElement).getAttribute("data-provider");
                    this.isProviderConnected(t) || this.connectProvider(t),
                    this.closeMore(),
                    this.showProvider(t)
                }
                ,
                e.prototype.connectProvider = function(e) {
                    var t = this;
                    window.gigya.socialize.addConnection(this.plugin.params, {
                        provider: e,
                        callback: function(i) {
                            0 == i.errorCode && i.user && i.user.identities && (t.userIdentities = i.user.identities,
                            t.updateProviderIcon(e),
                            t.check(e))
                        }
                    })
                }
                ,
                e.prototype.updateProviderIcon = function(e) {
                    var t = this.isProviderConnected(e)
                      , i = this.getProviderElement(e);
                    i && (i.style.backgroundImage = 'url("' + o.Images.getPhotoFullName("shareToProviders/" + e + "_" + (t ? "color" : "grey"), this.plugin.pixelRatio) + '")')
                }
                ,
                e.prototype.updateIcons = function() {
                    for (var e in this.userIdentities = this.plugin.user.identities,
                    this.shownProviders)
                        this.updateProviderIcon(e);
                    if (this.plugin.user.isConnected)
                        this.loadSelected();
                    else
                        for (var e in this.shownProviders)
                            this.uncheck(e)
                }
                ,
                e.prototype.saveSelected = function() {
                    window.gigya.utils.cookie.set("_gig_comments_selected_providers", this.getSelected().join(","))
                }
                ,
                e.prototype.loadSelected = function() {
                    var e = window.gigya.utils.cookie.get("_gig_comments_selected_providers")
                      , t = e ? e.split(",") : []
                      , i = this.plugin.settings.shareToSNCheckboxChecked && null == e;
                    for (var o in this.shownProviders)
                        i || window.gigya.utils.array.indexOf(t, o) > -1 ? this.check(o, !0) : this.uncheck(o)
                }
                ,
                e
            }();
            t.ComposeShare = n
        },
        160: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0)
              , n = i(92)
              , s = i(29)
              , a = i(36)
              , g = function(e) {
                function t(t, i, o, n) {
                    return e.call(this, t, i, o, n) || this
                }
                return o.__extends(t, e),
                t.prototype.render = function() {
                    e.prototype.render.call(this),
                    this.populateFromCommentData(),
                    this.renderMediaItemIfNeeded(),
                    this.updateUI(),
                    this.activate()
                }
                ,
                t.prototype.renderMediaItemIfNeeded = function() {
                    this.data.mediaItems && 0 !== this.data.mediaItems.length && (this.mediaItem = this.data.mediaItems[0],
                    this.showMediaItemPreview(),
                    this.updateMediaItem())
                }
                ,
                t.prototype.populateFromCommentData = function() {
                    this.uiElements.summaryInput && this.data.commentTitle && (this.uiElements.summaryInput.value = this.data.commentTitle,
                    this.uiElements.summaryInput.refreshPlaceholder()),
                    this.uiElements.textArea && void 0 !== this.data.commentText && (this.uiElements.textArea.innerHTML = this.data.commentText,
                    s.UserTagging.replaceSpansWithUserTags(this.uiElements.textArea))
                }
                ,
                t.prototype.submitCallback = function(t) {
                    for (var i = [], o = t.comment.ID; o; ) {
                        var n = this.plugin.getComment(o);
                        i.push({
                            comment: n,
                            oldDescendantsCount: n.descendantsCount
                        }),
                        o = n.data.parentID
                    }
                    if (e.prototype.submitCallback.call(this, t),
                    0 == t.errorCode) {
                        var s = this.plugin.getComment(t.comment.ID);
                        s.data.replies = this.data.replies;
                        for (var a = 0, g = i; a < g.length; a++) {
                            var r = g[a]
                              , l = r.comment
                              , m = r.oldDescendantsCount;
                            l.descendantsCount = m,
                            l.updateRepliesCount()
                        }
                        "pending" === s.data.status && (this.plugin.streamInfo.commentCount--,
                        this.plugin.updateCount())
                    }
                }
                ,
                t.prototype.updateUI = function() {
                    this.plugin.user.isConnected ? e.prototype.updateUI.call(this) : this.close()
                }
                ,
                t.prototype.getSubmitText = function() {
                    return this.getText("done")
                }
                ,
                t.prototype.submit = function() {
                    var e = this
                      , t = {
                        commentID: this.data.ID,
                        commentText: "disabled" != this.plugin.settings.enableCommentBody ? this.data.commentText : null,
                        commentTitle: "disabled" == this.plugin.settings.enableCommentTitles || this.data.isReply() ? null : this.data.commentTitle,
                        taggedUsers: this.plugin.settings.enableUserTagging ? this.data.taggedUsers : null,
                        ratings: this.plugin.textMode == a.TextMode.REVIEWS ? this.data.ratings : null,
                        callback: function(t) {
                            return e.submitCallback(t)
                        }
                    };
                    this.plugin.settings.enableMediaItems && (t.mediaItems = this.data.mediaItems.length > 0 ? this.data.mediaItems[0].url : []),
                    window.gigya.comments.updateComment(this.plugin.params, t);
                    var i = this.plugin.getComment(this.data.ID);
                    i.data = this.data,
                    i.data.edited = !0,
                    i.info = "",
                    i.error = "",
                    i.isPost = !0,
                    i.isPostPending() && (i.info = this.plugin.textMode == a.TextMode.REVIEWS && 0 == i.level ? this.getText("your_edited_review_is_awaiting_moderation") : this.getText("your_edited_comment_is_awaiting_moderation")),
                    this.close(),
                    i.updateAll()
                }
                ,
                t.prototype.afterRender = function() {
                    this.hideElement(this.uiElements.logoutLink),
                    this.hideElement(this.uiElements.shareSection),
                    this.hideElement(this.uiElements.postAnonymouslySection),
                    this.hideElement(this.uiElements.loginBar),
                    this.uiElements.logoutLink = null,
                    this.uiElements.shareSection = null,
                    this.uiElements.postAnonymouslySection = null,
                    this.uiElements.loginBar = null
                }
                ,
                t.prototype.getTitle = function() {
                    return this.getText("editing") + "..."
                }
                ,
                t
            }(n.BaseComposeBox);
            t.EditCommentBox = g
        },
        161: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.defaultTemplates = {
                commentsPlugin: ['<div class="gig-comments-composebox"></div>', '<div class="gig-comments-header"></div>', '<div class="gig-comments-updates"></div>', '<div class="gig-comments-comments"></div>', '<div class="gig-comments-more"></div>'].join(""),
                commentsPluginComposeBottom: ['<div class="gig-comments-header"></div>', '<div class="gig-comments-updates"></div>', '<div class="gig-comments-comments"></div>', '<div class="gig-comments-more"></div>', '<div class="gig-comments-composebox"></div>'].join(""),
                header: ['<div class="gig-comments-header-left">', '<div class="gig-comments-count"></div>', "</div>", '<ul class="gig-comments-header-right gig-comments-linksContainer" role="presentation">', '<li class="gig-comments-sort">$sort</li>', '<li class="gig-comments-subscribe">$subscribe</li>', '<li class="gig-comments-rss">$rss</li>', "</ul>"].join(""),
                updates: ['<div class="gig-comments-updates-text"></div>', '<div class="gig-comments-updates-link"></div>'].join(""),
                comment: ['<div class="gig-comment-title"></div>', '<div class="gig-comment-photo"></div>', '<div class="gig-comment-data">', '<div class="gig-comment-editbox"></div>', '<div class="gig-comment-self-data">', '<div class="gig-comment-content">', '<div class="gig-comment-header">', '<div class="gig-comment-header-right">', '<div class="gig-comment-viaProvider"></div>', '<span class="gig-comment-edited">($edited)</span>', '<span class="gig-comment-time"></span>', "</div>", '<div class="gig-comment-header-left">', '<span class="gig-comment-username"></span>', "</div>", "</div>", '<div class="gig-comment-status"></div>', '<div class="gig-comment-body"></div>', '<div class="gig-comment-mediaItem"></div>', "</div>", '<div class="gig-comment-footer">', '<div class="gig-comment-footer-left">', '<ul class="gig-comments-linksContainer" role="presentation">', '<li class="gig-comment-likeLink" aria-atomic="true" aria-live="polite" aria-relevant="text">$like</li>', '<li class="gig-comment-replyLink">$reply</li>', '<li class="gig-comment-editLink">$edit</li>', '<li class="gig-comment-deleteLink">$delete</li>', '<li class="gig-comment-shareLink">$share</li>', '<li class="gig-comment-repliesArrow">', '<div class="gig-comment-repliesArrow-text"></div>', '<div class="gig-comment-repliesArrow-img"></div>', "</li>", "</ul>", '<div class="gig-comment-flag"></div>', "</div>", '<div class="gig-comment-footer-right">', '<div class="gig-comment-vote-total"></div>', '<div class="gig-comment-vote-pos" title="$like" aria-label="$like"></div>', '<div class="gig-comment-vote-neg" title="$unlike" aria-label="$unlike"></div>', "</div>", "</div>", "</div>", '<div class="gig-comment-replybox"></div>', '<div class="gig-comment-replies"></div>', "</div>"].join(""),
                mediaItem: ['<div class="gig-media-display">', '<div class="gig-media-thumbnail"></div>', '<div class="gig-media-overlay">', '<div class="gig-media-cancel"></div>', '<div class="gig-media-play"></div>', "</div>", "</div>", '<div class="gig-media-caption">', '<a href="$url" target="_blank" class="gig-media-caption-url" style="background-image:url($providerIcon);">$displayUrl</a>', '<div class="gig-media-caption-text">$caption</div>', "</div>"].join(""),
                dialog: ['<div class="gig-comments-dialog">', '<div class="gig-comments-dialog-caption-container">', '<div class="gig-comments-dialog-caption"></div>', '<div class="gig-comments-dialog-close"></div>', "</div>", '<div class="gig-comments-dialog-body"></div>', '<div class="gig-comments-dialog-buttons">', '<div class="gig-comments-dialog-button gig-comments-dialog-button-ok"></div>', '<div class="gig-comments-dialog-button gig-comments-dialog-button-cancel"></div>', "</div>", "</div>"].join(""),
                emailTextboxDialogBody: ['<div class="gig-comments-dialog-text">$text</div>', '<div class="gig-comments-dialog-textbox-container">', '<input type="textbox" class="gig-comments-dialog-textbox" value="$email" aria-label="$emailLabel" />', "</div>", '<div class="gig-comments-dialog-button gig-comments-dialog-textbox-button">$buttonText</div>', '<div class="gig-comments-dialog-error" aria-role="alert" aria-atomic="true" aria-live="polite"></div>'].join(""),
                photo: ['<img class="gig-comment-img" alt="" src="$photoURL" style="vertical-align:top" aria-hidden="true" />$providerImage'].join(""),
                providerImage: '<div class="gig-comment-providerLogo" aria-hidden="true"><img alt="" src="$providerImageUrl" style="vertical-align:top" /></div>',
                composebox: ['<div class="gig-composebox-error" role="alert" aria-atomic="true" aria-live="polite"></div>', '<div class="gig-composebox-header">', '<div class="gig-composebox-login">', '<div class="gig-composebox-social-login gig-comments-button">$login<div class="gig-composebox-login-icon"></div><div class="gig-composebox-login-drop-icon"></div></div>', '<div class="gig-composebox-site-login">$login</div>', '<div class="gig-composebox-or">$or</div>', '<div class="gig-composebox-guest-login gig-comments-button">$guest</div>', "</div>", '<div class="gig-composebox-header-right">', '<div class="gig-composebox-follow" aria-atomic="true" aria-live="polite"></div>', '<div class="gig-composebox-close"></div>', "</div>", '<div class="gig-composebox-header-left">', '<div class="gig-composebox-title"></div>', '<div class="gig-composebox-logout">(<span>$logout</span>)</div>', '<div class="gig-composebox-ratings"></div>', "</div>", "</div>", '<div class="gig-composebox-photo"></div>', '<div class="gig-composebox-data">', '<div class="gig-composebox-summary"><input class="gig-composebox-summary-input" data-placeholder="$summary" aria-label="$summary" /></div>', '<div class="gig-composebox-editor"></div>', '<div class="gig-composebox-mediaItem"></div>', '<div class="gig-composebox-footer">', '<div class="gig-composebox-footer-right">', '<div class="gig-composebox-postAnonymously">', '<div class="gig-composebox-anon-checkbox gig-comments-checkbox"></div>', '<div class="gig-composebox-anon-text">$postAnonymously</div>', "</div>", '<div class="gig-composebox-cancel gig-comments-button">$cancel</div>', '<div class="gig-composebox-post gig-comments-button">$post</div>', "</div>", '<div class="gig-composebox-footer-left">', '<div class="gig-composebox-share">', '<div class="gig-composebox-share-text">$share</div>', '<div class="gig-composebox-share-providers"></div>', "</div>", "</div>", "</div>", "</div>"].join(""),
                editor: ['<ul class="gig-composebox-sidebar">', '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-font" title="$fontAlt" aria-label="$fontAlt"></li>', '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-media" title="$mediaAlt" aria-label="$mediaAlt"></li>', '<li class="gig-composebox-sidebar-button gig-composebox-sidebar-tag" title="$tagAlt" aria-label="$tagAlt"></li>', "</ul>", '<div class="gig-composebox-textarea" contenteditable="true" role="textarea" aria-multiline="true" data-placeholder="$write_a_comment" aria-label="$write_a_comment" aria-required="true"></div>', "<p></p>"].join(""),
                mediaItemPlayer: ['<div class="gig-comments-mediaplayer-top">', '<div class="gig-media-cancel"></div>', "</div>", '<div class="gig-comments-mediaplayer-content" style="height:${playerHeight}px;">$playerHTML</div>', '<div class="gig-comments-mediaplayer-bottom">', '<div class="gig-comments-mediaplayer-caption" style="background-image:url($providerIcon);">$caption</div>', "</div>"].join(""),
                guestbox: ['<div class="gig-guestbox-fields">', '<input type="text" class="gig-guestbox-nickname" data-placeholder="$nickname" aria-label="$nickname" />', '<input type="text" class="gig-guestbox-email" data-placeholder="$email" aria-label="$email" />', "</div>", '<div class="gig-guestbox-text">${email_not_displayed_publicly}</div>', '<div class="gig-guestbox-ok">$ok</div>', '<div class="gig-guestbox-error"></div>'].join(""),
                sortbox: ["<ul>", '<li data-sort="dateDesc">$most_recent</li>', '<li data-sort="dateAsc">$oldest</li>', '<li data-sort="votesDesc">$most_voted</li>', '<li data-sort="ratingDesc">$ratings</li>', "</ul>"].join(""),
                fontbox: ["<ul>", '<li class="gig-composebox-font-bold" data-command="bold"></li>', '<li class="gig-composebox-font-italic" data-command="italic"></li>', '<li class="gig-composebox-font-underline" data-command="underline"></li>', '<li class="gig-composebox-font-bullets" data-command="bullets"></li>', "</ul>"].join(""),
                mediabox: ['<div class="gig-mediabox-fields">', '<input type="text" class="gig-mediabox-url" placeholder="${enter_url}" aria-label="${enter_url}" value="$url" />', '<div class="gig-mediabox-ok">$ok</div>', '<div class="gig-mediabox-text">${add_media_item}</div>', "</div>"].join(""),
                composeShareMoreBox: ['<div class="gig-composebox-morebox-caption">', '<div class="gig-composebox-morebox-title">$more_share_destinations</div>', '<div class="gig-composebox-morebox-close"></div>', "</div>", '<ul class="gig-composebox-morebox-providers">', "</ul>"].join(""),
                userTaggingBox: ['<div class="gig-comments-usertaggingbox gig-comments-container">', '<div class="gig-usertagging-title">$title</div>', '<ul class="gig-usertagging-suggestions">', "</ul > ", "</div> "].join(""),
                userTaggingOption: ['<img src="$photoURL" alt="" class="gig-usertagging-userimage" aria-hidden="true" /><span class="gig-usertagging-username">$name</span>'].join(""),
                rating: '<div class="gig-comment-rating-title"></div><div class="gig-comment-rating-value"></div>',
                composeboxRating: '<div class="gig-composebox-rating-title"></div><div class="gig-composebox-rating-value"></div>',
                commentTitle: ['<div class="gig-comment-rating"></div>', '<div class="gig-comment-rating-drop"></div>', '<div class="gig-comment-summary"></div>'].join(""),
                myReview: ['<div class="gig-selfreview-header">', '<div class="gig-selfreview-header-left">', '<div class="gig-composebox-photo"></div>', '<div class="gig-selfreview-nameAndLogout">', '<div class="gig-selfreview-yourReview">$your_review</div>', '<div class="gig-composebox-name"></div>', '<div class="gig-composebox-logout" aria-label="$logout">(<span>$logout</span>)</div>', "</div>", '<div class="gig-selfreview-ratings"></div>', "</div>", '<div class="gig-selfreview-header-right">', '<div class="gig-composebox-follow"></div>', "</div>", "</div>", '<div class="gig-selfreview-summary-container">', '<span class="gig-selfreview-field-title">$summary</span><span class="gig-selfreview-summary"></span>', "</div>", '<div class="gig-selfreview-body-container">', '<span class="gig-selfreview-field-title">$review</span><span class="gig-selfreview-body"></span>', "</div>"]
            }
        },
        162: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(29);
            t.defaultCss = {
                reset: [".gig-comments-container *, *.gig-comments-container {", "word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;", "font-family:arial;color:#333333;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}"].join(""),
                resetRtl: ".gig-comments-container *, *.gig-comments-container {direction:rtl;text-align:right;}",
                global: [".gig-comments-container input {outline:none}", ".gig-comments-container .gig-composebox-summary-input { font-weight: bold; }", ".gig-comments-container .gig-composebox-summary-input.gig-comments-placeholder { font-weight: bold; }", ".gig-comments-container .gig-comments-placeholder {color: #999;opacity:1}", ".gig-comments-container input:-moz-placeholder {color: #585858;opacity:1}", ".gig-comments-container input::-moz-placeholder {color: #585858;opacity:1}", ".gig-comments-container input::-webkit-input-placeholder  {color: #585858;opacity:1}", ".gig-comments-container input:-moz-placeholder {color: #585858;opacity:1}", "*.gig-comments-container u {text-decoration:underline}", ".gig-comments-container li {margin:0;padding:0;list-style-type:none}", ".gig-comments-container ul {margin:0;padding:0;}", "*.gig-composebox-textarea ul, .gig-comment-body ul {padding-left:20px;}", "*.gig-composebox-textarea li, .gig-comment-body li {list-style-type:disc}", ".gig-comments-container * {}", "*.gig-comments-container-progress {width:100%;height:38px;background-repeat:no-repeat;background-position:center center;background-image:url('" + o.Images.getPhotoFullName("progress_ani_gif", 1, "gif") + "')}", ".gig-comments-hires-icons *.gig-comments-container-progress {background-size:contain;background-image:url('" + o.Images.getPhotoFullName("progress_ani_gif", 0, "gif") + "')}", "*.gig-clearfix {clear:both}", "*.gig-comments-header {overflow:hidden;border-bottom: 1px solid #EBEBEB; margin-bottom:8px;padding-bottom:8px; }", "*.gig-comments-count {font-size:16px;font-weight:bold;}", "*.gig-comments-header-right {float:right;}", "*.gig-comments-header-left {float:left;}", "*.gig-comments-linksContainer {display:inline-block;}", "*.gig-comments-linksContainer li, *.gig-comments-linksContainer a, *.gig-comments-linksContainer li a:hover, *.gig-comments-linksContainer a:active, *.gig-comments-linksContainer a:visited, *.gig-comments-linksContainer a:link {color:#999999; cursor:pointer;display:inline-block;}", "*.gig-comments-linksContainer li {margin-right:3px;}", '*.gig-comments-linksContainer li:after {content:" "; width:2px; height:2px; background-color:#999999; vertical-align:middle; margin-left:3px; display:inline-block;}', '*.gig-comments-linksContainer *.gig-comments-link-lastVisible:after {content:"";margin:0;display:none;}', "*.gig-comments-linksContainer *.gig-comments-link-lastVisible {margin-right:0;}", "*.gig-comment { width: 100%; outline: 0; }", "*.gig-comment * {color:#999999; }", "*.gig-comment .gig-comment-content {padding-left:6px;transition-property:background-color, padding;}", "*.gig-comment-newComment .gig-comment-content {padding: 6px; background-color: #CEFAD3; border-radius:4px;}", "*.gig-comment-summary {display:inline-block;font-size: 13px;font-weight:bold;vertical-align:top; color:#333333;font-size: 14px;}", "*.gig-comment-photo {float:left;width: 37px; height:37px;}", "*.gig-comment-providerLogo {text-align:right;}", "*.gig-comment-providerLogo img {width:14px;height:14px;margin-top:-11px; margin-right:-3px;display:inline-block;}", "*.gig-comment-data {padding-left:41px;}", "*.gig-comment-header { overflow:hidden; margin-bottom:6px; }", "*.gig-comment-header-right { float:right; }", "*.gig-comment-time {font-size: 11px;display:inline-block;margin:2px 0 0 10px; float: right;}", "*.gig-comment-username {font-weight:bold;color:#333333; margin-right:6px; display:inline-block; }", "*.gig-comment-body, .gig-comment-body * {color:#585858; line-height:18px;}", "*.gig-comment-footer, *.gig-comment-replies {padding-left: 6px}", "*.gig-comment-replies {transition-property: max-height;overflow:hidden;}", "*.gig-comment-replies-collapsed {display:none;}", "*.gig-comment-footer {font-size:11px;overflow:hidden;border-bottom: 1px solid #EBEBEB;margin: 10px 0; padding-bottom:10px;}", '*.gig-comment[data-level="0"]:last-of-type *.gig-comment-footer:last-ch {border-bottom:none;}', "*.gig-comment-footer-left {float:left;}", "*.gig-comment-footer li{cursor:pointer;}", "*.gig-comment .gig-comment-replybox {display:none;background-color:#F6F6F6; padding:4px 6px;}", "*.gig-comment .gig-comment-replybox-open {display:block; margin-bottom: 10px;}", "*.gig-comment .gig-composebox-title, *.gig-comment .gig-composebox-title * {font-weight:normal; font-style:italic;color:#333333}", "*.gig-comment *.gig-composebox-username {font-weight:bold;}", "*.gig-comment-repliesArrow div {display:inline-block}", "*.gig-comment-repliesArrow-img {margin: 0 1px 0 6px; width: 9px; height:9px; margin-right:3px;background-image: url('" + o.Images.getPhotoFullName("Reply_Arrow", 1) + "');background-repeat:no-repeat;background-position:0px 3px;}", ".gig-comments-hires-icons *.gig-comment-repliesArrow-img {background-size:contain; background-image: url('" + o.Images.getPhotoFullName("Reply_Arrow") + "');}", "*.gig-comment-repliesArrow .gig-comment-repliesArrow-img {}", "*.gig-comment-repliesArrow-collapsed .gig-comment-repliesArrow-img {-webkit-transform:rotate(270deg); transform:rotate(270deg);}", "*.gig-comment-status {display:none;border-radius: 3px;color:#FFFFFF;padding:2px 8px; border-radius:3px;margin-bottom:6px;}", "*.gig-comment-body a:link {color:#007ACF;text-decoration: underline;}", "*.gig-comment-body a:visited {color:#61007d;text-decoration: underline;}", "*.gig-comment-status-info {display:inline-block;background-color:#64B46F;}", "*.gig-comment-status-error {display:inline-block;background-color:#D0605F;margin-bottom:6px;}", "*.gig-comment-viaProvider {display:inline-block;font-style:italic;margin:0 12px;padding: 0 0 0 12px;background-repeat:no-repeat;background-position:left center;}", "*.gig-comment-viaProvider-facebook {background-image: url('" + o.Images.getPhotoFullName("/providers/Facebook_9x9", 1) + "');}", ".gig-comments-hires-icons *.gig-comment-viaProvider-facebook {background-size:contain; background-image: url('" + o.Images.getPhotoFullName("/providers/Facebook_9x9") + "');}", ".gig-comments-hires-icons *.gig-loginbox-provider {background-size:15px;}", "img.gig-comment-img {border-radius:3px;}", "*.gig-comment-footer-right {float:right;}", "*.gig-comment-footer-right div {display:inline-block;height:17px;line-height:16px;vertical-align:bottom;}", "*.gig-comment-vote-pos, *.gig-comment-vote-neg {cursor:pointer;background-repeat:no-repeat;background-position: 0 0;padding-left: 14px;}", "*.gig-comment-vote-with-value {padding-left: 17px;}", "*.gig-comment-vote-total {margin-right:5px;}", "*.gig-comment-vote-pos {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_up", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos {background-image: url('" + o.Images.getPhotoFullName("Thumbs_up") + "')}", "*.gig-comment-vote-pos-down {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_pressed", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos-down {background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_pressed") + "')}", "*.gig-comment-vote-neg {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_down", 1) + "');margin-left:15px;position:relative; background-position: 0 3px; }", ".gig-comments-hires-icons *.gig-comment-vote-neg {background-image: url('" + o.Images.getPhotoFullName("Thumbs_down") + "');}", "*.gig-comment-vote-posneg *.gig-comment-vote-neg {margin-left:2px;}", "*.gig-comment-vote-neg-down {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_pressed", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-neg-down {background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_pressed") + "')}", "*.gig-comment-flag {margin: 0 15px;vertical-align:top;display:inline-block;width: 14px; height: 14px; visibility:hidden; cursor:pointer;background-image: url('" + o.Images.getPhotoFullName("Flag_Icon", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-flag {background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Flag_Icon") + "')}", "*.gig-comment-flag-submitted {cursor:default;visibility:visible;background-image: url('" + o.Images.getPhotoFullName("Flag_Icon_Submitted", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-flag-submitted {background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Flag_Icon_Submitted") + "')}", "*.gig-comments-more {cursor:pointer;border-radius:3px; line-height: 38px;border: 1px solid #F7F6F6; background-color:#F9F9F9;text-align:center;}", "*.gig-comments-more:hover {background-color: #E5E5E5}", "*.gig-comments-more-progress {cursor:default;width:100%;height:38px;background-repeat:no-repeat;background-position:center center; background-image:url('" + o.Images.getPhotoFullName("progress_ani_gif", 0, "gif") + "')}", ".gig-comments-hires-icons *.gig-comments-more-progress {background-image:url('" + o.Images.getPhotoFullName("progress_ani_gif", 0, "gif") + "')}", "*.gig-comments-more-progress:hover {background-color:#F9F9F9;}", "*.gig-comments-dialog {min-width: 367px;min-height:140px;border: 6px solid #858585; border-radius: 5px; background-color:#FFFFFF;}", "*.gig-comments-dialog-close {background-image:url('" + o.Images.getPhotoFullName("close_icon", 1) + "'); width:15px; height:15px; float:right; cursor:pointer;}", ".gig-comments-hires-icons *.gig-comments-dialog-close {background-image:url('" + o.Images.getPhotoFullName("close_icon") + "'); background-size: contain;}", "*.gig-comments-dialog-caption-container {overflow:hidden;background-color: #f3f3f3; padding: 5px 5px 5px 12px;overflow:auto;zoom:1;font-size: 14px;font-weight:bold;color: #4d4d4d;}", "*.gig-comments-dialog-caption {display:inline-block;float:left;}", "*.gig-comments-dialog-body{padding:24px 12px 12px 12px;}", "*.gig-comments-dialog-buttons{margin-top:12px;text-align:right;margin: 20px;}", "*.gig-comments-dialog-text {margin-bottom:10px;}", "*.gig-comments-dialog-textbox-container {float:left}", "*.gig-comments-dialog-textbox {width: 260px;color: #4D4D4D;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;padding:0 4px;background-color:white;border: 1px solid #C0C0C0;height:24px;box-shadow:inset 0 0 4px #DCDCDC; -moz-box-shadow:inset 0 0 4px #DCDCDC; -webkit-box-shadow:inset 0 0 4px #DCDCDC;}", "*.gig-comments-dialog-subscribe-okIcon {background-image:url('" + o.Images.getPhotoFullName("ok_icon", 1) + "');width:14px;height:14px;position:relative;top:2px;margin-right:2px;display:inline-block;}", ".gig-comments-hires-icons *.gig-comments-dialog-subscribe-okIcon {background-image:url('" + o.Images.getPhotoFullName("ok_icon") + "');}", "*.gig-comments-dialog-button {", "line-height:22px;font-size:12px;margin-left:7px;font-weight:bold;min-width: 50px;", "position:relative;border-radius: 3px; color:#4d4d4d;cursor:pointer;", "font-size: 11px;padding: 0 5px; border: 1px solid #C5C7C7;display:inline-block;zoom:1;vertical-align:middle; text-align:center;", "box-shadow:0 0 2px RGBA(0,0,0,0.15);-webkit-box-shadow:0 0 2px RGBA(0,0,0,0.15);-moz-box-shadow:0 0 2px RGBA(0,0,0,0.15);", "gradient(#FFFFFF,#EAEBEB)}}", "*.gig-comments-dialog-button:hover {", "color:#b4b4b4;cursor:default;", "gradient(#EBEBEB,#FFFFFF)}", "*.gig-comments-dialog-error {color: #ce585a;font-size:11px;margin-top:5px;clear:both;}", "*.gig-comments-dialog-textbox-button {}", "*.gig-composebox {margin-bottom: 23px;}", "*.gig-composebox-login {}", "*.gig-composebox-login div {display:inline-block;line-height:30px;font-weight: bold; }", "*.gig-composebox-or {margin: 0 10px;}", "*.gig-composebox-social-login, *.gig-composebox-guest-login, *.gig-composebox-site-login {", "border-radius: 3px;cursor:pointer;padding: 0 15px;font-size: 14px;box-shadow: inset 1px 1px #fff;border: solid 1px #e2e2e2;", "gradient(#f5f5f5,#f1f1f0);", "}", "*.gig-composebox-social-login:hover, *.gig-composebox-guest-login:hover, *.gig-composebox-site-login:hover {gradient(#EFEFEF,#E1E1E1);}", "*.gig-composebox-social-login {padding:0 9px;background-repeat:no-repeat;background-position:right center;gradient(#f5f5f5,#f1f1f0);}", "*.gig-composebox-social-login:hover {gradient(#EFEFEF,#E1E1E1);}", "*.gig-composebox-login-icon {background-position:center;display:inline-block;width: 36px; height:17px;margin:0 7px;vertical-align:middle;background-repeat:no-repeat;background-image: url('" + o.Images.getPhotoFullName("Login-icons-fb_tw", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-login-icon {background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Login-icons-fb_tw") + "')}", "*.gig-composebox-login-drop-icon {background-position:center;display:inline-block;width: 9px; height:17px;vertical-align:middle;background-repeat:no-repeat;background-image: url('" + o.Images.getPhotoFullName("Login_icons_arrow", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-login-drop-icon {background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Login_icons_arrow") + "')}", "*.gig-composebox-header { transition-property:max-height; overflow:hidden; margin-bottom:4px; }", ".gig-composebox-open *.gig-composebox-header { margin-bottom:4px;}", ".gig-comments-reviews .gig-composebox-header, .gig-comments-reviews .gig-composebox-open .gig-composebox-header {max-height:none;}", "*.gig-composebox-header-left {float:left;}", "*.gig-composebox-header-right {float:right;}", "*.gig-composebox-header-right *, *.gig-composebox-header-left * {vertical-align:bottom;}", "*.gig-composebox-title, *.gig-composebox-name {display:inline-block;font-size:14px;font-weight:bold;margin:0 5px 0 0;}", "*.gig-composebox-logout {cursor:pointer;display:inline-block;font-size:11px; color: #999999;}", "*.gig-composebox-logout span {font-size:12px; color:#0796c6}", "*.gig-composebox-logout:hover span {text-decoration:underline}", "*.gig-composebox-close {visibility:hidden;}", "*.gig-comment-replybox *.gig-composebox-close {visibility:visible; display:inline-block; margin-left:5px; cursor:pointer; width: 15px; height: 15px; background-image:url('" + o.Images.getPhotoFullName("close_icon", 1) + "'); background-position:center; background-repeat:no-repeat;}", ".gig-comments-hires-icons *.gig-comment-replybox *.gig-composebox-close {background-image:url('" + o.Images.getPhotoFullName("close_icon") + "'); background-size: contain; }", "*.gig-comment-replybox *.gig-composebox-close:hover { background-color: #ebebeb; }", "*.gig-composebox-follow {font-size:13px;cursor:pointer;display:inline-block; color:#919191;padding-left: 12px;", "background-repeat: no-repeat; background-position: left center;background-size: 8px 8px;background-image: url('" + o.Images.getPhotoFullName("Follow", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-follow {background-image: url('" + o.Images.getPhotoFullName("Follow") + "')}", "*.gig-composebox-following {background-size: 8px 8px;background-image: url('" + o.Images.getPhotoFullName("Following", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-following {background-image: url('" + o.Images.getPhotoFullName("Following") + "')}", "*.gig-composebox-following:hover {background-size: 8px 8px;background-image: url('" + o.Images.getPhotoFullName("Unfollow", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-following:hover {background-image: url('" + o.Images.getPhotoFullName("Unfollow") + "')}", "*.gig-composebox-photo {float:left;width: 37px;height:37px}", "*.gig-composebox-data {padding-left:47px;}", "*.gig-comments-composebox *.gig-composebox-data {margin-bottom:20px;}", "*.gig-composebox-footer {display:none;overflow:hidden;margin-top:4px;}", ".gig-composebox-open *.gig-composebox-footer {display:block;}", "*.gig-composebox-footer-left, *.gig-composebox-footer-right {padding: 2px 0;}", "*.gig-composebox-footer-left {float:left;}", "*.gig-composebox-footer-right {float:right;}", "*.gig-composebox-cancel {cursor:pointer; padding: 0 18px; font-size: 14px; font-weight:bold; color: #484848; display:inline-block;", "line-height: 28px; border-radius: 3px; background-color: #484848; box-shadow: 1px 1px rgba(255, 255, 255, 0.4) inset;", "border: 1px solid #bfbfbf; gradient(#e2e2e2, #bfbfbf); margin-right: 6px;}", "*.gig-composebox-cancel:hover {gradient(#e2e2e2, #bfbfbf);}", "*.gig-composebox-post {cursor:pointer;padding: 0 18px; font-size: 14px; font-weight:bold; color: #FFFFFF; display:inline-block;", "line-height: 28px; border-radius: 3px; background-color: #D8D8D8; box-shadow: 1px 1px rgba(255, 255, 255, 0.4) inset;", "border: 1px solid #51AE48; gradient(#88cb82,#72c26d);}", "*.gig-comments-button {cursor: -moz-user-select: none; -khtml-user-select: none; -webkit-user-select:none; -o-user-select:none; }", "*.gig-composebox-post:hover {gradient(#7AB574,#68AF63);}", "*.gig-composebox-postAnonymously {display:inline-block;}", "*.gig-composebox-anon-text { vertical-align:middle;display:inline-block;font-family:arial;font-size:12px;color:#999999;padding:0 10px 0 5px;}", "*.gig-composebox-anon-checkbox { vertical-align:middle;}", "*.gig-composebox-summary {display:none;padding: 9px;}", ".gig-composebox-open *.gig-composebox-summary {display:block;margin-bottom:5px;}", "*.gig-composebox-summary input {width:100%;border:none;color:#585858;}", "*.gig-composebox-editor {text-align: right;padding: 0 9px 9px 9px;}", "*.gig-composebox-editor-with-sidebar {padding: 0 29px 9px 9px;}", "*.gig-composebox-editor, *.gig-composebox-summary {", "background-color: #FFFFFF; border: 1px solid #D5D5D5; ", "border-radius: 3px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.05) inset; border: solid 1px #d5d5d5;}", "*.gig-composebox-textarea { line-height:18px;transition-property: min-height; text-align:left;cursor: text;min-height:17px;resize: none;border:none;margin-top:9px; outline:none}", "*.gig-composebox-textarea, *.gig-composebox-textarea * {color:#585858;font-size: 14px;}", "textarea.gig-composebox-textarea {overflow:hidden;width:100%;display:block;height:17px;}", ".gig-composebox-open textarea.gig-composebox-textarea {height:65px;}", ".gig-composebox-open *.gig-composebox-textarea {min-height:69px;}", "*.gig-composebox-textarea, *.gig-composebox-textarea *, *.gig-composebox-summary input {font-size:12px;}", "*.gig-composebox-textarea:empty:not(:focus):before {color:#999; content:attr(data-placeholder);}", "ul.gig-composebox-sidebar {display:none;background-color:#FFFFFF;float:right;margin-right:-29px;}", "ul.gig-composebox-sidebar {transition-property:opacity;opacity:0;}", ".gig-composebox-open *.gig-composebox-sidebar {opacity:1;display:inline-block;}", ".gig-comments-hires-icons *.gig-composebox-sidebar-button {background-size: 18px 18px; }", "*.gig-composebox-sidebar-button {border-radius:0px;background-color: #f0f0f0; width: 29px;height:29px;display:block;background-color:#F7F3F7;}", "*.gig-composebox-sidebar-button:last-child:nth-child(-n+2) { border-radius:0 0 0 3px; }", "*.gig-composebox-sidebar-button:hover, *.gig-composebox-sidebar-button-down {background-color: #f1f1f1;box-shadow: inset 0 0 9px rgba(0,0,0,.26);}", "*.gig-composebox-sidebar-font {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" + o.Images.getPhotoFullName("Rich_Text_up", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-font {background-image: url('" + o.Images.getPhotoFullName("Rich_Text_up") + "')}", "*.gig-composebox-sidebar-font:hover, *.gig-composebox-sidebar-font.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("Rich_Text_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-font:hover, .gig-comments-hires-icons *.gig-composebox-sidebar-font.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("Rich_Text_hover") + "')}", "*.gig-composebox-sidebar-tag {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" + o.Images.getPhotoFullName("User_tagging_up", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-tag {background-image: url('" + o.Images.getPhotoFullName("User_tagging_up") + "')}", "*.gig-composebox-sidebar-tag:hover, *.gig-composebox-sidebar-tag.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("User_tagging_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-tag:hover, *.gig-composebox-sidebar-tag.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("User_tagging_hover", 1) + "')}", "*.gig-composebox-sidebar-media {cursor:pointer;width: 29px;height:29px;background-repeat:no-repeat;background-position:center; background-image: url('" + o.Images.getPhotoFullName("Media_up", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-media {background-image: url('" + o.Images.getPhotoFullName("Media_up") + "')}", "*.gig-composebox-sidebar-media:hover, *.gig-composebox-sidebar-media.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("Media_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-sidebar-media:hover, .gig-comments-hires-icons *.gig-composebox-sidebar-media.gig-composebox-sidebar-button-down {background-image: url('" + o.Images.getPhotoFullName("Media_hover") + "')}", "*.gig-composebox-field-error {border: 1px solid #F9888E;}", "*.gig-composebox-error {border-radius:3px;color: #FFFFFF;text-align:center;line-height:22px;background:#F9888E;margin-bottom:7px;display:none;font-weight:bold;font-size:13px;}", "*.gig-composebox-postAnonymously { cursor:pointer; vertical-align:top; padding-top:4px;}", "*.gig-comments-checkbox { width: 10px;height: 10px; border:1px solid #C6C6C6;display:inline-block;\tborder-radius: 1px; background-color: #fff;box-shadow: 0 0 5px rgba(189, 189, 189, 0.25) inset}", "*.gig-comments-checkbox-checked {background-image:url('" + o.Images.getPhotoFullName("shareToProviders/checkmark", 1) + "'); background-position:center; background-repeat:no-repeat;}", ".gig-comments-hires-icons *.gig-comments-checkbox-checked {background-size:contain; background-image:url('" + o.Images.getPhotoFullName("shareToProviders/checkmark") + "');}", "*.gig-selfreview-header {overflow:hidden;}", "*.gig-selfreview-header-left {float:left;}", "*.gig-selfreview-header-right {float:right;}", "*.gig-selfreview-summary-container, *.gig-selfreview-body-container {background-color:#EDEDED; margin: 5px 0;padding:6px 10px;border-radius:3px;}", "*.gig-selfreview-field-title {font-weight:bold;margin:0 7px 0 0;}", "*.gig-selfreview-nameAndLogout {padding: 0 0 0 47px;height:37px;}", "*.gig-selfreview-yourReview {font-weight:bold;color:#919191;margin-bottom:3px;}", "*.gig-selfreview-ratings {margin: 5px 0}", "*.gig-selfreview-rating .gig-comment-rating-value {margin-left:2px; }", "*.gig-selfreview-rating-_overall .gig-comment-rating-value {margin-left:0px; }", "*.gig-selfreview-rating-_overall.gig-selfreview-rating {margin-bottom:5px;}", "*.gig-comments-guestbox {transition-property: max-height;background-color:#FFFFFF;border: 1px solid #E2E2E2; border-radius: 0 3px 3px 3px; overflow:hidden;width:150px;font-size:10px;color:#919191;padding: 0 13px 0 13px}", "*.gig-comments-guestbox input {width:150px;border-radius:3px; height:24px; line-height:22px;color:#919191;border:1px solid #C0C0C0;padding-left:2px;}", "*.gig-guestbox-fields {margin: 16px 0 0px;}", "*.gig-guestbox-nickname {margin: 0px 0 10px;}", "*.gig-guestbox-text {font-size:10px;margin: 5px 0;}", "*.gig-guestbox-ok {margin-bottom: 8px;float:right;display:inline-block;cursor:pointer;padding: 0 9px;font-weight: bold;color: #222121;text-shadow: 0 2px rgba(255, 255, 255, .4);", "line-height: 22px;border-radius: 3px;background-color: #f2f2f2;box-shadow: 0 1px 3px rgba(0, 0, 0, .25), inset 0 0 2px rgba(255, 255, 255, .24);", "border: solid 1px #c4c7cd; }", "*.gig-guestbox-error {margin-left: 4px; display:inline-block;color:#e70707;font-size:10px;width:100px;float:left;margin-bottom: 8px;}", "*.gig-comments-loginbox {transition-property: max-height;background-color:#FFFFFF;border: 1px solid #E2E2E2; border-radius: 0 0 3px 3px; overflow:hidden;min-width:115px;font-size:10px;color:#919191;}", "*.gig-comments-loginbox-open {}", "*.gig-loginbox-provider {background-repeat:no-repeat; background-position:left center; margin-left:9px; padding:8px 8px 8px 22px; cursor:pointer;border-bottom: 1px solid #EAEAEA}", "*.gig-loginbox-provider:last-child {border-bottom:none;}", "*.gig-loginbox-provider:hover {background-color:#F9F9F9}", "*.gig-loginbox-provider[data-provider=more] { padding-left:0px }", "*.gig-signinbox-provider {margin-left:8px; padding:8px 8px 8px 1px; cursor:default; border-bottom: 1px solid #EAEAEA}", "*.gig-comments-usertaggingbox { width:290px; border-radius:3px; background-color:#FFF; border: solid 1px #d5d5d5; font-family:arial; }", "*.gig-usertagging-title { color:#666666; background-color:#F4F4F4; font-size:10px; border-radius:2px; padding:7px; font-family:inherit; }", "*.gig-usertagging-suggestions { list-style-type:none; margin:0; padding:0px; font-family:inherit; font-size:12px; }", "*.gig-usertagging-suggestions li { cursor:pointer;padding-left:8px; border-top:solid 1px #eaeaea;height:18px;padding-top:4px;padding-bottom:4px;", "}", "*.gig-usertagging-suggestions li *.gig-usertagging-username { margin-left:8px;vertical-align:top;line-height:20px; }", "*.gig-usertagging-suggestions li *.gig-usertagging-userimage { border-radius:3px;width:18px;height:18px; }", "*.gig-usertagging-suggestions li.gig-usertagging-selected { background-color:#f9f9f9; }", "*.gig-usertagging-tag { -webkit-appearance: none; border-radius:8px 9px 9px 8px / 8px 8px 10px 10px; background-color:#d5e4f2; border-style:none; padding:0px 4px 0px 4px;", " }", "*.gig-composebox-share {vertical-align:top;overflow:hidden;background-color:#F4F4F4; border-radius:3px; padding-left:4px;}", "*.gig-comment .gig-composebox-share {border: 1px solid #E8E8E8}", "*.gig-composebox-share-text {line-height:26px;vertical-align:top;display:inline-block;color:#999999;}", "*.gig-composebox-share-providers {display:inline-block;}", "*.gig-comments-share-provider {display:none;height:18px;width:36px;background-position: 23px center;padding:4px 3px;background-repeat:no-repeat;cursor:pointer; border-right: 1px solid #FFFFFF;}", ".gig-comments-hires-icons *.gig-comments-share-provider {background-size:16px 16px}", "*.gig-comments-share-provider-shown {display:inline-block;}", "*.gig-comments-share-more {cursor:pointer; vertical-align:top; padding:4px; display:inline-block; height:18px; width:16px; background-position:center; background-repeat:no-repeat; background-image: url('" + o.Images.getPhotoFullName("sharetoProviders/Share_More_providers", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-share-more {background-size:8px 8px; background-image: url('" + o.Images.getPhotoFullName("sharetoProviders/Share_More_providers") + "')}", "*.gig-comments-share-provider-checkbox { margin-top:3px; }", "*.gig-composebox-morebox {width: 265px;border: 5px solid #858585; border-radius:3px;}", "*.gig-composebox-morebox-caption {background-color:#F3F3F3;overflow:hidden;line-height: 15px;padding: 3px;}", "*.gig-composebox-morebox-title {margin-left:3px;font-weight:bold; float:left;background-color:#F3F3F3;overflow:hidden;color:#4D4D4D;}", "*.gig-composebox-morebox-close {float:right; background-image:url('" + o.Images.getPhotoFullName("close_icon", 1) + "'); width:15px; height:15px; cursor:pointer; background-position:center; background-repeat:no-repeat;}", ".gig-comments-hires-icons *.gig-composebox-morebox-close {background-image:url('" + o.Images.getPhotoFullName("close_icon") + "'); background-size:contain;}", "*.gig-composebox-morebox *.gig-composebox-morebox-providers {padding: 0 6px; background-color:#FFFFFF;}", "*.gig-composebox-morebox *.gig-composebox-morebox-providers li {padding-left: 18px; margin: 4px 0; width: 105px;display:inline-block;background-repeat:no-repeat;cursor:pointer;background-size: 14px;}", "*.gig-comments-sortbox {margin-top:9px;border-radius: 3px;background-color: #fff;box-shadow: -1px 2px 1px rgba(35,31,32,.07);border: solid 1px #b0b0b0;padding: 3px 8px;display:inline-block;}", '*.gig-comments-sortbox:before {content:"";width: 13px;right: 12px;height:7px;display:inline-block;position:absolute;top:-7px;background-image:url(\'' + o.Images.getPhotoFullName("Sort_dropdown_triangle", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-sortbox:before {background-image:url('" + o.Images.getPhotoFullName("Sort_dropdown_triangle") + "')}", "*.gig-comments-sortbox li {color:#999999;cursor:pointer; min-width: 80px; padding: 7px 5px; border-bottom: 1px solid #EAEAEA;}", "*.gig-comments-sortbox li:last-child {border-bottom: none}", "*.gig-comments-sortbox li:hover {color:#848484;background-color:#F4F4F4;}", "*.gig-comments-sortbox-selected {font-weight:bold}", "*.gig-comments-fontbox {padding-right: 8px;padding-top:7px;transition: opacity 0.25s; opacity:0; }", '*.gig-comments-fontbox ul:after {content:"";width: 8px;height:13px;display:inline-block;position:absolute;right:1px;top: 12px;background-image:url(\'' + o.Images.getPhotoFullName("Sidebar_box_thub", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-fontbox ul:after {background-image:url('" + o.Images.getPhotoFullName("Sidebar_box_thub") + "')}", "*.gig-comments-fontbox ul {padding: 2px; width: 69px;background-color:#FFFFFF; border: 1px solid #B0B0B0; border-radius:2px;cursor:pointer;}", "*.gig-comments-fontbox li {border: 1px none #EEEEEE;width: 33px;height:33px;display:inline-block;background-position:center;background-repeat:no-repeat}", "*.gig-comments-fontbox *.gig-composebox-font-bold {border-right-style:solid;border-bottom-style:solid;background-image:url('" + o.Images.getPhotoFullName("Rich_Text_bold", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-bold {background-image:url('" + o.Images.getPhotoFullName("Rich_Text_bold") + "')}", "*.gig-comments-fontbox *.gig-composebox-font-italic {border-bottom-style:solid;background-image:url('" + o.Images.getPhotoFullName("Rich_Text_italic", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-italic {background-image:url('" + o.Images.getPhotoFullName("Rich_Text_italic") + "')}", "*.gig-comments-fontbox *.gig-composebox-font-underline {background-image:url('" + o.Images.getPhotoFullName("Rich_Text_underline", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-underline {background-image:url('" + o.Images.getPhotoFullName("Rich_Text_underline") + "')}", "*.gig-comments-fontbox *.gig-composebox-font-bullets {border-left-style:solid;background-image:url('" + o.Images.getPhotoFullName("Rich_Text_align", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-fontbox *.gig-composebox-font-bullets {background-image:url('" + o.Images.getPhotoFullName("Rich_Text_align") + "')}", "*.gig-comments-mediabox { padding-right: 8px; transition: opacity 0.25s; opacity:0; ", " }", "*.gig-mediabox-fields {  padding:12px 6px 10px; width:382px; border: solid 1px #b0b0b0; border-radius: 2px; background-color: #fff; -webkit-box-shadow: -1px 2px 1px rgba(35,31,32,.07); -moz-box-shadow: -1px 2px 1px rgba(35, 31, 32, .07); box-shadow: -1px 2px 1px rgba(35, 31, 32, .07); }", '*.gig-mediabox-fields:after { content:""; width: 8px; height:13px; position:absolute; display:inline-block; right:1px; top:12px; background-image:url(\'' + o.Images.getPhotoFullName("Sidebar_box_thub", 1) + "')}", ".gig-comments-hires-icons *.gig-mediabox-fields:after { background-image:url('" + o.Images.getPhotoFullName("Sidebar_box_thub") + "')}", "*.gig-mediabox-url { vertical-align:top; padding-left:8px; margin-bottom:10px; margin-right:5px; width: 307px; height: 28px; border-radius: 3px; background-color: #fff; -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.15); -moz-box-shadow: inset 0 0 5px rgba(0,0,0,.15); box-shadow: inset 0 0 5px rgba(0,0,0,.15); border: solid 1px #d5d5d5; }", "*.gig-mediabox-url:empty:before {color:#585858; content:attr(data-placeholder);}", "*.gig-mediabox-ok { vertical-align:top; cursor:pointer; text-align:center; display:inline-block; font-weight:bold; font-size:14px; color:#333333; line-height:28px; width: 57px; height: 28px; border-radius: 3px; background-color: #f2f2f1; box-shadow: inset 1px 1px #fff; -moz-box-shadow: inset 1px 1px #fff; -webkit-box-shadow: inset 1px 1px #fff; border: solid 1px #d5d5d5; gradient(#f5f5f5,#f1f1f0); }", "*.gig-mediabox-ok:hover { gradient(#efefef, #e9e9e9); }", "*.gig-mediabox-text { font-family:arial; font-size:12px; color:#666666; line-height:14px; }", "*.gig-composebox-media-display { margin-bottom:12px; }", "*.gig-media-caption { font-family:arial; font-size:12px; color:#666666; line-height:17px; margin:4px 12px 0px 1px; }", "*.gig-media-caption-text { text-overflow:ellipsis;white-space:nowrap;overflow:hidden;word-wrap:normal; }", "*.gig-media-caption-url { display:block; padding-left:23px; text-decoration:underline; word-wrap:normal; color:#0796c6; cursor:pointer; font-size:12px; text-overflow:ellipsis; white-space:", "nowrap; overflow:hidden; vertical-align:text-top; background-repeat:no-repeat; background-position:left; background-size: contain;}", "*.gig-media-thumbnail { height: 303px; }", "*.gig-media-thumbnail-image { margin:auto; display:block; }", "*.gig-media-overlay { position:relative;top:-303px;height:0px; }", "*.gig-media-play { display:none; opacity:0.85; width: 75px; height: 45px; border-radius: 10px; background-color: #545454; background-image:url('" + o.Images.getPhotoFullName("media_play", 1) + "'); ", "background-position:center center; background-repeat:no-repeat; cursor:pointer; position:relative;", "box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); -moz-box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); -webkit-box-shadow: 0 -1px 3px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.29); }", ".gig-comments-hires-icons *.gig-media-play { background-image:url('" + o.Images.getPhotoFullName("media_play") + "'); }", "*.gig-media-play:hover { background-color:#666565; }", "*.gig-media-cancel { cursor:pointer; margin-top:-18px; margin-right:0px; float:right; width: 13px; height: 13px; border-radius: 2px; background-color: #c9c6c6;", "box-shadow: inset 0 0 9px rgba(0, 0, 0, .26); -moz - box-shadow: inset 0 0 9px rgba(0, 0, 0, .26); -webkit - box-shadow: inset 0 0 9px rgba(0, 0, 0, .26);", "background-image:url('" + o.Images.getPhotoFullName("media_close_icon", 1) + "'); background-position:center center; background-repeat:no-repeat; }", ".gig-comments-hires-icons *.gig-media-cancel {background-image:url('" + o.Images.getPhotoFullName("media_close_icon") + "'); }", "*.gig-media-cancel:hover { background-color: #ebebeb; }", "*.gig-comment-mediaitem { margin-top:7px; }", "*.gig-comment-content .gig-media-thumbnail-image { margin-left:0px; margin-right: 0px; }", "*.gig-comment-content .gig-media-caption { margin:8px 12px 0px 0px; }", "*.gig-composebox-media-preview { padding-left:4px; padding-right:4px; border-radius: 0px 0px 3px 3px; background-color: #fff; -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.15); -moz-box-shadow: inset 0 0 5px rgba(0,0,0,.15); box-shadow: inset 0 0 5px rgba(0,0,0,.15);", "border: solid 1px #d5d5d5; border-top:none; padding-top:23px; padding-bottom:5px; background-image:url('" + o.Images.getPhotoFullName("media_loader_gif", 1, "gif") + "'); background-repeat:no-repeat; background-position:center center; }", ".gig-comments-hires-icons *.gig-composebox-media-preview { background-image:url('" + o.Images.getPhotoFullName("media_loader_gif", 0, "gif") + "');}", "*.gig-composebox-editor-with-media { border-radius:3px 3px 0px 0px; }", "*.gig-comments-mediaplayer-dimmer { top:0px;left:0px;height:100%;width:100%;transition:opacity 0.25s;position:fixed; filter: 'alpha(opacity=50)';background-color:black;}", "*.gig-comments-mediaplayer { top:50%;left:50%;transition:opacity 0.25s;padding-left:18px;padding-right:18px; position:fixed;background-color:#ffffff;border-radius:3px; }", "*.gig-comments-mediaplayer-top { height:14px;padding-top:3px;padding-bottom-2px;padding-right:3px; }", "*.gig-comments-mediaplayer-top .gig-media-cancel { margin-right:-18px;padding-right:0px;margin-top:0px; }", "*.gig-comments-mediaplayer-bottom { margin:5px 0px 5px 0px; background-color:#d5d6d6; border-radius:3px; }", "*.gig-comments-mediaplayer-caption { background-size:contain; background-repeat:no-repeat; background-position:left;font-size:13px;font-family:arial; padding-left:23px;line-height:17px; }", "*.gig-comments-updates {transition-property: opacity, height; height:0; opacity:0; visibility:hidden; border-radius:3px; background-color:#90D890;}", "*.gig-comments-updates-visible {opacity:1; visibility:visible; height:25px; margin: 5px 0;}", "*.gig-comments-updates-text {text-align:center; line-height: 25px; color:#FFFFFF; font-weight:bold;}", "*.gig-comments-updates-link {cursor:pointer; font-size:12px; color: #FFFFFF;}", "*.gig-comments-updates-full {text-align:right;}", "*.gig-comments-updates-full .gig-comments-updates-link {display:inline-block; line-height: 25px;top: -25px; position:relative; margin-right: 11px;", "padding-left:15px;background-repeat:no-repeat;background-position:left center; background-size:11px 11px; background-image: url('" + o.Images.getPhotoFullName("Pause_Stream", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-updates-full .gig-comments-updates-link {background-image: url('" + o.Images.getPhotoFullName("Pause_Stream") + "')}", "*.gig-comments-updates-full .gig-comments-updates-link:hover { background-size:11px 11px; background-image: url('" + o.Images.getPhotoFullName("Pause_Stream_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-updates-full .gig-comments-updates-link:hover { background-image: url('" + o.Images.getPhotoFullName("Pause_Stream_hover") + "')}", "*.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link {background-size:11px 11px; background-image: url('" + o.Images.getPhotoFullName("Resume_Stream", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link {background-image: url('" + o.Images.getPhotoFullName("Resume_Stream") + "')}", "*.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link:hover {background-size:11px 11px; background-image: url('" + o.Images.getPhotoFullName("Resume_Stream_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-updates-full.gig-comments-updates-paused .gig-comments-updates-link:hover {background-image: url('" + o.Images.getPhotoFullName("Resume_Stream_hover") + "')}", "*.gig-comments-updates-countonly {text-align:center;}", "*.gig-comments-updates-countonly .gig-comments-updates-text {display:inline-block}", "*.gig-comments-updates-countonly .gig-comments-updates-link {display:inline-block; margin-left:5px; font-weight:bold; text-decoration:underline;}", "*.gig-comments-updates-countonly .gig-comments-updates-link:hover {text-decoration:none;}", "*.gig-comment-title * {vertical-align:bottom;display:inline-block;}", "*.gig-comment-title {margin-bottom:8px;}", "*.gig-comment-rating-drop {margin: 0 3px; cursor:pointer; width: 13px; height: 14px;0 7px 0 2px;vertical-align:bottom;background-repeat:no-repeat;background-image:url('" + o.Images.getPhotoFullName("Rating_Drop_Icon", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-rating-drop {background-image:url('" + o.Images.getPhotoFullName("Rating_Drop_Icon", 1) + "')}", "*.gig-comment-rating-drop:hover, *.gig-comment-rating-drop-down {background-image:url('" + o.Images.getPhotoFullName("Rating_Drop_Icon_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-rating-drop:hover, *.gig-comment-rating-drop-down {background-image:url('" + o.Images.getPhotoFullName("Rating_Drop_Icon_hover", 1) + "')}", "*.gig-comment-rating-title, *.gig-comment-rating-value, *.gig-composebox-rating-title, *.gig-composebox-rating-value {display:inline-block;vertical-align:top;}", "*.gig-comment-rating-title {margin:0 10px 0 0;vertical-align:bottom;min-width:53px;}", "*.gig-composebox-rating-value {margin-left:3px; }", "*.gig-composebox-rating-title {margin-right:10px;vertical-align:bottom;}", "*.gig-comment-rating-star, *.gig-composebox-rating-star, *.gig-selfreview-rating-star {display:inline-block;vertical-align:bottom;background-repeat:no-repeat;padding-right:3px; width: 16px; height:16px;background-image:url('" + o.Images.getPhotoFullName("Star_gray_small", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-rating-star, .gig-comments-hires-icons *.gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-star {background-size: contain;background-image:url('" + o.Images.getPhotoFullName("Star_gray_small") + "')}", "*.gig-comment-rating-star-full, *.gig-composebox-rating-star-full, *.gig-selfreview-rating-star-full {background-image:url('" + o.Images.getPhotoFullName("Star_yellow_small", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-rating-star-full, .gig-comments-hires-icons *.gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-star-full {background-size: contain;background-image:url('" + o.Images.getPhotoFullName("Star_yellow_small") + "')}", "*.gig-comment-rating-dimensions {display:inline-block;margin-top:9px;position:absolute;padding: 10px;background-color:#FFFFFF;box-shadow: -1px 2px 1px rgba(35,31,32,.07);border: 1px solid #B0B0B0;border-radius:2px;white-space:nowrap}", '*.gig-comment-rating-dimensions:before {margin-left: -7px;content:"";width: 13px;height:7px;display:inline-block;position:absolute;top:-7px;background-image:url(\'' + o.Images.getPhotoFullName("Sort_dropdown_triangle", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-rating-dimensions:before {background-image:url('" + o.Images.getPhotoFullName("Sort_dropdown_triangle") + "')}", "*.gig-composebox-rating-star {cursor:pointer;}", "*.gig-composebox-ratings {margin-bottom:5px;}", "*.gig-composebox-rating-_overall .gig-composebox-rating-value {margin-left:0 }", "*.gig-composebox-rating-_overall {font-weight:bold;margin: 5px 0;}", "*.gig-composebox-rating-_overall .gig-composebox-rating-star, *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star, *.gig-selfreview-rating-_overall .gig-selfreview-rating-star ", "{padding-right: 4px; width: 21px; height: 20px; background-image: url('" + o.Images.getPhotoFullName("Star_gray_big", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-rating-_overall .gig-composebox-rating-star, .gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-_overall .gig-selfreview-rating-star ", "{background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Star_gray_big") + "')}", "*.gig-composebox-rating-_overall .gig-composebox-rating-star-full, *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-composebox-rating-star-full, *.gig-selfreview-rating-_overall .gig-selfreview-rating-star-full ", "{background-image: url('" + o.Images.getPhotoFullName("Star_yellow_big", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-rating-_overall .gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error:hover .gig-comments-hires-icons .gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-_overall .gig-selfreview-rating-star-full ", "{background-size:contain;background-image: url('" + o.Images.getPhotoFullName("Star_yellow_big") + "')}", "*.gig-composebox-rating-_overall.gig-composebox-field-error {border: none;}", "*.gig-composebox-rating-_overall.gig-composebox-field-error .gig-composebox-rating-star {background-image:url('" + o.Images.getPhotoFullName("Star_red_big", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-rating-_overall.gig-composebox-field-error .gig-composebox-rating-star {background-image:url('" + o.Images.getPhotoFullName("Star_red_big") + "')}", "*.gig-comment-colored-background {border-radius:4px; padding: 3px 6px 6px 6px;}", "div.gig-comment-pinned-background {background-color: #fffcd2;}", "*.gig-comment-withBadges *.gig-comment-header-right {text-align: right;}", "*.gig-comment-withBadges *.gig-comment-username { margin-bottom:5px; }", "*.gig-composebox-withBadges *.gig-composebox-logout  {display:block; }", "*.gig-composebox-withBadges *.gig-composebox-header-right {  text-align:right; margin-bottom: 4px;}", "*.gig-composebox-withBadges *.gig-composebox-title { position: relative; bottom: 7px; }", "*.gig-comment-commentBadge { display: inline-block; font-size:11px; font-weight: bold; background-repeat: no-repeat; padding-right: 22px; background-position: right; height:17px; line-height: 17px;}", "*.gig-comment-userBadge { margin-bottom: 5px; margin-right: 6px; display: inline-block; font-size:11px; font-weight: bold; line-height: 15px;}", "*.gig-badge-border {border: 1px solid; border-radius: 2px; padding: 0px 5px;}", "*.gig-comment .gig-comment-editbox {display:none;background-color:#F6F6F6; padding:4px 6px 4px 6px; margin-left:-41px;}", "*.gig-comment .gig-comment-editbox .gig-composebox-ratings * {color:#585858;}", "*.gig-comment .gig-comment-editbox-open {display:block; margin-bottom: 10px;}", "*.gig-comment-editbox *.gig-composebox-close {display:inline-block; margin-left:5px; cursor:pointer; width: 15px; height: 15px; background-image:url('" + o.Images.getPhotoFullName("close_icon", 1) + "'); background-position:center; background-repeat:no-repeat;}", ".gig-comments-hires-icons *.gig-comment-editbox *.gig-composebox-close {background-image:url('" + o.Images.getPhotoFullName("close_icon") + "'); background-size: contain; }", "*.gig-comment-editbox *.gig-composebox-close:hover { background-color: #ebebeb; }", "*.gig-comment-edited {font-size: 11px; display:inline-block; margin:2px 0 0 5px; float:right; font-style:italic; color:#999999}", "*.gig-comment-data-removed {margin-left: -41px;}", "*.gig-comment-data-removed .gig-comment-content {padding-left: 0px;}", "*.gig-comment-data-removed .gig-comment-body {color:#999999; font-size:12px; font-style:italic; line-height:16.5px;}", "*.gig-comment-data-removed .gig-comment-footer {margin: 4px 0px 10px; padding-left: 0px;}", "*.gig-comment-data-removed .gig-comment-footer .gig-comment-footer-left .gig-comment-flag {display: none;}", "*.gig-comment-data-removed .gig-comment-footer-right, *.gig-comment-data-removed .gig-comment-header {display:none;}", "*.gig-comment-data-removed .gig-comment-replyLink , *.gig-comment-data-removed .gig-comment-likeLink , *.gig-comment-data-removed .gig-comment-shareLink , *.gig-comment-data-removed .gig-comment-deleteLink , *.gig-comment-data-removed .gig-comment-editLink {display:none;}", "*.gig-comment-data-removed .gig-comment-content {transition: none; -webkit-transition: none}", "*.gig-comment-data-removed .gig-comment-content {transition: none; -webkit-transition: none}", "*.gig-comment-title-removed {display:none;}", "*.gig-comment-photo-removed {display:none;}"].join(""),
                rtl: ["*.gig-comment-data {padding-left:0;padding-right:41px;}", "*.gig-comment-footer-right, *.gig-comments-header-right, *.gig-composebox-footer-right, *.gig-composebox-header-right, *.gig-comment-header-right, *.gig-comments-dialog-close, *.gig-comments-dialog-button, *.gig-selfreview-header-right {float:left}", "*.gig-comment-footer-left, *.gig-comments-header-left, *.gig-composebox-footer-left, *.gig-composebox-header-left, *.gig-comment-header-left,*.gig-comments-dialog-caption,*.gig-comments-dialog-textbox-container, *.gig-selfreview-header-left, *.gig-composebox-photo, *.gig-comment-photo {float:right}", "*.gig-composebox-data {padding-left:0;padding-right: 47px;}", "*.gig-loginbox-provider {padding: 8px 22px 8px 8px;background-position:right center; margin-right:8px;}", "*.gig-composebox-editor-with-sidebar {padding: 0 9px 9px 29px;text-align:left;}", "*.gig-composebox-textarea {text-align:right}", "*.gig-comments-fontbox *.gig-composebox-font-bold {border-left-style:solid;border-right-style:none;}", "*.gig-comments-fontbox *.gig-composebox-font-bullets {border-right-style:solid;border-left-style:none;}", "*.gig-comments-share-provider-shown {background-position:6px;}", "*.gig-comments-share-provider {border-right:none;border-left:1px solid #FFFFFF}", "*.gig-comments-linksContainer li:after {margin-left:0;margin-right: 3px;}", "*.gig-comments-linksContainer li {margin-right:0;margin-left: 3px;}", "*.gig-composebox-follow {padding-right:12px;padding-left:0;background-position:right;}", "*.gig-comment-footer, *.gig-comment-replies {padding-left: 0;padding-right: 6px;}", "*.gig-comment-replybox *.gig-composebox-close {margin-left:0;margin-right:5px;}", "*.gig-comment-editbox *.gig-composebox-close {margin-left:0;margin-right:5px;}", "*.gig-comments-dialog-caption-container {padding: 5px 12px 5px 5px}", "*.gig-composebox-title {margin-right:0;margin-left:5px;}", "*.gig-comment .gig-comment-content {padding-left:0;padding-right:6px;}", "*.gig-composebox-morebox *.gig-composebox-morebox-providers li {padding-left:0; padding-right: 18px; background-position:right;}", "*.gig-comments-dialog-button {margin: 0 7px 0 0}", "*.gig-comments-updates-full {text-align:left;}", "*.gig-comments-updates-full .gig-comments-updates-link {margin: 0 0 0 11px;padding:0 15px 0 0; background-position:right center;}", "*.gig-comments-updates-countonly .gig-comments-updates-link {margin-right:5px;}", "*.gig-comments-fontbox {margin-left:8px;}", "*.gig-comments-fontbox ul:after {left:-7px;right:auto;-webkit-transform:rotate(180deg);transform:rotate(180deg);}", "ul.gig-composebox-sidebar {float:left;margin-left:-29px}", "*.gig-composebox-textarea ul, .gig-comment-body ul {padding-right:20px;}", "*.gig-selfreview-field-title {margin:0 0 0 7px;}", "*.gig-selfreview-nameAndLogout {padding: 0 47px 0 0;}", "*.gig-composebox-title, *.gig-composebox-name {margin:0 0 0 5px;}", "*.gig-comment-rating-title {margin:0 0 0 10px; min-width:53px;}", "*.gig-comment-providerLogo {text-align:left;}", "*.gig-comment-providerLogo img {margin-left:-2px;margin-right:0;}", "*.gig-comment-viaProvider {background-position:right center;padding: 0 12px 0 0;}", "*.gig-usertagging-suggestions li { padding-right:8px; }", "*.gig-usertagging-suggestions li *.gig-usertagging-username { margin-right:8px; }", "*.gig-comment-content .gig-media-caption { margin:8px 0px 0px 12px; }", "*.gig-media-caption-url { background-position:right; padding-right:23px; padding-left:0px; }", "*.gig-comments-mediaplayer-caption { background-position:right;padding-right:23px;text-align:right; }", "*.gig-mediabox-url { padding-right:8px; margin-left:5px;padding-left:0px;margin-right:0px; }", "*.gig-comments-mediabox { padding-right:0px;padding-left:8px; }", "*.gig-mediabox-fields:after { left:1px; right:auto; -webkit-transform:rotate(180deg);transform:rotate(180deg); }", "*.gig-composebox-sidebar-button:last-child:nth-child(-n+2) { border-radius:0 0 3px 0; }", "*.gig-composebox-sidebar-button { transform:scaleX(-1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1); }", "*.gig-comment-vote-neg {margin: 0 15px 0 0;}", "*.gig-comment-repliesArrow-collapsed .gig-comment-repliesArrow-img {-webkit-transform:rotate(-270deg); transform:rotate(-270deg);}", "*.gig-comment-time {margin:2px 10px 0 0;}", "*.gig-composebox-cancel { margin-left: 6px; margin-right: 0px}", "*.gig-comment-edited { margin:2px 5px 0 0; float: left;}", "*.gig-comment .gig-comment-editbox {margin-left:0px;margin-right:-41px;}", "*.gig-comment-footer-right * {direction:ltr;text-align:right;}", "*.gig-comment-vote-posneg *.gig-comment-vote-neg {margin-left:0;margin-right:2px;}", "*.gig-comment-vote-total {margin-right:0;margin-left:5px;}", "*.gig-comment-data-removed {margin-right: -41px;}", "*.gig-comment-userBadge { margin-right: 0px; margin-left: 6px;}", "*.gig-comment-withBadges *.gig-comment-username { margin-right:0px; margin-left:6px; }", "*.gig-comment-withBadges *.gig-comment-time { float:left; margin-right:6px;}"].join(""),
                mobile: [".gig-comments-container {padding: 0 10px; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}", ".gig-comments-container * {transition: none;font-size:16px;-webkit-text-size-adjust:none;}", "*.gig-comments-linksContainer li {padding: 0 3px 0 0;margin-right:3px;}", "*.gig-comments-linksContainer li:after {margin-bottom:7px;margin-left:7px;}", "*.gig-comment-time {font-size: 13px;}", "*.gig-comment-footer * {font-size:15px}", "*.gig-composebox-follow {font-size:16px; padding-left: 20px;}", "*.gig-comments-share-provider {height:23px;background-position: 31px center;padding:4px 10px;width:39px;}", "*.gig-comments-checkbox {width: 16px;height: 16px; }", "*.gig-comments-checkbox-checked *.gig-comments-share-provider-checkbox {background-image:url('" + o.Images.getPhotoFullName("sharetoProviders/checkmark", 1) + "')}", ".gig-comments-hires-icons *.gig-comments-checkbox-checked *.gig-comments-share-provider-checkbox {background-image:url('" + o.Images.getPhotoFullName("sharetoProviders/checkmark") + "')}", "*.gig-composebox-share-text {line-height:30px;}", "*.gig-comments-share-more {height: 22px;}", "*.gig-comment-data {padding: 0}", "*.gig-comment-self-data {padding-left:41px;}", "*.gig-comment-replies {padding-left: 15px}", ".gig-composebox-open textarea.gig-composebox-textarea {height:45px;}", "*.gig-comment-replybox *.gig-composebox-close { vertical-align:middle; }", "*.gig-comment-editbox *.gig-composebox-close { vertical-align:middle; }", ".gig-composebox-open *.gig-composebox-textarea {min-height:45px;}", "*.gig-comments-dialog {width: auto;min-width:0;}", "*.gig-comments-dialog-textbox-button {float:right;margin-top:10px;}", "*.gig-comments-dialog-body {overflow:hidden}", "*.gig-composebox-textarea, *.gig-composebox-textarea *, *.gig-composebox-summary input {font-size:18px;}", "*.gig-comments-count {line-height:30px}", "*.gig-comment-vote-pos, .gig-comment-vote-neg {padding-left:30px;}", "*.gig-comment-vote-pos {background-size:27px 27px;background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_up", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos {background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_up") + "')}", "*.gig-comment-vote-pos-down{background-size:27px 27px;background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_up_pressed", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos-down{background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_up_pressed") + "')}", "*.gig-comment-vote-neg {background-size:27px 27px;background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_down", 1) + "');background-position:0 6px}", ".gig-comments-hires-icons *.gig-comment-vote-neg {background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_down") + "');}", "*.gig-comment-vote-neg-down {background-size:27px 27px;background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_down_pressed", 1) + "');background-position:0 6px}", ".gig-comments-hires-icons *.gig-comment-vote-neg-down {background-image: url('" + o.Images.getPhotoFullName("mobile/Thumbs_down_pressed") + "');}", "*.gig-comment-footer-right div {height:31px;line-height:31px;}", "*.gig-composebox-header-left *, *.gig-composebox-header-right *, *.gig-composebox-logout span {font-size:15px;}", "*.gig-comment .gig-comment-replybox {margin-bottom:10px;}", "*.gig-comment .gig-comment-editbox {margin-bottom:10px;}", "*.gig-comment-flag {display:none}", "*.gig-comment-rating, *.gig-comment-rating-drop {margin-bottom:3px;}", "*.gig-comment-summary {margin-left:2px;}", "*.gig-comments-container.gig-comment-rating-dimensions {padding: 10px;}", "*.gig-composebox-rating, *.gig-selfreview-rating {padding: 3px 0; margin: 5px 0}", "*.gig-composebox-rating-star, *.gig-selfreview-rating-star {padding-right:4px;width: 21px; height:20px;background-image:url('" + o.Images.getPhotoFullName("Star_gray_big", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-rating-star, .gig-comments-hires-icons *.gig-selfreview-rating-star {background-image:url('" + o.Images.getPhotoFullName("Star_gray_big") + "')}", "*.gig-composebox-rating-star-full, *.gig-selfreview-rating-star-full {background-image:url('" + o.Images.getPhotoFullName("Star_yellow_big", 1) + "')}", ".gig-comments-hires-icons *.gig-composebox-rating-star-full, .gig-comments-hires-icons *.gig-selfreview-rating-star-full {background-image:url('" + o.Images.getPhotoFullName("Star_yellow_big") + "')}", "*.gig-composebox-rating-value {margin:0;}", "*.gig-selfreview-rating .gig-comment-rating-value {margin: 2px 5px}", "ul.gig-comments-header-right {margin-left:10px}", "*.gig-comments-count {line-height:normal}", "*.gig-comment-footer-right {margin-left:10px;}", "*.gig-comment-footer-left, *.gig-comments-header-left *, *.gig-comments-linksContainer {line-height:31px;}", "*.gig-comments-linksContainer li:after {margin-bottom:10px;}", "*.gig-comments-guestbox {width: 178px;}", "*.gig-composebox-morebox {padding:0}", "*.gig-comments-updates-visible {height:auto;min-height:50px;}", "*.gig-comments-updates-full .gig-comments-updates-link {top:0}", "*.gig-comment-body, .gig-comment-body * {line-height:20px;}", "*.gig-composebox-withBadges *.gig-composebox-title { bottom: 5px; }", "*.gig-comment .gig-comment-editbox {margin-left:0;}"].join(""),
                mobileRtl: ["*.gig-comment-replies {padding-left:0;padding-right:15px;}", "*.gig-comment-data {padding: 0}", "*.gig-comment-self-data {padding-left:0;padding-right:41px;}", "*.gig-comments-share-provider {background-position:11px;}", "*.gig-comment .gig-comment-editbox {margin-right:0;}"].join(""),
                nonMobile: [".gig-comments-container *  {font-size:12px;transition: none 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86); -webkit-transition: none 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)}", "*.gig-comments-linksContainer li:hover, *.gig-comments-linksContainer a:hover {text-decoration:underline;text-decoration-skip:all}", "*.gig-comment-vote-pos:hover {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos:hover {background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_hover") + "')}", "*.gig-comment-vote-neg:hover {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_hover", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-neg:hover {background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_hover") + "')}", "*.gig-comment-footer li:hover, *.gig-comment-repliesArrow:hover div {text-decoration:underline}", "*.gig-comment-self-data:hover *.gig-comment-flag, *.gig-comment-flag-visible {visibility:visible; }", "*.gig-comment-vote-pos-down:hover {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_pressed", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-pos-down:hover {background-image: url('" + o.Images.getPhotoFullName("Thumbs_up_pressed") + "')}", "*.gig-comment-vote-neg-down:hover {background-size:14px 14px;background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_pressed", 1) + "')}", ".gig-comments-hires-icons *.gig-comment-vote-neg-down:hover {background-image: url('" + o.Images.getPhotoFullName("Thumbs_down_pressed") + "')}"].join("")
            }
        },
        29: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(93)
              , n = function() {
                function e() {}
                return e.getSelection = function(e) {
                    if (window.getSelection && document.createRange) {
                        e.normalize();
                        var t = window.getSelection().getRangeAt(0)
                          , i = t.cloneRange();
                        i.selectNodeContents(e),
                        i.setEnd(t.startContainer, t.startOffset);
                        var o = t.cloneRange();
                        o.selectNodeContents(t.startContainer),
                        o.setEnd(t.startContainer, t.startOffset);
                        var n = i.toString()
                          , s = o.toString();
                        return {
                            start: n.length,
                            end: n.length + t.toString().length,
                            text: n,
                            childContainer: o.startContainer,
                            childOffset: s.length,
                            childText: s
                        }
                    }
                    if (document.selection && document.body.createTextRange) {
                        var a = document.selection.createRange()
                          , g = document.body.createTextRange();
                        g.moveToElementText(e),
                        g.setEndPoint("EndToStart", a);
                        var r = g.text.length;
                        return {
                            start: r,
                            end: r + a.text.length,
                            text: g.text,
                            childContainer: t.endContainer,
                            endInChildContainer: 0,
                            childText: t.toString()
                        }
                    }
                }
                ,
                e.restoreSelection = function(e, t) {
                    if (window.getSelection && document.createRange) {
                        var i = 0
                          , o = document.createRange();
                        o.setStart(e, 0),
                        o.collapse(!0);
                        for (var n, s = [e], a = !1, g = !1; !g && (n = s.pop()); )
                            if (3 == n.nodeType) {
                                var r = i + n.length;
                                !a && t.start >= i && t.start <= r && (o.setStart(n, t.start - i),
                                a = !0),
                                a && t.end >= i && t.end <= r && (o.setEnd(n, t.end - i),
                                g = !0),
                                i = r
                            } else
                                for (var l = n.childNodes.length; l--; )
                                    s.push(n.childNodes[l]);
                        var m = window.getSelection();
                        m.removeAllRanges(),
                        m.addRange(o)
                    } else if (document.selection && document.body.createTextRange) {
                        var d = document.body.createTextRange();
                        d.moveToElementText(e),
                        d.collapse(!0),
                        d.moveEnd("character", t.end),
                        d.moveStart("character", t.start),
                        d.select()
                    }
                }
                ,
                e
            }();
            t.Selection = n;
            var s = function() {
                function e() {}
                return e.getPhotoFullName = function(t, i, n) {
                    return void 0 === i && (i = 0),
                    void 0 === n && (n = "png"),
                    o.imgBase + t + "_x" + (i > 0 ? i : e.pixelRatio) + "." + n
                }
                ,
                e.pixelRatio = window.devicePixelRatio ? Math.min(Math.ceil(window.devicePixelRatio), 3) : 1,
                e
            }();
            t.Images = s;
            var a = function() {
                function e() {}
                return e.cancelEvent = function(e) {
                    e.stopPropagation && e.stopPropagation()
                }
                ,
                e
            }();
            t.Events = a;
            var g = function() {
                function e() {}
                return e.createTaggedUserElement = function(e, t) {
                    var i = document.createElement("input");
                    return i.type = "button",
                    i.value = "@" + e,
                    i.innerHTML = e,
                    i.tabIndex = -1,
                    window.gigya.utils.DOM.addClassToElement(i, "gig-usertagging-tag"),
                    t && i.setAttribute("data-gig-uid", t),
                    i
                }
                ,
                e.replaceUserTagsWithSpans = function(e, t) {
                    for (var i = window.gigya.utils.DOM.getElementsByClass(e, "gig-usertagging-tag"), o = 0; o < i.length; o++) {
                        var n = i[o]
                          , s = n.getAttribute("data-gig-uid");
                        if (s) {
                            -1 == window.gigya.utils.array.indexOf(t, s) && t.push(s);
                            var a = n.getAttribute("value");
                            a || (a = n.innerHTML);
                            var g = document.createElement("span");
                            g.setAttribute("data-gig-uid", s),
                            window.gigya.utils.DOM.addClassToElement(g, "gig-usertagging-tag"),
                            a && (g.innerHTML = a),
                            n.parentElement.insertBefore(g, n),
                            n.parentElement.removeChild(n)
                        }
                    }
                    return e.innerHTML
                }
                ,
                e.replaceSpansWithUserTags = function(t) {
                    var i = window.gigya.utils.DOM.getElementsByClass(t, "gig-usertagging-tag");
                    if (i)
                        for (var o = 0; o < i.length; o++) {
                            var n = i[o]
                              , s = n.getAttribute("data-gig-uid")
                              , a = n.innerHTML.slice(1)
                              , g = e.createTaggedUserElement(a, s);
                            n.parentElement.insertBefore(g, n),
                            n.parentElement.removeChild(n)
                        }
                }
                ,
                e
            }();
            t.UserTagging = g
        },
        36: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.COMMENTS = 0] = "COMMENTS",
                e[e.REVIEWS = 1] = "REVIEWS"
            }(t.TextMode || (t.TextMode = {})),
            function(e) {
                e[e.user = 0] = "user",
                e[e.comment = 1] = "comment",
                e[e.moderator = 2] = "moderator"
            }(t.HightlighGroupTypeEnum || (t.HightlighGroupTypeEnum = {})),
            function(e) {
                e[e.commenterName = 0] = "commenterName",
                e[e.commentTime = 1] = "commentTime"
            }(t.BadgeLocationEnum || (t.BadgeLocationEnum = {})),
            function(e) {
                e[e.none = 0] = "none",
                e[e.rectangle = 1] = "rectangle"
            }(t.BadgeFrameEnum || (t.BadgeFrameEnum = {}))
        },
        360: function(e, t, i) {
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = i(92)
                  , n = i(158)
                  , s = i(67)
                  , a = i(36)
                  , g = i(361)
                  , r = i(29)
                  , l = i(159)
                  , m = i(162)
                  , d = i(160)
                  , c = i(93)
                  , u = i(94)
                  , p = i(161)
                  , h = i(157);
                window.gigya.pluginTypes || (window.gigya.pluginTypes = {}),
                window.gigya.pluginTypes.comments || (window.gigya.pluginTypes.comments = {}),
                window.gigya.pluginTypes.comments.CommentsUtils || (window.gigya.pluginTypes.comments.CommentsUtils = {}),
                e(window.gigya.pluginTypes.comments, o, n, s, a, g, l, m, d, c, u, p, h),
                e(window.gigya.pluginTypes.comments.CommentsUtils, r),
                window.gigya._.UI.attachPlugin(g.CommentsPlugin, "comments", "comments2", "showCommentsUI")
            }
            ).call(this, i(0).__assign)
        },
        361: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(158)
              , n = i(161)
              , s = i(36)
              , a = i(67)
              , g = i(94)
              , r = i(162)
              , l = i(29)
              , m = function() {
                function e(e, t) {
                    var i = this;
                    this.params = e,
                    this.refString = t,
                    this.version = 2,
                    this.commentInstances = {},
                    this.templates = window.gigya.utils.object.clone(n.defaultTemplates, !1),
                    this.settings = {},
                    this.state = {
                        flags: {}
                    },
                    this.streamInfo = {},
                    this.userCommentsData = [],
                    this.userOptions = {},
                    this.userComments = [],
                    this.newCommentsCount = 0,
                    this.userHighlightingGroups = [],
                    this.autoPixelRatio = !1,
                    this.pixelRatio = 1,
                    this.simpleShareSource = null,
                    this.loadState(),
                    this.shareEnabled = this.isSharePossible(),
                    this.containerID = e.containerID,
                    this.container = this.getContainer(),
                    this.params.useHiResIcons && (this.autoPixelRatio = !0,
                    this.pixelRatio = 0),
                    this.params.templates ? this.params.ctag && (this.params.ctag += "_templates") : this.params.templates = {},
                    this.templates = window.gigya.utils.object.merge([this.templates, this.params.templates]),
                    this.params.pinnedCommentID = window.gigya._.plugins.utils.URL.getHashParamValue(document.location.href, "gig_comment_id"),
                    this.params.pinnedCommentID && (this.pinnedCommentID = this.params.pinnedCommentID),
                    this.textMode = "ratingsOnly" == this.settings.mode || "reviews" == this.settings.mode ? s.TextMode.REVIEWS : s.TextMode.COMMENTS;
                    var o = this.params.deviceType ? this.params.deviceType.toLowerCase() : "desktop";
                    this.isMobileUI = "mobile" == o || "auto" == o && window.gigya.localInfo.isMobile,
                    this.setDefaults(),
                    this.mainComposeBox = new g.NewCommentBox(this,this.getElement("composebox"),null),
                    this.fetchAll(function() {
                        if (i.initUI(),
                        !window.gigya.utils.DOM.isVisible(i.container)) {
                            var e = new window.gigya._.Poller;
                            e.addActions(function() {
                                window.gigya.utils.DOM.isVisible(i.container) && (e.stop(),
                                i.updateAll())
                            }),
                            e.start(300)
                        }
                        i.updateAll(!0),
                        window.gigya.events.dispatchForWidget({
                            eventName: "load",
                            version: i.version
                        }, i.params)
                    });
                    var a = function(e) {
                        e && e.user ? i.setUser(e.user) : i.setUser({})
                    };
                    window.gigya.socialize.addEventHandlers({
                        listenerType: "component"
                    }, {
                        onLogin: a,
                        onLogout: a,
                        onConnectionAdded: a,
                        onConnectionRemoved: a
                    })
                }
                return e.prototype.getText = function(e, t, i) {
                    return this.params.customLang && this.params.customLang[e] ? this.params.customLang[e].replace(t, i) : window.gigya.pluginUtils.lang.getLocalizedText("gigya.services.comments.plugins.comments2.js", e, this.params.lang, t, i)
                }
                ,
                e.prototype.loadState = function() {
                    var e = window.gigya.utils.localStorage.getObject("gig-comments", void 0);
                    e && (this.state = e)
                }
                ,
                e.prototype.saveState = function() {
                    window.gigya.utils.localStorage.setObject("gig-comments", this.state)
                }
                ,
                e.prototype.setDefaults = function() {
                    this.params.streamID || (this.params.streamID = 0);
                    var e = this.getDefaultSort();
                    e && (this.params.sort = e)
                }
                ,
                e.prototype.setDefaultShareUserAction = function() {
                    var e, t, i = new window.gigya.socialize.UserAction(this.params.shareUserAction);
                    this.textMode == s.TextMode.REVIEWS ? (t = this.getText("username_rated_pagetitle_as_rating_5") + "\n%pagetitle",
                    e = this.getText("username_posted_a_review_on_pagetitle"),
                    this.getText("username_commented_on_pagetitle")) : (t = "%commentText",
                    e = this.getText("username_commented_on_pagetitle")),
                    i.description || i.setDescription(t),
                    i.title || i.setTitle(e),
                    i.linkBack || i.setLinkBack(document.location.href),
                    this.params.shareUserAction = i
                }
                ,
                e.prototype.getElement = function(e) {
                    var t = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-comments-" + e);
                    return t.length > 0 ? t[0] : null
                }
                ,
                e.prototype.initUI = function() {
                    var e = ""
                      , t = this.params.cssPrefix;
                    if (t || !this.addedCss) {
                        var i = this.params.lang;
                        this.isRtl = "he" == i || "ar" == i,
                        e += r.defaultCss.reset,
                        this.isRtl && (e += r.defaultCss.resetRtl);
                        var o = window.gigya.pluginUtils.css.fixCss(r.defaultCss.global)
                          , n = window.gigya.pluginUtils.css.fixCss(r.defaultCss.rtl);
                        e += o,
                        this.isRtl && (e += n),
                        this.isMobileUI ? (e += r.defaultCss.mobile,
                        this.isRtl && (e += r.defaultCss.mobileRtl)) : e += r.defaultCss.nonMobile,
                        window.gigya.localInfo.isMobile && window.gigya.localInfo.isSafari && (e += ".gig-comments-container * {-webkit-text-size-adjust:none;}"),
                        window.gigya._.plugins.utils.css.addCss(e, t),
                        this.addedCss = !0
                    }
                    this.isMobileUI && (this.container.style.width = "100%"),
                    this.container.className = "gig-comments-container" + (this.textMode == s.TextMode.REVIEWS ? " gig-comments-reviews" : "") + (this.autoPixelRatio ? " gig-comments-hires-icons" : ""),
                    this.container.setAttribute("data-version", "2");
                    var a = "bottom" != this.settings.newCommentPosition || this.params.templates.commentsPluginComposeBottom ? this.templates.commentsPlugin : this.templates.commentsPluginComposeBottom;
                    this.container.innerHTML = a,
                    this.mainComposeBox.container = this.getElement("composebox")
                }
                ,
                e.prototype.getContainer = function() {
                    return document.getElementById(this.containerID)
                }
                ,
                e.prototype.fetchComments = function(e, t) {
                    var i = this;
                    void 0 === e && (e = !1);
                    var o = {
                        threaded: !0,
                        categoryID: this.params.categoryID,
                        streamID: this.params.streamID,
                        includeSettings: !0,
                        includeUserOptions: !0,
                        includeUserHighlighting: !0,
                        pinnedCommentID: this.params.pinnedCommentID,
                        tags: this.params.filterTags,
                        callback: function(e) {
                            i.getCommentsCallback(e),
                            t && t()
                        }
                    };
                    this.pagingDisabled && (o.threadLimit = 0),
                    this.nextPageStart ? e || (o.start = this.nextPageStart) : o.includeStreamInfo = !0,
                    e && this.streamInfo.lastCommentTimestamp && (o.since = this.streamInfo.lastCommentTimestamp),
                    window.gigya.comments.getComments(this.params, o)
                }
                ,
                e.prototype.reset = function() {
                    this.comments = [],
                    this.commentInstances = {},
                    this.streamInfo = {},
                    this.nextPageStart = null,
                    delete this.params.start
                }
                ,
                e.prototype.removeUnpublishedComments = function() {
                    for (var e in this.commentInstances) {
                        var t = this.commentInstances[e];
                        t.isPost = !1,
                        t.info = null,
                        t.error = null,
                        t.isRemovedComment() ? t.updateAll() : "published" !== t.data.status && this.removeComment(t)
                    }
                }
                ,
                e.prototype.isUserFollowing = function() {
                    return this.userOptions && "immediate" == this.userOptions.replyNotifications
                }
                ,
                e.prototype.setUserComments = function(e) {
                    if (e) {
                        var t = null != this.getSelfReview();
                        this.userCommentsData = e,
                        this.userComments = [];
                        for (var i = 0; i < this.userCommentsData.length; i++) {
                            var n = this.commentInstances[this.userCommentsData[i].ID] || new o.Comment(this,this.userCommentsData[i]);
                            this.userComments.push(n)
                        }
                        this.textMode == s.TextMode.REVIEWS && t != (null != this.getSelfReview()) && this.updateUserReview()
                    }
                }
                ,
                e.prototype.getCommentsCallback = function(e) {
                    var t = this;
                    if (0 != e.errorCode)
                        this.broadcastedError || (this.container && !this.nextPageStart && (this.container.innerHTML = ""),
                        window.gigya.events.dispatchErrorFromResponse(this.params, e),
                        this.broadcastedError = !0);
                    else {
                        e.settings && (this.settings = window.gigya.utils.object.merge([{}, e.settings])),
                        this.textMode = "ratingsOnly" == this.settings.mode || "reviews" == this.settings.mode ? s.TextMode.REVIEWS : s.TextMode.COMMENTS,
                        this.setDefaultShareUserAction();
                        var i = !e.requestParams.start && !e.requestParams.since;
                        if (i) {
                            this.comments = [];
                            var o = this.getElement("comments");
                            o && (o.innerHTML = "")
                        }
                        this.buildHighlightsCss();
                        var n = null != e.requestParams.since;
                        if (this.addComments(a.CommentData.fromRawDataArray(e.comments), 0, n, !1),
                        this.setUserComments(a.CommentData.fromRawDataArray(e.userComments)),
                        this.hasMore = e.hasMore,
                        e.streamInfo && (this.streamInfo = e.streamInfo,
                        this.updateCount()),
                        e.userOptions && (this.userOptions = e.userOptions),
                        null != this.params.useSiteLogin && (this.settings.useSiteLogin = window.gigya.utils.validation.isExplicitTrue(this.params.useSiteLogin)),
                        !this.nextPageStart) {
                            var g = this.settings.refreshMode
                              , r = 1e3 * this.settings.refreshInterval || 0;
                            r > 0 && "off" != g && (this.refreshTimeout = window.setInterval(function() {
                                t.checkForNewComments()
                            }, r))
                        }
                        if (e.requestParams.since || (this.nextPageStart = e.next),
                        e.requestParams.userHighlightingGroups || (this.userHighlightingGroups = e.userHighlightingGroups),
                        this.getMoreInProgress) {
                            this.getMoreInProgress = !1;
                            var l = e.comments[0].ID;
                            if (l) {
                                var m = this.container.querySelector('div.gig-comment[data-comment-id="' + l + '"]');
                                m && (m.focus(),
                                window.gigya.utils.viewport.scrollIntoView(m))
                            }
                        }
                        this.updateMore(i),
                        this.updateCount()
                    }
                }
                ,
                e.prototype.addComments = function(e, t, i, n, s, a) {
                    void 0 === t && (t = 0);
                    var g = [];
                    i && e.reverse();
                    var blackList = JSON.parse(localStorage.getItem("bannedUsers"));
                    console.log("ENTRO");
                    for (var r = 0; r < e.length; r++) {
                        console.log("Interceptado en customAddComment");
                        if (!blackList.find(e[r].sender.name)) {
                            var l = e[r]
                            , m = this.commentInstances[l.ID];
                            m ? (m.error = s,
                            m.info = a,
                            m.reset(l, !0)) : m = new Comment(this,l,t,null,n,i,s,a),
                            g.push(m)
                       }
                    }
                }
                ,
                e.prototype.createUserHighlightingBadges = function(e, t) {
                    if (!t)
                        return !1;
                    for (var i = this.getHighlightingBadges(t, ["user", "moderator"]), o = !1, n = !0, a = i.length - 1; a >= 0; a--) {
                        var g = i[a];
                        if (g.showBadge) {
                            o = !0;
                            var r = document.createElement("div");
                            window.gigya.utils.DOM.addClassToElement(r, "gig-comment-userBadge"),
                            window.gigya.utils.DOM.addClassToElement(r, g.className),
                            r.innerHTML = "Moderator" == g.badgeText ? this.getText("moderator") : g.badgeText,
                            s.BadgeFrameEnum[g.badgeFrame] === s.BadgeFrameEnum.rectangle && window.gigya.utils.DOM.addClassToElement(r, "gig-badge-border"),
                            e.parentNode.insertBefore(r, e.nextSibling)
                        }
                        n && g.commenterNameColor && "" !== g.commenterNameColor && (window.gigya.utils.DOM.addClassToElement(e, g.userClassName),
                        n = !1)
                    }
                    return o
                }
                ,
                e.prototype.checkForNewComments = function() {
                    var e = this;
                    "off" == this.settings.refreshMode || this.isPaused || window.gigya.comments.getStreamInfo(this.params, {
                        callback: function(t) {
                            if (t.streamInfo) {
                                var i = (e.textMode === s.TextMode.REVIEWS ? t.streamInfo.ratingCount : t.streamInfo.commentCount) - (e.textMode === s.TextMode.REVIEWS ? e.streamInfo.ratingCount : e.streamInfo.commentCount);
                                e.updatedStreamInfo = t.streamInfo,
                                (i > 0 || e.lastCommentTimestamp !== t.streamInfo.lastCommentTimestamp) && (e.newCommentsCount = e.newCommentsCount + i,
                                e.lastCommentTimestamp = t.streamInfo.lastCommentTimestamp,
                                e.hasNewComments())
                            }
                        }
                    })
                }
                ,
                e.prototype.hasNewComments = function() {
                    var e = this.settings.refreshMode;
                    "countOnly" == e ? (this.updateStrip(),
                    this.newCommentsCount = 0) : "full" == e && this.fetchNewComments()
                }
                ,
                e.prototype.isSharePossible = function() {
                    return 0 == document.location.href.indexOf("http") && (!window.__gigAPIAdapterSettings || "http://www.gigya.com/" != document.location.href)
                }
                ,
                e.prototype.fetchNewComments = function() {
                    this.streamInfo = this.updatedStreamInfo,
                    this.updatedStreamInfo = null,
                    this.fetchComments(!0),
                    this.updateStrip()
                }
                ,
                e.prototype.updateStrip = function(e) {
                    var t = this
                      , i = this.settings.refreshMode
                      , o = this.getElement("updates");
                    if (o) {
                        e && (o.innerHTML = this.templates.updates);
                        var n = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-updates-text")[0]
                          , a = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-updates-link")[0]
                          , g = ""
                          , r = "";
                        window.gigya.utils.DOM.removeClassFromElement(o, "gig-comments-updates-countonly"),
                        window.gigya.utils.DOM.removeClassFromElement(o, "gig-comments-updates-full"),
                        "countOnly" == i ? (this.newCommentsCount > 0 && (g = this.textMode == s.TextMode.COMMENTS ? 1 == this.newCommentsCount ? this.getText("1_new_comment_was_recently_posted") : this.getText("num_new_comments_were_recently_posted", "%num", this.newCommentsCount.toString()) : 1 == this.newCommentsCount ? this.getText("1_new_review_was_recently_posted") : this.getText("num_new_reviews_were_recently_posted", "%num", this.newCommentsCount.toString()),
                        r = this.getText("click_to_show")),
                        e && window.gigya.utils.DOM.addButtonSubmitListener(a, function() {
                            t.fetchNewComments()
                        }),
                        window.gigya.utils.DOM.addClassToElement(o, "gig-comments-updates-countonly")) : "full" == i && (this.newCommentsCount > 0 && (g = this.textMode == s.TextMode.COMMENTS ? 1 == this.newCommentsCount ? this.getText("1_new_comment_was_recently_posted") : this.getText("num_new_comments_were_recently_posted", "%num", this.newCommentsCount.toString()) : 1 == this.newCommentsCount ? this.getText("1_new_review_was_recently_posted") : this.getText("num_new_reviews_were_recently_posted", "%num", this.newCommentsCount.toString()),
                        r = this.isPaused ? this.getText("resume_stream") : this.getText("pause_stream"),
                        this.isPaused ? window.gigya.utils.DOM.addClassToElement(o, "gig-comments-updates-paused") : window.gigya.utils.DOM.removeClassFromElement(o, "gig-comments-updates-paused")),
                        e && window.gigya.utils.DOM.addButtonSubmitListener(a, function() {
                            t.isPaused = !t.isPaused,
                            t.updateStrip()
                        }),
                        window.gigya.utils.DOM.addClassToElement(o, "gig-comments-updates-full")),
                        g || r ? (n && (n.innerHTML = g),
                        a && (a.innerHTML = r),
                        window.gigya.utils.DOM.addClassToElement(o, "gig-comments-updates-visible")) : window.gigya.utils.DOM.removeClassFromElement(o, "gig-comments-updates-visible")
                    }
                }
                ,
                e.prototype.getComment = function(e) {
                    return this.commentInstances[e]
                }
                ,
                e.prototype.removeComment = function(e) {
                    for (var t = e.replies.concat(), i = 0; i < t.length; i++)
                        t[i].dispose();
                    var o = e.getParent();
                    o ? o.removeChild(e.id) : window.gigya.utils.array.removeByProperty(this.comments, "id", e.id),
                    window.gigya.utils.array.removeByProperty(this.userComments, "id", e.id),
                    window.gigya.utils.array.removeByProperty(this.userCommentsData, "ID", e.id);
                    var n = e.getContainer();
                    if (n && n.parentNode.removeChild(n),
                    delete this.commentInstances[e.id],
                    "published" === e.data.status)
                        for (this.streamInfo.commentCount--,
                        o || this.streamInfo.ratingCount--; o; )
                            o.descendantsCount--,
                            o.updateRepliesCount(),
                            o = o.getParent();
                    this.updateCount(),
                    this.textMode == s.TextMode.REVIEWS && this.updateUserReview()
                }
                ,
                e.prototype.getUserInfo = function(e) {
                    var t = this;
                    window.gigya.socialize.getUserInfo(this.params, {
                        callback: function(i) {
                            0 == i.errorCode ? t.setUser(i.user, !0) : window.gigya.events.dispatchErrorFromResponse(t.params, i),
                            e && e()
                        }
                    })
                }
                ,
                e.prototype.filterIdentities = function(e) {
                    if (!e || !e.identities)
                        return e;
                    var t = this.params.enabledProviders || "*"
                      , i = this.params.disabledProviders || ""
                      , o = 0
                      , n = window.gigya.socialize.getProvidersByName(t + ",site");
                    n = window.gigya.socialize.hideProvidersByName(n, i);
                    for (var s = {}, a = 0; a < n.length; a++) {
                        var g = n[a];
                        e.identities[g.name] && (o++,
                        s[g.name] = e.identities[g.name])
                    }
                    return e.identities = s,
                    e.loginProvider && !e.identities[e.loginProvider] && (delete e.loginProvider,
                    delete e.nickname),
                    0 == o && (e.isConnected = !1),
                    e
                }
                ,
                e.prototype.setUser = function(e, t) {
                    var i = this;
                    this.user = this.filterIdentities(e),
                    t || (this.setUserComments([]),
                    this.streamInfo.isUserSubscribed = !1,
                    this.removeUnpublishedComments(),
                    this.fetchUserVotes(),
                    this.fetchSelfComments(),
                    e.isConnected && window.gigya.comments.getStreamInfo(this.params, {
                        callback: function(e) {
                            e.streamInfo && (i.streamInfo = e.streamInfo,
                            i.updateHeaderLinks())
                        }
                    })),
                    this.updateAll(!1)
                }
                ,
                e.prototype.fetchAll = function(e) {
                    var t = this
                      , i = function() {
                        if (t.user && t.comments) {
                            if (e && e(),
                            t.hideProgress(),
                            t.settings.repliesCollapsed)
                                for (var i = 0; i < t.comments.length; i++)
                                    t.comments[i].collapse();
                            if (t.pinnedCommentID) {
                                var o = t
                                  , n = o.getComment(o.pinnedCommentID);
                                window.setTimeout(function() {
                                    var e = n.data.threadID;
                                    "" == e && (e = n.id),
                                    o.getComment(e).isCollapse() && o.getComment(e).expand(),
                                    o.scrollToPinnedComment(o.pinnedCommentID),
                                    o.setPinnedCommentColor(o.pinnedCommentID)
                                }, 2)
                            }
                        }
                    };
                    this.fetchComments(!1, i),
                    this.getUserInfo(i),
                    this.showProgress()
                }
                ,
                e.prototype.scrollToPinnedComment = function(e) {
                    var t = document.querySelector('[data-comment-id="' + e + '"]');
                    if (t) {
                        var i = t.offsetTop;
                        window.scrollTo(0, i - 12)
                    }
                }
                ,
                e.prototype.setPinnedCommentColor = function(e) {
                    var t = document.querySelector('[data-comment-id="' + e + '"]');
                    if (t) {
                        var i = t.getElementsByClassName("gig-comment-content")[0];
                        window.gigya.utils.DOM.addClassToElement(i, "gig-comment-pinned-background"),
                        window.gigya.utils.DOM.addClassToElement(i, "gig-comment-colored-background"),
                        window.gigya.utils.DOM.removeClassFromElement(i, "gig-comment-badge-pick")
                    }
                }
                ,
                e.prototype.getUsername = function() {
                    return window.gigya.utils.sanitize.sanitizeHTML(this.user.nickname || this.user.firstName || (this.user.isGuest ? this.getText("guest") : this.getText("anonymous")))
                }
                ,
                e.prototype.updateAll = function(e) {
                    void 0 === e && (e = !1),
                    this.user && this.comments && (this.mainComposeBox && (e ? this.mainComposeBox.render() : this.mainComposeBox.updateUI()),
                    this.tempComposeBox && (e ? this.tempComposeBox.render() : this.tempComposeBox.updateUI()),
                    this.updateHeaderLinks(e),
                    this.updateComments(e),
                    e && this.bindAll(),
                    this.updateMore(e),
                    this.updateStrip(e))
                }
                ,
                e.prototype.fetchUserVotes = function() {
                    var e = this;
                    window.gigya.comments.getUserVotes(this.params, {
                        callback: function(t) {
                            for (var i in e.commentInstances) {
                                var o = e.commentInstances[i];
                                o.voteInProgress || (o.data.vote = t.userVotes ? t.userVotes[i] : "none",
                                o.updateVote())
                            }
                        }
                    })
                }
                ,
                e.prototype.fetchSelfComments = function() {
                    var e = this;
                    window.gigya.comments.getUserComments(this.params, {
                        includeReplies: !0,
                        includeUserHighlighting: !0,
                        callback: function(t) {
                            if (t && t.comments) {
                                e.setUserComments(t.comments);
                                for (var i = 0; i < t.comments.length; i++) {
                                    var o = t.comments[i].ID;
                                    if (e.commentInstances[o])
                                        (s = e.commentInstances[o]).data.sender.isSelf = !0,
                                        s.updateComment(!1)
                                }
                            } else
                                for (var n in e.setUserComments([]),
                                e.commentInstances) {
                                    var s;
                                    (s = e.commentInstances[n]).data.sender.isSelf = !1,
                                    s.updateComment(!1)
                                }
                            t.requestParams.userHighlightingGroups || (e.userHighlightingGroups = t.userHighlightingGroups),
                            e.mainComposeBox.updateUserBadges()
                        }
                    })
                }
                ,
                e.prototype.showProgress = function() {
                    window.gigya.utils.DOM.addClassToElement(this.container, "gig-comments-container-progress")
                }
                ,
                e.prototype.hideProgress = function() {
                    window.gigya.utils.DOM.removeClassFromElement(this.container, "gig-comments-container-progress")
                }
                ,
                e.prototype.updateHeaderLinks = function(e) {
                    var t = this.getElement("header");
                    e && t && (t.innerHTML = window.gigya.utils.templates.fill(this.templates.header, {
                        sort: this.getText("sort"),
                        subscribe: this.getText("subscribe"),
                        rss: "<a>" + this.getText("rss") + "</a>"
                    }));
                    var i = this.getElement("sort");
                    i && (i.style.display = this.settings.enableUserSorting ? "" : "none");
                    var o = this.getElement("rss");
                    o && (o.style.display = this.settings.disableRSS ? "none" : "");
                    var n = this.getElement("subscribe");
                    if (n) {
                        var s = this.streamInfo.isUserSubscribed || this.unsubscribeToken ? this.getText("unsubscribe") : this.getText("subscribe");
                        n.title = s,
                        n.innerHTML = s,
                        n.style.display = this.settings.disableRSS ? "none" : ""
                    }
                    t && this.setLinks(t)
                }
                ,
                e.prototype.updateUserReview = function() {
                    this.mainComposeBox.updateUI()
                }
                ,
                e.prototype.getSelfReview = function() {
                    if (this.textMode == s.TextMode.REVIEWS)
                        for (var e = 0; e < this.userComments.length; e++)
                            if (!this.userComments[e].data.parentID)
                                return this.userComments[e]
                }
                ,
                e.prototype.setLinks = function(e) {
                    for (var t, i, o = window.gigya.utils.DOM.getElementsByClass(e, "gig-comments-linksContainer"), n = 0; n < o.length; n++) {
                        t = !1;
                        for (var s = (i = o[n].childNodes).length - 1; s >= 0; s--) {
                            var a = i[s];
                            "none" == a.style.display || "" == a.innerHTML || t ? window.gigya.utils.DOM.removeClassFromElement(a, "gig-comments-link-lastVisible") : (window.gigya.utils.DOM.addClassToElement(a, "gig-comments-link-lastVisible"),
                            t = !0)
                        }
                    }
                }
                ,
                e.prototype.updateComments = function(e) {
                    if (void 0 === e && (e = !1),
                    this.getElement("comments")) {
                        e && (this.getElement("comments").innerHTML = "");
                        for (var t = 0; t < this.comments.length; t++)
                            this.comments[t].updateAll();
                        this.updateCount()
                    }
                }
                ,
                e.prototype.updateCount = function() {
                    var e = this.getElement("count");
                    if (e)
                        if (this.settings.disableCommentsCount)
                            e.innerHTML = "";
                        else {
                            var t;
                            if (this.textMode == s.TextMode.REVIEWS) {
                                var i = this.streamInfo.ratingCount
                                  , o = this.streamInfo.commentCount - this.streamInfo.ratingCount;
                                t = this.getPluralizedCount(i, "review") + (o > 0 ? ", " + this.getPluralizedCount(o, "comment") : "")
                            } else
                                t = this.getPluralizedCount(this.streamInfo.commentCount, "comment");
                            e.innerHTML = t
                        }
                }
                ,
                e.prototype.getPluralizedCount = function(e, t) {
                    var i = "one_" + t
                      , o = "num_" + t + "s"
                      , n = this.getText(1 == e ? i : o, "%num", e.toString());
                    return "fr" == this.params.lang && 0 == e && (n = (n = this.getText(i, "%num", e.toString())).replace("1", "0")),
                    n
                }
                ,
                e.prototype.updateMore = function(e) {
                    var t = this.getElement("more");
                    t && (this.hasMore ? (this.getMoreInProgress ? (window.gigya.utils.DOM.addClassToElement(t, "gig-comments-more-progress"),
                    t.innerHTML = "") : (window.gigya.utils.DOM.removeClassFromElement(t, "gig-comments-more-progress"),
                    t.innerHTML = "reviews" == this.settings.mode ? this.getText("show_more_reviews") : "ratingsOnly" == this.settings.mode ? this.getText("show_more_ratings") : this.getText("show_more_comments")),
                    t.style.display = "") : t.style.display = "none")
                }
                ,
                e.prototype.bindAll = function() {
                    var e = this
                      , t = this.getElement("more");
                    t && window.gigya.utils.DOM.addButtonSubmitListener(t, function() {
                        e.onMoreClick(t)
                    });
                    var i = this.getElement("subscribe");
                    i && window.gigya.utils.DOM.addButtonSubmitListener(i, function() {
                        e.onSubscribeClick()
                    });
                    var o = this.getElement("rss");
                    if (o)
                        for (var n = o.getElementsByTagName("a"), s = 0; s < n.length; s++) {
                            var a = n[s];
                            a.setAttribute("href", this.streamInfo.rssURL),
                            window.gigya.utils.DOM.addButtonSubmitListener(a, function(t) {
                                e.onRssClick(t, !0)
                            }),
                            window.gigya.utils.DOM.addEventListener(a, "contextmenu", function(t) {
                                e.onRssClick(t)
                            })
                        }
                    var g = this.getElement("sort");
                    window.gigya.utils.DOM.addEventListener(g, "mousedown", function(t) {
                        e.onSortClick(g)
                    })
                }
                ,
                e.prototype.onSubscribeClick = function() {
                    var e = this;
                    if (this.streamInfo.isUserSubscribed)
                        window.gigya.comments.unsubscribe(this.params, {
                            callback: function(t) {
                                return e.onUnsubscribe(t)
                            }
                        });
                    else if (this.unsubscribeToken)
                        window.gigya.comments.unsubscribe(this.params, {
                            unsubscribeToken: this.unsubscribeToken,
                            callback: function(t) {
                                return e.onUnsubscribe(t)
                            }
                        });
                    else {
                        var t = this.textMode == s.TextMode.REVIEWS ? "review" : "comment"
                          , i = window.gigya.utils.templates.fill(this.templates.emailTextboxDialogBody, {
                            text: this.getText("enter_your_email_to_subscribe_to_new_" + t + "s_in_this_stream_colon"),
                            buttonText: this.getText("subscribe"),
                            email: this.user.email || "",
                            emailLabel: this.getText("email")
                        })
                          , o = this.showDialog(this.getText("notifications_settings"), i, void 0, void 0, void 0, function() {
                            e.getElement("subscribe").focus()
                        })
                          , n = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-textbox-button")[0];
                        window.gigya.utils.DOM.addButtonSubmitListener(n, function() {
                            var t = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-textbox")[0];
                            if (t) {
                                var i = t.value;
                                if (window.gigya.pluginUtils.validation.isEmailValid(i))
                                    e.subscribe(t.value),
                                    e.activeDialog.cancelHandler();
                                else
                                    window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-error")[0].innerHTML = e.getText("please_provide_a_valid_email_address")
                            }
                        })
                    }
                }
                ,
                e.prototype.subscribe = function(e) {
                    var t = this;
                    this.setStreamInfoIfNeeded(null, null, function() {
                        window.gigya.comments.subscribe(t.params, {
                            email: e,
                            callback: function(e) {
                                t.onSubscribe(e)
                            }
                        })
                    });
                    var i = this.textMode == s.TextMode.REVIEWS ? "review" : "comment"
                      , o = '<div class="gig-comments-dialog-subscribe-okIcon"></div>' + this.getText("thank_you_for_subscribing") + "<br />" + this.getText("new_" + i + "s_will_be_sent_directly_to_your_email_inbox");
                    this.showDialog(this.getText("notifications_settings"), o),
                    window.setTimeout(function() {
                        t.activeDialog && t.activeDialog.cancelHandler()
                    }, 3e3)
                }
                ,
                e.prototype.onUnsubscribe = function(e) {
                    var t = this;
                    0 == e.errorCode && (this.showDialog(this.getText("notifications_settings"), this.getText("you_have_successfully_unsubscribed")),
                    window.setTimeout(function() {
                        t.activeDialog && t.activeDialog.cancelHandler()
                    }, 3e3),
                    delete this.unsubscribeToken,
                    this.streamInfo.isUserSubscribed = !1,
                    this.updateHeaderLinks())
                }
                ,
                e.prototype.onSubscribe = function(e) {
                    e && e.unsubscribeToken && (this.unsubscribeToken = e.unsubscribeToken),
                    e.unsubscribeToken || (this.streamInfo.isUserSubscribed = !0),
                    this.updateHeaderLinks()
                }
                ,
                e.prototype.onMoreClick = function(e) {
                    this.hasMore && !this.getMoreInProgress && (this.getMoreInProgress = !0,
                    this.updateMore(),
                    this.fetchComments())
                }
                ,
                e.prototype.onRssClick = function(e, t) {
                    if (t)
                        return this.setStreamInfoIfNeeded(e, this.streamInfo.rssURL);
                    this.setStreamInfoIfNeeded(e)
                }
                ,
                e.prototype.onSortClick = function(e) {
                    var t = this;
                    if (e) {
                        var i = window.gigya.utils.DOM.getElementPosition(e)
                          , o = document.createElement("div");
                        o.style.position = "absolute",
                        null != o.style.zIndex && (o.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString()),
                        o.innerHTML = window.gigya.utils.templates.fill(this.templates.sortbox, {
                            most_recent: this.getText("most_recent"),
                            oldest: this.getText("oldest"),
                            most_voted: this.getText("most_voted"),
                            ratings: this.getText("ratings")
                        }),
                        o.className = "gig-comments-container gig-comments-sortbox";
                        for (var n = o.getElementsByTagName("li"), a = 0; a < n.length; a++) {
                            var g = n[a]
                              , r = g.getAttribute("data-sort")
                              , m = this.params.sort;
                            (r == m || !m && r == this.settings.sortBy) && window.gigya.utils.DOM.addClassToElement(g, "gig-comments-sortbox-selected"),
                            this.textMode != s.TextMode.REVIEWS && 0 == r.indexOf("rating") ? window.gigya.utils.DOM.removeElement(g) : window.gigya.utils.DOM.addButtonSubmitListener(g, function(e) {
                                var i = (e.target || e.srcElement).getAttribute("data-sort");
                                t.params.pinnedCommentID && delete t.params.pinnedCommentID,
                                i && (o.parentNode.removeChild(o),
                                t.params.sort = i,
                                t.setDefaultSort(i),
                                t.saveState(),
                                t.reset(),
                                t.fetchComments())
                            })
                        }
                        window.gigya.utils.DOM.appendToBody(o),
                        o.style.left = i.left - o.offsetWidth + 30 + "px",
                        o.style.top = i.top + e.offsetHeight + "px",
                        window.gigya.pluginUtils.animation.fadeIn(o),
                        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(o, function(e, t) {
                            t && l.Events.cancelEvent(e)
                        })
                    }
                }
                ,
                e.prototype.setDefaultSort = function(e) {
                    window.gigya.utils.cookie.set("_gig_comments_sort", e)
                }
                ,
                e.prototype.getDefaultSort = function() {
                    return window.gigya.utils.cookie.get("_gig_comments_sort")
                }
                ,
                e.prototype.showDialog = function(e, t, i, o, n, s) {
                    var a = this;
                    this.activeDialog && this.activeDialog.cancelHandler();
                    var g = window.gigya.utils.DOM.createTopLevelDiv();
                    g.style.position = "fixed",
                    g.className = this.container.className,
                    g.innerHTML = this.templates.dialog;
                    var r = window.gigya.utils.DOM.getElementsByClass(g, "gig-comments-dialog-caption")[0]
                      , l = window.gigya.utils.DOM.getElementsByClass(g, "gig-comments-dialog-body")[0];
                    r.innerHTML = e,
                    l.innerHTML = t,
                    r.setAttribute("id", "gig-comments-dialog-caption-" + this.containerID),
                    g.setAttribute("role", "dialog"),
                    g.setAttribute("tabindex", "-1"),
                    g.setAttribute("aria-labelledby", r.id);
                    var m = function() {
                        window.gigya.utils.DOM.removeEventListener(document, "keydown", b),
                        g.parentNode && g.parentNode.removeChild(g),
                        a.activeDialog = void 0
                    }
                      , d = function() {
                        m(),
                        s && s(g)
                    }
                      , c = function() {
                        m(),
                        o && o(g)
                    }
                      , u = window.gigya.utils.DOM.getElementsByClass(g, "gig-comments-dialog-close")[0];
                    u && window.gigya.utils.DOM.addButtonSubmitListener(u, d);
                    var p = window.gigya.utils.DOM.getElementsByClass(g, "gig-comments-dialog-button-ok")[0];
                    p && (window.gigya.utils.DOM.addButtonSubmitListener(p, c),
                    i ? p.innerHTML = i : p.style.display = "none");
                    var h = window.gigya.utils.DOM.getElementsByClass(g, "gig-comments-dialog-button-cancel")[0];
                    h && (window.gigya.utils.DOM.addButtonSubmitListener(h, d),
                    n ? h.innerHTML = n : h.style.display = "none");
                    var b = function(e) {
                        27 == (e.which || e.keyCode) && d()
                    };
                    window.gigya.utils.DOM.addEventListener(document, "keydown", b),
                    window.gigya.utils.DOM.appendToBody(g);
                    var x = window.gigya.utils.viewport.getInnerSize()
                      , f = x.w
                      , v = x.h;
                    return g.style.top = Math.max(0, Math.floor((v - g.offsetHeight) / 2)) + "px",
                    g.style.left = Math.max(0, Math.floor((f - g.offsetWidth) / 2)) + "px",
                    this.activeDialog = {
                        el: g,
                        okHandler: c,
                        cancelHandler: d
                    },
                    g.focus(),
                    g
                }
                ,
                e.prototype.setStreamInfoIfNeeded = function(e, t, i) {
                    var o = this
                      , n = this.params.streamTitle;
                    n || (n = document.title),
                    n && "" != n || (n = "Site");
                    var s = this.params.streamURL;
                    if (s || (s = document.location.href),
                    this.streamInfo.streamURL && (!this.params.streamInfoSig || n == this.streamInfo.streamTitle && s == this.streamInfo.streamURL))
                        return i && i(),
                        !0;
                    window.gigya.comments.setStreamInfo(this.params, {
                        streamTitle: n,
                        streamURL: s,
                        callback: function() {
                            o.streamInfo.streamTitle = n,
                            o.streamInfo.streamURL = s,
                            t && (document.location.href = t),
                            i && i()
                        }
                    }),
                    e && l.Events.cancelEvent(e)
                }
                ,
                e.prototype.buildMediaItemElement = function(e, t, i, o) {
                    var n = this
                      , s = document.createElement("div");
                    e.appendChild(s),
                    e.style.height = "",
                    s.innerHTML = window.gigya.utils.templates.fill(this.templates.mediaItem, {
                        displayUrl: t.url,
                        url: t.url,
                        caption: t.title ? t.title : t.description ? t.description : "",
                        providerIcon: l.Images.getPhotoFullName("mediaProviders/" + t.provider.toLowerCase(), this.pixelRatio)
                    });
                    var a = window.gigya.utils.DOM.getElementsByClass(s, "gig-media-thumbnail")[0]
                      , g = window.gigya.utils.DOM.getElementsByClass(s, "gig-media-caption")[0]
                      , r = document.createElement("img");
                    window.gigya.utils.DOM.addClassToElement(r, "gig-media-thumbnail-image");
                    var m, d = a.offsetWidth, c = .75 * d - g.offsetHeight, u = t.thumbnailHeight, p = t.thumbnailWidth;
                    ("image" == t.type.toLowerCase() && t.thumbnailWidth < .7 * d ? (u = t.height,
                    p = t.width,
                    r.src = window.gigya.global.getPhotoURL(t.photoUrl)) : r.src = window.gigya.global.getPhotoURL(t.thumbnailUrl),
                    u > c) && (u *= m = c / u,
                    p *= m);
                    p > d && (u *= m = d / p,
                    p *= m);
                    u < c && (c = u);
                    var h = i ? (d - p) / 2 : 0;
                    r.style.width = p + "px",
                    r.style.height = u + "px",
                    r.style.marginRight = h + "px",
                    r.style.marginLeft = h + "px",
                    a.style.height = c + "px";
                    var b = window.gigya.utils.DOM.getElementsByClass(s, "gig-media-overlay")[0];
                    if (b && (b.style.top = -c + "px"),
                    "rich" == t.type.toLowerCase() || "video" == t.type.toLowerCase()) {
                        var x = window.gigya.utils.DOM.getElementsByClass(s, "gig-media-play")[0];
                        x && window.gigya.utils.DOM.addEventListener(r, "load", function() {
                            x.style.display = "block";
                            var e = (u - x.offsetHeight) / 2
                              , i = h + (p - x.offsetWidth) / 2;
                            n.isRtl ? x.style.right = i + "px" : x.style.left = i + "px",
                            x.style.top = e + "px",
                            window.gigya.utils.DOM.addButtonSubmitListener(x, function() {
                                n.playMediaItem(t)
                            })
                        })
                    } else
                        r.style.cursor = "pointer",
                        window.gigya.utils.DOM.addButtonSubmitListener(r, function() {
                            window.open(t.url)
                        });
                    var f = window.gigya.utils.DOM.getElementsByClass(s, "gig-media-cancel")[0];
                    return f && (i && o ? window.gigya.utils.DOM.addButtonSubmitListener(f, o) : f.style.display = "none"),
                    a.appendChild(r),
                    s
                }
                ,
                e.prototype.playMediaItem = function(e) {
                    if (this.isMobileUI)
                        window.open(e.url);
                    else {
                        var t = document.body.style.overflow
                          , i = document.createElement("div");
                        i.className = "gig-comments-mediaplayer-dimmer",
                        i.style.zIndex = window.gigya.utils.DOM.getNextZIndex() + "",
                        window.gigya.utils.DOM.appendToBody(i),
                        window.gigya.pluginUtils.animation.fadeIn(i, .8),
                        document.body.style.overflow = "hidden";
                        var o = document.createElement("div");
                        o.className = "gig-comments-mediaplayer",
                        o.innerHTML = window.gigya.utils.templates.fill(this.templates.mediaItemPlayer, {
                            playerHeight: e.height,
                            playerHTML: e.html,
                            caption: e.title ? e.title : "",
                            providerIcon: l.Images.getPhotoFullName("mediaProviders/" + e.provider.toLowerCase(), this.pixelRatio)
                        }),
                        o.style.zIndex = window.gigya.utils.DOM.getNextZIndex() + "",
                        window.gigya.utils.DOM.appendToBody(o),
                        window.gigya.pluginUtils.animation.fadeIn(o),
                        o.style.marginLeft = -o.offsetWidth / 2 + "px",
                        o.style.marginTop = -o.offsetHeight / 2 + "px";
                        var n = function() {
                            document.body.style.overflow = t,
                            i.parentElement.removeChild(i),
                            o.parentElement.removeChild(o)
                        }
                          , s = window.gigya.utils.DOM.getElementsByClass(o, "gig-media-cancel")[0];
                        window.gigya.utils.DOM.addButtonSubmitListener(i, n),
                        window.gigya.utils.DOM.addButtonSubmitListener(s, n)
                    }
                }
                ,
                e.prototype.removeUserBadges = function(e) {
                    if (e)
                        for (var t = e.getElementsByClassName("gig-comment-userBadge"); t.length > 0; )
                            t[0].parentNode.removeChild(t[0])
                }
                ,
                e.prototype.buildHighlightsCss = function() {
                    var e = "";
                    if (this.settings && this.settings.highlightGroupsSettings) {
                        for (var t = 0; t < this.settings.highlightGroupsSettings.length; t++) {
                            var i = this.settings.highlightGroupsSettings[t];
                            if (!i.cssRule) {
                                i.className = "gig-badge-" + i.name.toLowerCase(),
                                i.commentClassName = "gig-comment-badge-" + i.name.toLowerCase(),
                                i.userClassName = "gig-comment-username-badge-" + i.name.toLowerCase();
                                var o = "";
                                if (i.badgeImageURL)
                                    o = "background-image:url(" + ("https://cdns.gigya.com/gs/i/comments2/editors_pick.png" == i.badgeImageURL ? l.Images.getPhotoFullName("editors_pick") : window.gigya.global.getPhotoURL(i.badgeImageURL)) + "); background-size: 17px 17px;";
                                i.cssRule = ".gig-comments-container *." + i.className + " {color:" + i.badgeColor + ";" + o + "} .gig-comments-container *." + i.className + ".gig-badge-border {border-color:" + i.badgeColor + ";} ",
                                i.commentBackgroundColor && (i.cssRule += ".gig-comments-container *." + i.commentClassName + " {background-color:" + i.commentBackgroundColor + ";} "),
                                i.commenterNameColor && (i.cssRule += ".gig-comments-container *." + i.userClassName + " {color:" + i.commenterNameColor + ";} "),
                                e += i.cssRule + " "
                            }
                        }
                        window.gigya._.plugins.utils.css.addCss(e, this.params.cssPrefix)
                    }
                }
                ,
                e.prototype.getHighlightingBadges = function(e, t) {
                    if (e) {
                        for (var i = [], o = 0; o < this.settings.highlightGroupsSettings.length; o++) {
                            var n = this.settings.highlightGroupsSettings[o];
                            !n.enabled || -1 == e.indexOf(n.name) || t && -1 == t.indexOf(n.type) || i.push(n)
                        }
                        return i
                    }
                }
                ,
                e
            }();
            t.CommentsPlugin = m
        },
        67: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    this.ID = e,
                    this.parentID = t,
                    this.replies = []
                }
                return e.fromRawDataArray = function(t) {
                    if (!t)
                        return null;
                    for (var i = [], o = 0; o < t.length; o++) {
                        var n = t[o];
                        i.push(e.fromRawData(n))
                    }
                    return i
                }
                ,
                e.fromRawData = function(t) {
                    return t.replies && t.replies.length > 0 && (t.replies = e.fromRawDataArray(t.replies)),
                    window.gigya.utils.object.merge([new e, t])
                }
                ,
                e.prototype.isReply = function() {
                    return null != this.parentID
                }
                ,
                e
            }();
            t.CommentData = i
        },
        92: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(67)
              , n = i(157)
              , s = i(36)
              , a = i(29)
              , g = i(93)
              , r = function() {
                function e(e, t, i, o) {
                    this.plugin = e,
                    this.container = t,
                    this.onClose = o,
                    this.lastSelection = {
                        start: -1
                    },
                    this.data = window.gigya.utils.object.clone(i, !0, !1),
                    this.data.ratings || (this.data.ratings = {})
                }
                return e.prototype.getText = function(e, t, i) {
                    return this.plugin.getText(e, t, i)
                }
                ,
                e.prototype.getElement = function(e) {
                    var t = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-composebox-" + e);
                    return t && t.length > 0 ? t[0] : null
                }
                ,
                e.prototype.buildUIElementsObj = function() {
                    this.uiElements = {
                        header: this.getElement("header"),
                        title: this.getElement("title"),
                        photo: this.getElement("photo"),
                        textArea: this.getElement("textarea"),
                        editor: this.getElement("editor"),
                        summary: this.getElement("summary"),
                        mediaItem: this.getElement("mediaItem"),
                        summaryInput: this.getElement("summary-input"),
                        name: this.getElement("name"),
                        sidebar: this.getElement("sidebar"),
                        sidebarButtons: {
                            richText: this.getElement("sidebar-font"),
                            addMediaItem: this.getElement("sidebar-media"),
                            tagUser: this.getElement("sidebar-tag")
                        },
                        submitButton: this.getElement("post"),
                        closeButton: this.getElement("close"),
                        cancelButton: this.getElement("cancel"),
                        loginBar: this.getElement("login"),
                        socialLoginButton: this.getElement("social-login"),
                        siteLoginButton: this.getElement("site-login"),
                        guestLoginButton: this.getElement("guest-login"),
                        logoutLink: this.getElement("logout"),
                        followLink: this.getElement("follow"),
                        shareSection: this.getElement("share"),
                        shareProviders: this.getElement("share-providers"),
                        postAnonymouslySection: this.getElement("postAnonymously"),
                        postAnonymouslyCheckbox: this.getElement("anon-checkbox"),
                        ratings: this.getElement("ratings"),
                        ratingsOverall: this.getElement("rating-_overall"),
                        errorMessage: this.getElement("error")
                    }
                }
                ,
                e.prototype.getLoginProvider = function() {
                    var e = this.plugin.user.loginProvider;
                    if (!e)
                        for (var t in this.plugin.user.identities) {
                            e = t;
                            break
                        }
                    return e
                }
                ,
                e.prototype.isLoginDropdownEnabled = function() {
                    return !this.data.isReply() && (1 == this.plugin.params.showLoginBar || this.plugin.settings.useSiteLogin)
                }
                ,
                e.prototype.hideElement = function(e, t) {
                    e && (t ? e.parentElement.removeChild(e) : e.style.display = "none")
                }
                ,
                e.prototype.open = function() {
                    this.render(),
                    this.focus()
                }
                ,
                e.prototype.render = function() {
                    if (this.container) {
                        var e = this.plugin.textMode == s.TextMode.COMMENTS ? this.getText("write_a_comment") : this.getText("write_a_review");
                        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.composebox, {
                            write_a_comment: e,
                            logout: this.getText("logout"),
                            post: this.getSubmitText(),
                            cancel: this.getText("cancel"),
                            postAnonymously: this.getText("post_anonymously"),
                            share: this.getText("share_colon"),
                            login: this.getText("login"),
                            or: this.getText("or"),
                            guest: this.getText("guest"),
                            summary: this.plugin.textMode == s.TextMode.COMMENTS ? this.getText("summary") : this.getText("review_summary")
                        }),
                        this.getElement("editor").innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.editor, {
                            write_a_comment: e,
                            fontAlt: this.getText("rich_text_formatting"),
                            mediaAlt: this.getText("embed_a_media_item"),
                            tagAlt: this.getText("tag_commenters")
                        }),
                        this.buildUIElementsObj();
                        var t = this.getGuestUser();
                        if (!this.plugin.user.isConnected && t.isGuest && this.plugin.settings.allowGuest && (this.plugin.user = t),
                        this.uiElements.editor && "disabled" == this.plugin.settings.enableCommentBody && (this.uiElements.editor.style.display = "none"),
                        this.uiElements.summary) {
                            if (this.uiElements.summaryInput) {
                                var i = this.uiElements.summaryInput.getAttribute("data-placeholder");
                                window.gigya.global.setPlaceholder(this.uiElements.summaryInput, i, "gig-comments-placeholder")
                            }
                            this.uiElements.summary.style.display = this.data.isReply() || "disabled" == this.plugin.settings.enableCommentTitles ? "none" : ""
                        }
                        this.renderSidebar(),
                        this.renderRatings(),
                        this.afterRender(),
                        this.activateOnRender(),
                        this.bindEvents()
                    } else
                        this.container.style.display = "none"
                }
                ,
                e.prototype.activateOnRender = function() {
                    var e = this;
                    (this.data.isReply() || this.plugin.textMode == s.TextMode.REVIEWS) && (window.gigya.utils.DOM.addClassToElement(this.container, "gig-comment-replybox-open"),
                    this.plugin.isMobileUI ? this.activate() : window.setTimeout(function() {
                        return e.activate()
                    }, 10))
                }
                ,
                e.prototype.renderSidebar = function() {
                    if (this.uiElements.sidebar)
                        if (this.uiElements.editor && "disabled" != this.plugin.settings.enableCommentBody && !this.plugin.isMobileUI) {
                            if (this.uiElements.sidebarButtons.richText) {
                                var e = this.uiElements.sidebarButtons.richText;
                                this.plugin.settings.enableRichTextEditing || (e.parentElement.removeChild(e),
                                this.uiElements.sidebarButtons.richText = null)
                            }
                            if (this.uiElements.sidebarButtons.addMediaItem) {
                                e = this.uiElements.sidebarButtons.addMediaItem;
                                this.plugin.settings.enableMediaItems || (e.parentElement.removeChild(e),
                                this.uiElements.sidebarButtons.addMediaItem = null)
                            }
                            if (this.uiElements.sidebarButtons.tagUser) {
                                e = this.uiElements.sidebarButtons.tagUser;
                                this.plugin.settings.enableUserTagging || (e.parentElement.removeChild(e),
                                this.uiElements.sidebarButtons.tagUser = null)
                            }
                            (this.uiElements.sidebarButtons.richText || this.uiElements.sidebarButtons.addMediaItem || this.uiElements.sidebarButtons.tagUser) && window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, "gig-composebox-editor-with-sidebar")
                        } else
                            this.uiElements.sidebar.style.display = "none"
                }
                ,
                e.prototype.activate = function() {
                    window.gigya.utils.DOM.addClassToElement(this.container, "gig-composebox-open")
                }
                ,
                e.prototype.close = function(e) {
                    this.container && (this.container.innerHTML = "",
                    window.gigya.utils.DOM.removeClassFromElement(this.container, "gig-comment-replybox-open")),
                    this.onClose && this.onClose(e)
                }
                ,
                e.prototype.focus = function() {
                    this.uiElements.textArea && this.uiElements.textArea.focus()
                }
                ,
                e.prototype.updateUI = function() {
                    this.uiElements && (this.uiElements.name && (this.uiElements.name.innerHTML = this.plugin.getUsername()),
                    this.updateUserBadges(),
                    this.updateLoginLogoutElements(),
                    this.updateProfilePhoto(),
                    this.updateTitle(),
                    this.updateFollow(),
                    this.updateRatings())
                }
                ,
                e.prototype.updateUserBadges = function() {
                    if (this.uiElements.header && (window.gigya.utils.DOM.removeClassFromElement(this.uiElements.header.parentElement, "gig-composebox-withBadges"),
                    this.plugin.removeUserBadges(this.uiElements.header),
                    this.plugin.user.isLoggedIn && this.plugin.userHighlightingGroups)) {
                        var e = this.uiElements.title;
                        this.plugin.createUserHighlightingBadges(e, this.plugin.userHighlightingGroups) && window.gigya.utils.DOM.addClassToElement(this.uiElements.header.parentElement, "gig-composebox-withBadges")
                    }
                }
                ,
                e.prototype.updateTitle = function() {
                    if (this.uiElements.title) {
                        var e = this.getTitle();
                        e ? (this.uiElements.title.style.display = "",
                        this.uiElements.title.innerHTML = e) : (this.uiElements.title.style.display = "none",
                        this.uiElements.title.innerHTML = e)
                    }
                }
                ,
                e.prototype.updateProfilePhoto = function() {
                    var e = this;
                    if (this.uiElements.photo) {
                        var t = this.getLoginProvider()
                          , i = window.gigya.utils.templates.fill(this.plugin.templates.photo, {
                            photoURL: window.gigya.global.getPhotoURL(this.plugin.user.thumbnailURL || this.plugin.user.photoURL, a.Images.getPhotoFullName("Avatar_empty", this.plugin.pixelRatio)),
                            providerImage: t && "site" != t && "customopenid" != t.toLowerCase() ? this.plugin.templates.providerImage : "",
                            providerImageUrl: g.imgBase + "providers/" + this.getLoginProvider() + "User_x1.png"
                        });
                        this.uiElements.photo.style.visibility = "hidden",
                        this.uiElements.photo.innerHTML = i;
                        var o = this.uiElements.photo.getElementsByTagName("img");
                        if (o && o.length > 0) {
                            var n = o[0];
                            window.gigya.utils.DOM.addEventListener(n, "load", function() {
                                window.gigya.global.scaleImageToContainer(o[0], !0, function() {
                                    e.uiElements.photo.style.visibility = ""
                                })
                            })
                        }
                    }
                }
                ,
                e.prototype.updateLoginLogoutElements = function() {
                    this.uiElements.logoutLink && (this.plugin.user.isConnected || this.plugin.user.isGuest && !this.isGuestLocked() ? this.uiElements.logoutLink.style.display = "" : this.uiElements.logoutLink.style.display = "none")
                }
                ,
                e.prototype.bindEvents = function() {
                    var t = this;
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.submitButton, function() {
                        t.onSubmitClicked()
                    }),
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.cancelButton, function() {
                        t.close()
                    }),
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.closeButton, function() {
                        t.close()
                    }),
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.socialLoginButton, function() {
                        t.onLoginClick(t.uiElements.socialLoginButton)
                    }),
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.siteLoginButton, function() {
                        t.onSiteLoginClick()
                    }),
                    window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.guestLoginButton, function() {
                        t.onGuestClick(t.uiElements.guestLoginButton)
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.richText, "mousedown", function(e) {
                        t.showFontBox(t.uiElements.sidebarButtons.richText),
                        window.gigya.utils.DOM.cancelEvent(e)
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.addMediaItem, "mousedown", function(e) {
                        t.showMediaBox(t.uiElements.sidebarButtons.addMediaItem),
                        window.gigya.utils.DOM.cancelEvent(e)
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.sidebarButtons.tagUser, "mousedown", function(e) {
                        t.onSidebarTagClicked(e),
                        window.gigya.utils.DOM.cancelEvent(e)
                    }),
                    this.uiElements.textArea && (window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, "keydown", function(i) {
                        -1 == window.gigya.utils.array.indexOf(e.allowedOnLimitKeys, i.keyCode) && t.uiElements.textArea.textContent.length >= t.plugin.settings.maxCommentLength && window.gigya.utils.DOM.cancelEvent(i)
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, "focus", function() {
                        t.activate()
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, "keyup", function(e) {
                        (86 == e.keyCode && (e.ctrlKey || e.metaKey) || 45 == e.keyCode && e.shiftKey) && setTimeout(function() {
                            t.handleUpdatedText()
                        }, 1)
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, "blur", function() {
                        t.stopPolling(),
                        "<br>" == t.uiElements.textArea.innerHTML && (t.uiElements.textArea.innerHTML = "")
                    }),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.textArea, "focus", function() {
                        t.startPolling()
                    })),
                    this.uiElements.logoutLink && window.gigya.utils.DOM.addButtonSubmitListener(this.uiElements.logoutLink, function() {
                        t.plugin.user.isGuest ? t.logoutGuest() : window.gigya.socialize.logout(t.plugin.params)
                    });
                    var i = this.uiElements.followLink;
                    if (i) {
                        window.gigya.utils.DOM.addButtonSubmitListener(i, function() {
                            t.onFollowClick(i)
                        }),
                        window.gigya.utils.DOM.addEventListener(i, "mouseover", function() {
                            t.plugin.isUserFollowing() && (i.innerHTML = t.getText("unfollow"))
                        });
                        var o = function() {
                            t.updateFollow()
                        };
                        window.gigya.utils.DOM.addEventListener(i, "mouseout", o),
                        o()
                    }
                    this.uiElements.summaryInput && window.gigya.utils.DOM.addEventListener(this.uiElements.summaryInput, "blur", function() {
                        t.pendingValidation && t.validate()
                    })
                }
                ,
                e.prototype.onSubmitClicked = function() {
                    this.validate() && (this.updateDataFromUI(),
                    this.submit(),
                    this.plugin.mainComposeBox.updateUI())
                }
                ,
                e.prototype.updateDataFromUI = function() {
                    var e = this.uiElements.summaryInput;
                    null == this.data.commentText && (this.data.commentText = "");
                    var t = [];
                    this.uiElements.textArea && (this.data.commentText = a.UserTagging.replaceUserTagsWithSpans(this.uiElements.textArea, t)),
                    e ? e.value && e.placeholderCleared ? this.data.commentTitle = e.value : this.data.commentTitle = "" : this.data.commentTitle = null,
                    this.data.taggedUsers = t,
                    this.data.mediaItems = this.mediaItem ? [this.mediaItem] : [],
                    this.data.highlightGroups = this.plugin.userHighlightingGroups,
                    this.data.status = 1 === this.plugin.settings.moderationState ? "pending" : ""
                }
                ,
                e.prototype.onStarClick = function(e) {
                    var t = e.target || e.srcElement
                      , i = t.parentNode.getAttribute("data-dimension")
                      , o = t.getAttribute("data-value");
                    this.data.ratings || (this.data.ratings = {}),
                    this.data.ratings[i] = parseInt(o),
                    this.pendingValidation && this.validate(),
                    this.onStarMouseOut(e)
                }
                ,
                e.prototype.onStarMouseOver = function(e) {
                    var t = e.target || e.srcElement
                      , i = t.parentNode
                      , o = t.getAttribute("data-value");
                    i = t.parentNode;
                    this.updateStarsToValue(i, parseInt(o))
                }
                ,
                e.prototype.onStarMouseOut = function(e) {
                    var t = (e.target || e.srcElement).parentNode
                      , i = t.getAttribute("data-dimension");
                    this.updateStarsToValue(t, this.data.ratings[i])
                }
                ,
                e.prototype.updateStarsToValue = function(e, t) {
                    if (void 0 === t && (t = 0),
                    e)
                        for (var i = e.getElementsByClassName("gig-composebox-rating-star"), o = 0; o < i.length; o++) {
                            var n = i[o];
                            parseInt(n.getAttribute("data-value")) <= t ? window.gigya.utils.DOM.addClassToElement(n, "gig-composebox-rating-star-full") : window.gigya.utils.DOM.removeClassFromElement(n, "gig-composebox-rating-star-full")
                        }
                }
                ,
                e.prototype.onLoginClick = function(e, t, i) {
                    var o = this;
                    window.gigya.utils.DOM.addClassToElement(e, "gig-composebox-social-login-down");
                    var n = document.createElement("div");
                    n.className = "gig-comments-container gig-comments-loginbox" + (this.plugin.autoPixelRatio ? " gig-comments-hires-icons" : "");
                    var s, g = this.plugin.params.enabledProviders || "*", r = this.plugin.params.disabledProviders || "", l = window.gigya.socialize.hideProvidersByName(window.gigya.socialize.getProvidersByName(g), r), m = function(t) {
                        o.onLoginProviderClick(t, h, e, i)
                    }, d = function(e, t) {
                        var i = document.createElement("div");
                        return i.className = "gig-loginbox-provider",
                        i.setAttribute("data-provider", e.name),
                        i.innerHTML = e.displayName,
                        i.setAttribute("aria-label", e.displayName),
                        t && (i.style.backgroundImage = 'url("' + t + '")'),
                        window.gigya.utils.DOM.addButtonSubmitListener(i, m),
                        n.appendChild(i),
                        i
                    };
                    l && ((p = document.createElement("div")).className = "gig-signinbox-provider",
                    p.innerHTML = this.getText("sign_in_with"),
                    n.appendChild(p));
                    for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        if (u) {
                            var p = d(u, window.gigya._.getCdnResource("/gs/i/HTMLLogin/" + u.name + "_15.png"));
                            c > 1 && (p.style.display = "none",
                            s = !0)
                        }
                    }
                    t && d({
                        name: "guest",
                        displayName: this.getText("as_guest")
                    }, a.Images.getPhotoFullName("login_as_guest", this.plugin.pixelRatio)),
                    s && d({
                        name: "more",
                        displayName: this.getText("show_more")
                    });
                    var h = window.gigya.pluginUtils.DOM.addPopoverNearElement(e, n, "bottom", 0, this.plugin.isRtl, !1, "slideDown", function(t, i) {
                        i && (t.target == e || window.gigya.utils.DOM.isChildOf(t.target, e)) && a.Events.cancelEvent(t)
                    })
                      , b = n.querySelector("div.gig-loginbox-provider");
                    b && b.focus()
                }
                ,
                e.prototype.onLoginProviderClick = function(e, t, i, o) {
                    var n = e.target || e.srcElement
                      , s = n.getAttribute("data-provider");
                    if ("more" == s) {
                        for (var a = window.gigya.utils.DOM.getElementsByClass(t, "gig-loginbox-provider"), g = 0; g < a.length; g++)
                            a[g].style.display = "";
                        n.style.display = "none",
                        window.gigya.pluginUtils.DOM.placePopoverNearElement(i, t, "bottom", 0, this.plugin.isRtl, !1);
                        var r = t.querySelectorAll("div.gig-loginbox-provider")[2];
                        r && r.focus()
                    } else
                        "guest" == s ? (this.onGuestClick(i, o),
                        t.parentNode.removeChild(t)) : (window.gigya.socialize.addConnection(this.plugin.params, {
                            provider: s,
                            callback: o
                        }),
                        t.parentNode.removeChild(t))
                }
                ,
                e.prototype.onGuestClick = function(e, t) {
                    var i = this;
                    window.gigya.utils.DOM.addClassToElement(e, "gig-composebox-guest-login-down");
                    var o = window.gigya.utils.DOM.getElementPosition(e)
                      , n = document.createElement("div");
                    n.style.position = "absolute",
                    null != n.style.zIndex && (n.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString()),
                    n.className = "gig-comments-container gig-comments-guestbox",
                    window.gigya.utils.DOM.appendToBody(n);
                    var s = window.gigya.utils.viewport.getInnerSize()
                      , g = Math.max(0, window.gigya.localInfo.quirksMode ? o.left - 2 : o.left);
                    g + n.offsetWidth > s.w - 40 && (g = s.w - n.offsetWidth - 40),
                    n.style.left = g + "px",
                    n.style.top = o.top + e.offsetHeight - 2 + (window.gigya.localInfo.quirksMode ? -2 : 0) + "px",
                    n.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.guestbox, {
                        nickname: this.getText("nickname"),
                        email: window.gigya.utils.sanitize.sanitizeAttribute(this.plugin.settings.isGuestEmailRequired ? this.getText("email") : this.getText("email_optional")),
                        ok: this.getText("ok"),
                        email_not_displayed_publicly: this.getText("email_not_displayed_publicly")
                    });
                    var r = window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-nickname")[0]
                      , l = window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-email")[0];
                    this.plugin.settings.requireGuestName ? r && window.gigya.global.setPlaceholder(r, r.getAttribute("data-placeholder"), "gig-comments-placeholder") : r.style.display = "none",
                    l && window.gigya.global.setPlaceholder(l, l.getAttribute("data-placeholder"), "gig-comments-placeholder"),
                    window.gigya.utils.DOM.appendToBody(n),
                    this.plugin.isMobileUI || window.gigya.pluginUtils.animation.slideDown(n);
                    var m = function(e) {
                        var t = e.keyCode;
                        27 == t ? (n.parentNode.removeChild(n),
                        window.gigya.utils.DOM.removeEventListener(d, "click", u)) : 13 == t && u()
                    };
                    window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(n, function(t, i) {
                        i && (t.target == e || window.gigya.utils.DOM.isChildOf(t.target, e)) && a.Events.cancelEvent(t)
                    }, null);
                    var d = window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-ok")[0]
                      , c = (r = window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-nickname")[0],
                    l = window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-email")[0],
                    window.gigya.utils.DOM.getElementsByClass(n, "gig-guestbox-error")[0]);
                    if (r && l && d) {
                        var u = function() {
                            var e = ""
                              , o = l.placeholderCleared ? l.value : ""
                              , s = r.placeholderCleared ? r.value : ""
                              , a = "" != o.replace(/ /g, "")
                              , g = s.replace(/ /g, "").length >= 3;
                            i.plugin.settings.requireGuestName && !g ? e = i.getText("nickname_should_be_at_least_3_characters") : (i.plugin.settings.isGuestEmailRequired && !a || a && !window.gigya.pluginUtils.validation.isEmailValid(o)) && (e = i.getText("please_provide_a_valid_email_address")),
                            c.innerHTML = e,
                            e || (i.loginAsGuest(s, o),
                            n.parentNode.removeChild(n),
                            window.gigya.utils.DOM.removeEventListener(document, "keydown", m),
                            window.gigya.utils.DOM.removeEventListener(d, "click", u),
                            t && t())
                        };
                        window.gigya.utils.DOM.addEventListener(d, "click", u),
                        window.gigya.utils.DOM.addEventListener(document, "keydown", m)
                    }
                }
                ,
                e.prototype.renderRatings = function() {
                    if (this.uiElements.ratings)
                        if (this.data.isReply() || "disabled" == this.plugin.settings.enableRatings)
                            this.uiElements.ratings.style.display = "none";
                        else {
                            var e = [{
                                id: "_overall",
                                name: this.getText("overall_rating")
                            }];
                            this.plugin.settings.ratingDims && (e = e.concat(this.plugin.settings.ratingDims)),
                            this.uiElements.ratings.style.display = "",
                            this.uiElements.ratings.innerHTML = "";
                            for (var t = 0, i = 0; i < e.length; i++) {
                                var o = e[i]
                                  , n = this.getRatingElement(o);
                                "_overall" === o.id && (this.uiElements.ratingsOverall = n),
                                this.uiElements.ratings.appendChild(n);
                                var s = window.gigya.utils.DOM.getElementsByClass(n, "gig-composebox-rating-title")[0];
                                s && (t = Math.max(s.offsetWidth, t))
                            }
                            t > 0 && window.gigya._.plugins.utils.css.addCss("#" + this.plugin.containerID + " *.gig-composebox-rating-title { width:" + (t + 1) + "px; }", this.plugin.params.cssPrefix)
                        }
                }
                ,
                e.prototype.updateRatings = function() {
                    if (this.uiElements.ratings) {
                        var e = [{
                            id: "_overall",
                            name: this.getText("overall_rating")
                        }];
                        this.plugin.settings.ratingDims && (e = e.concat(this.plugin.settings.ratingDims));
                        for (var t = 0; t < e.length; t++) {
                            var i = e[t]
                              , o = window.gigya.utils.DOM.getElementsByAttribute(this.uiElements.ratings, "*", "data-dimension", i.id)[0];
                            this.updateStarsToValue(o, this.data.ratings[i.id])
                        }
                    }
                }
                ,
                e.prototype.getRatingElement = function(e) {
                    var t = this
                      , i = document.createElement("div");
                    i.className = "gig-composebox-rating gig-composebox-rating-" + e.id,
                    i.innerHTML = this.plugin.templates.composeboxRating;
                    var o = window.gigya.utils.DOM.getElementsByClass(i, "gig-composebox-rating-title")[0];
                    o && (o.innerHTML = e.name + ":");
                    var n = window.gigya.utils.DOM.getElementsByClass(i, "gig-composebox-rating-value")[0];
                    if (n) {
                        n.setAttribute("data-dimension", e.id);
                        for (var s = 1; s < 6; s++) {
                            var a = document.createElement("div");
                            a.setAttribute("data-value", s.toString()),
                            window.gigya.utils.DOM.addClassToElement(a, "gig-composebox-rating-star"),
                            window.gigya.utils.DOM.addEventListener(a, "mouseover", function(e) {
                                return t.onStarMouseOver(e)
                            }),
                            window.gigya.utils.DOM.addEventListener(a, "mouseout", function(e) {
                                return t.onStarMouseOut(e)
                            }),
                            window.gigya.utils.DOM.addButtonSubmitListener(a, function(e) {
                                return t.onStarClick(e)
                            }),
                            n.appendChild(a)
                        }
                    }
                    return i
                }
                ,
                e.prototype.loginAsGuest = function(e, t) {
                    window.gigya.utils.cookie.set("_gig_comments_is_guest", "1"),
                    e && window.gigya.utils.cookie.set("_gig_comments_nickname", e),
                    t && window.gigya.utils.cookie.set("_gig_comments_email", t),
                    this.plugin.setUser(this.getGuestUser())
                }
                ,
                e.prototype.logoutGuest = function() {
                    window.gigya.utils.cookie.remove("_gig_comments_is_guest"),
                    window.gigya.utils.cookie.remove("_gig_comments_email"),
                    window.gigya.utils.cookie.remove("_gig_comments_nickname"),
                    this.plugin.setUser({})
                }
                ,
                e.prototype.onSiteLoginClick = function(e) {
                    e || (e = function() {}
                    ),
                    window.gigya.events.dispatchForWidget({
                        eventName: "siteLoginClicked",
                        callback: e
                    }, this.plugin.params)
                }
                ,
                e.prototype.getGuestUser = function() {
                    var e = window.gigya.utils.cookie.get("_gig_comments_is_guest");
                    return {
                        UID: "",
                        nickname: window.gigya.utils.cookie.get("_gig_comments_nickname") || "",
                        isGuest: "1" == e,
                        email: window.gigya.utils.cookie.get("_gig_comments_email") || ""
                    }
                }
                ,
                e.prototype.lockGuest = function() {
                    window.gigya.utils.cookie.set("_gig_comments_locked", "1")
                }
                ,
                e.prototype.isGuestLocked = function() {
                    return window.gigya.utils.cookie.get("_gig_comments_locked")
                }
                ,
                e.prototype.startPolling = function() {
                    var e = this;
                    this.pollingInterval = setInterval(function() {
                        e.handleUpdatedText()
                    }, 100)
                }
                ,
                e.prototype.stopPolling = function() {
                    void 0 !== this.pollingInterval && (clearInterval(this.pollingInterval),
                    delete this.pollingInterval)
                }
                ,
                e.prototype.validate = function(e) {
                    var t, i = "gig-composebox-field-error", o = this.uiElements.textArea ? this.uiElements.textArea.innerHTML : "", n = !0;
                    return this.uiElements.editor && (window.gigya.utils.DOM.removeClassFromElement(this.uiElements.editor, i),
                    this.uiElements.textArea.removeAttribute("aria-invalid")),
                    this.uiElements.summary && window.gigya.utils.DOM.removeClassFromElement(this.uiElements.summary, i),
                    this.uiElements.ratingsOverall && window.gigya.utils.DOM.removeClassFromElement(this.uiElements.ratingsOverall, i),
                    "mandatory" != this.plugin.settings.enableCommentTitles.split("_")[1] || !this.uiElements.summaryInput || this.data.isReply() || "" != this.uiElements.summaryInput.value.replace(/ /g, "").replace(/\n/g, "").replace(/\r/g, "") && this.uiElements.summaryInput.placeholderCleared || (this.uiElements.summary && window.gigya.utils.DOM.addClassToElement(this.uiElements.summary, i),
                    t || (t = this.uiElements.summaryInput),
                    n = !1),
                    !this.data.isReply() && "mandatory" != this.plugin.settings.enableCommentBody.split("_")[1] || "" != o.replace(/ /g, "").replace(/\n/g, "").replace(/\r/g, "") || (this.uiElements.editor && (window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, i),
                    this.uiElements.textArea.setAttribute("aria-invalid", "true")),
                    t || (t = this.uiElements.textArea),
                    n = !1),
                    !this.uiElements.ratingsOverall || "mandatory" != this.plugin.settings.enableRatings.split("_")[1] || this.data.ratings && this.data.ratings._overall || (window.gigya.utils.DOM.addClassToElement(this.uiElements.ratingsOverall, i),
                    n = !1),
                    this.uiElements.errorMessage && (n ? (this.pendingValidation = !1,
                    this.uiElements.errorMessage.innerHTML = "",
                    this.uiElements.errorMessage.style.display = "none") : (this.pendingValidation = !0,
                    this.uiElements.errorMessage.innerHTML = "ratingsOnly" == this.plugin.settings.mode ? this.getText("please_select_your_rating") : this.getText("please_fill_required_fields"),
                    this.uiElements.errorMessage.style.display = "block",
                    t && e && t.focus())),
                    n
                }
                ,
                e.prototype.clear = function() {
                    this.uiElements.textArea && (this.uiElements.textArea.innerHTML = "",
                    this.uiElements.textArea.style.minHeight = ""),
                    this.uiElements.summaryInput && (this.uiElements.summaryInput.value = "",
                    this.uiElements.summaryInput.refreshPlaceholder()),
                    this.mediaItem && (this.uiElements.mediaItem && (this.uiElements.mediaItem.innerHTML = ""),
                    this.mediaItem = null),
                    this.clearRatings()
                }
                ,
                e.prototype.clearRatings = function() {
                    this.data.ratings = {},
                    this.updateRatings()
                }
                ,
                e.prototype.handleUpdatedText = function() {
                    if (document.activeElement == this.uiElements.textArea) {
                        try {
                            var e = a.Selection.getSelection(this.uiElements.textArea)
                        } catch (e) {
                            this.stopPolling()
                        }
                        var t = this.uiElements.textArea.innerHTML;
                        if (this.lastCommentHTML != t) {
                            var i = this.stripUnallowedTags(t);
                            if (t != (i = this.stripCRLFTags(i))) {
                                i.length,
                                t.length;
                                this.uiElements.textArea.innerHTML = i,
                                a.Selection.restoreSelection(this.uiElements.textArea, e)
                            }
                            this.uiElements.textArea.textContent.length > this.plugin.settings.maxCommentLength && this.truncateTextNodes(this.uiElements.textArea, this.plugin.settings.maxCommentLength),
                            this.lastCommentHTML = this.uiElements.textArea.innerHTML
                        }
                        e && !this.plugin.isMobileUI && (this.updateUserTaggingIfNeeded(e),
                        this.lastSelection = window.gigya.utils.object.clone(e))
                    }
                }
                ,
                e.prototype.getTextNodes = function(e, t) {
                    if (3 === e.nodeType)
                        t.push(e);
                    else if (1 === e.nodeType)
                        for (var i = e.childNodes, o = 0; o < i.length; o++)
                            this.getTextNodes(i[o], t)
                }
                ,
                e.prototype.truncateTextNodes = function(e, t) {
                    var i = [];
                    this.getTextNodes(e, i);
                    for (var o = 0; o < i.length; o++) {
                        var n = i[o];
                        t > n.nodeValue.length ? t -= n.nodeValue.length : 0 == t ? n.nodeValue = "" : (n.nodeValue = n.nodeValue.substring(0, t),
                        t = 0)
                    }
                }
                ,
                e.prototype.stripUnallowedTags = function(t) {
                    if (t) {
                        var i = e.alwaysAllowedTags + (this.plugin.settings.enableRichTextEditing ? "|" + e.richTextAllowedTags : "")
                          , o = new RegExp("<((?!(" + i + ")[ >/])[a-z]+)[^<]*>|</((?!(" + i + ")[ >/])[a-z]+)>","gi");
                        -1 != (t = t.replace(o, "")).indexOf('style="') && (t = t.replace(/style="((.|\n)*?)"/g, ""))
                    }
                    return t
                }
                ,
                e.prototype.stripCRLFTags = function(e) {
                    return e && (e = e.replace(/\r|\n/g, "")),
                    e
                }
                ,
                e.prototype.updateUserTaggingIfNeeded = function(e) {
                    var t = this;
                    if (this.plugin.settings.enableUserTagging && e && e.start != this.lastSelection.start && e.start == e.end) {
                        var i = e.childText.replace(String.fromCharCode(160), " ")
                          , o = i.match(/\S+/g);
                        if (o && o.length >= 0)
                            var s = o[o.length - 1];
                        if (this.userTaggingBox)
                            this.userTaggingBox.processTextChanged(i);
                        else if (!this.userTaggingBox && void 0 !== s && 0 === s.lastIndexOf("@")) {
                            this.userTaggingBox = new n.UserTaggingBox(this,function(e, i) {
                                e && i ? t.insertUserTag(i, a) : delete t.userTaggingBox
                            }
                            ,i);
                            var a = i.lastIndexOf("@")
                        }
                    }
                }
                ,
                e.prototype.insertUserTag = function(e, t) {
                    if (-1 !== t && window.getSelection) {
                        this.uiElements.textArea.focus(),
                        a.Selection.restoreSelection(this.uiElements.textArea, this.lastSelection);
                        var i = window.getSelection();
                        if (i.getRangeAt && i.rangeCount) {
                            var o = i.getRangeAt(0);
                            void 0 !== t && (o.setStart(o.startContainer, t),
                            o.deleteContents());
                            var n = document.createTextNode(String.fromCharCode(160));
                            o.insertNode(n),
                            o.insertNode(e),
                            n = document.createTextNode(String.fromCharCode(160)),
                            o.insertNode(n);
                            var s = document.createRange();
                            s.setStartAfter(n),
                            i.removeAllRanges(),
                            i.addRange(s)
                        }
                    }
                }
                ,
                e.prototype.onFollowClick = function(e) {
                    var t = this;
                    if (this.plugin.isUserFollowing())
                        this.unfollow();
                    else {
                        var i = window.gigya.utils.templates.fill(this.plugin.templates.emailTextboxDialogBody, {
                            text: this.plugin.textMode == s.TextMode.REVIEWS ? this.getText("enter_your_email_to_receive_notifications_when_someone_comments_on_your_reviews_colon") : this.getText("enter_your_email_to_receive_notifications_when_someone_replies_to_your_comments_colon"),
                            buttonText: this.getText("follow"),
                            email: this.plugin.user.email,
                            emailLabel: this.getText("email")
                        })
                          , o = this.plugin.showDialog(this.getText("notifications_settings"), i, void 0, void 0, void 0, function() {
                            t.uiElements.followLink.focus()
                        })
                          , n = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-textbox-button")[0];
                        window.gigya.utils.DOM.addButtonSubmitListener(n, function(e) {
                            var i = window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-textbox")[0];
                            if (i) {
                                var n = i.value;
                                if (window.gigya.pluginUtils.validation.isEmailValid(n))
                                    t.follow(i.value),
                                    t.plugin.activeDialog.cancelHandler();
                                else
                                    window.gigya.utils.DOM.getElementsByClass(o, "gig-comments-dialog-error")[0].innerHTML = t.getText("please_provide_a_valid_email_address")
                            }
                        })
                    }
                }
                ,
                e.prototype.follow = function(e) {
                    window.gigya.comments.setUserOptions(this.plugin.params, {
                        replyNotifications: "immediate",
                        notificationsEmail: e,
                        notificationsLanguage: this.plugin.params.lang
                    }),
                    this.plugin.userOptions || (this.plugin.userOptions = {}),
                    this.plugin.userOptions.replyNotifications = "immediate",
                    this.updateFollow()
                }
                ,
                e.prototype.unfollow = function() {
                    window.gigya.comments.setUserOptions(this.plugin.params, {
                        replyNotifications: "disabled"
                    }),
                    this.plugin.userOptions.replyNotifications = "disabled",
                    this.updateFollow()
                }
                ,
                e.prototype.updateFollow = function() {
                    var e = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-composebox-follow")[0];
                    e && (this.plugin.user.isConnected && !this.plugin.user.isTempUser ? (this.plugin.isUserFollowing() ? (window.gigya.utils.DOM.addClassToElement(e, "gig-composebox-following"),
                    e.innerHTML = this.getText("following"),
                    e.setAttribute("aria-label", this.getText("unfollow")),
                    e.title = "") : (window.gigya.utils.DOM.removeClassFromElement(e, "gig-composebox-following"),
                    this.plugin.isMobileUI ? e.innerHTML = this.getText("follow") : e.innerHTML = this.plugin.textMode == s.TextMode.REVIEWS ? this.getText("follow_replies_to_my_reviews") : this.getText("follow_replies_to_my_comments"),
                    e.title = this.plugin.textMode == s.TextMode.REVIEWS ? this.getText("notify_me_when_someone_comments_on_my_review") : this.getText("notify_me_when_someone_replies_to_my_comments"),
                    e.setAttribute("aria-label", e.title)),
                    e.style.display = "") : e.style.display = "none")
                }
                ,
                e.prototype.toggleSidebarButton = function(e, t) {
                    t ? window.gigya.utils.DOM.addClassToElement(e, "gig-composebox-sidebar-button-down") : window.gigya.utils.DOM.removeClassFromElement(e, "gig-composebox-sidebar-button-down")
                }
                ,
                e.prototype.onSidebarTagClicked = function(e) {
                    var t = this
                      , i = e.target || e.srcElement;
                    this.userTaggingBox || -1 != i.className.indexOf("gig-composebox-sidebar-button-down") || (window.gigya.utils.DOM.addClassToElement(i, "gig-composebox-sidebar-button-down"),
                    this.userTaggingBox && this.userTaggingBox.cancel(),
                    this.userTaggingBox = new n.UserTaggingBox(this,function(e, o) {
                        e && o && t.insertUserTag(o),
                        delete t.userTaggingBox,
                        window.gigya.utils.DOM.removeClassFromElement(i, "gig-composebox-sidebar-button-down")
                    }
                    ,""))
                }
                ,
                e.prototype.showSidebarBox = function(e, t, i) {
                    var o = this;
                    if (e) {
                        var n = window.gigya.utils.DOM.getElementPosition(e);
                        this.toggleSidebarButton(e, !0),
                        t.style.position = "absolute",
                        null != t.style.zIndex && (t.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString()),
                        window.gigya.pluginUtils.animation.fadeIn(t),
                        window.gigya.utils.DOM.appendToBody(t),
                        this.plugin.isRtl ? t.style.left = Math.max(0, n.left + e.offsetWidth) + "px" : t.style.left = Math.max(0, n.left - t.offsetWidth) + "px",
                        t.style.top = n.top + "px",
                        window.gigya.pluginUtils.DOM.removeElementOnDocClickOrEscape(t, function(t, n) {
                            n && (o.toggleSidebarButton(e, !1),
                            t.target == e && a.Events.cancelEvent(t),
                            i && i())
                        })
                    }
                }
                ,
                e.prototype.showMediaBox = function(e) {
                    var t = this
                      , i = document.createElement("div");
                    i.className = "gig-comments-container gig-comments-mediabox",
                    i.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.mediabox, {
                        url: this.mediaItem ? this.mediaItem.url : "",
                        enter_url: this.plugin.getText("enter_url"),
                        add_media_item: this.plugin.getText("tip_use_trusted_urls"),
                        ok: this.plugin.getText("ok")
                    });
                    var o = window.gigya.utils.DOM.getElementsByClass(i, "gig-mediabox-url")[0]
                      , n = window.gigya.utils.DOM.getElementsByClass(i, "gig-mediabox-ok")[0];
                    if (n) {
                        var s = function() {
                            window.gigya.utils.DOM.removeEventListener(document, "keydown", a),
                            window.gigya.utils.DOM.removeEventListener(n, "click", g)
                        }
                          , a = function(e) {
                            var t = e.keyCode;
                            27 == t ? (i.parentElement.removeChild(i),
                            s()) : 13 == t && g()
                        }
                          , g = function() {
                            o && o.value ? (i.parentElement.removeChild(i),
                            t.showMediaItemPreview(),
                            t.toggleSidebarButton(e, !1),
                            window.gigya.comments.analyzeMediaItem({
                                categoryID: t.plugin.params.categoryID,
                                urls: o.value,
                                callback: function(e) {
                                    !e.errorCode && e.mediaItems && 1 == e.mediaItems.length ? (t.mediaItem = e.mediaItems[0],
                                    t.updateMediaItem()) : (t.uiElements.errorMessage.style.display = "block",
                                    t.uiElements.errorMessage.innerHTML = t.plugin.getText("the_provided_url_is_not_supported"),
                                    window.gigya.pluginUtils.DOM.hideElementOnDocClick(t.uiElements.errorMessage),
                                    t.removeMediaItemPreview())
                                }
                            })) : (i.parentElement.removeChild(i),
                            t.toggleSidebarButton(e, !1)),
                            s()
                        };
                        window.gigya.utils.DOM.addEventListener(document, "keydown", a),
                        window.gigya.utils.DOM.addEventListener(n, "click", g)
                    }
                    this.showSidebarBox(e, i, s),
                    o.focus()
                }
                ,
                e.prototype.removeMediaItemPreview = function() {
                    this.uiElements.mediaItem && (this.uiElements.mediaItem.innerHTML = ""),
                    this.mediaItem = null
                }
                ,
                e.prototype.showMediaItemPreview = function() {
                    if (this.uiElements.mediaItem) {
                        this.uiElements.mediaItem.innerHTML = "",
                        this.uiElements.editor && window.gigya.utils.DOM.addClassToElement(this.uiElements.editor, "gig-composebox-editor-with-media");
                        var e = document.createElement("div");
                        window.gigya.utils.DOM.addClassToElement(e, "gig-composebox-media-preview"),
                        this.uiElements.mediaItem.appendChild(e),
                        e.style.height = .75 * e.offsetWidth + "px"
                    }
                }
                ,
                e.prototype.updateMediaItem = function() {
                    var e = this;
                    if (this.uiElements.mediaItem) {
                        var t = this.uiElements.mediaItem.childNodes[0];
                        t.style.backgroundImage = "";
                        this.plugin.buildMediaItemElement(t, this.mediaItem, !0, function() {
                            e.uiElements.mediaItem.innerHTML = "",
                            e.mediaItem = null,
                            e.uiElements.editor && window.gigya.utils.DOM.removeClassFromElement(e.uiElements.editor, "gig-composebox-editor-with-media")
                        })
                    }
                }
                ,
                e.prototype.showFontBox = function(e) {
                    var t = this
                      , i = document.createElement("div");
                    i.innerHTML = this.plugin.templates.fontbox,
                    i.className = "gig-comments-container gig-comments-fontbox";
                    for (var o = i.getElementsByTagName("li"), n = 0; n < o.length; n++) {
                        var s = o[n];
                        window.gigya.utils.DOM.addEventListener(s, "mousedown", function(o) {
                            var n = (o.target || o.srcElement).getAttribute("data-command");
                            n && (i.parentNode.removeChild(i),
                            t.toggleSidebarButton(e, !1),
                            t.setFontCommand(n)),
                            window.gigya.utils.DOM.cancelEvent(o)
                        })
                    }
                    this.showSidebarBox(e, i)
                }
                ,
                e.prototype.setFontCommand = function(e) {
                    switch (e) {
                    case "bold":
                        document.execCommand("bold", !1, !0);
                        break;
                    case "italic":
                        document.execCommand("italic", !1, !0);
                        break;
                    case "underline":
                        document.execCommand("underline", !1, !0);
                        break;
                    case "bullets":
                        document.execCommand("InsertUnorderedList", !1, "newUL")
                    }
                }
                ,
                e.prototype.submit = function() {}
                ,
                e.prototype.submitCallback = function(e) {
                    var t = this.plugin.getComment(this.data.ID);
                    if (e.errorCode > 0) {
                        var i;
                        switch (e.errorCode) {
                        case 403037:
                            i = this.getText("only_one_review_per_product_is_allowed");
                            break;
                        case 400124:
                            i = this.getText("daily_commenting_limit_reached");
                            break;
                        case 400125:
                            i = this.getText("commenting_frequency_limit_reached");
                            break;
                        case 403038:
                            i = this.plugin.textMode == s.TextMode.COMMENTS ? this.getText("comment_edit_rejected") : this.getText("review_edit_rejected");
                            break;
                        default:
                            i = this.getText("an_error_has_occurred_please_try_again_later", "%errorCode", e.errorCode)
                        }
                        i && t.updateStatus(i),
                        window.gigya.events.dispatchErrorFromResponse(this.plugin.params, e)
                    } else
                        e.comment && (t.isTemp = !1,
                        t.isPost = !0,
                        t.reset(o.CommentData.fromRawData(e.comment)))
                }
                ,
                e.prototype.getSubmitText = function() {
                    return ""
                }
                ,
                e.prototype.afterRender = function() {}
                ,
                e.prototype.getTitle = function() {
                    return ""
                }
                ,
                e.alwaysAllowedTags = "div|br|p|input|span",
                e.richTextAllowedTags = "ul|li|u|i|b|strong|em",
                e.allowedOnLimitKeys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145],
                e
            }();
            t.BaseComposeBox = r
        },
        93: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.imgBase = (window.gigya.thisScript ? window.gigya._.getCdnResource() : "") + "/gs/i/comments2/"
        },
        94: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0)
              , n = i(92)
              , s = i(159)
              , a = i(67)
              , g = i(36)
              , r = function(e) {
                function t(t, i, o, n) {
                    return e.call(this, t, i, new a.CommentData("newComment",o), n) || this
                }
                return o.__extends(t, e),
                t.prototype.render = function() {
                    this.plugin.settings.readOnly || "readOnly" == this.plugin.streamInfo.status || (e.prototype.render.call(this),
                    this.renderSelfReviewIfNeeded(),
                    this.renderShareOptions(),
                    this.renderPostAnonymously(),
                    this.updateUI())
                }
                ,
                t.prototype.renderShareOptions = function() {
                    if (this.uiElements.shareSection && this.uiElements.shareProviders) {
                        var e = this.plugin.params.enabledShareProviders || this.plugin.params.enabledProviders || "*"
                          , t = this.plugin.params.disabledShareProviders || this.plugin.params.disabledProviders || ""
                          , i = window.gigya.socialize.getProvidersByName(e);
                        i = window.gigya.socialize.hideProvidersByName(i, t),
                        i = window.gigya.socialize.getProvidersForRequiredCapabilities(i, ["actions"]),
                        this.share = new s.ComposeShare(this.uiElements.shareProviders,this.plugin,i,this.plugin.user.identities)
                    }
                }
                ,
                t.prototype.renderPostAnonymously = function() {
                    if (this.uiElements.postAnonymouslySection)
                        if (this.plugin.settings.allowAnonymous) {
                            this.updatePostAnonymously();
                            for (var e = (this.plugin.textMode == g.TextMode.COMMENTS ? this.getText("when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_comment.") : this.getText("when_posting_anonymously,_other_users_will_not_see_your_personal_info_next_to_your_review.")).split(" "), t = 6; t < e.length; t += 6)
                                e.splice(t, 0, ["\n"]);
                            this.uiElements.postAnonymouslySection.setAttribute("title", e.join(" "))
                        } else
                            this.uiElements.postAnonymouslySection.parentElement.removeChild(this.uiElements.postAnonymouslySection)
                }
                ,
                t.prototype.renderSelfReviewIfNeeded = function() {
                    return this.selfReview = this.plugin.getSelfReview(),
                    !(!this.selfReview || this.plugin.settings.allowMultipleReviewsPerUser || this.data.isReply()) && (this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates.myReview, {
                        logout: this.getText("logout"),
                        your_review: this.getText("your_review"),
                        summary: this.getText("summary_colon"),
                        review: this.getText("review_colon")
                    }),
                    this.buildUIElementsObj(),
                    this.bindEvents(),
                    this.updateSelfReview(),
                    !0)
                }
                ,
                t.prototype.getSelfRatingDimensionElement = function(e, t) {
                    var i, o = e.data.ratings[t], n = document.createElement("div");
                    if (n.innerHTML = this.plugin.templates.rating,
                    n.className = "gig-selfreview-rating gig-selfreview-rating-" + t,
                    "_overall" == t)
                        i = this.getText("my_rating_colon");
                    else {
                        var s = this.plugin.settings.ratingDims;
                        if (s)
                            for (var a = 0; a < s.length; a++)
                                if (s[a].id == t) {
                                    i = s[a].name + ":";
                                    break
                                }
                    }
                    if (i) {
                        var g = window.gigya.utils.DOM.getElementsByClass(n, "gig-comment-rating-title")[0];
                        g && (g.innerHTML = i);
                        var r = window.gigya.utils.DOM.getElementsByClass(n, "gig-comment-rating-value")[0];
                        if (r) {
                            r.innerHTML = "",
                            r.title = o.toString();
                            for (a = 0; a < 5; a++) {
                                var l = document.createElement("div");
                                window.gigya.utils.DOM.addClassToElement(l, "gig-selfreview-rating-star");
                                var m = "";
                                a < Math.floor(o) && (m = "gig-selfreview-rating-star-full"),
                                window.gigya.utils.DOM.addClassToElement(l, m),
                                r.appendChild(l)
                            }
                        }
                        return n
                    }
                }
                ,
                t.prototype.getUserAction = function(e, t) {
                    void 0 === t && (t = null),
                    t || (t = this.data.isReply() ? this.plugin.params.replyUserAction : this.plugin.params.userAction),
                    (t = t ? t.clone() : new window.gigya.socialize.UserAction).title || (this.plugin.textMode != g.TextMode.REVIEWS || this.data.isReply() ? t.title = this.getText("commented_on_colon_pagetitle", "%pageTitle", document.title) : e.ratings && e.ratings._overall ? t.title = this.getText("i_rated_pagetitle_as_rating_5", "%rating", e.ratings._overall.toString()).replace("%pageTitle", document.title) : t.title = this.getText("my_review_on_colon_pagetitle", "%pageTitle", document.title)),
                    t.linkBack || (t.linkBack = window.gigya._.plugins.utils.URL.addOrReplaceHashFragment(document.location.href, "gig_comment_id", "$commentID$"));
                    var i = document.createElement("p");
                    i.innerHTML = e.commentText.replace(/<br>/g, "\n").replace(/<\/?div>/g, "\n"),
                    t.userMessage = i.innerText || i.textContent;
                    var o = {
                        commentTitle: e.commentTitle,
                        commentText: e.commentText,
                        rating: e.ratings ? e.ratings._overall : null
                    };
                    return o.ratingDescription = [this.getText("i_hate_it"), this.getText("i_dont_like_it"), this.getText("its_ok"), this.getText("i_like_it"), this.getText("i_love_it")][o.rating - 1],
                    window.gigya.global.fillUserActionTemplate(t, o)
                }
                ,
                t.prototype.bindEvents = function() {
                    var t = this;
                    e.prototype.bindEvents.call(this),
                    window.gigya.utils.DOM.addEventListener(this.uiElements.postAnonymouslySection, "click", function() {
                        t.postAnonymously = !t.postAnonymously,
                        t.updatePostAnonymously()
                    })
                }
                ,
                t.prototype.updateUI = function() {
                    if (this.uiElements) {
                        var t = this.plugin.getSelfReview();
                        if (!this.data.isReply() && !this.plugin.settings.allowMultipleReviewsPerUser) {
                            if (t != this.selfReview)
                                return void this.render();
                            t && this.updateSelfReview()
                        }
                        e.prototype.updateUI.call(this),
                        this.updateShareOptions(),
                        this.updatePostAnonymously()
                    }
                }
                ,
                t.prototype.updateSelfReview = function() {
                    var e = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-selfreview-summary-container")[0]
                      , t = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-selfreview-summary")[0];
                    t && (this.selfReview && this.selfReview.data.commentTitle ? (t.innerHTML = this.selfReview.data.commentTitle,
                    e && (e.style.display = "")) : (t.innerHTML = "",
                    e && (e.style.display = "none")));
                    var i = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-selfreview-body")[0];
                    if (i)
                        if (this.selfReview && this.selfReview.data.commentText)
                            i.innerHTML = window.gigya.global.wbr(this.selfReview.data.commentText.replace(/\n/g, "<br />"), 20);
                        else {
                            i.innerHTML = "";
                            var o = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-selfreview-body-container")[0];
                            o && (o.style.display = "none")
                        }
                    var n = 0
                      , s = window.gigya.utils.DOM.getElementsByClass(this.container, "gig-selfreview-ratings")[0];
                    if (s && (s.id = "gig_" + (new Date).getTime(),
                    s.innerHTML = "",
                    s && this.selfReview.data.ratings)) {
                        for (var a in this.selfReview.data.ratings) {
                            var g = this.getSelfRatingDimensionElement(this.selfReview, a);
                            if (g) {
                                "_overall" == a && s.firstChild ? s.insertBefore(g, s.firstChild) : s.appendChild(g);
                                var r = window.gigya.utils.DOM.getElementsByClass(g, "gig-comment-rating-title")[0];
                                n = Math.max(n, r.offsetWidth)
                            }
                        }
                        window.gigya._.plugins.utils.css.addCss("#" + s.id + " *.gig-comment-rating-title { width:" + n + "px; }", "")
                    }
                }
                ,
                t.prototype.updateShareOptions = function() {
                    this.uiElements.shareSection && ((this.plugin.user.isConnected || !this.plugin.user.isGuest) && this.share.providers.length > 0 && this.plugin.shareEnabled ? (this.uiElements.shareSection.style.display = "",
                    this.share.updateIcons()) : this.uiElements.shareSection.style.display = "none")
                }
                ,
                t.prototype.updatePostAnonymously = function() {
                    this.uiElements.postAnonymouslySection && this.uiElements.postAnonymouslyCheckbox && (!this.plugin.user.isConnected || this.plugin.user.isGuest ? this.uiElements.postAnonymouslySection.style.display = "none" : (this.uiElements.postAnonymouslySection.style.display = "",
                    this.postAnonymously ? window.gigya.utils.DOM.addClassToElement(this.uiElements.postAnonymouslyCheckbox, "gig-comments-checkbox-checked") : window.gigya.utils.DOM.removeClassFromElement(this.uiElements.postAnonymouslyCheckbox, "gig-comments-checkbox-checked")))
                }
                ,
                t.prototype.updateLoginLogoutElements = function() {
                    e.prototype.updateLoginLogoutElements.call(this);
                    var t = this.getElement("or");
                    this.uiElements.loginBar && (this.isLoginDropdownEnabled() ? this.plugin.user.isConnected || this.plugin.user.isGuest ? this.uiElements.loginBar.style.display = "none" : (this.plugin.settings.useSiteLogin && this.uiElements.siteLoginButton ? (this.uiElements.siteLoginButton.style.display = "",
                    this.uiElements.socialLoginButton && (this.uiElements.socialLoginButton.style.display = "none")) : (this.uiElements.siteLoginButton && (this.uiElements.siteLoginButton.style.display = "none"),
                    this.uiElements.socialLoginButton && (this.uiElements.socialLoginButton.style.display = "")),
                    this.uiElements.loginBar.style.display = "") : this.uiElements.loginBar.style.display = "none"),
                    this.uiElements.guestLoginButton && (this.plugin.settings.allowGuest && this.isLoginDropdownEnabled() ? (this.uiElements.guestLoginButton.style.display = "",
                    t && (t.style.display = "")) : (this.uiElements.guestLoginButton.style.display = "none",
                    t && (t.style.display = "none")))
                }
                ,
                t.prototype.afterRender = function() {
                    this.hideElement(this.uiElements.cancelButton)
                }
                ,
                t.prototype.getSubmitText = function() {
                    return this.getText("post")
                }
                ,
                t.prototype.getTitle = function() {
                    var e, t = this.plugin.getComment(this.data.parentID);
                    if (null != t) {
                        var i = this.plugin.textMode == g.TextMode.REVIEWS ? "comment_on_username_review" : "reply_to_username";
                        e = this.getText(i, "%username", '<span class="gig-composebox-username">' + window.gigya.utils.sanitize.sanitizeHTML(t.getUsername()) + "</span>")
                    } else
                        e = this.plugin.user.isConnected || this.plugin.user.isGuest ? this.getText("hello_username", "%username", this.plugin.getUsername()) : "";
                    return e
                }
                ,
                t.prototype.submit = function(e) {
                    var t = this
                      , i = this.uiElements.submitButton;
                    this.uiElements.summaryInput;
                    if (this.plugin.user.isGuest || this.plugin.user.isConnected) {
                        var o = (new Date).getTime()
                          , n = "pending_" + o;
                        this.data.isReply() && this.close(),
                        this.data = window.gigya.utils.object.merge([this.data, {
                            ID: n,
                            timestamp: o,
                            threadTimestamp: o,
                            sender: {
                                photoURL: window.gigya.global.getPhotoURL(this.plugin.user.thumbnailURL || this.plugin.user.photoURL),
                                loginProvider: this.getLoginProvider(),
                                name: this.plugin.getUsername(),
                                UID: this.plugin.user ? this.plugin.user.UID : null
                            },
                            tags: this.plugin.params.commentTags
                        }]),
                        this.postAnonymously && (this.data.highlightGroups = [],
                        this.data.sender = {
                            name: this.plugin.getText("anonymous")
                        });
                        var s = window.gigya.utils.object.removeUndefined({
                            commentText: "disabled" != this.plugin.settings.enableCommentBody ? this.data.commentText : null,
                            parentID: this.data.parentID ? this.data.parentID : null,
                            commentTitle: "disabled" == this.plugin.settings.enableCommentTitles || this.data.isReply() ? null : this.data.commentTitle,
                            taggedUsers: this.data.taggedUsers.length > 0 ? this.data.taggedUsers.join(",") : null,
                            mediaItems: this.data.mediaItems.length > 0 ? this.data.mediaItems[0].url : null,
                            ratings: this.plugin.textMode == g.TextMode.REVIEWS ? this.data.ratings : null,
                            enabledProviders: e || !this.share || 0 == this.share.getSelected().length ? " " : this.share.getSelected().join(","),
                            tags: this.plugin.params.commentTags,
                            anonymous: !!this.postAnonymously || null,
                            guestName: this.plugin.user.isGuest ? this.plugin.user.nickname : null,
                            guestEmail: this.plugin.user.isGuest ? this.plugin.user.email : null,
                            callback: function(e) {
                                return t.submitCallback(e)
                            }
                        });
                        if (this.share)
                            for (var a = 0; a < this.share.getSelected().length; a++) {
                                var r = this.share.getSelected()[a] + "UserAction";
                                this.plugin.params[r] = this.getUserAction(this.data, this.plugin.params[r])
                            }
                        var l = s;
                        if (l.guestName || (l.guestName = ""),
                        l.guestEmail || (l.guestEmail = ""),
                        l.eventName = "beforeCommentSubmitted",
                        0 != window.gigya.events.dispatchForWidget(l, this.plugin.params)) {
                            s = l,
                            "" == l.guestName && delete l.guestName,
                            "" == l.guestEmail && delete l.guestEmail;
                            var m = this.plugin.getComment(this.data.parentID)
                              , d = m ? m.level + 1 : 0
                              , c = null;
                            "pending" == this.data.status && (c = this.plugin.textMode == g.TextMode.REVIEWS && 0 == d ? this.getText("your_review_is_awaiting_moderation") : this.getText("your_comment_is_awaiting_moderation")),
                            this.plugin.addComments([this.data], d, !1, !0, null, c),
                            window.gigya.comments.postComment(this.plugin.params, s),
                            this.share && this.share.saveSelected(),
                            this.plugin.setStreamInfoIfNeeded(),
                            this.clear()
                        }
                    } else {
                        var u = function() {
                            t.submit()
                        };
                        this.plugin.settings.useSiteLogin ? this.onSiteLoginClick(u) : this.onLoginClick(i, this.plugin.settings.allowGuest, u)
                    }
                }
                ,
                t.prototype.submitCallback = function(t) {
                    if (e.prototype.submitCallback.call(this, t),
                    0 == t.errorCode) {
                        var i = this.plugin.getComment(t.comment.ID);
                        "published" === i.data.status && (this.plugin.streamInfo.commentCount++,
                        this.data.isReply() || this.plugin.streamInfo.ratingCount++,
                        this.plugin.updateCount());
                        var o = window.gigya.utils.object.removeUndefined({
                            eventName: "commentSubmitted",
                            streamID: this.plugin.params.streamID,
                            categoryID: this.plugin.params.categoryID,
                            commentText: i.data.commentText,
                            comment: window.gigya.utils.object.clone(i.data, !0, !0),
                            mode: this.plugin.textMode == g.TextMode.REVIEWS ? "reviews" : "comments",
                            ratings: i.data.ratings,
                            commentTitle: i.data.commentTitle,
                            providerPostIDs: i.data.providerPostIDs,
                            user: this.plugin.user.UID ? this.plugin.user : null,
                            guestUser: this.plugin.user.isGuest ? {
                                nickname: this.plugin.user.nickname,
                                email: this.plugin.user.email
                            } : null
                        });
                        this.plugin.userCommentsData.push(i.data),
                        this.plugin.setUserComments(this.plugin.userCommentsData),
                        window.gigya.events.dispatchForWidget(o, this.plugin.params)
                    }
                }
                ,
                t
            }(n.BaseComposeBox);
            t.NewCommentBox = r
        }
    });
});

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [274], {
        7054: function(t, e, i) {
            "use strict";
            i.d(e, {
                ZP: function() {
                    return l
                }
            });
            let r = {
                    _origin: "https://api.emailjs.com"
                },
                n = (t, e, i) => {
                    if (!t) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!e) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!i) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class s {
                constructor(t) {
                    this.status = t ? t.status : 0, this.text = t ? t.responseText : "Network Error"
                }
            }
            let o = (t, e, i = {}) => new Promise((n, o) => {
                    let a = new XMLHttpRequest;
                    a.addEventListener("load", ({
                        target: t
                    }) => {
                        let e = new s(t);
                        200 === e.status || "OK" === e.text ? n(e) : o(e)
                    }), a.addEventListener("error", ({
                        target: t
                    }) => {
                        o(new s(t))
                    }), a.open("POST", r._origin + t, !0), Object.keys(i).forEach(t => {
                        a.setRequestHeader(t, i[t])
                    }), a.send(e)
                }),
                a = t => {
                    let e;
                    if (!(e = "string" == typeof t ? document.querySelector(t) : t) || "FORM" !== e.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return e
                };
            var l = {
                init: (t, e = "https://api.emailjs.com") => {
                    r._userID = t, r._origin = e
                },
                send: (t, e, i, s) => {
                    let a = s || r._userID;
                    return n(a, t, e), o("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.11.0",
                        user_id: a,
                        service_id: t,
                        template_id: e,
                        template_params: i
                    }), {
                        "Content-type": "application/json"
                    })
                },
                sendForm: (t, e, i, s) => {
                    let l = s || r._userID,
                        u = a(i);
                    n(l, t, e);
                    let h = new FormData(u);
                    return h.append("lib_version", "3.11.0"), h.append("service_id", t), h.append("template_id", e), h.append("user_id", l), o("/api/v1.0/email/send-form", h)
                }
            }
        },
        7607: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "addLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), i(6070);
            let r = function(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                return t
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        7561: function(t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), i(6070), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3719: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "hasBasePath", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let r = i(6892);

            function n(t) {
                return (0, r.pathHasPrefix)(t, "")
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6685: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = i(1024),
                n = r._(i(2265)),
                s = i(2156),
                o = i(3954),
                a = i(6162),
                l = i(5090),
                u = i(7607),
                h = i(2706),
                c = i(6656),
                d = i(283),
                p = i(7561),
                f = i(6711),
                m = i(5685),
                g = new Set;

            function y(t, e, i, r, n, s) {
                if (!s && !(0, o.isLocalURL)(e)) return;
                if (!r.bypassPrefetchedCheck) {
                    let n = void 0 !== r.locale ? r.locale : "locale" in t ? t.locale : void 0,
                        s = e + "%" + i + "%" + n;
                    if (g.has(s)) return;
                    g.add(s)
                }
                let a = s ? t.prefetch(e, n) : t.prefetch(e, i, r);
                Promise.resolve(a).catch(t => {})
            }

            function v(t) {
                return "string" == typeof t ? t : (0, a.formatUrl)(t)
            }
            let x = n.default.forwardRef(function(t, e) {
                    let i, r;
                    let {
                        href: a,
                        as: g,
                        children: x,
                        prefetch: b = null,
                        passHref: P,
                        replace: w,
                        shallow: T,
                        scroll: A,
                        locale: S,
                        onClick: E,
                        onMouseEnter: M,
                        onTouchStart: C,
                        legacyBehavior: V = !1,
                        ...R
                    } = t;
                    i = x, V && ("string" == typeof i || "number" == typeof i) && (i = n.default.createElement("a", null, i));
                    let j = n.default.useContext(h.RouterContext),
                        k = n.default.useContext(c.AppRouterContext),
                        D = null != j ? j : k,
                        L = !j,
                        O = !1 !== b,
                        F = null === b ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
                        {
                            href: I,
                            as: B
                        } = n.default.useMemo(() => {
                            if (!j) {
                                let t = v(a);
                                return {
                                    href: t,
                                    as: g ? v(g) : t
                                }
                            }
                            let [t, e] = (0, s.resolveHref)(j, a, !0);
                            return {
                                href: t,
                                as: g ? (0, s.resolveHref)(j, g) : e || t
                            }
                        }, [j, a, g]),
                        _ = n.default.useRef(I),
                        U = n.default.useRef(B);
                    V && (r = n.default.Children.only(i));
                    let N = V ? r && "object" == typeof r && r.ref : e,
                        [$, W, z] = (0, d.useIntersection)({
                            rootMargin: "200px"
                        }),
                        H = n.default.useCallback(t => {
                            (U.current !== B || _.current !== I) && (z(), U.current = B, _.current = I), $(t), N && ("function" == typeof N ? N(t) : "object" == typeof N && (N.current = t))
                        }, [B, N, I, z, $]);
                    n.default.useEffect(() => {
                        D && W && O && y(D, I, B, {
                            locale: S
                        }, {
                            kind: F
                        }, L)
                    }, [B, I, W, S, O, null == j ? void 0 : j.locale, D, L, F]);
                    let q = {
                        ref: H,
                        onClick(t) {
                            V || "function" != typeof E || E(t), V && r.props && "function" == typeof r.props.onClick && r.props.onClick(t), D && !t.defaultPrevented && function(t, e, i, r, s, a, l, u, h, c) {
                                let {
                                    nodeName: d
                                } = t.currentTarget, p = "A" === d.toUpperCase();
                                if (p && (function(t) {
                                        let e = t.currentTarget,
                                            i = e.getAttribute("target");
                                        return i && "_self" !== i || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                    }(t) || !h && !(0, o.isLocalURL)(i))) return;
                                t.preventDefault();
                                let f = () => {
                                    let t = null == l || l;
                                    "beforePopState" in e ? e[s ? "replace" : "push"](i, r, {
                                        shallow: a,
                                        locale: u,
                                        scroll: t
                                    }) : e[s ? "replace" : "push"](r || i, {
                                        forceOptimisticNavigation: !c,
                                        scroll: t
                                    })
                                };
                                h ? n.default.startTransition(f) : f()
                            }(t, D, I, B, w, T, A, S, L, O)
                        },
                        onMouseEnter(t) {
                            V || "function" != typeof M || M(t), V && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t), D && (O || !L) && y(D, I, B, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: F
                            }, L)
                        },
                        onTouchStart(t) {
                            V || "function" != typeof C || C(t), V && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t), D && (O || !L) && y(D, I, B, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: F
                            }, L)
                        }
                    };
                    if ((0, l.isAbsoluteUrl)(B)) q.href = B;
                    else if (!V || P || "a" === r.type && !("href" in r.props)) {
                        let t = void 0 !== S ? S : null == j ? void 0 : j.locale,
                            e = (null == j ? void 0 : j.isLocaleDomain) && (0, p.getDomainLocale)(B, t, null == j ? void 0 : j.locales, null == j ? void 0 : j.domainLocales);
                        q.href = e || (0, f.addBasePath)((0, u.addLocale)(B, t, null == j ? void 0 : j.defaultLocale))
                    }
                    return V ? n.default.cloneElement(r, q) : n.default.createElement("a", { ...R,
                        ...q
                    }, i)
                }),
                b = x;
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        8043: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    requestIdleCallback: function() {
                        return i
                    },
                    cancelIdleCallback: function() {
                        return r
                    }
                });
            let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        283: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = i(2265),
                n = i(8043),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function l(t) {
                let {
                    rootRef: e,
                    rootMargin: i,
                    disabled: l
                } = t, u = l || !s, [h, c] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(t => {
                    d.current = t
                }, []);
                (0, r.useEffect)(() => {
                    if (s) {
                        if (u || h) return;
                        let t = d.current;
                        if (t && t.tagName) {
                            let r = function(t, e, i) {
                                let {
                                    id: r,
                                    observer: n,
                                    elements: s
                                } = function(t) {
                                    let e;
                                    let i = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        r = a.find(t => t.root === i.root && t.margin === i.margin);
                                    if (r && (e = o.get(r))) return e;
                                    let n = new Map,
                                        s = new IntersectionObserver(t => {
                                            t.forEach(t => {
                                                let e = n.get(t.target),
                                                    i = t.isIntersecting || t.intersectionRatio > 0;
                                                e && i && e(i)
                                            })
                                        }, t);
                                    return e = {
                                        id: i,
                                        observer: s,
                                        elements: n
                                    }, a.push(i), o.set(i, e), e
                                }(i);
                                return s.set(t, e), n.observe(t),
                                    function() {
                                        if (s.delete(t), n.unobserve(t), 0 === s.size) {
                                            n.disconnect(), o.delete(r);
                                            let t = a.findIndex(t => t.root === r.root && t.margin === r.margin);
                                            t > -1 && a.splice(t, 1)
                                        }
                                    }
                            }(t, t => t && c(t), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: i
                            });
                            return r
                        }
                    } else if (!h) {
                        let t = (0, n.requestIdleCallback)(() => c(!0));
                        return () => (0, n.cancelIdleCallback)(t)
                    }
                }, [u, i, e, h, d.current]);
                let f = (0, r.useCallback)(() => {
                    c(!1)
                }, []);
                return [p, h, f]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3805: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = /[|\\{}()[\]^$+*?.-]/,
                r = /[|\\{}()[\]^$+*?.-]/g;

            function n(t) {
                return i.test(t) ? t.replace(r, "\\$&") : t
            }
        },
        1295: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return u
                    },
                    unstable_getImgProps: function() {
                        return l
                    }
                });
            let r = i(1024),
                n = i(2301),
                s = i(7873),
                o = i(3222),
                a = r._(i(5033)),
                l = t => {
                    (0, s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: e
                    } = (0, n.getImgProps)(t, {
                        defaultLoader: a.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                    return {
                        props: e
                    }
                },
                u = o.Image
        },
        6162: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    formatUrl: function() {
                        return o
                    },
                    urlObjectKeys: function() {
                        return a
                    },
                    formatWithValidation: function() {
                        return l
                    }
                });
            let r = i(8533),
                n = r._(i(5769)),
                s = /https?|ftp|gopher|file/;

            function o(t) {
                let {
                    auth: e,
                    hostname: i
                } = t, r = t.protocol || "", o = t.pathname || "", a = t.hash || "", l = t.query || "", u = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
                let h = t.search || l && "?" + l || "";
                return r && !r.endsWith(":") && (r += ":"), t.slashes || (!r || s.test(r)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), h && "?" !== h[0] && (h = "?" + h), "" + r + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
            }
            let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function l(t) {
                return o(t)
            }
        },
        9232: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = i(3658),
                n = i(8489);

            function s(t, e, i) {
                let s = "",
                    o = (0, n.getRouteRegex)(t),
                    a = o.groups,
                    l = (e !== t ? (0, r.getRouteMatcher)(o)(e) : "") || i;
                s = t;
                let u = Object.keys(a);
                return u.every(t => {
                    let e = l[t] || "",
                        {
                            repeat: i,
                            optional: r
                        } = a[t],
                        n = "[" + (i ? "..." : "") + t + "]";
                    return r && (n = (e ? "" : "/") + "[" + n + "]"), i && !Array.isArray(e) && (e = [e]), (r || t in l) && (s = s.replace(n, i ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
                }) || (s = ""), {
                    params: u,
                    result: s
                }
            }
        },
        8354: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = /\/\[[^/]+?\](?=\/|$)/;

            function r(t) {
                return i.test(t)
            }
        },
        3954: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = i(5090),
                n = i(3719);

            function s(t) {
                if (!(0, r.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, r.getLocationOrigin)(),
                        i = new URL(t, e);
                    return i.origin === e && (0, n.hasBasePath)(i.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        3259: function(t, e) {
            "use strict";

            function i(t, e) {
                let i = {};
                return Object.keys(t).forEach(r => {
                    e.includes(r) || (i[r] = t[r])
                }), i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "omit", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        6892: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "pathHasPrefix", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let r = i(2590);

            function n(t, e) {
                if ("string" != typeof t) return !1;
                let {
                    pathname: i
                } = (0, r.parsePath)(t);
                return i === e || i.startsWith(e + "/")
            }
        },
        5769: function(t, e) {
            "use strict";

            function i(t) {
                let e = {};
                return t.forEach((t, i) => {
                    void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
                }), e
            }

            function r(t) {
                return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function n(t) {
                let e = new URLSearchParams;
                return Object.entries(t).forEach(t => {
                    let [i, n] = t;
                    Array.isArray(n) ? n.forEach(t => e.append(i, r(t))) : e.set(i, r(n))
                }), e
            }

            function s(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                return i.forEach(e => {
                    Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, i) => t.append(i, e))
                }), t
            }
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    searchParamsToUrlQuery: function() {
                        return i
                    },
                    urlQueryToSearchParams: function() {
                        return n
                    },
                    assign: function() {
                        return s
                    }
                })
        },
        2156: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let r = i(5769),
                n = i(6162),
                s = i(3259),
                o = i(5090),
                a = i(6070),
                l = i(3954),
                u = i(8354),
                h = i(9232);

            function c(t, e, i) {
                let c;
                let d = "string" == typeof e ? e : (0, n.formatWithValidation)(e),
                    p = d.match(/^[a-zA-Z]{1,}:\/\//),
                    f = p ? d.slice(p[0].length) : d;
                if ((f.split("?")[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let e = (0, o.normalizeRepeatedSlashes)(f);
                    d = (p ? p[0] : "") + e
                }
                if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
                try {
                    c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n")
                } catch (t) {
                    c = new URL("/", "http://n")
                }
                try {
                    let t = new URL(d, c);
                    t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                    let e = "";
                    if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
                        let i = (0, r.searchParamsToUrlQuery)(t.searchParams),
                            {
                                result: o,
                                params: a
                            } = (0, h.interpolateAs)(t.pathname, t.pathname, i);
                        o && (e = (0, n.formatWithValidation)({
                            pathname: o,
                            hash: t.hash,
                            query: (0, s.omit)(i, a)
                        }))
                    }
                    let o = t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
                    return i ? [o, e || o] : o
                } catch (t) {
                    return i ? [d] : d
                }
            }
        },
        3658: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let r = i(5090);

            function n(t) {
                let {
                    re: e,
                    groups: i
                } = t;
                return t => {
                    let n = e.exec(t);
                    if (!n) return !1;
                    let s = t => {
                            try {
                                return decodeURIComponent(t)
                            } catch (t) {
                                throw new r.DecodeError("failed to decode param")
                            }
                        },
                        o = {};
                    return Object.keys(i).forEach(t => {
                        let e = i[t],
                            r = n[e.pos];
                        void 0 !== r && (o[t] = ~r.indexOf("/") ? r.split("/").map(t => s(t)) : e.repeat ? [s(r)] : s(r))
                    }), o
                }
            }
        },
        8489: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    getRouteRegex: function() {
                        return l
                    },
                    getNamedRouteRegex: function() {
                        return c
                    },
                    getNamedMiddlewareRegex: function() {
                        return d
                    }
                });
            let r = i(4507),
                n = i(3805),
                s = i(7369);

            function o(t) {
                let e = t.startsWith("[") && t.endsWith("]");
                e && (t = t.slice(1, -1));
                let i = t.startsWith("...");
                return i && (t = t.slice(3)), {
                    key: t,
                    repeat: i,
                    optional: e
                }
            }

            function a(t) {
                let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    i = {},
                    a = 1;
                return {
                    parameterizedRoute: e.map(t => {
                        let e = r.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (e && s) {
                            let {
                                key: t,
                                optional: r,
                                repeat: l
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: l,
                                optional: r
                            }, "/" + (0, n.escapeStringRegexp)(e) + "([^/]+?)"
                        }
                        if (!s) return "/" + (0, n.escapeStringRegexp)(t); {
                            let {
                                key: t,
                                repeat: e,
                                optional: r
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: e,
                                optional: r
                            }, e ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: i
                }
            }

            function l(t) {
                let {
                    parameterizedRoute: e,
                    groups: i
                } = a(t);
                return {
                    re: RegExp("^" + e + "(?:/)?$"),
                    groups: i
                }
            }

            function u(t) {
                let e, i, {
                        segment: r,
                        routeKeys: n,
                        keyPrefix: s
                    } = t,
                    a = (e = 97, i = 1, () => {
                        let t = "";
                        for (let r = 0; r < i; r++) t += String.fromCharCode(e), ++e > 122 && (i++, e = 97);
                        return t
                    }),
                    {
                        key: l,
                        optional: u,
                        repeat: h
                    } = o(r),
                    c = l.replace(/\W/g, "");
                s && (c = "" + s + c);
                let d = !1;
                return (0 === c.length || c.length > 30) && (d = !0), isNaN(parseInt(c.slice(0, 1))) || (d = !0), d && (c = a()), s ? n[c] = "" + s + l : n[c] = "" + l, h ? u ? "(?:/(?<" + c + ">.+?))?" : "/(?<" + c + ">.+?)" : "/(?<" + c + ">[^/]+?)"
            }

            function h(t, e) {
                let i = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    o = {};
                return {
                    namedParameterizedRoute: i.map(t => {
                        let i = r.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        return i && s ? u({
                            segment: s[1],
                            routeKeys: o,
                            keyPrefix: e ? "nxtI" : void 0
                        }) : s ? u({
                            segment: s[1],
                            routeKeys: o,
                            keyPrefix: e ? "nxtP" : void 0
                        }) : "/" + (0, n.escapeStringRegexp)(t)
                    }).join(""),
                    routeKeys: o
                }
            }

            function c(t, e) {
                let i = h(t, e);
                return { ...l(t),
                    namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: i.routeKeys
                }
            }

            function d(t, e) {
                let {
                    parameterizedRoute: i
                } = a(t), {
                    catchAll: r = !0
                } = e;
                if ("/" === i) return {
                    namedRegex: "^/" + (r ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: n
                } = h(t, !1);
                return {
                    namedRegex: "^" + n + (r ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        5090: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    WEB_VITALS: function() {
                        return i
                    },
                    execOnce: function() {
                        return r
                    },
                    isAbsoluteUrl: function() {
                        return s
                    },
                    getLocationOrigin: function() {
                        return o
                    },
                    getURL: function() {
                        return a
                    },
                    getDisplayName: function() {
                        return l
                    },
                    isResSent: function() {
                        return u
                    },
                    normalizeRepeatedSlashes: function() {
                        return h
                    },
                    loadGetInitialProps: function() {
                        return c
                    },
                    SP: function() {
                        return d
                    },
                    ST: function() {
                        return p
                    },
                    DecodeError: function() {
                        return f
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    MissingStaticPage: function() {
                        return y
                    },
                    MiddlewareNotFoundError: function() {
                        return v
                    },
                    stringifyError: function() {
                        return x
                    }
                });
            let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function r(t) {
                let e, i = !1;
                return function() {
                    for (var r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                    return i || (i = !0, e = t(...n)), e
                }
            }
            let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = t => n.test(t);

            function o() {
                let {
                    protocol: t,
                    hostname: e,
                    port: i
                } = window.location;
                return t + "//" + e + (i ? ":" + i : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = o();
                return t.substring(e.length)
            }

            function l(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function u(t) {
                return t.finished || t.headersSent
            }

            function h(t) {
                let e = t.split("?"),
                    i = e[0];
                return i.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function c(t, e) {
                let i = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await c(e.Component, e.ctx)
                } : {};
                let r = await t.getInitialProps(e);
                if (i && u(i)) return r;
                if (!r) {
                    let e = '"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.';
                    throw Error(e)
                }
                return r
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class f extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class y extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class v extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function x(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        },
        622: function(t, e, i) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = i(2265),
                n = Symbol.for("react.element"),
                s = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(t, e, i) {
                var r, s = {},
                    u = null,
                    h = null;
                for (r in void 0 !== i && (u = "" + i), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (h = e.ref), e) o.call(e, r) && !l.hasOwnProperty(r) && (s[r] = e[r]);
                if (t && t.defaultProps)
                    for (r in e = t.defaultProps) void 0 === s[r] && (s[r] = e[r]);
                return {
                    $$typeof: n,
                    type: t,
                    key: u,
                    ref: h,
                    props: s,
                    _owner: a.current
                }
            }
            e.Fragment = s, e.jsx = u, e.jsxs = u
        },
        7437: function(t, e, i) {
            "use strict";
            t.exports = i(622)
        },
        6691: function(t, e, i) {
            t.exports = i(1295)
        },
        1396: function(t, e, i) {
            t.exports = i(6685)
        },
        4033: function(t, e, i) {
            t.exports = i(8165)
        },
        9844: function(t, e, i) {
            "use strict";
            let r;
            i.d(e, {
                E: function() {
                    return nI
                }
            });
            var n, s, o = i(2265);
            let a = (0, o.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                l = (0, o.createContext)({}),
                u = (0, o.createContext)(null),
                h = "undefined" != typeof document,
                c = h ? o.useLayoutEffect : o.useEffect,
                d = (0, o.createContext)({
                    strict: !1
                });

            function p(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function f(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function m(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let g = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                y = ["initial", ...g];

            function v(t) {
                return m(t.animate) || y.some(e => f(t[e]))
            }

            function x(t) {
                return !!(v(t) || t.variants)
            }

            function b(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let P = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                w = {};
            for (let t in P) w[t] = {
                isEnabled: e => P[t].some(t => !!e[t])
            };
            let T = (0, o.createContext)({}),
                A = (0, o.createContext)({}),
                S = Symbol.for("motionComponentSymbol"),
                E = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function M(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (E.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let C = {},
                V = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                R = new Set(V);

            function j(t, {
                layout: e,
                layoutId: i
            }) {
                return R.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!C[t] || "opacity" === t)
            }
            let k = t => !!(t && t.getVelocity),
                D = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                L = V.length,
                O = t => e => "string" == typeof e && e.startsWith(t),
                F = O("--"),
                I = O("var(--"),
                B = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                _ = (t, e, i) => Math.min(Math.max(i, t), e),
                U = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                N = { ...U,
                    transform: t => _(0, 1, t)
                },
                $ = { ...U,
                    default: 1
                },
                W = t => Math.round(1e5 * t) / 1e5,
                z = /(-)?([\d]*\.?[\d])+/g,
                H = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                q = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Y(t) {
                return "string" == typeof t
            }
            let X = t => ({
                    test: e => Y(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                G = X("deg"),
                K = X("%"),
                Z = X("px"),
                Q = X("vh"),
                J = X("vw"),
                tt = { ...K,
                    parse: t => K.parse(t) / 100,
                    transform: t => K.transform(100 * t)
                },
                te = { ...U,
                    transform: Math.round
                },
                ti = {
                    borderWidth: Z,
                    borderTopWidth: Z,
                    borderRightWidth: Z,
                    borderBottomWidth: Z,
                    borderLeftWidth: Z,
                    borderRadius: Z,
                    radius: Z,
                    borderTopLeftRadius: Z,
                    borderTopRightRadius: Z,
                    borderBottomRightRadius: Z,
                    borderBottomLeftRadius: Z,
                    width: Z,
                    maxWidth: Z,
                    height: Z,
                    maxHeight: Z,
                    size: Z,
                    top: Z,
                    right: Z,
                    bottom: Z,
                    left: Z,
                    padding: Z,
                    paddingTop: Z,
                    paddingRight: Z,
                    paddingBottom: Z,
                    paddingLeft: Z,
                    margin: Z,
                    marginTop: Z,
                    marginRight: Z,
                    marginBottom: Z,
                    marginLeft: Z,
                    rotate: G,
                    rotateX: G,
                    rotateY: G,
                    rotateZ: G,
                    scale: $,
                    scaleX: $,
                    scaleY: $,
                    scaleZ: $,
                    skew: G,
                    skewX: G,
                    skewY: G,
                    distance: Z,
                    translateX: Z,
                    translateY: Z,
                    translateZ: Z,
                    x: Z,
                    y: Z,
                    z: Z,
                    perspective: Z,
                    transformPerspective: Z,
                    opacity: N,
                    originX: tt,
                    originY: tt,
                    originZ: Z,
                    zIndex: te,
                    fillOpacity: N,
                    strokeOpacity: N,
                    numOctaves: te
                };

            function tr(t, e, i, r) {
                let {
                    style: n,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if (F(t)) {
                        s[t] = i;
                        continue
                    }
                    let r = ti[t],
                        c = B(i, r);
                    if (R.has(t)) {
                        if (l = !0, o[t] = c, !h) continue;
                        i !== (r.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, a[t] = c) : n[t] = c
                }
                if (!e.transform && (l || r ? n.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, r, n) {
                        let s = "";
                        for (let e = 0; e < L; e++) {
                            let i = V[e];
                            if (void 0 !== t[i]) {
                                let e = D[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), n ? s = n(t, r ? "" : s) : i && r && (s = "none"), s
                    }(t.transform, i, h, r) : n.transform && (n.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let tn = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function ts(t, e, i) {
                for (let r in e) k(e[r]) || j(r, i) || (t[r] = e[r])
            }

            function to(t, e, i) {
                let r = {},
                    n = function(t, e, i) {
                        let r = t.style || {},
                            n = {};
                        return ts(n, r, t), Object.assign(n, function({
                            transformTemplate: t
                        }, e, i) {
                            return (0, o.useMemo)(() => {
                                let r = tn();
                                return tr(r, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, r.vars, r.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(n) : n
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
            }
            let ta = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function tl(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ta.has(t)
            }
            let tu = t => !tl(t);
            try {
                (n = require("@emotion/is-prop-valid").default) && (tu = t => t.startsWith("on") ? !tl(t) : n(t))
            } catch (t) {}

            function th(t, e, i) {
                return "string" == typeof t ? t : Z.transform(e + i * t)
            }
            let tc = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                td = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tp(t, {
                attrX: e,
                attrY: i,
                attrScale: r,
                originX: n,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (tr(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = t;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== n || void 0 !== s || f.transform) && (f.transformOrigin = function(t, e, i) {
                    let r = th(e, t.x, t.width),
                        n = th(i, t.y, t.height);
                    return `${r} ${n}`
                }(m, void 0 !== n ? n : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== r && (p.scale = r), void 0 !== o && function(t, e, i = 1, r = 0, n = !0) {
                    t.pathLength = 1;
                    let s = n ? tc : td;
                    t[s.offset] = Z.transform(-r);
                    let o = Z.transform(e),
                        a = Z.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let tf = () => ({ ...tn(),
                    attrs: {}
                }),
                tm = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tg(t, e, i, r) {
                let n = (0, o.useMemo)(() => {
                    let i = tf();
                    return tp(i, e, {
                        enableHardwareAcceleration: !1
                    }, tm(r), t.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    ts(e, t.style, t), n.style = { ...e,
                        ...n.style
                    }
                }
                return n
            }
            let ty = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tv(t, {
                style: e,
                vars: i
            }, r, n) {
                for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(r)), i) t.style.setProperty(s, i[s])
            }
            let tx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tb(t, e, i, r) {
                for (let i in tv(t, e, void 0, r), e.attrs) t.setAttribute(tx.has(i) ? i : ty(i), e.attrs[i])
            }

            function tP(t, e) {
                let {
                    style: i
                } = t, r = {};
                for (let n in i)(k(i[n]) || e.style && k(e.style[n]) || j(n, t)) && (r[n] = i[n]);
                return r
            }

            function tw(t, e) {
                let i = tP(t, e);
                for (let r in t)
                    if (k(t[r]) || k(e[r])) {
                        let e = -1 !== V.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
                        i[e] = t[r]
                    }
                return i
            }

            function tT(t, e, i, r = {}, n = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), e
            }
            let tA = t => Array.isArray(t),
                tS = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tE = t => tA(t) ? t[t.length - 1] || 0 : t;

            function tM(t) {
                let e = k(t) ? t.get() : t;
                return tS(e) ? e.toValue() : e
            }
            let tC = t => (e, i) => {
                    let r = (0, o.useContext)(l),
                        n = (0, o.useContext)(u),
                        s = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, r, n, s) {
                            let o = {
                                latestValues: function(t, e, i, r) {
                                    let n = {},
                                        s = r(t, {});
                                    for (let t in s) n[t] = tM(s[t]);
                                    let {
                                        initial: o,
                                        animate: a
                                    } = t, l = v(t), u = x(t);
                                    e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                    let h = !!i && !1 === i.initial;
                                    h = h || !1 === o;
                                    let c = h ? a : o;
                                    if (c && "boolean" != typeof c && !m(c)) {
                                        let e = Array.isArray(c) ? c : [c];
                                        e.forEach(e => {
                                            let i = tT(t, e);
                                            if (!i) return;
                                            let {
                                                transitionEnd: r,
                                                transition: s,
                                                ...o
                                            } = i;
                                            for (let t in o) {
                                                let e = o[t];
                                                if (Array.isArray(e)) {
                                                    let t = h ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (n[t] = e)
                                            }
                                            for (let t in r) n[t] = r[t]
                                        })
                                    }
                                    return n
                                }(r, n, s, t),
                                renderState: e()
                            };
                            return i && (o.mount = t => i(r, t, o)), o
                        })(t, e, r, n);
                    return i ? s() : function(t) {
                        let e = (0, o.useRef)(null);
                        return null === e.current && (e.current = t()), e.current
                    }(s)
                },
                tV = {
                    useVisualState: tC({
                        scrapeMotionValuesFromProps: tw,
                        createRenderState: tf,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: r
                        }) => {
                            try {
                                i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                i.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tp(i, r, {
                                enableHardwareAcceleration: !1
                            }, tm(e.tagName), t.transformTemplate), tb(e, i)
                        }
                    })
                },
                tR = {
                    useVisualState: tC({
                        scrapeMotionValuesFromProps: tP,
                        createRenderState: tn
                    })
                };

            function tj(t, e, i, r = {
                passive: !0
            }) {
                return t.addEventListener(e, i, r), () => t.removeEventListener(e, i)
            }
            let tk = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tD(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let tL = t => e => tk(e) && t(e, tD(e));

            function tO(t, e, i, r) {
                return tj(t, e, tL(i), r)
            }
            let tF = (t, e) => i => e(t(i)),
                tI = (...t) => t.reduce(tF);

            function tB(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let t_ = tB("dragHorizontal"),
                tU = tB("dragVertical");

            function tN(t) {
                let e = !1;
                if ("y" === t) e = tU();
                else if ("x" === t) e = t_();
                else {
                    let t = t_(),
                        i = tU();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function t$() {
                let t = tN(!0);
                return !t || (t(), !1)
            }
            class tW {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            let tz = t => t,
                tH = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: tq,
                    cancel: tY,
                    state: tX,
                    steps: tG
                } = function(t, e) {
                    let i = !1,
                        r = !0,
                        n = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        s = tH.reduce((t, e) => (t[e] = function(t) {
                            let e = [],
                                i = [],
                                r = 0,
                                n = !1,
                                s = !1,
                                o = new WeakSet,
                                a = {
                                    schedule: (t, s = !1, a = !1) => {
                                        let l = a && n,
                                            u = l ? e : i;
                                        return s && o.add(t), -1 === u.indexOf(t) && (u.push(t), l && n && (r = e.length)), t
                                    },
                                    cancel: t => {
                                        let e = i.indexOf(t); - 1 !== e && i.splice(e, 1), o.delete(t)
                                    },
                                    process: l => {
                                        if (n) {
                                            s = !0;
                                            return
                                        }
                                        if (n = !0, [e, i] = [i, e], i.length = 0, r = e.length)
                                            for (let i = 0; i < r; i++) {
                                                let r = e[i];
                                                r(l), o.has(r) && (a.schedule(r), t())
                                            }
                                        n = !1, s && (s = !1, a.process(l))
                                    }
                                };
                            return a
                        }(() => i = !0), t), {}),
                        o = t => s[t].process(n),
                        a = s => {
                            i = !1, n.delta = r ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1), n.timestamp = s, n.isProcessing = !0, tH.forEach(o), n.isProcessing = !1, i && e && (r = !1, t(a))
                        },
                        l = () => {
                            i = !0, r = !0, n.isProcessing || t(a)
                        },
                        u = tH.reduce((t, e) => {
                            let r = s[e];
                            return t[e] = (t, e = !1, n = !1) => (i || l(), r.schedule(t, e, n)), t
                        }, {});
                    return {
                        schedule: u,
                        cancel: t => tH.forEach(e => s[e].cancel(t)),
                        state: n,
                        steps: s
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : tz, !0);

            function tK(t, e) {
                let i = "pointer" + (e ? "enter" : "leave"),
                    r = "onHover" + (e ? "Start" : "End");
                return tO(t.current, i, (i, n) => {
                    if ("touch" === i.type || t$()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[r] && tq.update(() => s[r](i, n))
                }, {
                    passive: !t.getProps()[r]
                })
            }
            let tZ = (t, e) => !!e && (t === e || tZ(t, e.parentElement));

            function tQ(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tD(i))
            }
            let tJ = new WeakMap,
                t0 = new WeakMap,
                t1 = t => {
                    let e = tJ.get(t.target);
                    e && e(t)
                },
                t5 = t => {
                    t.forEach(t1)
                },
                t2 = {
                    some: 0,
                    all: 1
                };

            function t3(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let r = 0; r < i; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function t6(t, e, i) {
                let r = t.getProps();
                return tT(r, e, void 0 !== i ? i : r.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
            let t9 = "data-" + ty("framerAppearId"),
                t4 = t => 1e3 * t,
                t8 = t => t / 1e3,
                t7 = {
                    current: !1
                },
                et = t => Array.isArray(t) && "number" == typeof t[0],
                ee = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
                ei = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: ee([0, .65, .55, 1]),
                    circOut: ee([.55, 0, 1, .45]),
                    backIn: ee([.31, .01, .66, -.59]),
                    backOut: ee([.33, 1.53, .69, .99])
                },
                er = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function en(t, e, i, r) {
                if (t === e && i === r) return tz;
                let n = e => (function(t, e, i, r, n) {
                    let s, o;
                    let a = 0;
                    do(s = er(o = e + (i - e) / 2, r, n) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : er(n(t), e, r)
            }
            let es = en(.42, 0, 1, 1),
                eo = en(0, 0, .58, 1),
                ea = en(.42, 0, .58, 1),
                el = t => Array.isArray(t) && "number" != typeof t[0],
                eu = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                eh = t => e => 1 - t(1 - e),
                ec = t => 1 - Math.sin(Math.acos(t)),
                ed = eh(ec),
                ep = eu(ed),
                ef = en(.33, 1.53, .69, .99),
                em = eh(ef),
                eg = eu(em),
                ey = {
                    linear: tz,
                    easeIn: es,
                    easeInOut: ea,
                    easeOut: eo,
                    circIn: ec,
                    circInOut: ep,
                    circOut: ed,
                    backIn: em,
                    backInOut: eg,
                    backOut: ef,
                    anticipate: t => (t *= 2) < 1 ? .5 * em(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                ev = t => {
                    if (Array.isArray(t)) {
                        tz(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, r, n] = t;
                        return en(e, i, r, n)
                    }
                    return "string" == typeof t ? (tz(void 0 !== ey[t], `Invalid easing type '${t}'`), ey[t]) : t
                },
                ex = (t, e) => i => !!(Y(i) && q.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                eb = (t, e, i) => r => {
                    if (!Y(r)) return r;
                    let [n, s, o, a] = r.match(z);
                    return {
                        [t]: parseFloat(n),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                eP = t => _(0, 255, t),
                ew = { ...U,
                    transform: t => Math.round(eP(t))
                },
                eT = {
                    test: ex("rgb", "red"),
                    parse: eb("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: r = 1
                    }) => "rgba(" + ew.transform(t) + ", " + ew.transform(e) + ", " + ew.transform(i) + ", " + W(N.transform(r)) + ")"
                },
                eA = {
                    test: ex("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            r = "",
                            n = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), r = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), r = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, r += r, n += n), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(r, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: eT.transform
                },
                eS = {
                    test: ex("hsl", "hue"),
                    parse: eb("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(t) + ", " + K.transform(W(e)) + ", " + K.transform(W(i)) + ", " + W(N.transform(r)) + ")"
                },
                eE = {
                    test: t => eT.test(t) || eA.test(t) || eS.test(t),
                    parse: t => eT.test(t) ? eT.parse(t) : eS.test(t) ? eS.parse(t) : eA.parse(t),
                    transform: t => Y(t) ? t : t.hasOwnProperty("red") ? eT.transform(t) : eS.transform(t)
                },
                eM = (t, e, i) => -i * t + i * e + t;

            function eC(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            let eV = (t, e, i) => {
                    let r = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - r) + r))
                },
                eR = [eA, eT, eS],
                ej = t => eR.find(e => e.test(t));

            function ek(t) {
                let e = ej(t);
                tz(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === eS && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: r
                }) {
                    t /= 360, i /= 100;
                    let n = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let r = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - r;
                        n = eC(a, r, t + 1 / 3), s = eC(a, r, t), o = eC(a, r, t - 1 / 3)
                    } else n = s = o = i;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: r
                    }
                }(i)), i
            }
            let eD = (t, e) => {
                    let i = ek(t),
                        r = ek(e),
                        n = { ...i
                        };
                    return t => (n.red = eV(i.red, r.red, t), n.green = eV(i.green, r.green, t), n.blue = eV(i.blue, r.blue, t), n.alpha = eM(i.alpha, r.alpha, t), eT.transform(n))
                },
                eL = {
                    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                    countKey: "Vars",
                    token: "${v}",
                    parse: tz
                },
                eO = {
                    regex: H,
                    countKey: "Colors",
                    token: "${c}",
                    parse: eE.parse
                },
                eF = {
                    regex: z,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: U.parse
                };

            function eI(t, {
                regex: e,
                countKey: i,
                token: r,
                parse: n
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, r), t.values.push(...s.map(n)))
            }

            function eB(t) {
                let e = t.toString(),
                    i = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return i.value.includes("var(--") && eI(i, eL), eI(i, eO), eI(i, eF), i
            }

            function e_(t) {
                return eB(t).values
            }

            function eU(t) {
                let {
                    values: e,
                    numColors: i,
                    numVars: r,
                    tokenised: n
                } = eB(t), s = e.length;
                return t => {
                    let e = n;
                    for (let n = 0; n < s; n++) e = n < r ? e.replace(eL.token, t[n]) : n < r + i ? e.replace(eO.token, eE.transform(t[n])) : e.replace(eF.token, W(t[n]));
                    return e
                }
            }
            let eN = t => "number" == typeof t ? 0 : t,
                e$ = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && Y(t) && ((null === (e = t.match(z)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(H)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: e_,
                    createTransformer: eU,
                    getAnimatableNone: function(t) {
                        let e = e_(t),
                            i = eU(t);
                        return i(e.map(eN))
                    }
                },
                eW = (t, e) => i => `${i>0?e:t}`;

            function ez(t, e) {
                return "number" == typeof t ? i => eM(t, e, i) : eE.test(t) ? eD(t, e) : t.startsWith("var(") ? eW(t, e) : eY(t, e)
            }
            let eH = (t, e) => {
                    let i = [...t],
                        r = i.length,
                        n = t.map((t, i) => ez(t, e[i]));
                    return t => {
                        for (let e = 0; e < r; e++) i[e] = n[e](t);
                        return i
                    }
                },
                eq = (t, e) => {
                    let i = { ...t,
                            ...e
                        },
                        r = {};
                    for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (r[n] = ez(t[n], e[n]));
                    return t => {
                        for (let e in r) i[e] = r[e](t);
                        return i
                    }
                },
                eY = (t, e) => {
                    let i = e$.createTransformer(e),
                        r = eB(t),
                        n = eB(e),
                        s = r.numVars === n.numVars && r.numColors === n.numColors && r.numNumbers >= n.numNumbers;
                    return s ? tI(eH(r.values, n.values), i) : (tz(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eW(t, e))
                },
                eX = (t, e, i) => {
                    let r = e - t;
                    return 0 === r ? 1 : (i - t) / r
                },
                eG = (t, e) => i => eM(t, e, i);

            function eK(t, e, {
                clamp: i = !0,
                ease: r,
                mixer: n
            } = {}) {
                let s = t.length;
                if (tz(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let o = function(t, e, i) {
                        let r = [],
                            n = i || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return eE.test(t) ? eD : eY;
                                else if (Array.isArray(t)) return eH;
                                else if ("object" == typeof t) return eq;
                                return eG
                            }(t[0]),
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = n(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || tz : e;
                                s = tI(t, s)
                            }
                            r.push(s)
                        }
                        return r
                    }(e, r, n),
                    a = o.length,
                    l = e => {
                        let i = 0;
                        if (a > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let r = eX(t[i], t[i + 1], e);
                        return o[i](r)
                    };
                return i ? e => l(_(t[0], t[s - 1], e)) : l
            }

            function eZ({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: r = "easeInOut"
            }) {
                let n = el(r) ? r.map(ev) : ev(r),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = (i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let r = 1; r <= e; r++) {
                                let n = eX(0, e, r);
                                t.push(eM(i, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t),
                    a = eK(o, e, {
                        ease: Array.isArray(n) ? n : e.map(() => n || ea).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }

            function eQ(t, e, i) {
                var r, n;
                let s = Math.max(e - 5, 0);
                return r = i - t(s), (n = e - s) ? r * (1e3 / n) : 0
            }

            function eJ(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let e0 = ["duration", "bounce"],
                e1 = ["stiffness", "damping", "mass"];

            function e5(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function e2({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...r
            }) {
                let n;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!e5(t, e1) && e5(t, e0)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: r = 1
                            }) {
                                let n, s;
                                tz(t <= t4(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = _(.05, 1, o), t = _(.01, 10, t8(t)), o < 1 ? (n = e => {
                                    let r = e * o,
                                        n = r * t,
                                        s = eJ(e, o);
                                    return .001 - (r - i) / s * Math.exp(-n)
                                }, s = e => {
                                    let r = e * o,
                                        s = r * t,
                                        a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        l = eJ(Math.pow(e, 2), o),
                                        u = -n(e) + .001 > 0 ? -1 : 1;
                                    return u * ((s * i + i - a) * Math.exp(-s)) / l
                                }) : (n = e => {
                                    let r = Math.exp(-e * t),
                                        n = (e - i) * t + 1;
                                    return -.001 + r * n
                                }, s = e => {
                                    let r = Math.exp(-e * t),
                                        n = (i - e) * (t * t);
                                    return r * n
                                });
                                let a = 5 / t,
                                    l = function(t, e, i) {
                                        let r = i;
                                        for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                                        return r
                                    }(n, s, a);
                                if (t = t4(t), isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(l, 2) * r;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(r * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(r),
                    f = c ? -t8(c) : 0,
                    m = u / (2 * Math.sqrt(l * h)),
                    g = o - s,
                    y = t8(Math.sqrt(l / h)),
                    v = 5 > Math.abs(g);
                if (i || (i = v ? .01 : 2), e || (e = v ? .005 : .5), m < 1) {
                    let t = eJ(y, m);
                    n = e => {
                        let i = Math.exp(-m * y * e);
                        return o - i * ((f + m * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                    }
                } else if (1 === m) n = t => o - Math.exp(-y * t) * (g + (f + y * g) * t);
                else {
                    let t = y * Math.sqrt(m * m - 1);
                    n = e => {
                        let i = Math.exp(-m * y * e),
                            r = Math.min(t * e, 300);
                        return o - i * ((f + m * y * g) * Math.sinh(r) + t * g * Math.cosh(r)) / t
                    }
                }
                return {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let r = n(t);
                        if (p) a.done = t >= d;
                        else {
                            let s = f;
                            0 !== t && (s = m < 1 ? eQ(n, t, r) : 0);
                            let l = Math.abs(s) <= i,
                                u = Math.abs(o - r) <= e;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : r, a
                    }
                }
            }

            function e3({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: r = 325,
                bounceDamping: n = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    y = i * e,
                    v = p + y,
                    x = void 0 === o ? v : o(v);
                x !== v && (y = x - p);
                let b = t => -y * Math.exp(-t / r),
                    P = t => x + b(t),
                    w = t => {
                        let e = b(t),
                            i = P(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? x : i
                    },
                    T = t => {
                        m(f.value) && (c = t, d = e2({
                            keyframes: [f.value, g(f.value)],
                            velocity: eQ(P, t, f.value),
                            damping: n,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return T(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), T(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), f)
                    }
                }
            }
            let e6 = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => tq.update(e, !0),
                    stop: () => tY(e),
                    now: () => tX.isProcessing ? tX.timestamp : performance.now()
                }
            };

            function e9(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let e4 = {
                decay: e3,
                inertia: e3,
                tween: eZ,
                keyframes: eZ,
                spring: e2
            };

            function e8({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = e6,
                keyframes: r,
                type: n = "keyframes",
                repeat: s = 0,
                repeatDelay: o = 0,
                repeatType: a = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let p, f, m, g, y, v = 1,
                    x = !1,
                    b = () => {
                        f = new Promise(t => {
                            p = t
                        })
                    };
                b();
                let P = e4[n] || eZ;
                P !== eZ && "number" != typeof r[0] && (g = eK([0, 100], r, {
                    clamp: !1
                }), r = [0, 100]);
                let w = P({ ...d,
                    keyframes: r
                });
                "mirror" === a && (y = P({ ...d,
                    keyframes: [...r].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let T = "idle",
                    A = null,
                    S = null,
                    E = null;
                null === w.calculatedDuration && s && (w.calculatedDuration = e9(w));
                let {
                    calculatedDuration: M
                } = w, C = 1 / 0, V = 1 / 0;
                null !== M && (V = (C = M + o) * (s + 1) - o);
                let R = 0,
                    j = t => {
                        if (null === S) return;
                        v > 0 && (S = Math.min(S, t)), v < 0 && (S = Math.min(t - V / v, S)), R = null !== A ? A : Math.round(t - S) * v;
                        let i = R - e * (v >= 0 ? 1 : -1),
                            n = v >= 0 ? i < 0 : i > V;
                        R = Math.max(i, 0), "finished" === T && null === A && (R = V);
                        let l = R,
                            u = w;
                        if (s) {
                            let t = R / C,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                            let r = !!(e % 2);
                            r && ("reverse" === a ? (i = 1 - i, o && (i -= o / C)) : "mirror" === a && (u = y));
                            let n = _(0, 1, i);
                            R > V && (n = "reverse" === a && r ? 1 : 0), l = n * C
                        }
                        let h = n ? {
                            done: !1,
                            value: r[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: d
                        } = h;
                        n || null === M || (d = v >= 0 ? R >= V : R <= 0);
                        let p = null === A && ("finished" === T || "running" === T && d);
                        return c && c(h.value), p && L(), h
                    },
                    k = () => {
                        m && m.stop(), m = void 0
                    },
                    D = () => {
                        T = "idle", k(), p(), b(), S = E = null
                    },
                    L = () => {
                        T = "finished", h && h(), k(), p()
                    },
                    O = () => {
                        if (x) return;
                        m || (m = i(j));
                        let t = m.now();
                        l && l(), null !== A ? S = t - A : S && "finished" !== T || (S = t), "finished" === T && b(), E = S, A = null, T = "running", m.start()
                    };
                t && O();
                let F = {
                    then: (t, e) => f.then(t, e),
                    get time() {
                        return t8(R)
                    },
                    set time(newTime) {
                        R = newTime = t4(newTime), null === A && m && 0 !== v ? S = m.now() - newTime / v : A = newTime
                    },
                    get duration() {
                        let t = null === w.calculatedDuration ? e9(w) : w.calculatedDuration;
                        return t8(t)
                    },
                    get speed() {
                        return v
                    },
                    set speed(newSpeed) {
                        if (newSpeed === v || !m) return;
                        v = newSpeed, F.time = t8(R)
                    },
                    get state() {
                        return T
                    },
                    play: O,
                    pause: () => {
                        T = "paused", A = R
                    },
                    stop: () => {
                        x = !0, "idle" !== T && (T = "idle", u && u(), D())
                    },
                    cancel: () => {
                        null !== E && j(E), D()
                    },
                    complete: () => {
                        T = "finished"
                    },
                    sample: t => (S = 0, j(t))
                };
                return F
            }
            let e7 = (s = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === r && (r = s()), r)),
                it = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                ie = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && ei[e] || et(e) || Array.isArray(e) && e.every(t))
                }(e.ease),
                ii = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                ir = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                is = {
                    type: "keyframes",
                    duration: .8
                },
                io = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ia = (t, {
                    keyframes: e
                }) => e.length > 2 ? is : R.has(t) ? t.startsWith("scale") ? ir(e[1]) : ii : io,
                il = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (e$.test(e) || "0" === e) && !e.startsWith("url(")),
                iu = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function ih(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [r] = i.match(z) || [];
                if (!r) return t;
                let n = i.replace(r, ""),
                    s = iu.has(e) ? 1 : 0;
                return r !== i && (s *= 100), e + "(" + s + n + ")"
            }
            let ic = /([a-z-]*)\(.*?\)/g,
                id = { ...e$,
                    getAnimatableNone: t => {
                        let e = t.match(ic);
                        return e ? e.map(ih).join(" ") : t
                    }
                },
                ip = { ...ti,
                    color: eE,
                    backgroundColor: eE,
                    outlineColor: eE,
                    fill: eE,
                    stroke: eE,
                    borderColor: eE,
                    borderTopColor: eE,
                    borderRightColor: eE,
                    borderBottomColor: eE,
                    borderLeftColor: eE,
                    filter: id,
                    WebkitFilter: id
                },
                im = t => ip[t];

            function ig(t, e) {
                let i = im(t);
                return i !== id && (i = e$), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let iy = t => /^0[^.\s]+$/.test(t);

            function iv(t, e) {
                return t[e] || t.default || t
            }
            let ix = (t, e, i, r = {}) => n => {
                let s = iv(r, t) || {},
                    o = s.delay || r.delay || 0,
                    {
                        elapsed: a = 0
                    } = r;
                a -= t4(o);
                let l = function(t, e, i, r) {
                        let n, s;
                        let o = il(e, i);
                        n = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== r.from ? r.from : t.get(),
                            l = [];
                        for (let t = 0; t < n.length; t++) {
                            var u;
                            null === n[t] && (n[t] = 0 === t ? a : n[t - 1]), ("number" == typeof(u = n[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || iy(u) : void 0) && l.push(t), "string" == typeof n[t] && "none" !== n[t] && "0" !== n[t] && (s = n[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) {
                                let i = l[t];
                                n[i] = ig(e, s)
                            }
                        return n
                    }(e, t, i, s),
                    u = l[0],
                    h = l[l.length - 1],
                    c = il(t, u),
                    d = il(t, h);
                tz(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let p = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t), s.onUpdate && s.onUpdate(t)
                    },
                    onComplete: () => {
                        n(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: r,
                        staggerDirection: n,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (p = { ...p,
                        ...ia(t, p)
                    }), p.duration && (p.duration = t4(p.duration)), p.repeatDelay && (p.repeatDelay = t4(p.repeatDelay)), !c || !d || t7.current || !1 === s.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: r
                }) {
                    let n = () => (i && i(t[t.length - 1]), r && r(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tz,
                        pause: tz,
                        stop: tz,
                        then: t => (t(), Promise.resolve()),
                        cancel: tz,
                        complete: tz
                    });
                    return e ? e8({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: n
                    }) : n()
                }(t7.current ? { ...p,
                    delay: 0
                } : p);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: r,
                        ...n
                    }) {
                        let s, o;
                        let a = e7() && it.has(e) && !n.repeatDelay && "mirror" !== n.repeatType && 0 !== n.damping && "inertia" !== n.type;
                        if (!a) return !1;
                        let l = !1,
                            u = () => {
                                o = new Promise(t => {
                                    s = t
                                })
                            };
                        u();
                        let {
                            keyframes: h,
                            duration: c = 300,
                            ease: d,
                            times: p
                        } = n;
                        if (ie(e, n)) {
                            let t = e8({ ...n,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: h[0]
                                },
                                i = [],
                                r = 0;
                            for (; !e.done && r < 2e4;) i.push((e = t.sample(r)).value), r += 10;
                            p = void 0, h = i, c = r - 10, d = "linear"
                        }
                        let f = function(t, e, i, {
                                delay: r = 0,
                                duration: n,
                                repeat: s = 0,
                                repeatType: o = "loop",
                                ease: a,
                                times: l
                            } = {}) {
                                let u = {
                                    [e]: i
                                };
                                l && (u.offset = l);
                                let h = function t(e) {
                                    if (e) return et(e) ? ee(e) : Array.isArray(e) ? e.map(t) : ei[e]
                                }(a);
                                return Array.isArray(h) && (u.easing = h), t.animate(u, {
                                    delay: r,
                                    duration: n,
                                    easing: Array.isArray(h) ? "linear" : h,
                                    fill: "both",
                                    iterations: s + 1,
                                    direction: "reverse" === o ? "alternate" : "normal"
                                })
                            }(t.owner.current, e, h, { ...n,
                                duration: c,
                                ease: d,
                                times: p
                            }),
                            m = () => f.cancel(),
                            g = () => {
                                tq.update(m), s(), u()
                            };
                        return f.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let r = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[r]
                            }(h, n)), r && r(), g()
                        }, {
                            then: (t, e) => o.then(t, e),
                            attachTimeline: t => (f.timeline = t, f.onfinish = null, tz),
                            get time() {
                                return t8(f.currentTime || 0)
                            },
                            set time(newTime) {
                                f.currentTime = t4(newTime)
                            },
                            get speed() {
                                return f.playbackRate
                            },
                            set speed(newSpeed) {
                                f.playbackRate = newSpeed
                            },
                            get duration() {
                                return t8(c)
                            },
                            play: () => {
                                l || (f.play(), tY(m))
                            },
                            pause: () => f.pause(),
                            stop: () => {
                                if (l = !0, "idle" === f.playState) return;
                                let {
                                    currentTime: e
                                } = f;
                                if (e) {
                                    let i = e8({ ...n,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                g()
                            },
                            complete: () => f.finish(),
                            cancel: g
                        }
                    }(e, t, p);
                    if (i) return i
                }
                return e8(p)
            };

            function ib(t) {
                return !!(k(t) && t.add)
            }
            let iP = t => /^\-?\d*\.?\d+$/.test(t);

            function iw(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function iT(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class iA {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return iw(this.subscriptions, t), () => iT(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](t, e, i);
                        else
                            for (let n = 0; n < r; n++) {
                                let r = this.subscriptions[n];
                                r && r(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let iS = t => !isNaN(parseFloat(t));
            class iE {
                constructor(t, e = {}) {
                    this.version = "10.15.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: i,
                            timestamp: r
                        } = tX;
                        this.lastUpdated !== r && (this.timeDelta = i, this.lastUpdated = r, tq.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => tq.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = iS(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new iA);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), tq.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function iM(t, e) {
                return new iE(t, e)
            }
            let iC = t => e => e.test(t),
                iV = [U, Z, K, G, J, Q, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                iR = t => iV.find(iC(t)),
                ij = [...iV, eE, e$],
                ik = t => ij.find(iC(t));

            function iD(t, e, {
                delay: i = 0,
                transitionOverride: r,
                type: n
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...a
                } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
                r && (s = r);
                let u = [],
                    h = n && t.animationState && t.animationState.getState()[n];
                for (let e in a) {
                    let r = t.getValue(e),
                        n = a[e];
                    if (!r || void 0 === n || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let r = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, r
                        }(h, e)) continue;
                    let o = {
                        delay: i,
                        elapsed: 0,
                        ...s
                    };
                    if (window.HandoffAppearAnimations && !r.hasAnimated) {
                        let i = t.getProps()[t9];
                        i && (o.elapsed = window.HandoffAppearAnimations(i, e, r, tq))
                    }
                    r.start(ix(e, r, n, t.shouldReduceMotion && R.has(e) ? {
                        type: !1
                    } : o));
                    let c = r.animation;
                    ib(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c)
                }
                return o && Promise.all(u).then(() => {
                    o && function(t, e) {
                        let i = t6(t, e),
                            {
                                transitionEnd: r = {},
                                transition: n = {},
                                ...s
                            } = i ? t.makeTargetAnimatable(i, !1) : {};
                        for (let e in s = { ...s,
                                ...r
                            }) {
                            let i = tE(s[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, iM(i))
                        }
                    }(t, o)
                }), u
            }

            function iL(t, e, i = {}) {
                let r = t6(t, e, i.custom),
                    {
                        transition: n = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (n = i.transitionOverride);
                let s = r ? () => Promise.all(iD(t, r, i)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = n;
                        return function(t, e, i = 0, r = 0, n = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * r,
                                l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                            return Array.from(t.variantChildren).sort(iO).forEach((t, r) => {
                                t.notify("AnimationStart", e), o.push(iL(t, e, { ...s,
                                    delay: i + l(r)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + r, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = n;
                if (!a) return Promise.all([s(), o(i.delay)]); {
                    let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                    return t().then(() => e())
                }
            }

            function iO(t, e) {
                return t.sortNodePosition(e)
            }
            let iF = [...g].reverse(),
                iI = g.length;

            function iB(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let i_ = 0,
                iU = (t, e) => Math.abs(t - e);
            class iN {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = iz(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = iU(t.x, e.x),
                                        r = iU(t.y, e.y);
                                    return Math.sqrt(i ** 2 + r ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: r
                            } = t, {
                                timestamp: n
                            } = tX;
                            this.history.push({ ...r,
                                timestamp: n
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = i$(e, this.transformPagePoint), tq.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: r
                            } = this.handlers, n = iz("pointercancel" === t.type ? this.lastMoveEventInfo : i$(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, n), r && r(t, n)
                        }, !tk(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let r = tD(t),
                        n = i$(r, this.transformPagePoint),
                        {
                            point: s
                        } = n,
                        {
                            timestamp: o
                        } = tX;
                    this.history = [{ ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, iz(n, this.history)), this.removeListeners = tI(tO(window, "pointermove", this.handlePointerMove), tO(window, "pointerup", this.handlePointerUp), tO(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), tY(this.updatePoint)
                }
            }

            function i$(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iW(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iz({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: iW(t, iH(e)),
                    offset: iW(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            r = null,
                            n = iH(t);
                        for (; i >= 0 && (r = t[i], !(n.timestamp - r.timestamp > t4(.1)));) i--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let s = t8(n.timestamp - r.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - r.x) / s,
                            y: (n.y - r.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function iH(t) {
                return t[t.length - 1]
            }

            function iq(t) {
                return t.max - t.min
            }

            function iY(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function iX(t, e, i, r = .5) {
                t.origin = r, t.originPoint = eM(e.min, e.max, t.origin), t.scale = iq(i) / iq(e), (iY(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eM(i.min, i.max, t.origin) - t.originPoint, (iY(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function iG(t, e, i, r) {
                iX(t.x, e.x, i.x, r ? r.originX : void 0), iX(t.y, e.y, i.y, r ? r.originY : void 0)
            }

            function iK(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + iq(e)
            }

            function iZ(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + iq(e)
            }

            function iQ(t, e, i) {
                iZ(t.x, e.x, i.x), iZ(t.y, e.y, i.y)
            }

            function iJ(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function i0(t, e) {
                let i = e.min - t.min,
                    r = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, r] = [r, i]), {
                    min: i,
                    max: r
                }
            }

            function i1(t, e, i) {
                return {
                    min: i5(t, e),
                    max: i5(t, i)
                }
            }

            function i5(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let i2 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                i3 = () => ({
                    x: i2(),
                    y: i2()
                }),
                i6 = () => ({
                    min: 0,
                    max: 0
                }),
                i9 = () => ({
                    x: i6(),
                    y: i6()
                });

            function i4(t) {
                return [t("x"), t("y")]
            }

            function i8({
                top: t,
                left: e,
                right: i,
                bottom: r
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: r
                    }
                }
            }

            function i7(t) {
                return void 0 === t || 1 === t
            }

            function rt({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !i7(t) || !i7(e) || !i7(i)
            }

            function re(t) {
                return rt(t) || ri(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function ri(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function rr(t, e, i, r, n) {
                return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e
            }

            function rn(t, e = 0, i = 1, r, n) {
                t.min = rr(t.min, e, i, r, n), t.max = rr(t.max, e, i, r, n)
            }

            function rs(t, {
                x: e,
                y: i
            }) {
                rn(t.x, e.translate, e.scale, e.originPoint), rn(t.y, i.translate, i.scale, i.originPoint)
            }

            function ro(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function ra(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function rl(t, e, [i, r, n]) {
                let s = void 0 !== e[n] ? e[n] : .5,
                    o = eM(t.min, t.max, s);
                rn(t, e[i], e[r], o, e.scale)
            }
            let ru = ["x", "scaleX", "originX"],
                rh = ["y", "scaleY", "originY"];

            function rc(t, e) {
                rl(t.x, e, ru), rl(t.y, e, rh)
            }

            function rd(t, e) {
                return i8(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let rp = new WeakMap;
            class rf {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = i9(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    i && !1 === i.isPresent || (this.panSession = new iN(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(tD(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: r,
                                onDragStart: n
                            } = this.getProps();
                            if (i && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tN(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), i4(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (K.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let r = i.layout.layoutBox[t];
                                        if (r) {
                                            let t = iq(r);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && tq.update(() => n(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: r,
                                onDirectionLock: n,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: r
                    } = e;
                    this.startAnimation(r);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && tq.update(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!i || !rm(t, r, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, r) {
                        return void 0 !== e && t < e ? t = r ? eM(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? eM(i, t, r.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), n.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, r = this.constraints;
                    t && p(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: r,
                        right: n
                    }) {
                        return {
                            x: iJ(t.x, i, n),
                            y: iJ(t.y, e, r)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: i1(t, "left", "right"),
                            y: i1(t, "top", "bottom")
                        }
                    }(e), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && i4(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !p(e)) return !1;
                    let r = e.current;
                    tz(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let s = function(t, e, i) {
                            let r = rd(t, i),
                                {
                                    scroll: n
                                } = e;
                            return n && (ra(r.x, n.offset.x), ra(r.y, n.offset.y)), r
                        }(r, n.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: i0((t = n.layout.layoutBox).x, s.x),
                            y: i0(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = i8(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: r,
                        dragTransition: n,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {}, l = i4(o => {
                        if (!rm(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    });
                    return Promise.all(l).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(ix(t, i, 0, e))
                }
                stopAnimation() {
                    i4(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        r = i[e];
                    return r || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    i4(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!rm(e, i, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (r && r.layout) {
                            let {
                                min: i,
                                max: s
                            } = r.layout.layoutBox[e];
                            n.set(t[e] - eM(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!p(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    i4(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            r[t] = function(t, e) {
                                let i = .5,
                                    r = iq(t),
                                    n = iq(e);
                                return n > r ? i = eX(e.min, e.max - r, t.min) : r > n && (i = eX(t.min, t.max - n, e.min)), _(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), i4(e => {
                        if (!rm(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: s
                            } = this.constraints[e];
                        i.set(eM(n, s, r[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    rp.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = tO(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            p(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", i);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), i();
                    let s = tj(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (i4(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        s(), e(), n(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: r = !1,
                            dragConstraints: n = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: r,
                        dragConstraints: n,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function rm(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let rg = t => (e, i) => {
                    t && tq.update(() => t(e, i))
                },
                ry = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function rv(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let rx = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!Z.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = rv(t, e.target.x),
                        r = rv(t, e.target.y);
                    return `${i}% ${r}%`
                }
            };
            class rb extends o.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: r
                    } = this.props, {
                        projection: n
                    } = t;
                    Object.assign(C, rw), n && (e.group && e.group.add(n), i && i.register && r && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({ ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ry.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: r,
                        isPresent: n
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = n, r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? s.promote() : s.relegate() || tq.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: r
                    } = t;
                    r && (r.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(r), i && i.deregister && i.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function rP(t) {
                let [e, i] = function() {
                    let t = (0, o.useContext)(u);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: r
                    } = t, n = (0, o.useId)();
                    return (0, o.useEffect)(() => r(n), []), !e && i ? [!1, () => i && i(n)] : [!0]
                }(), r = (0, o.useContext)(T);
                return o.createElement(rb, { ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0, o.useContext)(A),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let rw = {
                    borderRadius: { ...rx,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rx,
                    borderTopRightRadius: rx,
                    borderBottomLeftRadius: rx,
                    borderBottomRightRadius: rx,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let r = e$.parse(t);
                            if (r.length > 5) return t;
                            let n = e$.createTransformer(t),
                                s = "number" != typeof r[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            r[0 + s] /= o, r[1 + s] /= a;
                            let l = eM(o, a, .5);
                            return "number" == typeof r[2 + s] && (r[2 + s] /= l), "number" == typeof r[3 + s] && (r[3 + s] /= l), n(r)
                        }
                    }
                },
                rT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rA = rT.length,
                rS = t => "string" == typeof t ? parseFloat(t) : t,
                rE = t => "number" == typeof t || Z.test(t);

            function rM(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let rC = rR(0, .5, ed),
                rV = rR(.5, .95, tz);

            function rR(t, e, i) {
                return r => r < t ? 0 : r > e ? 1 : i(eX(t, e, r))
            }

            function rj(t, e) {
                t.min = e.min, t.max = e.max
            }

            function rk(t, e) {
                rj(t.x, e.x), rj(t.y, e.y)
            }

            function rD(t, e, i, r, n) {
                return t -= e, t = r + 1 / i * (t - r), void 0 !== n && (t = r + 1 / n * (t - r)), t
            }

            function rL(t, e, [i, r, n], s, o) {
                ! function(t, e = 0, i = 1, r = .5, n, s = t, o = t) {
                    if (K.test(e)) {
                        e = parseFloat(e);
                        let t = eM(o.min, o.max, e / 100);
                        e = t - o.min
                    }
                    if ("number" != typeof e) return;
                    let a = eM(s.min, s.max, r);
                    t === s && (a -= e), t.min = rD(t.min, e, i, a, n), t.max = rD(t.max, e, i, a, n)
                }(t, e[i], e[r], e[n], e.scale, s, o)
            }
            let rO = ["x", "scaleX", "originX"],
                rF = ["y", "scaleY", "originY"];

            function rI(t, e, i, r) {
                rL(t.x, e, rO, i ? i.x : void 0, r ? r.x : void 0), rL(t.y, e, rF, i ? i.y : void 0, r ? r.y : void 0)
            }

            function rB(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function r_(t) {
                return rB(t.x) && rB(t.y)
            }

            function rU(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function rN(t) {
                return iq(t.x) / iq(t.y)
            }
            class r$ {
                constructor() {
                    this.members = []
                }
                add(t) {
                    iw(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (iT(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = t.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rW(t, e, i) {
                let r = "",
                    n = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (r += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: n
                    } = i;
                    t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), n && (r += `rotateY(${n}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none"
            }
            let rz = (t, e) => t.depth - e.depth;
            class rH {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    iw(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    iT(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(rz), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let rq = ["", "X", "Y", "Z"],
                rY = 0,
                rX = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function rG({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: r,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = rY++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            rX.totalNodes = rX.resolvedTargetDeltas = rX.recalculatedProjection = 0, this.nodes.forEach(rQ), this.nodes.forEach(r6), this.nodes.forEach(r9), this.nodes.forEach(rJ), window.MotionDebug && window.MotionDebug.record(rX)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rH)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iA), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: n,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || r) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let r = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        r = ({
                                            timestamp: n
                                        }) => {
                                            let s = n - i;
                                            s >= e && (tY(r), t(s - e))
                                        };
                                    return tq.read(r, !0), () => tY(r)
                                }(r, 250), ry.hasAnimatedSinceResize && (ry.hasAnimatedSinceResize = !1, this.nodes.forEach(r3))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || n) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: r
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || s.getDefaultTransition() || ni,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !rU(this.targetLayout, r) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...iv(n, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || r3(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, tY(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(r4), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let r = this.getTransformTemplate();
                        this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(r1);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(r5), this.isUpdating = !1, this.nodes.forEach(r2), this.nodes.forEach(rK), this.nodes.forEach(rZ), this.clearAllSnapshots();
                        let e = performance.now();
                        tX.delta = _(0, 1e3 / 60, e - tX.timestamp), tX.timestamp = e, tX.isProcessing = !0, tG.update.process(tX), tG.preRender.process(tX), tG.render.process(tX), tX.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(r0), this.sharedNodes.forEach(r8)
                    }
                    scheduleUpdateProjection() {
                        tq.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tq.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = i9(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: r(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !r_(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            r = i ? i(this.latestValues, "") : void 0,
                            s = r !== this.prevTransformTemplateValue;
                        t && (e || re(this.latestValues) || s) && (n(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            r = this.removeElementScroll(i);
                        return t && (r = this.removeTransform(r)), ns((e = r).x), ns(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return i9();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (ra(e.x, i.offset.x), ra(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = i9();
                        rk(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i],
                                {
                                    scroll: n,
                                    options: s
                                } = r;
                            if (r !== this.root && n && s.layoutScroll) {
                                if (n.isRoot) {
                                    rk(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (ra(e.x, -i.offset.x), ra(e.y, -i.offset.y))
                                }
                                ra(e.x, n.offset.x), ra(e.y, n.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = i9();
                        rk(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            !e && r.options.layoutScroll && r.scroll && r !== r.root && rc(i, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), re(r.latestValues) && rc(i, r.latestValues)
                        }
                        return re(this.latestValues) && rc(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = i9();
                        rk(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !re(i.latestValues)) continue;
                            rt(i.latestValues) && i.updateSnapshot();
                            let r = i9(),
                                n = i.measurePageBox();
                            rk(r, n), rI(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                        }
                        return re(this.latestValues) && rI(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tX.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, r, n;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s,
                            a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (this.resolvedRelativeTargetAt = tX.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = i9(), this.relativeTargetOrigin = i9(), iQ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), rk(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = i9(), this.targetWithTransforms = i9()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, r = this.relativeTarget, n = this.relativeParent.target, iK(i.x, r.x, n.x), iK(i.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rk(this.target, this.layout.layoutBox), rs(this.target, this.targetDelta)) : rk(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = i9(), this.relativeTargetOrigin = i9(), iQ(this.relativeTargetOrigin, this.target, t.target), rk(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                rX.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || rt(this.parent.latestValues) || ri(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            r = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === tX.timestamp && (r = !1), r) return;
                        let {
                            layout: n,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || s)) return;
                        rk(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, r = !1) {
                            let n, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (n = i[a]).projectionDelta;
                                    let o = n.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && rc(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, rs(t, s)), r && re(n.latestValues) && rc(t, n.latestValues))
                                }
                                e.x = ro(e.x), e.y = ro(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = i3(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = i3(), this.projectionDeltaWithTransform = i3());
                        let u = this.projectionTransform;
                        iG(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = rW(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), rX.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let r = this.snapshot,
                            n = r ? r.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = i3();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = i9(),
                            l = r ? r.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            p = !!(h && !d && !0 === this.options.crossfade && !this.path.some(ne));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let r = e / 1e3;
                            if (r7(o.x, t.x, r), r7(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, f;
                                iQ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), c = this.relativeTarget, f = this.relativeTargetOrigin, nt(c.x, f.x, a.x, r), nt(c.y, f.y, a.y, r), i && (l = this.relativeTarget, u = i, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), i || (i = i9()), rk(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s, function(t, e, i, r, n, s) {
                                n ? (t.opacity = eM(0, void 0 !== i.opacity ? i.opacity : 1, rC(r)), t.opacityExit = eM(void 0 !== e.opacity ? e.opacity : 1, 0, rV(r))) : s && (t.opacity = eM(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                                for (let n = 0; n < rA; n++) {
                                    let s = `border${rT[n]}Radius`,
                                        o = rM(e, s),
                                        a = rM(i, s);
                                    if (void 0 === o && void 0 === a) continue;
                                    o || (o = 0), a || (a = 0);
                                    let l = 0 === o || 0 === a || rE(o) === rE(a);
                                    l ? (t[s] = Math.max(eM(rS(o), rS(a), r), 0), (K.test(a) || K.test(o)) && (t[s] += "%")) : t[s] = a
                                }(e.rotate || i.rotate) && (t.rotate = eM(e.rotate || 0, i.rotate || 0, r))
                            }(s, n, this.latestValues, r, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (tY(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tq.update(() => {
                            ry.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let r = k(t) ? t : iM(t);
                                return r.start(ix("", r, 1e3, i)), r.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: r,
                                latestValues: n
                            } = t;
                        if (e && i && r) {
                            if (this !== t && this.layout && r && no(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                i = this.target || i9();
                                let e = iq(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let r = iq(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + r
                            }
                            rk(e, i), rc(e, n), iG(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new r$);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let r = {};
                        for (let e = 0; e < rq.length; e++) {
                            let n = "rotate" + rq[e];
                            i[n] && (r[n] = i[n], t.setStaticValue(n, 0))
                        }
                        for (let e in t.render(), r) t.setStaticValue(e, r[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let n = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = tM(t.pointerEvents) || "", r.transform = n ? n(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tM(t.pointerEvents) || ""), this.hasProjected && !re(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = rW(this.projectionDeltaWithTransform, this.treeScale, o), n && (r.transform = n(o, r.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in r.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, C) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = C[t], n = "none" === r.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) r[i[e]] = n
                            } else r[t] = n
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? tM(t.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(r1), this.root.sharedNodes.clear()
                    }
                }
            }

            function rK(t) {
                t.updateLayout()
            }

            function rZ(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: r
                    } = t.layout, {
                        animationType: n
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === n ? i4(t => {
                        let r = s ? i.measuredBox[t] : i.layoutBox[t],
                            n = iq(r);
                        r.min = e[t].min, r.max = r.min + n
                    }) : no(n, i.layoutBox, e) && i4(r => {
                        let n = s ? i.measuredBox[r] : i.layoutBox[r],
                            o = iq(e[r]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                    });
                    let o = i3();
                    iG(o, e, i.layoutBox);
                    let a = i3();
                    s ? iG(a, t.applyTransform(r, !0), i.measuredBox) : iG(a, e, i.layoutBox);
                    let l = !r_(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let r = t.getClosestProjectingParent();
                        if (r && !r.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: s
                            } = r;
                            if (n && s) {
                                let o = i9();
                                iQ(o, i.layoutBox, n.layoutBox);
                                let a = i9();
                                iQ(a, e, s.layoutBox), rU(o, a) || (u = !0), r.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = r)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function rQ(t) {
                rX.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function rJ(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function r0(t) {
                t.clearSnapshot()
            }

            function r1(t) {
                t.clearMeasurements()
            }

            function r5(t) {
                t.isLayoutDirty = !1
            }

            function r2(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function r3(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function r6(t) {
                t.resolveTargetDelta()
            }

            function r9(t) {
                t.calcProjection()
            }

            function r4(t) {
                t.resetRotation()
            }

            function r8(t) {
                t.removeLeadSnapshot()
            }

            function r7(t, e, i) {
                t.translate = eM(e.translate, 0, i), t.scale = eM(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function nt(t, e, i, r) {
                t.min = eM(e.min, i.min, r), t.max = eM(e.max, i.max, r)
            }

            function ne(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let ni = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                nr = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                nn = nr("applewebkit/") && !nr("chrome/") ? Math.round : tz;

            function ns(t) {
                t.min = nn(t.min), t.max = nn(t.max)
            }

            function no(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !iY(rN(e), rN(i), .2)
            }
            let na = rG({
                    attachResizeListener: (t, e) => tj(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                nl = {
                    current: void 0
                },
                nu = rG({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!nl.current) {
                            let t = new na({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), nl.current = t
                        }
                        return nl.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                nh = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function nc(t, e, i = 1) {
                tz(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [r, n] = function(t) {
                    let e = nh.exec(t);
                    if (!e) return [, ];
                    let [, i, r] = e;
                    return [i, r]
                }(t);
                if (!r) return;
                let s = window.getComputedStyle(e).getPropertyValue(r);
                return s ? s.trim() : I(n) ? nc(n, e, i + 1) : n
            }
            let nd = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                np = t => nd.has(t),
                nf = t => Object.keys(t).some(np),
                nm = t => t === U || t === Z,
                ng = (t, e) => parseFloat(t.split(", ")[e]),
                ny = (t, e) => (i, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let n = r.match(/^matrix3d\((.+)\)$/);
                    if (n) return ng(n[1], e); {
                        let e = r.match(/^matrix\((.+)\)$/);
                        return e ? ng(e[1], t) : 0
                    }
                },
                nv = new Set(["x", "y", "z"]),
                nx = V.filter(t => !nv.has(t)),
                nb = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: ny(4, 13),
                    y: ny(5, 14)
                };
            nb.translateX = nb.x, nb.translateY = nb.y;
            let nP = (t, e, i) => {
                    let r = e.measureViewportBox(),
                        n = e.current,
                        s = getComputedStyle(n),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = nb[t](r, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let r = e.getValue(i);
                        r && r.jump(a[i]), t[i] = nb[i](l, s)
                    }), t
                },
                nw = (t, e, i = {}, r = {}) => {
                    e = { ...e
                    }, r = { ...r
                    };
                    let n = Object.keys(e).filter(np),
                        s = [],
                        o = !1,
                        a = [];
                    if (n.forEach(n => {
                            let l;
                            let u = t.getValue(n);
                            if (!t.hasValue(n)) return;
                            let h = i[n],
                                c = iR(h),
                                d = e[n];
                            if (tA(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                c = iR(h = d[e]);
                                for (let i = e; i < t && null !== d[i]; i++) l ? tz(iR(d[i]) === l, "All keyframes must be of the same type") : tz((l = iR(d[i])) === c || nm(c) && nm(l), "Keyframes must be of the same dimension as the current value")
                            } else l = iR(d);
                            if (c !== l) {
                                if (nm(c) && nm(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[n] = parseFloat(d) : Array.isArray(d) && l === Z && (e[n] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[n] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return nx.forEach(i => {
                                        let r = t.getValue(i);
                                        void 0 !== r && (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(n), r[n] = void 0 !== r[n] ? r[n] : e[n], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: r
                    }; {
                        let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            n = nP(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), h && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: n,
                            transitionEnd: r
                        }
                    }
                },
                nT = (t, e, i, r) => {
                    var n, s;
                    let o = function(t, { ...e
                    }, i) {
                        let r = t.current;
                        if (!(r instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let n in i && (i = { ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!I(e)) return;
                                let i = nc(e, r);
                                i && t.set(i)
                            }), e) {
                            let t = e[n];
                            if (!I(t)) continue;
                            let s = nc(t, r);
                            s && (e[n] = s, i || (i = {}), void 0 === i[n] && (i[n] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, r);
                    return e = o.target, r = o.transitionEnd, n = e, s = r, nf(n) ? nw(t, n, i, s) : {
                        target: n,
                        transitionEnd: s
                    }
                },
                nA = {
                    current: null
                },
                nS = {
                    current: !1
                },
                nE = new WeakMap,
                nM = Object.keys(w),
                nC = nM.length,
                nV = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                nR = y.length;
            class nj {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: r,
                    visualState: n
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tq.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = n;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = v(e), this.isVariantNode = x(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && k(e) && (e.set(o[t], !1), ib(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, nE.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), nS.current || function() {
                        if (nS.current = !0, h) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => nA.current = t.matches;
                                t.addListener(e), e()
                            } else nA.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nA.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in nE.delete(this.current), this.projection && this.projection.unmount(), tY(this.notifyUpdate), tY(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = R.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tq.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        n = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        r(), n()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, r, n) {
                    let s, o;
                    for (let t = 0; t < nC; t++) {
                        let i = nM[t],
                            {
                                isEnabled: r,
                                Feature: n,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = w[i];
                        a && (s = a), r(e) && (!this.features[i] && n && (this.features[i] = new n(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: r,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!r || o && p(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: n,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : i9()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < nV.length; e++) {
                        let i = nV[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let r = t["on" + i];
                        r && (this.propEventSubscriptions[i] = this.on(i, r))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: r
                        } = e;
                        for (let n in e) {
                            let s = e[n],
                                o = i[n];
                            if (k(s)) t.addValue(n, s), ib(r) && r.add(n);
                            else if (k(o)) t.addValue(n, iM(s, {
                                owner: t
                            })), ib(r) && r.remove(n);
                            else if (o !== s) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, iM(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let r in i) void 0 === e[r] && t.removeValue(r);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < nR; t++) {
                        let i = y[t],
                            r = this.props[i];
                        (f(r) || !1 === r) && (e[i] = r)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = iM(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, r = "string" == typeof i || "object" == typeof i ? null === (e = tT(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== r) return r;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || k(n) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new iA), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class nk extends nj {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: r
                }, n) {
                    let s = function(t, e, i) {
                        let r = {};
                        for (let n in t) {
                            let t = function(t, e) {
                                if (!e) return;
                                let i = e[t] || e.default || e;
                                return i.from
                            }(n, e);
                            if (void 0 !== t) r[n] = t;
                            else {
                                let t = i.getValue(n);
                                t && (r[n] = t.get())
                            }
                        }
                        return r
                    }(i, t || {}, this);
                    if (r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n) {
                        ! function(t, e, i) {
                            var r, n;
                            let s = Object.keys(e).filter(e => !t.hasValue(e)),
                                o = s.length;
                            if (o)
                                for (let a = 0; a < o; a++) {
                                    let o = s[a],
                                        l = e[o],
                                        u = null;
                                    Array.isArray(l) && (u = l[0]), null === u && (u = null !== (n = null !== (r = i[o]) && void 0 !== r ? r : t.readValue(o)) && void 0 !== n ? n : e[o]), null != u && ("string" == typeof u && (iP(u) || iy(u)) ? u = parseFloat(u) : !ik(u) && e$.test(l) && (u = ig(o, l)), t.addValue(o, iM(u, {
                                        owner: t
                                    })), void 0 === i[o] && (i[o] = u), null !== u && t.setBaseTarget(o, u))
                                }
                        }(this, i, s);
                        let t = nT(this, i, s, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class nD extends nk {
                readValueFromInstance(t, e) {
                    if (R.has(e)) {
                        let t = im(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            r = (F(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return rd(t, e)
                }
                build(t, e, i, r) {
                    tr(t, e, i, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tP(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    k(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, r) {
                    tv(t, e, i, r)
                }
            }
            class nL extends nk {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (R.has(e)) {
                        let t = im(e);
                        return t && t.default || 0
                    }
                    return e = tx.has(e) ? e : ty(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return i9()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tw(t, e)
                }
                build(t, e, i, r) {
                    tp(t, e, i, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(t, e, i, r) {
                    tb(t, e, i, r)
                }
                mount(t) {
                    this.isSVGTag = tm(t.tagName), super.mount(t)
                }
            }
            let nO = (t, e) => M(t) ? new nL(e, {
                    enableHardwareAcceleration: !1
                }) : new nD(e, {
                    enableHardwareAcceleration: !0
                }),
                nF = {
                    animation: {
                        Feature: class extends tW {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => (function(t, e, i = {}) {
                                            let r;
                                            if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                                let n = e.map(e => iL(t, e, i));
                                                r = Promise.all(n)
                                            } else if ("string" == typeof e) r = iL(t, e, i);
                                            else {
                                                let n = "function" == typeof e ? t6(t, e, i.custom) : e;
                                                r = Promise.all(iD(t, n, i))
                                            }
                                            return r.then(() => t.notify("AnimationComplete", e))
                                        })(t, e, i))),
                                        i = {
                                            animate: iB(!0),
                                            whileInView: iB(),
                                            whileHover: iB(),
                                            whileTap: iB(),
                                            whileDrag: iB(),
                                            whileFocus: iB(),
                                            exit: iB()
                                        },
                                        r = !0,
                                        n = (e, i) => {
                                            let r = t6(t, i);
                                            if (r) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: i,
                                                    ...n
                                                } = r;
                                                e = { ...e,
                                                    ...n,
                                                    ...i
                                                }
                                            }
                                            return e
                                        };

                                    function s(s, o) {
                                        let a = t.getProps(),
                                            l = t.getVariantContext(!0) || {},
                                            u = [],
                                            h = new Set,
                                            c = {},
                                            d = 1 / 0;
                                        for (let e = 0; e < iI; e++) {
                                            var p;
                                            let g = iF[e],
                                                y = i[g],
                                                v = void 0 !== a[g] ? a[g] : l[g],
                                                x = f(v),
                                                b = g === o ? y.isActive : null;
                                            !1 === b && (d = e);
                                            let P = v === l[g] && v !== a[g] && x;
                                            if (P && r && t.manuallyAnimateOnMount && (P = !1), y.protectedKeys = { ...c
                                                }, !y.isActive && null === b || !v && !y.prevProp || m(v) || "boolean" == typeof v) continue;
                                            let w = (p = y.prevProp, "string" == typeof v ? v !== p : !!Array.isArray(v) && !t3(v, p)),
                                                T = w || g === o && y.isActive && !P && x || e > d && x,
                                                A = Array.isArray(v) ? v : [v],
                                                S = A.reduce(n, {});
                                            !1 === b && (S = {});
                                            let {
                                                prevResolvedValues: E = {}
                                            } = y, M = { ...E,
                                                ...S
                                            }, C = t => {
                                                T = !0, h.delete(t), y.needsAnimating[t] = !0
                                            };
                                            for (let t in M) {
                                                let e = S[t],
                                                    i = E[t];
                                                c.hasOwnProperty(t) || (e !== i ? tA(e) && tA(i) ? !t3(e, i) || w ? C(t) : y.protectedKeys[t] = !0 : void 0 !== e ? C(t) : h.add(t) : void 0 !== e && h.has(t) ? C(t) : y.protectedKeys[t] = !0)
                                            }
                                            y.prevProp = v, y.prevResolvedValues = S, y.isActive && (c = { ...c,
                                                ...S
                                            }), r && t.blockInitialAnimation && (T = !1), T && !P && u.push(...A.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: g,
                                                    ...s
                                                }
                                            })))
                                        }
                                        if (h.size) {
                                            let e = {};
                                            h.forEach(i => {
                                                let r = t.getBaseTarget(i);
                                                void 0 !== r && (e[i] = r)
                                            }), u.push({
                                                animation: e
                                            })
                                        }
                                        let g = !!u.length;
                                        return r && !1 === a.initial && !t.manuallyAnimateOnMount && (g = !1), r = !1, g ? e(u) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: s,
                                        setActive: function(e, r, n) {
                                            var o;
                                            if (i[e].isActive === r) return Promise.resolve();
                                            null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
                                            }), i[e].isActive = r;
                                            let a = s(n, e);
                                            for (let t in i) i[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(i) {
                                            e = i(t)
                                        },
                                        getState: () => i
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), m(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends tW {
                            constructor() {
                                super(...arguments), this.id = i_++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: r
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === r) return;
                                let n = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && n.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends tW {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: r = "some",
                                    once: n
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof r ? r : t2[r]
                                };
                                return function(t, e, i) {
                                    let r = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        t0.has(i) || t0.set(i, {});
                                        let r = t0.get(i),
                                            n = JSON.stringify(e);
                                        return r[n] || (r[n] = new IntersectionObserver(t5, {
                                            root: t,
                                            ...e
                                        })), r[n]
                                    }(e);
                                    return tJ.set(t, i), r.observe(t), () => {
                                        tJ.delete(t), r.unobserve(t)
                                    }
                                }(this.node.current, s, t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: r
                                    } = this.node.getProps(), s = e ? i : r;
                                    s && s(t)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends tW {
                            constructor() {
                                super(...arguments), this.removeStartListeners = tz, this.removeEndListeners = tz, this.removeAccessibleListeners = tz, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        r = tO(window, "pointerup", (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: r
                                            } = this.node.getProps();
                                            tq.update(() => {
                                                tZ(this.node.current, t.target) ? i && i(t, e) : r && r(t, e)
                                            })
                                        }, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        n = tO(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = tI(r, n), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = tj(this.node.current, "keydown", t => {
                                            "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tj(this.node.current, "keyup", t => {
                                                "Enter" === t.key && this.checkPressEnd() && tQ("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && tq.update(() => i(t, e))
                                                })
                                            }), tQ("down", (t, e) => {
                                                this.startPress(t, e)
                                            }))
                                        }),
                                        e = tj(this.node.current, "blur", () => {
                                            this.isPressing && tQ("cancel", (t, e) => this.cancelPress(t, e))
                                        });
                                    this.removeAccessibleListeners = tI(t, e)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: r
                                } = this.node.getProps();
                                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tq.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !t$()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && tq.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = tO(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = tj(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tI(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends tW {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = tI(tj(this.node.current, "focus", () => this.onFocus()), tj(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends tW {
                            mount() {
                                this.unmount = tI(tK(this.node, !0), tK(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends tW {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = tz
                            }
                            onPointerDown(t) {
                                this.session = new iN(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: r
                                } = this.node.getProps();
                                return {
                                    onSessionStart: rg(t),
                                    onStart: rg(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, r && tq.update(() => r(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tO(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends tW {
                            constructor(t) {
                                super(t), this.removeGroupControls = tz, this.removeListeners = tz, this.controls = new rf(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tz
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: nu,
                        MeasureLayout: rP
                    },
                    layout: {
                        ProjectionNode: nu,
                        MeasureLayout: rP
                    }
                },
                nI = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: r,
                            Component: n
                        }) {
                            t && function(t) {
                                for (let e in t) w[e] = { ...w[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, o.forwardRef)(function(s, m) {
                                var g;
                                let y;
                                let x = { ...(0, o.useContext)(a),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, o.useContext)(T).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: P
                                    } = x,
                                    w = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (v(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || f(e) ? e : void 0,
                                                    animate: f(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, o.useContext)(l));
                                        return (0, o.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [b(e), b(i)])
                                    }(s),
                                    S = r(s, P);
                                if (!P && h) {
                                    w.visualElement = function(t, e, i, r) {
                                        let {
                                            visualElement: n
                                        } = (0, o.useContext)(l), s = (0, o.useContext)(d), h = (0, o.useContext)(u), p = (0, o.useContext)(a).reducedMotion, f = (0, o.useRef)();
                                        r = r || s.renderer, !f.current && r && (f.current = r(t, {
                                            visualState: e,
                                            parent: n,
                                            props: i,
                                            presenceContext: h,
                                            blockInitialAnimation: !!h && !1 === h.initial,
                                            reducedMotionConfig: p
                                        }));
                                        let m = f.current;
                                        (0, o.useInsertionEffect)(() => {
                                            m && m.update(i, h)
                                        }), c(() => {
                                            m && m.render()
                                        }), (0, o.useEffect)(() => {
                                            m && m.updateFeatures()
                                        });
                                        let g = window.HandoffAppearAnimations ? c : o.useEffect;
                                        return g(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), m
                                    }(n, S, x, e);
                                    let i = (0, o.useContext)(A),
                                        r = (0, o.useContext)(d).strict;
                                    w.visualElement && (y = w.visualElement.loadFeatures(x, r, t, i))
                                }
                                return o.createElement(l.Provider, {
                                    value: w
                                }, y && w.visualElement ? o.createElement(y, {
                                    visualElement: w.visualElement,
                                    ...x
                                }) : null, i(n, s, (g = w.visualElement, (0, o.useCallback)(t => {
                                    t && S.mount && S.mount(t), g && (t ? g.mount(t) : g.unmount()), m && ("function" == typeof m ? m(t) : p(m) && (m.current = t))
                                }, [g])), S, P, w.visualElement))
                            });
                            return s[S] = n, s
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, r) {
                    let n = M(t) ? tV : tR;
                    return { ...n,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, r, {
                                latestValues: n
                            }, s) => {
                                let a = M(e) ? tg : to,
                                    l = a(i, n, s, e),
                                    u = function(t, e, i) {
                                        let r = {};
                                        for (let n in t)("values" !== n || "object" != typeof t.values) && (tu(n) || !0 === i && tl(n) || !e && !tl(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
                                        return r
                                    }(i, "string" == typeof e, t),
                                    h = { ...u,
                                        ...l,
                                        ref: r
                                    },
                                    {
                                        children: c
                                    } = i,
                                    d = (0, o.useMemo)(() => k(c) ? c.get() : c, [c]);
                                return (0, o.createElement)(e, { ...h,
                                    children: d
                                })
                            }
                        }(e),
                        createVisualElement: r,
                        Component: t
                    }
                })(t, e, nF, nO))
        }
    }
]);
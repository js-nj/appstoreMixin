! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.BH_MOBILE = e() : t.BH_MOBILE = e()
}(this, function() {
	return function(t) {
		function e(r) {
			if (n[r]) return n[r].exports;
			var o = n[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.p = "", e(0)
	}([function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function o(t) {
			return new s.default(function(e, n) {
				t.signData ? e(t.signData) : t.url ? l.default.post(t.url, {
					url: window.location.href.replace(/#(\S+)?/, ""),
					corp: t.corp
				}).then(function(t) {
					var r = t.data;
					200 == r.status || "0" == r.code ? e(r.datas) : n(r)
				}, function(t) {
					n(t)
				}) : n("sdk初始化缺少signData或url")
			})
		}

		function i(t) {
			return new s.default(function(e, n) {
				t.signData ? e(t.signData) : t.url ? (0, l.default)({
					method: "POST",
					url: t.url,
					params: {
						newUrl: window.location.href.replace(/#(\S+)?/, "")
					}
				}).then(function(t) {
					var r = t.data;
					console.log("res------------"), console.log(r), 200 == r.status || "0" == r.code ? (console.log("resolve"), e(r.datas)) : n(r)
				}, function(t) {
					n(t)
				}) : n("sdk初始化缺少signData或url")
			})
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var c = n(74),
			u = r(c),
			a = n(18),
			s = r(a),
			f = n(16),
			l = r(f),
			p = n(72),
			d = r(p),
			h = n(65),
			v = r(h),
			m = n(67),
			g = r(m),
			y = n(70),
			w = r(y),
			b = n(68),
			x = r(b),
			_ = null;
		e.default = function(t, e) {
			return _ ? _ : (_ = function(t, e) {
				var n = function() {
						return /micromessenger/.test(navigator.userAgent.toLowerCase())
					},
					r = function() {
						return /dingtalk/.test(navigator.userAgent.toLowerCase())
					};
				if (n()) {
					if (e.wx) {
						var c = (0, u.default)(w.default, e.wx);
						o(c).then(function(e) {
							var n = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"];
							/iphone/.test(navigator.userAgent.toLowerCase()) && n.push("getLocalImgData"), (0, d.default)(t, {
								debug: !1,
								appId: e.corpId,
								timestamp: e.timestamp,
								nonceStr: e.nonceStr,
								signature: e.signature,
								jsApiList: n
							}, {
								emapPrefixPath: c.emapPrefixPath,
								uploadImgsToEmapUrl: c.uploadImgsToEmapUrl,
								corp: c.corp
							})
						})
					}
				} else if (r()) {
					if (e.dd) {
						var a = (0, u.default)(x.default, e.dd);
						i(a).then(function(e) {
							console.log("jsApiList");
							var n = ["biz.navigation.setTitle", "device.geolocation.get", "device.base.getUUID", "device.base.getInterface", "device.launcher.checkInstalledApps", "device.launcher.launchApp", "biz.util.open", "biz.contact.choose", "biz.contact.chooseMobileContacts", "biz.user.get", "biz.util.uploadImage", "biz.ding.post", "biz.telephone.call", "biz.telephone.showCallMenu", "biz.chat.chooseConversation", "biz.contact.createGroup", "biz.map.locate", "biz.map.search", "biz.map.view", "device.geolocation.openGps", "biz.util.uploadImageFromCamera", "biz.customContact.multipleChoose", "biz.customContact.choose", "biz.contact.complexPicker", "biz.contact.departmentsPicker", "biz.contact.setRule", "biz.contact.externalComplexPicker", "biz.contact.externalEditForm", "biz.chat.pickConversation", "biz.chat.chooseConversationByCorpId", "biz.chat.openSingleChat", "biz.chat.toConversation", "biz.cspace.saveFile", "biz.cspace.preview", "biz.cspace.chooseSpaceDir", "biz.util.uploadAttachment", "biz.clipboardData.setData", "biz.intent.fetchData", "biz.chat.locationChatMessage", "device.audio.startRecord", "device.audio.stopRecord", "device.audio.onRecordEnd", "device.audio.download", "device.audio.play", "device.audio.pause", "device.audio.resume", "device.audio.stop", "device.audio.onPlayEnd", "device.audio.translateVoice", "biz.util.fetchImageData", "biz.alipay.auth", "biz.alipay.pay", "device.nfc.nfcWrite", "biz.util.encrypt", "biz.util.decrypt", "runtime.permission.requestOperateAuthCode", "biz.util.scanCard", "util.domainStorage.getItem", "util.domainStorage.setItem", "util.domainStorage.removeItem", "runtime.info", "biz.contact.choose", "device.notification.confirm", "device.notification.alert", "device.notification.prompt", "biz.ding.post", "biz.util.openLink"];
							console.log("have jsApiList-------"), (0, g.default)(t, {
								agentId: e.agentId,
								corpId: e.corpId,
								timeStamp: e.timeStamp,
								nonceStr: e.nonceStr,
								signature: e.signature,
								jsApiList: n
							}, {
								emapPrefixPath: a.emapPrefixPath,
								accessToken: e.accessToken,
								uploadImgsToEmapUrl: a.uploadImgsToEmapUrl,
								corp: a.corp
							})
						})
					}
				} else(0, v.default)(t, e.https)
			})(t, e)
		}
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return "[object Array]" === T.call(t)
		}

		function o(t) {
			return "[object ArrayBuffer]" === T.call(t)
		}

		function i(t) {
			return "undefined" != typeof FormData && t instanceof FormData
		}

		function c(t) {
			var e;
			return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
		}

		function u(t) {
			return "string" == typeof t
		}

		function a(t) {
			return "number" == typeof t
		}

		function s(t) {
			return "undefined" == typeof t
		}

		function f(t) {
			return null !== t && "object" == typeof t
		}

		function l(t) {
			return "[object Date]" === T.call(t)
		}

		function p(t) {
			return "[object File]" === T.call(t)
		}

		function d(t) {
			return "[object Blob]" === T.call(t)
		}

		function h(t) {
			return "[object Function]" === T.call(t)
		}

		function v(t) {
			return f(t) && h(t.pipe)
		}

		function m(t) {
			return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
		}

		function g(t) {
			return t.replace(/^\s*/, "").replace(/\s*$/, "")
		}

		function y() {
			return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
		}

		function w(t, e) {
			if (null !== t && "undefined" != typeof t)
				if ("object" == typeof t || r(t) || (t = [t]), r(t))
					for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
				else
					for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
		}

		function b() {
			function t(t, n) {
				"object" == typeof e[n] && "object" == typeof t ? e[n] = b(e[n], t) : e[n] = t
			}
			for (var e = {}, n = 0, r = arguments.length; n < r; n++) w(arguments[n], t);
			return e
		}

		function x(t, e, n) {
			return w(e, function(e, r) {
				n && "function" == typeof e ? t[r] = _(e, n) : t[r] = e
			}), t
		}
		var _ = n(31),
			S = n(113),
			T = Object.prototype.toString;
		t.exports = {
			isArray: r,
			isArrayBuffer: o,
			isBuffer: S,
			isFormData: i,
			isArrayBufferView: c,
			isString: u,
			isNumber: a,
			isObject: f,
			isUndefined: s,
			isDate: l,
			isFile: p,
			isBlob: d,
			isFunction: h,
			isStream: v,
			isURLSearchParams: m,
			isStandardBrowserEnv: y,
			forEach: w,
			merge: b,
			extend: x,
			trim: g
		}
	}, function(t, e) {
		var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(t, e, n) {
		var r = n(42)("wks"),
			o = n(47),
			i = n(2).Symbol,
			c = "function" == typeof i,
			u = t.exports = function(t) {
				return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
			};
		u.store = r
	}, function(t, e) {
		var n = t.exports = {
			version: "2.5.1"
		};
		"number" == typeof __e && (__e = n)
	}, function(t, e, n) {
		var r = n(9);
		t.exports = function(t) {
			if (!r(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e, n) {
		var r = n(15),
			o = n(41);
		t.exports = n(7) ? function(t, e, n) {
			return r.f(t, e, o(1, n))
		} : function(t, e, n) {
			return t[e] = n, t
		}
	}, function(t, e, n) {
		t.exports = !n(21)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, n) {
		var r = n(2),
			o = n(4),
			i = n(13),
			c = n(6),
			u = "prototype",
			a = function(t, e, n) {
				var s, f, l, p = t & a.F,
					d = t & a.G,
					h = t & a.S,
					v = t & a.P,
					m = t & a.B,
					g = t & a.W,
					y = d ? o : o[e] || (o[e] = {}),
					w = y[u],
					b = d ? r : h ? r[e] : (r[e] || {})[u];
				d && (n = e);
				for (s in n) f = !p && b && void 0 !== b[s], f && s in y || (l = f ? b[s] : n[s], y[s] = d && "function" != typeof b[s] ? n[s] : m && f ? i(l, r) : g && b[s] == l ? function(t) {
					var e = function(e, n, r) {
						if (this instanceof t) {
							switch (arguments.length) {
								case 0:
									return new t;
								case 1:
									return new t(e);
								case 2:
									return new t(e, n)
							}
							return new t(e, n, r)
						}
						return t.apply(this, arguments)
					};
					return e[u] = t[u], e
				}(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((y.virtual || (y.virtual = {}))[s] = l, t & a.R && w && !w[s] && c(w, s, l)))
			};
		a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
	}, function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		}
	}, function(t, e) {
		t.exports = {}
	}, function(t, e) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e) {
		var n = {}.toString;
		t.exports = function(t) {
			return n.call(t).slice(8, -1)
		}
	}, function(t, e, n) {
		var r = n(11);
		t.exports = function(t, e, n) {
			if (r(t), void 0 === e) return t;
			switch (n) {
				case 1:
					return function(n) {
						return t.call(e, n)
					};
				case 2:
					return function(n, r) {
						return t.call(e, n, r)
					};
				case 3:
					return function(n, r, o) {
						return t.call(e, n, r, o)
					}
			}
			return function() {
				return t.apply(e, arguments)
			}
		}
	}, function(t, e) {
		var n = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return n.call(t, e)
		}
	}, function(t, e, n) {
		var r = n(5),
			o = n(83),
			i = n(103),
			c = Object.defineProperty;
		e.f = n(7) ? Object.defineProperty : function(t, e, n) {
			if (r(t), e = i(e, !0), r(n), o) try {
				return c(t, e, n)
			} catch (t) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (t[e] = n.value), t
		}
	}, function(t, e, n) {
		t.exports = n(48)
	}, function(t, e, n) {
		(function(e) {
			"use strict";

			function r(t, e) {
				!i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
			}

			function o() {
				var t;
				return "undefined" != typeof XMLHttpRequest ? t = n(27) : "undefined" != typeof e && (t = n(27)), t
			}
			var i = n(1),
				c = n(62),
				u = {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				a = {
					adapter: o(),
					transformRequest: [function(t, e) {
						return c(e, "Content-Type"), i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) ? t : i.isArrayBufferView(t) ? t.buffer : i.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : i.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
					}],
					transformResponse: [function(t) {
						if ("string" == typeof t) try {
							t = JSON.parse(t)
						} catch (t) {}
						return t
					}],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function(t) {
						return t >= 200 && t < 300
					}
				};
			a.headers = {
				common: {
					Accept: "application/json, text/plain, */*"
				}
			}, i.forEach(["delete", "get", "head"], function(t) {
				a.headers[t] = {}
			}), i.forEach(["post", "put", "patch"], function(t) {
				a.headers[t] = i.merge(u)
			}), t.exports = a
		}).call(e, n(114))
	}, function(t, e, n) {
		t.exports = {
			default: n(78),
			__esModule: !0
		}
	}, function(t, e) {
		t.exports = function(t) {
			if (void 0 == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, e, n) {
		var r = n(9),
			o = n(2).document,
			i = r(o) && r(o.createElement);
		t.exports = function(t) {
			return i ? o.createElement(t) : {}
		}
	}, function(t, e) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e, n;
			this.promise = new t(function(t, r) {
				if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
				e = t, n = r
			}), this.resolve = o(e), this.reject = o(n)
		}
		var o = n(11);
		t.exports.f = function(t) {
			return new r(t)
		}
	}, function(t, e, n) {
		var r = n(15).f,
			o = n(14),
			i = n(3)("toStringTag");
		t.exports = function(t, e, n) {
			t && !o(t = n ? t : t.prototype, i) && r(t, i, {
				configurable: !0,
				value: e
			})
		}
	}, function(t, e, n) {
		var r = n(42)("keys"),
			o = n(47);
		t.exports = function(t) {
			return r[t] || (r[t] = o(t))
		}
	}, function(t, e) {
		var n = Math.ceil,
			r = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
		}
	}, function(t, e, n) {
		var r = n(35),
			o = n(19);
		t.exports = function(t) {
			return r(o(t))
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1),
			o = n(54),
			i = n(57),
			c = n(63),
			u = n(61),
			a = n(30),
			s = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(56);
		t.exports = function(t) {
			return new Promise(function(e, f) {
				var l = t.data,
					p = t.headers;
				r.isFormData(l) && delete p["Content-Type"];
				var d = new XMLHttpRequest,
					h = "onreadystatechange",
					v = !1;
				if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || u(t.url) || (d = new window.XDomainRequest, h = "onload", v = !0, d.onprogress = function() {}, d.ontimeout = function() {}), t.auth) {
					var m = t.auth.username || "",
						g = t.auth.password || "";
					p.Authorization = "Basic " + s(m + ":" + g)
				}
				if (d.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[h] = function() {
						if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
							var n = "getAllResponseHeaders" in d ? c(d.getAllResponseHeaders()) : null,
								r = t.responseType && "text" !== t.responseType ? d.response : d.responseText,
								i = {
									data: r,
									status: 1223 === d.status ? 204 : d.status,
									statusText: 1223 === d.status ? "No Content" : d.statusText,
									headers: n,
									config: t,
									request: d
								};
							o(e, f, i), d = null
						}
					}, d.onerror = function() {
						f(a("Network Error", t, null, d)), d = null
					}, d.ontimeout = function() {
						f(a("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)), d = null
					}, r.isStandardBrowserEnv()) {
					var y = n(59),
						w = (t.withCredentials || u(t.url)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0;
					w && (p[t.xsrfHeaderName] = w)
				}
				if ("setRequestHeader" in d && r.forEach(p, function(t, e) {
						"undefined" == typeof l && "content-type" === e.toLowerCase() ? delete p[e] : d.setRequestHeader(e, t)
					}), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
					d.responseType = t.responseType
				} catch (e) {
					if ("json" !== t.responseType) throw e
				}
				"function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) {
					d && (d.abort(), f(t), d = null)
				}), void 0 === l && (l = null), d.send(l)
			})
		}
	}, function(t, e) {
		"use strict";

		function n(t) {
			this.message = t
		}
		n.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, n.prototype.__CANCEL__ = !0, t.exports = n
	}, function(t, e) {
		"use strict";
		t.exports = function(t) {
			return !(!t || !t.__CANCEL__)
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(53);
		t.exports = function(t, e, n, o, i) {
			var c = new Error(t);
			return r(c, e, n, o, i)
		}
	}, function(t, e) {
		"use strict";
		t.exports = function(t, e) {
			return function() {
				for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
				return t.apply(e, n)
			}
		}
	}, function(t, e, n) {
		var r = n(12),
			o = n(3)("toStringTag"),
			i = "Arguments" == r(function() {
				return arguments
			}()),
			c = function(t, e) {
				try {
					return t[e]
				} catch (t) {}
			};
		t.exports = function(t) {
			var e, n, u;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = c(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
		}
	}, function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, e, n) {
		var r = n(2).document;
		t.exports = r && r.documentElement
	}, function(t, e, n) {
		var r = n(12);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == r(t) ? t.split("") : Object(t)
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(37),
			o = n(8),
			i = n(99),
			c = n(6),
			u = n(14),
			a = n(10),
			s = n(87),
			f = n(23),
			l = n(95),
			p = n(3)("iterator"),
			d = !([].keys && "next" in [].keys()),
			h = "@@iterator",
			v = "keys",
			m = "values",
			g = function() {
				return this
			};
		t.exports = function(t, e, n, y, w, b, x) {
			s(n, e, y);
			var _, S, T, P = function(t) {
					if (!d && t in C) return C[t];
					switch (t) {
						case v:
							return function() {
								return new n(this, t)
							};
						case m:
							return function() {
								return new n(this, t)
							}
					}
					return function() {
						return new n(this, t)
					}
				},
				j = e + " Iterator",
				O = w == m,
				I = !1,
				C = t.prototype,
				E = C[p] || C[h] || w && C[w],
				M = E || P(w),
				L = w ? O ? P("entries") : M : void 0,
				k = "Array" == e ? C.entries || E : E;
			if (k && (T = l(k.call(new t)), T !== Object.prototype && T.next && (f(T, j, !0), r || u(T, p) || c(T, p, g))), O && E && E.name !== m && (I = !0, M = function() {
					return E.call(this)
				}), r && !x || !d && !I && C[p] || c(C, p, M), a[e] = M, a[j] = g, w)
				if (_ = {
						values: O ? M : P(m),
						keys: b ? M : P(v),
						entries: L
					}, x)
					for (S in _) S in C || i(C, S, _[S]);
				else o(o.P + o.F * (d || I), e, _);
			return _
		}
	}, function(t, e) {
		t.exports = !0
	}, function(t, e, n) {
		var r = n(96),
			o = n(33);
		t.exports = Object.keys || function(t) {
			return r(t, o)
		}
	}, function(t, e) {
		t.exports = function(t) {
			try {
				return {
					e: !1,
					v: t()
				}
			} catch (t) {
				return {
					e: !0,
					v: t
				}
			}
		}
	}, function(t, e, n) {
		var r = n(5),
			o = n(9),
			i = n(22);
		t.exports = function(t, e) {
			if (r(t), o(e) && e.constructor === t) return e;
			var n = i.f(t),
				c = n.resolve;
			return c(e), n.promise
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t, e, n) {
		var r = n(2),
			o = "__core-js_shared__",
			i = r[o] || (r[o] = {});
		t.exports = function(t) {
			return i[t] || (i[t] = {})
		}
	}, function(t, e, n) {
		var r = n(5),
			o = n(11),
			i = n(3)("species");
		t.exports = function(t, e) {
			var n, c = r(t).constructor;
			return void 0 === c || void 0 == (n = r(c)[i]) ? e : o(n)
		}
	}, function(t, e, n) {
		var r, o, i, c = n(13),
			u = n(84),
			a = n(34),
			s = n(20),
			f = n(2),
			l = f.process,
			p = f.setImmediate,
			d = f.clearImmediate,
			h = f.MessageChannel,
			v = f.Dispatch,
			m = 0,
			g = {},
			y = "onreadystatechange",
			w = function() {
				var t = +this;
				if (g.hasOwnProperty(t)) {
					var e = g[t];
					delete g[t], e()
				}
			},
			b = function(t) {
				w.call(t.data)
			};
		p && d || (p = function(t) {
			for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
			return g[++m] = function() {
				u("function" == typeof t ? t : Function(t), e)
			}, r(m), m
		}, d = function(t) {
			delete g[t]
		}, "process" == n(12)(l) ? r = function(t) {
			l.nextTick(c(w, t, 1))
		} : v && v.now ? r = function(t) {
			v.now(c(w, t, 1))
		} : h ? (o = new h, i = o.port2, o.port1.onmessage = b, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
			f.postMessage(t + "", "*")
		}, f.addEventListener("message", b, !1)) : r = y in s("script") ? function(t) {
			a.appendChild(s("script"))[y] = function() {
				a.removeChild(this), w.call(t)
			}
		} : function(t) {
			setTimeout(c(w, t, 1), 0)
		}), t.exports = {
			set: p,
			clear: d
		}
	}, function(t, e, n) {
		var r = n(25),
			o = Math.min;
		t.exports = function(t) {
			return t > 0 ? o(r(t), 9007199254740991) : 0
		}
	}, function(t, e, n) {
		var r = n(19);
		t.exports = function(t) {
			return Object(r(t))
		}
	}, function(t, e) {
		var n = 0,
			r = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
		}
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = new c(t),
				n = i(c.prototype.request, e);
			return o.extend(n, c.prototype, e), o.extend(n, e), n
		}
		var o = n(1),
			i = n(31),
			c = n(50),
			u = n(17),
			a = r(u);
		a.Axios = c, a.create = function(t) {
			return r(o.merge(u, t))
		}, a.Cancel = n(28), a.CancelToken = n(49), a.isCancel = n(29), a.all = function(t) {
			return Promise.all(t)
		}, a.spread = n(64), t.exports = a, t.exports.default = a
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if ("function" != typeof t) throw new TypeError("executor must be a function.");
			var e;
			this.promise = new Promise(function(t) {
				e = t
			});
			var n = this;
			t(function(t) {
				n.reason || (n.reason = new o(t), e(n.reason))
			})
		}
		var o = n(28);
		r.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		}, r.source = function() {
			var t, e = new r(function(e) {
				t = e
			});
			return {
				token: e,
				cancel: t
			}
		}, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			this.defaults = t, this.interceptors = {
				request: new c,
				response: new c
			}
		}
		var o = n(17),
			i = n(1),
			c = n(51),
			u = n(52),
			a = n(60),
			s = n(58);
		r.prototype.request = function(t) {
			"string" == typeof t && (t = i.merge({
				url: arguments[0]
			}, arguments[1])), t = i.merge(o, this.defaults, {
				method: "get"
			}, t), t.method = t.method.toLowerCase(), t.baseURL && !a(t.url) && (t.url = s(t.baseURL, t.url));
			var e = [u, void 0],
				n = Promise.resolve(t);
			for (this.interceptors.request.forEach(function(t) {
					e.unshift(t.fulfilled, t.rejected)
				}), this.interceptors.response.forEach(function(t) {
					e.push(t.fulfilled, t.rejected)
				}); e.length;) n = n.then(e.shift(), e.shift());
			return n
		}, i.forEach(["delete", "get", "head", "options"], function(t) {
			r.prototype[t] = function(e, n) {
				return this.request(i.merge(n || {}, {
					method: t,
					url: e
				}))
			}
		}), i.forEach(["post", "put", "patch"], function(t) {
			r.prototype[t] = function(e, n, r) {
				return this.request(i.merge(r || {}, {
					method: t,
					url: e,
					data: n
				}))
			}
		}), t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			this.handlers = []
		}
		var o = n(1);
		r.prototype.use = function(t, e) {
			return this.handlers.push({
				fulfilled: t,
				rejected: e
			}), this.handlers.length - 1
		}, r.prototype.eject = function(t) {
			this.handlers[t] && (this.handlers[t] = null)
		}, r.prototype.forEach = function(t) {
			o.forEach(this.handlers, function(e) {
				null !== e && t(e)
			})
		}, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			t.cancelToken && t.cancelToken.throwIfRequested()
		}
		var o = n(1),
			i = n(55),
			c = n(29),
			u = n(17);
		t.exports = function(t) {
			r(t), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = o.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
				delete t.headers[e]
			});
			var e = t.adapter || u.adapter;
			return e(t).then(function(e) {
				return r(t), e.data = i(e.data, e.headers, t.transformResponse), e
			}, function(e) {
				return c(e) || (r(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
			})
		}
	}, function(t, e) {
		"use strict";
		t.exports = function(t, e, n, r, o) {
			return t.config = e, n && (t.code = n), t.request = r, t.response = o, t
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(30);
		t.exports = function(t, e, n) {
			var o = n.config.validateStatus;
			n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1);
		t.exports = function(t, e, n) {
			return r.forEach(n, function(n) {
				t = n(t, e)
			}), t
		}
	}, function(t, e) {
		"use strict";

		function n() {
			this.message = "String contains an invalid character"
		}

		function r(t) {
			for (var e, r, i = String(t), c = "", u = 0, a = o; i.charAt(0 | u) || (a = "=", u % 1); c += a.charAt(63 & e >> 8 - u % 1 * 8)) {
				if (r = i.charCodeAt(u += .75), r > 255) throw new n;
				e = e << 8 | r
			}
			return c
		}
		var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		var o = n(1);
		t.exports = function(t, e, n) {
			if (!e) return t;
			var i;
			if (n) i = n(e);
			else if (o.isURLSearchParams(e)) i = e.toString();
			else {
				var c = [];
				o.forEach(e, function(t, e) {
					null !== t && "undefined" != typeof t && (o.isArray(t) && (e += "[]"), o.isArray(t) || (t = [t]), o.forEach(t, function(t) {
						o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), c.push(r(e) + "=" + r(t))
					}))
				}), i = c.join("&")
			}
			return i && (t += (t.indexOf("?") === -1 ? "?" : "&") + i), t
		}
	}, function(t, e) {
		"use strict";
		t.exports = function(t, e) {
			return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1);
		t.exports = r.isStandardBrowserEnv() ? function() {
			return {
				write: function(t, e, n, o, i, c) {
					var u = [];
					u.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), c === !0 && u.push("secure"), document.cookie = u.join("; ")
				},
				read: function(t) {
					var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
					return e ? decodeURIComponent(e[3]) : null
				},
				remove: function(t) {
					this.write(t, "", Date.now() - 864e5)
				}
			}
		}() : function() {
			return {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		}()
	}, function(t, e) {
		"use strict";
		t.exports = function(t) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1);
		t.exports = r.isStandardBrowserEnv() ? function() {
			function t(t) {
				var e = t;
				return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), {
					href: o.href,
					protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
					host: o.host,
					search: o.search ? o.search.replace(/^\?/, "") : "",
					hash: o.hash ? o.hash.replace(/^#/, "") : "",
					hostname: o.hostname,
					port: o.port,
					pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
				}
			}
			var e, n = /(msie|trident)/i.test(navigator.userAgent),
				o = document.createElement("a");
			return e = t(window.location.href),
				function(n) {
					var o = r.isString(n) ? t(n) : n;
					return o.protocol === e.protocol && o.host === e.host
				}
		}() : function() {
			return function() {
				return !0
			}
		}()
	}, function(t, e, n) {
		"use strict";
		var r = n(1);
		t.exports = function(t, e) {
			r.forEach(t, function(n, r) {
				r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
			})
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1);
		t.exports = function(t) {
			var e, n, o, i = {};
			return t ? (r.forEach(t.split("\n"), function(t) {
				o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
			}), i) : i
		}
	}, function(t, e) {
		"use strict";
		t.exports = function(t) {
			return function(e) {
				return t.apply(null, e)
			}
		}
	}, function(t, e, n) {
		(function(t) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = function(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				(0, o.init)(function() {
					if (t.BH_MOBILE_SDK) {
						var n = BH_MOBILE_SDK,
							r = {};
						(0, c.default)(n, r), t.BH_MIXIN_SDK = r, e({
							type: "success",
							sdk: r
						})
					} else e({
						type: "error",
						result: ""
					})
				}, n.https)
			};
			var o = n(75),
				i = n(66),
				c = r(i)
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		"use strict";

		function n(t, e) {
			e.bh = t, e.takeCamera = function() {
				var e, n = arguments,
					o = !1;
				return "boolean" === r(n[0]) && (o = n[0], "function" === r(n[1]) && (e = n[1])), "function" === r(n[0]) && (e = n[0]), t.systemAbility.takeCamera(function(t) {
					e && e(t)
				})
			}, e.takePhoto = function() {
				var e, n = arguments;
				"function" === r(n[0]) && (e = n[0]);
				var o = 1;
				return "number" === r(n[1]) && (o = n[1]), t.systemAbility.takePhoto(function(t) {
					e && e(t)
				}, o)
			}, e.preViewImages = function() {
				return t.UI.preViewImages.apply(t.UI, arguments)
			}, e.closeWebView = function() {
				return t.UI.closeWebView()
			}, e.scan = function() {
				return t.qrcode.scan.apply(t.qrcode, arguments)
			}, e.uploadImgsToEmap = function(e) {
				return t.wisedu.uploadToEMAP(e.host, e.urls, e.config || {})
			}, e.setTitleText = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return t.UI.setTitleText(e)
			}, e.getCurrentPosition = function() {
				t.geolocation.getCurrentPosition.apply(t.geolocation, arguments)
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function(t) {
			var e = Object.prototype.toString.call(t).toLocaleLowerCase().replace("[object ", "").replace("]", "");
			return "object" === e && t && t.hasOwnProperty("length") ? "array" : e
		};
		e.default = n
	}, function(t, e, n) {
		(function(t) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(73),
				i = r(o),
				c = n(69),
				u = r(c);
			e.default = function(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					o = "https://g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js",
					c = document.createElement("script");
				c.src = o, document.head.appendChild(c), console.log("append------------------"), c.onload = function() {
					console.log("function config-------------"), console.log(n), dd.config(n), dd.ready(function() {
						console.log("ready-start---------");
						var n = {};
						(0, u.default)(dd, n, r), t.BH_MIXIN_SDK = n, e({
							type: "success",
							sdk: n
						})
					}), dd.error(function(t) {
						alert("dd error: " + (0, i.default)(t))
					})
				}
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			url: "",
			corp: "",
			emapPrefixPath: "",
			uploadImgsToEmapUrl: ""
		}
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function o(t, e, n) {
			console.log("dd config", n), e.dd = t, e.takeCamera = function() {
				var e, n = arguments;
				console.log("拍照"), "boolean" === s(n[0]) && "function" === s(n[1]) && (e = n[1]), "function" === s(n[0]) && (e = n[0]);
				var r = ["original", "compressed"];
				"array" === s(n[1]) && (e = n[1]), "array" === s(n[2]) && (r = n[2]), t.biz.util.uploadImageFromCamera({
					compression: !0,
					onSuccess: function(t) {
						e && e({
							base64: t.localIds[0],
							url: t.localIds[0]
						})
					},
					onFail: function(t) {}
				})
			}, e.takePhoto = function() {
				var e, n = arguments;
				console.log("选择图片"), "function" === s(n[0]) && (e = n[0]);
				var r = 1;
				"number" === s(n[1]) && (r = n[1]);
				var o = ["original", "compressed"];
				"array" === s(n[1]) && (o = n[1]), "array" === s(n[2]) && (o = n[2]), console.log("limit:" + r), t.biz.util.uploadImage({
					multiple: !1,
					max: r,
					onSuccess: function(t) {
						console.log("res"), console.log(t);
						var n = [],
							r = function() {
								console.log("cb-------"), console.log(n), n.length > 1 ? e && e(n) : e && e(n[0])
							};
						n = t.map(function(t) {
							return {
								base64: t,
								url: t
							}
						}), console.log("cb  ---strat"), r()
					},
					onFail: function(t) {}
				})
			}, e.preViewImages = function() {
				var e = arguments,
					n = [];
				"array" === s(e[0]) && (n = e[0]);
				var r = 0;
				if ("number" === s(e[1]) && (r = e[1]), n && n.length) {
					var o = n.map(function(t) {
						return t.url
					});
					t.biz.util.previewImage({
						urls: o,
						current: o[r],
						onSuccess: function(t) {},
						onFail: function(t) {}
					})
				}
			}, e.closeWebView = function() {
				t.biz.navigation.close({
					onSuccess: function(t) {},
					onFail: function(t) {}
				})
			}, e.scan = function(e) {
				t.biz.util.scan({
					type: all,
					onSuccess: function(t) {
						e && e(t)
					},
					onFail: function(t) {}
				})
			}, e.uploadImgsToEmap = function(e) {
				return new c.default(function(r, o) {
					var i = [],
						c = function() {
							var t = e.config && e.config.token,
								c = void 0;
							t ? c = t.substring(0, t.length - 1) : (c = (new Date).getTime() + "" + parseInt(100 * Math.random()).toString(), t = c + 1);
							var u = n.emapPrefixPath;
							/^http/.test(u) || (u = location.origin + "/" + u);
							var s = {
								serverIds: i.join(","),
								emapPrefixPath: n.emapPrefixPath,
								token: t,
								scope: c,
								corp: n.corp,
								storeid: "image"
							};
							a.default.get(n.uploadImgsToEmapUrl, {
								params: s
							}).then(function(e) {
								e.data.token = t, r(e.data)
							}, function(t) {
								o(t.data)
							}).catch(function(t) {
								o(t.data)
							})
						},
						u = function e(n) {
							n.pop();
							t.biz.util.uploadImage({
								multiple: !1,
								max: 3,
								onSuccess: function(t) {
									var r = t.serverId;
									i.push(r), n.length ? e(n) : c()
								},
								onFail: function(t) {}
							})
						};
					u(e.urls)
				})
			}, e.setTitleText = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				console.log("dd.biz.navigation:" + e), console.log(t.biz.navigation.setTitle), t.biz.navigation.setTitle({
					title: e,
					onSuccess: function(t) {
						console.log(t)
					},
					onFail: function(t) {
						console.log(t)
					}
				})
			}, e.getCurrentPosition = function(e, n, r) {
				t.device.geolocation.get({
					targetAccuracy: 200,
					coordinate: 1,
					withReGeocode: Boolean,
					useCache: !0,
					onSuccess: function(t) {
						e && e({
							timestamp: +new Date,
							coords: t
						})
					},
					onFail: function(t) {
						n && n(t)
					}
				})
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(18),
			c = r(i),
			u = n(16),
			a = r(u),
			s = function(t) {
				var e = Object.prototype.toString.call(t).toLocaleLowerCase().replace("[object ", "").replace("]", "");
				return "object" === e && t && t.hasOwnProperty("length") ? "array" : e
			};
		e.default = o
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			url: "",
			corp: "",
			emapPrefixPath: "",
			uploadImgsToEmapUrl: ""
		}
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function o(t, e, n) {
			console.log("wx config", n), e.wx = t, e.takeCamera = function() {
				var e, n = arguments;
				"boolean" === s(n[0]) && "function" === s(n[1]) && (e = n[1]), "function" === s(n[0]) && (e = n[0]);
				var r = ["original", "compressed"];
				"array" === s(n[1]) && (e = n[1]), "array" === s(n[2]) && (r = n[2]), t.chooseImage({
					count: 1,
					sizeType: r,
					sourceType: ["camera"],
					success: function(n) {
						f() ? t.getLocalImgData({
							localId: n.localIds[0],
							success: function(t) {
								e && e({
									base64: t.localData,
									url: n.localIds[0]
								})
							}
						}) : e && e({
							base64: n.localIds[0],
							url: n.localIds[0]
						})
					}
				})
			}, e.takePhoto = function() {
				var e, n = arguments;
				"function" === s(n[0]) && (e = n[0]);
				var r = 1;
				"number" === s(n[1]) && (r = n[1]);
				var o = ["original", "compressed"];
				"array" === s(n[1]) && (o = n[1]), "array" === s(n[2]) && (o = n[2]), t.chooseImage({
					count: r,
					sizeType: o,
					sourceType: ["album"],
					success: function(n) {
						var r = [],
							o = n.localIds,
							i = function() {
								r.length > 1 ? e && e(r) : e && e(r[0])
							};
						if (0 === o.length) return e && e({});
						if (f()) {
							var c = function e() {
								var n = o.pop();
								t.getLocalImgData({
									localId: n,
									success: function(t) {
										r.push({
											base64: t.localData,
											url: n
										}), o.length ? e() : i()
									}
								})
							};
							c()
						} else r = n.localIds.map(function(t) {
							return {
								base64: t,
								url: t
							}
						}), i()
					}
				})
			}, e.preViewImages = function() {
				var e = arguments,
					n = [];
				"array" === s(e[0]) && (n = e[0]);
				var r = 0;
				if ("number" === s(e[1]) && (r = e[1]), n && n.length) {
					var o = n.map(function(t) {
						return t.url
					});
					t.previewImage({
						urls: o,
						current: o[r]
					})
				}
			}, e.closeWebView = function() {
				t.closeWindow()
			}, e.scan = function(e) {
				t.scanQRCode({
					needResult: 1,
					scanType: ["qrCode", "barCode"],
					success: function(t) {
						e && e(t.resultStr)
					}
				})
			}, e.uploadImgsToEmap = function(e) {
				return new c.default(function(r, o) {
					var i = [],
						c = function() {
							var t = e.config && e.config.token,
								c = void 0;
							t ? c = t.substring(0, t.length - 1) : (c = (new Date).getTime() + "" + parseInt(100 * Math.random()).toString(), t = c + 1);
							var u = n.emapPrefixPath;
							/^http/.test(u) || (u = location.origin + "/" + u);
							var s = {
								serverIds: i.join(","),
								emapPrefixPath: n.emapPrefixPath,
								token: t,
								scope: c,
								corp: n.corp,
								storeid: "image"
							};
							a.default.get(n.uploadImgsToEmapUrl, {
								params: s
							}).then(function(e) {
								e.data.token = t, r(e.data)
							}, function(t) {
								o(t.data)
							}).catch(function(t) {
								o(t.data)
							})
						},
						u = function e(n) {
							var r = n.pop();
							t.uploadImage({
								localId: r,
								isShowProgressTips: 0,
								success: function(t) {
									var r = t.serverId;
									i.push(r), n.length ? e(n) : c()
								}
							})
						};
					u(e.urls)
				})
			}, e.setTitleText = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return document.title = t
			}, e.getCurrentPosition = function(e, n, r) {
				t.getLocation({
					type: "wgs84",
					success: function(t) {
						e && e({
							timestamp: +new Date,
							coords: t
						})
					},
					fail: function(t) {
						n && n(t)
					}
				})
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(18),
			c = r(i),
			u = n(16),
			a = r(u),
			s = function(t) {
				var e = Object.prototype.toString.call(t).toLocaleLowerCase().replace("[object ", "").replace("]", "");
				return "object" === e && t && t.hasOwnProperty("length") ? "array" : e
			},
			f = function() {
				return /iphone/.test(navigator.userAgent.toLowerCase())
			};
		e.default = o
	}, function(t, e, n) {
		(function(t) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = n(71),
				i = r(o);
			e.default = function(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					o = "http://res.wx.qq.com/open/js/jweixin-1.2.0.js",
					c = document.createElement("script");
				c.src = o, document.head.appendChild(c), c.onload = function() {
					wx.config(n), wx.ready(function() {
						var n = {};
						(0, i.default)(wx, n, r), t.BH_MIXIN_SDK = n, e({
							type: "success",
							sdk: n
						})
					})
				}
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		t.exports = {
			default: n(76),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(77),
			__esModule: !0
		}
	}, function(t, e, n) {
		! function(e, n) {
			t.exports = n()
		}(this, function() {
			return function(t) {
				function e(r) {
					if (n[r]) return n[r].exports;
					var o = n[r] = {
						exports: {},
						id: r,
						loaded: !1
					};
					return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
				}
				var n = {};
				return e.m = t, e.c = n, e.p = "", e(0)
			}([function(t, e, n) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.init = void 0;
				var o = n(77),
					i = r(o),
					c = n(38),
					u = r(c),
					a = {};
				window.mamp = a, e.default = u.default, e.init = i.default
			}, function(t, e) {
				var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
				"number" == typeof __g && (__g = n)
			}, function(t, e, n) {
				var r = n(32)("wks"),
					o = n(37),
					i = n(1).Symbol,
					c = "function" == typeof i,
					u = t.exports = function(t) {
						return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
					};
				u.store = r
			}, function(t, e) {
				var n = t.exports = {
					version: "2.5.0"
				};
				"number" == typeof __e && (__e = n)
			}, function(t, e, n) {
				var r = n(13);
				t.exports = function(t) {
					if (!r(t)) throw TypeError(t + " is not an object!");
					return t
				}
			}, function(t, e, n) {
				var r = n(14),
					o = n(31);
				t.exports = n(6) ? function(t, e, n) {
					return r.f(t, e, o(1, n))
				} : function(t, e, n) {
					return t[e] = n, t
				}
			}, function(t, e, n) {
				t.exports = !n(17)(function() {
					return 7 != Object.defineProperty({}, "a", {
						get: function() {
							return 7
						}
					}).a
				})
			}, function(t, e, n) {
				var r = n(1),
					o = n(3),
					i = n(11),
					c = n(5),
					u = "prototype",
					a = function(t, e, n) {
						var s, f, l, p = t & a.F,
							d = t & a.G,
							h = t & a.S,
							v = t & a.P,
							m = t & a.B,
							g = t & a.W,
							y = d ? o : o[e] || (o[e] = {}),
							w = y[u],
							b = d ? r : h ? r[e] : (r[e] || {})[u];
						d && (n = e);
						for (s in n) f = !p && b && void 0 !== b[s], f && s in y || (l = f ? b[s] : n[s], y[s] = d && "function" != typeof b[s] ? n[s] : m && f ? i(l, r) : g && b[s] == l ? function(t) {
							var e = function(e, n, r) {
								if (this instanceof t) {
									switch (arguments.length) {
										case 0:
											return new t;
										case 1:
											return new t(e);
										case 2:
											return new t(e, n)
									}
									return new t(e, n, r)
								}
								return t.apply(this, arguments)
							};
							return e[u] = t[u], e
						}(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((y.virtual || (y.virtual = {}))[s] = l, t & a.R && w && !w[s] && c(w, s, l)))
					};
				a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
			}, function(t, e) {
				t.exports = {}
			}, function(t, e) {
				t.exports = function(t) {
					if ("function" != typeof t) throw TypeError(t + " is not a function!");
					return t
				}
			}, function(t, e) {
				var n = {}.toString;
				t.exports = function(t) {
					return n.call(t).slice(8, -1)
				}
			}, function(t, e, n) {
				var r = n(9);
				t.exports = function(t, e, n) {
					if (r(t), void 0 === e) return t;
					switch (n) {
						case 1:
							return function(n) {
								return t.call(e, n)
							};
						case 2:
							return function(n, r) {
								return t.call(e, n, r)
							};
						case 3:
							return function(n, r, o) {
								return t.call(e, n, r, o)
							}
					}
					return function() {
						return t.apply(e, arguments)
					}
				}
			}, function(t, e) {
				var n = {}.hasOwnProperty;
				t.exports = function(t, e) {
					return n.call(t, e)
				}
			}, function(t, e) {
				t.exports = function(t) {
					return "object" == typeof t ? null !== t : "function" == typeof t
				}
			}, function(t, e, n) {
				var r = n(4),
					o = n(45),
					i = n(64),
					c = Object.defineProperty;
				e.f = n(6) ? Object.defineProperty : function(t, e, n) {
					if (r(t), e = i(e, !0), r(n), o) try {
						return c(t, e, n)
					} catch (t) {}
					if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
					return "value" in n && (t[e] = n.value), t
				}
			}, function(t, e) {
				t.exports = function(t) {
					if (void 0 == t) throw TypeError("Can't call method on  " + t);
					return t
				}
			}, function(t, e, n) {
				var r = n(13),
					o = n(1).document,
					i = r(o) && r(o.createElement);
				t.exports = function(t) {
					return i ? o.createElement(t) : {}
				}
			}, function(t, e) {
				t.exports = function(t) {
					try {
						return !!t()
					} catch (t) {
						return !0
					}
				}
			}, function(t, e, n) {
				"use strict";

				function r(t) {
					var e, n;
					this.promise = new t(function(t, r) {
						if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
						e = t, n = r
					}), this.resolve = o(e), this.reject = o(n)
				}
				var o = n(9);
				t.exports.f = function(t) {
					return new r(t)
				}
			}, function(t, e, n) {
				var r = n(14).f,
					o = n(12),
					i = n(2)("toStringTag");
				t.exports = function(t, e, n) {
					t && !o(t = n ? t : t.prototype, i) && r(t, i, {
						configurable: !0,
						value: e
					})
				}
			}, function(t, e, n) {
				var r = n(32)("keys"),
					o = n(37);
				t.exports = function(t) {
					return r[t] || (r[t] = o(t))
				}
			}, function(t, e) {
				var n = Math.ceil,
					r = Math.floor;
				t.exports = function(t) {
					return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
				}
			}, function(t, e, n) {
				var r = n(47),
					o = n(15);
				t.exports = function(t) {
					return r(o(t))
				}
			}, function(t, e, n) {
				var r = n(10),
					o = n(2)("toStringTag"),
					i = "Arguments" == r(function() {
						return arguments
					}()),
					c = function(t, e) {
						try {
							return t[e]
						} catch (t) {}
					};
				t.exports = function(t) {
					var e, n, u;
					return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = c(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
				}
			}, function(t, e) {
				t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
			}, function(t, e, n) {
				var r = n(1).document;
				t.exports = r && r.documentElement
			}, function(t, e, n) {
				"use strict";
				var r = n(27),
					o = n(7),
					i = n(60),
					c = n(5),
					u = n(12),
					a = n(8),
					s = n(50),
					f = n(19),
					l = n(56),
					p = n(2)("iterator"),
					d = !([].keys && "next" in [].keys()),
					h = "@@iterator",
					v = "keys",
					m = "values",
					g = function() {
						return this
					};
				t.exports = function(t, e, n, y, w, b, x) {
					s(n, e, y);
					var _, S, T, P = function(t) {
							if (!d && t in C) return C[t];
							switch (t) {
								case v:
									return function() {
										return new n(this, t)
									};
								case m:
									return function() {
										return new n(this, t)
									}
							}
							return function() {
								return new n(this, t)
							}
						},
						j = e + " Iterator",
						O = w == m,
						I = !1,
						C = t.prototype,
						E = C[p] || C[h] || w && C[w],
						M = E || P(w),
						L = w ? O ? P("entries") : M : void 0,
						k = "Array" == e ? C.entries || E : E;
					if (k && (T = l(k.call(new t)), T !== Object.prototype && T.next && (f(T, j, !0), r || u(T, p) || c(T, p, g))), O && E && E.name !== m && (I = !0, M = function() {
							return E.call(this)
						}), r && !x || !d && !I && C[p] || c(C, p, M), a[e] = M, a[j] = g, w)
						if (_ = {
								values: O ? M : P(m),
								keys: b ? M : P(v),
								entries: L
							}, x)
							for (S in _) S in C || i(C, S, _[S]);
						else o(o.P + o.F * (d || I), e, _);
					return _
				}
			}, function(t, e) {
				t.exports = !0
			}, function(t, e, n) {
				var r = n(57),
					o = n(24);
				t.exports = Object.keys || function(t) {
					return r(t, o)
				}
			}, function(t, e) {
				t.exports = function(t) {
					try {
						return {
							e: !1,
							v: t()
						}
					} catch (t) {
						return {
							e: !0,
							v: t
						}
					}
				}
			}, function(t, e, n) {
				var r = n(18);
				t.exports = function(t, e) {
					var n = r.f(t),
						o = n.resolve;
					return o(e), n.promise
				}
			}, function(t, e) {
				t.exports = function(t, e) {
					return {
						enumerable: !(1 & t),
						configurable: !(2 & t),
						writable: !(4 & t),
						value: e
					}
				}
			}, function(t, e, n) {
				var r = n(1),
					o = "__core-js_shared__",
					i = r[o] || (r[o] = {});
				t.exports = function(t) {
					return i[t] || (i[t] = {})
				}
			}, function(t, e, n) {
				var r = n(4),
					o = n(9),
					i = n(2)("species");
				t.exports = function(t, e) {
					var n, c = r(t).constructor;
					return void 0 === c || void 0 == (n = r(c)[i]) ? e : o(n)
				}
			}, function(t, e, n) {
				var r, o, i, c = n(11),
					u = n(46),
					a = n(25),
					s = n(16),
					f = n(1),
					l = f.process,
					p = f.setImmediate,
					d = f.clearImmediate,
					h = f.MessageChannel,
					v = f.Dispatch,
					m = 0,
					g = {},
					y = "onreadystatechange",
					w = function() {
						var t = +this;
						if (g.hasOwnProperty(t)) {
							var e = g[t];
							delete g[t], e()
						}
					},
					b = function(t) {
						w.call(t.data)
					};
				p && d || (p = function(t) {
					for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
					return g[++m] = function() {
						u("function" == typeof t ? t : Function(t), e)
					}, r(m), m
				}, d = function(t) {
					delete g[t]
				}, "process" == n(10)(l) ? r = function(t) {
					l.nextTick(c(w, t, 1))
				} : v && v.now ? r = function(t) {
					v.now(c(w, t, 1))
				} : h ? (o = new h, i = o.port2, o.port1.onmessage = b, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
					f.postMessage(t + "", "*")
				}, f.addEventListener("message", b, !1)) : r = y in s("script") ? function(t) {
					a.appendChild(s("script"))[y] = function() {
						a.removeChild(this), w.call(t)
					}
				} : function(t) {
					setTimeout(c(w, t, 1), 0)
				}), t.exports = {
					set: p,
					clear: d
				}
			}, function(t, e, n) {
				var r = n(21),
					o = Math.min;
				t.exports = function(t) {
					return t > 0 ? o(r(t), 9007199254740991) : 0
				}
			}, function(t, e, n) {
				var r = n(15);
				t.exports = function(t) {
					return Object(r(t))
				}
			}, function(t, e) {
				var n = 0,
					r = Math.random();
				t.exports = function(t) {
					return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
				}
			}, function(t, e, n) {
				"use strict";

				function r(t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (null != t)
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e.default = t, e
				}

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = n(74),
					c = o(i),
					u = n(79),
					a = o(u),
					s = n(76),
					f = o(s),
					l = n(80),
					p = r(l),
					d = n(78),
					h = r(d),
					v = null;
				e.default = function() {
					if (v) return v;
					var t = window.mamp,
						e = {};
					return f.default.wisedu ? (e.ENV = "hybrid", t.cpdaily && (e.ENV = "hybrid.cpdaily")) : e.ENV = "browser", (0, c.default)(a.default).forEach(function(n) {
						var r = a.default[n],
							o = t[n] || {};
						e[n] = {}, (0, c.default)(r).forEach(function(t) {
							var i = r[t],
								c = p[t],
								u = h[t];
							i && (o[t] ? c ? e[n][t] = c(o[t]) : o[t] && (e[n][t] = o[t]) : u ? e[n][t] = u : e[n][t] = function() {
								f.default.wisedu ? console.error("调用的" + n + "." + t + "接口不存在") : console.log("你当前不在 Hybrid 环境, 或Hybrid 环境没有初始化, " + t + " 处于 mock 实现")
							})
						})
					}), v = e, v.checkAPI = function(e) {
						var n = t;
						return e = e.split("."), e.forEach(function(t) {
							n && (n = n[t] ? n[t] : null)
						}), !!n
					}, v
				}
			}, function(t, e, n) {
				n(67), t.exports = n(3).Object.keys
			}, function(t, e, n) {
				n(68), n(70), n(73), n(69), n(71), n(72), t.exports = n(3).Promise
			}, function(t, e) {
				t.exports = function() {}
			}, function(t, e) {
				t.exports = function(t, e, n, r) {
					if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
					return t
				}
			}, function(t, e, n) {
				var r = n(22),
					o = n(35),
					i = n(63);
				t.exports = function(t) {
					return function(e, n, c) {
						var u, a = r(e),
							s = o(a.length),
							f = i(c, s);
						if (t && n != n) {
							for (; s > f;)
								if (u = a[f++], u != u) return !0
						} else
							for (; s > f; f++)
								if ((t || f in a) && a[f] === n) return t || f || 0;
						return !t && -1
					}
				}
			}, function(t, e, n) {
				var r = n(11),
					o = n(49),
					i = n(48),
					c = n(4),
					u = n(35),
					a = n(65),
					s = {},
					f = {},
					e = t.exports = function(t, e, n, l, p) {
						var d, h, v, m, g = p ? function() {
								return t
							} : a(t),
							y = r(n, l, e ? 2 : 1),
							w = 0;
						if ("function" != typeof g) throw TypeError(t + " is not iterable!");
						if (i(g)) {
							for (d = u(t.length); d > w; w++)
								if (m = e ? y(c(h = t[w])[0], h[1]) : y(t[w]), m === s || m === f) return m
						} else
							for (v = g.call(t); !(h = v.next()).done;)
								if (m = o(v, y, h.value, e), m === s || m === f) return m
					};
				e.BREAK = s, e.RETURN = f
			}, function(t, e, n) {
				t.exports = !n(6) && !n(17)(function() {
					return 7 != Object.defineProperty(n(16)("div"), "a", {
						get: function() {
							return 7
						}
					}).a
				})
			}, function(t, e) {
				t.exports = function(t, e, n) {
					var r = void 0 === n;
					switch (e.length) {
						case 0:
							return r ? t() : t.call(n);
						case 1:
							return r ? t(e[0]) : t.call(n, e[0]);
						case 2:
							return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
						case 3:
							return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
						case 4:
							return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
					}
					return t.apply(n, e)
				}
			}, function(t, e, n) {
				var r = n(10);
				t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
					return "String" == r(t) ? t.split("") : Object(t)
				}
			}, function(t, e, n) {
				var r = n(8),
					o = n(2)("iterator"),
					i = Array.prototype;
				t.exports = function(t) {
					return void 0 !== t && (r.Array === t || i[o] === t)
				}
			}, function(t, e, n) {
				var r = n(4);
				t.exports = function(t, e, n, o) {
					try {
						return o ? e(r(n)[0], n[1]) : e(n)
					} catch (e) {
						var i = t.return;
						throw void 0 !== i && r(i.call(t)), e
					}
				}
			}, function(t, e, n) {
				"use strict";
				var r = n(54),
					o = n(31),
					i = n(19),
					c = {};
				n(5)(c, n(2)("iterator"), function() {
					return this
				}), t.exports = function(t, e, n) {
					t.prototype = r(c, {
						next: o(1, n)
					}), i(t, e + " Iterator")
				}
			}, function(t, e, n) {
				var r = n(2)("iterator"),
					o = !1;
				try {
					var i = [7][r]();
					i.return = function() {
						o = !0
					}, Array.from(i, function() {
						throw 2
					})
				} catch (t) {}
				t.exports = function(t, e) {
					if (!e && !o) return !1;
					var n = !1;
					try {
						var i = [7],
							c = i[r]();
						c.next = function() {
							return {
								done: n = !0
							}
						}, i[r] = function() {
							return c
						}, t(i)
					} catch (t) {}
					return n
				}
			}, function(t, e) {
				t.exports = function(t, e) {
					return {
						value: e,
						done: !!t
					}
				}
			}, function(t, e, n) {
				var r = n(1),
					o = n(34).set,
					i = r.MutationObserver || r.WebKitMutationObserver,
					c = r.process,
					u = r.Promise,
					a = "process" == n(10)(c);
				t.exports = function() {
					var t, e, n, s = function() {
						var r, o;
						for (a && (r = c.domain) && r.exit(); t;) {
							o = t.fn, t = t.next;
							try {
								o()
							} catch (r) {
								throw t ? n() : e = void 0, r
							}
						}
						e = void 0, r && r.enter()
					};
					if (a) n = function() {
						c.nextTick(s)
					};
					else if (i) {
						var f = !0,
							l = document.createTextNode("");
						new i(s).observe(l, {
							characterData: !0
						}), n = function() {
							l.data = f = !f
						}
					} else if (u && u.resolve) {
						var p = u.resolve();
						n = function() {
							p.then(s)
						}
					} else n = function() {
						o.call(r, s)
					};
					return function(r) {
						var o = {
							fn: r,
							next: void 0
						};
						e && (e.next = o), t || (t = o, n()), e = o
					}
				}
			}, function(t, e, n) {
				var r = n(4),
					o = n(55),
					i = n(24),
					c = n(20)("IE_PROTO"),
					u = function() {},
					a = "prototype",
					s = function() {
						var t, e = n(16)("iframe"),
							r = i.length,
							o = "<",
							c = ">";
						for (e.style.display = "none", n(25).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + c + "document.F=Object" + o + "/script" + c), t.close(), s = t.F; r--;) delete s[a][i[r]];
						return s()
					};
				t.exports = Object.create || function(t, e) {
					var n;
					return null !== t ? (u[a] = r(t), n = new u, u[a] = null, n[c] = t) : n = s(), void 0 === e ? n : o(n, e)
				}
			}, function(t, e, n) {
				var r = n(14),
					o = n(4),
					i = n(28);
				t.exports = n(6) ? Object.defineProperties : function(t, e) {
					o(t);
					for (var n, c = i(e), u = c.length, a = 0; u > a;) r.f(t, n = c[a++], e[n]);
					return t
				}
			}, function(t, e, n) {
				var r = n(12),
					o = n(36),
					i = n(20)("IE_PROTO"),
					c = Object.prototype;
				t.exports = Object.getPrototypeOf || function(t) {
					return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
				}
			}, function(t, e, n) {
				var r = n(12),
					o = n(22),
					i = n(43)(!1),
					c = n(20)("IE_PROTO");
				t.exports = function(t, e) {
					var n, u = o(t),
						a = 0,
						s = [];
					for (n in u) n != c && r(u, n) && s.push(n);
					for (; e.length > a;) r(u, n = e[a++]) && (~i(s, n) || s.push(n));
					return s
				}
			}, function(t, e, n) {
				var r = n(7),
					o = n(3),
					i = n(17);
				t.exports = function(t, e) {
					var n = (o.Object || {})[t] || Object[t],
						c = {};
					c[t] = e(n), r(r.S + r.F * i(function() {
						n(1)
					}), "Object", c)
				}
			}, function(t, e, n) {
				var r = n(5);
				t.exports = function(t, e, n) {
					for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
					return t
				}
			}, function(t, e, n) {
				t.exports = n(5)
			}, function(t, e, n) {
				"use strict";
				var r = n(1),
					o = n(3),
					i = n(14),
					c = n(6),
					u = n(2)("species");
				t.exports = function(t) {
					var e = "function" == typeof o[t] ? o[t] : r[t];
					c && e && !e[u] && i.f(e, u, {
						configurable: !0,
						get: function() {
							return this
						}
					})
				}
			}, function(t, e, n) {
				var r = n(21),
					o = n(15);
				t.exports = function(t) {
					return function(e, n) {
						var i, c, u = String(o(e)),
							a = r(n),
							s = u.length;
						return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : (i - 55296 << 10) + (c - 56320) + 65536)
					}
				}
			}, function(t, e, n) {
				var r = n(21),
					o = Math.max,
					i = Math.min;
				t.exports = function(t, e) {
					return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
				}
			}, function(t, e, n) {
				var r = n(13);
				t.exports = function(t, e) {
					if (!r(t)) return t;
					var n, o;
					if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
					if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
					if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
					throw TypeError("Can't convert object to primitive value")
				}
			}, function(t, e, n) {
				var r = n(23),
					o = n(2)("iterator"),
					i = n(8);
				t.exports = n(3).getIteratorMethod = function(t) {
					if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
				}
			}, function(t, e, n) {
				"use strict";
				var r = n(41),
					o = n(52),
					i = n(8),
					c = n(22);
				t.exports = n(26)(Array, "Array", function(t, e) {
					this._t = c(t), this._i = 0, this._k = e
				}, function() {
					var t = this._t,
						e = this._k,
						n = this._i++;
					return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
				}, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
			}, function(t, e, n) {
				var r = n(36),
					o = n(28);
				n(58)("keys", function() {
					return function(t) {
						return o(r(t))
					}
				})
			}, function(t, e) {}, function(t, e, n) {
				"use strict";
				var r, o, i, c, u = n(27),
					a = n(1),
					s = n(11),
					f = n(23),
					l = n(7),
					p = n(13),
					d = n(9),
					h = n(42),
					v = n(44),
					m = n(33),
					g = n(34).set,
					y = n(53)(),
					w = n(18),
					b = n(29),
					x = n(30),
					_ = "Promise",
					S = a.TypeError,
					T = a.process,
					P = a[_],
					j = "process" == f(T),
					O = function() {},
					I = o = w.f,
					C = !! function() {
						try {
							var t = P.resolve(1),
								e = (t.constructor = {})[n(2)("species")] = function(t) {
									t(O, O)
								};
							return (j || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e
						} catch (t) {}
					}(),
					E = u ? function(t, e) {
						return t === e || t === P && e === c
					} : function(t, e) {
						return t === e
					},
					M = function(t) {
						var e;
						return !(!p(t) || "function" != typeof(e = t.then)) && e
					},
					L = function(t, e) {
						if (!t._n) {
							t._n = !0;
							var n = t._c;
							y(function() {
								for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
										var n, i, c = o ? e.ok : e.fail,
											u = e.resolve,
											a = e.reject,
											s = e.domain;
										try {
											c ? (o || (2 == t._h && R(t), t._h = 1), c === !0 ? n = r : (s && s.enter(), n = c(r), s && s.exit()), n === e.promise ? a(S("Promise-chain cycle")) : (i = M(n)) ? i.call(n, u, a) : u(n)) : a(r)
										} catch (t) {
											a(t)
										}
									}; n.length > i;) c(n[i++]);
								t._c = [], t._n = !1, e && !t._h && k(t)
							})
						}
					},
					k = function(t) {
						g.call(a, function() {
							var e, n, r, o = t._v,
								i = A(t);
							if (i && (e = b(function() {
									j ? T.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
										promise: t,
										reason: o
									}) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
								}), t._h = j || A(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
						})
					},
					A = function(t) {
						if (1 == t._h) return !1;
						for (var e, n = t._a || t._c, r = 0; n.length > r;)
							if (e = n[r++], e.fail || !A(e.promise)) return !1;
						return !0
					},
					R = function(t) {
						g.call(a, function() {
							var e;
							j ? T.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
								promise: t,
								reason: t._v
							})
						})
					},
					F = function(t) {
						var e = this;
						e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), L(e, !0))
					},
					B = function(t) {
						var e, n = this;
						if (!n._d) {
							n._d = !0, n = n._w || n;
							try {
								if (n === t) throw S("Promise can't be resolved itself");
								(e = M(t)) ? y(function() {
									var r = {
										_w: n,
										_d: !1
									};
									try {
										e.call(t, s(B, r, 1), s(F, r, 1))
									} catch (t) {
										F.call(r, t)
									}
								}): (n._v = t, n._s = 1, L(n, !1))
							} catch (t) {
								F.call({
									_w: n,
									_d: !1
								}, t)
							}
						}
					};
				C || (P = function(t) {
					h(this, P, _, "_h"), d(t), r.call(this);
					try {
						t(s(B, this, 1), s(F, this, 1))
					} catch (t) {
						F.call(this, t)
					}
				}, r = function(t) {
					this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
				}, r.prototype = n(59)(P.prototype, {
					then: function(t, e) {
						var n = I(m(this, P));
						return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = j ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
					},
					catch: function(t) {
						return this.then(void 0, t)
					}
				}), i = function() {
					var t = new r;
					this.promise = t, this.resolve = s(B, t, 1), this.reject = s(F, t, 1)
				}, w.f = I = function(t) {
					return E(P, t) ? new i(t) : o(t)
				}), l(l.G + l.W + l.F * !C, {
					Promise: P
				}), n(19)(P, _), n(61)(_), c = n(3)[_], l(l.S + l.F * !C, _, {
					reject: function(t) {
						var e = I(this),
							n = e.reject;
						return n(t), e.promise
					}
				}), l(l.S + l.F * (u || !C), _, {
					resolve: function(t) {
						return t instanceof P && E(t.constructor, this) ? t : x(this, t)
					}
				}), l(l.S + l.F * !(C && n(51)(function(t) {
					P.all(t).catch(O)
				})), _, {
					all: function(t) {
						var e = this,
							n = I(e),
							r = n.resolve,
							o = n.reject,
							i = b(function() {
								var n = [],
									i = 0,
									c = 1;
								v(t, !1, function(t) {
									var u = i++,
										a = !1;
									n.push(void 0), c++, e.resolve(t).then(function(t) {
										a || (a = !0, n[u] = t, --c || r(n))
									}, o)
								}), --c || r(n)
							});
						return i.e && o(i.v), n.promise
					},
					race: function(t) {
						var e = this,
							n = I(e),
							r = n.reject,
							o = b(function() {
								v(t, !1, function(t) {
									e.resolve(t).then(n.resolve, r)
								})
							});
						return o.e && r(o.v), n.promise
					}
				})
			}, function(t, e, n) {
				"use strict";
				var r = n(62)(!0);
				n(26)(String, "String", function(t) {
					this._t = String(t), this._i = 0
				}, function() {
					var t, e = this._t,
						n = this._i;
					return n >= e.length ? {
						value: void 0,
						done: !0
					} : (t = r(e, n), this._i += t.length, {
						value: t,
						done: !1
					})
				})
			}, function(t, e, n) {
				"use strict";
				var r = n(7),
					o = n(3),
					i = n(1),
					c = n(33),
					u = n(30);
				r(r.P + r.R, "Promise", {
					finally: function(t) {
						var e = c(this, o.Promise || i.Promise),
							n = "function" == typeof t;
						return this.then(n ? function(n) {
							return u(e, t()).then(function() {
								return n
							})
						} : t, n ? function(n) {
							return u(e, t()).then(function() {
								throw n
							})
						} : t)
					}
				})
			}, function(t, e, n) {
				"use strict";
				var r = n(7),
					o = n(18),
					i = n(29);
				r(r.S, "Promise", {
					try: function(t) {
						var e = o.f(this),
							n = i(t);
						return (n.e ? e.reject : e.resolve)(n.v), e.promise
					}
				})
			}, function(t, e, n) {
				n(66);
				for (var r = n(1), o = n(5), i = n(8), c = n(2)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < u.length; a++) {
					var s = u[a],
						f = r[s],
						l = f && f.prototype;
					l && !l[c] && o(l, c, s), i[s] = i.Array
				}
			}, function(t, e, n) {
				t.exports = {
					default: n(39),
					__esModule: !0
				}
			}, function(t, e, n) {
				t.exports = {
					default: n(40),
					__esModule: !0
				}
			}, function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = {
					wisedu: /wisedu/.test(navigator.userAgent)
				}
			}, function(t, e, n) {
				(function(t) {
					"use strict";

					function r(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					});
					var o = n(38),
						i = r(o),
						c = !1,
						u = !1,
						a = [],
						s = function() {
							c = !0, t.BH_MOBILE_SDK = (0, i.default)(), a.forEach(function(t) {
								t()
							})
						};
					e.default = function(t, e) {
						if (c ? t() : a.push(t), u === !1) {
							if (localStorage.getItem("wisedu-browser-debug") || /wisedu/.test(navigator.userAgent) === !1) setTimeout(function() {
								s()
							}, 0);
							else {
								var n = "https://injectionmamp/cordova.js",
									r = document.createElement("script");
								r.src = n, document.addEventListener("deviceready", s, !1), document.head.appendChild(r), window.close = function() {
									window.location.href = "mamp://close"
								}
							}
							u = !0
						}
					}
				}).call(e, function() {
					return this
				}())
			}, function(t, e, n) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.registerNetworkChangeCallback = e.getConnectionType = e.getTenantInfo = e.getCircleList = e.getUserInfo = e.getTenantID = e.togglePullUp = e.startPullRefresh = e.togglePullRefresh = e.scan = e.openCommentView = e.parseInfoFromHTML = e.formatImageToBase64 = e.webviewOnResume = e.closeWebView = e.openFullWebView = e.openWebView = e.sendGetRequest = e.getPasteboard = e.uploadToEMAP = void 0;
				var o = n(75),
					i = r(o),
					c = (e.uploadToEMAP = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
							r = n.token,
							o = void 0;
						return r ? o = r.substring(0, r.length - 1) : (o = (new Date).getTime() + "" + parseInt(100 * Math.random()).toString(), r = o + 1), new i.default(function(i, c) {
							t || c("server 地址未指定"), 0 === e.length && c("没有可供上传的文件"), n.params = {
								scope: o,
								fileToken: r,
								storeId: "image"
							}, BH_MOBILE_SDK.file.uploadToServer(t + "/sys/emapcomponent/file/uploadTempFileAsAttachment.do", e, n, function(t) {
								var e = !1;
								t.forEach(function(t) {
									if (200 !== t.code) e = !0;
									else try {
										t.response = JSON.parse(t.response), t.response.success || (e = !0)
									} catch (t) {
										e = !0
									}
								}), e ? c(t) : i({
									success: !0,
									token: r,
									data: t.map(function(t) {
										return t.response
									})
								})
							})
						})
					}, e.getPasteboard = function(t) {
						t("")
					}, e.sendGetRequest = function(t, e) {
						e({
							code: "404"
						})
					}, e.openWebView = function(t, e) {
						window.open(t)
					}, e.openFullWebView = function(t, e) {
						window.open(t)
					}, e.closeWebView = function(t, e) {
						window.close()
					}, e.webviewOnResume = function(t) {
						document.addEventListener && document.addEventListener("visibilitychange", function() {
							"visible" === document.visibilityState && t()
						})
					}, e.formatImageToBase64 = function(t, e) {
						e(t)
					}, e.parseInfoFromHTML = function(t, e) {
						e({
							img: "http://www.baidu.com/img/bd_logo1.png",
							title: "百度一下，你就知道"
						})
					}, e.openCommentView = function(t, e) {
						window.open(t)
					}, e.scan = function(t, e) {
						t(e)
					}, null);
				e.togglePullRefresh = function(t, e) {
					c = t ? e : null
				}, e.startPullRefresh = function() {
					c && c()
				}, e.togglePullUp = function(t, e) {
					return t ? e : null
				}, e.getTenantID = function(t, e) {
					t(e)
				}, e.getUserInfo = function(t, e) {
					t(e)
				}, e.getCircleList = function(t) {
					t([])
				}, e.getTenantInfo = function(t, e) {
					t(e)
				}, e.getConnectionType = function(t) {
					return t
				}, e.registerNetworkChangeCallback = function(t, e) {
					e && setTimeout(function() {
						t(e)
					}, 1e4)
				}
			}, function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = {
					UI: {
						actionSheet: !0,
						alertView: !0,
						closeWebView: !0,
						datePicker: !0,
						dateTimePicker: !0,
						multiPicker: !0,
						multiSelect: !0,
						openWebView: !0,
						preViewImages: !0,
						setNavHeader: !0,
						setTitleText: !0,
						setNavBarBgColor: !0,
						setStatusBarTintColor: !0,
						setBouncesEnabled: !0,
						singleSelect: !0,
						showToast: !0,
						toggleLoading: !0,
						toggleNavBar: !0,
						togglePullRefresh: !0,
						finishPullRefresh: !0,
						startPullRefresh: !0,
						togglePullUp: !0,
						finishPullUp: !0,
						webviewOnResume: !0
					},
					systemAbility: {
						getPasteboard: !0,
						setPasteboard: !0,
						setIdleTimerDisabled: !0,
						setBrightness: !0,
						takeCamera: !0,
						takePhoto: !0,
						tel: !0
					},
					file: {
						filePreview: !0,
						uploadToServer: !0
					},
					wisedu: {
						uploadToEMAP: !0
					},
					social: {
						share: !0
					},
					http: {
						sendGetRequest: !0
					},
					qrcode: {
						generateCode: !0,
						generateCodeAndShow: !0,
						scan: !0,
						recognize: !0
					},
					device: {
						getConnectionType: !0,
						registerNetworkChangeCallback: !0
					},
					cpdaily: {
						clickHomeTab: !0,
						checkPublishFresh: !0,
						formatImageToBase64: !0,
						getImagesInfo: !0,
						getTenantID: !0,
						getTenantInfo: !0,
						getUserBasicInfos: !0,
						getUserInfo: !0,
						getCircleList: !0,
						mainAppListChange: !0,
						onMineAppChanged: !0,
						onMainNavTabChanged: !0,
						openApp: !0,
						openCommentView: !0,
						openFullWebView: !0,
						openHomePage: !0,
						openMarketList: !0,
						openUsersPage: !0,
						openPhotoWall: !0,
						onPublishFreshListener: !0,
						parseInfoFromHTML: !0,
						postNotification: !0,
						publishFresh: !0,
						setStatusBarColor: !0,
						showLoginView: !0,
						showMain: !0,
						showOrgSelector: !0,
						showOrHideTabbar: !0,
						showSettingView: !0,
						showUserGuide: !0,
						startComment: !0,
						startIMChat: !0,
						retryFreshSend: !0,
						cancelFreshSend: !0,
						toggleFocus: !0,
						toggleNavTransparent: !0,
						togglePublishBtn: !0,
						uploadToOSS: !0,
						zhugeioTrack: !0,
						jumpToCicleById: !0,
						openCircleById: !0,
						openPublishFreshView: !0,
						openTribeListView: !0,
						openPersonalHomeWithUserId: !0,
						openPersonalHome: !0,
						openFreshDetail: !0
					},
					geolocation: {
						getCurrentPosition: !0
					}
				}
			}, function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				e.webviewOnResume = function(t) {
					var e = !1,
						n = [];
					return function(r) {
						n.push(r), e || (t(function() {
							n.forEach(function(t) {
								t()
							})
						}), e = !0)
					}
				}, e.uploadToServer = function(t) {
					return function(e, n, r, o) {
						t(e, n, o, r)
					}
				}
			}])
		})
	}, function(t, e, n) {
		var r = n(4),
			o = r.JSON || (r.JSON = {
				stringify: JSON.stringify
			});
		t.exports = function(t) {
			return o.stringify.apply(o, arguments)
		}
	}, function(t, e, n) {
		n(106), t.exports = n(4).Object.assign
	}, function(t, e, n) {
		n(107), n(109), n(112), n(108), n(110), n(111), t.exports = n(4).Promise
	}, function(t, e) {
		t.exports = function() {}
	}, function(t, e) {
		t.exports = function(t, e, n, r) {
			if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
			return t
		}
	}, function(t, e, n) {
		var r = n(26),
			o = n(45),
			i = n(102);
		t.exports = function(t) {
			return function(e, n, c) {
				var u, a = r(e),
					s = o(a.length),
					f = i(c, s);
				if (t && n != n) {
					for (; s > f;)
						if (u = a[f++], u != u) return !0
				} else
					for (; s > f; f++)
						if ((t || f in a) && a[f] === n) return t || f || 0;
				return !t && -1
			}
		}
	}, function(t, e, n) {
		var r = n(13),
			o = n(86),
			i = n(85),
			c = n(5),
			u = n(45),
			a = n(104),
			s = {},
			f = {},
			e = t.exports = function(t, e, n, l, p) {
				var d, h, v, m, g = p ? function() {
						return t
					} : a(t),
					y = r(n, l, e ? 2 : 1),
					w = 0;
				if ("function" != typeof g) throw TypeError(t + " is not iterable!");
				if (i(g)) {
					for (d = u(t.length); d > w; w++)
						if (m = e ? y(c(h = t[w])[0], h[1]) : y(t[w]), m === s || m === f) return m
				} else
					for (v = g.call(t); !(h = v.next()).done;)
						if (m = o(v, y, h.value, e), m === s || m === f) return m
			};
		e.BREAK = s, e.RETURN = f
	}, function(t, e, n) {
		t.exports = !n(7) && !n(21)(function() {
			return 7 != Object.defineProperty(n(20)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e) {
		t.exports = function(t, e, n) {
			var r = void 0 === n;
			switch (e.length) {
				case 0:
					return r ? t() : t.call(n);
				case 1:
					return r ? t(e[0]) : t.call(n, e[0]);
				case 2:
					return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
				case 3:
					return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
				case 4:
					return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
			}
			return t.apply(n, e)
		}
	}, function(t, e, n) {
		var r = n(10),
			o = n(3)("iterator"),
			i = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (r.Array === t || i[o] === t)
		}
	}, function(t, e, n) {
		var r = n(5);
		t.exports = function(t, e, n, o) {
			try {
				return o ? e(r(n)[0], n[1]) : e(n)
			} catch (e) {
				var i = t.return;
				throw void 0 !== i && r(i.call(t)), e
			}
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(92),
			o = n(41),
			i = n(23),
			c = {};
		n(6)(c, n(3)("iterator"), function() {
			return this
		}), t.exports = function(t, e, n) {
			t.prototype = r(c, {
				next: o(1, n)
			}), i(t, e + " Iterator")
		}
	}, function(t, e, n) {
		var r = n(3)("iterator"),
			o = !1;
		try {
			var i = [7][r]();
			i.return = function() {
				o = !0
			}, Array.from(i, function() {
				throw 2
			})
		} catch (t) {}
		t.exports = function(t, e) {
			if (!e && !o) return !1;
			var n = !1;
			try {
				var i = [7],
					c = i[r]();
				c.next = function() {
					return {
						done: n = !0
					}
				}, i[r] = function() {
					return c
				}, t(i)
			} catch (t) {}
			return n
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	}, function(t, e, n) {
		var r = n(2),
			o = n(44).set,
			i = r.MutationObserver || r.WebKitMutationObserver,
			c = r.process,
			u = r.Promise,
			a = "process" == n(12)(c);
		t.exports = function() {
			var t, e, n, s = function() {
				var r, o;
				for (a && (r = c.domain) && r.exit(); t;) {
					o = t.fn, t = t.next;
					try {
						o()
					} catch (r) {
						throw t ? n() : e = void 0, r
					}
				}
				e = void 0, r && r.enter()
			};
			if (a) n = function() {
				c.nextTick(s)
			};
			else if (i) {
				var f = !0,
					l = document.createTextNode("");
				new i(s).observe(l, {
					characterData: !0
				}), n = function() {
					l.data = f = !f
				}
			} else if (u && u.resolve) {
				var p = u.resolve();
				n = function() {
					p.then(s)
				}
			} else n = function() {
				o.call(r, s)
			};
			return function(r) {
				var o = {
					fn: r,
					next: void 0
				};
				e && (e.next = o), t || (t = o, n()), e = o
			}
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(38),
			o = n(94),
			i = n(97),
			c = n(46),
			u = n(35),
			a = Object.assign;
		t.exports = !a || n(21)(function() {
			var t = {},
				e = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst";
			return t[n] = 7, r.split("").forEach(function(t) {
				e[t] = t
			}), 7 != a({}, t)[n] || Object.keys(a({}, e)).join("") != r
		}) ? function(t, e) {
			for (var n = c(t), a = arguments.length, s = 1, f = o.f, l = i.f; a > s;)
				for (var p, d = u(arguments[s++]), h = f ? r(d).concat(f(d)) : r(d), v = h.length, m = 0; v > m;) l.call(d, p = h[m++]) && (n[p] = d[p]);
			return n
		} : a
	}, function(t, e, n) {
		var r = n(5),
			o = n(93),
			i = n(33),
			c = n(24)("IE_PROTO"),
			u = function() {},
			a = "prototype",
			s = function() {
				var t, e = n(20)("iframe"),
					r = i.length,
					o = "<",
					c = ">";
				for (e.style.display = "none", n(34).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + c + "document.F=Object" + o + "/script" + c), t.close(), s = t.F; r--;) delete s[a][i[r]];
				return s()
			};
		t.exports = Object.create || function(t, e) {
			var n;
			return null !== t ? (u[a] = r(t), n = new u, u[a] = null, n[c] = t) : n = s(), void 0 === e ? n : o(n, e)
		}
	}, function(t, e, n) {
		var r = n(15),
			o = n(5),
			i = n(38);
		t.exports = n(7) ? Object.defineProperties : function(t, e) {
			o(t);
			for (var n, c = i(e), u = c.length, a = 0; u > a;) r.f(t, n = c[a++], e[n]);
			return t
		}
	}, function(t, e) {
		e.f = Object.getOwnPropertySymbols
	}, function(t, e, n) {
		var r = n(14),
			o = n(46),
			i = n(24)("IE_PROTO"),
			c = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
		}
	}, function(t, e, n) {
		var r = n(14),
			o = n(26),
			i = n(81)(!1),
			c = n(24)("IE_PROTO");
		t.exports = function(t, e) {
			var n, u = o(t),
				a = 0,
				s = [];
			for (n in u) n != c && r(u, n) && s.push(n);
			for (; e.length > a;) r(u, n = e[a++]) && (~i(s, n) || s.push(n));
			return s
		}
	}, function(t, e) {
		e.f = {}.propertyIsEnumerable
	}, function(t, e, n) {
		var r = n(6);
		t.exports = function(t, e, n) {
			for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
			return t
		}
	}, function(t, e, n) {
		t.exports = n(6)
	}, function(t, e, n) {
		"use strict";
		var r = n(2),
			o = n(4),
			i = n(15),
			c = n(7),
			u = n(3)("species");
		t.exports = function(t) {
			var e = "function" == typeof o[t] ? o[t] : r[t];
			c && e && !e[u] && i.f(e, u, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(t, e, n) {
		var r = n(25),
			o = n(19);
		t.exports = function(t) {
			return function(e, n) {
				var i, c, u = String(o(e)),
					a = r(n),
					s = u.length;
				return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : (i - 55296 << 10) + (c - 56320) + 65536)
			}
		}
	}, function(t, e, n) {
		var r = n(25),
			o = Math.max,
			i = Math.min;
		t.exports = function(t, e) {
			return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
		}
	}, function(t, e, n) {
		var r = n(9);
		t.exports = function(t, e) {
			if (!r(t)) return t;
			var n, o;
			if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
			if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
			if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, e, n) {
		var r = n(32),
			o = n(3)("iterator"),
			i = n(10);
		t.exports = n(4).getIteratorMethod = function(t) {
			if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(79),
			o = n(89),
			i = n(10),
			c = n(26);
		t.exports = n(36)(Array, "Array", function(t, e) {
			this._t = c(t), this._i = 0, this._k = e
		}, function() {
			var t = this._t,
				e = this._k,
				n = this._i++;
			return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
		}, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
	}, function(t, e, n) {
		var r = n(8);
		r(r.S + r.F, "Object", {
			assign: n(91)
		})
	}, function(t, e) {}, function(t, e, n) {
		"use strict";
		var r, o, i, c, u = n(37),
			a = n(2),
			s = n(13),
			f = n(32),
			l = n(8),
			p = n(9),
			d = n(11),
			h = n(80),
			v = n(82),
			m = n(43),
			g = n(44).set,
			y = n(90)(),
			w = n(22),
			b = n(39),
			x = n(40),
			_ = "Promise",
			S = a.TypeError,
			T = a.process,
			P = a[_],
			j = "process" == f(T),
			O = function() {},
			I = o = w.f,
			C = !! function() {
				try {
					var t = P.resolve(1),
						e = (t.constructor = {})[n(3)("species")] = function(t) {
							t(O, O)
						};
					return (j || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e
				} catch (t) {}
			}(),
			E = function(t) {
				var e;
				return !(!p(t) || "function" != typeof(e = t.then)) && e
			},
			M = function(t, e) {
				if (!t._n) {
					t._n = !0;
					var n = t._c;
					y(function() {
						for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
								var n, i, c = o ? e.ok : e.fail,
									u = e.resolve,
									a = e.reject,
									s = e.domain;
								try {
									c ? (o || (2 == t._h && A(t), t._h = 1), c === !0 ? n = r : (s && s.enter(), n = c(r), s && s.exit()), n === e.promise ? a(S("Promise-chain cycle")) : (i = E(n)) ? i.call(n, u, a) : u(n)) : a(r)
								} catch (t) {
									a(t)
								}
							}; n.length > i;) c(n[i++]);
						t._c = [], t._n = !1, e && !t._h && L(t);
					})
				}
			},
			L = function(t) {
				g.call(a, function() {
					var e, n, r, o = t._v,
						i = k(t);
					if (i && (e = b(function() {
							j ? T.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
								promise: t,
								reason: o
							}) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
						}), t._h = j || k(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
				})
			},
			k = function(t) {
				if (1 == t._h) return !1;
				for (var e, n = t._a || t._c, r = 0; n.length > r;)
					if (e = n[r++], e.fail || !k(e.promise)) return !1;
				return !0
			},
			A = function(t) {
				g.call(a, function() {
					var e;
					j ? T.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
						promise: t,
						reason: t._v
					})
				})
			},
			R = function(t) {
				var e = this;
				e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0))
			},
			F = function(t) {
				var e, n = this;
				if (!n._d) {
					n._d = !0, n = n._w || n;
					try {
						if (n === t) throw S("Promise can't be resolved itself");
						(e = E(t)) ? y(function() {
							var r = {
								_w: n,
								_d: !1
							};
							try {
								e.call(t, s(F, r, 1), s(R, r, 1))
							} catch (t) {
								R.call(r, t)
							}
						}): (n._v = t, n._s = 1, M(n, !1))
					} catch (t) {
						R.call({
							_w: n,
							_d: !1
						}, t)
					}
				}
			};
		C || (P = function(t) {
			h(this, P, _, "_h"), d(t), r.call(this);
			try {
				t(s(F, this, 1), s(R, this, 1))
			} catch (t) {
				R.call(this, t)
			}
		}, r = function(t) {
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		}, r.prototype = n(98)(P.prototype, {
			then: function(t, e) {
				var n = I(m(this, P));
				return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = j ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		}), i = function() {
			var t = new r;
			this.promise = t, this.resolve = s(F, t, 1), this.reject = s(R, t, 1)
		}, w.f = I = function(t) {
			return t === P || t === c ? new i(t) : o(t)
		}), l(l.G + l.W + l.F * !C, {
			Promise: P
		}), n(23)(P, _), n(100)(_), c = n(4)[_], l(l.S + l.F * !C, _, {
			reject: function(t) {
				var e = I(this),
					n = e.reject;
				return n(t), e.promise
			}
		}), l(l.S + l.F * (u || !C), _, {
			resolve: function(t) {
				return x(u && this === c ? P : this, t)
			}
		}), l(l.S + l.F * !(C && n(88)(function(t) {
			P.all(t).catch(O)
		})), _, {
			all: function(t) {
				var e = this,
					n = I(e),
					r = n.resolve,
					o = n.reject,
					i = b(function() {
						var n = [],
							i = 0,
							c = 1;
						v(t, !1, function(t) {
							var u = i++,
								a = !1;
							n.push(void 0), c++, e.resolve(t).then(function(t) {
								a || (a = !0, n[u] = t, --c || r(n))
							}, o)
						}), --c || r(n)
					});
				return i.e && o(i.v), n.promise
			},
			race: function(t) {
				var e = this,
					n = I(e),
					r = n.reject,
					o = b(function() {
						v(t, !1, function(t) {
							e.resolve(t).then(n.resolve, r)
						})
					});
				return o.e && r(o.v), n.promise
			}
		})
	}, function(t, e, n) {
		"use strict";
		var r = n(101)(!0);
		n(36)(String, "String", function(t) {
			this._t = String(t), this._i = 0
		}, function() {
			var t, e = this._t,
				n = this._i;
			return n >= e.length ? {
				value: void 0,
				done: !0
			} : (t = r(e, n), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}, function(t, e, n) {
		"use strict";
		var r = n(8),
			o = n(4),
			i = n(2),
			c = n(43),
			u = n(40);
		r(r.P + r.R, "Promise", {
			finally: function(t) {
				var e = c(this, o.Promise || i.Promise),
					n = "function" == typeof t;
				return this.then(n ? function(n) {
					return u(e, t()).then(function() {
						return n
					})
				} : t, n ? function(n) {
					return u(e, t()).then(function() {
						throw n
					})
				} : t)
			}
		})
	}, function(t, e, n) {
		"use strict";
		var r = n(8),
			o = n(22),
			i = n(39);
		r(r.S, "Promise", {
			try: function(t) {
				var e = o.f(this),
					n = i(t);
				return (n.e ? e.reject : e.resolve)(n.v), e.promise
			}
		})
	}, function(t, e, n) {
		n(105);
		for (var r = n(2), o = n(6), i = n(10), c = n(3)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < u.length; a++) {
			var s = u[a],
				f = r[s],
				l = f && f.prototype;
			l && !l[c] && o(l, c, s), i[s] = i.Array
		}
	}, function(t, e) {
		function n(t) {
			return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
		}

		function r(t) {
			return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
		}
		/*!
		 * Determine if an object is a Buffer
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
		t.exports = function(t) {
			return null != t && (n(t) || r(t) || !!t._isBuffer)
		}
	}, function(t, e) {
		function n() {
			throw new Error("setTimeout has not been defined")
		}

		function r() {
			throw new Error("clearTimeout has not been defined")
		}

		function o(t) {
			if (f === setTimeout) return setTimeout(t, 0);
			if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
			try {
				return f(t, 0)
			} catch (e) {
				try {
					return f.call(null, t, 0)
				} catch (e) {
					return f.call(this, t, 0)
				}
			}
		}

		function i(t) {
			if (l === clearTimeout) return clearTimeout(t);
			if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
			try {
				return l(t)
			} catch (e) {
				try {
					return l.call(null, t)
				} catch (e) {
					return l.call(this, t)
				}
			}
		}

		function c() {
			v && d && (v = !1, d.length ? h = d.concat(h) : m = -1, h.length && u())
		}

		function u() {
			if (!v) {
				var t = o(c);
				v = !0;
				for (var e = h.length; e;) {
					for (d = h, h = []; ++m < e;) d && d[m].run();
					m = -1, e = h.length
				}
				d = null, v = !1, i(t)
			}
		}

		function a(t, e) {
			this.fun = t, this.array = e
		}

		function s() {}
		var f, l, p = t.exports = {};
		! function() {
			try {
				f = "function" == typeof setTimeout ? setTimeout : n
			} catch (t) {
				f = n
			}
			try {
				l = "function" == typeof clearTimeout ? clearTimeout : r
			} catch (t) {
				l = r
			}
		}();
		var d, h = [],
			v = !1,
			m = -1;
		p.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			h.push(new a(t, e)), 1 !== h.length || v || o(u)
		}, a.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, p.listeners = function(t) {
			return []
		}, p.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, p.cwd = function() {
			return "/"
		}, p.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, p.umask = function() {
			return 0
		}
	}])
});
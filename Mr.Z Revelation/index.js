try {
  function Fun(){
  for(i=0; i<100;i++){
    console.log("GSCTF{D!5c0rD_i5_7H3_b35t}");
  }
}
} catch {
  function Funny(){
  var s_,
    s_aa = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, s_aa);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    },
    s_ca = function (a) {
      s_ba.setTimeout(function () {
        throw a;
      }, 0);
    },
    s_da = function (a) {
      a && "function" == typeof a.dispose && a.dispose();
    },
    s_aaa = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        s_ea(d) ? s_aaa.apply(null, d) : s_da(d);
      }
    }
    function Funnier(){
    s_ga = function () {
      !s_fa && s_baa && s_caa(s_baa());
      return s_fa;
    },
    s_caa = function (a) {
      s_fa = a;
      s_daa.forEach(function (b) {
        b(s_fa);
      });
      s_daa = [];
    },
    s_a = function (a) {
      s_fa && s_eaa(a);
    },
    s_b = function () {
      s_fa && s_faa(s_fa);
    },
    s_ha = function (a, b) {
      b.hasOwnProperty("displayName") || (b.displayName = a);
      b[s_gaa] = a;
    },
    s_haa = function (a) {
      a = a[s_gaa];
      return a instanceof s_ia ? a : null;
    },
    s_ja = function (a) {
      return a[a.length - 1];
    },
    s_ka = function (a, b, c) {
      for (
        var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
        0 <= e;
        --e
      )
        e in d && b.call(c, d[e], e, a);
    },
    s_ma = function (a, b, c) {
      b = s_la(a, b, c);
      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    },
    s_la = function (a, b, c) {
      for (
        var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
        f < d;
        f++
      )
        if (f in e && b.call(c, e[f], f, a)) return f;
      return -1;
    },
    s_iaa = function (a, b, c) {
      b = s_na(a, b, c);
      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    },
    s_na = function (a, b, c) {
      for (
        var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
        0 <= e;
        e--
      )
        if (e in d && b.call(c, d[e], e, a)) return e;
      return -1;
    },
    s_pa = function (a, b) {
      return 0 <= s_oa(a, b);
    },
    s_qa = function (a) {
      if (!Array.isArray(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    },
    s_ra = function (a, b) {
      s_pa(a, b) || a.push(b);
    },
    s_sa = function (a, b, c) {
      s_jaa(a, c, 0, b);
    },
    s_kaa = function (a, b, c) {
      s_ta(s_jaa, a, c, 0).apply(null, b);
    },
    s_va = function (a, b) {
      b = s_oa(a, b);
      var c;
      (c = 0 <= b) && s_ua(a, b);
      return c;
    },
    s_ua = function (a, b) {
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
    s_laa = function (a, b) {
      b = s_la(a, b, void 0);
      return 0 <= b ? (s_ua(a, b), !0) : !1;
    },
    s_maa = function (a, b) {
      var c = 0;
      s_ka(a, function (d, e) {
        b.call(void 0, d, e, a) && s_ua(a, e) && c++;
      });
      return c;
    },
    s_wa = function (a) {
      return 0;
    };
    s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      },
      s_ka = function (a, b, c) {
        for (
          var d = "string" === typeof a ? a.split("") : a, e = a.length - 1;
          0 <= e;
          --e
        )
          e in d && b.call(c, d[e], e, a);
      }
    }
  }
}

// make sure to answer in the GSCTF{flag} format.
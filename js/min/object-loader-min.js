THREE.OBJLoader = function(e) {
    this.manager = e !== undefined ? e : THREE.DefaultLoadingManager;
};

THREE.OBJLoader.prototype = {
    constructor: THREE.OBJLoader,
    load: function(e, n, r, t) {
        var a = this;
        var d = new THREE.XHRLoader(a.manager);
        d.setCrossOrigin(this.crossOrigin);
        d.load(e, function(e) {
            n(a.parse(e));
        });
    },
    parse: function(e) {
        function n(e, n, r) {
            return new THREE.Vector3(parseFloat(e), parseFloat(n), parseFloat(r));
        }
        function r(e, n) {
            return new THREE.Vector2(parseFloat(e), parseFloat(n));
        }
        function t(e, n, r, t) {
            return new THREE.Face3(e, n, r, t);
        }
        var a = new THREE.Object3D();
        var d, s, l;
        function i(e) {
            e = parseInt(e);
            return e >= 0 ? e - 1 : e + h.length;
        }
        function o(e) {
            e = parseInt(e);
            return e >= 0 ? e - 1 : e + v.length;
        }
        function f(e) {
            e = parseInt(e);
            return e >= 0 ? e - 1 : e + p.length;
        }
        function u(e, n, r, a) {
            if (a === undefined) {
                d.faces.push(t(h[i(e)] - 1, h[i(n)] - 1, h[i(r)] - 1));
            } else {
                d.faces.push(t(h[i(e)] - 1, h[i(n)] - 1, h[i(r)] - 1, [ v[o(a[0])].clone(), v[o(a[1])].clone(), v[o(a[2])].clone() ]));
            }
        }
        function c(e, n, r) {
            d.faceVertexUvs[0].push([ p[f(e)].clone(), p[f(n)].clone(), p[f(r)].clone() ]);
        }
        function E(e, n, r) {
            if (e[3] === undefined) {
                u(e[0], e[1], e[2], r);
                if (n !== undefined && n.length > 0) {
                    c(n[0], n[1], n[2]);
                }
            } else {
                if (r !== undefined && r.length > 0) {
                    u(e[0], e[1], e[3], [ r[0], r[1], r[3] ]);
                    u(e[1], e[2], e[3], [ r[1], r[2], r[3] ]);
                } else {
                    u(e[0], e[1], e[3]);
                    u(e[1], e[2], e[3]);
                }
                if (n !== undefined && n.length > 0) {
                    c(n[0], n[1], n[3]);
                    c(n[1], n[2], n[3]);
                }
            }
        }
        if (/^o /gm.test(e) === false) {
            d = new THREE.Geometry();
            s = new THREE.MeshLambertMaterial();
            l = new THREE.Mesh(d, s);
            a.add(l);
        }
        var h = [];
        var v = [];
        var p = [];
        var g = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
        var m = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
        var H = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
        var R = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;
        var T = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;
        var w = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;
        var x = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/;
        e = e.replace(/\\\r\n/g, "");
        var F = e.split("\n");
        for (var L = 0; L < F.length; L++) {
            var M = F[L];
            M = M.trim();
            var b;
            if (M.length === 0 || M.charAt(0) === "#") {
                continue;
            } else if ((b = g.exec(M)) !== null) {
                h.push(d.vertices.push(n(b[1], b[2], b[3])));
            } else if ((b = m.exec(M)) !== null) {
                v.push(n(b[1], b[2], b[3]));
            } else if ((b = H.exec(M)) !== null) {
                p.push(r(b[1], b[2]));
            } else if ((b = R.exec(M)) !== null) {
                E([ b[1], b[2], b[3], b[4] ]);
            } else if ((b = T.exec(M)) !== null) {
                E([ b[2], b[5], b[8], b[11] ], [ b[3], b[6], b[9], b[12] ]);
            } else if ((b = w.exec(M)) !== null) {
                E([ b[2], b[6], b[10], b[14] ], [ b[3], b[7], b[11], b[15] ], [ b[4], b[8], b[12], b[16] ]);
            } else if ((b = x.exec(M)) !== null) {
                E([ b[2], b[5], b[8], b[11] ], [], [ b[3], b[6], b[9], b[12] ]);
            } else if (/^o /.test(M)) {
                d = new THREE.Geometry();
                s = new THREE.MeshLambertMaterial();
                l = new THREE.Mesh(d, s);
                l.name = M.substring(2).trim();
                a.add(l);
            } else if (/^g /.test(M)) {} else if (/^usemtl /.test(M)) {
                s.name = M.substring(7).trim();
            } else if (/^mtllib /.test(M)) {} else if (/^s /.test(M)) {} else {}
        }
        var O = a.children;
        for (var L = 0, y = O.length; L < y; L++) {
            var d = O[L].geometry;
            d.computeFaceNormals();
            d.computeBoundingSphere();
        }
        return a;
    }
};
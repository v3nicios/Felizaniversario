class Snowflakes {
    constructor(options) {
        this.color = options.color || "#ffd700";
        this.minSize = options.minSize || 5;
        this.count = 45; // Quantidade de partículas
        this.particles = [];
        this.running = true;
        
        // Criar o canvas para as partículas
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1000';
        document.body.appendChild(this.canvas);

        // O Path do seu SVG (limpo e formatado)
        this.pathData = "M3850 12793 c-48 -9 -124 -45 -182 -85 -76 -53 -147 -141 -204 -252 -56 -108 -65 -174 -40 -289 16 -73 77 -212 116 -267 29 -40 25 -46 -12 -15 -94 79 -292 146 -438 148 -112 1 -180 -13 -275 -59 -91 -43 -150 -96 -240 -212 -80 -104 -78 -91 -39 -213 58 -181 199 -330 381 -404 49 -20 51 -23 38 -42 -12 -17 -29 -21 -127 -26 -62 -4 -174 -17 -248 -31 -133 -24 -448 -94 -462 -103 -5 -2 -8 20 -8 50 0 142 -76 322 -181 429 -94 96 -189 140 -311 146 -155 8 -257 -36 -383 -163 -82 -83 -136 -162 -162 -237 -33 -96 0 -294 74 -441 l24 -48 -64 50 c-74 58 -194 121 -282 148 -92 27 -288 25 -375 -5 -91 -32 -188 -101 -275 -196 -85 -93 -87 -97 -55 -222 29 -117 80 -212 151 -284 52 -53 185 -150 221 -162 8 -3 -3 -23 -30 -53 -100 -113 -134 -276 -98 -475 l11 -65 71 -27 c177 -68 372 -95 493 -68 158 34 282 152 363 343 44 104 52 106 44 10 -25 -301 104 -502 382 -590 81 -26 239 -53 308 -53 39 0 43 3 83 60 118 168 155 340 105 482 -8 22 -14 42 -14 43 0 1 33 5 73 8 98 8 223 46 292 88 67 40 160 130 211 205 l37 54 -36 142 c-20 79 -51 171 -69 206 -56 112 -174 197 -325 236 -143 37 -359 38 -461 2 l-43 -16 49 63 c27 34 62 82 77 107 15 25 29 46 30 48 9 11 489 117 665 147 52 8 107 18 121 21 l27 5 -6 -89 c-5 -90 14 -220 43 -288 12 -28 20 -33 96 -52 354 -88 582 -33 716 171 27 42 60 108 74 147 32 95 49 91 65 -15 23 -163 64 -254 149 -334 114 -108 289 -161 535 -161 88 0 99 2 112 21 13 21 18 17 109 -98 83 -103 97 -125 104 -168 12 -86 53 -199 94 -261 56 -86 172 -191 254 -230 l36 -17 -45 -49 c-107 -115 -143 -279 -107 -501 6 -42 24 -52 168 -100 268 -89 461 -73 605 50 l43 37 44 -49 c105 -119 312 -413 408 -579 24 -42 25 -48 9 -42 -26 10 -161 24 -322 33 l-132 8 0 -50 c-1 -27 -9 -75 -20 -105 -26 -74 -25 -111 6 -171 15 -31 20 -49 12 -46 -83 35 -155 49 -227 45 -130 -8 -231 -69 -317 -193 -20 -30 -38 -55 -39 -55 -2 0 -28 12 -60 26 -48 22 -67 26 -116 21 -66 -6 -160 -45 -203 -85 -45 -42 -122 -166 -141 -227 -23 -71 -14 -162 22 -225 15 -28 26 -64 28 -94 3 -55 25 -81 60 -71 11 3 55 10 97 15 42 6 96 17 119 25 23 8 48 15 57 15 8 0 53 18 99 40 63 31 86 47 94 68 6 15 21 43 35 64 l26 36 54 -38 c49 -34 74 -47 127 -64 18 -6 18 -7 -1 -38 -34 -55 -52 -136 -52 -227 0 -93 20 -199 40 -211 25 -16 178 -43 240 -43 139 0 245 61 313 181 l31 55 18 -57 c33 -101 83 -163 169 -207 51 -25 152 -49 215 -49 l51 0 56 -78 c143 -199 175 -362 84 -438 -64 -54 -150 -18 -411 176 -323 240 -368 260 -582 260 -121 0 -134 2 -132 18 3 43 -5 51 -89 93 -76 39 -94 44 -152 44 -130 -1 -230 -65 -309 -197 -80 -134 -89 -229 -31 -337 19 -36 29 -69 29 -98 0 -34 5 -46 25 -59 13 -8 29 -13 34 -9 6 3 46 10 90 15 112 13 232 51 340 109 8 4 32 35 52 69 51 84 62 164 29 217 -12 20 -19 39 -16 42 11 11 183 -26 301 -64 539 -174 913 -579 1080 -1172 60 -213 199 -1088 260 -1626 60 -544 68 -658 71 -1115 4 -450 9 -538 49 -775 13 -77 23 -141 21 -142 -1 -2 -65 91 -142 205 -826 1230 -1642 1935 -2419 2091 -797 161 -1570 -215 -2558 -1243 -158 -165 -198 -210 -168 -191 5 3 21 -6 34 -19 67 -67 458 -136 1378 -241 168 -19 318 -35 332 -35 34 0 34 -4 -2 -49 -219 -278 -253 -724 -111 -1451 17 -85 60 -274 96 -420 l66 -265 57 -3 c126 -6 294 80 1126 580 501 302 749 443 985 562 450 228 740 308 899 247 40 -15 67 -17 142 -13 116 6 198 -10 241 -46 37 -31 78 -114 78 -159 0 -19 6 -33 15 -35 8 -2 66 -78 128 -170 63 -92 117 -165 120 -161 4 3 7 15 7 25 0 63 114 206 205 258 54 31 150 60 199 60 22 0 38 10 64 40 73 86 176 114 417 113 406 -1 906 -107 2145 -453 962 -269 1253 -336 1423 -328 67 3 82 7 97 25 13 17 20 19 30 10 10 -9 11 -8 6 8 -3 11 -19 83 -35 160 -312 1461 -648 2217 -1133 2546 -222 151 -522 197 -810 123 l-56 -14 -109 76 c-792 556 -1307 740 -1700 609 -148 -50 -292 -163 -400 -316 -93 -130 -198 -381 -262 -619 -82 -310 -149 -879 -162 -1370 -1 -33 -2 -32 -35 36 -63 135 -105 316 -124 549 -6 73 -8 324 -4 645 7 560 7 556 -47 985 -30 241 -102 703 -180 1150 -142 814 -143 822 -204 1360 -47 415 -95 747 -121 838 -5 14 1 17 39 17 99 0 199 53 227 120 11 26 9 42 -10 113 -72 258 -173 347 -394 347 l-83 0 -11 50 c-32 140 -38 347 -15 516 6 43 7 44 42 44 40 1 64 27 136 145 72 120 96 275 61 390 -9 28 -16 50 -16 50 0 0 33 1 73 2 87 3 206 32 272 66 l47 24 49 -49 c26 -26 57 -48 67 -48 41 0 162 71 204 120 l41 48 41 -23 c23 -12 85 -45 139 -74 100 -54 124 -71 62 -45 -32 13 -40 12 -121 -16 -48 -16 -105 -30 -126 -30 -22 0 -37 -4 -34 -9 3 -5 10 -73 16 -152 19 -267 57 -376 148 -423 32 -16 217 -56 262 -56 17 0 46 7 65 14 39 17 41 15 20 -17 -21 -33 -45 -144 -45 -214 0 -171 65 -296 185 -352 27 -13 99 -36 160 -51 l110 -29 37 24 c20 14 49 46 65 72 25 44 28 57 28 148 0 55 -4 145 -9 201 -5 62 -5 103 1 107 5 3 48 -19 96 -49 107 -67 188 -85 295 -65 75 14 198 62 238 93 26 21 26 22 19 111 -12 155 -45 246 -117 318 -36 35 -141 89 -175 89 -35 0 -35 15 0 32 56 27 125 96 154 156 25 51 28 68 28 157 0 109 -34 259 -61 269 -8 3 -54 11 -102 17 -116 15 -204 1 -294 -45 -50 -25 -68 -30 -68 -20 0 23 -35 86 -80 143 l-42 52 104 -6 c135 -8 219 9 295 62 59 40 99 82 129 131 10 17 40 43 66 57 27 15 54 38 60 51 10 21 7 30 -20 67 -18 23 -47 65 -66 92 -37 55 -174 189 -255 249 -52 38 -54 39 -149 40 -144 3 -215 -27 -271 -114 -35 -54 -64 -73 -123 -84 -43 -8 -92 -59 -85 -88 4 -15 -10 -26 -74 -58 -43 -22 -80 -40 -81 -40 -2 0 -3 28 -3 63 0 114 -8 131 -80 177 -87 54 -169 75 -238 60 -56 -12 -121 -46 -151 -79 -28 -31 -34 -26 -29 22 4 39 1 47 -46 105 -28 35 -51 70 -51 77 0 10 -36 -3 -115 -40 -145 -68 -199 -107 -225 -160 -17 -36 -19 -49 -10 -95 6 -29 9 -55 7 -56 -2 -2 -48 6 -102 17 -81 17 -124 20 -225 16 -74 -3 -142 -11 -167 -19 l-43 -16 46 52 c127 141 197 302 193 445 -1 43 9 85 43 183 49 143 72 174 150 208 44 19 330 90 362 90 11 0 11 -9 0 -52 -12 -43 -12 -61 1 -115 20 -85 65 -172 113 -215 58 -52 155 -116 231 -151 59 -28 75 -31 150 -29 65 2 97 8 145 29 37 16 89 28 134 32 75 6 92 16 92 56 -1 65 -21 233 -34 278 -8 29 -19 68 -24 87 -17 57 -63 164 -80 183 -9 10 -32 25 -52 33 -19 8 -45 24 -57 36 -21 20 -63 32 -149 44 -31 5 -52 1 -90 -18 -69 -35 -107 -41 -154 -22 -24 10 -54 14 -73 11 -17 -3 -75 -8 -127 -11 -171 -9 -292 -46 -412 -125 -69 -46 -173 -145 -229 -220 l-26 -35 -31 46 c-47 68 -135 144 -210 180 -58 28 -80 33 -164 36 -115 5 -194 -17 -287 -79 -106 -71 -220 -211 -255 -312 -33 -97 -12 -258 53 -415 l30 -73 -50 45 c-97 88 -228 154 -360 181 -195 41 -379 -9 -520 -143 -39 -36 -73 -61 -78 -56 -4 5 -46 68 -94 141 l-87 132 16 63 c23 87 15 204 -18 286 l-26 62 26 0 c50 0 158 32 241 72 104 50 205 147 268 259 l42 74 -43 121 c-58 159 -88 217 -147 279 -93 98 -238 147 -439 147 -132 0 -239 -17 -316 -52 l-44 -19 39 57 c190 280 175 549 -41 778 -122 128 -283 186 -438 157z";
        this.shape = new Path2D(this.pathData);

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

init() {
        this.resize();
        for (let i = 0; i < this.count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: (Math.random() * 0.001) + 0.002, 
                speed: (Math.random() * 1) + 0.3 // Um pouco mais rápido para parecer queda direta
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.color;

        this.particles.forEach(p => {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.scale(p.size, -p.size); 
            this.ctx.fill(this.shape);
            this.ctx.restore();

            // MOVIMENTO VERTICAL DIRETO
            p.y += p.speed;

            // Se sair da tela embaixo, volta para o topo na mesma coluna X
            if (p.y > this.canvas.height + 50) {
                p.y = -50;
                // Opcional: manter o X para ser 100% vertical
                // p.x = Math.random() * this.canvas.width; // Se quiser que ele mude de coluna ao resetar
            }
        });
    }

    animate() {
        if (!this.running) return;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.running = false;
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Inicia a função no lugar da antiga
var sf = new Snowflakes({
    color: "#ffd700",
    minSize: 20
});
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("name");
console.log(c);
if (c != null) {
    document.getElementById("name").innerHTML = c;
    document.getElementById("nae").innerHTML = c;
}
$(".main").fadeOut(1);
$('#play').click(function () {
    $(".loader").fadeOut(1500);
    $(".main").fadeIn("slow");
    sf.destroy();
    $('.balloon-border').animate({
        top: -500
    }, 8000);
    var audio = $('.song')[0];
    audio.play();

});
//Controla o que e escrito
var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});
var retina = window.devicePixelRatio,

    // Math shorthands
    PI = Math.PI,
    sqrt = Math.sqrt,
    round = Math.round,
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,

    // Local WindowAnimationTiming interface
    rAF = window.requestAnimationFrame,
    cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
    _now = Date.now || function () {
        return new Date().getTime();
    };

// Local WindowAnimationTiming interface polyfill
(function (w) {
    /**
     * Fallback implementation.
     */
    var prev = _now();

    function fallback(fn) {
        var curr = _now();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        prev = curr;
        return req;
    }

    /**
     * Cancel.
     */
    var cancel = w.cancelAnimationFrame ||
        w.webkitCancelAnimationFrame ||
        w.clearTimeout;

    rAF = w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        fallback;

    cAF = function (id) {
        cancel.call(w, id);
    };
}(window));

document.addEventListener("DOMContentLoaded", function () {
    var speed = 50,
        duration = (1.0 / speed),
        confettiRibbonCount = 10,
        ribbonPaperCount = 15,
        ribbonPaperDist = 8.0,
        ribbonPaperThick = 8.0,
        confettiPaperCount = 10,
        DEG_TO_RAD = PI / 180,
        RAD_TO_DEG = 180 / PI,
        colors = [
            ["#df0049", "#660671"],
            ["#00e857", "#005291"],
            ["#2bebbc", "#05798a"],
            ["#ffd200", "#b06c00"]
        ];

    function Vector2(_x, _y) {
        this.x = _x, this.y = _y;
        this.Length = function () {
            return sqrt(this.SqrLength());
        }
        this.SqrLength = function () {
            return this.x * this.x + this.y * this.y;
        }
        this.Add = function (_vec) {
            this.x += _vec.x;
            this.y += _vec.y;
        }
        this.Sub = function (_vec) {
            this.x -= _vec.x;
            this.y -= _vec.y;
        }
        this.Div = function (_f) {
            this.x /= _f;
            this.y /= _f;
        }
        this.Mul = function (_f) {
            this.x *= _f;
            this.y *= _f;
        }
        this.Normalize = function () {
            var sqrLen = this.SqrLength();
            if (sqrLen != 0) {
                var factor = 1.0 / sqrt(sqrLen);
                this.x *= factor;
                this.y *= factor;
            }
        }
        this.Normalized = function () {
            var sqrLen = this.SqrLength();
            if (sqrLen != 0) {
                var factor = 1.0 / sqrt(sqrLen);
                return new Vector2(this.x * factor, this.y * factor);
            }
            return new Vector2(0, 0);
        }
    }
    Vector2.Lerp = function (_vec0, _vec1, _t) {
        return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
    }
    Vector2.Distance = function (_vec0, _vec1) {
        return sqrt(Vector2.SqrDistance(_vec0, _vec1));
    }
    Vector2.SqrDistance = function (_vec0, _vec1) {
        var x = _vec0.x - _vec1.x;
        var y = _vec0.y - _vec1.y;
        return (x * x + y * y + z * z);
    }
    Vector2.Scale = function (_vec0, _vec1) {
        return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
    }
    Vector2.Min = function (_vec0, _vec1) {
        return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
    }
    Vector2.Max = function (_vec0, _vec1) {
        return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
    }
    Vector2.ClampMagnitude = function (_vec0, _len) {
        var vecNorm = _vec0.Normalized;
        return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
    }
    Vector2.Sub = function (_vec0, _vec1) {
        return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
    }

    function EulerMass(_x, _y, _mass, _drag) {
        this.position = new Vector2(_x, _y);
        this.mass = _mass;
        this.drag = _drag;
        this.force = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
        this.AddForce = function (_f) {
            this.force.Add(_f);
        }
        this.Integrate = function (_dt) {
            var acc = this.CurrentForce(this.position);
            acc.Div(this.mass);
            var posDelta = new Vector2(this.velocity.x, this.velocity.y);
            posDelta.Mul(_dt);
            this.position.Add(posDelta);
            acc.Mul(_dt);
            this.velocity.Add(acc);
            this.force = new Vector2(0, 0);
        }
        this.CurrentForce = function (_pos, _vel) {
            var totalForce = new Vector2(this.force.x, this.force.y);
            var speed = this.velocity.Length();
            var dragVel = new Vector2(this.velocity.x, this.velocity.y);
            dragVel.Mul(this.drag * this.mass * speed);
            totalForce.Sub(dragVel);
            return totalForce;
        }
    }

    function ConfettiPaper(_x, _y) {
        this.pos = new Vector2(_x, _y);
        this.rotationSpeed = (random() * 600 + 800);
        this.angle = DEG_TO_RAD * random() * 360;
        this.rotation = DEG_TO_RAD * random() * 360;
        this.cosA = 1.0;
        this.size = 5.0;
        this.oscillationSpeed = (random() * 1.5 + 0.5);
        this.xSpeed = 40.0;
        this.ySpeed = (random() * 60 + 50.0);
        this.corners = new Array();
        this.time = random();
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        for (var i = 0; i < 4; i++) {
            var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
            var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
            this.corners[i] = new Vector2(dx, dy);
        }
        this.Update = function (_dt) {
            this.time += _dt;
            this.rotation += this.rotationSpeed * _dt;
            this.cosA = cos(DEG_TO_RAD * this.rotation);
            this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt
            this.pos.y += this.ySpeed * _dt;
            if (this.pos.y > ConfettiPaper.bounds.y) {
                this.pos.x = random() * ConfettiPaper.bounds.x;
                this.pos.y = 0;
            }
        }
        this.Draw = function (_g) {
            if (this.cosA > 0) {
                _g.fillStyle = this.frontColor;
            } else {
                _g.fillStyle = this.backColor;
            }
            _g.beginPath();
            _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
            for (var i = 1; i < 4; i++) {
                _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
            }
            _g.closePath();
            _g.fill();
        }
    }
    ConfettiPaper.bounds = new Vector2(0, 0);

    function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
        this.particleDist = _dist;
        this.particleCount = _count;
        this.particleMass = _mass;
        this.particleDrag = _drag;
        this.particles = new Array();
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        this.xOff = (cos(DEG_TO_RAD * _angle) * _thickness);
        this.yOff = (sin(DEG_TO_RAD * _angle) * _thickness);
        this.position = new Vector2(_x, _y);
        this.prevPosition = new Vector2(_x, _y);
        this.velocityInherit = (random() * 2 + 4);
        this.time = random() * 100;
        this.oscillationSpeed = (random() * 2 + 2);
        this.oscillationDistance = (random() * 40 + 40);
        this.ySpeed = (random() * 40 + 80);
        for (var i = 0; i < this.particleCount; i++) {
            this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
        }
        this.Update = function (_dt) {
            var i = 0;
            this.time += _dt * this.oscillationSpeed;
            this.position.y += this.ySpeed * _dt;
            this.position.x += cos(this.time) * this.oscillationDistance * _dt;
            this.particles[0].position = this.position;
            var dX = this.prevPosition.x - this.position.x;
            var dY = this.prevPosition.y - this.position.y;
            var delta = sqrt(dX * dX + dY * dY);
            this.prevPosition = new Vector2(this.position.x, this.position.y);
            for (i = 1; i < this.particleCount; i++) {
                var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
                dirP.Normalize();
                dirP.Mul((delta / _dt) * this.velocityInherit);
                this.particles[i].AddForce(dirP);
            }
            for (i = 1; i < this.particleCount; i++) {
                this.particles[i].Integrate(_dt);
            }
            for (i = 1; i < this.particleCount; i++) {
                var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
                rp2.Sub(this.particles[i - 1].position);
                rp2.Normalize();
                rp2.Mul(this.particleDist);
                rp2.Add(this.particles[i - 1].position);
                this.particles[i].position = rp2;
            }
            if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
                this.Reset();
            }
        }
        this.Reset = function () {
            this.position.y = -random() * ConfettiRibbon.bounds.y;
            this.position.x = random() * ConfettiRibbon.bounds.x;
            this.prevPosition = new Vector2(this.position.x, this.position.y);
            this.velocityInherit = random() * 2 + 4;
            this.time = random() * 100;
            this.oscillationSpeed = random() * 2.0 + 1.5;
            this.oscillationDistance = (random() * 40 + 40);
            this.ySpeed = random() * 40 + 80;
            var ci = round(random() * (colors.length - 1));
            this.frontColor = colors[ci][0];
            this.backColor = colors[ci][1];
            this.particles = new Array();
            for (var i = 0; i < this.particleCount; i++) {
                this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
            }
        };
        this.Draw = function (_g) {
            for (var i = 0; i < this.particleCount - 1; i++) {
                var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
                var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
                if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
                    _g.fillStyle = this.frontColor;
                    _g.strokeStyle = this.frontColor;
                } else {
                    _g.fillStyle = this.backColor;
                    _g.strokeStyle = this.backColor;
                }
                if (i == 0) {
                    _g.beginPath();
                    _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                    _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                    _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
                    _g.closePath();
                    _g.stroke();
                    _g.fill();
                    _g.beginPath();
                    _g.moveTo(p1.x * retina, p1.y * retina);
                    _g.lineTo(p0.x * retina, p0.y * retina);
                    _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
                    _g.closePath();
                    _g.stroke();
                    _g.fill();
                } else if (i == this.particleCount - 2) {
                    _g.beginPath();
                    _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                    _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                    _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
                    _g.closePath();
                    _g.stroke();
                    _g.fill();
                    _g.beginPath();
                    _g.moveTo(p1.x * retina, p1.y * retina);
                    _g.lineTo(p0.x * retina, p0.y * retina);
                    _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
                    _g.closePath();
                    _g.stroke();
                    _g.fill();
                } else {
                    _g.beginPath();
                    _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                    _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                    _g.lineTo(p1.x * retina, p1.y * retina);
                    _g.lineTo(p0.x * retina, p0.y * retina);
                    _g.closePath();
                    _g.stroke();
                    _g.fill();
                }
            }
        }
        this.Side = function (x1, y1, x2, y2, x3, y3) {
            return ((x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2));
        }
    }
    ConfettiRibbon.bounds = new Vector2(0, 0);
    confetti = {};
    confetti.Context = function (id) {
        var i = 0;
        var canvas = document.getElementById(id);
        var canvasParent = canvas.parentNode;
        var canvasWidth = canvasParent.offsetWidth;
        var canvasHeight = canvasParent.offsetHeight;
        canvas.width = canvasWidth * retina;
        canvas.height = canvasHeight * retina;
        var context = canvas.getContext('2d');
        var interval = null;
        var confettiRibbons = new Array();
        ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
        for (i = 0; i < confettiRibbonCount; i++) {
            confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
        }
        var confettiPapers = new Array();
        ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
        for (i = 0; i < confettiPaperCount; i++) {
            confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
        }
        this.resize = function () {
            canvasWidth = canvasParent.offsetWidth;
            canvasHeight = canvasParent.offsetHeight;
            canvas.width = canvasWidth * retina;
            canvas.height = canvasHeight * retina;
            ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
            ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
        }
        this.start = function () {
            this.stop()
            var context = this;
            this.update();
        }
        this.stop = function () {
            cAF(this.interval);
        }
        this.update = function () {
            var i = 0;
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i = 0; i < confettiPaperCount; i++) {
                confettiPapers[i].Update(duration);
                confettiPapers[i].Draw(context);
            }
            for (i = 0; i < confettiRibbonCount; i++) {
                confettiRibbons[i].Update(duration);
                confettiRibbons[i].Draw(context);
            }
            this.interval = rAF(function () {
                confetti.update();
            });
        }
    };
    var confetti = new confetti.Context('confetti');
    confetti.start();
    window.addEventListener('resize', function (event) {
        confetti.resize();
    });
});
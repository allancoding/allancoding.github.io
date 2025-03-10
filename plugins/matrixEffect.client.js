const minDelay = 0.15;
const maxDelay = 0.3;
const minSize = 10;
const maxSize = 20;
const minMod = 10;
const maxMod = 30;
const columns = Math.floor(window.innerWidth / 28);
const stripCount = Math.floor(window.innerWidth / 38);

/** @type {HTMLCanvasElement} */
let cnv;
let ctx;
const strips = [];
const usedColumns = [];
var screenWidth = 100, screenHeight = 100;
var initialized = false;
var time = undefined;
let fadeOpacity = 1;
let isPageVisible = true;
const fadeDuration = 1;

export default defineNuxtPlugin((nuxtApp) => {
    const runScript = () => {
        cnv = document.getElementById("cnv");
        ctx = cnv.getContext('2d');
        document.addEventListener('visibilitychange', function () {
            isPageVisible = !document.hidden;
            if (isPageVisible) {
                time = new Date().getTime() / 1000;
            }
        });
        
        window.addEventListener("resize", updateCanvas);
        updateCanvas();
        setInterval(redraw, 50);
    };
    nuxtApp.hook('app:error', runScript);
    nuxtApp.hook('page:finish', runScript);
});

const characters = [];
function addCharacters(start, end) {
    for (var i = start; i <= end; i++)
        characters.push(String.fromCodePoint(i));
}
addCharacters(48, 49)

function randomInt(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}

function randomFloat(start, end) {
    return start + Math.random() * (end - start);
}

function randomElement(arr) {
    return arr[randomInt(0, arr.length)];
}

function clearScreen() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}

function setFontSize(size) {
    ctx.font = `${size}px 'Fira Code', monospace`;
}


class Strip {
    constructor() {
        this.reset();
        this.revealed = randomInt(0, 2 * this.chars.length)
    }
    reset() {
        if (this.n != undefined) usedColumns[this.n] = false;
        var n;
        do {
            n = randomInt(0, columns);
        } while (usedColumns[n]);
        usedColumns[n] = true;
        this.n = n;
        this.x = n * screenWidth / columns;
        this.y = 0;
        const size = randomInt(minSize, maxSize);
        const len = screenHeight / size;
        this.mod = randomInt(minMod, maxMod);
        this.fontSize = size;
        this.chars = [];
        this.revealed = 0;
        this.time = 0;
        this.delay = randomFloat(minDelay, maxDelay);
        for (var i = 0; i < len; i++) {
            this.chars.push(randomElement(characters));
        }
    }

    draw() {
        ctx.textAlign = 'center';
        ctx.fillStyle = '#0f0';
        setFontSize(this.fontSize);
        for (var i = 0; i < this.revealed && i < this.chars.length; i++) {
            const y = this.y + this.fontSize + i * this.fontSize;
            const mod = 10;
            ctx.globalAlpha = Math.min((mod * 1000 + i - this.revealed) % mod / mod, Math.max(0, 1 + (this.chars.length - this.revealed) / this.chars.length));
            ctx.fillText(this.chars[i], this.x, y);
        }
        ctx.globalAlpha = 1;
    }

    update(dt) {
        this.time += dt;
        this.chars[randomInt(0, this.chars.length)] = randomElement(characters);
        this.chars[randomInt(0, this.chars.length)] = randomElement(characters);
        const hs = screenWidth / 2;
        const scale = 1.00;
        this.y = (screenHeight - this.chars.length * this.fontSize) / 2;
        this.x = (this.x - hs) * scale + hs;
        if (this.time > this.delay) {
            this.time -= this.delay;
            this.revealed++;
        }
        if (1 + (this.chars.length - this.revealed) / this.chars.length <= 0
            || this.x < -this.fontSize / 2
            || this.x > screenWidth + this.fontSize / 2) {
            this.reset();
        }
    }
}

function init() {
    if (initialized) return;
    initialized = true;
    for (var i = 0; i < stripCount; i++) {
        strips.push(new Strip());
    }
}

function fadeTransition(dt) {
    if (fadeOpacity > 0) {
        fadeOpacity -= dt / fadeDuration;
        fadeOpacity = Math.max(0, fadeOpacity);
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
        ctx.fillRect(0, 0, screenWidth, screenHeight);
    }
}

function redraw() {
    var currTime = new Date().getTime() / 1000;
    var dt;
    if (time === undefined) {
        dt = 0;
        time = currTime;
    } else {
        dt = currTime - time;
        time = currTime;
    }

    const maxDt = 0.1;
    if (dt > maxDt) {
        dt = maxDt;
    }

    clearScreen();
    for (var i = 0; i < strips.length; i++) {
        strips[i].update(dt);
        strips[i].draw();
    }

    fadeTransition(dt);
}

function updateCanvas() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    cnv.width = screenWidth;
    cnv.height = screenHeight;
    init();
}
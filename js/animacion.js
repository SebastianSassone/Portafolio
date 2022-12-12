 const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// obtener la posición del mouse 
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

// crear una partícula 
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // método para dibujar una partícula individual 
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#040f73';
        ctx.fill();
    }
    // verificar la posición de la partícula, verificar la posición del mouse, mover la partícula, dibujar la partícula 
    update() {
        // verificar si la partícula aún está dentro del lienzo 
        if (this.x > canvas.width || this.x < 0 ) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // verificar la detección de colisión: posición del mouse / posición de la partícula 
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 0.9) {
                this.x += 0.9;
            }
            if (mouse.x > this.x && this.x > this.size * 0.9) {
                this.x -= 0.9;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 0.9) {
                this.y += 0.9;
            }
            if (mouse.y > this.y && this.y > this.size * 0.9) {
                this.y -= 0.9;
            }
        }
        // mover la partícula 
        this.x += this.directionX;
        this.y += this.directionY;
        // dibujar la partícula 
        this.draw();

    }
}

// crear una matriz de partículas 
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1.5;
        let directionY = (Math.random() * 2) - 1.5;
        let color = '#8C5523';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// verificar si las partículas están lo suficientemente cerca como para dibujar una línea entre ellas 
function connect(){
    let eopacityValu = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                let dx = mouse.x - particlesArray[a].x;
                let dy = mouse.y - particlesArray[a].y;
                let mouseDistance = Math.sqrt(dx*dx+dy*dy);
                if (mouseDistance < 10) {
                  ctx.strokeStyle='rgba(70, 5, 140' + opacityValue + ')';
                } else {
                ctx.strokeStyle='rgba(0,0,255,' + opacityValue + ')';
                }
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    
    }
}
// bucle de animación 
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}
// cambiar el tamaño del evento
window.addEventListener('resize', 
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height/80) * (canvas.height/80));
        init();
    }
);

init();
animate();
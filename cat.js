const cat = document.getElementById("cursor-cat");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let catX = mouseX;
let catY = mouseY;

let angle = 0;

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCat() {

    const dx = mouseX - catX;
    const dy = mouseY - catY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 10) {

        const targetAngle = Math.atan2(dy, dx) * 180 / Math.PI;

        let difference = targetAngle - angle;

        difference = ((difference + 540) % 360) - 180;

        angle += difference * 0.08;

        catX += dx * 0.045;
        catY += dy * 0.045;

        cat.classList.add("running");

    } else {
        cat.classList.remove("running");
    }

    cat.style.transform =
        `translate(${catX - 25}px, ${catY - 25}px) rotate(${angle}deg)`;

    requestAnimationFrame(animateCat);
}

animateCat();
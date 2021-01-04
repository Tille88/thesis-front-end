import "../style/page-thank-you.scss";
const confetti = require('canvas-confetti');

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true
});

myConfetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: 0.5,
      y: 0.4
    }
  });

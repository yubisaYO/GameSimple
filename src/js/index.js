/*? no js js needed from me */
const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.width * ASPECT_RATIO.width;
canvas.height = DISPLAY_PIXEL.height * ASPECT_RATIO.height;

console.log({ canvas });

const enemyProperty = {
  width: 100,
  height: 100,
  speed: 1,
  color: "red",
  position: {
    x: canvas.width - 100,
    y: canvas.height - 100,
  },
};

const playerProperty = {
  width: 50,
  height: 50,
  speed: 1,
  color: "tomato",
  position: {
    x: 50,
    y: canvas.height - 50,
  },
};

const ground = new Ground(
  canvas.width,
  canvas.height,
  "./src/assets/GroundImage.png"
);
const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

function animate() {
  ground.create();
  player.create();
  enemy.create();
  player.update();
  enemy.update();
  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", (cb) => {
  player.movement(cb.key);
});

animate();

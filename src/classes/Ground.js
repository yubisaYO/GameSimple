class Ground {
  constructor(width, height, image) {
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.position = {
      x: 0,
      y: 0,
    };
  }

  create() {
    board.drawImage(this.image, 0, 0);
  }
}

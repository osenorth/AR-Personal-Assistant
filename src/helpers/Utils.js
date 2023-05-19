const angleBetweenThreePoints = (point1, point2, point3) => {
  // angle in radian
  let angle =
    Math.atan2(point3.y - point2.y, point3.x - point2.x) -
    Math.atan2(point1.y - point2.y, point1.x - point2.x);

  // converting to degrees
  angle = (angle * 180) / Math.PI;
  if (angle < 0) {
    angle += 360;
    if (angle > 180) {
      angle = 360 - angle;
    }
  } else if (angle > 180) {
    angle = 360 - angle;
  }
  return angle;
};

const drawSegment = (ctx, [mx, my], [tx, ty], color) => {
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(tx, ty);
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();
};

const drawPoint = (ctx, x, y, r, color) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

export { angleBetweenThreePoints, drawSegment, drawPoint };

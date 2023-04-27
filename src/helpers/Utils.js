function angleBetweenThreePoints(pos) {
  //console.log("Reached angle")
  //vertexed around p1

  var a = Math.pow(pos[1].x - pos[0].x, 2) + Math.pow(pos[1].y - pos[0].y, 2);
  var b = Math.pow(pos[1].x - pos[2].x, 2) + Math.pow(pos[1].y - pos[2].y, 2);
  var c = Math.pow(pos[2].x - pos[0].x, 2) + Math.pow(pos[2].y - pos[0].y, 2);

  //angle in radians
  //var resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));

  //angle in degrees
  var resultDegree =
    (Math.acos((a + b - c) / Math.sqrt(4 * a * b)) * 180) / Math.PI;
  return resultDegree;
}

function drawSegment(ctx, [mx, my], [tx, ty], color) {
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(tx, ty);
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

export { angleBetweenThreePoints, drawSegment, drawPoint };

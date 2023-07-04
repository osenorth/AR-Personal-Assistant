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

const getParamsForYoga = (modelName) => {
  const triParams = {
    body: {
      position: [5, 0.5, 0],
      rotation: [0, 0, 0],
    },
    hair: {
      position: [-9.17, 6.85, 0.24],
      rotation: [0, 0, -0.06],
    },
    brows001: { position: [-9.07, 7.8, 0.54], rotation: [0, 0, -0.06] },
    lash001: { position: [-8.85, 7.61, 0.55], rotation: [0, 0, -0.08] },
    eyes: {
      position: [-8.81, 7.35, 0.48],
      rotation: [1.7, -0.06, -0.04],
      scale: 0.85,
    },
    base: {
      position: [-8.23, 6.73, 0.39],
      rotation: [Math.PI / 2, -0.06, 0],
      scale: 0.15,
    },
    tops: {
      position: [-7.03, 5.41, 0.38],
      rotation: [Math.PI / 2, -0.06, 0],
      scale: 0.15,
    },
    bottoms: {
      position: [-5.3, 2.86, -0.23],
      rotation: [Math.PI / 2, -0.06, 0],
      scale: 0.15,
    },
    shoes: {
      position: [-5.57, 0.58, 0.64],
      rotation: [Math.PI / 2, -0.06, 0],
      scale: 0.15,
    },
    cube: {
      position: [-1.16, 0.55, 0.68],
      rotation: [0, -Math.PI / 2, 0],
      scale: [2.47, 5.98, 7.98],
    },
  };

  const viraParams = {
    body: {
      position: [0, 0, 0],
      rotation: [0, 0.3, 0],
    },
    hair: {
      position: [-0.27, 8.9, 4.67],
      rotation: [0, 0, 0],
    },
    brows001: {
      position: [-0.28, 8.65, 5.59],
      rotation: [0, 0, 0],
    },
    lash001: {
      position: [-0.29, 8.45, 5.42],
      rotation: [0, 0, -0.02],
    },
    eyes: {
      position: [-0.28, 8.45, 5.15],
      rotation: [1.7, 0, -0.05],
      scale: 0.85,
    },
    base: {
      position: [-0.31, 7.96, 5.42],
      rotation: [Math.PI / 2, 0, 0],
      scale: 0.15,
    },
    tops: {
      position: [-0.45, 7.1, 2.93],
      rotation: [Math.PI / 2, 0, 0],
      scale: 0.15,
    },
    bottoms: {
      position: [-0.12, 5.85, -0.89],
      rotation: [Math.PI / 2, 0, 0],
      scale: 0.15,
    },
    shoes: {
      position: [0.13, 3.58, -2.84],
      rotation: [Math.PI / 2, 0, 0],
      scale: 0.15,
    },
    cube: {
      position: [0, 0.02, 0.68],
      scale: [2.47, 5.98, 7.98],
    },
  };

  if (modelName === "trikonasana") return triParams;
  if (modelName === "virabhadrasana3") return viraParams;
};

export { angleBetweenThreePoints, drawSegment, drawPoint, getParamsForYoga };

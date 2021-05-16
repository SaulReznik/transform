export const degreeToRadian = degree => degree * (Math.PI / 180);
export const radianToDegree = radian => radian * (180 / Math.PI);

export const multiplyMatrixWithPoint = (matrix, point) => {
  return point.map((dimension, index) => {
    let result = 0;

    for (let i = 0; i < 4; i++) {
      const matrixIndex = index * 4 + i;
      result += dimension * matrix[matrixIndex];
    }

    return result;
  })
};

export const matrixToPoints = matrix => {
  const result = [];

  for (let i = 0; i < 4; i++) {
    const onePoint = [];

    for (let j = 0; j < 4; j++) {
      onePoint.push(matrix[4 * i + j]);
    }
    
    result.push(onePoint);
  }

  return result;
};

export const pointsToMatrix = points => points.reduce((acc, points) => [...acc, ...points], []);

export const multiplyMatrices = (matrixA, matrixB) => {
  const separatePoints = matrixToPoints(matrixB);

  return pointsToMatrix(separatePoints.map(point => multiplyMatrixWithPoint(matrixA, point)));
};

export const matrixToCSSMatrix = matrix => `matrix3d(${matrix.join(',')})`;

export const rotationMatrixGenerator = angle => {
  const radians = degreeToRadian(angle);

  return [
    Math.cos(radians), -Math.sin(radians),    0,    0,
    Math.sin(radians),  Math.cos(radians),    0,    0,
                    0,                  0,    1,    0,
                    0,                  0,    0,    1
  ];
};

export const scaleMatrixGenerator = ({ x, y, z }) => (
  [
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1
  ]
);
export const degreeToRadian = degree => degree * (Math.PI / 180);

// Appling one transformation to the single point
export const multiplyMatrixWithPoint = (matrix, point) => {
  return point.map((dimension, index) => {
    let result = 0;

    for (let i = 0; i < 4; i++) {
      const matrixIndex = index * 4 + i;
      result += dimension * matrix[matrixIndex];
    }

    return +result.toFixed(2);
  })
};

// Just creating 2D array to make it easy to calculate the matrix
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

export const multiplyMatrices = (B, A) => {
  const result = [];

  for (let i = 0; i < 4; ++i){
    for (let j = 0; j < 4; ++j){
      let cell = 0;

      for (let k = 0; k < 4; ++k) {
          cell += A[4 * i + k] * B[4 * k + j];
      }
      result.push(cell);
    }
  }
  return result;
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

export const scaleMatrixGenerator = ({ x, y }) => (
    [
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]
);

export const translateMatrixGenerator = ({ x, y }) => (
    [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, 0, 1
    ]
);
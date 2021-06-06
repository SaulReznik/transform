import { useCallback, useMemo, useState } from 'react';
import useStyles from './styles.js';

import Rotation from './components/Rotation';
import Scale from './components/Scale';
import Translate from './components/Translate';
import Screen from './components/Screen';

import { 
  rotationMatrixGenerator,
  scaleMatrixGenerator,
  translateMatrixGenerator,
  multiplyMatrices,
} from './utils/helpers';
import { DEFAULT_MATRIX, DEFAULT_XY } from './utils/constants';

const App = () => {
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [scale, setScale] = useState(DEFAULT_XY);
  const [translate, setTranslate] = useState(DEFAULT_XY);

  const classes = useStyles();
  const { app } = classes;

  // ---------------------- Rotate --------------------- //
  const rotate = useCallback(e => setRotationAngle(e.target.value), []);

  // ---------------------- Scale --------------------- //
  const changeScale = useCallback((e, dimension) => {
    const { value } = e.target;
    const updatedScale = {
      ...scale,
      [dimension]: +value
    };

    setScale(updatedScale);
  }, [scale]);

  // ------------------ Translate --------------------- //
  const changeTranslation = useCallback((e, position) => {
    const { value } = e.target;
    const updatedTranslation = {
      ...translate,
      [position]: +value
    };

    setTranslate(updatedTranslation);
  }, [translate]);

  useMemo(() => {
    const rotationMatrix = rotationMatrixGenerator(rotationAngle);
    const translateMatrix = translateMatrixGenerator(translate);
    const scaleMatrix = scaleMatrixGenerator(scale);

    const matrixA = multiplyMatrices(translateMatrix, rotationMatrix)
    setMatrix(multiplyMatrices(matrixA, scaleMatrix));
  }, [rotationAngle, translate, scale]);

  return (
    <div className={app}>
      <div className="sliderBar">
        <Rotation 
          value={rotationAngle}
          onChange={rotate}
        />
        {
          Object.keys(scale).map((dimension, index) => (
            <Scale
              key={index}
              value={scale[dimension]}
              dimension={dimension}
              onChange={changeScale}
            />
          ))
        }
        {
          Object.keys(translate).map((position, index) => (
            <Translate
              key={index}
              value={translate[position]}
              position={position}
              onChange={changeTranslation}
            />
          ))
        }
      </div>
      <Screen matrix={matrix} />
    </div> 
  );
}

export default App;

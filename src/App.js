import { useCallback, useMemo, useState } from 'react';
import useStyles from './styles.js';

// import Slider from './components/Slider';
import Rotation from './components/Rotation';
import Scale from './components/Scale';
import Translate from './components/Translate';
import Screen from './components/Screen';

import { 
  rotationMatrixGenerator,
  scaleMatrixGenerator,
  translateMatrixGenerator,
  multiplyMatrices
} from './utils/helpers';
import { DEFAULT_MATRIX, DEFAULT_XY } from './utils/constants';

const App = () => {
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX);
  const [currentMatrix, setCurrentMatrix] = useState(matrix);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [scale, setScale] = useState(DEFAULT_XY);
  const [translate, setTranslate] = useState(DEFAULT_XY);
  const [transformations, setTransformations] = useState([]);

  const classes = useStyles();
  const { app } = classes;


  const rotate = useCallback(e => {
    const { value: angle } = e.target;
    const rotationMatrix = rotationMatrixGenerator(+angle);
    const updatedMatrix = multiplyMatrices(DEFAULT_MATRIX, rotationMatrix);

    setCurrentMatrix(updatedMatrix);
    setRotationAngle(angle);
  }, []);

  const changeScale = useCallback((e, dimension) => {
    const { value } = e.target;
    const updatedScale = {
      ...scale,
      [dimension]: +value
    };

    const scaleMatrix = scaleMatrixGenerator(updatedScale);
    const updatedMatrix = multiplyMatrices(DEFAULT_MATRIX, scaleMatrix);

    setCurrentMatrix(updatedMatrix);
    setScale(updatedScale);
  }, [scale]);

  const changeTranslation = useCallback((e, position) => {
    const { value } = e.target;
    const updatedTranslation = {
      ...translate,
      [position]: +value
    };

    const translateMatrix = translateMatrixGenerator(updatedTranslation);
    const updatedMatrix = multiplyMatrices(DEFAULT_MATRIX, translateMatrix);

    setCurrentMatrix(updatedMatrix);
    setTranslate(updatedTranslation);
  }, [translate]);

  const mouseUp = useCallback(() => {
    console.log('called');
    setTransformations([...transformations, currentMatrix]);
  }, [transformations, currentMatrix]);

  useMemo(() => {
    const updatedMatrix = transformations.reduce((acc, curr) => {
      return multiplyMatrices(curr, acc);
    }, DEFAULT_MATRIX);

    setMatrix(updatedMatrix);
  }, [transformations]);

  return (
    <div className={app}>
      <div className="sliderBar">
        <Rotation 
          value={rotationAngle}
          onChange={rotate}
          onMouseUp={mouseUp}
        />
        {
          Object.keys(scale).map((dimension, index) => (
            <Scale
              key={index}
              value={scale[dimension]}
              dimension={dimension}
              onChange={changeScale}
              onMouseUp={mouseUp}
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
              onMouseUp={mouseUp}
            />
          ))
        }
      </div>
      <Screen currentMatrix={currentMatrix} matrix={matrix} />
    </div> 
  );
}

export default App;

import { useCallback, useState } from 'react';
import useStyles from './styles.js';

// import Slider from './components/Slider';
import Rotation from './components/Rotation';
import Scale from './components/Scale';
import Screen from './components/Screen';

import { 
  rotationMatrixGenerator,
  scaleMatrixGenerator,
  multiplyMatrices
} from './utils/helpers';
import { DEFAULT_MATRIX } from './utils/constants';

const App = () => {
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [scale, setScale] = useState({
    x: 1,
    y: 1,
    z: 1,
  });

  const classes = useStyles();
  const { app } = classes;


  const rotate = useCallback(e => {
    const { value: angle } = e.target;
    const rotationMatrix = rotationMatrixGenerator(+angle);
    const updatedMatrix = multiplyMatrices(DEFAULT_MATRIX, rotationMatrix);
    setMatrix(updatedMatrix);
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

    setMatrix(updatedMatrix);
    setScale(updatedScale);
  }, [scale]);

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
      </div>
      <Screen matrix={matrix} />
    </div> 
  );
}

export default App;

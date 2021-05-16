import { useCallback, useState } from 'react';
import useStyles from './styles.js';

// import Slider from './components/Slider';
import Rotation from './components/Rotation';
import Screen from './components/Screen';

import { 
  rotationMatrixGenerator,
  multiplyMatrices
} from './utils/helpers';
import { DEFAULT_MATRIX } from './utils/constants';

const App = () => {
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX);
  const [rotationAngle, setRotationAngle] = useState(0);

  const classes = useStyles();
  const { app } = classes;


  const rotate = useCallback(e => {
    const { value: angle } = e.target;
    const rotationMatrix = rotationMatrixGenerator(+angle);
    const newMatrix = multiplyMatrices(DEFAULT_MATRIX, rotationMatrix);
    setMatrix(newMatrix);
    setRotationAngle(angle);
  }, []);

  return (
    <div className={app}>
      <div className="sliderBar">
        <Rotation 
          value={rotationAngle}
          onChange={rotate}
        />
      </div>
      <Screen matrix={matrix} />
    </div> 
  );
}

export default App;

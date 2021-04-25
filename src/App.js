import { useCallback, useState } from 'react';
import useStyles from './styles.js';

import Slider from './components/Slider';
import Rotation from './components/Rotation';
import Screen from './components/Screen';

import { degreeToRadian } from './utils/helpers';

const App = () => {
  const [matrix, setMatrix] = useState({
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0
  });
  const [rotationAngle, setRotationAngle] = useState(0);

  const classes = useStyles();
  const { app } = classes;

  const callback = (type, value) => { setMatrix((prevMetrix) => ({...prevMetrix, [type]: value })) };
  const sliderHandler = useCallback(callback, []);

  const rotate = e => {
    const { value } = e.target;
    const rotationRadian = degreeToRadian(value);
    const newScale = Math.cos(rotationRadian).toFixed(2);
    const newSkew = Math.sin(rotationRadian).toFixed(2);

    setRotationAngle(value);
    setMatrix({
      ...matrix,
      scaleX: newScale,
      scaleY: newScale,
      skewX: -newSkew,
      skewY: newSkew,
    });
  };

  return (
    <div className={app}>
      <div className="sliderBar">
        <Rotation 
          value={rotationAngle}
          onChange={rotate}
        />
        {
          Object.keys(matrix).map((key, index) => {
            return (
              <Slider
                key={`${key}${index}`}
                onChange={sliderHandler}
                name={key}
                value={matrix[key]}
              />
            );
          })
        }
      </div>
      <Screen matrix={matrix} />
    </div> 
  );
}

export default App;

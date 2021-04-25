import { useCallback, useState } from 'react';
import useStyles from './styles.js';

import Slider from './components/Slider';
import Screen from './components/Screen';

import { degreeToRadian, radianToDegree } from './utils/helpers';

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
    const newScale = Math.cos(rotationRadian);
    const newSkewX = -Math.sin(rotationRadian);
    const newSkewY = Math.sin(rotationRadian);
    setRotationAngle(value);
    setMatrix({
      ...matrix,
      scaleX: newScale,
      scaleY: newScale,
      skewX: newSkewX,
      skewY: newSkewY
    });
  };

  return (
    <div className={app}>
      <div className="sliderBar">
        <div>
          <div>Rotation Angle: {rotationAngle}</div>
          <input
            type="range"
            max="360"
            value={rotationAngle}
            onChange={rotate}
          />
        </div>
        {
          Object.keys(matrix).map(key => {
            return (
              <Slider
                key={matrix}
                onChange={sliderHandler}
                type={key}
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

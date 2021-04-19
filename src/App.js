import { useCallback, useState } from 'react';
import useStyles from './styles.js';

import Slider from './components/Slider';
import Screen from './components/Screen';

const App = () => {
  const [matrix, setMatrix] = useState({
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0
  });

  const classes = useStyles();
  const { app } = classes;

  const callback = (type, value) => { setMatrix((prevMetrix) => ({...prevMetrix, [type]: value })) };
  const sliderHandler = useCallback(callback, []);

  return (
    <div className={app}>
      <div className="sliderBar">
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

import { useState } from 'react';
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

  const sliderHandler = (type, value) => {
    setMatrix({
      ...matrix,
      [type]: value,
    })
  }

  return (
    <div className={app}>
      <div className="sliderBar">
        {
          Object.entries(matrix).map((item) => {
            return(
              <Slider
                onChange={sliderHandler}
                value={item}
              />
            )
          })
        }
      </div>
      <Screen matrix={matrix} />
    </div> 
  );
}

export default App;

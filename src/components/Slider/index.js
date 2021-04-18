import { useState, useEffect } from 'react';

import useStyles from './styles';

const Slider = ({ onChange: parentOnChange, value: parentValue }) => {
    const [type] = useState(parentValue[0])
    const [value, setValue] = useState(parentValue[1]);
    const [minMax, setMinMax] = useState(10);

    const classes = useStyles();
    const { container } = classes;

    useEffect(() => {
        if (type.includes('translate')) {
            setMinMax(minMax * 100);
        }
    }, []);

    const sliderHandler = e => {
        e.preventDefault();

        const { value } = e.target;

        setValue(value);
        parentOnChange(type, value)
    }

    return (
        <div className={container}>
            <div>{type}: {value}</div>
            <input
                type="range"
                min={-minMax}
                max={minMax}
                onChange={e => sliderHandler(e)}
                value={value}
            />
        </div>
    )
};

export default Slider;
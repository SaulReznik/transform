import { useMemo, memo } from 'react';

import useStyles from './styles';

const STANDART_MIN_MAX = 10;

const Slider = ({ onChange: parentOnChange, value: parentValue, type }) => {

    const classes = useStyles();
    const { container } = classes;

    const minMax = useMemo(() => type.includes('translate') ? STANDART_MIN_MAX * 100 : STANDART_MIN_MAX, [type]);

    const sliderHandler = e => {
        e.preventDefault();
        const { value } = e.target;
        parentOnChange(type, value)
    }

    return (
        <div className={container}>
            <div>{type}: {parentValue} - {minMax}</div>
            <input
                type="range"
                min={-minMax}
                max={minMax}
                onChange={sliderHandler}
                value={parentValue}
            />
        </div>
    )
};

export default memo(Slider);
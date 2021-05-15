import { useMemo, memo } from 'react';

import useStyles from './styles';

import { STANDART_MIN_MAX } from '../../utils/constants';

const Slider = ({ onChange: parentOnChange, value: parentValue, name }) => {

    const classes = useStyles();
    const { container } = classes;

    const minMax = useMemo(() => name.includes('translate') ? STANDART_MIN_MAX * 100 : STANDART_MIN_MAX, [name]);

    const sliderHandler = e => {
        e.preventDefault();
        const { value } = e.target;
        parentOnChange(name, value)
    }

    return (
        <div className={container}>
            <div>{name}: {parentValue} - {minMax}</div>
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
import useStyles from './styles';

const Screen = ({ currentMatrix, matrix }) => {
    const classes = useStyles({ currentMatrix, matrix });
    const { container, target, cMatrix } = classes;

    return (
        <div className={container}>
            <div className={target}>target</div>
            <div className={cMatrix}>current matrix</div>
        </div>
    )
};

export default Screen;
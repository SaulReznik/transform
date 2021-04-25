import useStyles from './styles';

const Screen = ({ matrix }) => {
    const classes = useStyles({ matrix });
    const { container, target } = classes;

    return (
        <div className={container}>
            <div className={target}>target</div>
        </div>
    )
};

export default Screen;
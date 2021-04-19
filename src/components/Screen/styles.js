import  {createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        height: 500,
        width: 800,
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    target: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        transform: (({ matrix }) => `matrix(${matrix.scaleX}, ${matrix.skewY}, ${matrix.skewX}, ${matrix.scaleY}, ${matrix.translateX}, ${matrix.translateY})`),
        // transition: 'all 300ms',
    }
});

export default useStyles;
import { createUseStyles } from 'react-jss';
import { matrixToCSSMatrix } from '../../utils/helpers';

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
        transform: (({ matrix }) => matrixToCSSMatrix(matrix)),
        // transition: 'all 300ms',
    }
});

export default useStyles;
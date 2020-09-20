import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '60px',
        textAlign: 'right',
        display: ' flex',
        justifyContent: 'space-between',
        backgroundColor: '#9d2727fc'
    },

    href: {
        color: 'white'
    },
    logo: {
        padding: '2px',
        height: '55px'
    },
    lists: {
        display: 'flex'
    },
    button: {
        color: '#fff',
        backgroundColor: '#9d2727fc',
        margin: '10px',
        border: 'white 1px solid',
        width: '10em'
    }
});
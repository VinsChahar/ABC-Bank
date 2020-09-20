import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: "100%",
        display: 'flex',
        margin: '2.4em'
    },
    cards: {
        display: "flex",
        width: '100%',
        maxWidth: '300px',
        flexDirection: 'column',
    },
    card: {
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2em'
    },
    cardContant: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxes: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        marginLeft: '2em'
    },
    boxContant: {
        width: '100%'
    },
    box: {
        width: "100%",
        minHeight: '300px',
        display: 'flex',
    },
    edit: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(2),
    },
    typography: {
        margin: 14,
    },
    maroor: {
        color: "#9d2727fc"
    },
    details: {
        margin: '2em 0 0 6em',
        display: 'flex',
        flexDirection: 'column',
    },
    detailsHeader: {
        marginBottom: '2em'
    }

}));
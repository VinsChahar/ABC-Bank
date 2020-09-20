import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        margin: '2.4em',
        width: '100%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        "& .MuiPaper-root":{
            width: "100%"
        }
    },
    table: {
        width: '100%'
    }
});
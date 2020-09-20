import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 320,
        margin: '2.4em',
        height: '100%',
        minHeight: '550px',
        backgroundColor: theme.palette.background.paper,
        "& .Mui-selected": {
            background: "#9d2727fc",
            color: "#fff"
        },
    },
}));

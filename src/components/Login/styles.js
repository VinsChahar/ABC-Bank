import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'white',
    marginTop:'8rem'
  },
  Login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  },
  textField: {
    width: '400px'
  },
  button: {
    color:'#fff !important',
    backgroundColor:'#9d2727fc !important',
    margin: '4em !important'
  }
});
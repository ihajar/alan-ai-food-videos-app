import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 200,
        width: 380,
    }, 
    border: {
        border: 'solid',
     },
    fullHeightCard: {
        height: '100%',
    },
     grid: {
        display: 'flex',
    },
    card: {
        width: 380,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },
    activeCard: {
        borderBottom: '10px solid #F34213',
    },
    title: {
        padding: '10px 16px',
        fontSize: '25px',
        fontWeight: "bold",
        color: '#050505',
        textAlign: 'center',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },

});
import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    body:{
        fontFamily:'Helvetica Neue',
        background:'linear-gradient(to right bottom, #313132, #161618)'
    },
    title:{
        // display:'none',
        [theme.breakpoints.up('xs')]:{   
                textDecoration:'none',
                color:'white',
                fontFamily:'Bahnschrift'
        },
        // fontFamily:'Helvetica Neue'
    },
    toolbar:{
        display: 'flex', justifyContent: 'space-between',
    },
    search:{
        display:'flex',
        justifyContent: 'space-between',
        backgroundColor:'#35363a',
        padding:5,
        borderRadius:30
    },
    inputRoot:{
        color:'white',
        borderRadius:5,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
        transition: theme.transitions.create('width'), 
        width: '100%', 
        [theme.breakpoints.up('md')]: { width: '20ch' },
      },
    searchIcon:{
        display:'flex',
        pointerEvents:'none',
        padding:theme.spacing(0,2),
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    navContainer:{
        display:'flex',
    },
    link:{
        color:"white",
        textDecoration:'none',
        marginRight:'45px',
        fontFamily:'Bahnschrift',
        fontSize:'17px',
        padding:'0px',
        display:'flex',
        alignItems:'center',
        padding:'5px',
        // backgroundColor:'blue',
        
    },
    activeLink:{
        textDecoration:'none',
        marginRight:'45px',
        fontFamily:'Bahnschrift',
        fontSize:'17px',
        padding:'5px',
        display:'flex',
        alignItems:'center',
        borderBottom:'2px solid #CFC862',
        color:'#b09c19',
        backgroundColor:'#e7e5e4',
        transition:'0.5s'
    },
    rightGrid:{
        color:'white'
    },
    leftGrid:{
        color:'white'
    }
}))
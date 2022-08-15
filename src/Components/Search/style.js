import { makeStyles } from "@mui/styles";


export default makeStyles((theme)=>({
    card:{
        backgroundColor:'#35363a',
        color:'white',
        margin:'10px',
    },
    bookTitle:{
        color:'white',
        fontFamily:'Bahnschrift',
        textAlign:'center',
        padding:'10px'
    },
    media:{
         height:'80vh'
    },
    cardContentDiv:{
        //  display:'flex',
        //  justifyContent:'space-around'
    },
    rating:{
        display:'flex',
        justifyContent:'space-between'
    },
    btn:{
        backgroundColor:'inherit',
        padding:'10px',
        borderRadius:'30%'
    }
}))
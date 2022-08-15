import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    footerBody:{
        background:'linear-gradient(to right bottom, #313132, #161618)',
        padding:'5px',
        color:'white',
        "& li":{
            listStyleType:'none',
            marginTop:'10px',
        }
    },
    gridContainer:{
        margin:'10px',
        width:'fit-content',
        borderBottom:'2px solid #b09c19'
    },
    gridItem:{
        // marginLeft:'1px',
        display:'flex',
        justifyContent:'space-around',
        "& p,li":{
            color:'#c9cacc',
            fontSize:'13px',
            fontFamily:'Bahnschrift',
        }
    },
    inlineIcon:{
        position:'relative',
        top:'5px'
    },
    socialMediaBox:{
        display:'flex',
        justifyContent:'space-around'
    },
    socialMediLinks:{
        width:'30%',
        display:'flex',
        justifyContent:'space-between'
    },
    mediaIcon:{
        color:'#78797a',
        fontSize:'x-large',
    }
}))
import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    mainContainer:{
        display:"grid",
        gridTemplateColumns:'1fr 2fr'
    },
    leftSection:{
        margin:'10px',
        borderRadius:'10px',
        display:"flex",
        justifyContent:'flex-start'
    },
    rightSection:{
        background:'linear-gradient(to right bottom, #313132, #161618)',
        color:'white',
        padding:'10px',
        margin:'5px',
        borderRadius:'5px'
    },
    leftImage:{
        height:'80vh',
        width:'60vh'
    },
    subsection:{
        display:'flex',
        '& p,a':{
            paddingLeft:'30px',
            textDecoration:'none',
            color:'inherit'
        }
    }
}))
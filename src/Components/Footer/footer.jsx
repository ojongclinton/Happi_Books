import React from 'react'
import useStyles from './style'
import {Grid,CssBaseline, Box, Typography} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PublishIcon from '@mui/icons-material/Publish';
import DeckIcon from '@mui/icons-material/Deck';

function Footer() {
    const classes = useStyles();
  return (
    <div className={classes.footerBody}>
        <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={3} className={classes.gridItem} >
                <div>
                <Typography variant='h5' style={{fontSize:'1.5rem' ,fontWeight:'bold'}}>Services</Typography>
                    <li><CopyrightIcon className={classes.inlineIcon} /> Copywriting</li>
                    <li><DeckIcon className={classes.inlineIcon} /> Real estates</li>
                    <li><PublishIcon className={classes.inlineIcon} /> Publishing</li>
                </div>
            </Grid>
            <Grid item xs={4} className={classes.gridItem}>
                <div>
                    <Typography variant='h5' style={{fontSize:'1.5rem' ,fontWeight:'bold', color:'white'}}>About</Typography>
                    <p>There is a man called william There is a man called william There is a man called william
                    There is a man called william There is a man called william There is a man called william 
                    There is a man called william There is a man called william
                    </p>
                </div>
            
            </Grid>
            <Grid item xs={4} className={classes.gridItem}>
                <div>
                <Typography variant='h5' style={{fontSize:'1.5rem' ,fontWeight:'bold'}}>Company</Typography>
                <p>There is a man called william There is a man called william There is a man called william
                There is a man called william There is a man called william There is a man called william 
                There is a man called william There is a man called william
                </p>
                </div>
            
            </Grid>
        </Grid>
        <Box className={classes.socialMediaBox}>
            <div className={classes.socialMediLinks}>
                <p><InstagramIcon className={classes.mediaIcon}/></p>
                <p><FacebookIcon className={classes.mediaIcon}/></p>
                <p><TwitterIcon className={classes.mediaIcon}/></p>
                <p><LinkedInIcon className={classes.mediaIcon}/></p>
                <p><WhatsAppIcon className={classes.mediaIcon} /></p>
                {/* <p></></p> */}
            </div>
        </Box>
    </div>
  )
}

export default Footer
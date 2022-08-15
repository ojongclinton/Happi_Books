import React from 'react'
 import { useGetBooksQuery } from '../../api/booksApi'
import useStyles from './style'
import { Card, CardContent, CardMedia, Grid, Rating, Typography,Chip } from '@mui/material';
import { Spinner } from '../Spinner';
import {useNavigate} from "react-router-dom"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


let formatBook =(bookname)=>{
    let name =bookname;
    var r= new RegExp(/^[^\(]+/g);
    var res = name.match(r) ;

    return res
}

function Home() {

const navigate = useNavigate()
const classes = useStyles();
let content


const {data:books =[],
    isLoading,
    isSuccess,
    isError,
    } = useGetBooksQuery()

if (isLoading){
    content = <Spinner text='Loading...'/>
}
else if(isSuccess){

    content = 
        <div>
        <Grid container spacing={1}>
            {books.map((book)=>(
                <Grid item xs={3} className={classes.gridItem} key={book.book_id}>
                    <Card className={classes.card} >
                    <CardMedia className={classes.media}
                        component="img"
                        image={book.cover}
                        alt='book-cover'

                    />
                    <CardContent style={{padding:8}} >
                        <div>
                        <Typography color='black' className={classes.bookTitle}>{formatBook(book.name)[0]}</Typography>
                        <div className={classes.rating}>
                            <Rating defaultValue={book.rating} precision={0.5} readOnly/>
                            <Chip 
                                sx={{color:'white', fontFamily:"Bahnschrift",'&&:hover':{backgroundColor:'gray'}}}
                                label="view More"
                                variant='outlined'
                                onClick={()=>{navigate(`/book/${book.book_id}`)}}
                                icon={<MoreHorizIcon style={{color:'white'}} />}
                            />
                        </div>
                        
                        </div>
                    </CardContent>
                </Card>
                </Grid>
            ))}
        </Grid>
    </div>

}
else if(isError){
    content = <div style={{height:'70vh'}}><h1 style={{display:'flex',justifyContent:'space-around',color:'#290000'}}>An error occured</h1><p style={{display:'flex',justifyContent:'space-around',}}></p></div>
}
    return (
    <h1>{content}</h1>
  )
}

export default Home

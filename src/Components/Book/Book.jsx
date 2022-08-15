import { Card,CardMedia,Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { booksApi, useGetBookInfoQuery } from '../../api/booksApi'
import useStyles from './style'
import { Spinner } from '../Spinner';

const bookStatic =   {book_id: 58784475, name: 'Tomorrow, and Tomorrow, and Tomorrow', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636978687l/58784475.jpg', url: 'https://www.goodreads.com/book/show/58784475',authors: ['Gabrielle Zevin'],book_id: 58784475,cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636978687l/58784475.jpg",name: "Tomorrow, and Tomorrow, and Tomorrow",pages: 416,published_date: "July 5th 2022",rating: 4,synopsis: "In this exhilarating novel by the best-selling author of The Storied Life of A. J. Fikry two friends--often in love, but never lovers--come together as creative partners in the world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.On a bitter-cold day, in the December of his junior year at Harvard, Sam MIn this exhilarating novel by the best-selling author of The Storied Life of A. J. Fikry two friends--often in love, but never lovers--come together as creative partners in the world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom. These friends, intimates since childhood, borrow money, beg favors, and, before even graduating college, they have created their first blockbuster,  Ichigo. Overnight, the world is theirs. Not even twenty-five years old, Sam and Sadie are brilliant, successful, and rich, but these qualities won't protect them from their own creative ambitions or the betrayals of their hearts.Spanning thirty years, from Cambridge, Massachusetts, to Venice Beach, California, and lands in between and far beyond, Gabrielle Zevin's Tomorrow, and Tomorrow, and Tomorrow is a dazzling and intricately imagined novel that examines the multifarious nature of identity, disability, failure, the redemptive possibilities in play, and above all, our need to connect: to be loved and to love. Yes, it is a love story, but it is not one you have read before.",url: "https://www.goodreads.com/book/show/58784475"}

const BookDataReady = ({classes,bookStatic}) =>{
  return(
    <div className={classes.mainContainer}>
        <div className={classes.leftSection}>
      <img src={bookStatic.cover} className={classes.leftImage}/>
        </div>
        <div className={classes.rightSection}>
          <Typography variant='h5' style={{
            fontFamily:'Bahnschrift',
            display:'flex',
            justifyContent:'space-around'
            }}>{bookStatic.name}</Typography>
          <Typography variant='h5' style={{
            fontFamily:'Bahnschrift',
            padding:'10px'
            }}><b>By : </b>" {bookStatic.authors} "</Typography>
          <Typography variant='body1' style={{fontFamily:'Bahnschrift'}}>{bookStatic.synopsis}</Typography>
          <div className={classes.subsection}>
            <p> <a href={bookStatic.url}>GoodReads</a>
            </p> <p>pages: {bookStatic.pages}</p>
            <p>Date published: {bookStatic.published_date}</p>
          </div>
        </div>
    </div>
  )
}

function Book() {
const classes = useStyles()
let {bookId} = useParams()
const {data:bookInfo =[],
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
        refetch
        } = useGetBookInfoQuery(bookId)
console.log(bookInfo,error)
  return (
    <div>
      {isSuccess? <BookDataReady classes={classes} bookStatic={bookInfo}/>:<Spinner text='Loading.....'/>}
    </div>
  )
}

export default Book
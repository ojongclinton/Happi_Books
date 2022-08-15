import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const happiBooksHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI1,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI2
}

const baseUrl = 'https://hapi-books.p.rapidapi.com';

const createRequest = (url)=>({url,headers:happiBooksHeaders})

const theDate = new Date();
const MONTH = theDate.getMonth();
const YEAR = theDate.getFullYear();

export const booksApi = createApi({
    reducerPath:'bookApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getBooks:builder.query({
            query:()=> createRequest(`/month/${YEAR}/${MONTH}`)
        }),
        getBookInfo:builder.query({
            query:bookId=> createRequest(`/book/${bookId}`)
        }),
        searchByName:builder.query({
            query:name => createRequest(`/search/${name}`)
            
        })
    })
})

export const {
    useGetBooksQuery,
    useGetBookInfoQuery,
    useSearchByNameQuery
            } = booksApi
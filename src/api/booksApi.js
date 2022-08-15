import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const happiBooksHeaders = {
    'X-RapidAPI-Key': '1e10034f34msh8d612ecfdae8967p173ec0jsnaaaf135025ae',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
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
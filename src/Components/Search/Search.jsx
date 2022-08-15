import React from 'react'
import { useSearchByNameQuery } from '../../api/booksApi'


function Search({searchTerm}) {
    const {data, error} = useSearchByNameQuery(searchTerm)
    console.log(data)
  return (
    <div>Call me searchhhhh or {searchTerm}</div>
  )
}

export default Search
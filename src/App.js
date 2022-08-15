import React,{useState} from 'react'
import Header from './Components/Header/Header'
import { Outlet, Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/Home'
import Categories from './Components/Categories/categories'
import Authors from './Components/Authors/authors'
import Store from './Components/Store/store'
import Book from './Components/Book/Book'
import Search from './Components/Search/Search'



let NotFound = ()=>{
    return(
        <div>
            <h1>This page does not exist</h1>
        </div>
    )
}

let App=()=>{
    const [search,setSearch] = useState('')
    return(
        <div>
            <Header setSearch={setSearch} search={search}/>
            <div className='routes'>
                <Routes>
                    <Route path='/Search' element = {<Search searchTerm={search}/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/categories' element={Categories}/>
                    <Route path='/authors' element={Authors}/>
                    <Route path='/store' element={Store}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='book/:bookId' element={<Book/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
        
    )
}

export default App
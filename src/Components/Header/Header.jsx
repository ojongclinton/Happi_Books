import React, { useState } from 'react'
import { CssBaseline } from '@mui/material'
import {NavLink,useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography,Box,InputBase } from '@mui/material';
import useStyles from './style'



let Header =({setSearch,search})=>{
    const navigate = useNavigate()
    const [val,setVal] = useState("")

    const SearchHandler =(e)=>{
        const value = e.target.value
        setVal(value)
        const FromatedSearch = value.split(' ').join('+')
        console.log(FromatedSearch)
        setSearch(FromatedSearch)
        

    }

    const classes = useStyles()
    return(
        <div className={classes.body}>
            <CssBaseline/>
    <AppBar position='static' sx={{background:'none',backgroundColor:'none', boxShadow:'none'}}>
        
        <Toolbar className={classes.toolbar}>
        <Typography variant="h4"><NavLink to='/' className={classes.title}>Happi Books</NavLink></Typography>
            <Box className={classes.navContainer}>
                <NavLink to="/" className={({ isActive }) => isActive ? classes.activeLink : classes.link}><b>Home</b></NavLink>
                <NavLink to="/categories" className={({ isActive }) => isActive ? classes.activeLink : classes.link}><b>Categories</b></NavLink>
                <NavLink to="/authors" className={({ isActive }) => isActive ? classes.activeLink : classes.link}><b>Authors</b></NavLink>
                <NavLink to="/store" className={({ isActive }) => isActive ? classes.activeLink : classes.link}><b>Store</b></NavLink>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase placeholder="Search…" value={val} classes={{ root: classes.inputRoot, input: classes.inputInput }} onChange={SearchHandler} onClick={()=>{navigate('/Search')} }/>
                </div>
            </Box>
        </Toolbar>
    </AppBar>

    </div>
    )
}

export default Header
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
  } from "@mui/material/styles";
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';


const theme = createTheme();


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
            <BrowserRouter>
            <App/>
                
            </BrowserRouter>
            </Provider>
        </StyledEngineProvider>
    </ThemeProvider>
    ,document.getElementById('root'))

    {/* <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='categories' element={<Categories/>}/>
                        <Route path='store' element={<Store/>}/>
                        <Route path='authors' element={<Authors/>}/>
                        <Route path='*' element={
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <h1 style={{fontSize:'5rem'}}>404</h1>
                            </div>
                        }/>
                    </Route>
                    <Route path='/book/:bookId' element={<SingleBook/>}/>
                </Routes> */}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Router, RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { store } from './store/store';
import { Provider } from 'react-redux';

/* setting up axios */
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common[`Authorization`] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>

  
);


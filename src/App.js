
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMob from './components/NavigationMob';
import axios from 'axios';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { setBannerData , setImageUrl } from './store/VideoTv';



function App() {
  const dispatch = useDispatch();

  const fetchTrendingContent = async()=>{
    try{
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
    }
    catch(err){
      console.log("here is your errorr:",err);
    }
  }

  const fetchConfig = async()=>{
    try{

      const response = await axios.get('/configuration')
      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    }
    catch(err){
      console.log("here is your error",err);
    }
  }

  useEffect(()=>{
fetchTrendingContent();
fetchConfig();
  },[])


  return (
    <div className="App">
    <Header/>
    <div className='min-h-[100vh] bg-blue-900'>
   <Outlet/>
    </div>
   <Footer/>
   <NavigationMob/>
    </div>
  );
}

export default App;

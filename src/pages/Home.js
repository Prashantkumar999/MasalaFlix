import React from 'react';
import HomeBanner from '../components/HomeBanner';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useState, useEffect } from 'react';
import HoriScrollCard from '../components/HoriScrollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const trendingMovies = useSelector(state=>state.movieData.bannerData)
    const {data : nowPlaying} = useFetch("/movie/now_playing")
    const {data : popularMovies} = useFetch("/movie/popular");
    const {data : upcomingMovies} = useFetch("/movie/upcoming");
    const {data : topRatedMovies} = useFetch("movie/top_rated")
    const {data : onTheAir} = useFetch("tv/on_the_air")
    const {data: airingToday} = useFetch("tv/airing_today")
    const {data: popularTvShows} = useFetch("tv/popular")
    const {data: topRatedTvShows} = useFetch("tv/top_rated")

 
    return (
        <div className='w-full bg-blue-900 pb-3'>
            <HomeBanner />
      <HoriScrollCard data={trendingMovies} heading={"Trending"} trending={true}/>
      <HoriScrollCard data={nowPlaying} heading={"Now Playing"} media_type={"movie"} />
      <HoriScrollCard data={popularMovies} heading={"Popular Movies"} media_type={"movie"}/>
      <HoriScrollCard data={topRatedMovies} heading={"Top Rated Movies"}media_type={"movie"} />

      <HoriScrollCard data={upcomingMovies} heading={"Upcoming Movies"}media_type={"movie"}/>
      <HoriScrollCard data={onTheAir} heading={"On The Air"}media_type={"tv"}/>
      <HoriScrollCard data={airingToday} heading={"Airing Today"}media_type={"tv"}/>
      <HoriScrollCard data={popularTvShows} heading={"Popular Tv Shows"}media_type={"tv"}/>
      <HoriScrollCard data={topRatedTvShows} heading={"Top Rated Tv Shows"}media_type={"tv"}/>
            
        </div>
    );
}

export default Home;

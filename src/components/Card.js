import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
const Card = ({ data, trending, index,media_type }) => {
    const imageURL = useSelector(state => state.movieData.imageUrl)
    const mediaType =  data.media_type ?? media_type
    return (
        <Link to={"/" + mediaType + "/" + data.id} className='w-full min-w-[250px] max-w-[250px]  overflow-hidden rounded relative block'>
            
            { data?.poster_path?( <img src={imageURL + data?.poster_path} />) 
            :
            (<div className='flex flex-col justify-center items-center h-full'>No Image Found</div>)

            }
           
            {
                trending && (<div className='absolute top-2 bg-blue-600 px-6 py-2 rounded-r-full text-white font-semibold'> #{index + 1} Trending </div>)
            }
            <div className='bg-gradient-to-t from-blue-400 absolute left-0 right-0 bottom-0 top-0  opacity-50'>

            </div>
            <div className='absolute -bottom-14 -right-3 '>
                <img src={logo} width={150} />
            </div>
        </Link>
    );
}

export default Card;

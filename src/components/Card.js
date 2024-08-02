import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../Images/masalaFlixLogo.svg'

const Card = ({ data, trending, index,media_type }) => {
    const imageURL = useSelector(state => state.movieData.imageUrl)
    const mediaType =  data.media_type ?? media_type
    return (
        <Link to={"/" + mediaType + "/" + data.id} className='w-full lg:min-w-[250px] lg:max-w-[250px] min-w-[150px] max-w-[150px] lg:hover:scale-105 transition-all duration-200 overflow-hidden rounded relative block'>
            
            { data?.poster_path?( <img src={imageURL + data?.poster_path} />) 
            :
            (<div className='flex flex-col justify-center items-center h-full'>No Image Found</div>)

            }
           
            {
                trending && (<div className='absolute top-2 bg-blue-600 lg:px-6 lg:py-2 rounded-r-full text-white lg:text-lg text-sm px-2 py-1 font-semibold '> #{index + 1} Trending </div>)
            }
            <div className='bg-gradient-to-t from-blue-800 absolute left-0 right-0 bottom-0 top-0  opacity-50'>

            </div>
            <div className='absolute -bottom-16 -right-9 '>
                <img src={logo} width={150} />
            </div>
        </Link>
    );
}

export default Card;

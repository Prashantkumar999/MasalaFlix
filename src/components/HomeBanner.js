import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlay } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    const homeBannerData = useSelector(state => state.movieData.bannerData)
    const imageUrl = useSelector(state => state.movieData.imageUrl)
    const [currentImage, setCurrentImage] = useState(0)
console.log(homeBannerData)
    const nextButtonHandler = () => {
        if (currentImage < homeBannerData.length - 1) {
            setCurrentImage(prev => prev + 1)
        }
    }

    const previousButtonHandler = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1)
        }

    }

    useEffect(() => {

        const interval = setInterval(() => {
            if (currentImage < homeBannerData.length - 1) {
                nextButtonHandler()
            }
            else {
                setCurrentImage(0)
            }
        }, 2000)

        return () => clearInterval(interval)

    }, [homeBannerData, imageUrl,currentImage])

    return (
        <section className='w-full h-full '>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {
                    homeBannerData.map((item, index) => {
                        return (
                            <div key={item.id+"banner"+{index}} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all ease-in duration-300' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                <div className="h-full w-full">
                                    <img src={imageUrl + item.backdrop_path} className='h-full w-full object-cover' />
                                </div>

                                <div className='absolute top-0 w-full h-full hidden px-3 justify-between items-center text-4xl text-white  group-hover:lg:flex '>
                                    <button onClick={previousButtonHandler} className='bg-blue-400 rounded-full text-center p-2  hover:bg-blue-500 z-30 transition-all duration-100 active:scale-95 hover:scale-105'>
                                        <FaAngleLeft />
                                    </button>
                                    <button onClick={nextButtonHandler} className='bg-blue-400 rounded-full text-center p-2  hover:bg-blue-500 z-30 transition-all duration-100 active:scale-95 hover:scale-105'>
                                        <FaAngleRight />

                                    </button>
                                </div>




                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-blue-900 to-transparent'>
                                </div>

                                <div className='container mx-auto absolute bottom-0 max-w-md lg:pl-7 pl-2'>
                                    <h2 className='font-bold lg:text-4xl text-xl text-white lg:mb-3 mb-2'>{item?.title || item?.name}</h2>
                                    <p className='text-ellipsis lg:line-clamp-3 line-clamp-2 text-white mb-1 lg:text-lg text-sm'>{item.overview}</p>
                                    <div className='flex gap-4 lg:text-lg text-sm text-blue-400 mb-1'>
                                        <p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
                                        <span>|</span>
                                        <p>View : {Number(item.popularity).toFixed(0)}</p>
                                    </div>
                                    <button>
                                    <Link to={"/"+item?.media_type+"/"+item.id} className='text-sm font-semibold px-3 py-2 bg-blue-400 lg:font-semibold flex items-center gap-2 text-white active:scale-100 transition-all duration-100 lg:mb-5 mb-2 hover:bg-blue-600 hover:scale-105'>
                                        Play Now <FaPlay />
                                    </Link>
                                    </button>
                                </div>


                            </div>
                        )
                    })
                }

            </div>
        </section>
    );
}

export default HomeBanner;

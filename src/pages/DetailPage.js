import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux';
import moment from 'moment'
import Divider from '../components/Divider';
import HoriScrollCard from '../components/HoriScrollCard'
import useFetch from '../hooks/useFetch';
import Video from '../components/Video';
import Footer from '../components/Footer';
const DetailPage = () => {
    const params = useParams()
    const { data } = useFetchDetails(`/${params.explore}/${params.id}`)
    const { data: castData, loading } = useFetchDetails(`/${params.explore}/${params.id}/credits`)
    const imageUrl = useSelector(state => state.movieData.imageUrl)
    const { data: touMayAlsoLike } = useFetch(`/${params.explore}/${params.id}/similar`)
    const { data: recommendationsData } = useFetch(`/${params.explore}/${params.id}/recommendations`)
    const [playVideo, setPlayVideo] = useState(false)
    const [videoId, setVideoId] = useState('')

    const playVideoHandler = (data) => {
        setVideoId(data)
        setPlayVideo(true)
    }
    return (
        <div className='w-full h-[450px] relative text-white bg-blue-900'>
            <div className='w-full h-full'>
                <img src={imageUrl + data?.backdrop_path} className='w-full h-full object-cover' />
            </div>
            <div className='bg-gradient-to-t from-blue-900 to-transparent h-full w-full absolute top-0'>

            </div>
            <div className=' w-full pb-20 mx-auto px-5 flex lg:flex-row flex-col gap-5 bg-blue-900 '>
                <div className='-mt-28 lg:block flex flex-col justify-center items-center relative lg:pl-10 ' >
                    <img src={imageUrl + data?.poster_path} className='w-60 h-80 rounded min-w-60 object-cover' />
                    <button onClick={() => playVideoHandler(data)} className='px-3 py-2 bg-blue-500 w-full mt-2 rounded-sm font-semibold  hover:bg-blue-800'>Play Now</button>
                </div>
                <div className='lg:pl-8 lg:pr-10'>
                    <h2 className='lg:text-3xl text-2xl font-semibold pb-2 lg:pb-2 text-center'>{data?.title || data?.name}</h2>
                    <p className='text-slate-200'>{data?.tagline || "probkem with loading tagline"}</p>
                    <Divider />
                    <div className='flex gap-5 lg:gap-7 text-slate-200 text-sm lg:text-md py-2'>
                        <p className=''>
                            Rating : {Number(data?.vote_average || "Average Vote").toFixed(1)}+
                        </p>
                        <span>|</span>
                        <p className=''>
                            View : {Number(data?.vote_count) || "Vote Count"}
                        </p>
                        <span>|</span>

                        <p className=''>
                            Runtime : {Number(data?.runtime) || "Runtime"} minutes
                        </p>
                    </div>
                    <Divider />
                    <div>
                        <h3 className='text-xl font-semibold '>Overview</h3>
                        <p className='text-slate-200'>{data?.overview}</p>
                        <Divider />
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-7 text-sm lg:text-md py-2 text-slate-200'>
                            <p className=''>Status : {data?.status}</p>
                            <span className='hidden lg:block'>|</span>
                            <p className=''>Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}</p>
                            <span className='hidden lg:block'>|</span>
                            <p className=''>Revenue : {Number(data?.revenue)}</p>
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <p className='text-slate-200'> <span className='text-white'>Director : </span>{castData?.crew[0]?.name || "director"}</p>
                    </div>
                    <Divider />
                    <h2 className='text-2xl text-center my-3 font-semibold'>Cast</h2>
                    <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 justify-center'>
                        {castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                            return (
                                <div className='text-center text-sm'>
                                    <div className='relative'>
                                        <img alt={starCast?.name} src={imageUrl + starCast?.profile_path} className='w-24 h-24 rounded-full object-cover text-sm relative z-20' />
                                        <div className='w-24 h-24 absolute left-[2px] top-[2px] z-10 bg-white rounded-full'>
                                        </div>
                                    </div>
                                    <p>{starCast?.name}</p>
                                </div>
                            )
                        })

                        }

                    </div>
                    <Divider />
                </div>
            </div>
            <div className='bg-blue-900 -mt-20 pb-4'>
                <HoriScrollCard heading="You May Also Like" data={touMayAlsoLike} media_type={params?.explore} />
                <HoriScrollCard heading="Recommendations" data={recommendationsData} media_type={params?.explore} />
            </div>
            {
                playVideo && (<Video data={videoId} close={() => setPlayVideo(false)} media_type={params?.explore} />)

            }
            <Footer />
        </div>
    );
}

export default DetailPage;

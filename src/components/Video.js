import React from 'react';
import { IoCloseSharp, IoFilterOutline } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

const Video = ({data,close,media_type}) => {
    const {data:videoData} = useFetchDetails(`/${media_type}/${data?.id}/videos`)
    return (
        <section className='fixed flex justify-center items-center bg-blue-900 top-0 right-0 bottom-0 left-0 z-50 bg-opacity-45'>
            <div className='relative bg-black w-full lg:max-h-[70vh] max-w-screen-lg aspect-video overflow-hidden'>
            <button onClick={close} className='absolute right-1 top-1 text-xl bg-red-500'>
            <IoCloseSharp />
            </button>
            <iframe src={`https://youtube.com/embed/${videoData?.results[0]?.key}`} className='w-full h-full'/>
            </div>
        </section>
    );
}

export default Video;

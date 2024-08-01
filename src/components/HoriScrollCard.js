import React, { useRef } from 'react';
import Card from './Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const HoriScrollCard = ({ data = [], heading,trending,media_type}) => {
    const containerRef = useRef();

    function handleLeftScroll(){
        containerRef.current.scrollLeft -= 300;
    }
    function handleRightScroll(){
        containerRef.current.scrollLeft += 300;
    }

    return (
        <div className='container mx-auto  my-10 '>
            <h2 className='text-white text-3xl font-bold w-full mb-5 pl-6'>{heading}</h2>

            <div className='relative'>
                <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,250px)] grid-flow-col gap-6  pl-6 overflow-x-scroll relative z-10 no-scrollbar transition-all scroll-smooth'>
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} trending={trending} index={index}  media_type={media_type}/>
                            )
                        })
                    }
                </div>

                <div className='absolute hidden justify-between items-center h-full w-full top-0 px-3 lg:flex'>
                    <button onClick={handleLeftScroll} className='bg-blue-400 z-10 p-2 -ml-1 text-white rounded-full hover:bg-blue-700 active:scale-95'>
                        <FaAngleLeft />
                    </button>
                    <button onClick={handleRightScroll} className='bg-blue-400 z-10 p-2 -ml-1 text-white rounded-full hover:bg-blue-700 active:scale-95'>
                        <FaAngleRight />
                    </button>

                </div>
            </div>
        </div>
    );
}

export default HoriScrollCard;

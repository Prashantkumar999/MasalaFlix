import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

const ExplorePage = () => {
    const params = useParams();
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    const [totalPageNumber, setTotalPageNumber] = useState(0);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/discover/${params.explore}`, {
                params: { page: pageNumber }
            });
            setData(prev => [...prev, ...response.data.results]);
            setTotalPageNumber(response.data.total_pages)
        } catch (err) {
            console.error(err);
        }
    };

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY >= document.body.offsetHeight)) {
            setPageNumber(prev => prev + 1)
        }
    }
    useEffect(()=>{
setPageNumber(1)
setData([])
fetchData()
    },[params.explore])

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className='pt-16 container mx-auto bg-blue-900'>
        <div className='container mx-auto'>
        <h2 className='text-white font-semibold md:text-4xl text-xl pb-5 pt-9 text-center capitalize'>Popular {params.explore} Shows</h2>
        <div className='grid grid-cols-[repeat(auto-fit,250px)] gap-5 justify-center'>
            {
                data.map((exploreData,index)=>{
                    return(
                        <Card  data={exploreData} key={exploreData.id + "explore section"} media_type={params.explore}/>
                    )
                })
            }
        </div>
        </div>

        </div>
    );
};

export default ExplorePage;

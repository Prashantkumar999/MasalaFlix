import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

const SearchPage = () => {
    const location = useLocation();
    const [data, setData] = useState([]); // Initialize as empty array
    const [pageNo, setPageNo] = useState(1);
    const navigate = useNavigate()
    const query = location?.search?.slice(3)
    const fetchData = async () => {
        try {
            const response = await axios.get('/search/multi', {
                params: { page: pageNo, query: location?.search?.slice(3) }
            });
            setData(prevData => [...prevData, ...response.data.results]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (query) {
            setPageNo(1)
            setData([])
            fetchData();
        }
    }, [location?.search]);



    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY >= document.body.offsetHeight)) {
            setPageNo(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (query) {
            fetchData();
        }
    }, [pageNo]);
    console.log(location)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='container mx-auto   pt-20'>
            <div className='lg:hidden flex w-full justify-center sticky top-16 z-40'>
                <input className='px-3 py-2 rounded-sm' type='text' placeholder='Search Here...' onChange={(e) => navigate(`/search?q=${e.target.value}`)
                } value={query.split("%20")?.join(" ")} ></input>
            </div>
            <div className='container mx-auto'>
                <h2 className='text-white font-semibold md:text-4xl text-xl py-4 text-center'>Search Results For {location?.search?.slice(3).split("%20")?.join(" ")}</h2>
                <div className='grid lg:grid-cols-[repeat(auto-fit,250px)] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center justify-center'>
                    {data.map((searchData) => (
                        <Card
                            key={searchData.id + "search" + searchData.name}
                            data={searchData}
                            media_type={searchData.media_type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;

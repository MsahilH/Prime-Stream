import React,{useState, useEffect} from 'react'
import './styleB.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import {useSelector} from 'react-redux';
import Img from '../../../components/LazyloadImg/LazyLoadImg'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const MainBanner = () => {
  const [backgrond, setBackground] = useState("");
  const [query,setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home);
  //console.log("this is mainBanner URL",url);
  const {data,loading} = useFetch("/movie/upcoming")

  useEffect(()=>{
    const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
    console.log('this is set Bakcground :: ',bg);
    setBackground(bg);
  },[data]);
  console.log('this is background',data?.results[0]?.backdrop_path);
  console.log("this is data and loading ",data?.results);

  const searchQueryHandler = (event) =>{
    if(event.key == 'Enter' && query.length>0){
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className='MainBanner'>
      {!loading&&<div className='backdrop-img'>
        <Img className='background-img' src={backgrond} />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper><div className='MainBannerContent'>
          <span className='title'>Prime Stream!</span>
          <span className='subTitle'>
            Millions of Experiences 
            with hundereds of movies and TV-Shows
            discover,
            Explore more.</span>
          <div className='searchInput'>
            <input 
            type='text' 
            placeholder='Search for movie or tv-show...'
            onKeyUp={searchQueryHandler}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
        </ContentWrapper>
      </div>
  )
}

export default MainBanner
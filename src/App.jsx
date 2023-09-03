import { useEffect, useState } from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/hSlice';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './pages/details/Details';
import SearchResult from './pages/searchReasult/SearchReasult'
import Explore from './pages/explore/Explore';

import PageNotFound from './pages/404/PageNotFound';
import Home from './pages/home/Home'

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state)=>state?.home);
  console.log('this is URL calue',url?.url?.total_pages);

  useEffect(() => {
    
    ApiTesting();
    // fetchApiConfig();
    // genresCall();
  }, []);

  const ApiTesting = () => {
      fetchDataFromApi("/movie/popular").then((res)=>{
        console.log(res);
        dispatch(getApiConfiguration(res));
      });
    // fetchDataFromApi("/configuration").then((res) => {
    //     console.log(res);

    //     const url = {
    //         backdrop: res.images.secure_base_url + "original",
    //         poster: res.images.secure_base_url + "original",
    //         profile: res.images.secure_base_url + "original",
    //     };

    //     dispatch(getApiConfiguration(url));
    // });
  };
  return ( 
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/header' element={<Header />}/>
          <Route path='/footer' element={<Footer />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/notFound' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

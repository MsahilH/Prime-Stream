import { useEffect, useState } from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/hSlice';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import SearchReasult from './pages/searchresult/SearchReasult.jsx';
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
  
    fetchDataFromApi("/configuration").then((res) => {

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
    });
  };
  return ( 
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:mediaType/:id' element={<Details />}/>
          <Route path='/search/:query' element={<SearchReasult />} />
          <Route path='/explore/:mediaType' element={<Explore />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

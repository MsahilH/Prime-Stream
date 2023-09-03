import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/hSlice';

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
      App
      {url?.url?.total_pages}
    </>
  )
}

export default App

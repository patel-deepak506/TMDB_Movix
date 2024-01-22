// import './App.css';
// import About from './components/About';
// import Todo from './components/Todo'
import { useEffect } from 'react'
import { fetchDataFromApi } from './lib/requests'
import { useDispatch } from 'react-redux'
import { getApiConfiguration , getGenres } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import PageNotFound from './pages/404/PageNotFound'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])

  const fetchApiConfig = async () => {
    try {
      const data = await fetchDataFromApi("/configuration")
      const url = {
        backdrop:data.images.secure_base_url +"original",
        poster:data.images.secure_base_url +"original",
        profile:data.images.secure_base_url +"original"
      }
      dispatch(getApiConfiguration(url))

    } catch (error) {
      console.log(error)
    }
  }

  const genresCall =async ()=>{
    let promises = []
    let endPoint = ['tv' , 'movie']
    let allGenres = {}
    endPoint.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data?.map(({genres})=>{
      return genres?.map((item)=>(allGenres[item.id]=item))
    })
    dispatch(getGenres(allGenres))
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Popular from './Components/Popular'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <section className='mx-0'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
      </section>
    </>
  );
}

export default App;

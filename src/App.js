import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/about/About'
import Blog from './components/Blogs/Blog'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Blogs' element={<Blog />} />        
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
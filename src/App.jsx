import './App.css'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Women from './components/pages/Women'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/women" element={<Women/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App



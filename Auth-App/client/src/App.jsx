
import './App.css'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './About'
import Counter from './Components/Counter'
function App() {  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Home/>}>
      <Route index element = {<About/>}/>
      <Route path="/login" element = {<h1>Login Page</h1>}/>
      <Route path="/counter" element = {<Counter/>}/>
      <Route path="/stopwatch" element = {<h1>Stopwatch App</h1>}/>
      <Route path="/shopping" element = {<h1>Shopping App</h1>}/>
      <Route path="/*" element = {<h1>Error:Page not found</h1>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

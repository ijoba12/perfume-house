import './App.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Navbar from './Layout/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Navbar/>}>
    <Route path="/" element={<Home/>}/>
    </Route>
    <Route path= "/auth/signin" element={<SignIn/>}/>
    <Route path= "/auth/signup" element={<SignUp/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

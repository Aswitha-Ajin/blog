import Navbar from './Navbar/Navbar';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

import Single from './Single/Single';
import Content from './Content/Content';

import Login from './Login/Login';
import Register from './Register/Register';
import  Component  from './Component/Component';


function App() {
  
  return (
    <>
    <Navbar/>
    
<BrowserRouter>
<Routes>
    <Route path="/" element={<Component/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/content" element={<Content/>}/>
    <Route path="/post/:postid" element={<Single/>}/>
    
</Routes>
</BrowserRouter>
</>
  );
}

export default App;

import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function HomePage(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default HomePage;
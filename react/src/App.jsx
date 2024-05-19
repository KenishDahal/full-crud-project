import './index.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import { baseUrl } from './shared';
import { Toaster } from 'react-hot-toast';
// import { baseUrl } from './shared';

export const LoginContext = createContext();
axios.defaults.baseURL= baseUrl;
axios.defaults.withCredentials = true;

function App() {


    const [loggedIn, setLoggedIn] = useState(
        localStorage.access ? true : false
    );

    function changeLoggedIn(value) {
        setLoggedIn(value);
        if (value === false) {
            localStorage.clear();
        }
    }

    return (
        <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
            <BrowserRouter>
                <Header>
                    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
                    <Routes>
                    <Route path="/" element={<Customers />} />
                       <Route path="/customers" element={<Customers />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers/:id" element={<Customer />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;

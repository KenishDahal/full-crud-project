import { useState, useEffect, useContext } from 'react';
import { baseUrl } from '../shared';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Register() {
    // const [loggedIn, setLoggedIn] = useContext(LoginContext);
    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();
    // const [email, setEmail] = useState();

    // const location = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     localStorage.clear();
    //     setLoggedIn(false);
    // }, []);

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser = async (e) => {
        e.preventdefault();
        console.log("just mafde ");
        const {name , email , password} = data;
        try{
            const {data} = await axios.post('/register',{
                name , email, password
            })
            if(data.error){
                toast.error(data.error)
            }else {
                setData({});
                toast.success('Login sucessfull');
                navigate('/login')
            }
        } catch (error){

        }

    }

    // function login(e) {
    //     e.preventDefault();
    //     const url = baseUrl + 'register/';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             username: username,
    //             password: password,
    //         }),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             localStorage.setItem('access', data.access);
    //             localStorage.setItem('refresh', data.refresh);
    //             setLoggedIn(true);
    //             navigate('/login');
                
    //         });
    // }

    return (
        <form className="m-2 w-full max-w-sm" id="customer" onSubmit={registerUser}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">Email</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => {
                            setData({...data, email:e.target.value});
                        }}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="name">Username</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => {
                            setData({...data,name:e.target.value});
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="password">Password</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        id="password"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        value={data.password}
                        onChange={(e) => {
                            setData({...data,password:e.target.value});
                        }}
                    />
                </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Register
            </button>
        </form>
    );
}

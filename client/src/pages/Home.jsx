import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login');
      };

      const { data } = await axios.post(
        'http://localhost:4000/',
        {},
        {
          withCredentials: true
        }
      );

      const { status, user } = data;
      setUsername(user);

      return status
        ? toast(`Hello ${user}`, {
          position: 'bottom-right',
        })
        : (removeCookie('token'), navigate('/login'));
    };

    verifyCookie();

  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/login');
  };

  return (
    <>
      <div className="welcome-view">
        <div className="welcome">
          <h4>Welcome</h4>
          <span>{username}</span>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;
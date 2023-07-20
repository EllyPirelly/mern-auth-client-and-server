import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();

  const [cookie, removeCookie] = useCookies([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookie.token) {
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
          position: 'top-right',
        })
        : (removeCookie('token'), navigate('/login'));
    };

    verifyCookie();

  }, [cookie, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/signup');
  };

  return (
    <>
      <div className="home-page">
        <h4>
          {/* {" "} */}
          Welcome <span>{username}</span>
        </h4>

        <button onClick={Logout}>Logout</button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;
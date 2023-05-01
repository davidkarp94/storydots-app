import React, { useState } from 'react';
import './header.css';

const Header = () => {

  const [modalLogin, setModalLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const modalHandler = (e) => {
    e ? setModalLogin(false) : setModalLogin(true)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
  
    try {
      const params = new URLSearchParams(formData);
      const response = await fetch(`http://localhost:3000/users?${params}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='header-container'>
        <button className='main-btn' onClick={() => modalHandler(modalLogin)}>
            Login
        </button>

        {
          modalLogin && (
            <div className='overlay'>
                <div className='product-container modal-container'>

                <form onSubmit={handleLogin}>
                  <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                      type='text'
                      id='username'
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='password'>password</label>
                    <input
                      type='text'
                      id='password'
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div className='form-actions'>
                    <button type='submit'>Login</button>
                    <button type='button' onClick={() => modalHandler(modalLogin)}>
                      Cancel
                    </button>
                  </div>
                </form>
        
                </div>
            </div>
          )
        }
    </div>
  )
}

export default Header
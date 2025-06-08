import React, { useState } from 'react';
import './Login.css';

const Login = ({ SetShowLogin }) => {
  const [curState, setCurState] = useState('sign in');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${curState.charAt(0).toUpperCase() + curState.slice(1)} successful!`);
  };

  return (
    <main className='login-wrapper' role="main" aria-label="Authentication form">
      <section className="login-popup-container">
        <header className="login-header">
          <h2>{curState.charAt(0).toUpperCase() + curState.slice(1)}</h2>
        </header>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-inputs">
            {curState !== 'sign in' && (
              <input
                type="text"
                placeholder='User Name'
                required
                aria-label="User Name"
              />
            )}
            <input
              type="email"
              placeholder='Email'
              required
              aria-label="Email"
            />
            <input
              type="password"
              placeholder='Password'
              required
              aria-label="Password"
            />
            <button
              className={`btn ${curState === 'sign up' ? 'btn-signup' : 'btn-signin'}`}
              type="submit"
              aria-live="polite"
            >
              {curState.charAt(0).toUpperCase() + curState.slice(1)}
            </button>
          </div>

          <div className="login-popup-condn">
            <input
              type="checkbox"
              id="terms-checkbox"
              required
              aria-required="true"
            />
            <label htmlFor="terms-checkbox">
              By clicking this, I accept the terms &amp; privacy policy of CinePhile
            </label>
          </div>
        </form>

        <footer className="login-footer">
          {curState === 'sign in' ? (
            <p>
              Create a new account?{' '}
              <button
                onClick={() => setCurState('sign up')}
                className="toggle-link"
                type="button"
                aria-label="Switch to sign up"
              >
                Click here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setCurState('sign in')}
                className="toggle-link"
                type="button"
                aria-label="Switch to sign in"
              >
                Login here
              </button>
            </p>
          )}
        </footer>
      </section>
    </main>
  );
};

export default Login;

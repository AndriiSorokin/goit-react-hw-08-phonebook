import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginOperation } from '../../redux/auth/authOperation';


const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [form, setForm] = useState({ ...initialState });

  const dispatch = useDispatch();

  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(loginOperation(form));
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <input
          onChange={inputHeadler}
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
        ></input>
        <input
          onChange={inputHeadler}
          type="password"
          name="password"
          placeholder="Your password"
          value={form.password}
        ></input>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;

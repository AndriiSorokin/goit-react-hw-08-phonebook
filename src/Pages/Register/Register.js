import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerOperation } from '../../redux/auth/authOperation';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Registration = () => {
  const [form, setForm] = useState({ ...initialState });

  const dispatch = useDispatch();

  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(registerOperation(form));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className="registration-form" onSubmit={submitHandler} autoComplete="off">
        <input
          onChange={inputHeadler}
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
        ></input>
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
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Registration;

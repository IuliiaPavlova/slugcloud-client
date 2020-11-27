import { ChangeEvent, FunctionComponent, useState } from 'react';
import Button from '../button';

// import css from './signup.module.scss';

const SignupFormWidget: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3300/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Consumer-ID': 'skjdhgfvhskgjvdfkaj',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const user = await response.json();
    console.log(user);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        return undefined;
      case 'password':
        setPassword(value);
        return undefined;
      default:
        return undefined;
    }
  };

  return (
    <div>
      <input type="text" value={email} name="email" onChange={handleChange} />
      <input type="password" value={password} name="password" onChange={handleChange} />
      <Button type="button" action={{ type: 'action', cb: handleSubmit }} priority="primary" label="Sign Up" />
    </div>
  );
};

export default SignupFormWidget;

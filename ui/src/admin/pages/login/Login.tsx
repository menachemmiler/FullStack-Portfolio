import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin, getProfile } from '../../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import './login.css';

export default function Login() {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (user?._id) {
      navigate('/admin');
    }
  }, [user, navigate]);

  return (
    <div className="page">
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => dispatch(fetchLogin({ username, password }))}>Login</button>
    </div>
  );
}

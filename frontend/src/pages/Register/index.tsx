import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '@/lib/api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await apiFetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.accessToken) {
            localStorage.setItem('token', response.accessToken);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
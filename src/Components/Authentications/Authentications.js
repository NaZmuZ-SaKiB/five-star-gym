import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuthManager from '../../Hooks/useAuthManager';

import Logo from '../../Images/logo-black.png';
import './Authentications.css';

const Authentications = () => {
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm();
    const { signup, login, googleSignIn, updateName } = useAuthManager();

    const history = useHistory();
    const location = useLocation();
    const from = location?.state?.from ? location?.state?.from : '/home';

    useEffect(() => {
        if (location?.pathname === '/login') setNewUser(false)
        else setNewUser(true)
    }, [location.pathname])

    const onsubmit = data => {
        setLoading(true);
        const { name, email, password } = data;

        if (newUser) {
            signup(email, password)
                .then(() => {
                    updateName(name)
                        .then(() => {
                            setError('');
                            reset();
                            localStorage.setItem('user', true);
                            setLoading(false);
                            history.push(from);
                            window.location.reload();
                        })
                })
                .catch(err => setError(err.message));
        }

        else {
            login(email, password)
                .then(() => {
                    setError('');
                    reset();
                    localStorage.setItem('user', true);
                    setLoading(false);
                    history.push(from);
                })
                .catch(err => setError(err.message));
        }
    }

    const handleGoogleSignin = e => {
        e.preventDefault();
        reset();

        googleSignIn()
            .then(() => {
                localStorage.setItem('user', true)
                setLoading(false);
                history.push(from);
            })
    }

    return (
        <div className="form-container" >
            <img src={Logo} alt="logo" className="form-container__logo" />
            <h1>{newUser ? 'Sign up' : 'Log in'}</h1>
            <form onSubmit={handleSubmit(onsubmit)} className="form-container__form">
                <p style={{ color: 'red' }}>{error && error}</p>
                {
                    newUser && <>
                        <input
                            placeholder="Name"
                            style={{ borderColor: `${errors.name ? 'red' : ''}` }}
                            {...register(
                                'name',
                                {
                                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Invalid Name' },
                                    required: "Name is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.name?.message}&nbsp;</p>
                    </>
                }
                <input
                    placeholder="Email"
                    style={{ borderColor: `${errors.email ? 'red' : ''}` }}
                    {...register(
                        'email',
                        {
                            pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email' },
                            required: "Email is required"
                        },
                    )}
                />
                <p className="form-container__form__error">{errors.email?.message}&nbsp;</p>
                <input
                    type="password"
                    placeholder="Password"
                    style={{ borderColor: `${errors.password ? 'red' : ''}` }}
                    {...register(
                        'password',
                        {
                            minLength: { value: 8, message: "Password shoud be atleast 8 charecters long" },
                            required: "Password is required"
                        },
                    )}
                />
                <p className="form-container__form__error">{errors.password?.message}&nbsp;</p>
                {
                    newUser && <>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={{ borderColor: `${errors.confirmPassword ? 'red' : ''}` }}
                            {...register(
                                'confirmPassword',
                                {
                                    validate: value => value === watch('password') || 'Password did not match',
                                    required: "Confirm Password is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.confirmPassword?.message}&nbsp;</p>
                    </>
                }

                <button type="submit">
                    {!loading ? (newUser ? 'Sign up' : 'Log in') : 'Loading...'}
                </button>

                <p
                    onClick={() => newUser ? history.push('/login') : history.push('/signup')}
                    className="form-container__toggle"
                >
                    {newUser ? 'Already have an account' : 'Create new account'}
                </p>

                <button onClick={handleGoogleSignin} className="google">Continue with Google <i className="fab fa-google"></i></button>

            </form>

        </div >
    );
};

export default Authentications;
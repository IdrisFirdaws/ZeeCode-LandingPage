// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';
// import { Navigate } from 'react-router-dom';

// const Login = ({ user }) => {
//     const [isSignUpactive, setIsSignUpActive] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [showErrorMessage, setShowErrorMessage] = useState(false);

//     const handleMethodChange = () => {
//         setIsSignUpActive(!isSignUpactive);
//         setErrorMessage('');
//     };

//     const handleSignUp = () => {
//         if (!email || !password) return;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 if (errorCode === 'auth/email-already-in-use') {
//                     setErrorMessage('User already registered.');
//                     setShowErrorMessage(true);
//                 } else {
//                     console.log(errorCode, errorMessage);
//                 }
//             });
//     };

//     const handleSignIn = () => {
//         if (!email || !password) return;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 if (errorCode === 'auth/user-not-found') {
//                     setErrorMessage('User not registered.');
//                     setShowErrorMessage(true);
//                 } else {
//                     console.log(errorCode, errorMessage);
//                 }
//             });
//     };

//     const handleEmailChange = (event) => setEmail(event.target.value);
//     const handleEmailPasswordChange = (event) => setPassword(event.target.value);

//     if (user) {
//         return <Navigate to="/private"></Navigate>;
//     }

//     return (
//         <div className='signin'>
//             <div className="signinWrapper">
//                 <div className="logo">Zeecode Academy</div>

//                 <form>

//                     {isSignUpactive && <legend>Create an account</legend>}
//                     {!isSignUpactive && <legend>Sign into your account</legend>}

//                     <fieldset>
//                         <ul>
//                             <li>
//                                 <label htmlFor="email">Email:</label>
//                                 <input type="text" id='email' placeholder='email address' onChange={handleEmailChange} />
//                             </li>
//                             <li>
//                                 <label htmlFor="password">Password:</label>
//                                 <input type="password" id='password' placeholder='password' onChange={handleEmailPasswordChange} />
//                             </li>
//                         </ul>

//                         {showErrorMessage && <div className="errorMessage">{errorMessage}</div>}

//                         <div className="buttons">
//                             {isSignUpactive && <button type='button' className='btn1' onClick={handleSignUp}>Sign Up</button>}
//                             {!isSignUpactive && <button type='button' className='btn1' onClick={handleSignIn}>Sign In</button>}
//                         </div>
//                     </fieldset>

//                     {isSignUpactive && (
//                         <div onClick={handleMethodChange} className='redirect'>
//                             <p>Already have an account?</p>
//                             <a>Sign In</a>
//                         </div>
//                     )}

//                     {!isSignUpactive && (
//                         <div onClick={handleMethodChange} className='redirect'>
//                             <p>Don't have an account?</p>
//                             <a>Sign Up</a>
//                         </div>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
        setErrorMessage('');
    };

    const handleSignUp = () => {
        if (!email || !password) return;
        // Simulate successful sign-up
        setIsLoggedIn(true);
    };

    const handleSignIn = () => {
        if (!email || !password) return;
        // Simulate successful sign-in
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Navigate to="/private" />;
    }

    return (
        <div className='signin'>
            <div className="signinWrapper">
                <div className="logo">Zeecode Academy</div>
                <form>
                    <legend>{isSignUpActive ? 'Create an account' : 'Sign into your account'}</legend>
                    <fieldset>
                        <ul>
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id='email'
                                    placeholder='Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </li>
                        </ul>
                        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
                        <div className="buttons">
                            {isSignUpActive ?
                                <button type='button' className='btn1' onClick={handleSignUp}>Sign Up</button> :
                                <button type='button' className='btn1' onClick={handleSignIn}>Sign In</button>
                            }
                        </div>
                    </fieldset>
                    <div onClick={handleMethodChange} className='redirect'>
                        <p>{isSignUpActive ? 'Already have an account?' : "Don't have an account?"}</p>
                        <a>{isSignUpActive ? 'Sign In' : 'Sign Up'}</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

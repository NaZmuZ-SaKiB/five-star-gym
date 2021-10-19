import { getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile } from 'firebase/auth';

import initializeFirebase from '../Firebase/firebase';

initializeFirebase();

const useAuthManager = () => {
    const auth = getAuth();

    const updateName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, new GoogleAuthProvider())
    }

    const logout = () => {
        signOut(auth)
            .then(() => localStorage.setItem('user', false))
    };

    return { signup, login, logout, googleSignIn, updateName }
};

export default useAuthManager;
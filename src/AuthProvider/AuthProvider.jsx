import  { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import app from '../Firebase/Firebase.Config';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // observe auth state change
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    const logOut = () =>{
        return signOut(auth)
    } 
    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        googleLogIn,
        logOut
    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
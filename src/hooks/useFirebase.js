import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const signInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            console.log('user sign out')
        }
    })

    const signUpUsingPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
            console.log('logout success')
        })
    }
    return {
        user,
        signInUsignGoogle,
        signUpUsingPassword,
        signInUsingPassword,
        logOut
    }
}

export default useFirebase;
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const signInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(user)
        })
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            console.log('user sign out')
        }
    })

    const signUpUsingPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            console.log(user.email)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const signInUsingPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
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
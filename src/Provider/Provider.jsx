import React from 'react';
import { UserContext } from '../Context/UserContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const Provider = ({children}) => {

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
       createUser,
       userLogin,
    }


    return (
        <div>
            <UserContext value={userInfo}>
                {children}
            </UserContext>
        </div>
    );
};

export default Provider;
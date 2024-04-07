import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from './../Firebase/firebase-config';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // const createUser = (email, password){
    //     createUserWithEmailAndPassword(auth, email, password)
    // }

    const authInfo = {
        user,
    
    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firevase.init';



export const authContext = createContext();

const AuthProvider = ({ children }) => {
 
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, [auth]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = update => {
    return updateProfile(auth.currentUser, update);
  };

  const signINWithGoogle = () => {
    return signInWithPopup(auth, provider)
  }



  const authValue = {
    user,
    createUser,
    signInUser,
    signOutUser,
    loading,
    updateUserProfile,
    signINWithGoogle,
  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

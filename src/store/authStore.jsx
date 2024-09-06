import { create } from 'zustand';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, updatePassword } from "firebase/auth";
import { auth } from '../config/firebase';
import firebaseAuthErrorMessages from "../utils/firebaseAuthErrorMessages.jsx";
import useNotificationsStore from './notificationsStore';

const useAuthStore = create((set) => {
    const { addNotification } = useNotificationsStore.getState();

    return {
        isLoggedIn: false,
        user: null,
        error: null,
        loading: true,
        formLoading: false,
        login: async (email, password) => {
            set({formLoading: true});
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                set({
                    isLoggedIn: true,
                    user: userCredential.user,
                });
            } catch (error) {
                set({
                    isLoggedIn: false,
                    user: null,
                });
                addNotification({message: firebaseAuthErrorMessages(error.code), type: 'error'});
            }
            set({formLoading: false});
        },
        signup: async (email, password) => {
            set({formLoading: true});
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                set({
                    isLoggedIn: true,
                    user: userCredential.user,
                });
            } catch (error) {
                set({
                    isLoggedIn: false,
                    user: null,
                });
                addNotification({message: firebaseAuthErrorMessages(error.code), type: 'error'});
            }
            set({formLoading: false});
        },
        logout: async () => {
            try {
                await signOut(auth);
                set({
                    isLoggedIn: false,
                    user: null,
                });
            } catch (error) {
                addNotification({message: firebaseAuthErrorMessages(error.code), type: 'error'});
            }
        },
        updateUserProfile: async (name) => {
            try {
                const user = auth.currentUser;
                if (!user) throw new Error('No user is currently logged in');

                await updateProfile(user, {
                    displayName: name,
                });

                set({user: {...user, displayName: name}, error: null});
                addNotification({message: "Profile updated", type: 'success'});
            } catch (error) {
                addNotification({message: firebaseAuthErrorMessages(error.code), type: 'error'});
            }
        },
        updatePassword: async (password) => {
            try {
                const user = auth.currentUser;
                if (!user) throw new Error('No user is currently logged in');
                await updatePassword(user, password);
            } catch (error) {
                addNotification({message: firebaseAuthErrorMessages(error.code), type: 'error'});
            }
        },
        checkAuthState: () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    set({
                        isLoggedIn: true,
                        user: user,
                        loading: false,
                    });
                    console.log(user);
                } else {
                    set({
                        isLoggedIn: false,
                        user: null,
                        loading: false,
                    });
                }
            });
        },
    }
});

export default useAuthStore;
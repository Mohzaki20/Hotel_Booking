import { initializeApp, getApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOslF8Cniu-5sJtx6qFST13ox1XR6eU3E",
  authDomain: "hotel-booking-d41c8.firebaseapp.com",
  projectId: "hotel-booking-d41c8",
  storageBucket: "hotel-booking-d41c8.appspot.com",
  messagingSenderId: "805605961475",
  appId: "1:805605961475:web:68a3a99306d9707dc70336",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

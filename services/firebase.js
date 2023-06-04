import { initializeApp,getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let app
try{

  app = getApp()
  
} catch (error){

  const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY ,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATA_BS,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE,
    messagingSenderId:process.env.FIREBASE_MESSAGING_ID,
    appId:process.env.FIREBASE_API_ID
  };
  
  app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db }
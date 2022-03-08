import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCI1ahpU_fdb6BLg6AAEFdFeKoPHdvpk7k",
    authDomain: "linkedin-cloned-yt.firebaseapp.com",
    projectId: "linkedin-cloned-yt",
    storageBucket: "linkedin-cloned-yt.appspot.com",
    messagingSenderId: "786408408000",
    appId: "1:786408408000:web:2fb866633c9954269dfe25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();

  export  { auth, db,};
  
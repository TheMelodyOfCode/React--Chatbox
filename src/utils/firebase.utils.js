// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
    getFirestore, 
    doc,
    getDoc, 
    // setDoc,
    // updateDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvrInu6xwL-V4wuDr1DN-no0bQ02BHisE",
  authDomain: "chatbox-3c6e7.firebaseapp.com",
  projectId: "chatbox-3c6e7",
  storageBucket: "chatbox-3c6e7.appspot.com",
  messagingSenderId: "520321511534",
  appId: "1:520321511534:web:42235521c95f7621e4367f"
};

//Initialize Firebase
initializeApp(firebaseConfig);

/* This singleton instanciates Firestore and directly points to the 
DB inside in our console on the website */
export const db = getFirestore();


// ### GET  single documents from DB !! ###
// #############################
       
export const getSingleDocfromDB = async ( cardName) =>{
    const docRef = doc(db, 'messages', cardName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return docSnap.data()
    } 
    else {
      // doc.data() will be undefined in this case
      const error = {error: 'error', status: 'rejected', message: `No Trading-Card with the name "${cardName}"` }
      return Promise.reject(error)
    }

}

// ### GET all FILES from DB !! ###
// #############################

export const getAllItemsfromDB = async ()=>{
  const collectionRef = collection(db, 'chatbox');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  if (querySnapshot) {
    const itemsMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
      const  items = docSnapshot.data();
      return items;
    }, {});
    return itemsMap;
  } else {
    const error = {error: 'error', status: 'rejected', message: `Hoppala; , - Nothing found` }
    return Promise.reject(error)
  }

}

// ### UPLOAD FILES TO DB !! ###
// #############################

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
      documentsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object );
    });
    await batch.commit();
    console.log('done uploading the documents baby!');
  }

// ### put hook in jsx file and import file to upload 
// just let it run once and out-comment again 
// you can also directly upload from the firestore website if you want

    // import NAME_OF_FILE_TO_UPLOAD from '../FILE_LOCATION';

    // React.useEffect(()=> {
    //     addCollectionAndDocuments('nameOfCollection', nameOfFile)
    // }, []);
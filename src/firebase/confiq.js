import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXfhMPt8Ch89XFh4MdtTUblRL6bATmLa8",
    authDomain: "codetrain-68b40.firebaseapp.com",
    databaseURL: "https://codetrain-68b40.firebaseio.com",
    projectId: "codetrain-68b40",
    storageBucket: "codetrain-68b40.appspot.com",
    messagingSenderId: "51864833871",
    appId: "1:51864833871:web:53f5db4a0c941002e8ff3a",
    measurementId: "G-QZVSTT3TX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
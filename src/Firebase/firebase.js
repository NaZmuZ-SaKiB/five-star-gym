import firebase from 'firebase/compat';

import { firebaseConfig } from './firebase.config';

const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
}

export default (initializeFirebase);
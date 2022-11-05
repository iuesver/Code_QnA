import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDviV_Yw_JyFSYAx4SsE19j3y7tykLnEV0',
  authDomain: 'code-qna.firebaseapp.com',
  projectId: 'code-qna',
  storageBucket: 'code-qna.appspot.com',
  messagingSenderId: '19150109348',
  appId: '1:19150109348:web:f6a6a604fda9d26e564431',
  measurementId: 'G-MFYK7XLCM9',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

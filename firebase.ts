// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZlkk_PtIqV0jS1NNl1euTCCezWmKCm0A',
  authDomain: 'netflix-clone-app-1f0df.firebaseapp.com',
  projectId: 'netflix-clone-app-1f0df',
  storageBucket: 'netflix-clone-app-1f0df.appspot.com',
  messagingSenderId: '349909626858',
  appId: '1:349909626858:web:89862036f7127ff7710c93',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

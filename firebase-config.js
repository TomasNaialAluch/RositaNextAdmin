import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdilgyg87D9pDIM1Gvs-H5DqtfbTpC3ys",
  authDomain: "rosita-b76eb.firebaseapp.com",
  projectId: "rosita-b76eb",
  storageBucket: "rosita-b76eb.appspot.com",
  messagingSenderId: "778473943709",
  appId: "1:778473943709:web:a44d114c61ab7456f99a74",
  measurementId: "G-JHC9CKT0BS"
};

const app = initializeApp(firebaseConfig);

const analyticsPromise = isAnalyticsSupported()
  .then((supported) => (supported ? getAnalytics(app) : null))
  .catch((error) => {
    console.warn("Firebase Analytics no está disponible en este entorno.", error);
    return null;
  });

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

window.firebaseApp = app;
window.firebaseAnalyticsPromise = analyticsPromise;
window.firebaseDb = db;
window.firebaseAuth = auth;
window.firebaseStorage = storage;

export { app, analyticsPromise, db, auth, storage };

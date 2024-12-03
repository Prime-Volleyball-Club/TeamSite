import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyAhi_UbbyiWH1GA5r1FIGdi4FTln-HeXMM",
    authDomain: "prime-volleyball-club.firebaseapp.com",
    projectId: "prime-volleyball-club",
    storageBucket: "prime-volleyball-club.firebasestorage.app",
    messagingSenderId: "952933532179",
    appId: "1:952933532179:web:022fa7e040bffa2b3735e6",
    measurementId: "G-GY1566PD0Z"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// サインインしていない場合にリダイレクト
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // サインインしていない場合、サインインページにリダイレクト
        window.location.href = 'https://prime-volleyball-club.github.io/TeamSite/サインイン';
    }
});

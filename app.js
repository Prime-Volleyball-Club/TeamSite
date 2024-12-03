import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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

// DOMが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // サインインフォームの送信処理
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Firebaseでサインイン
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('user', JSON.stringify({ email: user.email }));

                // サインイン完了後に指定のページに遷移
                window.location.href = 'https://prime-volleyball-club.github.io/TeamSite/Homeサインイン.html';
            })
            .catch((error) => {
                alert('サインインエラー: ' + error.message);
            });
    });
});

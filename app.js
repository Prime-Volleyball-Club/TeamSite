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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 利用規約チェック確認
    if (!document.getElementById('terms').checked) {
        alert('利用規約に同意する必要があります。');
        return;
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // ログイン成功時リダイレクト処理
        const params = new URLSearchParams(window.location.search);
        const redirectURL = params.get("redirect") || "index.html";

        sessionStorage.setItem("loginSuccess", "true");
        window.location.href = redirectURL;

    } catch (error) {
        alert('サインインエラー: ' + error.message);
    }
});

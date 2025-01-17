document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.sample_box12');

    // IntersectionObserverのオプション設定
    const observerOptions = {
        root: null, // ビューポート
        rootMargin: '0px',
        threshold: 0.5 // 50%表示された時にトリガー
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // 「visible」クラスを追加
                observer.unobserve(entry.target); // 監視を停止
            }
        });
    }, observerOptions);

    // すべてのボックスにObserverを適用
    boxes.forEach(box => {
        observer.observe(box);
    });
});

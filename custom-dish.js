// ========== Calculate বাটনে click করলে এই function চলবে ==========
document.addEventListener('click', function (e) {

    // শুধু calc-btn এ click হলে কাজ করবে
    if (e.target.classList.contains('calc-btn')) {

        // যে কার্ডে click হয়েছে সেটা খুঁজে বের করা
        const card = e.target.closest('.custom-card');

        // কার্ডের data-base-price থেকে বেস প্রাইস নেওয়া
        const basePrice = parseFloat(card.getAttribute('data-base-price')) || 0;

        // ========== সব select dropdown এর মান যোগ করা ==========
        let selectTotal = 0;
        const allSelects = card.querySelectorAll('select');
        allSelects.forEach(function (select) {
            // প্রতিটা select এর selected value যোগ করা
            selectTotal += parseFloat(select.value) || 0;
        });

        // ========== সব checked checkbox এর মান যোগ করা ==========
        let checkboxTotal = 0;
        const allChecked = card.querySelectorAll('input[type="checkbox"]:checked');
        allChecked.forEach(function (checkbox) {
            // প্রতিটা checked checkbox এর value যোগ করা
            checkboxTotal += parseFloat(checkbox.value) || 0;
        });

        // ========== মোট দাম হিসাব ==========
        // বেস প্রাইস + সব select এর দাম + সব checkbox এর দাম
        const total = basePrice + selectTotal + checkboxTotal;

        // ========== রেজাল্ট দেখানো ==========
        const resultDiv = card.querySelector('.result-display');
        const priceSpan = card.querySelector('.total-price');

        // মোট দাম দেখানো
        priceSpan.innerText = total;

        // রেজাল্ট বক্স দেখানো
        resultDiv.style.display = 'block';

        // Order Now বাটন দেখানো
        const orderBtn = card.querySelector('.go-order-btn');
        orderBtn.style.display = 'block';
    }
});

// ========== Order Now বাটনে click করলে order.html এ যাবে ==========
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('go-order-btn')) {
        // order.html পেজে নিয়ে যাবে
        window.location.href = 'order.html';
    }
});
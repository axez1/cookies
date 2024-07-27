const links = document.querySelectorAll(".menu-item > a");
const buttons = document.querySelectorAll(".products-item .button");
const prices = document.getElementsByClassName("products-item-price");
const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    };
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
}

document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
};

document.getElementById('change-currency').onclick = function (e) {
    const currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;

    switch(currentCurrency) {
        case "$": {
            newCurrency = '₽';
            coefficient = 90;
            break;
        }
        case "₽": {
            newCurrency = 'BYN';
            coefficient = 3;
            break;
        }
        case "BYN": {
            newCurrency = '€';
            coefficient = 0.9;
            break;
        }
        case "€": {
            newCurrency = '¥';
            coefficient = 6.9;
            break;
        }
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
    }
};

document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [product, name, phone].forEach((item) => {
        if(!item.value) {
            item.style.borderColor = 'red';
            hasError = true;
        } else {
            item.style.borderColor = '';
        }
    });

    if(!hasError) {
        [product, name, phone].forEach((item) => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с Вами!');
    }
}

// Coupon paid button event handler adding
document.getElementById('coupon-button').addEventListener('click', function () {
    // Getting main price
    const mainPriceElement = document.getElementById('main-price');
    const mainPriceString = mainPriceElement.innerText;
    const mainPrice = parseFloat(mainPriceString);

    // Applying coupon code.
    const couponCodeElement = document.getElementById('coupon-code');
    const couponCodeString = couponCodeElement.value;

    // Get discount price

    const discountPriceElement = document.getElementById('discount-price');
    // const discountPriceString = discountPriceElement.innerText;
    // const discountPrice = parseFloat(discountPriceString);
    if (couponCodeString == 'DISC30') {
        const totalPayAblPrice = mainPrice - (mainPrice * 0.3);
        discountPriceElement.innerText = totalPayAblPrice;
    }
    else {
        discountPriceElement.innerText = mainPrice;
    }

    couponCodeElement.value = '';
})
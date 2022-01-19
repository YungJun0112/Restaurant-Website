if (document.readyState == 'loading') { //use to make sure the js is done loading
    document.addEventListener('DOMContentLoaded', ready); 
} else {
    ready();
}

function ready() {
    var removeBtn = document.getElementsByClassName('removeBtn');
    for (var i = 0; i < removeBtn.length; i++) {
        var btn = removeBtn[i];
        btn.addEventListener('click', delCartItem);
    }

    var quantityInput = document.getElementsByClassName('cart_quantity_input');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', quantityChange);
    }

    var addtocarBtn = document.getElementsByClassName('foodContent-btn');
    for (var i = 0; i < addtocarBtn.length; i++) {
        var btn = addtocarBtn[i];
        btn.addEventListener('click', clickAddToCart)
    }

    document.getElementsByClassName('btn_purchase')[0].addEventListener('click', placeOrder);       
}

function placeOrder() {
    var cartItems = document.getElementsByClassName('cart_items')[0];
    while (cartItems.hasChildNodes()) { //keep removing the every row of items and start from the first row until no more row left
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotalPrice();
    alert("Proceed to payment");
    location.assign("payment.html");
}

function delCartItem(event) { //use to del item from cart
    var btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove(); //remove this item row
    updateTotalPrice();
} 

function quantityChange(event) { //the quantity changes
    var input = event.target;
    if (isNaN(input.value) || input.value < 1) { //at least 1 quantity
        input.value = 1;
    }
    updateTotalPrice();
}

function clickAddToCart(event) { //when addtocart btn is clicked, pass the value to addtocart function 
    var btn = event.target;
    var item = btn.parentElement.parentElement; // div class= foodContent
    var name = item.getElementsByClassName('foodContent-title')[0].innerText;
    var price = item.getElementsByClassName('foodContent-price')[0].innerText;
    var img = item.getElementsByClassName('foodContent-img')[0].src;
    console.log(name, price, img);
    addtocart(name, price, img);
    updateTotalPrice();
}

function addtocart(name, price, img) { //create cart row
    var row = document.createElement('div'); 
    row.classList.add('cart_row');
    var cartItems = document.getElementsByClassName('cart_items')[0];
    var cartItemTitle = cartItems.getElementsByClassName('cart_item_title');
    for (var i = 0; cartItemTitle.length; i++) {
        if (cartItemTitle[i].innerText == name) {
            alert('Item is added to the cart. You can edit the quantity in the cart page.');
            return //if the item is added to the cart, return to exit the loop and stop executing the code below 
        }
    }
    var rowContent = `
        <div class="cart_item cart_column">
            <img class="cart_item_img" src="${img}" width="100" height="100">
            <span class="cart_item_title">${name}</span>
        </div>
        <span class="cart_price cart_column">${price}</span>
        <div class="cart_quantity cart_column">
            <input class="cart_quantity_input" type="number" value="1">
            <button class="btn removeBtn" type="button">X</button>
        </div>`
    row.innerHTML = rowContent;
    cartItems.append(row); 
    row.getElementsByClassName('removeBtn')[0].addEventListener('click', delCartItem); //*
    row.getElementsByClassName('cart_quantity_input')[0].addEventListener('change', quantityChange); //*
    //* (for new added item, cuz these new items is created after the ready(), so we need to add event listener again)
}

function updateTotalPrice() { //use to update to total price of cart
    var cartItems = document.getElementsByClassName('cart_items')[0];
    var cartRows = cartItems.getElementsByClassName('cart_row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var itemPrice = cartRow.getElementsByClassName('cart_price')[0];
        var quantityInput = cartRow.getElementsByClassName('cart_quantity_input')[0];
        var price = parseFloat(itemPrice.innerText.replace('RM', ''));
        var quantity = quantityInput.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100; 
    document.getElementsByClassName('cart_total_price')[0].innerText = 'RM' + total;
}


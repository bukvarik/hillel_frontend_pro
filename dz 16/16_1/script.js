window.addEventListener('load', () => {
    const totalContainer = document.querySelector('#total');
    const cart = document.querySelector('#cart');

    let totaly = {};
    if (localStorage.inCartObj) {
        totaly = JSON.parse(localStorage.inCartObj);
        displayCart();
    }
    
    const products = [
        {
            id: "id_1",
            name: 'Title 1',
            price: '100',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id_2",
            name: 'Title 2',
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        }
    ];

    const productsContainer =  document.querySelector('.products');

    productsContainer.innerHTML = `${products.map(item => {
        let name = item.name;
        if(!name) {
            name = 'Default name';
        }
        return `
        <div class="product solid">   
            <div class="product__title ${item.name ? '' : 'grey'}">${name}</div>
            <img class="product__image" src="${item.image}">
            <div class="product__price">
                <button class="product__action" data-product-id="${item.id}">Add</button>
                <span>${item.price}</span>
            </div>  
        </div>`;
    }).join('')}`;

    const buttons = productsContainer.querySelectorAll('.product__action');
    const menu = document.querySelector('#menu');
    const clear = document.querySelector('#clearAll');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    });

    function onButtonAddClick(event) {
        // const productId = event.target.dataset.productId;
        // const currentProduct = products.find(item => item.id == productId);

        // totalCost += Number(currentProduct.price);
        // totalContainer.innerHTML = totalCost;
        addInCart(event);
        displayCart(event);
        totalInCart();
    }
    
    function displayCart() {
        totalInCart();
        cart.innerHTML = `${Object.values(totaly).map(i => {
            totalInCart();
            let quan = `quantity_${i.id}`;

            return `
            <div class='cart_item'>
                <div class='cart_title'>${i.name}</div>
                <img class='cart_img' src='${i.image}'></img>
                <button class='cart_add' data-quantity=${i.id}>+</button><div class='cart_quantity'>${i[quan]}</div><button class='cart_remove' data-quantity=${i.id}>-</button>
                <div class='cart_price'>${i.price}</div>
            </div>
            `
        }).join('')}`
        totalContainer.innerHTML = `${totalVal}`;

    }

    const addButtons = document.querySelectorAll('.cart_add');
    const remButtons = document.querySelectorAll('.cart_remove');


    remButtons.forEach(btnRem => {
        btnRem.addEventListener('click', removeButton);
    });

    addButtons.forEach(btnAdd => {
        btnAdd.addEventListener('click', addButton);
    });

    function totalInCart() {
        let obj = totaly;

        totalVal = 0;
        Object.values(obj).map(i => {
            totalVal += Number(i.price) * i[`quantity_${i.id}`];
        });
    }

    function addInCart(event) {
        const prod = products.find(item => item.id === event.target.dataset.productId);
        if(totaly[`cart_item_${prod.id}`]) {
            totaly[`cart_item_${prod.id}`][`quantity_${prod.id}`] = totaly[`cart_item_${prod.id}`][`quantity_${prod.id}`] + 1;
        } else {
            totaly[`cart_item_${prod.id}`] = prod;  // totaly[`cart_item_${prod.name === undefined ? 'default' : prod.name}`] = prod;
            totaly[`cart_item_${prod.id}`][`quantity_${prod.id}`] = 1;
        }   
        localStorage.inCartObj = JSON.stringify(totaly);
        displayCart();
    }
    // displayCart();
    

    function addButton(event) {
        console.log('add');
        let productQuan = event.target.dataset.quantity;
        if (totaly[`cart_item_${productQuan}`]) {
            totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`] = totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`] + 1;
        }
        localStorage.inCartObj = JSON.stringify(totaly);
        displayCart();
        // totalInCart();
    }

    function removeButton(event) {
        console.log('remove');
        let productQuan = event.target.dataset.quantity;
        console.log(totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`]);
        if (totaly[`cart_item_${productQuan}`]) {
            totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`] = totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`] - 1;
        }

        if (totaly[`cart_item_${productQuan}`][`quantity_${productQuan}`] <= 0) {
            delete totaly[`cart_item_${productQuan}`];
        }
        localStorage.inCartObj = JSON.stringify(totaly);
        displayCart();
        // totalInCart();
    }

    const currency = [
        { id: 'uah', name: 'hryvnya', price: 1},
        { id: 'usd', name: 'dollar', price: 2},
        { id: 'eur', name: 'euro', price: 3}
    ]

    menu.innerHTML = `${currency.map(i => {
        return `
            <option value='${i.id}' data-price='${i.price}'>${i.name} price: ${i.price}</option>
        `
        
    }).join('')}`;
    
    let amountVal = document.querySelector('#amountVal');
    menu.addEventListener('change', (event) => {
        console.log(event.target.value);

        let amou = event.target.value;
        switch(amou) {
            case 'uah': 
                amountVal.innerHTML = totalVal * 1;
                console.log(totalVal * 1);
                break;
            case 'usd':
                amountVal.innerHTML = totalVal * 2;
                console.log(totalVal * 2);
                break;
            case 'eur':
                amountVal.innerHTML = totalVal * 3;
                console.log(totalVal * 3);
                break;
            default:
                amountVal.innerHTML = totalVal;
                console.log(0);
        }
    });

    clear.addEventListener('click', () => {
        localStorage.clear();
        sessionStorage.clear();
        totaly = {};
        totalContainer.innerHTML = 0;
        cart.innerHTML = '';
        amountVal.innerHTML = 0;
    });
});
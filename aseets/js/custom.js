let foods = [
    {
        id: '01',
        name: 'Chicken Burger',
        Image: 'Chicken_Burger.png',
        rating: 3,
        price: 14
    },
    {
        id: '02',
        name: 'Chicken_Cheese Pizza',
        Image: 'Chicken_Cheese_Pizza.png',
        rating: 5,
        price: 53
    },
    {
        id: '03',
        name: 'Chicken Fry',
        Image: 'Chicken_Fry.png',
        rating: 4,
        price: 23
    },
    {
        id: '04',
        name: 'Chicken Sandwich',
        Image: 'Chicken_Sandwich.png',
        rating: 1,
        price: 45
    },
    {
        id: '05',
        name: 'Fry Nurger',
        Image: 'Fry_Nurger.png',
        rating: 4,
        price: 67
    },
    {
        id: '06',
        name: 'Grill Chicken',
        Image: 'Grill_Chicken.png',
        rating: 5,
        price: 78
    },
    {
        id: '07',
        name: 'Spaghetti',
        Image: 'Spaghetti.png',
        rating: 2,
        price: 678
    },
    {
        id: '08',
        name: 'Seekh Kebab',
        Image: 'Seekh_Kebab.png',
        rating: 5,
        price: 43
    }
];


let activecartitems = [];

// funtion inisit
foodSectionHandler();
cartStatusHandler(0)
deleteactiverow()
calectCartData();
incrementhandler()
dicrimenthandler()
clear_cart()


// food section handler:
function foodSectionHandler() {
    let rowDiv = document.getElementById('food-section');
    let foodItems = function (items) {
        return `<div class="col-lg-3">
                        <div class="food-items">
                            <img src="aseets/image/${items.Image}" alt="image">
                            <div class="food-information">
                                <div class="name">
                                    <span>${items.name}</span>
                                    </div>
                                <div class="rating d-flex mt-3 mb-3">
                                    ${ratinghandler(items.rating)}
                                <div class="price ms-auto">
                                    <span>$${items.price.toFixed(2)}</span></div>
                                    </div>
                                <div class = "food-btn">
                                    <a data-id="${items.id}" class="add-to-cart-btn" href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    let output = foods.map(function (item) {
        return foodItems(item);
    })
    rowDiv.innerHTML = output.join('')
}

// ratinghandler:

// addToCartHandler
// function addToCart (){
//     let AddToCart = document.querySelectorAll('.add-to-cart-btn');

//     AddToCart.forEach(function(cetter){
//     cetter.addEventListener('click', carthandler)

//     function carthandler(e){
//         e.preventDefault();
//         console.log('hoise');
//     }
//     })
// } 

function ratinghandler(items) {
    let output = [];
    for (let i = 1; i <= 5; i++) {
        output.push(`<i class="fa-solid ${items >= i && 'active'} fa-star"></i>`)
    }
    return output.join('');
}

// calect cart data
function calectCartData() {
    let calectData = document.querySelectorAll('.add-to-cart-btn');
    let carddataid;

    calectData.forEach(function (items) {
        items.addEventListener('click', function (e) {
            e.preventDefault();
            carddataid = e.target.getAttribute('data-id');

            // push data on cart
            let activedata = foods.find(function (items) {
                return items.id == carddataid;
            });

            if (activecartitems.includes(activedata) == false) {

                activedata.total_count = 1;
                activecartitems.push(activedata);

            };
            cartStatusHandler(activecartitems.length)

            btnstatuschange(activecartitems)
            // console.log(dataids, carddataid);
            activeitemsrowhandler(activecartitems)
        })
    })
}

// cardStustchange
function cartStatusHandler(sal) {
    let cartStatus = document.getElementById('card-status');
    cartStatus.innerHTML = sal;
}

// btnstatuschange
function btnstatuschange(salman) {
    let allbtntags = document.querySelectorAll('.add-to-cart-btn')
    allbtntags.forEach(function (itams) {
        itams.classList.remove('adedd')
        itams.textContent = 'Add to cart';
    })

    // allbtntags.map(function (itams){
    //     let atags = document.querySelector(`[data-id = "${itams}"]`)
    //     itams.classList.add('adedd');
    //     itams.classList.add(atags.innerHTML)
    // })

    salman.forEach(function (items) {
        let atags = document.querySelector(`[data-id = "${items.id}"]`)
        atags.classList.add('adedd');
        atags.textContent = 'Allradey adedd';
    })
}

// activeitemsrowhandler    

// function activeitemsrowhandler (){
//     let tableBody = document.getElementById('tablebody');
//     let tablerow = function (id, Image, name, price){
//         return `<tr>
//         <td>
//           <img src="aseets/image/${Image}" alt="image">
//         </td>
//         <td>
//           <span>${name}</span>
//         </td>
//         <td>
//           <span class="">${price}</span>
//         </td>
//         <td>
//           <div class="amount-area">
//             <span class="amount me-1">3</span>
//             <div class="plus"><span><i class="fa-solid fa-plus"></i></span></div>
//             <div class="minus"><span><i class="fa-solid fa-minus"></i></span></div>
//           </div>
//         </td>
//         <td>
//           <span>$45.00</span> 
//         </td>
//         <td>
//           <div data-id="${id}" class="action"><i class="fa-solid fa-trash"></i></div>
//         </td>
//       </tr>`
//     }

//     let activeitem = activecartitems.map(function(items){
//         return tablerow(items.id, items.Image, items.name, items.price);
//         return tablerow(items);
//     })

//     tableBody.innerHTML = activeitem.join(''); 
// }
function activeitemsrowhandler() {
    let tableBody = document.getElementById('tablebody');
    let tablerow = function (items) {
        return `<tr>
                    <td>
                        <img src="aseets/image/${items.Image}" alt="image">
                    </td>    
                    <td>
                        <span>${items.name}</span>
                    </td>    
                    <td>
                        <span>$${items.price.toFixed(2)}</span>
                    </td>    
                    <td>
                        <div class="amount-area">
                        <span class="amount me-1">${items.total_count}</span>
                        <div class="plus"><span><i data-id="${items.id}" class="fa-solid fa-plus increment_btn"></i></span></div>
                        <div class="minus"><span><i data-id="${items.id}" class="fa-solid fa-minus decrement_btn"></i></span></div>
                        </div>
                    </td>    
                    <td>
                        <span>$${(items.price * items.total_count).toFixed(2)}</span> 
                    </td>
                    <td>
                        <div class="action deletebtn"><i data-id="${items.id}" class="deletebtn fa-solid fa-trash"></i></div>
                    </td>    
                </tr>`
    }

    let activeitem = activecartitems.map(function (items) {
        return tablerow(items);
    })

    if (activecartitems.length == 0) {
        tableBody.innerHTML = `<tr>
                                    <th colspan="6">
                                    <p class="text-center mb-0 p-2">NO Data Found 🤣🤣🤣😁😁😁</p>
                                    </th>
                                </tr>`
    } else {
        tableBody.innerHTML = activeitem.join('');
    }


    // fainalTotal
    let final = activecartitems.map((itams) => {
        return itams.price * itams.total_count;
    })
    let updatedata = final.reduce((total, salman) => {
        return total + salman;
    }, 0)


    document.getElementById('fainal_total').innerHTML = updatedata.toFixed(2);
}

// deleteactiverow 

// function deleteactiverow(){
//     let tableBody = document.getElementById('tablebody');
//     tableBody.addEventListener('click', function(e){

//         let deletedata = activecartitems.forEach(function(){
//             if (e.target.classList.contains('deletebtn')){
//                 let id = e.target.getAttribute('data-id');
//                 e.target.addEventListener('click', function(){
//                     let updatedata = activecartitems.filter(function(itams){
//                         return itams.id != id;
//                     })
//                 })
//                 activeitemsrowhandler()
//             }
//         })
//     })
// }

function deleteactiverow() {
    let deleteBtn = document.querySelectorAll('.deletebtn');
    let tableBody = document.getElementById('tablebody');


    tableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('deletebtn') == true) {
            let dataId = e.target.getAttribute('data-id');
            console.log(dataId);
            activecartitems = activecartitems.filter(function (itams) {
                return itams.id != dataId;
            })

            activeitemsrowhandler();
            btnstatuschange(activecartitems);
            cartStatusHandler(activecartitems.length);
        }
    })
}

// incrementhandler
function incrementhandler() {
    let tableBody = document.getElementById('tablebody');
    tableBody.addEventListener('click', function (e) {
        e.preventDefault();

        let chaek = e.target.classList.contains('increment_btn');
        if (chaek) {
            let dataid = e.target.getAttribute('data-id');
            let updatedata = activecartitems.map(function (itams) {
                if (itams.id == dataid) {
                    itams.total_count = itams.total_count < 20 ? itams.total_count + 1 : 20;
                }
                return itams;
            })
            activecartitems = updatedata;
            activeitemsrowhandler()
        }
    })
}

// dicrimenthandler
function dicrimenthandler() {
    let tableBody = document.getElementById('tablebody');
    tableBody.addEventListener('click', function (e) {
        e.preventDefault();

        let chaek = e.target.classList.contains('decrement_btn');
        if (chaek) {
            let dataid = e.target.getAttribute('data-id');
            let updatedata = activecartitems.map(function (itams) {
                if (itams.id == dataid) {
                    itams.total_count = itams.total_count > 1 ? itams.total_count - 1 : 1;
                }
                return itams;
            })
            activecartitems = updatedata;
            activeitemsrowhandler()
        }
    })
}

function clear_cart() {
    let clearCart = document.getElementById('clearcart');
    clearCart.addEventListener('click', (e) => {
        e.preventDefault();
        activecartitems = [];
        activeitemsrowhandler();
        btnstatuschange(activecartitems);
        cartStatusHandler(activecartitems.length);
    })
}


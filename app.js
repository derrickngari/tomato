const menuList = document.querySelector('.list');

// http rquest for menu items
let http = new XMLHttpRequest();
http.open('get', 'menu_item.json', true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let menuItems = JSON.parse(this.responseText);
         let output = '';

         for(let item of menuItems){
            output += `
            <div class="menu-list-item">
                <div class="menu-list-item-img" >
                    <button class="filter-btn" data-id="all"><img src=${item.menu_image} alt=""></button>
                </div>
                <div class="menu-name">${item.menu_name}</div>
            </div>
            `;

            menuList.innerHTML = output;
         }
    }
    else{
        alert('Error!');
    }
}
    const menuItem = document.querySelectorAll('.filter-btn');
    menuItem.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            console.log(e.currentTarget.dataset);
        })
    })


    
    

// http rquest for menu items
const foodList = document.querySelector('.food-list');

let http2 = new XMLHttpRequest();
http2.open('get', 'food_list.json', true);
http2.send();

http2.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let foodItems = JSON.parse(this.responseText);
        let output2 = '';

        for(let food of foodItems){
            output2 += `
                <div class="food-item">
                                <div class="food-image">
                                    <img src=${food.image} alt="">
                                    <div class="add-icon">
                                        <div class="cta">
                                            <img src="./Assets/remove_icon_red.png" alt="">
                                            <p>2</p>
                                            <img src="./Assets/add_icon_green.png" alt="">
                                        </div>
                                        <img src="./Assets/add_icon_white.png" alt="">
                                    </div>
                                </div>
                                <div class="food-name">
                                    <h4>${food.name}</h4>
                                    <div class="rating">
                                        <img src="./Assets/rating_starts.png" alt="">
                                    </div>
                                </div>
                                <div class="food-desc">
                                    <p>${food.description}</p>
                                </div>
                                <div class="food-price">
                                    <p>Ksh ${food.price}</p>
                                </div>
                            </div>
            `;

            foodList.innerHTML = output2;
        }
    }
    else{
        console.log('Error');
    }
}

const addBtn = document.querySelector('.add-icon');
const cta = document.querySelector('.cta');

addBtn.addEventListener('click', () => {
    cta.style.display = 'block';
    addBtn.style.display = 'none';
})

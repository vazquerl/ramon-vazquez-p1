// Inject dynamic content into the website 
const menuItems = ['Coffee', 'Pastries', 'Sandwiches']; 
const specialOffers = ['50% off on all pastries', 'Buy one get one free on coffee']; 

// Function to inject menu items into the webpage 
function injectMenuItems() { 
    const menuList = document.getElementById('menu-items'); 
    menuItems.forEach(item => { 
        const li = document.createElement('li'); 
        li.textContent = item; 
        menuList.appendChild(li);
    });
 } 
 // Function to inject special offers into the webpage 
 function injectSpecialOffers() { 
    const specialOffersDiv = document.getElementById('special-offers'); 
    specialOffers.forEach(offer => { 
        const p = document.createElement('p'); 
        p.textContent = offer; 
 specialOffersDiv.appendChild(p); 
    }); 
} 
// Call functions to inject content injectMenuItems(); injectSpecialOffers();
injectMenuItems();
injectSpecialOffers();

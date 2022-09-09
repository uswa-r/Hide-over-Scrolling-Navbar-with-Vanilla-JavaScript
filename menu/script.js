const menu = [{
        id: 1,
        title: "Pista Biscuits",
        category: "Breakfast",
        price: 10.99,
        img: "./imgs/p0.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Ramen",
        category: "Lunch",
        price: 3.99,
        img: "./imgs/p1.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Chocolate Cake",
        category: "Bakery",
        price: 14.99,
        img: "./imgs/p2.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Brownie with IceCream",
        category: "Bakery",
        price: 6.39,
        img: "./imgs/p3.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Mix Biscuits",
        category: "Bakery",
        price: 10.99,
        img: "./imgs/p4.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Sandwich",
        category: "Lunch",
        price: 3.99,
        img: "./imgs/p5.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Crossiant",
        category: "Breakfast",
        price: 2.99,
        img: "./imgs/p6.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "Lunch",
        price: 12.99,
        img: "./imgs/p7.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "Bakery",
        price: 16.99,
        img: "./imgs/p8.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "Breakfast",
        price: 22.99,
        img: "./imgs/p9.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

//load dynamic cards
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

//filter cards
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'All') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});
//end of filter cards

function displayMenuItems(menuItems) {
    //now to iterate the array instead of static database:
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
//load cards ends here
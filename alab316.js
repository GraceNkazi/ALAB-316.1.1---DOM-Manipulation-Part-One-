/************Part 1: Getting Started****************/

const mainEl = document.querySelector("main");


mainEl.style.backgroundColor = "var(--main-bg)";
console.log("mainEl");

/***step3 */
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"


/***step4****/
// function myFunction() {
//     var element = document.getElementById("mainEl");
//     element.classList.add("flex-ctr");
//   }
/*other methode*/

mainEl.setAttribute('class', 'flex-ctr');


  /************Part 2: Creating a Menu Bar****************/

const topMenuEl = getElementById('top-menu')
//const topMenuEl = document.querySelector("header");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// console.log("topMenuEl");


// function myFunction() {
//     var element = document.getElementById("topMenuEl");
//     element.classList.add("flex-around");
//   }

/*other Methode*/
mainEl.setAttribute('class', 'flex-around');


/************Part 3: Adding Menu Buttons****************/


// const menu = document.getElementById("top-menu")
//   // .appendChild(document.createElement("a"))

// const newli = document.createElement("li")

// const newA = document.createElement("a")


// menu.appendChild(newli);
// newli.appendChild(newA);


// newA.innerHTML = "ABOUT CATALOG ORDERS ACCOUNT";

// const updateATag = document.querySelector('a')
// updateATag.setAttribute('href');


var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

//adding the menuLink to the navBar
menuLinks.forEach(link => {
  const a = document.createElement('a');
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
}
const loadData = async() => {
    fetch("http://gsx2json.com/api?id=10fc7hCGUCVp2T9CYB9qz5x642aZPfDBd40SR2Z-e9rk")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let rows = data["rows"];
            console.log(rows)
            let list = document.getElementById('lists');
            // list.style.textTransform = "UpperCase"
            for (i = 0; i < rows.length; i++) {
                list.innerHTML += `<li class="data"> 
                <h2>Service: ${rows[i].service} </h2>
                <p>Available: ${rows[i].serviceavailable} <br>City: ${rows[i].city} <br> Supplier: ${rows[i].nameofsupplier} <br>Contact: ${rows[i].contactnumber}</p></li>`;
            }
        })
        .catch(err => console.log(err))
}
loadData();

function searchInlist() {
    let input, ul, li, a, i, searchValue;
    input = document.getElementById('searchBar');
    ul = document.getElementById("lists");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        searchValue = a.textContent || a.innerText;
        if (searchValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
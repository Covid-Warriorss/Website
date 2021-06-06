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
const loadData1 = async() => {
    fetch("https://life-api.coronasafe.network/data/medicine_v2.json")
        .then(response => response.json())
        .then(data => {
            let rows = data["data"];
            console.log(rows)
            let list = document.getElementById('lists');
            for (i = 0; i < rows.length; i++) {
                if ('resource_type' in rows[i]) {
                    if (rows[i].resource_type != "" && rows[i].resource_type != "Select") {
                        list.innerHTML += `<li class="data"> 
                <h2>Service:${rows[i].resource_type}</h2>
                <p>District: ${rows[i].district} <br> Supplier: ${rows[i].title} <br>Contact: ${rows[i].phone_1}</p></li>`;

                    }
                }
            }
        }).catch(err => console.log(err))
}
const loadData = async() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=jwCuyRnqKkTzxKmwGM9hpjNBzcXlSEWPh0QAWUGzg_i7KcKllRO67hohzw8q70fm55Wc9erZmpex6SVfG6SOZmY_zK5L1b-mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIqw8kl3NxvzRFJcZAX_RY8rIdOZN2k3h25hsDJApPiy9FjRmyQY25tJ7gXzPxohspYZ9Hh4g7EoJ8PmXwPiwKygFWGgqhDKUg&lib=M7k_fMCcms0wsnPfCaVtIWw_aaQm-UuqJ")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let rows = data["GoogleSheetData"];
            console.log(rows)

            for (i = 1; i < rows.length; i++) {
                console.log(rows[1][1])
                if (rows[i][6] != "" || rows[i][3] != "" || rows[i][0] != "" || rows[i][1] != "") {
                    let list = document.getElementById('lists');
                    list.innerHTML += `<li class="data"> 
                <h2>Service: ${rows[i][6]} </h2>
                <p> City: ${rows[i][3]} <br> Supplier: ${rows[i][0]} <br>Contact: ${rows[i][1]}</p></li>`;
                }
            }
        }).catch(err => console.log(err))
}
loadData();
loadData1();

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
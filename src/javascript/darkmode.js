const btnDarkmode = document.querySelector(".header__btn");
const bodyMode = document.getElementById("body");

btnDarkmode.addEventListener('click', () => {

    if (bodyMode.classList.contains('body__manha')) {

        btnDarkmode.innerHTML = `
            <button class="header__btn"><box-icon class="header__icon" name='moon' type='solid' ></box-icon></button>
        `
        bodyMode.classList.remove('body__manha');
        bodyMode.classList.add('body__noite');
    
    } else {
        btnDarkmode.innerHTML = `
            <button class="header__btn"><box-icon class="header__icon" name='sun' type='solid' ></box-icon></button>
        `;

        bodyMode.classList.remove('body__noite');
        bodyMode.classList.add('body__manha');

    }
});


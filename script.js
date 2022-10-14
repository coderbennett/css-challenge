let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');

let paragraph1 = document.getElementById('paragraph1');
let paragraph2 = document.getElementById('paragraph2');
let paragraph3 = document.getElementById('paragraph3');

tab1.addEventListener('click', (event) => {
    tab1.style = "background:black;color:white;margin:auto; width:33%; padding:6px;";
    paragraph1.style="display:inline;padding:16px;";
    tab2.style = "margin:auto; width:33%; padding:6px; border-left:solid;"
    paragraph2.style="display:none";
    tab3.style = "margin:auto; width:33%; padding:6px;border-left:solid;"
    paragraph3.style="display:none"; 
});

tab2.addEventListener('click', (event) => {
    tab2.style = "background:black;color:white;margin:auto; width:33%; padding:6px;";
    paragraph2.style="display:inline;padding:16px;";
    tab1.style = "background:white;color:black;margin:auto; width:33%; padding:6px;"
    paragraph1.style="display:none";
    tab3.style = "background:white;color:black;margin:auto; width:33%; padding:6px;border-left:solid;"
    paragraph3.style="display:none";
});

tab3.addEventListener('click', (event) => {
    tab3.style = "background:black;color:white;margin:auto; width:33%; padding:6px;";
    paragraph3.style="display:inline;padding:16px;";
    tab1.style = "background:white;color:black;margin:auto; width:33%; padding:6px;"
    paragraph1.style="display:none";
    tab2.style = "background:white;color:black;margin:auto; width:33%; padding:6px;border-left:solid;"
    paragraph2.style="display:none";
});
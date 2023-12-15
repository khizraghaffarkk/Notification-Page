// let names=['max','min','julie','max'];
// for(const e of names){
//     console.log(e);
// }
// alert("hhh")
let bttn=document.getElementById("read");

bttn.addEventListener('click',() => {
    document.querySelectorAll('.single-box').forEach(e => {
        e.classList.remove('unseen');
    });

    document.querySelectorAll('.dot').forEach(e => {
        e.classList.remove('dot');
    });

    document.getElementById("num").innerText='0';
});
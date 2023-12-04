var gfSubmitBtn = document.getElementById("GFBtn");
var kfSubmitBtn = document.getElementById("KFBtn");
var gfConfirmBtn = document.getElementById("gfConfirm");
var kfConfirmBtn = document.getElementById("kfConfirm");

kfSubmitBtn.addEventListener('mouseenter', () => {
    kfSubmitBtn.style.backgroundColor = '#826120';
});

kfSubmitBtn.addEventListener('mouseleave', () => {
    kfSubmitBtn.style.backgroundColor = '#C69431';
});

kfSubmitBtn.addEventListener('click', () => {
    kfConfirmBtn.style.display = 'grid';
});

gfSubmitBtn.addEventListener('mouseenter', () => {
    gfSubmitBtn.style.backgroundColor = '#826120';
});

gfSubmitBtn.addEventListener('mouseleave', () => {
    gfSubmitBtn.style.backgroundColor = '#C69431';
});

gfSubmitBtn.addEventListener('click', () => {
    gfConfirmBtn.style.display = 'grid';
});
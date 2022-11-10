let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

function rename() {
    let newname = prompt("pls input new name");
    const myname = document.getElementById("myname");
    myname.textContent = newname;
}

const reName = document.getElementById("rename");
reName.addEventListener("click", rename, false);

//点击计数
const button = document.getElementById("testclick");

button.addEventListener('click', (event) => {
    button.textContent = `Click count: ${event.detail}`;
})

//点击事件
document.querySelector('html').onclick = function() {
    //alert(`Don't Click Me !!!`);
}

//图片切换
let myImage = document.getElementById('myImage');

function changeImage() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/my.jpg') {
        myImage.setAttribute('src', 'images/my2.jpg');
    } else {
        myImage.setAttribute('src', 'images/my.jpg');
    }
}

//myImage.addEventListener('click', changeImage, true);
myImage.onclick = changeImage;

let changeUserName = document.getElementById('changeUser');
myHeading;

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了,' + storedName;
}
//changeUserName.onclick = setUserName;
changeUserName.onclick = function() {
    setUserName();
}
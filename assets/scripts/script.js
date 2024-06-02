const bodyList = document.getElementById('body-list');
const hatList = document.getElementById('hat-list');
const head2List = document.getElementById('head2-list');
const accList = document.getElementById('acc-list');
const acc2List = document.getElementById('acc2-list');
const effectList = document.getElementById('effect-list');
const bgList = document.getElementById('bg-list');

var current_body = undefined;
var current_hat = undefined;
var current_head2 = undefined;
var current_acc = undefined;
var current_acc2 = undefined;
var current_effect = undefined;
var current_bg = undefined;

var selected_body = 1;
var selected_hat = 0;
var selected_head2 = 0;
var selected_acc = 0;
var selected_acc2 = 0;
var selected_effect = 0;
var selected_bg = 1;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'hat':
            current_hat = image;
            break;
        case 'head2':
            current_head2 = image;
            break;
        case 'acc':
            current_acc = image;
            break;
        case 'acc2':
            current_acc2 = image;
            break;
        case 'effect':
            current_effect = image;
            break;
        case 'bg':
            current_bg = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'body':
            return selected_body;
        case 'hat':
            return selected_hat;
        case 'head2':
            return selected_head2;
        case 'acc':
            return selected_acc;
        case 'acc2':
            return selected_acc2;
        case 'effect':
            return selected_effect;
        case 'bg':
            return selected_bg;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'hat':
            selected_hat = idx;
            break;
        case 'head2':
            selected_head2 = idx;
            break;
        case 'acc':
            selected_acc = idx;
            break;
        case 'acc2':
            selected_acc2 = idx;
            break;
        case 'effect':
            selected_effect = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}
    
AddParts(bodyList, 'body',1, 'assets/img/cat-icon-1.png', 'assets/img/cat-1.png', true);
AddParts(bodyList, 'body',2, 'assets/img/cat-icon-2.png', 'assets/img/cat-2.png');
AddParts(bodyList, 'body',3, 'assets/img/cat-icon-3.png', 'assets/img/cat-3.png');
AddParts(bodyList, 'body',4, 'assets/img/cat-icon-4.png', 'assets/img/cat-4.png');
AddParts(bodyList, 'body',5, 'assets/img/cat-icon-5.png', 'assets/img/cat-5.png');
AddParts(bodyList, 'body',6, 'assets/img/cat-icon-6.png', 'assets/img/cat-6.png');
AddParts(bodyList, 'body',7, 'assets/img/cat-icon-7.png', 'assets/img/cat-7.png');
AddParts(bodyList, 'body',8, 'assets/img/cat-icon-8.png', 'assets/img/cat-8.png');
AddParts(bodyList, 'body',9, 'assets/img/cat-icon-9.png', 'assets/img/cat-9.png');

AddParts(hatList, 'hat',0, 'assets/img/none.png', undefined, true);
AddParts(hatList, 'hat',1, 'assets/img/head-icon-1.png', 'assets/img/head-1.png');
AddParts(hatList, 'hat',2, 'assets/img/head-icon-2.png', 'assets/img/head-2.png');
AddParts(hatList, 'hat',3, 'assets/img/head-icon-3.png', 'assets/img/head-3.png');
AddParts(hatList, 'hat',4, 'assets/img/head-icon-4.png', 'assets/img/head-4.png');
AddParts(hatList, 'hat',5, 'assets/img/head-icon-5.png', 'assets/img/head-5.png');
AddParts(hatList, 'hat',6, 'assets/img/head-icon-6.png', 'assets/img/head-6.png');
AddParts(hatList, 'hat',7, 'assets/img/head-icon-7.png', 'assets/img/head-7.png');

AddParts(head2List, 'head2',0, 'assets/img/none.png', undefined, true);
AddParts(head2List, 'head2',1, 'assets/img/head2-icon-1.png', 'assets/img/head2-1.png');
AddParts(head2List, 'head2',2, 'assets/img/head2-icon-2.png', 'assets/img/head2-2.png');

AddParts(accList, 'acc',0, 'assets/img/none.png', undefined, true);
AddParts(accList, 'acc',1, 'assets/img/acc-icon-1.png', 'assets/img/acc-1.png');
AddParts(accList, 'acc',2, 'assets/img/acc-icon-2.png', 'assets/img/acc-2.png');

AddParts(acc2List, 'acc2',0, 'assets/img/none.png', undefined, true);
AddParts(acc2List, 'acc2',1, 'assets/img/acc2-icon-1.png', 'assets/img/acc2-1.png');
AddParts(acc2List, 'acc2',2, 'assets/img/acc2-icon-2.png', 'assets/img/acc2-2.png');
AddParts(acc2List, 'acc2',3, 'assets/img/acc2-icon-3.png', 'assets/img/acc2-3.png');

AddParts(effectList, 'effect',0, 'assets/img/none.png', undefined, true);
AddParts(effectList, 'effect',1, 'assets/img/effect-icon-1.png', 'assets/img/effect-1.png');
AddParts(effectList, 'effect',2, 'assets/img/effect-icon-2.png', 'assets/img/effect-2.png');
AddParts(effectList, 'effect',3, 'assets/img/effect-icon-3.png', 'assets/img/effect-3.png');
AddParts(effectList, 'effect',4, 'assets/img/effect-icon-4.png', 'assets/img/effect-4.png');
AddParts(effectList, 'effect',5, 'assets/img/effect-icon-5.png', 'assets/img/effect-5.png');

AddParts(bgList, 'bg',1, 'assets/img/bg-icon-1.png', 'assets/img/bg-1.png', true);
AddParts(bgList, 'bg',2, 'assets/img/bg-icon-2.png', 'assets/img/bg-2.png');
AddParts(bgList, 'bg',3, 'assets/img/bg-icon-3.png', 'assets/img/bg-3.png');
AddParts(bgList, 'bg',4, 'assets/img/bg-icon-4.png', 'assets/img/bg-4.png');
AddParts(bgList, 'bg',5, 'assets/img/bg-icon-5.png', 'assets/img/bg-5.png');
AddParts(bgList, 'bg',6, 'assets/img/bg-icon-6.png', 'assets/img/bg-6.png');
AddParts(bgList, 'bg',7, 'assets/img/bg-icon-7.png', 'assets/img/bg-7.png');
AddParts(bgList, 'bg',8, 'assets/img/bg-icon-8.png', 'assets/img/bg-8.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_acc2 != undefined) {
        context.drawImage(current_acc2, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_acc != undefined) {
        context.drawImage(current_acc, 0, 0, 400, 400 );
    }

    if(current_hat != undefined) {
        context.drawImage(current_hat, 0, 0, 400, 400 );
    }

    if(current_head2 != undefined) {
        context.drawImage(current_head2, 0, 0, 400, 400 );
    }
    
    if(current_effect != undefined) {
        context.drawImage(current_effect, 0, 0, 400, 400 );
    }

}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('body', 1);
    selectParts('hat', 0);
    selectParts('head2', 0);
    selectParts('acc', 0);
    selectParts('acc2', 0);
    selectParts('effect', 0);
    selectParts('bg', 1);
}

const randomBtn = document.getElementById('random-btn');
randomBtn.onclick = () => {
    selectParts('body', randRange(1,9));
    selectParts('hat', randRange(0,7));
    selectParts('head2', randRange(0,2));
    selectParts('acc', randRange(0,2));
    selectParts('acc2', randRange(0,3));
    selectParts('effect', randRange(0,5));
    selectParts('bg', randRange(1,8));
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'smilecat.png';
    link.href = canvas.toDataURL()
    link.click();
}

const bodyLeftBtn = document.getElementById('body-left');
bodyLeftBtn.onclick = () => {
    bodyList.style.transform = 'translateX(0px)';
}

const bodyRightBtn = document.getElementById('body-right');
bodyRightBtn.onclick = () => {
    bodyList.style.transform = 'translateX(-130px)';
}

const hatLeftBtn = document.getElementById('hat-left');
hatLeftBtn.onclick = () => {
    hatList.style.transform = 'translateX(0px)';
}

const hatRightBtn = document.getElementById('hat-right');
hatRightBtn.onclick = () => {
    hatList.style.transform = 'translateX(-50px)';
}
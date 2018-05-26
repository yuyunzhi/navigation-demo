
//1、初始化，数据
var hashX = init()

var keys = hashX.keys
var hash = hashX.hash
var index=0;
var body = document.querySelector("body");
var input = document.querySelector("input");

//2、生成键盘
while(index<keys['length']){
    var div1 =  creativeDiv('div');
    var row=keys[index];
    for(var number=0;number<row.length;number++){               
        var kbd = createKbd(row[number]);
        var button = createButton(row[number]);   
        var image = createImage(hash[row[number]]);  
        kbd.classList.add(row[number])  
    }
index=index+1;
}


//3、对键盘鼠标的监听
body.onclick = function (evt){
    if(evt.target.localName == "input"){
        document.onkeypress=''; 
    }else if(evt.target.localName == "kbd"){
         var classNumber = evt.target.className[4];//key w ,w是在第5位
         website=hash[classNumber];
         isWebsite(website)
    }
    else{
        document.onkeypress=function(xxx){
            key=xxx['key'];  //将监听的键盘字母保存到变量key
            website=hash[key];  //获取hash数组的值（网站地址）保存变量website;
            //在当前窗口打开网站
            //location.href = "http://"+website
            //在新窗口打开网站
            isWebsite(website)         
        }
    }   
}



/***下面可以不用看*****/
//初始化数据
function init(){
    var keys = {
        0:['1','2','3','4','5','6','7','8','9','0'],
        1:['q','w','e','r','t','y','u','i','o','p'],
        2:['a','s','d','f','g','h','j','k','l'],
        3:['z','x','c','v','b','n','m'],
        length:4,
    }
    
    var hash={
        1:'www.qq.com',
        q:'www.qq.com',
        w:'www.weibo.com',
        e:'www.ele.me',
        z:'www.zhihu.com',
        m:'www.mcdonalds.com.cn'
    }

    //取出localStorage 中的zzz 对应的hash
    var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz')||'null');//将字符串转化为JSON
    if(hashInLocalStorage){
        hash = hashInLocalStorage
    }

    return {
        "keys":keys,
        "hash":hash,
    }
}


//函数：JS创建元素
function c(tagName){
    return document.createElement(tagName)
}

//创建div,并插入box
function creativeDiv(tagName){
    var div1 = c('div');
    var box = document.getElementById('box');
    box.appendChild(div1);
    return div1;

}

//创建button
function createButton(id){
    //插入button按钮，用户输入更改hash网址
    var  button = c('button');
    button.id = id;
    kbd.appendChild(button);
    //绑定鼠标点击事件
    button.onclick = function(xxx){
        var button2=xxx.target;
        var image2=button2.previousSibling;
        var key = button2.id;
        x = prompt('请输入键位'+key+'对应的网站地址')
        hash[key] = x; //变更网址
        image2.src='http://'+hash[row[number]]+'/favicon.ico';
        image.onerror=function(aaa){
            aaa.target.src='https://i.loli.net/2018/05/02/5ae95aee4a6c2.png';
        }
        localStorage.setItem('zzz',JSON.stringify(hash)); //将hash转化为符合json语法的字符串，储存在zzz
        window.location.reload()
   }
    button.textContent = "E";
    return button;

}

document.querySelector('xxx')
//创建image
function createImage(domain){
    //插入image icon 图标
    var image=c('img');
    kbd.appendChild(image);
    if(domain){
        image.src='http://'+hash[row[number]]+'/favicon.ico';
    }
    else{
        image.src='https://i.loli.net/2018/05/02/5ae95aee4a6c2.png';
    }
    image.onerror=function(aaa){
        aaa.target.src='https://i.loli.net/2018/05/02/5ae95aee4a6c2.png';

    }
    return image;

}

//创建kbd 
function createKbd(text){
    var kbd = c('kbd');
    kbd.className='key';
    kbd.textContent=text;
    div1.appendChild(kbd);
    return kbd;
}

//判断用户输入的地址是否有效，解决bug
function isWebsite(website){
    if(website === undefined || website === null){
        return
     }else{
        window.open('http://'+website,'_blank');
     }
}
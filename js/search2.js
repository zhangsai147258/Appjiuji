// 搜索效果
var seach = document.querySelector(".gtit input");
var SearchRes = document.querySelector('.SearchRes');
function cb(data) {
    
    console.log(data);
    for (var i in data.s) {
        
        var node = document.createElement('li');
        node.innerHTML = "<span>"+ '<img src="images/gimg/seach.png" alt=""></img>'+ data.s[i] + "</span>";
        SearchRes.style.display="block";
        SearchRes.appendChild(node);
    }
    seach.onblur=function () {
        
        SearchRes.innerHTML="";
        SearchRes.style.display= "none";
    }
    // SearchRes.innerHTML="";
}

seach.onkeydown= function () {
    // console.log(11);
    
   
       SearchRes.innerHTML="";
 
        var scriptEl = document.createElement("script");
    
        scriptEl.src = "https://sug.so.360.cn/suggest?word=" + this.value + "&encodein=utf-8&encodeout=utf-8&pq=&callback=cb";
        document.body.appendChild(scriptEl);       
}
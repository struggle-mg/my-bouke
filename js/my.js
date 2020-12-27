var pics=document.getElementById("pics");
var n=1;
setInterval(function(){
    if(n>6) n=1;
    pics.innerHTML="<img src='img/("+n+").jpg'/>";
    n++;
},4000);


function secBoard01(){
    var l1=document.getElementById("l1")
    var l2=document.getElementById("l2")
    var l3=document.getElementById("l3")
    var l4=document.getElementById("l4")
    var l5=document.getElementById("l5")

    var div1=document.getElementById("num1")
    var div2=document.getElementById("num2")
    var div3=document.getElementById("num3")
    var div4=document.getElementById("num4")
    var div5=document.getElementById("num5")
    var display=div1.style.display;
    if(display=="none"){
        l1.style.backgroundColor="rgba(235,235,235,0.6)";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="block";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="none";
    }else{
        l1.style.backgroundColor="rgba(235,235,235,0.6)";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="block";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="none";
    }
}

function secBoard02(){
    var l1=document.getElementById("l1")
    var l2=document.getElementById("l2")
    var l3=document.getElementById("l3")
    var l4=document.getElementById("l4")
    var l5=document.getElementById("l5")

    var div1=document.getElementById("num1")
    var div2=document.getElementById("num2")
    var div3=document.getElementById("num3")
    var div4=document.getElementById("num4")
    var div5=document.getElementById("num5")
    var d1=div1.style.display;
    var d2=div2.style.display;
    var d3=div3.style.display;
    var d4=div4.style.display;
    var d5=div5.style.display;
    if(d2=="none"){
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="rgba(235,235,235,0.6)";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="block";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="none";
    }else{
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="rgba(235,235,235,0.6)";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="block";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="none";
    }
}

function secBoard03(){
    var l1=document.getElementById("l1")
    var l2=document.getElementById("l2")
    var l3=document.getElementById("l3")
    var l4=document.getElementById("l4")
    var l5=document.getElementById("l5")

    var div1=document.getElementById("num1")
    var div2=document.getElementById("num2")
    var div3=document.getElementById("num3")
    var div4=document.getElementById("num4")
    var div5=document.getElementById("num5")
    var d1=div1.style.display;
    var d2=div2.style.display;
    var d3=div3.style.display;
    var d4=div4.style.display;
    var d5=div5.style.display;
    if(d3=="none"){
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="rgba(235,235,235,0.6)";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="block";
        div4.style.display="none";
        div5.style.display="none";
    }else{
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="rgba(235,235,235,0.6)";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="block";
        div4.style.display="none";
        div5.style.display="none";
    }
}

function secBoard04(){
    var l1=document.getElementById("l1")
    var l2=document.getElementById("l2")
    var l3=document.getElementById("l3")
    var l4=document.getElementById("l4")
    var l5=document.getElementById("l5")

    var div1=document.getElementById("num1")
    var div2=document.getElementById("num2")
    var div3=document.getElementById("num3")
    var div4=document.getElementById("num4")
    var div5=document.getElementById("num5")
    var d1=div1.style.display;
    var d2=div2.style.display;
    var d3=div3.style.display;
    var d4=div4.style.display;
    var d5=div5.style.display;
    if(d4=="none"){
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="rgba(235,235,235,0.6)";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="block";
        div5.style.display="none";
    }else{
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="rgba(235,235,235,0.6)";
        l5.style.backgroundColor="";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="block";
        div5.style.display="none";
    }
}

function secBoard05(){
    var l1=document.getElementById("l1")
    var l2=document.getElementById("l2")
    var l3=document.getElementById("l3")
    var l4=document.getElementById("l4")
    var l5=document.getElementById("l5")

    var div1=document.getElementById("num1")
    var div2=document.getElementById("num2")
    var div3=document.getElementById("num3")
    var div4=document.getElementById("num4")
    var div5=document.getElementById("num5")
    var d1=div1.style.display;
    var d2=div2.style.display;
    var d3=div3.style.display;
    var d4=div4.style.display;
    var d5=div5.style.display;
    if(d5=="none"){
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="rgba(235,235,235,0.6)";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="block";
    }else{
        l1.style.backgroundColor="transparent";
        l2.style.backgroundColor="";
        l3.style.backgroundColor="";
        l4.style.backgroundColor="";
        l5.style.backgroundColor="rgba(235,235,235,0.6)";

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="block";
    }
}


//提交留言表单
function showInput(){
	var count=0;
	var corl=document.getElementById("comment");//获取输入框对象
	var val=corl.value;//获取用户输入
	var show=document.getElementById("1");
	var newdiv=document.createElement("div");
	newdiv.innerHTML=val;
	newdiv.className="show-comment"
	show.parentNode.insertBefore(newdiv,show)
}



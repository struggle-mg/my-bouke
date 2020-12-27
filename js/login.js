function checkLogin(){
    var id = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
//判断非空
    if((id==null || id=="") || (pass==null || pass=="")){
        alert("用户名或密码不能为空！！");
    }
    else{
        if(id=="12345" && pass=="12345"){
// 页面跳转的语句
            alert("欢迎来到我的个人网页");
            window.location.href="my.html";
            return false
        }
        else{
            alert("用户名或密码错误！！");
        }
    }
}
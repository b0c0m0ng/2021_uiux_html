function nowMenu(menu){ // menu = "main"
    if(menu == "main"){
        $(".bar").css("opacity",0);
        console.log("메인연결됨");
    }else{
        $(".menu li").eq(menu).addClass("active"); // document.querySelectorAll(".menu li")[menu].classList.add("active")
        $(".bar").css("left",200*menu);
        console.log("서브페이지");
    }


    // $(".menu li").hover(function(){},function(){}) // 마우스가 올라와 있을 때 , 빠졌을 때

    $(".menu li").hover(function(){
        let menuLi = $(this).index();
        
        $(this).css("background-color","skyblue");

        if(menu == "main"){
            $(".bar").css("opacity",1);
        }

        $(".bar").css("left",200*menuLi);
        
    },function(){
        $(this).css("background-color","initial");
        if(menu == "main"){
            $(".bar").css("opacity",0);
        }
        $(".bar").css("left",200*menu);

    });


}







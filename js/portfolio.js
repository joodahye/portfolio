$(document).ready(function(){
	
	//스킬마우스오버 시 설명나옴
	$(".hcjpa a").mouseenter(function(){
			let i = $(this).index();
			$("#text11 p").hide();
			$("#text11 p").eq(i).show();
	});
	

  //버튼슬라이드
	let pf = ($("#page5").width() * (-1));

	$(".arrowleft").click(function(){
		prev()
	});
	$(".arrowright").click(function(){
		next()
	});
	
	function next(){
		$("#work_total").stop(). animate({left: pf * 2 },"slow",function(){
			$("#work_total").append( $(".page5pp1").first());
			$("#work_total").css("left" , pf+ "px" )	
		});		
	}
	function prev(){
		$("#work_total").stop().animate({left:0},"slow",function(){
			$("#work_total").prepend( $(".page5pp1").last());
			$("#work_total").css("left" , pf + "px")
		});
	}
	
	
	//TAPESTRY부분
	let w1 =  parseInt($(".interesttitle a").width()) + parseInt($(".interesttitle a").css("margin-right")) ;
	let w2 = $("#interests3type nav").width();
	w1 = parseInt(w1);
	//alert( w2 );
$(".interesttitle a").click(function(){   
	let i = $(this).index();
	if( i == 3) {i = 0; }
	if( i == 4) {i = 1; }
	$(".interesttitle").stop().animate({left: w1 * i * (-1)  });
	//alert(   w2* i * (-1) +"px"  );
	$("#interests3type").stop().animate({left: w2* i * (-1) },1000);
});



		//모바일 메뉴 네비게이션
		if(  $(window).width()<1000 ) {
			$(".menu").click(function(){
		
		$("header nav").stop().slideToggle(500,function(){
			if( $("header nav").css("display")=="block"){
					$(".menu").text("close");
			}
			else{
					$(".menu").text("menu");
			}
			});
		});
			//메뉴 항목을 클릭
			$("header nav").click(function(){
			$("header nav").stop().slideUp();
			$(".menu").text("menu");
		});
	}
		
		/*
		
		
	$(".menu").click(function(){
		const menubar = $("header>nav").width();
		//모바일 버튼 클릭
		$("header nav").stop().animate({right: 0},1200);

	});
		//닫기버튼클릭
	$(".menu").click(function(){
		$("header nav").stop().animate({right: -650},1200);
		});
	}*/
});///////end
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
			$("#work_total").css("left" , pf + "px" )	
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


	//ETC 사진 클릭 시 아이프레임 변경
	$(".postersimg a").click(function(){
		let etc = $(this).index();
		$(".mockup1 iframe").eq(etc).show().siblings().hide();
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
	
	//모바일 etc팝업//
	$(".postersimg a").click(function(){
			let popup  = $(this).index();
			$(".mockup1 iframe").eq(popup).fadeIn();
	});
	//팝업(큰이미지)--닫기	
	$(".mockup1 iframe").mouseenter(function(){
		$(".mockup1 iframe").fadeOut();
	});
	
	}
	
	
	//스크롤 휠 이벤트
	window.addEventListener("wheel", function(e){
			e.preventDefault();
		},{passive : false});
	
		$(document).ready(function(){
		
		var $html = $("html");
	 
		var page = 1;
		 
		var lastPage = $(".content").length;
		 
		$html.animate({scrollTop:0},10);
		
		$(window).on("wheel", function(e){
	 
		if($html.is(":animated")) return;
	 
				if(e.originalEvent.deltaY > 0){
					if(page== lastPage) return;
			 
					page++;
				}else if(e.originalEvent.deltaY < 0){
					if(page == 1) return;
			 
					page--;
				}
				var posTop = (page-1) * $(window).height();
			 
				$html.animate({scrollTop : posTop});
			 
		});

	});
					//마지막 콘택트 페이지 애니메이션
           $(window).scroll(function(){		
							if(  $(window).scrollTop()>= 600){
									$(".page2p1").addClass("slideInKeyframes");
									$("#page2 img").addClass("slideInimgKeyframes");
					}
					if(  $(window).scrollTop()>= 6200){
						$("#footer").addClass("footerKeyframes");
					}
					});
	
});///////end
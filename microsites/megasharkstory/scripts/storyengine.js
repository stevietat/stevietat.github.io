 $(document).ready(function() {
   
   $('#loadcheck').load(function() {
      $('#loader').hide();
   });
   
    
    $('.popup').click(function(event) {
      var width  = 575,
          height = 400,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          url    = this.href,
          opts   = 'status=1' +
                   ',width='  + width  +
                   ',height=' + height +
                   ',top='    + top    +
                   ',left='   + left;

      window.open(url, 'twitter', opts);

      return false;
    });   

var pages = ["#cover","#page1","#page2","#page3","#page4","#page5","#page6","#page7","#page8","#inter1","#page9","#inter2","#page10","#page11","#page12","#page13","#inter3","#page14","#page15","#page16","#page17","#page18","#page19","#page20","#page21","#page22"];

var smallthumb = ["sm_cover","sm_image1","sm_image2","sm_image3","sm_image4","sm_image5","sm_image6","sm_image7","sm_image8","sm_inter1","sm_image9","sm_inter2","sm_image10","sm_image11","sm_image12","sm_image13","sm_inter3","sm_image14","sm_image15","sm_image16","sm_image17","sm_image18","sm_image19","sm_image20","sm_image21","sm_image22"];


var totalPages=pages.length;
	
	for(i=0; i<totalPages; i++){
		$('<a href=javascript:jumpTo(' + i + ');><li id=chapter'+ i +' class="inactivechapter '+smallthumb[i]+'">'+(i+1)+'</li></a>').appendTo('#chapters');
		$(pages[i]).hide();
	
	}
	$("#chapter0").addClass("activechapter").removeClass("inactivechapter");
	var counter = 0;
	var curPage = pages[counter];
	var windowHash = location.hash;
	
	if( windowHash !==""){
		curPage = windowHash;
		for(i=0; i<totalPages; i++){
			if(pages[i] == curPage){
			counter=i;	
			}
		}
	}

	$(curPage).show();
	
	changePage = function(dest){
    
    if(dest!== counter){
		if(dest>counter){
			var direction1="left";
			var direction2="right"	
		}else{
			var direction1="right";
			var direction2="left"	
		}
		var textShow=($(pages[dest]).children("div"));
	  var textHide=($(pages[counter]).children("div"));
   
    $("#chapter"+dest).addClass("activechapter").removeClass("inactivechapter");
    $("#chapter"+counter).addClass("inactivechapter").removeClass("activechapter");
 
    textHide.fadeOut(300);
    
    textShow.children().each(function() {
        $(this).delay(0).hide();
    });
        // You'll need to call this every time the event occurs that exposes the bug, such as changing tab divs.
        

       	refreshBackgrounds(pages[dest]);
        $(pages[counter]).hide("slide", { direction: direction1 }, 1600, function(){window.location=pages[dest];});
        
        $(pages[dest]).show("slide", { direction: direction2 }, 1300, function(){
        
          //refreshBackgrounds(pages[dest]);
        	textShow.show();
          var d= 0;
          textShow.children().each(function() {
              $(this).delay(d).fadeIn(2000) ;
              d += 300;
          });
        });
		
    counter = dest;
		changeArrows();
	}
}
	
	jumpTo = function(dest){
		changePage(dest);
		changeMenu();
		
	}
	
	changeArrows = function(){
		if(counter == 0){
			 $("#prev_button").fadeOut("slow");
		}else{
			$("#prev_button").fadeIn("slow");	
		}
		if(counter == totalPages-1){
			 $("#next_button").fadeOut("slow");
		}else{
			$("#next_button").fadeIn("slow");	
		}	
	}	   
	changeMenu=function(){
		$("#menu_button").toggleClass("menu_on menu_off"); 
		$("#menu_body").slideToggle();
	}
	

	
	$("#next_button").click(function () {
		changePage(counter+1);
	});
	$("#prev_button").click(function () {
		 changePage(counter-1);
	});	 
    
    $("#menu_body").hide(); 
 
	$("#menu_button").click(function () {
		changeMenu();
	});
	
    $("#close_button").click(function () {
		$('#ipad_overlay').hide('fade');
	});
	if(navigator.userAgent.match(/iPad/i) != null){
		$('#ipad_overlay').show();
	}else{
		$('#ipad_overlay').hide();
	}
	
	changeArrows();
	
  function refreshBackgrounds(selector) {
    // Chrome shim to fix http://groups.google.com/a/chromium.org/group/chromium-bugs/browse_thread/thread/1b6a86d6d4cb8b04/739e937fa945a921
    // Remove this once Chrome fixes its bug.
    if (/chrome/.test(navigator.userAgent.toLowerCase())) {
      $(selector).each(function() {
        var $this = $(this);
        if ($this.css("background-image")) {
          var oldBackgroundImage = $this.css("background-image");
          setTimeout(function() {
            $this.css("background-image", oldBackgroundImage);
          }, 1);
        }
      });
    }
  }


	
  });
  
$(document).ready(function(){

	Prismic.Api('https://smarchitects.prismic.io/api', function (err, Api) {
	    Api.form("everything")
	    .ref(Api.master())
	    .query(Prismic.Predicates.at("document.type", "home_image"))
	    .submit(function (err, response) {
	      var results = response.results;
	      var body = $("body");
	      for (var i = 0; i < results.length; i++) {

					image = results[i].getImage("home_image.image").asHtml();
					var imageD = $("<div class='home'></div>");
					imageD.append(image);
					body.append(imageD);
	      }
	    });
			if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				$(".infoabout").click(function(){
					$(".project,.info,.images,.close").hide();
					$(".about,.thumbnail").show();
					$(".infoabout").css("opacity","1");
					$(".name").css("opacity",".1");
				});
			} else {
				$(".infoabout").click(function(){
					$(".project,.info,.images,.close,.pro,.home").hide();
					$(".project").css("width","40vw");
					$(".about,.thumbnail").show();
					$(".infoabout").css("opacity","1");
					$(".name").css("opacity",".1");
				});
			}
	  }, "MC5XWWRBd3ljQUFJbVZZZnFo.TO-_vXDvv73vv73vv73vv73vv71F77-9cu-_vWx1b--_ve-_vSpjdzFtG--_ve-_ve-_ve-_ve-_vWnvv71077-9");


	Prismic.Api('https://smarchitects.prismic.io/api', function (err, Api) {
	    Api.form("everything")
	    .ref(Api.master())
	    .query(Prismic.Predicates.at("document.type", "about"))
	    .submit(function (err, response) {
	      var results = response.results;
	      var body = $("body");
	      for (var i = 0; i < results.length; i++) {
					info = results[i].getStructuredText("about.info").asHtml();
					var infoP = $("<div class='about'></div>");
					infoP.append(info);
					body.append(infoP);
	      }
	    });
			if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				$(".infoabout").click(function(){
					$(".project,.info,.images,.close").hide();
					$(".about,.thumbnail").show();
					$(".infoabout").css("opacity","1");
					$(".name").css("opacity",".1");
				});
			} else {
				$(".infoabout").click(function(){
					$(".project,.info,.images,.close").hide();
					$(".project").css("width","40vw");
					$(".about,.thumbnail").show();
					$(".infoabout").css("opacity","1");
					$(".name").css("opacity",".1");
					$(".pro").hide();
				});
			}
	  }, "MC5XWWRBd3ljQUFJbVZZZnFo.TO-_vXDvv73vv73vv73vv73vv71F77-9cu-_vWx1b--_ve-_vSpjdzFtG--_ve-_ve-_ve-_ve-_vWnvv71077-9");


Prismic.Api('https://smarchitects.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project_post"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      for (var i = 0; i < results.length; i++) {
				order = results[i].getNumber("project_post.order");
        title = results[i].getStructuredText("project_post.title").asText();
				date = results[i].getStructuredText("project_post.date").asText();
				desc = results[i].getStructuredText("project_post.desc").asText();
				thumb = results[i].getImage("project_post.thumbnail").asHtml();
				images = results[i].getGroup("project_post.images").asHtml();
				var orderP = $("<p class='number' style='display:none'></p>");
				var titleP = $("<p class='title'></p>");
				var dateP = $("<p class='date'></p>");
				var descD = $("<div class='info'></div>");
				var thumbnail = $("<div class='thumbnail'></div>");
				var imagesD = $("<div class='images'></div>");
				var project = $("<div class='project'></div>");
				orderP.append(order);
				titleP.append(title);
				dateP.append(date);
				thumbnail.append(thumb);
				imagesD.append(images);
				descD.append(titleP,dateP,desc);
				project.append(orderP,titleP,dateP,descD,thumbnail,imagesD)
				body.append(project);
      }
			var $divs = $("div.project");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      $(ordered).appendTo("body");
			  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
											$(".project").click(function(){
												$(".infoabout").css("opacity",".1");
												$(".close").show();
												var offset = $(this).offset();
												var top = offset.top;
												console.log(top);
												$("body").animate({scrollTop:top-100},500);
												$(".images,.info").hide();
												$(".thumbnail").show();
												$(".thumbnail",this).hide();
												console.log("hello");
												$(".images",this).show();
											});
										$(".name").click(function(){
											$("body").animate({scrollTop:0},400);
												$(".thumbnail").show();
											$(".images,.info").hide();
										});

				} else {
										$(".pro").click(function(){
											var height = $(window).height()-15;
											$("body").animate({scrollTop:height},0);
										});
										$(".project").click(function(){
											$(".infoabout").css("opacity",".1");
											$(".close").show();
											var offset = $(this).offset();
											var height = $(this).height();
											var top = offset.top;
											console.log(top,height);
											$(".project").css("width","40vw");
											$(this).css("width","60vw");
											$(".images,.info").hide();
											$(".thumbnail").show();
											$(".thumbnail",this).hide();
											console.log("hello");
											$(".images,.info",this).show();
											$("body").animate({scrollTop:top-15},500);
										});
									$(".name").click(function(){
										$("body").animate({scrollTop:0},400);
											$(".thumbnail").show();
											$(".project").css("width","40vw");
										$(".images,.info").hide();
									});
			}
    });
  }, "MC5XWWRBd3ljQUFJbVZZZnFo.TO-_vXDvv73vv73vv73vv73vv71F77-9cu-_vWx1b--_ve-_vSpjdzFtG--_ve-_ve-_ve-_ve-_vWnvv71077-9");
 if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				 $(".close").click(function(){
				  $(".info,.images").hide();
				  $(".thumbnail").show();
				  $(".close").hide();
				  $(".infoabout").css("opacity","1");
				 });
 } else {
	 			$(window).scroll(function(){
					var height = $(window).height();
					if ($("body").scrollTop() < height/2 ) {
						$(".close,.info,.images").fadeOut(300);
						$(".thumbnail,.project").show();
						$(".project").css("width","40vw");
						$(".infoabout").css("opacity","1");
					}
				})
				 $(".close").click(function(){
				 	$(".project").css("width","40vw");
				 	$(".info,.images").hide();
				 	$(".thumbnail").show();
				 	$(".close").hide();
				 	$(".infoabout").css("opacity","1");
				 });
				 $(".name").click(function(){
			 		$(".about,.close").hide();
			 		$(".project,.pro,.home").show();
			 		$(".infoabout").css("opacity","1");
			 		$(".name").css("opacity","1");
			 	});
 }







});

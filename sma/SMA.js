$(document).ready(function(){


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
				});
			} else {
				$(".infoabout").click(function(){
					$(".project,.info,.images,.close,.homegrid,.phil,.practice,.people").hide();
					$(".project").css("width","40vw");
					$(".about,.thumbnail").show();
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
			var tops = [ ];
      for (var i = 0; i < results.length; i++) {
				order = results[i].getNumber("project_post.order");
        title = results[i].getStructuredText("project_post.title").asText();
				date = results[i].getStructuredText("project_post.date").asText();
				desc = results[i].getStructuredText("project_post.desc").asHtml();
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
				project.append(orderP,titleP,thumbnail,imagesD);
				// $(project).attr("target",i);
				body.append(project);

				var hello,top;
				var hello = $(project).offset();
				var top = hello.top;

				tops.push(hello.top);
					// var hello = $(project).offset();
					// var = $(project).height();
					// var top = hello.top;
					//
					// tops.push(hello.top);


      }

console.log(tops);




			var $divs = $("div.project");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      $(ordered).appendTo("body");




			  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
					$(".project").click(function(){
						$(".close").show();
						var offset = $(this).offset();
						var height = $(this).height();
						var top = offset.top;
						console.log(top,height);
						$(".project").not(this).hide();
						$(".images,.info").hide();
						$(".thumbnail").show();
						$(".thumbnail",this).hide();
						console.log("hello");
						$(".images,.info",this).show();
						$("body").animate({scrollTop:-15},0);
					});
										$(".name").click(function(){
											$("body").animate({scrollTop:0},400);
												$(".thumbnail").show();
											$(".images,.info").hide();
										});

				} else {

										// $(".images > section:first-child > img").clone().addClass("grid").appendTo(".homegrid").hide().delay(400).fadeIn(400);

										$(".pro").click(function(){
											$(".project").show();
											$(".about,.phil,.practice,.people,.about").hide();
											$(".name").css("opacity","1");
										});

										$(".project").click(function(){
											$(".close").show();
											var offset = $(this).offset();
											var height = $(this).height();
											var top = offset.top;
											console.log(top,height);
											$(".project").css("width","30vw");
											$(".project").not(this).hide();
											$(this).css("width","48vw");
											$(".images,.info").hide();
											$(".thumbnail").show();
											$(".thumbnail",this).hide();
											console.log("hello");
											$(".images,.info",this).show();
											$("body").animate({scrollTop:-15},0);
										});

									$(".name").click(function(){
										$("body").animate({scrollTop:0},400);
											$(".thumbnail,.homegrid").show();
											$(".project").css("width","30vw");
										$(".images,.info").hide();
									});
			}
    });
  }, "MC5XWWRBd3ljQUFJbVZZZnFo.TO-_vXDvv73vv73vv73vv73vv71F77-9cu-_vWx1b--_ve-_vSpjdzFtG--_ve-_ve-_ve-_ve-_vWnvv71077-9");
 if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	 $(".close").click(function(){
		$(".project").show();
		$(".info,.images").hide();
		$(".thumbnail").show();
		$(".close").hide();
		$(".infoabout").css("opacity","1");
	 });
				 $(".name").click(function(){
			 		$(".about,.close").hide();
			 		$(".project").show();
			 		$(".infoabout").css("opacity","1");
			 		$(".name").css("opacity","1");
			 	});
 } else {
				 $(".close").click(function(){
				 	$(".project").css("width","30vw").show();
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

				$(".studio").mouseover(function(){
					$("#1,#2,#3").show();
				}).mouseout(function(){
					$("#1,#2,#3").hide();
				});

				$("#1").click(function(){
				 $(".about,.close,.project,.practice,.people").hide();
				 $(".phil").show();
			 });
			 $("#2").click(function(){
				$(".about,.close,.project,.phil,.people").hide();
				$(".practice").show();
				});
				$("#3").click(function(){
 				$(".about,.close,.project,.phil,.practice").hide();
 				$(".people").show();
 				});

 }







});

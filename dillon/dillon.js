

$(document).ready(function(){

  Prismic.Api('https://dillonfroelich.prismic.io/api', function (err, Api) {
      Api.form("everything")
      .ref(Api.master())
      .query(Prismic.Predicates.at("document.type", "about"))
      .submit(function (err, response) {
        var results = response.results;
        var body = $("body");
  			var app = $(".app");


        for (var i = 0; i < results.length; i++) {

  				info = results[i].getStructuredText("about.about").asHtml();

  				var infoD = $("<div class='about'></div>");

  				infoD.append(info);
          app.append(infoD);


        }

      });

      $(".name").click(function() {
        $(".about").toggle();
        // $("body").scrollLeft(0);
        // $(".thumbnail,.project").show();
        // $(".info,.images,.date,.ptitle").hide();
        // $(".back,.down,.up").hide();
        // $(".tip").fadeOut(200);
   		});



    }, "MC5XWVlVZkNZQUFBWmZfeUNH.77-977-9F--_vVjvv73vv73vv73vv73vv70E77-977-977-9a--_vSE277-9TlsX77-9QQHvv70fe--_ve-_ve-_ve-_vQ");


Prismic.Api('https://dillonfroelich.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project_post"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
			var app = $(".app");


      for (var i = 0; i < results.length; i++) {

				order = results[i].getNumber("project_post.order");
        title = results[i].getStructuredText("project_post.title").asText();
				date = results[i].getStructuredText("project_post.date").asText();
				info = results[i].getStructuredText("project_post.info").asHtml();
				thumb = results[i].getImage("project_post.thumbnail").asHtml();
				images = results[i].getGroup("project_post.images").asHtml();


				var num = $("<p style='display:none' class='number'></p>");
				var titleP = $("<p class='ptitle'></p>");
				var infoD = $("<div class='info'></div>");
				var thumbnail = $("<div class='thumbnail'></div>");
				var imagesD = $("<div class='images'></div>");
				var projectD = $("<div class='project'></div>");

				num.append(order);
				titleP.append(title);
				infoD.append(date,info);
				thumbnail.append(thumb);
				imagesD.append(images);
				projectD.append(num,titleP,infoD,thumbnail,imagesD);
				$(projectD).appendTo(app);


      }

			var $divs = $("div.project");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      $(ordered).appendTo(".app");

			$("body").mousewheel(function(event, delta) {
		     	this.scrollLeft -= (delta * .18);
		      event.preventDefault();
          $(".tip").fadeOut(200);

          if ($("body").scrollLeft() > 20) {
            $(".up,.down,.back").addClass("none");
          } else {
            $(".up,.down,.back").removeClass("none");
          }
   		});

      $(".down").click(function(){
        console.log("Wtf");
        $("body").scrollLeft(0);
        $(".images").css("top","-90vh");
        $(".info").css("top","7vh");
        $(".down,.up").css("background-color","white");
        $(".tip").fadeOut(200);
      });

      $(".up").click(function(){
        console.log("Wtf");
        $("body").scrollLeft(0);
        $(".images").css("top","14vh");
        $(".info").css("top","100vh");
        $(".down,.up").css("background-color","rgba(255,255,255,0)");
        $(".tip").fadeOut(200);
        // var offset = $(".images",this).offset();
				// var left = offset.left;
        // $("body").scrollLeft(-left);
      });

			$(".project").click(function(){
          $(".down,.up").css("background-color","rgba(255,255,255,0)");
          $(".back,.down,.up").show();
  				$("body").scrollLeft(0);
  				$(this).addClass("active");
  				$(".thumbnail,.project,.name,.about").hide();
  				$(".info,.images,.date,.ptitle",this).show();
          $(this).show();
          $(".images").css("top","14vh");
          $(".info").css("top","100vh");
          $(".tip").fadeOut(200);

			});

			$(".back").click(function(){
				$("body").scrollLeft(0);
				$(".thumbnail,.project,.name").show();
				$(".info,.images,.date,.ptitle").hide();
				$(".back,.down,.up").hide();
        $(".tip").fadeOut(200);
			});

    });

  }, "MC5XWVlVZkNZQUFBWmZfeUNH.77-977-9F--_vVjvv73vv73vv73vv73vv70E77-977-977-9a--_vSE277-9TlsX77-9QQHvv70fe--_ve-_ve-_ve-_vQ");







});

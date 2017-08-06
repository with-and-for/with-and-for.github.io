

$(document).ready(function(){


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
		     	this.scrollLeft -= (delta * .3);
		      event.preventDefault();
   		});

			$(".project").click(function(){
				$(".back").show();
				$("body").scrollLeft(0);
				$(this).addClass("active");
				$(".thumbnail").hide();
				$(".info,.images,.date,.ptitle",this).show();
				var offset = $(".images",this).offset();
				var left = offset.left;
				$("body").scrollLeft(left);
			});

			$(".back").click(function(){
				$("body").scrollLeft(0);
				$(".thumbnail").show();
				$(".info,.images,.date,.ptitle").hide();
				$(".back").hide();
			});




    });


  }, "MC5XWVlVZkNZQUFBWmZfeUNH.77-977-9F--_vVjvv73vv73vv73vv73vv70E77-977-977-9a--_vSE277-9TlsX77-9QQHvv70fe--_ve-_ve-_ve-_vQ");







});

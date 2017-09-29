
$(document).ready(function(){


Prismic.Api('https://adrianhinojosa.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "images"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");

      for (var i = 0; i < results.length; i++) {

        images = results[i].getGroup("images.images").asHtml();

				var imageD = $("<div class='images'></div>");
     			imageD.append(images);
					body.append(imageD);
      }

			$(document).mousemove(function(){
				var half = $(window).width()/2;
				if (event.pageX < half){
					$(".images > section > img").css("opacity",".2");
				} else {
					$(".images > section > img").css("opacity","1");
				}
			});






    });


  }, "MC5XYzJPM2lzQUFDcU03Nkpy.77-9VS3vv70GVFXvv73vv73vv73vv73vv71OPu-_vQ3vv73vv73vv73vv70177-977-9SW_vv71CPEwK77-9QQ");

	Prismic.Api('https://adrianhinojosa.prismic.io/api', function (err, Api) {
	    Api.form("everything")
	    .ref(Api.master())
	    .query(Prismic.Predicates.at("document.type", "info"))
	    .submit(function (err, response) {
	      var results = response.results;
	      var body = $("body");

	      for (var i = 0; i < results.length; i++) {

	        name = results[i].getStructuredText("info.name").asHtml();
					email = results[i].getStructuredText("info.email").asHtml();
					instagram = results[i].getStructuredText("info.instagram").asHtml();

					var info = $("<div class='info'></div>");
	     			info.append(name,email,instagram);
						body.append(info);
	      }


				$(document).mousemove(function(){
					var half = $(window).width()/2;
					if (event.pageX < half){
						$("h1").css("color","#a5a5a5");
					} else {
						$("h1").css("color","#282828");
					}
				});


	    });


	  }, "MC5XYzJPM2lzQUFDcU03Nkpy.77-9VS3vv70GVFXvv73vv73vv73vv73vv71OPu-_vQ3vv73vv73vv73vv70177-977-9SW_vv71CPEwK77-9QQ");








});


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



	    });


	  }, "MC5XYzJPM2lzQUFDcU03Nkpy.77-9VS3vv70GVFXvv73vv73vv73vv73vv71OPu-_vQ3vv73vv73vv73vv70177-977-9SW_vv71CPEwK77-9QQ");






});


$(document).ready(function(){


Prismic.Api('https://adrianhinojosa.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "image"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var rightside = $(".rightside");
      var src = [];

      for (var i = 0; i < results.length; i++) {

        order = results[i].getNumber("image.order");
        images = results[i].getImage("image.image").asHtml();

        var number = $("<p style='display:none' class='order'></p>");
				var imageD = $("<div class='images'></div>");
        number.append(order);
     		imageD.append(number);
      	body.append(imageD);

          var beep = $(images).attr("src");
          src.push(beep)
          console.log(beep);



      }





if ($(window).width() > 736){
  var $divs = $("div.images");

var ordered = $divs.sort(function (a, b) {
 return $(a).find(".order").text() - $(b).find(".order").text();
});

$(ordered).appendTo("body");

$(".images").hide();

setTimeout(function(){
  $(".images").fadeIn(500);
},500);

  $(".images").each(function(){
    var index = $(this).index(".images");
    $(this).attr("yo",index).css({"background":"url("+src[index]+")","background-size": "auto 100vh","background-repeat":"repeat-x","background-position": "center","background-attachment": "fixed"});
  });
  var length = $(".images").length;
  console.log(length);
  var click = 0;


      $(".images").click(function () {
        click++;
        if (click < length){
          $(this).animate({"height":"0px"},700);
        } else {
          console.log("hello");
          click = 0;
          $(".images").animate({"top":"0","height":"100vh"});
          $(".images:first").delay(400).fadeIn(200);
          $(".images").delay(300).show();
        }
      });

 } else {

   var $divs = $("div.images");

 var ordered = $divs.sort(function (a, b) {
  return $(a).find(".order").text() - $(b).find(".order").text();
 });

 $(ordered).appendTo("body");

 $(".images").hide();

 setTimeout(function(){
   $(".images").fadeIn(500);
 },500);


   $(".images").each(function(){
     var index = $(this).index(".images");
     $(this).attr("yo",index).css({"background":"url("+src[index]+")","background-size": "100vw auto","background-repeat":"repeat-y"});
   });
   var length = $(".images").length;
   console.log(length);
   var click = 0;


   $(".images").click(function () {
     click++;
     if (click < length){
       $(this).animate({"height":"0px"},700);
     } else {
       console.log("hello");
       click = 0;
       $(".images").animate({"top":"0","height":"100vh"});
       $(".images:first").delay(400).fadeIn(200);
       $(".images").delay(300).show();
     }
   });

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

          title = results[i].getStructuredText("info.title").asHtml();
	        name = results[i].getStructuredText("info.name").asHtml();
					contact = results[i].getStructuredText("info.contact").asHtml();

					var info = $("<div class='info'></div>");
          var contactD = $("<div class='contact'></div>")
          contactD.append(contact);
	     			info.append(title,name,contactD);
						body.append(info);

	      }

        if ($(window).width() > 736 ){

				$(document).mousemove(function(){
					var half = $(window).width()*.35;
					if (event.pageX < half){
            $("body").css("cursor","pointer");
						$("h1,.contact > p > a").css({"color":"white","font-size":"18"});
            $(".contact").fadeIn(400);
					} else {
            $("body").css("cursor","url(down.png) 10 20, auto");
						$("h1,.contact > p > a").css({"color":"#a5a5a5","font-size":"14"});
            $(".contact").hide();
					}
				});

      } else {
        // nothing
      }


	    });


	  }, "MC5XYzJPM2lzQUFDcU03Nkpy.77-9VS3vv70GVFXvv73vv73vv73vv73vv71OPu-_vQ3vv73vv73vv73vv70177-977-9SW_vv71CPEwK77-9QQ");



});


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
          src.push(beep);

          // $(images).css("top",100*i+"vh");

      }

      $(".images").hide();

      setTimeout(function(){
        $(".images").fadeIn(400);
      },500);

if ($(window).width() > 736) {

  // assign each div its corresponding source//
  $(".images").each(function(){
    var index = $(this).index(".images");
    $(this).css("background","url("+src[index]+")");
  });

  // sort divs highest to lowest//
  var $divs = $("div.images");

  var ordered = $divs.sort(function (a, b) {
   return $(b).find(".order").text() - $(a).find(".order").text();
  });

  $(ordered).appendTo("body");

  // set background image properties //
  $(".images").each(function(){
    var order = $(this).find(".order").text();
    var index = $(this).index(".images");

    console.log(index,length);
      $(this).css({
      "background-size": "auto 100vh",
      "background-repeat":"repeat-x",
      "background-position": "center",
      "background-attachment": "fixed"});

    });

    // wait to offset each container div //

    setTimeout(function(){
      $(".images").each(function(){
        var index = $(this).index(".images");
        $(this).css({
          "top":100*index+"vh"
          });
      });
    },50);


 } else {


 // assign each div its corresponding source//
 $(".images").each(function(){
   var index = $(this).index(".images");
   $(this).css("background","url("+src[index]+")");
 });

 // sort divs highest to lowest//
 var $divs = $("div.images");

 var ordered = $divs.sort(function (a, b) {
  return $(a).find(".order").text() - $(b).find(".order").text();
 });

 $(ordered).appendTo("body");

 // set background image properties //
 $(".images").each(function(){
   var order = $(this).find(".order").text();
   var index = $(this).index(".images");

   console.log(index,length);
     $(this).css({
     "background-size": "100vw auto",
     "background-repeat":"repeat-y",
     "background-position": "center",
     "background-attachment": "fixed"});

   });

   var click = 0;

   $(".images").click(function(){
     click++;
     var length = $(".images").length;

     if (click < length ){
       $(this).animate({"height":"0"},500);
     } else {
       click=0;
       $(".images").animate({"height":"100vh"},500);
     }

   })

   // wait to offset each container div //

  //  setTimeout(function(){
  //    $(".images").each(function(){
  //      var index = $(this).index(".images");
  //      $(this).css({
  //        "top":100*index+"vh"
  //        });
  //    });
  //  },50);

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
        var link = [];

	      for (var i = 0; i < results.length; i++) {

          title = results[i].getStructuredText("info.title").asHtml();
	        name = results[i].getStructuredText("info.name").asHtml();
					contact = results[i].getStructuredText("info.contact").asHtml();
          links = results[i].getGroup("info.video").asHtml();

          var linkD = $("<div class='links'></div>");
					var info = $("<div class='info'></div>");
          var contactD = $("<div class='contact'></div>");
          linkD.append(links)
          contactD.append(contact);
	     		info.append(title,name,contactD);
					body.append(info,linkD);

          link.push(links);

	      }

        console.log(link);

        $(".info > h1:first-child").click(function() {
          location.reload();
        });

        $(".links > section").each(function(){
          var f = $('<h1>"GODBLESSTHISMESS"</h1>');
          $(f).appendTo(this);
        });




        $("body").on("click",".links > section",function(e){
          // var index = $(this).index("h1");
          $(".close").show();
          var fuck = $("iframe",this).prop("src");
          if ( fuck.indexOf("vimeo") != -1 ){
            console.log("vimeo");
            fuck += "?autoplay=1";
          } else {
            fuck += "&autoplay=1";
            console.log("youtube");
          }
          // fuck += "?autoplay=1";
          $("iframe",this).prop("src",fuck);
          console.log(fuck);
          $(".links > section > h1,.contact,.info").hide();
          $("iframe").css("left","-100vw");
          $(this).children().css("left","0");
          console.log("hello");
        });

        $(".close").click(function(){
          // location.reload();

          $(this).hide();
          $(".links > section > h1,.contact,.info").show();

          $("iframe").each(function(){
            var fuck = $(this).attr("src");
            fuck = fuck.replace("?autoplay=1", "").replace("&autoplay=1", "");
            $(this).attr("src","");
            $(this).attr("src",fuck);
            $(this).css("left","-100vw");
          });


        });


        if ($(window).width() > 736 ){

				$(document).mousemove(function(){
					var half = $(window).width()*.35;
					if (event.pageX < half){
						// $(".info > h1,.contact > p > a").css({"color":"white"});
            $(".contact").fadeIn(400);
					} else {
						// $(".info > h1,.contact > p > a").css({"color":"#a5a5a5"});
            $(".contact").hide();
					}
				});


      } else {
        // nothing
      }


	    });


	  }, "MC5XYzJPM2lzQUFDcU03Nkpy.77-9VS3vv70GVFXvv73vv73vv73vv73vv71OPu-_vQ3vv73vv73vv73vv70177-977-9SW_vv71CPEwK77-9QQ");



});

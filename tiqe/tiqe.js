$(document).ready(function(){

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
      Api.form("everything")
      .ref(Api.master())
      .query(Prismic.Predicates.at("document.type", "home_images"))
      .submit(function (err, response) {
        var results = response.results;
        var body = $("body");

        for (var i = 0; i < results.length; i++) {

          images = results[i].getGroup("home_images.images").asHtml();

          var homeD = $("<div class='home'></div>");
          homeD.append(images);
         	body.append(homeD);

        }

        setTimeout(function(){
          $(".home").fadeIn(400);
        },100);

      });

  }, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

// open call text //

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "open"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var open = $(".opencall");

      for (var i = 0; i < results.length; i++) {

        title = results[i].getStructuredText("open.title").asHtml();
        description = results[i].getStructuredText("open.description").asHtml();

        var infoD = $("<div class=info></div>");

       	infoD.append(description);
        open.append(title,infoD);

      }

    });

}, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

// about page //

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "about_page"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var about = $(".about");

      for (var i = 0; i < results.length; i++) {
        title = results[i].getStructuredText("about_page.title").asHtml();
        description = results[i].getStructuredText("about_page.description").asHtml();

       	about.append(title,description);
        body.append(about);

      }

    });

}, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

// exhibition page //

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "exhibition_page"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var exhibition = $(".exhibition");

      for (var i = 0; i < results.length; i++) {

        title = results[i].getStructuredText("exhibition_page.title").asHtml();
        description = results[i].getStructuredText("exhibition_page.description").asHtml();
        images = results[i].getGroup("exhibition_page.images").asHtml();

  		  exhibition.append(title,description,images);
        body.append(exhibition);

      }


    });

}, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

// blog page //

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "blog_post"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var blog = $(".blog");

      for (var i = 0; i < results.length; i++) {

        order = results[i].getNumber("blog_post.order");
        title = results[i].getStructuredText("blog_post.title").asHtml();
        description = results[i].getStructuredText("blog_post.description").asHtml();

  		var blogD = $("<div class='post'></div>");
  		var number = $("<p style='display:none' class='order'></p>");

  		number.append(order);
  		blogD.append(number,title,description)
  		blog.append(blogD);
        body.append(blog);

      }

       var $divs = $("div.post");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".order").text() - $(a).find(".order").text();
      });

      $(ordered).appendTo(".blog");

    });

  }, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    $(".title:first-child").addClass("active");
    setTimeout(function(){
      $(".home").fadeIn(400);
    },100);
    setTimeout(function(){
      $("#about").fadeIn(400).addClass("animation");
    },300);
    setTimeout(function(){
      $("#exhibition").fadeIn(400).addClass("animation");
    },1100);
    setTimeout(function(){
      $("#blog").fadeIn(400).addClass("animation");
    },1900);
    setTimeout(function(){
      $(".opencall").fadeIn(400);
    },3000);







  } else {

        $(".title:first-child").addClass("active");
        setTimeout(function(){
          $("#about").fadeIn(400).addClass("animation");
        },300);
        setTimeout(function(){
          $("#exhibition").fadeIn(400).addClass("animation");
        },1100);
        setTimeout(function(){
          $("#blog").fadeIn(400).addClass("animation");
        },1900);
        setTimeout(function(){
          $(".opencall").fadeIn(400);
        },3000);

        $(".title").click(function(){
              $(window).scrollTop(0);
              $(".title").not(this).removeClass("active");
              $(this).addClass("active");

              if ($(".title:first-child").hasClass("active")) {
                    $(".about,.exhibition,.blog").hide();
                   }
              if ($("#about").hasClass("active")) {
                  $(".exhibition,.blog").hide();
                  $(".about").show();
                 }
              if ($("#exhibition").hasClass("active")) {
                    $(".about,.blog").hide();
                    $(".exhibition").show();
                    }
              if ($("#blog").hasClass("active")) {
                    $(".about,.exhibition").hide();
                    $(".blog").show();
                  }
        });

        setTimeout(function(){

          // stalling on getting container heights //

        $(window).scroll(function() {
          var aboutHeight= $(".about").height()-$(window).height()+50;
          var exhibitionHeight= $(".exhibition").height()-$(window).height()+100;
          var blogHeight= $(".blog").height()-$(window).height()+50;
          console.log(aboutHeight,exhibitionHeight,blogHeight);
        if ($(".title:first-child").hasClass("active") && $(window).scrollTop() >= 0) {
              event.preventDefault();
              $(window).scrollTop(0);
             }
        if ($("#about").hasClass("active") && $(window).scrollTop() >= aboutHeight) {
            event.preventDefault();
            $(window).scrollTop(aboutHeight);
           }
        if ($("#exhibition").hasClass("active") && $(window).scrollTop() >= exhibitionHeight) {
               event.preventDefault();
               $(window).scrollTop(exhibitionHeight);
              }
        if ($("#blog").hasClass("active") && $(window).scrollTop() >= blogHeight) {
              event.preventDefault();
              $(window).scrollTop(blogHeight);
            }
         });

       },200);


     }






});

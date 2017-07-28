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

// links text //

Prismic.Api('https://tiqe.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "links"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var links = $(".links");

      for (var i = 0; i < results.length; i++) {

        title = results[i].getStructuredText("links.links").asHtml();
        link = results[i].getStructuredText("links.links1").asHtml();

        var infoD = $("<div class=info></div>");

       	infoD.append(link);
        links.append(title,infoD);

      }

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
        aboutcolor = results[i].getColor("about_page.color");
        title = results[i].getStructuredText("about_page.title").asHtml();
        description = results[i].getStructuredText("about_page.description").asHtml();

       	about.append(title,description);
        body.append(about);

      }
      $("#about,.about").css("color",aboutcolor);

      // $("#about").mouseover(function(){
      //   $(this).css({"color":aboutcolor,"background-color":"white"});
      // }).mouseout(function(){
      //   $(this).css({"color":"white","background-color":aboutcolor});
      // });

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

        ecolor = results[i].getColor("exhibition_page.color");
        title = results[i].getStructuredText("exhibition_page.title").asHtml();
        etitle = results[i].getStructuredText("exhibition_page.exhibition_title").asHtml();
        tiqe = results[i].getStructuredText("exhibition_page.tiqe").asHtml();
        materials = results[i].getStructuredText("exhibition_page.materials").asHtml();
        year = results[i].getStructuredText("exhibition_page.year").asHtml();
        description = results[i].getStructuredText("exhibition_page.description").asHtml();
        images = results[i].getGroup("exhibition_page.images").asHtml();


                $(etitle,tiqe,materials,year).addClass("these");
  		  exhibition.append(title,etitle,tiqe,materials,year,description,images);
        body.append(exhibition);

      }

      $("#exhibition,.exhibition").css("color",ecolor);

      // $("#exhibition").mouseover(function(){
      //   $(this).css({"color":ecolor,"background-color":"white"});
      // }).mouseout(function(){
      //   $(this).css({"color":"white","background-color":ecolor});
      // });


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
      var hello;
      var bcolors = [];

      for (var i = 0; i < results.length; i++) {

        bcolor = results[i].getColor("blog_post.color");
        order = results[i].getNumber("blog_post.order");
        title = results[i].getStructuredText("blog_post.title").asHtml();
        description = results[i].getStructuredText("blog_post.description").asHtml();

    		var blogD = $("<div class='post'></div>");
    		var number = $("<p style='display:none' class='order'></p>");

        bcolors.push(bcolor);

    		number.append(order);
    		blogD.append(number,title,description)
    		blog.append(blogD);
        body.append(blog);

      }

      var hello = bcolors[0];
      console.log(hello);

      $(".blog,#blog").css("color",hello);

      // $("#blog").mouseover(function(){
      //   $(this).css({"color":hello,"background-color":"white"});
      // }).mouseout(function(){
      //   $(this).css({"color":"white","background-color":hello});
      // });








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
      $(".opencall,.links").fadeIn(400);
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
          $(".opencall,.links").fadeIn(400);
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



     }






});

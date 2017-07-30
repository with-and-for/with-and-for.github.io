$(document).ready(function(){

// home images //

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
          var up = $("<img class='uphome' src='up1.svg'>");
          var down = $("<img class='downhome' src='down1.svg'>");

          homeD.append(images,up,down);
         	body.append(homeD);

        }

        var count = 0;
        var height = $(".home").outerHeight();
        var inheight = $(".home").innerHeight()*$(".home > section").length;

        $(window).resize(function(){
          setTimeout(function(){
            var height = $(".home").outerHeight();
            var inheight = $(".home").innerHeight()*$(".home > section").length;
          },200);
          console.log(height,inheight);
        });

        $(".uphome,.downhome").hide();

        setTimeout(function(){
          $(".home").fadeIn(400);
        },100);

        setInterval(function(){
              var top = $(".home").scrollTop();
              console.log(top)

              if($(".home").scrollTop() > (inheight-height)-10) {
                setTimeout(function(){
                  $(".home").animate({scrollTop:0},2000);
                  count = 0;
                },1000);
              } else {
                $(".home").animate({scrollTop:(height*count)},1);
                count ++;
              }
        },9000);

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

      $(".open").click(function(){
        $(".opencall").addClass("bigger");
        $(".close").show();
        $(".open").hide();
        $(".opencall > h1,.info > p").addClass("bigfont");
      });

      $(".close").click(function(){
        $(".close").hide();
        $(".open").show();
        $(".opencall").removeClass("bigger");
        $(".opencall > h1,.info > p").removeClass("bigfont");
      });

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

       	about.append(description);
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
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var exhibition = $(".exhibition");
      var ecolors = [];

      for (var i = 0; i < results.length; i++) {

        ecolor = results[i].getColor("project.color");
        order = results[i].getNumber("project.order");
        etitle = results[i].getStructuredText("project.exhibition_title").asHtml();
        tiqe = results[i].getStructuredText("project.tiqe").asHtml();
        materials = results[i].getStructuredText("project.materials").asHtml();
        year = results[i].getStructuredText("project.year").asHtml();
        description = results[i].getStructuredText("project.description").asHtml();
        images = results[i].getGroup("project.images").asHtml();

        ecolors.push(ecolor);

        var projectD = $("<div class='projectpost'></div>");
        var eImages = $("<div class='exhibitionimages'></div>");
        var up = $("<img class='up' src='up1.svg'>");
        var down = $("<img class='down' src='down1.svg'>");
        var number = $("<p style='display:none' class='order'></p>");

        number.append(order);
        eImages.append(images);
        projectD.append(number,up,down,eImages,etitle,tiqe,materials,year,description)
  		  exhibition.append(projectD);


      }

      var $divs = $("div.projectpost");

      var ordered = $divs.sort(function (a, b) {
       return $(b).find(".order").text() - $(a).find(".order").text();
      });

      $(ordered).appendTo(".exhibition");

      var latestColor = ecolors[0];
      console.log(ecolors);
      console.log(latestColor);


      var click = 0;

      $("#exhibition,.exhibition").css("color",latestColor);
      $(".up,.down").css("background-color",latestColor);

      $(".title,#exhibition").click(function(){
        $(".exhibitionimages").scrollTop(0);
        click = 0;
      })

      var height = $(".exhibitionimages").height();
      var length = $(".projectpost").each(function(){
        $(".exhibitionimages").length;
      });
      console.log(length);
      console.log(height);
      var lengths = [];

      // var length = $(".projectpost > .exhibitionimages img").length;

      $(".projectpost").each(function(){
        var length = $(".exhibition img").length;
        lengths.push(length);
      });

      console.log(lengths);

      $(".projectpost > .down").click(function(){
        click++;
        $(".projectpost > .exhibitionimages").animate({scrollTop:height*click},700);
        if (click >= length) {
          click = length;
          console.log(click);
        }
      });

      $(".projectpost > .up").click(function(){
        click = click - 1;
        $(".projectpost > .exhibitionimages").animate({scrollTop:height*click},400);
        if (click <= 0) {
          click = 0;
          console.log("zero!");
        }
        if (click >= length) {
          click = click - 1;
          console.log(click);
        }
      });

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
    $("#about,#exhibition,#blog,.opencall,.links").fadeIn(100);


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
              $("#about").css("text-decoration","underline");
             }
          if ($("#exhibition").hasClass("active")) {
                $(".about,.blog").hide();
                $(".exhibition").show();
                $("#exhibition").css("text-decoration","underline");
                }
          if ($("#blog").hasClass("active")) {
                $(".about,.exhibition").hide();
                $(".blog").show();
                $("#blog").css("text-decoration","underline");
              }
    });






  } else {

        $(".title:first-child").addClass("active");
        $("#about,#exhibition,#blog,.opencall,.links").fadeIn(100);


        $(".title").click(function(){
              $(".opencall").removeClass("bigger");
              $(".opencall > h1,.info > p").removeClass("bigfont");
              $(".close").hide();
              $(".open").show();
              $(window).scrollTop(0);
              $(".title").not(this).removeClass("active");
              $(this).addClass("active");

              if ($(".title:first-child").hasClass("active")) {
                    $(".about,.exhibition,.blog").hide();
                    $("#about,#exhibition,#blog").css("text-decoration","none");
                   }
              if ($("#about").hasClass("active")) {
                  $(".exhibition,.blog").hide();
                  $(".about").show();
                  $("#exhibition,#blog").css("text-decoration","none");
                  $("#about").css("text-decoration","underline");
                 }
              if ($("#exhibition").hasClass("active")) {
                    $(".about,.blog").hide();
                    $(".exhibition").show();
                    $("#about,#blog").css("text-decoration","none");
                    $("#exhibition").css("text-decoration","underline");
                    }
              if ($("#blog").hasClass("active")) {
                    $(".about,.exhibition").hide();
                    $(".blog").show();
                    $("#about,#exhibition").css("text-decoration","none");
                    $("#blog").css("text-decoration","underline");
                  }
        });



     }






});

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

          homeD.append(images);
         	body.append(homeD);

        }

        var count = 0;
        var height = $(".home").outerHeight();
        var inheight = $(".home").innerHeight()*$(".home > section").length;

        $(window).resize(function(){
          $(".home").scrollTop(0);
          setTimeout(function(){
            $(".home").scrollTop(0);
          },400);
        });

        setInterval(function(){
              var top = $(".home").scrollTop();
              if($(".home").scrollTop() > (inheight-height)-10) {
                setTimeout(function(){
                  $(".home").animate({scrollTop:0},1);
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
        $(".opencall").scrollTop(0);
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
        groupName = results[i].getStructuredText("about_page.group_name").asHtml();
        people = results[i].getGroup("about_page.people").asHtml();

        var peopleP = $("<div class='people'></div>");

        peopleP.append(groupName,people);
       	about.append(title,description,peopleP);
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
        projectD.append(number,etitle,tiqe,materials,year,eImages,description)
  		  exhibition.append(projectD);


      }

      var $divs = $("div.projectpost");

      var ordered = $divs.sort(function (a, b) {
       return $(b).find(".order").text() - $(a).find(".order").text();
      });

      $(ordered).appendTo(".exhibition");

      var latestColor = ecolors[0];
      var click = 0;
      console.log(ecolors);

      $("#exhibition,.exhibition").css("color",latestColor);
      $(".up,.down").css("background-color",latestColor);

      $(".projectpost > .exhibitionimages").mouseover(function(){
        $(this).css({"border-left":"10px solid"+latestColor,"margin-left":"-10px"});
      }).mouseout(function(){
        $(this).css({"border-left":"none","margin-left":"0px"});
      });

      var lengths = [];
      $('.exhibitionimages').each(function() {
          lengths.push($(this).children("section").length);
      });

      var count = 1;
      console.log(lengths);

      $(".exhibitionimages").click(function(){
        var index = $(".exhibitionimages").index(this);
        var thisLength = lengths[index];
        var eHeight = $(".exhibitionimages").outerHeight();
        var eInheight = $(".exhibitionimages").innerHeight()*thisLength;

              var top = $(".exhibitionimages").scrollTop();
              if($(".exhibitionimages").scrollTop() > (eInheight-eHeight)-10) {
                  $(".exhibitionimages").animate({scrollTop:0},1);
                  count = 1;
              } else {
                $(".exhibitionimages").animate({scrollTop:(eHeight*count)},1);
                count ++;
              }

      });


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

      $(".blog,#blog").css("color",hello);

       var $divs = $("div.post");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".order").text() - $(a).find(".order").text();
      });

      $(ordered).appendTo(".blog");

    });

  }, "MC5XWERqSWlBQUFFUElzeWtp.OGjvv70O77-9TQbvv73vv73vv73vv73vv73vv73vv73vv707ETVuRe-_vQjvv73vv70j77-9Ju-_vT1SQkE");

  if( /iPad/i.test(navigator.userAgent) ) {
    $(".insta").hide();
  }

  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    $("#about,#exhibition,#blog,.opencall,.home,.insta,.links,#mc_embed_signup").show();


    $(".title").click(function(){
          $(".opencall").removeClass("bigger");
          $(".opencall > h1,.info > p").removeClass("bigfont");
          $(".close").hide();
          $(".open").show();
          $(window).scrollTop(0);
          $(".about,.exhibition,.blog").scrollTop(0);
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

    $(window).on("orientationchange",function(){
      	    	if(window.orientation == 0) {
      	      		$(".titlesection,.opencall,.insta,.home,#mc_embed_signup").show();
                  $(".errorM").hide();
                  $(".titlesection").removeClass("active");
      	    	} else {
      	      		$(".titlesection,.opencall,.insta,.home,#mc_embed_signup,.about,.blog,.exhibition").hide();
                  $(".errorM").show();
      	    	}
    });





  } else {

    $("#about,#exhibition,#blog,.opencall,.home,.links,.insta,#mc_embed_signup").hide();
    $(".home").hide();

    setTimeout(function(){
      $(".title:first-child").css({"color":"black","top":"1vh"});
    },300);

    setTimeout(function(){
      $(".title:first-child").css({"width":"auto"});
    },2000);

    setTimeout(function(){
      $(".title:first-child").css({"font-size":"25"});
    },3000);

    setTimeout(function(){
      $(".opencall,.links,.home,.insta,#mc_embed_signup").fadeIn(800);
    },3600);

    setTimeout(function(){
      $("#about,#exhibition,#blog").show();
    },4900);



        // $(".title:first-child").addClass("active");

        $(".title").click(function(){
              $(".opencall").removeClass("bigger");
              $(".opencall > h1,.info > p").removeClass("bigfont");
              $(".close").hide();
              $(".open").show();
              $(window).scrollTop(0);
              $(".about,.exhibition,.blog").scrollTop(0);
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

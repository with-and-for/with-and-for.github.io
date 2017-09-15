

$(document).ready(function(){

Prismic.Api('https://frannielogan.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      for (var i = 0; i < results.length; i++) {
        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asText();
        year = results[i].getStructuredText("project.year").asText();
        desc = results[i].getStructuredText("project.description").asHtml();
        images = results[i].getGroup("project.images").asHtml();
        color = results[i].getColor("project.title_color");
        var titleP = $("<p class='title'></p>");
        var infoP = $("<p class='info'></p>");
        var gallery = $("<div class='container'></div>");
        var project = $("<div class='project'></div>");
        var numberP = $("<p style='display:none;' class='number'></p>");
        var projectD = $("<div class='projectzone'></div>");
        numberP.append(number);
        titleP.append(title,numberP);
        infoP.append(desc);
        $(images).addClass("gImage").addClass("carousel-cell").appendTo(project);
        body.append(project,titleP,infoP);
      }

      var $mainCarousel = $('.project').flickity({
        cellAlign: 'center',
        contain: true,
        freeScrolling: true,
        wrapAround: true,
        prevNextButtons: false,
        resize: false
      });

      $('.prev').on( 'click', function() {
        $mainCarousel.flickity('previous');
      });

      $('.next').on( 'click', function() {
        $mainCarousel.flickity('next');
      });

      $(".title").addClass("line");

      $(".title").click(function(){
        $(".aboutDown,.aDown").removeClass("line");
        $(this).addClass("line");
        $(".archive,.about").hide();
        $(".project,.infoButton,.prev,.next").show();
        $(".view").remove();
        $(".archiveImage > img").css("opacity","1");
        $(".out").hide();
      });

      $(".infoButton").click(function(){
        $(".info").toggle();
      });
    });

  }, "MC5XVlVfNmlNQUFKZG4wTlVX.De-_vXbvv70a77-977-9JWTvv71BR--_ve-_vXwu77-9TBPvv73vv70ZKUkPV--_ve-_vTJKNV8");

  Prismic.Api('https://frannielogan.prismic.io/api', function (err, Api) {
      Api.form("everything")
      .ref(Api.master())
      .query(Prismic.Predicates.at("document.type", "archive_post"))
      .submit(function (err, response) {
        var results = response.results;
        var body = $("body");
        var titles = $(".titles");
        var archive = $("<div class='archive'></div>");
        for (var i = 0; i < results.length; i++) {
          number = results[i].getNumber("archive_post.order");
          image = results[i].getImage("archive_post.image").asHtml();
          description = results[i].getStructuredText("archive_post.description").asHtml();
          var descP = $("<p class='descP'></p>");
          var order = $("<p style='display:none' class='order'></p>");
          var imageD = $("<div class='archiveImage'></div>");
          var postD = $("<div class='archivepost'></div>");
          order.append(number);
          imageD.append(image);
          descP.append(description);
          postD.append(descP,imageD,order);
          archive.append(postD);
          body.append(archive);
        }

        var $grid = $('.archive').imagesLoaded( function() {
            $grid.masonry({
              itemSelector: '.grid-item',
              percentPosition: true
            });
          });

        var $divs = $("div.archivepost");

        var ordered = $divs.sort(function (a, b) {
         return $(b).find(".order").text() - $(a).find(".order").text();
        });

        $(ordered).appendTo(".archive");

        // only for larger devices //

        if ($(window).width() > 400) {


        $(".archiveImage > img").click(function() {
          if ($(".archiveImage > img").hasClass("no")){
            // no //
          } else {
            $(this).clone().addClass("view").appendTo(".archive");
            $(".out").show();
            $(".archiveImage > img,.descP").css("opacity",".15");
            $(".archiveImage > img").not(this).addClass("no");
          }

				});

        $("body").on("click",".out",function(){
          $(".view").remove();
          $(".archiveImage > img").removeClass("no");
          $(".archiveImage > img,.descP").css("opacity","1");
          $(".out").hide();
        });

        } else {

          // ha ! nothing ! //

        }
    });
    }, "MC5XVlVfNmlNQUFKZG4wTlVX.De-_vXbvv70a77-977-9JWTvv71BR--_ve-_vXwu77-9TBPvv73vv70ZKUkPV--_ve-_vTJKNV8");
    Prismic.Api('https://frannielogan.prismic.io/api', function (err, Api) {
        Api.form("everything")
        .ref(Api.master())
        .query(Prismic.Predicates.at("document.type", "about"))
        .submit(function (err, response) {
          var results = response.results;
          var body = $("body");
          var titles = $(".titles");
          var about = $("<div class='about'></div>");
          for (var i = 0; i < results.length; i++) {

            image = results[i].getImage("about.image").asHtml();
            description = results[i].getStructuredText("about.about").asHtml();

            var imageD = $("<div class='aboutImage'></div>");
            var infoD = $("<div class='aInfo'></div>");

            imageD.append(image);
            infoD.append(description);
            about.append(imageD,infoD);
            body.append(about);

          }

      });
      }, "MC5XVlVfNmlNQUFKZG4wTlVX.De-_vXbvv70a77-977-9JWTvv71BR--_ve-_vXwu77-9TBPvv73vv70ZKUkPV--_ve-_vTJKNV8");

      var height = $(window).height();

      $(".aDown").click(function(){
        $(".aboutDown,.title").removeClass("line");
        $(this).addClass("line");
        $(".archive").show().scrollTop(0);
        $(".project,.about,.infoButton,.prev,.next,.info").hide();
        $(".archiveImage > img,.descP").removeClass("no").css("opacity","1");
      });

      $(".aboutDown").click(function(){
        $(".aDown,.title").removeClass("line");
        $(this).addClass("line");
        $(".archive,.project,.infoButton,.info").hide();
        $(".about").show();
        $(".view").remove();
        $(".archiveImage > img,.descP").removeClass("no").css("opacity","1");
        $(".out,.prev,.next").hide();
      });

      if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
         $(".aboutDown").text("About");
      } else {

      }

      if ($(window).width() < 800 ) {
         $(".aboutDown").text("About");
      } else {

      }

});

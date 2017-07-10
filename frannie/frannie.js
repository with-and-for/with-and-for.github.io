

$(document).ready(function(){


Prismic.Api('https://frannielogan.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))                                                                 
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var titles = $(".titles");



      for (var i = 0; i < results.length; i++) {
        
        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asText();
        year = results[i].getStructuredText("project.year").asText();
        desc = results[i].getStructuredText("project.description").asHtml();
        images = results[i].getGroup("project.images").asHtml();
        color = results[i].getColor("project.title_color");

        var titleP = $("<p class='title'></p>");
        var infoP = $("<p class='info'></p>");
        var gallery = $("<div class='main-carousel'></div>");
        var project = $("<div class='project'></div>");
        var numberP = $("<p style='display:none;' class='number'></p>");

        numberP.append(number);
        titleP.append(title,numberP);
        infoP.append(year,desc);
        gallery.append(images);
        project.attr("rel",'div'+(i+1)).append(titleP,gallery,infoP,numberP);

        body.append(project,titles);

        // append to both //

        $(titleP).css("background-color",color).attr("target",i+1).append(numberP).appendTo(titles,project);

       	
      

      }

      $(".main-carousel > section").addClass("carousel-cell");

      var $mainCarousel = $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: false,
        freeScrolling: true,
        wrapAround:true,
        prevNextButtons: false,
        resize: false
      });


      var $divs = $(".title");
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      $(ordered).appendTo(".titles");


      $("body").on("click",".title",function(){
        var self = $(this);
        $mainCarousel.css("opacity","1");
        $(".project").not(this).css("display","none");
        $(".clicked").remove();
        $('.project[rel=div' + self.attr('target') +']').css("display","inline");
        $(".info").show();
        setTimeout(function(){
          $(self).clone(true).addClass("clicked").appendTo("body");
          $(".up").show();
        },450);
      });

      $('body').on( 'click', ".previous", function() {
      $mainCarousel.flickity('previous');
      });
      // next
      $('body').on( 'click', ".next", function() {
      $mainCarousel.flickity('next');
      });

      $(".title:first-child").css("text-decoration","underline");

     var clicked = 0;

      $(".title").click(function(){
        var height = $(window).height();
        $("html,body").animate({scrollTop:height},400);
        clicked = 1;
      });

    


      // $("html,body").bind("mousewheel", function() {
      //   if (clicked === 0) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // });

      $(window).scroll(function(){
        var height = $(window).height();
        if ($(window).scrollTop() > height) {
          $(".up").show();
        } else {
          $(".clicked").remove();
          $(".up").hide();
        }
      })


      

      

    });


    
  }, "MC5XVlVfNmlNQUFKZG4wTlVX.De-_vXbvv70a77-977-9JWTvv71BR--_ve-_vXwu77-9TBPvv73vv70ZKUkPV--_ve-_vTJKNV8");

// static elements //

      $(".about").click(function(){
        var height = $(window).height();
        $("html,body").animate({scrollTop:height*2},500);
      });

      $(".up").click(function(){
        $("html,body").animate({scrollTop:0},500);
      });



}); // end of document ready //
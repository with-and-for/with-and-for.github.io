

$(document).ready(function(){


Prismic.Api('https://liammontano.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");



      for (var i = 0; i < results.length; i++) {


        color = results[i].getColor("project.border");
        order = results[i].getNumber("project.order");
        title = results[i].getStructuredText("project.title").asHtml();
				year = results[i].getStructuredText("project.year").asHtml();
				desc = results[i].getStructuredText("project.description").asHtml();
				thumbnail = results[i].getImage("project.thumbnail").asHtml();
				images = results[i].getGroup("project.images").asHtml();

        var orderP = $("<p style='display:none' class='order'></p>");
        var titleP = $("<p class='title'></p>");
        var yearP = $("<p class='year'></p>");
        var descP = $("<p class='desc'></p>");
        var thumbD = $("<div class='thumb'></div>");
        var imagesD = $("<div class='images'></div>");
        var project = $("<div class='project'><p style='display:none' class='open'>+</p></div>");

        var left = (Math.floor(Math.random() * 80)) + "vw";
        var top = (Math.floor(Math.random() * 50)) + "vh";

        console.log(left,top);
        orderP.append(order);
        titleP.append(title,year).css("background-color",color);
        // yearP.append(year);
        descP.append(desc);
        thumbD.append(thumbnail);
        imagesD.append(images)
        project.css({"left":left,"top":top,"border-color": color}).append(orderP,titleP,descP,thumbD,imagesD);
				body.append(project);


      }

      var $divs = $(".project");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".order").text() - $(a).find(".order").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo("body");


    if ($(window).width() < 734 ){



      $('html,body').imagesLoaded( function() {

      $(".cover").fadeOut();

      });

      $("body").css({"overflow":"scroll","width":"100% !important"});

      $(".desc,.images > section > img,.thumb").hide();

      $(".thumb").hide();

      $(".project").css({

        "position":"relative",
        "width":"100%",
        "left":"0",
        "top":"0",
        "border-radius":"0px 0px 0px 0px !important",
        "border-left":"none",
        "border-right":"none",
        "height":"auto"

      });

      $(".project").click(function(){
      	console.log("hello");

      	$(".desc,.images > section > img").not(this).hide();
      	$(".desc,.images > section > img",this).show();


      });






    } else {

      $(".project:last").css({
      "background-color":"black",
      "color":"white","top":"20px",
      "left":"20px",
      "border-color":"black",
      "border-width":".5vh",
      "border-radius": "5px 5px 5px 5px",
      "cursor":"pointer"});
      $(".project:last > .thumb").hide();

      $('.project').each(function () {
          if ($(".order").text() == '-1') {
              $(".project",this).css('color', 'red');
            }
      });


      $('html,body').imagesLoaded( function() {

      $(".cover").fadeOut();

      });

      $(".project").not(".project:last").draggable({ axis: "x,y" });

      $(".project").click(function(){
        var left = (Math.floor(Math.random() * 70) + 60) + "vw";
        $(".project").not(this).removeClass("big").addClass("project").draggable({ axis: "x,y" });
        $(".open").not(this).hide();
        $(".thumb").not(this).show();
        $(".project:last > .thumb").hide();
        $(".project:last").css({"top":"20px","left":"20px"});
        $(".images > section > img,.desc").not(this).hide();
        $(this).addClass("big").css("border-radius","0px 0px 0px 0px !important");
        $(".open",this).show();
        $(".images > section > img,.desc",this).show();
        $(".thumb",this).hide();
      });

      $(document).on("click",".open",function(){
        $(".project").removeClass("big").addClass(".project").draggable({ axis: "x,y" });;
        $(".desc,.images > section > img,.open").hide();
        $(".thumb").show();
        console.log("hello");
        $(".project:last > .thumb").hide();
      });

    }



    });


  }, "MC5XZ2k1WUNrQUFLdThJWHRi.77-9RBrvv70R77-9Te-_vWDvv70_OxNYAm3vv73vv70yAB5BM--_ve-_vTvvv73vv73vv73vv73vv73vv70");







});

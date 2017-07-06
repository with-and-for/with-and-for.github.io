$(document).ready(function(){

	$("body,html").scrollTop(0);
	 
Prismic.Api('https://nicholas-dutton.prismic.io/api', function (err, Api) {
    var masterAPI = Api.form("everything").ref(Api.master());





    masterAPI.query(Prismic.Predicates.at("document.type", "article_and_recipe"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var number;
      var title;
      var article;
      var recipletitle;
      var recipe;
      var about;

      for (var i = 0; i < results.length; i++) {

        number = results[i].getNumber("article_and_recipe.number");
        date = results[i].getStructuredText("article_and_recipe.date").asText();
        title = results[i].getStructuredText("article_and_recipe.article_title").asText();
       	article = results[i].getStructuredText("article_and_recipe.article").asHtml();
       	recipletitle = results[i].getStructuredText("article_and_recipe.recipe_title").asText();
       	recipe = results[i].getStructuredText("article_and_recipe.recipe").asHtml();
        keyword = results[i].getStructuredText("article_and_recipe.keywords").asHtml();
     	
     	var card = $("<div class='card'></div>");
      var dateP = $("<h1 class='date'></h1>");
     	var titleP = $("<h1 class='title'></h1>");
     	var articleP = $("<p class='article'></p>");
     	var numberP = $("<p class='number' style='display:none'></p>");
     	var recipearea = $("<div class='recipearea'></div>");
     	var recipetitleP = $("<h1 class='recipetitle'></h1>");
     	var recipeP = $("<p class='recipe'></p>");
      var print = $("<p class='print'>print this recipe</p>");
      var Read = $("<p class='read'>read more</p>");
      var keywords = $("<div class='keywords'></div>");
      var word = $("<p class='keyword'></p>");

      word.append(keyword);
      keywords.append(word);
      dateP.append(date);
     	titleP.append(title);
     	articleP.append(article);
     	recipetitleP.append(recipletitle);
     	recipeP.append(recipe);
     	numberP.append(number);
     	recipearea.append(numberP,recipetitleP,recipeP,print);
      card.append(numberP,keywords,titleP,dateP,articleP,recipearea,Read);
      body.append(card);


      }


      var $divs = $("div.card");


      var ordered = $divs.sort(function (a, b) {

        return $(b).find(".number").text() - $(a).find(".number").text();

      });

      $(ordered).appendTo("body");



      if( /Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent) ) {




        $("body").on("click",".card", function(){
        var height = $(".article",this).height()+$(".recipearea",this).height()+450;
        console.log(height);
        $(this).css({"height":height,"width":"100vw"});
        $(".article",this).not(".number").show().css("positon","relative");
        $(".read",this).hide();
        $(".recipearea",this).show();
        $(".keywords",this).hide();
      });



       

       } else {








        $(".recipearea").click(function(){
            var index = $( ".card" ).index( this )+1;
            console.log(index);
            var divContents = $(this).html();
            var printWindow = window.open('','','width=900,height=1200');
            console.log(index);
            console.log(number);
        

            printWindow.document.write('<html><head><link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"><link rel="stylesheet" type="text/css" href="print.css" media="print"><link rel="stylesheet" type="text/css" href="screen.css" media="screen"><title>Recipe</title>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            // wait for stylesheet //
            setTimeout(function () {
                 printWindow.print();
            }, 200);
            return false;
        });

        $("body").on("click",".card", function(){
        var height = $(".article",this).height()+$(".recipearea",this).height();
        var padding = $(window).height()*.5;
        console.log(height);
        $(this).css({"height":height+padding});
        $(".article",this).not(".number").show();
        $(".read",this).hide();
        $(".recipearea",this).show();
        $(".keywords",this).hide();
      });

       }

      


 });



   
  }, "MC5XVXFqdUNNQUFDRUFvaG4w.Wu-_ve-_vXZYFmLvv71kY--_vTfvv71b77-977-977-977-9fu-_vTvvv71GRQY177-977-9aUoLFw");




Prismic.Api('https://nicholas-dutton.prismic.io/api', function (err, Api) {
    var masterAPI = Api.form("everything").ref(Api.master());

		masterAPI.query(Prismic.Predicates.at("document.type", "about"))
		    .submit(function (err, response) {
		    	var results = response.results;
		    	var body = $("body");
		    	var aboutDiv = $(".aboutcontainer");
		    	var about;

		    	for (var i = 0; i < results.length; i++) {

		    		about = results[i].getStructuredText("about.about").asHtml();

		    	//var aboutDiv = $("<div class='aboutcontainer'></div>")
		    	var aboutP = $("<p></p>");

		    	aboutP.append(about);
		    	aboutDiv.append(aboutP);

		    }

		});


}, "MC5XVXFqdUNNQUFDRUFvaG4w.Wu-_ve-_vXZYFmLvv71kY--_vTfvv71b77-977-977-977-9fu-_vTvvv71GRQY177-977-9aUoLFw");





// functions for mostly static elements //








  if( /Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent) ) {

  $(window).scroll(function(){
      var height = $(window).height();

    if ($(window).scrollTop() > $(window).height()/4){
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(5px)","opacity":".1"});
    } else {
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(0px)","opacity":"1"});
    }

    if ($(window).scrollTop() > height -20){
      $(".topbar").css({"position":"fixed","top":"0vh"});
    } else {
      $(".topbar").css({"position":"absolute","top":"100vh"});
    }

  });


  $(".down,.navtitle").click(function(){
      var blog = $(window).height();
      $("html,body").animate({scrollTop: blog},700);
      $(".card").css("height","150px");
      $(".article,.recipearea").hide();
      $(".read").show();
  
  });



// not phone //

  } else {


    $(window).scroll(function(){
      var height = $(window).height();
      var top = $(window).height()/4;


    if ($(window).scrollTop() > $(window).height()/4){
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(5px)","filter":"blur(5px)","opacity":".1"});
    } else {
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(0px)","filter":"blur(0px)","opacity":"1"});
     
    }

    if ($(window).scrollTop() > height - 100){
      $(".topbar").css({"position":"fixed","top":"0vh"});
    } else {
      $(".topbar").css({"position":"absolute","top":"100vh"});
    }

  });

   // scroll to blog //

    $(".down,.navtitle").click(function(){
      var blog = $(window).height();

      //$(".only").html("<p>recipes only!</p>").removeClass("clicked");
      $("html,body").animate({scrollTop: blog},700);
      $(".recipecardarea").hide();
      $(".card").css({"height":"150px","width":"80vw"}).show();
      $(".article,.recipearea").hide();
      $(".read,.keywords").show();
  
    });

    $(".name").click(function(){
      var blog = $(window).height();

      //$(".only").html("<p>recipes only!</p>").removeClass("clicked");
      $("html,body").animate({scrollTop: 0},700);
      $(".recipecardarea").hide();
      $(".card").css({"height":"150px","width":"80vw"}).show();
      $(".article,.recipearea").hide();
      $(".read,.keywords").show();
  
    });


    // mark.js plug in //

    $(function() {
      var mark = function() {
        var keyword = $("input[name='search']").val();
        $(".card,.just").unmark({
          done: function() {
            $(".card,.just").mark(keyword);
          }
        });
      };
      $("input[name='search']").on("input", mark);
    });



    // disable form submit on "enter" key //

    $('#keyword').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
      if (keyCode === 13) { 
      e.preventDefault();
    return false;
    }
    });


  }


   











});
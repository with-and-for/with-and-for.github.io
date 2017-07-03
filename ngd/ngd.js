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

        image = results[i].getImage("article_and_recipe.image").asHtml();
        number = results[i].getNumber("article_and_recipe.number");
        date = results[i].getStructuredText("article_and_recipe.date").asText();
        title = results[i].getStructuredText("article_and_recipe.article_title").asText();
       	article = results[i].getStructuredText("article_and_recipe.article").asHtml();
       	recipletitle = results[i].getStructuredText("article_and_recipe.recipe_title").asText();
       	recipe = results[i].getStructuredText("article_and_recipe.recipe").asHtml();
        keyword = results[i].getStructuredText("article_and_recipe.keywords").asHtml();
     	
      var imagezone = $("<div class='imagezone'></div>")
     	var card = $("<div class='card'></div>");
      var dateP = $("<h1 class='date'></h1>");
     	var titleP = $("<h1 class='title'></h1>");
     	var articleP = $("<p class='article'></p>");
     	var numberP = $("<p class='number' style='display:none'></p>");
     	var recipearea = $("<div class='recipearea'></div>");
     	var recipecardarea = $("<div class='recipecardarea'></div>");
     	var recipetitleP = $("<h1 class='recipetitle'></h1>");
     	var recipeP = $("<p class='recipe'></p>");
      var print = $("<p class='print'>Print this recipe</p>");
      var Read = $("<p class='read'>Read more</p>");
      var keywords = $("<div class='keywords'></div>");
      var word = $("<p class='keyword'></p>");

      word.append(keyword);
      keywords.append(word);
      imagezone.append(image);
      dateP.append(date);
     	titleP.append(title);
     	articleP.append(article);
     	recipetitleP.append(recipletitle);
     	recipeP.append(recipe);
     	numberP.append(number);
     	recipearea.append(numberP,recipetitleP,recipeP,print);
      card.append(numberP,keywords,titleP,dateP,imagezone,articleP,recipearea,Read);
      body.append(card,recipecardarea);


      }


      var $divs = $("div.card");

      // sort projects by hidden number value, largest to smallest //

      var ordered = $divs.sort(function (a, b) {

        return $(b).find(".number").text() - $(a).find(".number").text();

      });

      // append reordered divs to project section //

      $(ordered).appendTo("body");

      $(".recipearea").clone().addClass("just").appendTo(".recipecardarea");

      $(".card > .article").hide();


      if( /Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent) ) {




        $("body").on("click",".card", function(){
        var height = $(".article",this).height()+$(".recipearea",this).height()+$(".imagezone > img",this).height()+800;
        console.log(height);
        $(this).css({"height":height,"width":"100vw"});
        $(".article",this).not(".number").show().css("positon","relative");
        $(".imagezone > img",this).css({"positon":"relative","left":"1vw","width":"96vw","height":"auto","top":"6vh","display":"inline"}).show();
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
        var height = $(".article",this).height()+$(".recipearea",this).height()+400;
        console.log(height);
        $(this).css({"height":height,"width":"80vw"});
        $(".article",this).not(".number").show();
        $(".imagezone > img",this).css({"right":"0vw","width":"30%","height":"auto","top":"22vh"}).show();
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
      var top = $(window).height()/4;


    if ($(window).scrollTop() > $(window).height()/4){
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(5px)","opacity":".1"});

    } else {
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(0px)","opacity":"1"});

    }

    if ($(window).scrollTop() > height - top){
      $(".down").css({"position":"fixed","top":"-10vh","z-index":"999","left":"30vw","font-size":"14"});
      $(".search").css({"position":"fixed","top":"10vh"});
      $(".only").css({"position":"fixed","top":"16vh"});
    } else {
      $(".down").css({"position":"absolute","left":"28vw","top":"80vh","font-size":"20"});
      $(".search").css({"position":"absolute","top":"110vh"});
      $(".only").css({"position":"absolute","top":"118vh"});
    }

  });


  
    ///

    $(".down").click(function(){
      var blog = $(window).height();
      var per = $(window).height()*.0009;

      $("html,body").animate({scrollTop: blog-per},700);
      $(".card").css("height","150px");
      $(".imagezone > img").hide();
      $(".article,.recipearea").hide();
      $(".read").show();
  
    });






// not phone //






  } else {







    $(window).scroll(function(){
      var height = $(window).height();
      var top = $(window).height()/4;


    if ($(window).scrollTop() > $(window).height()/4){
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(5px)","filter":"blur(5px)","opacity":"1"});
      


    } else {
      $(".lime,.spinach,.strawberry,.banana,.blueberry").css({"-webkit-filter":"blur(0px)","filter":"blur(0px)","opacity":"1"});
     
    }

    if ($(window).scrollTop() > height - top){
      $(".down").css({"position":"fixed","top":"3vh","z-index":"999","left":".5vw","font-size":"14"});
      $(".search").css({"position":"fixed","top":"10vh"});
      $(".only").css({"position":"fixed","top":"16vh"});
    } else {
      $(".down").css({"position":"absolute","left":"4.25vw","top":"80vh","font-size":"38"});
      $(".search").css({"position":"absolute","top":"110vh"});
      $(".only").css({"position":"absolute","top":"118vh"});
    }

  });

	

	$(".only").click(function(){
		var blog = $(window).height();
    var per = $(window).height()/20;
    var par = $(window).height()*.0009;
		$("html,body").animate({scrollTop: blog-per},200);
		$(".recipecardarea").toggle();
		$(".card").toggle();
		$(".only").toggleClass("clicked");
		if ($(".only").text() == "recipes only!") {
            $(".only").html("<p>back to blog</p>");

      
        }
        else {
            $(".only").html("<p>recipes only!</p>");
            $(".down").css("pointer-events","all");
            $("html,body").animate({scrollTop: blog-par},200);
            $(".card").css("height","150px");
            $(".article").hide();
            $(".read").show();
            $(".imagezone > img").css({"right":"6vw","width":"auto","height":"80%","top":"10%"});
        }
	});

   // scroll to blog //

    $(".down").click(function(){
      var blog = $(window).height();
      var per = $(window).height()*.0009;

      //$(".only").html("<p>recipes only!</p>").removeClass("clicked");
      $("html,body").animate({scrollTop: blog-per},700);
      $(".recipecardarea").hide();
      $(".card").css({"height":"150px","width":"80vw"}).show();
      $(".article,.recipearea,.imagezone > img").hide();
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
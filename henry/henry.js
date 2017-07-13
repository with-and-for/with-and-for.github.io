

$(document).ready(function(){

	 

Prismic.Api('https://henry-mcclellan.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project_post"))   
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var title;
      var description;
      var thumbnail;
      var postColor;
      var video;
      var vTitle;
      var clicked = 0;
      var order;

      var nav = $("<div class='nav'></div>");

      nav.append(
        "<div id='name'><p>Henry McClellan</p></div>",
        "<div id='about'><p>About</p></div>",
        "<div id='blog'><p>Blog</p></div>",
        "<div id='store'><p>Store</p></div>",
        "<div id='giflib'><p>Gif Library</p></div>"

        );

      function xHide(){

        $(".xHover, .x").hide();
        $(".x").mouseenter(function(){
            
            $(".x").hide();
            $(".xHover").hide();
          });
          
        $(" .xHover").mouseleave(function(){

            $(".xHover").hide();
            $(".x").hide();
          });
      }

      function xActive(){

          $(".x").show();
          $(".x").mouseenter(function(){

            $(".x").hide();
            $(".xHover").show();

          });
          
          $(" .xHover").mouseleave(function(){

            $(".xHover").hide();
            $(".x").show();
          
          });
      }

      function allPosts(){

         $(".post").removeClass("expand");
         $(".post").show();
         $('.imageArea', this).hide();
         $('.imagestyle').hide();
         $('.thumbnailStyle').show();
         $(".name").show();
         $(".title").removeClass("titleExpand");

         xHide();

         postHoverState();
         clicked = 0;
      }


      function singlePost(){
          clicked = 1;
          
          var index = $(this).index(); 
          console.log(index);
 
          xActive();
          $(".post").not(this).hide();
          $(this).addClass("expand");
          $('.imageArea', this).show();
          $('.imagestyle').show();
          $('.thumbnailStyle', this).hide();
          $(this).css("transform", "scale(1,1)");
          $(".name").hide();
          $(".title").addClass("titleExpand");   
      }

      
      var postArea = $("<div class='postArea'></div>"); 

      for (var i = 0; i < results.length; i++) {

      order = results[i].getNumber("project_post.post-order");
      title = results[i].getStructuredText("project_post.title").asText();
      thumbnail = results[i].getImage("project_post.thumbnail").asHtml();
      description = results[i].getStructuredText("project_post.description").asText();
      postColor = results[i].getColor("project_post.post-color");
      allImages = results[i].getGroup("project_post.project-images").asHtml();

      var allColors = [];
      allColors.push(postColor);
      console.log(allColors);

     	 var titleArea = $("<div class='titleArea'></div>");
       var titleP = $("<p class='title'></p>");
       var imageArea = $("<div class= 'imageArea'></div>");
       var post = $("<div class ='post'></div>");


       // var descriptionArea = $("<div class = 'descriptionArea'></div>");
       // var descriptionP = $("<p class='description'></p>");
      var left = Math.floor(Math.random() * 20) + 10;
      var ranWidth = Math.floor(Math.random() * 40) + 30;

      var $posts = $(".post");
      var ordered = $posts.sort(function(a, b){

        return parseInt(a.id) >parseInt(b.id);
        
      });

      $(ordered).appendTo(postArea);

      $(nav).appendTo(body);
      post.append(thumbnail)
      imageArea.append(allImages);
      post.append(imageArea);
      titleP.append(title); 
      titleArea.append(titleP);
      post.append(titleArea);
      $(post).attr('id', order).css({"left":left + "%", "width":ranWidth + "%", "background-color": postColor}).appendTo(postArea);
      body.append(postArea);
      // descriptionArea.append(descriptionP);
      // descriptionP.append(description);



      $(".post > img").addClass("thumbnailStyle");
      $("section[data-field='project-image'] > img").addClass("imageStyle");


      }



          $("body").on("click", ".post", singlePost);
             $(".xHover, .x").click(allPosts);

   function postHoverState(){
 
 $(".post").mouseenter(function(){
              if (clicked == 0){      
                $(this).css("transform", "scale(1.1,1)");
             }else{
               $(this).css("transform", "scale(1,1)");
               clicked = 1;
             }   
               });

          $(".post").mouseleave(function(){

                $(this).css("transform", "scale(1,1)");

              });
   }      

    postHoverState();     

              

    });

    
  }, "MC5XVXY2cXlRQUFBQTYzS3g0.ECsoYUDvv71CGO-_vRLvv73vv709We-_vUF3R--_vTbvv73vv705UO-_vRckD23vv73vv71g");






}); // end of document ready //
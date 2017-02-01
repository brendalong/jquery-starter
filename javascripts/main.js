console.log("hello jqueryStarter Script");    
$(document).ready(function () {
	/* all the jquery code goes here */

	/////////////////////////Select by id. /////////////////////////////

	// jQuery *always* returns an array of
  	// elements, EVEN when there's only ONE
  	// 
    //vanilla
  	// var topArticle = document.getElementById("top-article");
  	//jquery
    // var article = $("#top-article");
  	
    // console.log(article);

	/////////////////////// Select by tag name.///////////////////////
  	//plain

 	// var allButtons = document.getElementsByTagName("button");
 	// console.log("allButtons by TagName", allButtons);
 	//rememeber this returns an array
  	// var button = $("button");
  	// console.log("button", button, button.html());

	/////////////////////// Select by class ///////////////////////
  	// 
  	// var mainArticles = document.getElementsByClassName("article--main");
  	// console.log("mainArticles", mainArticles);

  	// $(".article--main").each(function(arrayIndex, currentElement) {
  	//   console.log(arrayIndex,$(currentElement).html());
  	// });

  	/////////////////////// Select by attribute /////////////////////// 
  	// var umbreallaElement = $("h1[umbrella='open']");
  	// console.log("umbrella text: ", umbreallaElement.html());

  	// Select children
  	// console.log("all children: ", $(".container").children()); // There are two children

	// Select specific children
  	// console.log("the h1: ", $(".container").children("h1"));
  	// console.log("the section: ", $(".container").children("section"));

  	// Select specific child index (useful for ul/ol)
  	// Example of chaining selectors
  	// console.log("third li: ", $("#letters").children(".letter").eq(2).html());


  	// Finding parent DOM elements
  	// console.log($(".album").parents(".song-container").attr("index"));


  	/////////////////////// Finding an element /////////////////////// 
  	// var album = $(".container").find(".album");
  	// console.log("album", album.html());


  	// Selecting siblings
  	// var aSibling = $(".a").next();
  	// console.log("aSibling: ", $(".a"), aSibling.html());

  	// Selecting all siblings
  	// var aSiblings = $(".a").nextAll();
  	// aSiblings.each(function(index, el) {
  	//   console.log("sibling text: ", $(el).html());
  	// });




	function functionIWantjQueryToExecute(songList) {
    	console.log(songList.songs);

	    for (var i = 0; i < songList.songs.length; i++) {
	      var currentSong = songList.songs[i];
	      $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
	      $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
	      $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
	    }
  	}

    
//as a test, what happens if really big file, who comes first?
//test after others
  // $.ajax({
  // url:"JEOPARDY_QUESTIONS1.json"
  // }).done(functionIWantjQueryToExecute);

// http://www.w3schools.com/jquery/ajax_ajax.asp
// look at Try It examples at the bottom of page

	// $.ajax({
	// url:"javascripts/songs.json"
	// }).done(functionIWantjQueryToExecute);

	// $.ajax({
	// url:"./javascripts/more-songs.json"
	// }).done(functionIWantjQueryToExecute);

//also test loading big data
  // $("#loadBigData").click(function(){
  //     $.ajax({url: "JEOPARDY_QUESTIONS1.json", 
  //       success: function(result){
  //         console.log("got the data", result);
  //       }
  //     });
  //   });

});



/*$('.search-button').click(function () {
alert("Button clicked!");
})*/


var displayWikipedia = () => {
	var $linksElement = $('#links');
	var searchString = $('#searchString').val();
	var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + " &format=json&callback=wikiCallback";

// console.log(searchString);

$.ajax({
	url: wikipediaUrl,
	dataType: "jsonp",
	jsonp: "callback",
	success: function(res) {
		// do something
		var linkLists = res[1];
		console.log(linkLists);
		linkLists.forEach(function(item){
			var url = 'https://en.wikipedia.org/wiki/' + item;
			$linksElement.append('<li><a href="'+url+ '">' + item+ '<a/></li>');
			//console.log(item);
			return url;
		})

	}


});
return false;

}

$('#form').submit(displayWikipedia);
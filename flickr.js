//catch the html form submit action
    //disable the default action to the submit click
    //instead run custom action

//jQuery-AJAX request
    //make us the URL, data-set for the AJAX request
    //make the callback function for the AJAX request
        //start making the HTML element using the shit you got from the API
        //and stuff to it
        //close the HTML element properly
        //inject HTML into the DOM

$("#searchForm").submit(function(evt){
    evt.preventDefault()
    
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    var searchTerm = $("#searchInput").val()
    var flickrOptions = {
        tags: searchTerm,
        format: "json"
    }

    function displayPhotos(data){
        var photosHTML = "<ul>"
        $.each(data.items, function(i,photo){
            photosHTML += '<li class="image-container">'
            photosHTML += '<a href="' + photo.link + '">'
            photosHTML += '<img class="image" src="' + photo.media.m + '" alt="' + photo.title + '"></a></li >'
        })
        photosHTML += '</ul>'
        $("#jquery-images").html(photosHTML)
    }

    $.getJSON(url, flickrOptions, displayPhotos)

});
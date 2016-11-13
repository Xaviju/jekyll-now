(function() {
    'use strict';

    //var stats = $.get("http://localhost:8000/api/v1/stats/system");
    var _fetchPosts = function() {
      const url = "https://medium.com/feed/@xaviju";
      feednami.load(url).then(feed => {
        console.log(feed.entries);
          var source = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var html = template(feed.entries);
          $("#main").append(html);
        })
    };

    var init = function() {

       _fetchPosts();

     };

    init();

}());

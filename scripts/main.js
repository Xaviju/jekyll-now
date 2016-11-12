"use strict";

(function () {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://medium.com/@xaviju/latest', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;
      console.log(resp);
    } else {
      alert('We reached our target server, but it returned an error');
    }
  };

  request.onerror = function() {
    alert('You might not be connected to the internet');
  };

  request.send();

}(this));

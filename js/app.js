$(document).ready(function(){
	
    var fetchItems = function() {
      var items = [];
      // todo делаем запрос на сервер и возвращаем поле items
      return items;
    }

    var fillTable = function(items) {
      // todo исходя из items строим табличку, то есть клонируем (или создаем элемент) и добавляем его куда надо.
    }

    // При открытии страницы делаем запрос и строим табличку
    fillTable(fetchItems);



    // OLD...

    $("#step1").click(function() {
      alert('css селектор');
    });

	$("#step2").click(function(){
	 $("#copymeElement").clone()


         .appendTo($("#copymeElement"));
        $("#copymeElement").removeAttr("id");
      //  alert('дублирование');

    });

    $("#step3").click(function() {
        $.ajax({
            url: "http://account.bkfonbet.com/MobileServices/ping",
// the name of the callback parameter, as specified by the YQL service
            jsonp: "callback",
// tell jQuery we're expecting JSONP
            dataType: "jsonp",
// tell YQL what we want and that we want JSON

// work with the response
            success: function( response ) {
                alert( response ); // server response
            }
        });

      //alert('сетевой запрос');
    });

});
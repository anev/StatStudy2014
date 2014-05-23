$(document).ready(function(){
<<<<<<< HEAD
	//alert('Приложение запущено!');
=======
	
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
>>>>>>> 8dec88f76016c77e7c32cf502e9bdb900fe2a136

    $("#step1").click(function() {
       var f1 = $("li").length;
        alert(f1);
    //alert('css селектор');
    });

<<<<<<< HEAD
	$("#step2").click(function() {
        $(".copymeElement")
            .appendTo(".col-md-4 column");
    //alert('дублирование');
=======
	$("#step2").click(function(){
	 $("#copymeElement").clone()


         .appendTo($("#copymeElement"));
        $("#copymeElement").removeAttr("id");
      //  alert('дублирование');

>>>>>>> 8dec88f76016c77e7c32cf502e9bdb900fe2a136
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
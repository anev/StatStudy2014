$(document).ready(function(){

    var fetchAndDraw = function() {
        $("#items").empty();
        $("#filteraction").append('<option></option>')
        $("#filteruser").append('<option></option>')
        var user = $("#filteruser").val();
        var action = $("#filteraction").val();
        $("#filteruser").empty();
        $("#filteraction").empty();
        $.getJSON('items.json', function (data) {

            var datetime = $("#filterdatetime").val();
            $("#filteraction").append('<option></option>')

            $("#filteruser").append('<option></option>')
            for (var i = 0; i < data.items.length; i++){



                if ($('#filteraction>:contains("'+data.items[i].action+'")').size()      === 0) {
                    $("#filteraction").append('<option>'+ data.items[i].action +'</option>' )
                }


                if  ($('#filteruser>:contains("'+data.items[i].user+'")').size()      === 0) {
                    $("#filteruser").append('<option>'+ data.items[i].user +'</option>' )
                }

            }
             $("#filteruser").val(user);
            $("#filteraction").val(action);
            for (var i = 0; i < data.items.length; i++) {


               if ((user.length ===0 || user === data.items[i].user) &&
                    (datetime.length ===0|| datetime === data.items[i].datetime) &&
                    (action.length ===0|| action === data.items[i].action) )

                {
                    $('#items').append('<tr> <td>' + data.items[i].user + '</td> <td>' + data.items[i].datetime +
                        '</td> <td>' + data.items[i].action + '</td> <tr>');
                }
                else {console.log(data.items[i])}
            }

        });
    }

    fetchAndDraw();
    $("#filtersubmit").click(fetchAndDraw);

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
      //alert('css селектор');
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

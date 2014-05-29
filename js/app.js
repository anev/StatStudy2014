$(document).ready(function(){

    var fetchAndDraw = function() {
        $("#items").empty();
        $.getJSON('items.json', function (data) {
            var user = $("#filteruser").val();
            var datetime = $("#filterdatetime").val();
            var action = $("#filteraction").val();
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

    // При открытии страницы делаем запрос и строим табличку
    fillTable(fetchItems);

});

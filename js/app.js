$(document).ready(function(){
    var isTimeOkey = function(mcount , itemtime){
        var twentyMinutesBefore = new Date();
        twentyMinutesBefore.setMinutes(twentyMinutesBefore.getMinutes()- mcount);
        var itemDate = (new Date(itemtime))
        console.log(twentyMinutesBefore)
        console.log(itemDate)
        return twentyMinutesBefore < itemDate
    }

    var fetchAndDraw = function() {
        $("#items").empty();//очистка таблицы
        $("#filteraction").append('<option></option>')//создание пустого поля
        $("#filteruser").append('<option></option>')//создание пустого поля
        $("#filterdatetime").append('<option></option>')
        var user = $("#filteruser").val();//задаем переменную, которая отвечает за  user .
        var action = $("#filteraction").val();//задаем переменную, которая отвечает за  action.
        $("#filteruser").empty();//очистка user
        $("#filteraction").empty();//очистка action
        $.getJSON('items.json', function (data) {

            var datetime = $("#filterdatetime").val();
            $("#filteraction").append('<option></option>')//создание пустого поля в action

            $("#filteruser").append('<option></option>')//создание пустого поля в user
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
console.log(datetime);

            for (var i = 0; i < data.items.length; i++) {


               if ((user.length ===0 || user === data.items[i].user) &&
                    isTimeOkey(datetime, data.items[i].datetime) &&
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
    $("#filtersubmit").click(fetchAndDraw);//нажатие на кнопку.

    // При открытии страницы делаем запрос и строим табличку
    fillTable(fetchItems);


});

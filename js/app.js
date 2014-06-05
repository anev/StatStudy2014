$(document).ready(function () {
    var itemOnPage = 2
    var isTimeOkey = function (mcount, itemtime) {
        if (mcount === "") return true
        var twentyMinutesBefore = new Date();
        twentyMinutesBefore.setMinutes(twentyMinutesBefore.getMinutes() - mcount);
        var itemDate = (new Date(itemtime))
        console.log(twentyMinutesBefore)
        console.log(itemDate)
        return twentyMinutesBefore < itemDate
    }

    var fetchAndDraw = function (page) {
        $("#items").empty();//очистка таблицы
        $("#filteraction").append('<option></option>')//создание пустого поля
        $("#filteruser").append('<option></option>')//создание пустого поля

        var user = $("#filteruser").val();//задаем переменную, которая отвечает за  user .
        var datetime = $("#filterdatetime").val();
        var action = $("#filteraction").val();//задаем переменную, которая отвечает за  action.
         console.log(page)
        $("#filteruser").empty();//очистка user
        $("#filteraction").empty();//очистка action
        $('#page').empty();
        $.getJSON('items.json', function (data) {
            var pagecount = data.items.length / itemOnPage;
            pagecount = pagecount.toFixed();

            for (var jj = 0; jj < pagecount; jj++) {
                //var ifForHuman = i + 1
                console.log("ii"+jj);

                var a = $('<a href="#" id='+jj+'>' + jj + '<span class="sr-only">(current)</span></a>');
                var li = $('<li></li>');
                li.append(a)        ;

                a.click(jj,    function(theValue){
                    fetchAndDraw(theValue.data);
                })
                if (jj === page) {
                    li.addClass("active");
                }
                $('#page').append(li);

            }


            $("#filteraction").append('<option></option>')//создание пустого поля в action
            $("#filteruser").append('<option></option>')//создание пустого поля в user

            for (var i = 0; i < data.items.length; i++) {


                if ($('#filteraction>:contains("' + data.items[i].action + '")').size() === 0) {
                    $("#filteraction").append('<option>' + data.items[i].action + '</option>')
                }


                if ($('#filteruser>:contains("' + data.items[i].user + '")').size() === 0) {
                    $("#filteruser").append('<option>' + data.items[i].user + '</option>')
                }

            }
            $("#filteruser").val(user);
            $("#filteraction").val(action);


            for (var i = (page * itemOnPage); i < itemOnPage * page + itemOnPage; i++) {


                if ((user.length === 0 || user === data.items[i].user) &&
                    isTimeOkey(datetime, data.items[i].datetime) &&
                    (action.length === 0 || action === data.items[i].action)) {
                    $('#items').append('<tr> <td>' + data.items[i].user + '</td> <td>' + data.items[i].datetime +
                        '</td> <td>' + data.items[i].action + '</td> <tr>');
                }
                else {
                    console.log(data.items[i])
                }
            }

        });
    }

    fetchAndDraw(0);
    $("#filtersubmit").click(fetchAndDraw);//нажатие на кнопку.

    // При открытии страницы делаем запрос и строим табличку
    fillTable(fetchItems);


});

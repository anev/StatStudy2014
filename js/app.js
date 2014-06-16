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
    var init = function () {
        $("#items").empty();//очистка таблицы
        $("#filteruser").empty();//очистка user
        $("#filteraction").empty();//очистка action
        $('#page').empty();
        $("#filteraction").append('<option></option>')//создание пустого поля
        $("#filteruser").append('<option></option>')//создание пустого поля 
    }


    var fetchAndDraw = function (page) {

        var user = $("#filteruser").val();//задаем переменную, которая отвечает за  user .
        var datetime = $("#filterdatetime").val();
        var action = $("#filteraction").val();//задаем переменную, которая отвечает за  action

        var addPager = function (data) {

            var pagecount = (data.length / itemOnPage).toFixed();

            for (var jj = 0; jj < pagecount; jj++) {
                var a = $('<a href="#" id=' + jj + '>' + (jj + 1) + '<span class="sr-only">(current)</span></a>');
                var li = $('<li></li>');
                li.append(a);
                a.click(jj, function (theValue) {
                    fetchAndDraw(theValue.data);
                });
                if (jj === page) {

                    li.addClass("active");

                }
                $('#page').append(li);
            }
        };
        var fillcontrols = function (data) {

            for (var i = 0; i < data.items.length; i++) {


                if ($('#filteraction>:contains("' + data.items[i].action + '")').size() === 0) {
                    $("#filteraction").append('<option>' + data.items[i].action + '</option>')
                }


                if ($('#filteruser>:contains("' + data.items[i].user + '")').size() === 0) {
                    $("#filteruser").append('<option>' + data.items[i].user + '</option>')
                }
            }
        }
        var filterdata = function(data, user, action) {
            var rizalt = [];

            for (var i = 0; i < data.items.length; i++) {

                if ((user == null || user.length === 0 || user === data.items[i].user) &&
                    isTimeOkey(datetime, data.items[i].datetime) &&
                    (action == null || action.length === 0 || action === data.items[i].action)) {
                    rizalt.push(data.items[i])}
            }
            return rizalt;
        }

        var filltables = function(data, user, action){
          var filtered = filterdata(data, user, action);
            console.log(filtered)
            addPager(filtered);
            for (var i = (page * itemOnPage); i < itemOnPage * page + itemOnPage; i++) {


                if ((user == null || user.length === 0 || user === filtered[i].user) &&
                    isTimeOkey(datetime, filtered[i].datetime) &&
                    (action == null || action.length === 0 || action === filtered[i].action)) {
                    $('#items').append('<tr> <td>' + filtered[i].user + '</td> <td>' + filtered[i].datetime +
                        '</td> <td>' + filtered[i].action + '</td> <tr>');
                } else {

                }
            }
        }
        $.getJSON('items.json', function (data) {
            init();

            fillcontrols(data);
            $("#filteruser").val(user);
            $("#filteraction").val(action);
           filltables (data, user, action);

        });
    }

    fetchAndDraw(0);
    $("#filtersubmit").click(function (){
        fetchAndDraw(0)
    });//нажатие на кнопку.
    // При открытии страницы делаем запрос и строим табличку
    //fillTable(fetchItems);
});

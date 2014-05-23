$(document).ready(function(){
	//alert('Приложение запущено!');

    $("#step1").click(function() {
       var f1 = $("li").length;
        alert(f1);
    //alert('css селектор');
    });

	$("#step2").click(function() {
        $(".copymeElement")
            .appendTo(".col-md-4 column");
    //alert('дублирование');
    });

    $("#step3").click(function() {
      alert('сетевой запрос');
    });

});
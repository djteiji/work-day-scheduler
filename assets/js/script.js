


$("#currentDay").text(moment().format('dddd, MMMM D, YYYY'));

var saveButton = $(".saveBtn")


var colorChange = function() {

    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));
        // console.log(hour);
        
        if (currentHour < hour) {
            $(this).addClass("future");
        }
        else if (currentHour === hour) {
            $(this).addClass("present");

        } else if (currentHour > hour) {
            $(this).addClass("past");
        }
    })
};



$(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".col-10").val();

    localStorage.setItem(time, plan)
});


function loadTasks () {
    
    $(".hour").each(function() {
        var thisHour = $(this).text();
        var thisTask = localStorage.getItem(thisHour);

        if(thisTask !== null) {
            $(this).siblings(".col-10").val(thisTask);
        }
    });
}
colorChange();
loadTasks();
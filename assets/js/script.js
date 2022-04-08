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

var storeEvent = function() {
    
}

colorChange();
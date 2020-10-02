$(document).ready(function (){
    var planner = $(".container");

    for (var i = 9; i < 18; i++) {
        var row = $("<div>");
        row.addClass("row time-block");
        var hour = $("<div>");
        hour.addClass("hour");
        hour.width("5%");
        var event = $("<textarea>");
        event.addClass("textarea");
        event.width("80%");
        var saveBtn = $("<button>");
        saveBtn.text("lock");
        saveBtn.addClass("saveBtn");
        saveBtn.width("5%");
        if (i < 12) {
            hour.text(i + " AM");
        } else if (i === 12) {
            hour.text(i + " PM");
        } else {
            hour.text((i-12) + " PM");
        }
        event.attr("value", i);
        saveBtn.attr("value", i);
        row.append(hour);
        row.append(event);
        row.append(saveBtn);
        planner.append(row);
    } 
})


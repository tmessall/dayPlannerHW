$(document).ready(function (){
    var planner = $(".container");

    // Keeps track of every event
    var events = [];

    // Loops through, creates each row
    for (var i = 9; i < 18; i++) {
        var row = $("<div>");
        row.addClass("row time-block");
        var hour = $("<div>");
        hour.addClass("hour");
        hour.width("5%");
        var event = $("<textarea>");
        // Needs to include check for if past, present, future, add class
        event.addClass("textarea");
        event.width("80%");
        var saveBtn = $("<button>");
        saveBtn.text("lock");
        saveBtn.addClass("saveBtn");
        saveBtn.width("5%");
        // Adds a time to each hour
        if (i < 12) {
            hour.text(i + " AM");
        } else if (i === 12) {
            hour.text(i + " PM");
        } else {
            hour.text((i-12) + " PM");
        }
        // Values are saved so that each event can be saved and accessed
        event.attr("time", i);
        events.push(event);
        saveBtn.attr("time", i);
        // Makes the row
        row.append(hour);
        row.append(event);
        row.append(saveBtn);
        planner.append(row);
    }
    
    $(".saveBtn").click(function() {
        var time = $(this).attr("time");
        for (var i = 0; i < events.length; i++) {
            if (events[i].attr("time") === time) {
                console.log(events[i].val());
            }
        }
    })
})


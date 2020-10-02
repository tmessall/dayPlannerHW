$(document).ready(function (){
    var planner = $(".container");

    // Keeps track of every event
    var events = [];

    // Loops through, creates each row
    for (var i = 0; i < 9; i++) {
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
        saveBtn.text("save");
        saveBtn.addClass("saveBtn");
        saveBtn.width("5%");
        // Adds a time to each hour
        if (i < 3) {
            hour.text((i + 9) + " AM");
        } else if (i === 3) {
            hour.text((i + 9) + " PM");
        } else {
            hour.text((i-3) + " PM");
        }
        // Values are saved so that each event can be saved and accessed
        event.attr("time", i);
        events[i] = event;
        saveBtn.attr("time", i);
        // Makes the row
        row.append(hour);
        row.append(event);
        row.append(saveBtn);
        planner.append(row);
    }

    // Sets the event for a time to the locally saved event
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var localEvent = localStorage.getItem(j);
            if (localEvent !== null) {
                if (i === j) {
                    events[i].val(localEvent);
                    console.log(i);
                    console.log(j);
                    console.log(typeof localEvent); 
                }
                
            }
        }
    }
    
    // Saves event to local storage
    $(".saveBtn").click(function() {
        var time = $(this).attr("time");
        for (var i = 0; i < events.length; i++) {
            if (events[i].attr("time") === time) {
                console.log("hey i work")
                localStorage.setItem(i, events[i].val());
            }
        }
    })
})


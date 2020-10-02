$(document).ready(function (){
    var planner = $(".container");
    var currentDay = $("#currentDay");

    // Keeps track of every event
    var plannedEvents = [];

    // Sets current time into the variable
    var curTime = dayjs();
    // Displays the time to the top of the page
    var show = curTime.format("MMMM D YYYY");
    currentDay.append(show);

    // Loops through, creates each row
    for (var i = 0; i < 9; i++) {
        var row = $("<div>");
        row.addClass("row time-block");
        var hour = $("<div>");
        hour.addClass("hour");
        hour.width("5%");
        var plannedEvent = $("<textarea>");
        // Needs to include check for if past, present, future, add class
        plannedEvent.addClass("textarea");
        plannedEvent.width("80%");
        var saveBtn = $("<button>");
        saveBtn.text("save");
        saveBtn.addClass("saveBtn");
        saveBtn.width("5%");
        // Adds a time to show to each hour
        if (i < 3) {
            hour.text((i + 9) + " AM");
        } else if (i === 3) {
            hour.text((i + 9) + " PM");
        } else {
            hour.text((i-3) + " PM");
        }
        // Sets a time for the block
        var manipulated = curTime.startOf("day").add((i + 9), 'hour');
        console.log(manipulated);
        // Sets color
        if (manipulated.isAfter(curTime)) {
            plannedEvent.addClass("future")
        } else if (manipulated.isSame(curTime.startOf("hour"))) {
            plannedEvent.addClass("present");
        } else {
            plannedEvent.addClass("past");
        }
        // Values are saved so that each event can be saved and accessed
        plannedEvent.attr("time", i);
        plannedEvents[i] = plannedEvent;
        saveBtn.attr("time", i);
        // Makes the row
        row.append(hour);
        row.append(plannedEvent);
        row.append(saveBtn);
        planner.append(row);
    }

    // Sets the event for a time to the locally saved event
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var localEvent = localStorage.getItem(j);
            if (localEvent !== null) {
                if (i === j) {
                    plannedEvents[i].val(localEvent);
                }
                
            }
        }
    }
    
    // Saves event to local storage
    $(".saveBtn").click(function() {
        var time = $(this).attr("time");
        for (var i = 0; i < plannedEvents.length; i++) {
            if (plannedEvents[i].attr("time") === time) {
                localStorage.setItem(i, plannedEvents[i].val());
            }
        }
    })
})


$(document).ready(function (){
    var planner = $(".container");

    for (var i = 9; i < 18; i++) {
        var row = $("<div>");
        row.addClass("row time-block");
        var hour = $("<div>");
        hour.addClass("hour");
        var timeBlock = $("<div>");
        timeBlock.addClass("future textarea");
        timeBlock.width("80%");
        var saveBtn = $("<button>");
        saveBtn.text("lock");
        saveBtn.addClass("saveBtn");
        hour.text("AHHHH");
        row.append(hour);
        row.append(timeBlock);
        row.append(saveBtn);
        planner.append(row);
    } 
})


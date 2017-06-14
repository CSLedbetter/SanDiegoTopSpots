$(document).ready(function () {
    $.getJSON('https://raw.githubusercontent.com/OriginCodeAcademy/Cohort12/master/Practical/Week%202/02-SanDiegoTopSpots/topspots.json', function (spots) {
        $.each(spots, function (i, data) {
            var name = data.name;
            var desc = data.description;
            var link = data.location
            console.log(link);
            $('table').append('<tr><td>' + name + '</td>')
            $('table tr:last').append('<td>' + desc + '</td>')
            $('table tr:last').append('<td>' +'<button type="button" class="btn btn-primary"'+ '<a href=' + 'https://www.google.com/maps?q=' + link + '>' + 'Open in Google Maps' + "</a>" + '</td> </tr>');
        });
    });
});
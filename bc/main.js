var $window = $(window);

var iterations = 10000,
    boxes = [
        ['G', 'G'],
        ['S', 'G'],
        ['S', 'S']
    ],
    box, drawer, i = 0,
    results, gFound = 0;



$("#run").click(function() {
    runSimulation();
});


function runSimulation() {

    var counter = 500;
    var myFunction = function() {
        clearInterval(interval);


        drawerGuess = rand3();
        coinGuess = rand2();

        if (boxes[drawerGuess][coinGuess] === 'G') {
            i++;
            if (boxes[drawerGuess][1 - coinGuess] == "G") {
                gFound++;
                append(2)
            } else {
                append(3)
            }
        } else {
            append(1)
        }

        $("#count").text(gFound)
        $("#total").text(i)
        $("#percentage").text(truncator((gFound / i) * 100, 0))

        window.scrollTo(0, document.body.scrollHeight);


        counter -= 10;

        interval = setInterval(myFunction, counter);
    }

    var interval = setInterval(myFunction, counter);

}


results = (gFound / iterations) * 100;

console.log(iterations + ' iterations:');
console.log(results + '% chance second coin is gold');

function truncator(numToTruncate, intDecimalPlaces) {
    var numPower = Math.pow(10, intDecimalPlaces); // "numPowerConverter" might be better
    return ~~(numToTruncate * numPower) / numPower;
}

// Returns either GG or SG box
function randomBox() {
    return boxes[rand3()];
}

// Returns either 0 or 1
function rand2() {
    return ~~(Math.random() * 2);
}

function rand3() {
    return ~~(Math.random() * 3);
}

function append(number) {
    if (number == 1) {
        var first = "Silver";
        var first_color = "";

        var second = "Skip";
        var second_color = "black";

        var color = "red";

    } else if (number == 2) {
        var first = "Gold";
        var first_color = "yellow";

        var second = "Gold";
        var second_color = "yellow";


        var color = "green";
    } else if (number == 3) {
        var first = "Gold";
        var first_color = "yellow";

        var second = "Silver";
        var second_color = "";

        var color = "red";
    }

    var htmlString = '<div class="card">\
                               <div class="image">\
                                   <img class="ui mini image" src="images/' + color + '.jpeg" />\
                               </div>\
                               <div class="content">\
                                   <small>1st:</small>\
                                   <a class="ui mini ' + first_color + ' label">' + first + '</a>\
                                   <br><br>\
                                   <small>2nd:</small>\
                                   <a class="ui mini ' + second_color + ' label">' + second + '</a>\
                               </div>\
                           </div>';

    $("#results").append(htmlString);

}

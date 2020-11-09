// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
//console.log(tbody);

console.log(tableData);

tableData.forEach(resultsUFO => {
    //console.log(resultsUFO);

    //use d3 to append one table row "tr" for each data results
    var row = tbody.append("tr");

    //use Object.entries to log each report value 
    Object.values(resultsUFO).forEach(value => {
        console.log(value);
        
        //use d3 to append 1 cell per report
        var cell = row.append("td");

        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);

    var filteredresults = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredresults);

    //d3.select("")
})

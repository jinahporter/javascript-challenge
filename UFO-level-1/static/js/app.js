// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function(){

    var inputElement = d3.select("#form-control");
    var inputValue = inputElement.property(tableData);

    console.log(inputElement);
    console.log(tableData);
})

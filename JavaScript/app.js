// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select('tbody');

// var tbody declares tbody as a variable 
// d3.select tells JS to look for <tbody> tags in the HTML
// Clear() will empty the console
// JavaScript Functions

// Simple JS console.log statement
function printHello() {
    console.log("Hello there!")
}

// Addition
function addition(a,b) {
    return a + b;
}

// Convert into an arrow function
addition = (a,b) => a + b;

// Functions can call other functions
function doubleAddition (c, d) {
    var total = addition(c,d) * 2;
    return total;
}

// Arrow function conversion
doubleAddition = (c,d) => (c,d) * 2;

let friends = ["Sarah", "Greg", "Cindy", 'Jeff'];

// Loops
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++){
        console.log(userList[i]);
    }
}

// var i = 0, starting the counter from the beginning
// i < userList.length, if i is still smaller than the total number of iterables in userList, move on to the next step.
// i++ will increase the iterable/index by 1

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
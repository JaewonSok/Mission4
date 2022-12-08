Mission 3: API 3

ms3.js file contains the function for calculating monthly premium and yearly premium
quote function takes in two inputs, a car_value and risk_rating

The inputs are then checked to make sure it is a number

ms3.spec.js contains the test cases where Jest can be used to run the tests for confirmation

index.js contains the main API where using 'localhost:3000/quote' along with POST method to send car_value and risk_rating as JSON format
Once posted, it will it response return an ID which is an unique ID value used to search and return the values inputted and calculated
This information is stored as a text file with ID being the file name

Running GET method to 'localhost:3000/quote/:id', replacing id with one of the exisiting ID will return the content of text file that has matching ID value

let thisStayNumber = 5; // typescript guesses that we want to make this stay a number
thisStayNumber = "Error 5"; // Errors
thisStayNumber = [" Error 5"]; // Errors
thisStayNumber = null; // Doesnt error

let thisDoesntStayNumber: any = 5; // Like said before, any basically ignores type checking
thisDoesntStayNumber = " no Error 5"; // Doesnt Erorr
thisDoesntStayNumber = [" no Error 5"]; // Doesnt Error
thisDoesntStayNumber = null; // Doesnt error

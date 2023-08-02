# Getting Started with Create React App
React Transactions App
This is a simple React application that allows users to manage their transactions. Users can add new transactions, search for transactions by description, sort transactions by category or description, and delete existing transactions. The data for transactions is provided through a local JSON file (db.json), and the application uses React's state management and useEffect hook to handle the data and update the user interface dynamically.

Features
Add Transaction: Users can add new transactions by entering the date, description, category, and amount in the form fields and clicking the "Add Transaction" button. The new transaction is then added to the list of existing transactions displayed on the page.

Search Transactions: Users can search for specific transactions by their description. As the user types in the search input field, the list of transactions is dynamically filtered to display only those transactions whose description matches the entered search term (case-insensitive).

Sort Transactions: Users can sort the list of transactions by either category or description. A dropdown menu allows the user to select the sorting option, and the transactions are re-arranged accordingly. If the user selects "None," the transactions are displayed in their original order.

Delete Transaction: Each transaction displayed in the table has a "Delete" button next to it. Clicking this button removes the corresponding transaction from the list of transactions.

Components
App Component (App.js)
This is the main component of the application that manages the state for transactions, newTransaction, searchTerm, and sortType. It fetches the initial data from db.json using the useEffect hook and stores it in the transactions state. The component renders the following:

A form to add new transactions with input fields for date, description, category, and amount.
An input field for searching transactions by description.
A dropdown menu for selecting the sorting type (category or description).
A table to display the list of transactions with columns for Date, Description, Category, Amount, and Action (Delete button).
The list of transactions is filtered based on the search term and sorted according to the selected sort type.
The component also includes functions for handling form submission (handleSubmit), deletion of transactions (handleDelete), and updating the sort type (handleSortChange). The transactions list is updated dynamically based on user actions.

Data
The transactions data is provided through a local JSON file (db.json) and is imported into the application using the transactionsData object. The initial state for transactions is set using the useEffect hook, which runs once when the component is mounted.

How to Run the Application
Clone this repository to your local machine.
Navigate to the project directory in the terminal.
Install the necessary dependencies using npm install.
Start the application using npm start.
The application should open in your default web browser at http://localhost:3000.
Dependencies
React (16.8+): The main JavaScript library used for building user interfaces.
react-dom: A package that serves as the entry point to the DOM and server renderers for React.
db.json: A JSON file containing the initial data for transactions.
Conclusion
The React Transactions App is a simple yet effective tool for managing transactions. It allows users to add new transactions, search for specific transactions, sort transactions by category or description, and delete transactions they no longer need. It serves as a basic starting point that can be extended and enhanced to build more sophisticated financial management applications.






## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/) to view in the browser



AUTHOR;MISRA ABDI 


Licence :MIT

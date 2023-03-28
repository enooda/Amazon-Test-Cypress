# Amazon-Test-Cypress
A test script written in Cypress.io to automate the process of searching for and purchasing a Nespresso coffee machine from Amazon.com.

**Prerequisites**

To run this test, you need to have Cypress.io installed on your computer. To install Cypress, follow the instructions on the official Cypress documentation.
<br></br>
**How to run the test**

Clone this repository to your local machine.
Open a terminal and navigate to the root directory of the cloned repository.
Run the command npm install to install the required dependencies.
Run the command npm run cypress:open to open the Cypress test runner.
Click on the test file amazon.test.cy.js to run the test.
<br></br>
**Description of the test**

The test script navigates to Amazon.com, searches for coffee machines, filters the search by brand Nespresso, rating 4+ stars, and price up to 320 eur. It then selects the 6th coffee machine available and adds it to the shopping cart. It logs into Amazon.com account and completes the checkout process with pre-filled address and payment details.

The test uses a pre-defined set of sign-in details that are stored in a constant signInDetails. If you want to use different sign-in details, modify the email and password values in this constant.

The test logs its progress to the Cypress test runner console.
<br></br>
**Note**

This repository does not contain any sensitive or personal information. Therefore, it is safe to upload to a public repository on GitHub.

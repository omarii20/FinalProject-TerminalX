# FinalProject-TerminalX

### Overview
Welcome to the TerminalX test project! In this project, we will be conducting comprehensive testing for the Terminal X website (https://www.terminalx.com/). Our focus will be on writing a detailed test plan, developing an automation infrastructure, and implementing various types of tests using Playwright.

### Getting Started
> [!note]  
> Before running the tests, make sure you have the necessary dependencies installed. Run the following command to install the required packages: `npm install`

### Test Plan
- Login and logout process
- Shopping cart functionalists 
- Searching for products and display
- Navigate to products pages

### Test Data
Prepare test data to cover a range of scenarios, including validate the functionality of critical user interactions like add/delete products to the cart, verify the accuracy of search results.

### Automation Infrastructure
chosen Playwright as our automation tool for this project due to its cross-browser capabilities and easy integration with various testing frameworks.

### How to Run Tests
To run the tests, use the following commands:
- For regular test execution: `npx playwright test --reporter=allure-playwright`
- For HTML debug output: `npx playwright test`

### Test Reports
Test reports will be generated using the Allure framework. After running the tests, you can find the report in the allure-report directory.

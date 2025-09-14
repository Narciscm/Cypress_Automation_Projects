Feature: End to End Testing of E-commerce Application

    Application: https://rahulshettyacademy.com/angularpractice/

    Scenario: Add items to the cart and validate the total price

        Given I open the E-commerce application

        When I add the following items to the cart:

        And Validate the total price in the cart

        Then Select the country and submit the order
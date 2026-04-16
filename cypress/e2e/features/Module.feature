Feature: Open Bikroy End to End

Background: Open Website With Valid url
    Given Open Browser and go to the login page
    When Enter login credentials and click on login button
    Then Check that it redirect to the home page
    
     
Scenario: Add new module 
    # Then Click on the settings dropdown 
    # # When Click on the system module setup option
    # Then Click on add new module button
    When Enter all required information and click on save button
    
Scenario: Update module
    Then Click on the settings dropdown 
    When Click on the module on navbar
    Then Click on the update icon
    Then Write new title and description
    Then Click on submit button



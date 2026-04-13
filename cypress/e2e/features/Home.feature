Feature: Open Bikroy End to End

Background: Open Website With Valid url
    Given Open Browser and Visit Website
    When Check that bikroy logo is present
    
     
Scenario: Verify that search option is available & search anything in search box
    Then Click on search box
    When Enter text to search option
    Then Click on search option
    When Back to the previous page


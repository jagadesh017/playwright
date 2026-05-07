Feature: verify the signup functionality of facebook

  Scenario: Verify the signup page of facebook
    Given User is on facebook homepage
    When User should click on signup button
    Then User should navigate to the signup page of facebook
    And User should enter the firstname and lastname
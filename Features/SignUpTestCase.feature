Feature: check the SignUp functionality

Scenario Outline: Test Negative Case SignUp Page
    Given Login to the application
    When  Enter Any Invalid Value in the following field:<Username> <Email> <Password>
   	Then  Validate the Username Error message <Title>
Examples: 
	|	Title	 |					Username                          |       Email		        | 	Password 	|
	|  scenario1 |	ABC	                                              |	   dhruv123@gmail.com	|	Temp@12345	|
	|  scenario2 |abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz |    dhruv456@gmail.com	| 	Temp@12345	|

Scenario Outline: Test Negative Case SignUp Page
    Given Login to the application
    When  Enter Any Invalid Value in the following field:<Username> <Email> <Password>
   	Then  Validate the Email Error message <Title>
Examples: 
	|	Title	 |Username      |       Email		        | 	Password 	|
	|  scenario1 |	ijnsda123	|	dhruv123				|	Temp@12345	|
	|  scenario2 |	ijnsda456	| dhruv123@xxz.com@xzz.com	| 	Temp@12345	|
	
Scenario Outline: Test Negative Case SignUp Page
    Given Login to the application
    When  Enter Any Invalid Value in the following field:<Username> <Email> <Password>
   	Then  Validate the Password Error message <Title>
Examples: 
	|	Title	 |Username      |       Email		        | 	Password 	|
	|  scenario1 |	ijnsda123	|	dhruv123@gmail.com		|	temp12		|
	|  scenario2 |	ijnsda123	| dhruv456@gmail.com		| 	temp		|
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/SignUpTestCase.feature");
formatter.feature({
  "line": 1,
  "name": "check the SignUp functionality",
  "description": "",
  "id": "check-the-signup-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Any Invalid Value in the following field:\u003cUsername\u003e \u003cEmail\u003e \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the Username Error message \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;",
  "rows": [
    {
      "cells": [
        "Title",
        "Username",
        "Email",
        "Password"
      ],
      "line": 8,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;1"
    },
    {
      "cells": [
        "scenario1",
        "ABC",
        "dhruv123@gmail.com",
        "Temp@12345"
      ],
      "line": 9,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;2"
    },
    {
      "cells": [
        "scenario2",
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
        "dhruv456@gmail.com",
        "Temp@12345"
      ],
      "line": 10,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Any Invalid Value in the following field:ABC dhruv123@gmail.com Temp@12345",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the Username Error message scenario1",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 13112966153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 47
    },
    {
      "val": "dhruv123@gmail.com",
      "offset": 51
    },
    {
      "val": "Temp@12345",
      "offset": 70
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 228303633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario1",
      "offset": 36
    }
  ],
  "location": "loginPage.validate_the_Username_Error_message(String)"
});
formatter.result({
  "duration": 3822059326,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Any Invalid Value in the following field:abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz dhruv456@gmail.com Temp@12345",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the Username Error message scenario2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 13090073467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
      "offset": 47
    },
    {
      "val": "dhruv456@gmail.com",
      "offset": 100
    },
    {
      "val": "Temp@12345",
      "offset": 119
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 208401428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario2",
      "offset": 36
    }
  ],
  "location": "loginPage.validate_the_Username_Error_message(String)"
});
formatter.result({
  "duration": 3758816205,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter Any Invalid Value in the following field:\u003cUsername\u003e \u003cEmail\u003e \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Validate the Email Error message \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;",
  "rows": [
    {
      "cells": [
        "Title",
        "Username",
        "Email",
        "Password"
      ],
      "line": 17,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;1"
    },
    {
      "cells": [
        "scenario1",
        "ijnsda123",
        "dhruv123",
        "Temp@12345"
      ],
      "line": 18,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;2"
    },
    {
      "cells": [
        "scenario2",
        "ijnsda456",
        "dhruv123@xxz.com@xzz.com",
        "Temp@12345"
      ],
      "line": 19,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter Any Invalid Value in the following field:ijnsda123 dhruv123 Temp@12345",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Validate the Email Error message scenario1",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 13487264148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ijnsda123",
      "offset": 47
    },
    {
      "val": "dhruv123",
      "offset": 57
    },
    {
      "val": "Temp@12345",
      "offset": 66
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 222657563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario1",
      "offset": 33
    }
  ],
  "location": "loginPage.validate_the_Email_Error_message(String)"
});
formatter.result({
  "duration": 3677037374,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter Any Invalid Value in the following field:ijnsda456 dhruv123@xxz.com@xzz.com Temp@12345",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Validate the Email Error message scenario2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 11689280963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ijnsda456",
      "offset": 47
    },
    {
      "val": "dhruv123@xxz.com@xzz.com",
      "offset": 57
    },
    {
      "val": "Temp@12345",
      "offset": 82
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 256383134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario2",
      "offset": 33
    }
  ],
  "location": "loginPage.validate_the_Email_Error_message(String)"
});
formatter.result({
  "duration": 3739128480,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter Any Invalid Value in the following field:\u003cUsername\u003e \u003cEmail\u003e \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Validate the Password Error message \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;",
  "rows": [
    {
      "cells": [
        "Title",
        "Username",
        "Email",
        "Password"
      ],
      "line": 26,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;1"
    },
    {
      "cells": [
        "scenario1",
        "ijnsda123",
        "dhruv123@gmail.com",
        "temp12"
      ],
      "line": 27,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;2"
    },
    {
      "cells": [
        "scenario2",
        "ijnsda123",
        "dhruv456@gmail.com",
        "temp"
      ],
      "line": 28,
      "id": "check-the-signup-functionality;test-negative-case-signup-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter Any Invalid Value in the following field:ijnsda123 dhruv123@gmail.com temp12",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Validate the Password Error message scenario1",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 14681684015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ijnsda123",
      "offset": 47
    },
    {
      "val": "dhruv123@gmail.com",
      "offset": 57
    },
    {
      "val": "temp12",
      "offset": 76
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 173442608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario1",
      "offset": 36
    }
  ],
  "location": "loginPage.validate_the_Password_Error_message(String)"
});
formatter.result({
  "duration": 5784623835,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test Negative Case SignUp Page",
  "description": "",
  "id": "check-the-signup-functionality;test-negative-case-signup-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Enter Any Invalid Value in the following field:ijnsda123 dhruv456@gmail.com temp",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Validate the Password Error message scenario2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginPage.login_to_the_application()"
});
formatter.result({
  "duration": 12639614169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ijnsda123",
      "offset": 47
    },
    {
      "val": "dhruv456@gmail.com",
      "offset": 57
    },
    {
      "val": "temp",
      "offset": 76
    }
  ],
  "location": "loginPage.enter_Any_Invalid_Value_in_the_following_field(String,String,String)"
});
formatter.result({
  "duration": 178916142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scenario2",
      "offset": 36
    }
  ],
  "location": "loginPage.validate_the_Password_Error_message(String)"
});
formatter.result({
  "duration": 5790329421,
  "status": "passed"
});
});
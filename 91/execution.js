var execution = {"machines":[{"type":"machine","plannedTests":8,"name":"Mac-1672050984310.local","status":"failure","children":[{"type":"scenario","scenarioProperties":{"Station":"10.79.8.55","User":"runner","Version":"unknown","sutFile":"MSKRel.xml","testDir":"/Users/runner/work/UprightMobileMSK/UprightMobileMSK/target/classes","Date":"Mon Dec 26 11:13:02 UTC 2022","Scenario":"Github_Actions"},"name":"Github_Actions","status":"failure","children":[{"type":"test","index":0,"uid":"1451672053173-1","description":"","duration":65330,"date":"2022/12/26","timestamp":"11:13:03","className":"MSK_APP.General","parameters":{"App":"${APP}","JenkinsEnv":"${jenkinsEnv}","Udid":"${UDID}","Env":"ANDROID","NoReset":"false"},"properties":{"Class":"MSK_APP.General","Breadcrumb":"Github_Actions-->Start app"},"name":"Start app","status":"success","hideInHtml":false},{"type":"test","index":1,"uid":"1451672053173-2","description":"","duration":30248,"date":"2022/12/26","timestamp":"11:14:09","className":"MSK_APP.Test.Phone_verification","parameters":null,"properties":{"Class":"MSK_APP.Test.Phone_verification","Breadcrumb":"Github_Actions-->open country list"},"name":"open country list","status":"success","hideInHtml":false},{"type":"test","index":2,"uid":"1451672053173-3","description":"","duration":2863,"date":"2022/12/26","timestamp":"11:14:39","className":"MSK_APP.Test.Phone_verification","parameters":{"Country":"Ukraine"},"properties":{"Class":"MSK_APP.Test.Phone_verification","Breadcrumb":"Github_Actions-->Select country"},"name":"Select country","status":"failure","hideInHtml":false},{"type":"test","index":3,"uid":"1451672053173-4","description":"","duration":1912,"date":"2022/12/26","timestamp":"11:14:42","className":"MSK_APP.Test.Phone_verification","parameters":null,"properties":{"Class":"MSK_APP.Test.Phone_verification","Breadcrumb":"Github_Actions-->click select region"},"name":"click select region","status":"failure","hideInHtml":false},{"type":"test","index":4,"uid":"1451672053173-5","description":"","duration":8441,"date":"2022/12/26","timestamp":"11:14:44","className":"MSK_APP.Test.Phone_verification","parameters":{"Phone_number":"962174571","Subscriptions":"RANDOM","Enroll":"false","New_number":"false"},"properties":{"Class":"MSK_APP.Test.Phone_verification","Breadcrumb":"Github_Actions-->Enter phone number- ***962174571*"},"name":"Enter phone number- ***962174571*","status":"success","hideInHtml":false},{"type":"test","index":5,"uid":"1451672053173-6","description":"","duration":3270,"date":"2022/12/26","timestamp":"11:14:53","className":"MSK_APP.Test.Phone_verification","parameters":{"Numberofclicks":"1","Timebtweenclicks":"0.1"},"properties":{"Class":"MSK_APP.Test.Phone_verification","Breadcrumb":"Github_Actions-->Click verification button"},"name":"Click verification button","status":"success","hideInHtml":false},{"type":"test","index":6,"uid":"1451672053173-7","description":"","duration":63215,"date":"2022/12/26","timestamp":"11:14:56","className":"MSK_APP.Test.VarificationCode","parameters":null,"properties":{"Class":"MSK_APP.Test.VarificationCode","Breadcrumb":"Github_Actions-->Enter code"},"name":"Enter code","status":"failure","hideInHtml":false},{"type":"test","index":7,"uid":"1451672053173-8","description":"","duration":61572,"date":"2022/12/26","timestamp":"11:15:59","className":"MSK_APP.Test.VarificationCode","parameters":null,"properties":{"Class":"MSK_APP.Test.VarificationCode","Breadcrumb":"Github_Actions-->Validate got to home page"},"name":"Validate got to home page","status":"failure","hideInHtml":false}]}]}]};
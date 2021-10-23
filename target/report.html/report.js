$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer flow validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cus"
    }
  ]
});
formatter.scenario({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cus"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches demo telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_launches_demo_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enters_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_verify_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/AddTariffPlan.feature");
formatter.feature({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tariff"
    }
  ]
});
formatter.scenario({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@add"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch demo telecom webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_launch_demo_telecom_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on addtarficplan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_on_addtarficplan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the all fileds",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_all_fileds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify Congratulations is generte",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_verify_Congratulations_is_generte()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@list"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch demo telecom webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_launch_demo_telecom_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on addtarficplan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_on_addtarficplan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the all fileds by using one dim list",
  "rows": [
    {
      "cells": [
        "1",
        "1",
        "2",
        "2",
        "1",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_all_fileds_by_using_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify Congratulations is generte",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_verify_Congratulations_is_generte()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@map"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch demo telecom webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_launch_demo_telecom_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on addtarficplan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_on_addtarficplan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the all fileds by using one dim map",
  "rows": [
    {
      "cells": [
        "rental",
        "1"
      ]
    },
    {
      "cells": [
        "local_minutes",
        "2"
      ]
    },
    {
      "cells": [
        "inter_minutes",
        "3"
      ]
    },
    {
      "cells": [
        "sms_pac",
        "4"
      ]
    },
    {
      "cells": [
        "minutes_charges",
        "5"
      ]
    },
    {
      "cells": [
        "inter_charges",
        "6"
      ]
    },
    {
      "cells": [
        "sms_charges",
        "2"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_all_fileds_by_using_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});
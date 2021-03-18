/**
 * @fileoverview dont use innerhtml
 * @author pascal schilp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-innerhtml"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-innerhtml", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "node.innerHTML = 'dangerzone';",
            errors: [{
                message: "Do not use innerHTML"
            }]
        }
    ]
});

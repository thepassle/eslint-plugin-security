/**
 * @fileoverview dont use new function
 * @author pascal schilp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-new-function"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-new-function", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "new Function('a', 'b', 'return a + b');",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});

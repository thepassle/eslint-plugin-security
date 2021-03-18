/**
 * @fileoverview dont use eval
 * @author pascal schilp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-eval"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-eval", rule, {

    valid: [
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "eval('dangerzone')",
            errors: [{
                message: "Do not use eval"
            }]
        }
    ]
});

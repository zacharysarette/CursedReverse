#!/bin/env node
/* Created By Zachary Sarette in April of 2022. Stay Fancy! */
($ => {process.stdout.write($ ?? "Where Are The Args?")})(($ => $.join(""))(($ => $.reverse())(($=> $.split(""))(($=> $.join(" ") ?? "")(process.argv.slice(2))))))


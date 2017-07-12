var Handlebars = require('Handlebars')
var fs = require('fs')

var source = fs.readFileSync('template.html').toString()

var template = Handlebars.compile(source)

var out = template({
  name: "Ben",
  address: "None of your business"
})

console.log(out)

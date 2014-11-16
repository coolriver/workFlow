

var handlebars_config = {
	home: {
        files: {
          'blog/index.html': 'src/page/index.hbs'
        },
        options: {
          partials: [
            'src/template/*.hbs', 
            'src/md/*.md',
            'src/layout/index.html'
          ],
          modules: [
            'src/helpers/helpers-*.js',
            'handlebars-helper-moment'
          ],
          basePath: 'src/',
          context: 'src/data/index.json'
        }
    }
};
var fs = require('fs');
var arr = fs.readdirSync('src/md');

arr.forEach(function(v){console.log(v)});

module.exports = handlebars_config;
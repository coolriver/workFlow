module.exports = function(grunt){
 
    require('load-grunt-tasks')(grunt); //加载所有的任务

    var handlebarsConf = require('./src/helpers/handlebars-conf.js');

    console.log(JSON.stringify(handlebarsConf));
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        hilight_style: {
            css: 'node_modules/highlight.js/styles/hybrid.css'
        },
        bower_concat: {
          all: {
            dest: 'lib/script/component.js',
            cssDest: 'lib/style/component.css',
            exclude: [
             // 'jquery'
             //'highlight'
            ],
            dependencies: {
                'cool-dialog': 'jquery'
            },
            mainFiles: {
               // 'highlight': ['src/highlight.pack.js','src/styles/github.css']
            }
          }
        },


        connect: {
            options: {
                port: 9000,
                hostname: '127.0.0.1', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35729  //声明给 watch 监听的端口
            },
 
            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        'blog'  //主目录
                    ]
                }
            }
        },
 
        watch: {
            options: {
                debounceDelay:250
            },
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
                },
 
                files: [  //下面文件的改变就会实时刷新网页
                    'blog/*.html',
                    'blog/css/*.css',
                    'blog/js/*.js',
                    'blog/img/*.{png,jpg}'
                ]
            },
            livebower: {
                files: ['bower_components/**'],
                tasks: ['bower_concat']
            },
            livestatic: {
                files: ['lib/**','src/script/**','src/style/**'],
                tasks: ['concat','uglify']
            },
            livepage: {
                files: ['src/data/**','src/layout/**','src/md/**','src/page/**','src/template/**'],
                tasks: ['handlebarslayouts']
            }
        },

        concat: {

            script: {
                options:{
                    separator: ';'
                },
                src: ['<%=bower_concat.all.dest%>','src/script/*.js'],
                dest: 'blog/js/main.js'
            },

            style: {
                src: ['<%=bower_concat.all.cssDest%>','<%=hilight_style.css%>','src/style/*.css'],
                dest: 'blog/css/style.css'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },

            build: {
                src: '<%=concat.script.dest%>',
                dest: 'blog/js/main.min.js'
            }
        },

        jshint: {
            src: ['src/script/*.js']
        },

        handlebarslayouts: handlebarsConf
        
    });
 
	grunt.registerTask('test','just for test.',function (){
		grunt.log.writeln("hahaha");
        var obj = {a:1,b:2};
     //   grunt.file.write('src/data/test.json',JSON.stringify(obj));
     //   grunt.log.writeln(JSON.stringify(grunt.file.readJSON('src/data/test.json')));
	});

    grunt.registerTask('metadata','update meta data of markdown articles.',function(){

    })

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('compile', [
        'bower_concat',
        'concat',
        'uglify',
        'handlebarslayouts'
    ]);

    grunt.registerTask('default', [
        'bower_concat',
        'concat',
        'uglify',
        'handlebarslayouts'//这个任务会使后面watch任务停止，所以直接grunt命令的话有问题。需要先执行 grunt compile再执行grunt serve
     //   'connect:server',
     //   'watch'
    ]);

}
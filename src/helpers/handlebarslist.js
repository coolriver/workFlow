/*
 * grunt-bandlebars-conf
 * 
 *
 * Copyright (c) 2014 coolriver
 * 
 */

'use strict';




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

//arr.forEach(function(v){console.log(v)});

//函数：更新md文件对应的元数据json文件
function updateJson(name,md,json,time,grunt){
  var fs = require('fs'),
      jsonData = {},
      date,
      title;
      title = fs.readFileSync(md,'utf-8').split(/[\n\r]+/)[0].replace(/^#+/,'');
      date = new Date(time);

      jsonData.title = title;
      jsonData.article = name;
      jsonData.modifyTimeValue = time;
      jsonData.modifyTime = date.toString().replace(/GMT.*$/,'');

      try{
        fs.writeFileSync(json,JSON.stringify(jsonData),{encoding:'utf8'});
        grunt.log.writeln('update metadata :'  + md + ' --> ' + json);
      }catch(e){
        grunt.fail.warn(e);
      }
      //grunt.file.write(json,JSON.stringify(jsonData),{encoding:'utf8'});
}


module.exports = function(grunt) {

  
  grunt.registerTask('handlebarslist','update the article list need to be rendered.',function(){

    var handleConf = { //handlebarslayout配置主页配置
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
        },

        fs = require('fs'),
        arr = fs.readdirSync('src/md'),
        renderList = {},
        titleList = [],
        jsonPre = 'src/data/article/',
        mdPre = 'src/md/',
        fileName,
        filePath,
        fileJson,
        fileInfo,
        mdPath,
        update = false;

    //查看md文件更新状况
    arr.forEach(function(v){
      fileName = v.split('.')[0];
      filePath = jsonPre + fileName + '.json';
      mdPath = mdPre + fileName + '.md';

      //新增md文件
      if (!fs.existsSync(filePath)){
        renderList[fileName] = true;
        fileInfo = fs.statSync(mdPath);
        updateJson(fileName,mdPath,filePath,fileInfo.mtime.valueOf(),grunt);
      }
      else{
        fileJson = grunt.file.readJSON(filePath);
        fileInfo = fs.statSync(mdPath);

        //修改现有md文件
        if (fileInfo.mtime.valueOf() > fileInfo.ctime.valueOf() &&
            fileInfo.mtime.valueOf() > fileJson.modifyTimeValue){
          renderList[fileName] = true;
          updateJson(fileName,mdPath,filePath,fileInfo.mtime.valueOf(),grunt);
        }
      }
    });

    //生成 handlebarslayout 配置文件
    arr = fs.readdirSync(jsonPre);
    arr.forEach(function(v){
      fileName = v.split('.')[0];
      filePath = jsonPre + fileName + '.json';
      mdPath = mdPre + fileName + '.md';
      fileJson = grunt.file.readJSON(filePath);
      titleList.push(fileJson.title);
      if (renderList[fileName]){
        update = true;
        var ht = {};
        ht['blog/article/'+ fileName +'.html'] = 'src/page/article.hbs';
        handleConf[fileName] = {
          files: ht,
          options: {
            partials: [
              'src/template/*.hbs', 
               mdPath,
              'src/layout/article.html'
            ],
            modules: [
              'src/helpers/helpers-*.js',
              'handlebars-helper-moment'
            ],
            basePath: 'src/',
            context: filePath
          }          
        }
      }
    });

    //更新index.json 文章名列表
    if (update){ 
      var indexJson = grunt.file.readJSON('src/data/index.json');
      indexJson.articleList = titleList;
      grunt.file.write('src/data/index.json',JSON.stringify(indexJson));
      grunt.log.write('update article list :\n');
      grunt.log.ok(titleList.join('\n'))
    }
    grunt.config('handlebarslayouts',handleConf);
  })
};
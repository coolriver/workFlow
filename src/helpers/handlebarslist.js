/*
 * grunt-bandlebars-conf
 * 
 *
 * Copyright (c) 2014 coolriver
 * 
 */

'use strict';

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
        articles = [],
        jsonPre = 'src/data/article/',
        blogJsonPre = 'blog/data/article/',
        mdPre = 'src/md/',
        htmlPre = 'blog/',
        fileName,
        filePath,
        fileJson,
        fileInfo,
        htmlPath,
        mdPath,
        update = false;

    //查看md文件更新状况
    arr.forEach(function(v){
      fileName = v.split('.')[0];
      filePath = jsonPre + fileName + '.json';
      mdPath = mdPre + fileName + '.md';

      //新增md文件
      if (!fs.existsSync(filePath)){
        update = true;
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
          update = true;
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
      htmlPath = htmlPre + 'article/' + fileName + '.html';
      

      //如果md文件被删除
      if (!fs.existsSync(mdPath)){
        grunt.file.delete(filePath);  //删除对应的src中的json元数据
        grunt.file.delete(htmlPath);  //删除对应的blog中的页面
        grunt.file.delete(blogJsonPre + fileName + '.json');   //删除对应的blog中的json元数据
      }
      else{
        fileJson = grunt.file.readJSON(filePath);
        articles.push({
            title: fileJson.title,
            name: fileName,
            mtime: fileJson.modifyTime
        });

        /*
            需要重新生成静态页面的三种情况：
              1. md文件被修改
              2. md文件对应的html页面没生成（刚从git 上clone下来）
              3. 模板或layout文件被修改
        */
        if (renderList[fileName] || (!fs.existsSync(htmlPath)) || (!update)){
          var ht = {};
          ht[htmlPath] = 'src/page/article.hbs';
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
      }
  
    });

    //更新index.json 文章名列表
    if (true){ 
      var indexJson = grunt.file.readJSON('src/data/index.json');
      indexJson.articles = articles;
      indexJson.article = articles[0].name;
      grunt.file.write('src/data/index.json',JSON.stringify(indexJson));
      grunt.log.write('update article list :\n');
      grunt.log.ok(articles.map(function(v){return v.title;}).join('\n'))
    }
    grunt.config('handlebarslayouts',handleConf);
  })
};
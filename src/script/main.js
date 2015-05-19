/*$(document).ready(function(){
	alert(11);
});*/
$(document).ready(function() {
  $('pre code').each(function() {
    $(this).addClass("hljs");
  });

  $.ajax({
  	url: '/blog/data/index.json',
  	success: function(data) {
  		var list = data.articles,
  			namelist = [];
  		for (var i in list){
        console.log(list[i].name)
  			namelist.push('<li><a href="/blog/article/'+list[i].name+'.html">');
  			namelist.push(list[i].title);
  			namelist.push('</a></li>');
  		}
  		$("#ul-title").html(namelist.join(''));
  	}
  });

});
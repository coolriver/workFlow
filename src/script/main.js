/*$(document).ready(function(){
	alert(11);
});*/
$(document).ready(function() {
  $('pre code').each(function() {
    $(this).addClass("hljs");
  });

  $.ajax({
  	url: '/data/index.json',
  	success: function(data) {
  		var list = data.articles,
  			namelist = [];
  		for (var i in list){
  			namelist.push('<li><a href="/article/'+list[i].name+'.html">');
  			namelist.push(list[i].title);
  			namelist.push('</a></li>');
  		}
  		$("#ul-title").html(namelist.join(''));
  	}
  });

});
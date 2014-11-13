var dialog;
window.onload = function(){
	document.getElementById("start").onclick = function(){
		dialog = myDialog({
							width:400,
							height:200,
							drag:true,
							title:"请注意",
							content:"这是个可以拖拽移动的弹出窗"
							});
		dialog.showDialog();
	}

}

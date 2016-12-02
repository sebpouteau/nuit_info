$(document).ready(function(){
});

 function addSendMessage(){
	var textInput = $("#btn-input").val();
	console.log(textInput);
	var message = $("<div></div>").addClass("row msg_container base_sent")
	.append($("<div></div>").addClass("col-xs-10 col-md-10")
	.append($("<div></div>").addClass("messages msg_sent")
	.append($("<p></p>").text(textInput))))
	.append($("<div></div>").addClass("col-md-2 col-xs-2 avatar").html('<img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "><div class="triangle-up-sent"></div>'));
	$(".panel-body.msg_container_base").append(message);
	$("#btn-input").val("");
	$.ajax({
		method: 'POST',
		url:"http://localhost:3978/api/messages",
		data: $("#btn-input").val(),
		dataType: "json",
		header: {'Access-Control-Allow-Origin': 'Allow'},
        crossDomain: true,
		success: function(data){
			addReceiveMessage(data);
		}
	});
}   

function addReceiveMessage(textMessage){
	var message = $("<div></div>").addClass("row msg_container base_receive").append($("<div></div>").addClass("col-md-2 col-xs-2 avatar").html('<img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "><div class="triangle-up-receive"></div>'))
					.append($("<div></div>").addClass("col-xs-10 col-md-10")
					.append($("<div></div>").addClass("messages msg_receive)")
					.append($("<p></p>").text(textMessage))));
	$(".panel-body.msg_container_base").append(message);
}

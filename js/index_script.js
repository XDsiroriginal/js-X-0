function open_color_menu() {
	console.log("open_color_menu_function check");
	document.getElementById("pop_up_color_window").style.animation = "pop_up_color_window_open_animation 0.5s forwards";
}

function close_color_menu() {
	console.log("close_color_menu_function check");
	document.getElementById("pop_up_color_window").style.animation = "pop_up_color_window_close_animation 0.5s forwards";
}
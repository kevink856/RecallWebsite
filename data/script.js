function searchCommands() {
	var input, filter, cmdContent, cmds, cmd, i, txtValue;
	input = document.getElementById("input");
	filter = input.value.toUpperCase();
	cmdContent = document.getElementById("command-content");
	cmds = cmdContent.getElementsByClassName("commands");

	for (i = 0; i < cmds.length; i++) {
	  cmd = cmds[i].getElementsByClassName("command-name")[0];
	  if (cmd) {
		txtValue = cmd.textContent;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  cmds[i].style.display = "";
		} else {
		  cmds[i].style.display = "none";
		}
	  }
	}
}
var a = document.createElement("input");
var b = document.createElement("pre");
var c = document.createElement("style");

b.innerHTML = "Hello, type help for a list of commands";
c.innerHTML = ".cmd {color:white;background-color:black;}";
a.className = "cmd";
b.className = "cmd";

cmd = {};
cmd.commands = {};
cmd.cmdobj=a;
cmd.logobj=b;
cmd.val = "";
cmd.run = function(x) {
		cmd.val = cmd.cmdobj.value;
		if(x){cmd.val = x};
		cmd.val = cmd.val.trim();
		if(cmd.val.includes(" ")){
			cmd1 = cmd.val.split(" ").at(0);
			cmd2 = cmd.val.replace(cmd1,"");
			
		}else{
			if(cmd.val===){
			   
			}else if(){
				
			}else if(){
				
			}else
			
		}
	};
cmd.log = function(x) {
	if(x){cmd.logobj.innerHTML += "<br>"+x+""};
};

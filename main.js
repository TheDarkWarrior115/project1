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
cmd.logtoggle="true";
cmd.run = function(x) {
		cmd.val = cmd.cmdobj.value;
		if(x){cmd.val = x};
		cmd.val = cmd.val.trim();
		if(cmd.val.includes(" ")){
			cmd1 = cmd.val.split(" ").at(0);
			cmd2 = cmd.val.replace(cmd1,"");
			cmd1 = cmd1.toLowerCase();
			if(cmd1==="help"){
				cmd.commands.help(cmd2);
			}else if(cmd1==="color"){
				cmd.commands.color(cmd2);
			}else if(cmd1==="logtoggle"){
				cmd.commands.logtoggle(cmd2);
			}else{cmd.log("Unknown Command",true)}
		}else{
			cmd.val=cmd.val.toLowerCase();
			if(cmd.val==="help"){
				cmd.commands.help();
			}else if(cmd.val==="color"){
				cmd.commands.color();
			}else if(cmd.val==="logtoggle"){
				cmd.commands.logtoggle();
			}else{cmd.log("Unknown Command",true};
			
		}
	};
cmd.log = function(x,a) {
	if(cmd.logtoggle=true){
	if(x){cmd.logobj.innerHTML += "<br>"+x+""};}
	if(a===true){if(x){cmd.logobj.innerHTML += "<br>"+x+""};};
};
cmd.commands.help = function(x){
	if(x){
		if(x===){
		   
		}else if(){
		
		}else if(){
		
		}else if(){
		
		}else{}
	}else{
		cmd.log(`<span style="font-weight:bold">	Help List</span>
Help: shows this list or shows syntax of specific command
	Example: Help color
`)
	}
}

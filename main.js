a = document.createElement("input");
b = document.createElement("pre");
c = document.createElement("style");

c.innerHTML=".cmd {color:white;background-color:black}";
b.innerHTML = "Hello User: If You Are Lost Type Help For A List Of Commands";
a.className = "cmd";
b.className = "cmd";


const cmd = {};
cmd.cmdobj = a;
cmd.logobj = b;
cmd.commands = {};
cmd.commands.help = function(x){
		
	}
cmd.run = function() {};
cmd.log = function() {};

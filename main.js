a = document.createElement("input");
b = document.createElement("pre");
c = document.createElement("style");

c.innerHTML=".cmd {color:white;background-color:black}";
b.innerHTML = "Hello User: If You Are Lost Type Help For A List Of Commands";
a.className = "cmd";
b.className = "cmd";


const cmd = {};
cmd.logreturn = true;
cmd.cmdobj = a;
cmd.logobj = b;
cmd.commands = {};
cmd.commands.help = function(x){
		if(x){
			if(x===color){cmd.log("",true);}
		}else(
			cmd.log("<span style='font-weight: bold;'>List Of Commands:</span>",true);
			cmd.log("Help: shows this list, with parameter shows syntax for specific command",true);
			cmd.log("	example: Help Color; shows syntax for color command",true);
			cmd.log("",true);
		)
	}
cmd.run = function(x) {
		var command = cmd.cmdobj.value;
		if(x){var command = x;};
		if(command.includes(" ")===true){
			cmd1 = command.split(" ");
			if(cmd1.at(2)===""){
				1+1;
			}else(
			
			)
		}
		if(command.includes(" ")===false){
			
		}
		
	};
cmd.log = function(x,ignore) {
		if(cmd.logreturn === true ){
			cmd.logobj.innerHTML += "<br>" + x ;
		}
		if(ignore === true){cmd.logobj.innerHTML += "<br>" + x;}
		
	};

//creates elements
a = document.createElement("input");
b = document.createElement("pre");
c = document.createElement("style");
//Edits Element Created Above
c.innerHTML=".cmd {color:white;background-color:black}";
b.innerHTML = "Hello User: If You Are Lost Type Help For A List Of Commands";
a.className = "cmd";
b.className = "cmd";
//cmd is created
const cmd = {};
//log return is set to true, user will be able to turn this of, however help commands will still log;
cmd.logreturn = true;
//creates objects on cmd object
cmd.cmdobj = a;
cmd.logobj = b;
//commands object created
cmd.commands = {};
//help command created
cmd.commands.help = function(x){
		//if x parameter it will use it and display command syntax, otherwise will display whole list
		if(x){
			if(x===color){cmd.log("",true);}
		}else(
			cmd.log("<span style='font-weight: bold;'>List Of Commands:</span>",true);
			cmd.log("Help: shows this list, with parameter shows syntax for specific command",true);
			cmd.log("	example: Help Color; shows syntax for color command",true);
			cmd.log("",true);
		)
	}
//created run function
cmd.run = function(x) {
		//gets value of input
		var command = cmd.cmdobj.value;
		//if x parameter sets command to the x parameter
		if(x){var command = x;};
		//if command includes spaces test for parameters,
		if(command.includes(" ")===true){
			cmd1 = command.split(" ");
			if(cmd1.at(2)===""){
				hasspace = false; //if accidental space than returns to no parameters ln
			}else(//if it has parameters it will do this
				cmd2 = command.replace
			)
		}
		//tests for no parameters
		if(command.includes(" ")===false){
		noparameters=true;
		};
		if(hasspace===false){
		noparameters=true
		};
		if(noparameters===true){//if no parameters it will do this
			
		}
		
	};
cmd.log = function(x,ignore) {
		if(cmd.logreturn === true ){
			cmd.logobj.innerHTML += "<br>" + x ;
		}
		if(ignore === true){cmd.logobj.innerHTML += "<br>" + x;}
		
	};

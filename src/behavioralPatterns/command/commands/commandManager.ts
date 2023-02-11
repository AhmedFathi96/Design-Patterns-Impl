import { Command } from "./command";

export class CommandManager {
    commands: Record<string,Command> = {}

    registerCommand(name: string, command: Command) {
        this.commands[name] = command
    }

    executeCommand(command:string | Command, args: string){
        if(typeof command === 'string'){
            this.commands[command].execute(args)
        }else{
            command.execute(args)
        }
    }
}
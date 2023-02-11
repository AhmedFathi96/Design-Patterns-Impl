import { Command } from "../commands/command";
import { CommandManager } from "../commands/commandManager";

export class UIEventHandler {

    constructor(public cmdManager: CommandManager) {}
    
    handleAction(command: string | Command, arg: string) {
      this.cmdManager.executeCommand(command, arg);
    }
}
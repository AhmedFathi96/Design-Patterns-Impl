import { CommandManager } from "./commands/commandManager";
import { OpenUrlCommand } from "./commands/openUrlCommand";
import { SendMessageCommand } from "./commands/sendMessageCommand";
import { UIEventHandler } from "./invoker/uiActionInvoker";

class CommandClient{

    exec(){
        const commandManager = new CommandManager();
        commandManager.registerCommand("openUrl", new OpenUrlCommand());
        commandManager.registerCommand("msg", new SendMessageCommand());

        const eventHandler = new UIEventHandler(commandManager);
        eventHandler.handleAction("openUrl", "hhttps://github.com/AhmedFathi96");
        eventHandler.handleAction("msg", "Hello Fathi!");
        eventHandler.handleAction(new SendMessageCommand(), "Hello Fathi!");
    }

}
export const commandClient = new CommandClient()
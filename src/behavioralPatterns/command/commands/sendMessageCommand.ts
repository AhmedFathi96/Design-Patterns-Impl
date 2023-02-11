import { Command } from "./command";

export class SendMessageCommand implements Command{
    name:string = "sendMessage";

    execute(args: string) {
        console.log(`Send message: ${args}`);
    }
}
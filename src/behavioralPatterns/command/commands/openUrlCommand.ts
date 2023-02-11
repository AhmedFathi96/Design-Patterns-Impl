import { Command } from './command'
export class OpenUrlCommand implements Command{
    name:string = "openUrl";

    execute(args: string) {
        console.log(`Open url: ${args}`);
    }
}
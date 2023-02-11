import { AbstractHandler } from "../baseImpl/AbstractHandler"

export class TeamLeaderHandler extends AbstractHandler{
    handle(request: number): string {
        if (request <= 2) {
            return `${request} days off has been approved, the process is over! \r\n`;
        }
        return super.handle(request)
    }
}
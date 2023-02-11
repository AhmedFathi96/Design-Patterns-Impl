import { AbstractHandler } from "../baseImpl/AbstractHandler";

export class ManagerHandler extends AbstractHandler {
    handle(request: number): string {
        if (3 <= request && request <= 5) {
            return `${request} days off has been approved, the process is over! \r\n`;
        }
        return super.handle(request);
    }
}
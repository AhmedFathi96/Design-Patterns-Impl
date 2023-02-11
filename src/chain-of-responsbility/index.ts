
// Chain of Responsibility is behavioral design pattern that allows 
// passing request along the chain of potential handlers until one of them handles request.
// The pattern allows multiple objects to handle the request without coupling sender class to the concrete classes 
// of the receivers. The chain can be composed dynamically at runtime with any handler 
// that follows a standard handler interface.

import { DirectorHandler } from "./handlers/DirectorHandler";
import { ManagerHandler } from "./handlers/ManagerHandler";
import { TeamLeaderHandler } from "./handlers/TeamleaderHandler";


class ChainOfResponsibilityClient{

    dayOffHandler;

    constructor() {
        this.dayOffHandler = this.buildHandlerChain();
    }

    buildHandlerChain(){
        const teamLeaderHandler = new TeamLeaderHandler();
        const managerHandler = new ManagerHandler();
        const directorHandler = new DirectorHandler();

        teamLeaderHandler.setNext(managerHandler);
        managerHandler.setNext(directorHandler);

        return teamLeaderHandler;
    }

    requestDayOff(numberOfDaysOff:number){
        return this.dayOffHandler.handle(numberOfDaysOff)
    }
}
export const chainOfResponsibilityClient = new ChainOfResponsibilityClient()
import { GenericIterator } from "./iterator";

export interface Aggregator{
    getIterator(): GenericIterator<string> 
} 
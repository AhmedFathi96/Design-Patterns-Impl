import { WordsCollection } from "../collections/wordsCollection";
import { GenericIterator } from "./iterator";

export class AlphabeticalOrderIterator implements GenericIterator<string>{
    private collection: WordsCollection;

    /**
     * Stores the current traversal position. An iterator may have a lot of
     * other fields for storing iteration state, especially when it is supposed
     * to work with a particular kind of collection.
     */
     private position: number = 0;

     /**
      * This variable indicates the traversal direction.
      */
     private reverse: boolean = false;

    constructor(wordsCollection:WordsCollection, reverse: boolean = false){
        this.collection = wordsCollection
        this.reverse = reverse
        if(reverse){
            this.position = this.collection.getCount() - 1
        }
    }

    current(): string{
        return this.collection.getItems()[this.position]
    } 

    next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    key(): number{
        return this.position
    }

    valid(): boolean{
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount()
    }

    rewind(): void{
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

}
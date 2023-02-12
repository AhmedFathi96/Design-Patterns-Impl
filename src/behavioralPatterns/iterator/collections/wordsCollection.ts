import { Aggregator } from "../iterator/aggregator";
import { AlphabeticalOrderIterator } from "../iterator/alphabeticalOrderIterator";
import { GenericIterator } from "../iterator/Iterator";


export class WordsCollection implements Aggregator{

    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): GenericIterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): GenericIterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}
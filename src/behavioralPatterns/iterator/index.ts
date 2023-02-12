import { WordsCollection } from "./collections/wordsCollection";

class IteratorClient{

    exec(){
        const collection = new WordsCollection();
        collection.addItem('First');
        collection.addItem('Second');
        collection.addItem('Third');

        const iterator = collection.getIterator()
        while(iterator.valid()){
            console.log(iterator.next());
        }

        const reverseIterator = collection.getReverseIterator();

        while(reverseIterator.valid()){
            console.log(reverseIterator.next());
        }
    }

}
export const iteratorClient = new IteratorClient()
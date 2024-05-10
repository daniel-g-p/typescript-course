"use strict";
const logValue = (value) => {
    console.log(value);
    return value;
};
class DataStorage {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        const index = this.data.indexOf(item);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
    get() {
        return this.data;
    }
}
const storage = new DataStorage();
storage.add("A");
storage.add("B");
storage.add("C");
storage.add("D");
storage.add("E");
storage.add("F");
storage.remove("C");
storage.remove("E");
const value = storage.get();
logValue(value);

type primitive = string | number | boolean;

const logValue = <T>(value: T): T => {
  console.log(value);
  return value;
};

class DataStorage<T extends primitive> {
  public data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  remove(item: T): void {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  get(): T[] {
    return this.data;
  }
}

const storage = new DataStorage<string>();

storage.add("A");
storage.add("B");
storage.add("C");
storage.add("D");
storage.add("E");
storage.add("F");

storage.remove("C");
storage.remove("E");

const value = storage.get();

logValue<string[]>(value);

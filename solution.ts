class MyMap<T> {
  private map: {[key: string]: T} = {};
  
  setItem(key: string, item: T) {
   this.map[key] = item;
  }
  
  getItem(key: string) {
   return this.map[key];
  }
  
  clear() {
   this.map = {};
  }
  
  printMap() {
   for (let key in this.map) {
    console.log(key, this.map[key]);
   }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("potatoes", "french fries");
stringMap.setItem("carrots", "raw");
console.log(stringMap.getItem("potatoes"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();









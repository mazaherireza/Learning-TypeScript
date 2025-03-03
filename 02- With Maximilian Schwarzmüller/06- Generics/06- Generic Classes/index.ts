class Store<T extends string | number> {
  private store: T[] = [];

  add(item: T) {
    this.store.push(item);
  }

  remove(item: T) {
    const index = this.store.indexOf(item);
    if (index == -1) return;
    this.store.splice(index, 1);
  }

  getStore() {
    return [...this.store];
  }
}

const strStore = new Store<string>();
strStore.add("Reza");
strStore.add("Mazaheri");
//strStore.add(8001); <------ Argument of type 'number' is not assignable to parameter of type 'string'.
strStore.remove("Mazaheri");
console.log(strStore.getStore());

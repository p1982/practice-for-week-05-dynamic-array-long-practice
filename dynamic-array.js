class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize)
    this.capacity = defaultSize
    this.length = 0
    if(this.capacity===this.length){
      this.resize()
    }
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
    return this.length
  }


  pop() {
    this.length -= 1;
    let lastItem = this.data[this.length];
    this.data[this.length] = undefined;
    return lastItem;
  }

  shift() {
    let array = this.data
    let firstElem = this.data[0]
    for (let i = 1; i < array.length; i++) {
      this.data[i - 1] = array[i]
    }
    this.length--;
    return firstElem
  }

  unshift(val) {
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++
    return this.length
  }

  indexOf(val) {
    let index = -1
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        index = i
      }
    }
    return index
  }

  resize() {
    this.capacity *= 2;
    let tempArray = this.data;
    this.data = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      this.data[i] = tempArray[i];
    }
    return this.data
  }
}
const dynamicArr = new DynamicArray(4)
dynamicArr.push(10);
dynamicArr.push(11);
dynamicArr.push(12);
dynamicArr.push(13);

console.log(dynamicArr.capacity)
console.log(dynamicArr.data.length)
console.log(dynamicArr.length)

dynamicArr.push(14);

console.log(dynamicArr.capacity)
console.log(dynamicArr.data.length)
console.log(dynamicArr.length)

dynamicArr.unshift(9);
dynamicArr.unshift(8);
dynamicArr.unshift(7);
dynamicArr.unshift(6);

console.log(dynamicArr.capacity);
console.log(dynamicArr.data.length);
console.log(dynamicArr.length)

dynamicArr.read(0)
dynamicArr.read(1)
dynamicArr.read(2)
dynamicArr.read(3)
dynamicArr.read(4);
dynamicArr.read(5);
dynamicArr.read(6);
dynamicArr.read(7);
dynamicArr.read(8);


module.exports = DynamicArray;
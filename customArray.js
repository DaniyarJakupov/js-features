function customArray() {
  let arr = Object.create(customArray.prototype);
  // Add non-enumerable property length
  Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true
  });

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}

// Method to push new element to customArray and return new length
customArray.prototype.push = function(element) {
  // this ---> object on which .push() called
  this[this.length] = element;
  this.length++;
  return this.length;
};

// Method to pop the last element from customArray
customArray.prototype.pop = function() {
  // this ---> object on which .pop() called
  if (this.length > 0) {
    this.length--;
    const lastElement = this[this.length];
    delete this[this.length];
    return lastElement;
  }
  return undefined;
};

// Method to filter customArray based on provided function
customArray.prototype.filter = function(filterFunc) {
  // this ---> object on which .filter() called
  let newArray = customArray();
  for (key in this) {
    // Loop only over object's own properties, not prototype's
    if (this.hasOwnProperty(key)) {
      const element = this[key];

      if (filterFunc(element, key)) {
        newArray.push(element);
      }
    }
  }

  return newArray;
};

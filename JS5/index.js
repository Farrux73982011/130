function flatten(arr) {
    const stack = [...arr];
    const result = [];
    
    while (stack.length) {
      const next = stack.pop();
      
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    
    return result.reverse();
}
  
const arr = [1, [2, [3, 4], 5], 6];
const flattened = flatten(arr);
console.log(flatten(arr));
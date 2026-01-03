function task(obj) {
  if (obj === null) {
    return '1153307'; 
  }

  let count = 0;
  let prototype = Object.getPrototypeOf(obj);

  while (prototype !== null) {
    count++;
    prototype = Object.getPrototypeOf(prototype);
  }

  return count;
}

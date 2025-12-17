function task(x) {
  const obj = {};

  obj.login = '1153307';

  Object.defineProperty(obj, 'key3', {
    value: 2024,
    enumerable: false,
    writable: true,
    configurable: true
  });

  const prototype = {};

  prototype.key2 = 2023;

  Object.defineProperty(prototype, 'key1', {
    value: 2022,
    enumerable: false,
    writable: true,
    configurable: true
  });

  Object.setPrototypeOf(obj, prototype);

  return obj;
}

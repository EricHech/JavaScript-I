// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let increment = 0;
  return () => {
    increment++;
    return increment;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const obj = {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
  };
  return obj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let i = 0;
  return (...args) => {
    if (i < n) {
      i++;
      return cb(...args);
    }
    return null;
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  let x = 0;
  let duplicate = false;

  return (...args) => {
    Object.keys(cache).forEach((key) => {
      if (cache.key === cb(...args)) {
        duplicate = true;
        return cache[key];
      }
    });
    if (duplicate === false) {
      cache[x] = args;
      x++;
      duplicate = true;
      return cb(...args);
    }
  };
};


/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};

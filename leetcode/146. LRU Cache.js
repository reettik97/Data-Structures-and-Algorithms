// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

//================================================================================================
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
  } else {
      return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
  } else {
      if (this.cache.size < this.capacity) {
          this.cache.set(key, value);
      } else {
          const lru_key = this.cache.keys().next().value;
          this.cache.delete(lru_key);
          this.cache.set(key, value);
      }
  }
};

if (typeof globalThis.localStorage !== 'undefined' && typeof globalThis.localStorage.getItem !== 'function') {
  globalThis.localStorage.getItem = function () { return null; };
  globalThis.localStorage.setItem = function () { }; 
  globalThis.localStorage.removeItem = function () { };
}

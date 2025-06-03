The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.

A Promise that asynchronously settles with the eventual state of the first promise in the iterable to settle. 
In other words, it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is rejected. 

The returned promise remains pending forever if the iterable passed is empty. 
If the iterable passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) settled.
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 

This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 

It rejects when all of the input's promises reject (including when an empty iterable is passed)

The rejection reason is an AggregateError containing an array of rejection reasons in its errors property
# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- I refactored the function by using implicit type coercion and ternary operator for the conditions. This makes the code shorter and more readable by removing the unnecessary if-else statements, and by making the intent of the code more clear. Also, I removed unnecessary variable declaration and used the same variable throughout the function to make it more readable.

- I simplified the function by extracting the logic for creating a hash into a separate function createHash().Instead of having the code for creating a hash repeated multiple times in the main function, it's now in a separate function, which makes it easy to understand and test.

- I also added unit test cases to ensure that the existing functionality is not broken and the refactored code is working as expected. The test cases cover the all possible scenarios of the function.

  - ✓ should return trivial partition key if event is not passed (1 ms)
  - ✓ should return partitionKey if it is present in event
  - ✓ should return digest of event if partitionKey is not present in event (1 ms)
  - ✓ should return digest of partitionKey if its length is greater than max partition key length

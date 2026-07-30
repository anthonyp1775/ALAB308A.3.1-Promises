# ALAB 308A.3.1 - Promises

## Overview
This project explores JavaScript Promises, a fundamental concept for handling asynchronous operations. Promises provide a cleaner and more maintainable way to work with asynchronous code compared to traditional callback patterns.

## Objectives
- Understand the concept of Promises and their states (pending, fulfilled, rejected)
- Learn how to create and consume Promises
- Master Promise chaining and error handling
- Explore async/await syntax for Promise-based code
- Handle multiple asynchronous operations

## Key Concepts

### Promise States
- **Pending**: Initial state, operation has not completed yet
- **Fulfilled**: Operation completed successfully with a result value
- **Rejected**: Operation failed with an error reason

### Promise Methods
- `.then()` - Handle fulfilled state
- `.catch()` - Handle rejected state
- `.finally()` - Execute code after Promise settles
- `Promise.all()` - Wait for all Promises to resolve
- `Promise.race()` - Wait for first Promise to settle
- `Promise.allSettled()` - Wait for all Promises to settle

## Usage
Review the implementation files to understand Promise patterns and best practices.

## Resources
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

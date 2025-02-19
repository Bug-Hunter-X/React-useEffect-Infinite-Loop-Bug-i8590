# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React's `useEffect` hook: creating an infinite loop by modifying state within the effect's callback without proper dependency management. The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The `useEffect` hook in the `bug.js` file attempts to increment the `count` state variable on every render.  Because the effect doesn't specify any dependencies, it runs continuously, causing an infinite loop and crashing the application. 

## Solution

The `bugSolution.js` file demonstrates the correct approach. By adding `count` to the dependency array (`[]`), the effect only runs when the `count` variable changes.  The loop is corrected by including the setCount function as a dependency to trigger the re-render after the setCount call. This allows the count variable to be updated in a controlled way without causing an infinite loop.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the error in the console.
5. Check the `bugSolution.js` file for the fix.
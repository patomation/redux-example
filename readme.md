# A simple redux todo example
A simple redux todo example that provides a better example than the redux docs for how to set up `The Big Picture` or project structure. They don't explain how it all works. Just bits and pieces here and there.

Hopefully this example will demystify all the boilerplate necessary to get redux working.

## Action vs Reducers
The action reducer implementation should shed light on how the reducers are the STATE and the actions are... well... the events.
The action is called on a button click and it tells the reducer what value to be. All the reducer files do is change themselves if the application action type matches what they have defined.

In this example I show how to break these action and reducer concerns into individual files. This might look like a lot of work, but believe me when the app scales it will be nice to be able to see the global state (`/reducers/`) as file names instead of having to look inside a file to find the names of things...


## Getting Started
1. Install dependencies
```
$ npm install
```
2. Start project
```
$ npm start
```

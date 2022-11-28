# Getting Started with UHOne React Assessment

This assessment is designed to assess general knowledge related to React development. It covers knowledge of some basic hooks, making API requests, writing CSS to match a design, and some React development nuances. There are tests provided that can verify solutions for all problems except for the CSS task, but they are primarily meant to aid the candidate. Besides ability to solve the problems presented, reviewers will be assessing general knowledge and approach to problem solving. Candidates are encouraged to talk through their process and ask questions if needed.

## Prerequisites

- Node
- VS Code

## Getting started

- Clone or download the repo
- Open in VS Code
- Run `npm install`
- Run `npm test` to test the coding tasks

## Tasks

For all tasks do the following:

- Fix the component to insure the tests are passing

### Task 1 - Counter

- Should reset the count to 0 when it reaches 5

### Task 2 - State

- Accept a string value that gets printed to the DOM

### Task 3 - Props

- The `toggleMessageVisible` implementation should toggle the truthiness of the boolean returned by `isMessageVisible`
- `PropsPassingChild` should accept two props:
  - `isMessageVisible`
  - `toggleMessageVisible`
- `PropPassingChild` should only render the message if the `isMessageVisible` is `true`
- `PropPassingChild` button should render the word `hide` or `show` based on the value of `isMessageVisible`

### Task 4 - API Request

- Make a `GET` request using `fetch` to the following URL: https://run.mocky.io/v3/4a3e38b5-d00e-4094-bd4f-2abbd6be71cc
  - Create types to handle the data
  - Render the raw data/collection returned by this API endpoint onto the page
- Output the total number of users
- Loop over the users and render the each user with the `User` component which accepts a user record and the index as a prop, all props are required.
- **DO NOT** alter the `User` component.

### Task 5 - CSS

- Note this task doesn't have tests and the component does not have to match exactly, just get as close as possible
- Use `reference.png` as a prototype (If the image does not display, right click, reveal in file explorer, and open it in an image viewer)
- Implement that component using the static data that is already in the `CSS` component
- Add any necessary CSS to `CSSTask.css` or inline on the components

### Task 6 - Debugging

- Describe why the counter resets when the parent component is rerendered and provide a solution where the counter wont reset.
- **DO NOT** alter the the `ConditionalWrapper` component, the `Counter` component, or any types.

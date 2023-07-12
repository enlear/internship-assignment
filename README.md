# Enlear - Internship Assessment (Software Engineering)

This repository is an assessment that aims to build a TO-DO list that a candidate is required to complete to proceed to the second stage of internship interview at Enlear.

## Repository Walkthrough

This repository contains the following:

- `index.html` - The UI file that you are required to work with
- `index.js` - The JavaScript file that you are required to work with
- `styles.css` - The CSS (styling) file that you are required to work with

You can open the `index.html` file through the LiveServer extension or by opening the file through your Web Browser (Chrome is recommended)

- LiveServer - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Setup 

**Important**: Create a fork of this repository onto your own GitHub account and attempt this assessment in your forked repository.

## Tasks

The tasks that you are required to attempt are broken down under the following categories:

1. Bug Fixes
2. Code Completion
3. Feature Implementation

In total, there will be:

- 2 Bug Fixes
- 1 Code Completions
- 2 Feature Implementations

### Bug Fixes

#### Bug 01

Currently, the "Add" button does not display a background color. But, it is supposed to display the background color "green". Fix the code in the Add Button to ensure that the Button background-color is "green" (Hint: Stick to CSS Classes).

#### Bug 02

Currently, the "Remove" button displays black as the background color. But, it is supposed to display the background color "red". Fix the code in the Remove Button to ensure that the Button background-color is "red"

### Code Completion

There is already an implementation provided for the `Clear` button.

```
clearButton.addEventListener("click", () => {
  list.innerHTML = "";
});

```

It clears the List when the button is clicked. However, this is a new requirement that the list should be cleared _2_ seconds after the Button has been clicked. Update the code on the Button in such a way that the list is cleared two seconds after the button has been clicked.

### Feature Implementation

#### Feature 01

Currently, there is no "Add" feature implemented. However, an event listener for the button has been defined:

```
addButton.addEventListener("click", () => {});
```

Your task is to implement the functionality of adding a list item. When the add button is clicked, your code should be able to get the text that that the user has entered through the input box, and insert an un-ordered list item with the entered text. Your code should consider whitespaces, and must be accomplished without updating the HTML code.

#### Feature 02

Currently, there is no "Remove" feature implemented. However, an event listener for the button has been defined:

```
removeButton.addEventListener("click", () => {});
```

Your task is to implement the functionality of removing a list item. When the remove button is clicked, your code should remove a list item.
Your code should start removing items from the bottom.

## Submitting Guidelines

Once you are done with the assessment, push your changes to your fork and create a Pull Request with the title = "YOUR-NAME | SE Internship"
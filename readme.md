# ✖️⭕️ Tic-Tac-Toe Weekend Project

### Objective

### MVP

- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an `X` and `O` in the cell.
- Once occupied with an `X` or `O`, the cell cannot be played again.
- Provide a `Reset Game` button that will clear the contents of the board and set the next move to be `X`.

### Getting Started

- Create an `index.html` page.
- Create a `styles.css` file inside of a `css` folder.
- Create an `main.js` file inside of a `js` folder.
- Load the `styles.css` and `main.js` file into your `index.html` page.
- Start by writing the HTML and CSS that displays a 3x3 grid and the `Reset Game` button.

#### Suggested Model

Most computer programs, including games, are focused on manipulating data and displaying that data to a user.

The data structures, held in variables, that will maintain the **state** (data / status) of the game, is known as your game's **model**.

Possible ways to model your game board are:

- An array with 9 elements:

    ``` js
    // Using zero to represent cell is available
    var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    ```
- An array with three nested arrays (representing rows) each with three elements:

    ``` js
    // Use null to represent cell is available
    var board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    ```
- An object, fun, but might be a little overkill for tic-tac-toe.

- `null` and `0` are good choices to represent an empty cell.

- How would you check for a winner?  This is a great opportunity to write a little pseudocode.

- The type of data you decide upon to represent the state of a cell (empty, player X, or player Y), does not have to be the same as what you want to render in the DOM. For example, you may choose to use numbers, like `1` to represent player X, but render whatever you want for player X in the DOM (a "X", an image, etc.) instead of the `1`.

### More Hints

- Using a `class` attribute will not only help you set CSS styles for the cells, it can also be helpful on hooking up event listeners.
  
- Use `document.querySelector` to locate your target elements and add event listener(s) to them.

- The use of a single listener on a parent element of the cells is recommended (but not required). This is called event delegation and takes advantage of the fact that events "bubble" up through the DOM. In your listener function you could then access the `target` property of the event parameter to get to the cell actually clicked. Further, you then could check and parse the `id` of that clicked cell to determine how to update your game board's state. 
  
- Use well-named functions to group code that accomplishes a task, whether that task needs to be called multiple times or not. This will make your program easier to understand what is going on.

### Bonus

1. Display whose turn it is currently ("Player X" or "Player O").
2. Provide win logic and congratulate the winner with a winning message.
3. Provide logic for a cat's game (tie), also displaying a message.
4. Add your personal touch with unique styling.

## Have fun!


### Resources

[DOM Events](http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/)
[CodePen](http://codepen.io/)
[MDN Docs on the DOM](https://developer.mozilla.org/en-US/docs/Web/Events)

# UQT JavaScript Code Review Standards

Act as a senior code reviewer. When reviewing Pull Requests or generating code, strictly enforce the following coding standards.

## 1. General Formatting & Syntax
- **Indentation:** Use soft tabs set to **4 spaces**. Do not use 2 spaces.
- **Semicolons:** Always use semicolons at the end of statements.
- **Quotes:** Use single quotes `'` for strings. Use template literals `` ` `` for string interpolation (do not use concatenation).
- **Line Length:** Lines should not exceed 100 characters.
- **Commas:** Use trailing commas for all multiline arrays, objects, and function parameters. Do not use leading commas.
- **Braces:** Always use curly braces `{}` for all blocks (if, else, loops), even for single-line statements.

## 2. Variables & Declarations
- **Keywords:** Always use `const` or `let`. Never use `var`.
- **Grouping:** Group all `const` declarations together, followed by all `let` declarations.
- **Assignment:** Declare one variable per line. Do not chain assignments (e.g., `let a = b = c = 1;` is forbidden).
- **Mutation:** **Strictly Forbidden:** Do not use unary increment/decrement operators (`++` or `--`). Use `num += 1` or `num -= 1` instead.
- **Unused Variables:** Disallow unused variables.

## 3. Functions & Methods
- **Declaration Style:** Use named function expressions (e.g., `const foo = function() {}`) instead of function declarations.
- **Callbacks:** Use arrow functions for anonymous callbacks (e.g., `map((x) => x + 1)`).
- **Parameters:** Never name a parameter `arguments`. Use rest syntax `...args` instead.
- **Default Parameters:** Always place default parameters last.
- **Spacing:** Do not place a space between the function name and the argument list.
- **Iterators:** Do not use loops like `for-in` or `for-of`. Use higher-order functions: `map()`, `every()`, `filter()`, `find()`, `reduce()`, `forEach()`.

## 4. Objects & Arrays
- **Creation:** Use literal syntax `{}` and `[]`, not constructors (`new Object()`, `new Array()`).
- **Access:** Use dot notation `obj.prop` usually; use bracket notation `obj[var]` for variable access.
- **Destructuring:** Use object destructuring when accessing multiple properties. Use object destructuring for multiple return values.
- **Spreading:** Prefer object spread `...` over `Object.assign`. Use array spread `[...]` to copy arrays.

## 5. Modules & Files
- **Imports:** Always use ES6 `import` syntax (e.g., `import foo from './foo';`). **Do not** use `require`.
- **Default Exports:** Use `export default` for classes and functions.
- **Named Exports:** Use named `export` (e.g., `export const FOO = ...`) for constants, auxiliary variables, or types.
- **Forbidden:** **Do not** use `module.exports`.
- **Naming Conventions:**
  - Use camelCase for default exported functions.
  - Use PascalCase for default exported classes/constructors.
- **Filenames:** Use kebab-case (all lower case with dashes) for base filenames (e.g., `check-box.js`).
- **Structure:** End files with a single newline character.

## 6. Comparisons & Control Flow
- **Equality:** Always use `===` and `!==`. Never use `==` or `!=`.
- **Booleans:** Use shortcuts for booleans (e.g., `if (isValid)`), but explicit comparisons for strings and numbers.
- **Ternaries:** Avoid nested ternaries. Keep ternaries on a single line if possible.
- **Else Blocks:** If an `if` block returns, do not use an `else` block; just continue the code execution.

## 7. Testing & Async Logic
- **Handling Waiting:** If an action triggers an application load (e.g., a click), you must handle the waiting/loading on the very next line. Do not perform other steps before waiting.
  - *Bad:* `click(elem); otherAction(); wait();`
  - *Good:* `click(elem); wait(); otherAction();`
- **Getters/Setters:** Do not use JavaScript getters/setters. Use `getVal()` and `setVal()` methods instead.
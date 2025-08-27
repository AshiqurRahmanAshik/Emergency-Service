## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`.

- **`getElementById("id")`**

  - It Selects a single element with the given **id**.
  - Returns **one element** or `null` if not found.

- **`getElementsByClassName("class")`**

  - Selects all elements with the given class name.
  - Returns a **live HTMLCollection**.
  - By using `for...of` loop, we can access each element.

- **`querySelector("selector")`**

  - Accepts a **CSS selector** (like `#id`, `.class`, `div > p`).
  - Returns the **first matching element**.

- **`querySelectorAll("selector")`**
  - Accepts a CSS selector and returns **all matching elements**.
  - Returns a **static Nodelist**.

---

## 2. How do you Create and Insert a New Element into the DOM?

Steps:

1. Create an element → `document.createElement("tag")`.
2. Add text/content →

- `.innerText` (it is used for writing Text)
- `.innerHTML` (it is used for writing HTML).

3. Insert into the DOM using →

- `appendChild`(used to add a node as the last child of a parent element.)
- `append`(used to add multiple node and string)
- `insertBefore`(used to insert a new node before an existing child node of a parent element)

---

## 3. What is Event Bubbling and How Does It Work?

- **Event Bubbling** means that when an event happens on a child element, it first triggers the event on that child, then **bubbles up** to its parent, then the parent’s parent, and so on until it reaches the `document`.

---

## 4. What is Event Delegation in JavaScript? Why is it Useful?

- **Event Delegation** is a technique where you attach **one event listener** to a **parent element** instead of adding listeners to each child element individually.
- It works because events **bubble up** from the child to the parent, and you can detect the actual element that triggered the event using `event.target`.

**Benefits of Event Delegation:**

✅ Reduces memory usage (fewer event listeners).

✅ Works for dynamically added elements (elements added later will still trigger the listener).

✅ Simplifies code maintenance.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()`?

- **`preventDefault()`**

  - Stops the **default browser behavior** of an element.
  - Example: Prevents a form from submitting or a link from navigating to its URL.

- **`stopPropagation()`**
- Stops the event from bubbling up to parent elements.

---

# Project: Kid Allowance Debt Tracker (Mobile Web App)

## Goal
To create a simple, user-friendly, mobile-first web application where parents can track allowance advances (debts) given to their children, including the reason for the advance. Children should be able to view their own current debt status in a read-only portal.

## Target Users
1.  **Parents:** Can view all children's debts, add new debt entries with details (amount, reason), and see totals. (We'll start with a single shared "Parent" view for simplicity).
2.  **Children (4):** Can select their name to view their current total debt and a list of their individual debt entries. They cannot add or modify entries.

## Core Features
1.  **User Selection Screen:** A simple starting page to select who is using the app (e.g., "Parent", "Child 1 Name", "Child 2 Name", "Child 3 Name", "Child 4 Name").
2.  **Parent View:**
    * Displays a summary dashboard showing the current total debt for each child.
    * Ability to select a child to view their detailed debt history (list showing Date, Amount, Reason for each advance).
    * A simple form (perhaps on the child's detail view) to add a new debt entry:
        * Input field for Amount.
        * Input field for Reason (text description).
        * Button to Submit/Add the new debt entry (automatically records the current date).
3.  **Child View (Read-Only):**
    * Accessed after selecting their name on the start screen.
    * Clearly displays their *own* current total debt.
    * Shows a list of their individual debt entries (Date, Amount, Reason).
    * No ability to add, edit, or delete entries.
4.  **Data Persistence:** Data should be saved in the browser's `localStorage` so it isn't lost when the browser tab is closed.

## Design Philosophy
* **Mobile-First:** Design primarily for phone screens. Layout should be simple, vertical, and easy to navigate with a thumb.
* **Minimalist & Modern:** Clean interface, minimal colors, clear typography, good spacing. Avoid clutter.
* **User-Friendly:** Intuitive flow – easy to select user, view info, and (for parents) add entries. Clear labels and buttons.

## Technologies
* **HTML:** For the structure of the pages/views.
* **CSS:** For styling, layout (using Flexbox or CSS Grid for responsiveness), and achieving the minimalist/modern look.
* **JavaScript:** For all logic:
    * Handling user selection.
    * Showing/hiding different views (Parent/Child).
    * Handling form input for adding debts.
    * Storing and retrieving data from `localStorage`.
    * Calculating totals.
    * Dynamically updating the displayed lists and totals.

## Key Concepts Learned
* HTML Forms & Input Elements.
* CSS for Mobile Layouts (Media Queries, Flexbox/Grid, Viewport Units).
* JavaScript DOM Manipulation (selecting elements, changing content, adding elements).
* Handling User Events (button clicks, form submissions).
* Working with JavaScript Arrays and Objects (to structure the debt data).
* Using the Browser's `localStorage` API for simple data persistence.
* Basic Application State Management (e.g., knowing which user view is active).
* Structuring code with Functions.

## How Cursor Can Help
* "Generate the basic HTML structure for a user selection screen with buttons for 'Parent' and each child's name."
* "Create the HTML layout for the Parent dashboard view, showing placeholders for each child's total debt."
* "Design the HTML form for adding a new debt entry with fields for Amount and Reason."
* "Write CSS using Flexbox to make the views stack vertically and look good on a mobile screen."
* "Generate CSS for a clean, minimalist button style."
* "Write JavaScript to show the Parent view when 'Parent' is clicked and hide the other views."
* "Write a JavaScript function `addDebt(childName, amount, reason)` that saves the debt details (including today's date) into an array in `localStorage`."
* "How do I store and retrieve an array of JavaScript objects using `localStorage`?"
* "Write a JavaScript function `getDebts(childName)` that retrieves all debt entries for a specific child from `localStorage`."
* "Write a JavaScript function `calculateTotalDebt(childName)` that sums up the amounts from their debt entries."
* "Write JavaScript code to dynamically create list items (`<li>`) for each debt entry and display them in the correct view."
* "Explain how `localStorage.setItem()` and `localStorage.getItem()` work."
* "Refactor this JavaScript code into smaller functions."

## Stretch Goals (Once the core features work)
* **Simple Parent PIN:** Add a basic PIN prompt before showing the Parent view.
* **Pay Off Debt:** Add functionality for parents to reduce or clear a child's debt (e.g., a "Subtract Payment" form).
* **Editing/Deleting Entries:** Allow parents to modify or remove incorrect debt entries.
* **Nicer UI Elements:** Add simple icons or visual cues.
* **Sorting/Filtering:** Allow sorting the debt history list by date or amount.
* **(Advanced):** Replace `localStorage` with a simple cloud backend (like Firebase Firestore or Supabase) so data syncs between devices/users and isn't lost if browser data is cleared.

---

You can copy this into Cursor and start building piece by piece. Begin with the HTML structure for the selection screen, then maybe the Parent view structure. Ask Cursor to generate the CSS for mobile layout early on. Then move to JavaScript for showing/hiding views and finally tackle the data handling with `localStorage`. Good luck!
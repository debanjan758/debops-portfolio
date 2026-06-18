# Day 1

## What I Learned

* How to create a React project using Vite
* How to run a development server
* How React updates automatically using HMR
* How to initialize a Git repository
* How to make commits
* How to push code to GitHub
* How to resolve Git push issues

## Challenges Faced

* Repository not found error
* Remote repository already contained commits

## Solutions

* Verified the GitHub repository URL
* Merged remote and local changes successfully

## Reflection

Today I started building my flagship portfolio project while learning modern development practices.


# Day 2 - Portfolio Development

## What I Built
- Created a professional portfolio website structure.
- Added the following sections:
  - Hero Section
  - About Me
  - Skills
  - Projects
  - Footer
- Implemented a sticky navigation bar with smooth scrolling.
- Added social links (GitHub, LinkedIn, Email).
- Added a resume download feature.
- Improved responsiveness and hover effects.

## React Concepts Learned
- Breaking a large `App.jsx` into reusable components.
- Using `import` and `export default`.
- Organizing files using a professional React folder structure.

## CSS Concepts Learned
- Flexbox layouts.
- Hover effects and transitions.
- Sticky positioning.
- Basic responsive design using media queries.

## Git & GitHub
- Made regular commits and pushed updates to GitHub.
- Practiced debugging and fixing code issues independently.

## Challenges Faced
- Fixed navbar rendering issues.
- Corrected smooth scrolling bugs caused by incorrect `id` values.
- Resolved component import/export mistakes.
- Fixed CSS typos and class name mismatches.

## Reflection
Today, I learned how professional React applications are structured using reusable components. Refactoring my portfolio improved both the maintainability of the code and my understanding of React.

## Progress
✅ Hero Section  
✅ About Section  
✅ Skills Section  
✅ Projects Section  
✅ Navbar  
✅ Footer  
✅ Resume Download  
✅ Social Links  
✅ Smooth Scrolling  
✅ React Components  

## Next Steps
- Learn Props.
- Learn `map()` and dynamic rendering.
- Create reusable cards for skills and projects.

# Day 3 - React Props and Dynamic Rendering

## What I Built

* Refactored the Skills section using a reusable `SkillCard` component.
* Refactored the Projects section using a reusable `ProjectCard` component.
* Replaced repeated JSX code with dynamic rendering using arrays and `map()`.

## React Concepts Learned

### Props

Used props to pass data from parent components to child components.

Example:

```jsx
<SkillCard
  title="DevOps"
  technologies="Docker • Kubernetes • Linux"
/>
```

### Arrays

Stored skills and project information in arrays instead of hardcoding UI elements.

### map()

Used `map()` to dynamically render components from data arrays.

Example:

```jsx
skills.map((skill) => (
  <SkillCard />
))
```

## Benefits

* Reduced repetitive code.
* Improved code reusability.
* Made components easier to maintain and scale.
* Followed professional React development practices.

## Challenges Faced

* Understanding how props pass data between components.
* Learning how `map()` generates multiple components.
* Fixing import/export and object property errors.

## Reflection

Today I learned how React applications generate UI dynamically using props, arrays, and `map()`. This helped me write cleaner, more maintainable code and understand how professional React applications are structured.

## Progress

✅ Props
✅ Arrays
✅ map()
✅ SkillCard Component
✅ ProjectCard Component
✅ Dynamic Rendering

## Next Steps

* Learn React state using `useState`.
* Build interactive UI features.
* Add filtering and user interactions.

# Day 4 - React State and Interactive UI

## What I Built

* Added project filtering functionality.
* Implemented category-based filtering (All, DevOps, Web).
* Added a Dark/Light Theme Toggle.
* Implemented conditional rendering for project display.

## React Concepts Learned

### useState()

Learned how React stores and updates data using state.

Example:

```jsx
const [filter, setFilter] = useState("All");
```

### Event Handling

Handled user interactions using `onClick()`.

Example:

```jsx
<button onClick={() => setFilter("DevOps")}>
  DevOps
</button>
```

### Conditional Rendering

Displayed different content based on conditions.

Example:

```jsx
filteredProjects.length > 0
  ? <Projects />
  : <p>No projects found.</p>
```

### Filtering Data

Used the `filter()` method to display projects based on the selected category.

### Theme Toggle

Implemented Dark/Light Mode using React state.

Example:

```jsx
setDarkMode(!darkMode);
```

## Benefits

* Made the portfolio interactive.
* Improved user experience.
* Learned how state controls UI updates.
* Understood React's re-rendering behavior.

## Challenges Faced

* Understanding where `useState()` should be used.
* Learning the difference between state and props.
* Implementing filtering logic correctly.
* Understanding conditional rendering syntax.

## Reflection

Today I built my first interactive React features. I learned how state changes trigger automatic UI updates and how React applications respond to user actions in real time.

## Progress

✅ useState
✅ Event Handling
✅ Dynamic Project Filtering
✅ Conditional Rendering
✅ Theme Toggle
✅ Interactive UI

## Next Steps

* Learn advanced state management.
* Improve theme styling.
* Add animations and UI enhancements.
* Build more interactive portfolio features.

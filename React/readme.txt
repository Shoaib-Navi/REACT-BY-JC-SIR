react is single page application
react is js library created by facebook
hirerchy of dom ----window--document--html--headed body--
library ---is a collection of codes,
jquery is a library

framework----is a complete package of code with it's own functionalities and libraries
it has it's own rule,you don't have much flexibility
angular is an example of framework

jsx--javascript xml

how react actully work?
react virtual DOM webpage contains html codes

without react complete hirerchy reload and take same amount of time
so it consume most of the time
then react come in picture and it create vitual copy of hirerchy 

Each time you make a change in the code. DOM will be completly updated and rewritten .
this is an expensive operation and consumes lots of time
react provide this solution

the react core syntax is jsx-combination of html and js
const element = <h1>Hello!</h1>;

code will be translated into normal js by BABEL

//-----------------------------
1. What is React?
A JavaScript library for building user interfaces.
Developed and maintained by Meta (Facebook).
Component-based, Declarative, and Efficient.

2. Core Concepts
JSX: JavaScript + XML syntax.
Component: Reusable UI block.
Functional (with Hooks) and Class-based components.
Props: Read-only data passed to components.
State: Mutable data managed inside a component.

3. Hooks (for Functional Components)
useState() – for state.
useEffect() – for side effects (API calls, timers).
useContext() – for global state.

4. Component Lifecycle (Class-based)
componentDidMount(), componentDidUpdate(), componentWillUnmount()

5. Virtual DOM
React uses a virtual DOM to update UI efficiently.
Only updates the parts that changed.

6. React Router
For SPA (Single Page Application) navigation.
Example: <BrowserRouter>, <Route>, <Link>.

7. State Management
Local State – useState
Global State – Context API, Redux, Zustand, etc.

8. Common Packages
react-router-dom – Routing
axios or fetch – API calls
formik or react-hook-form – Form handling

9. Styling in React
CSS Modules – Scoped CSS files to avoid conflicts.
Styled Components – CSS-in-JS for dynamic styling.
Tailwind CSS – Utility-first CSS framework for fast UI development.
Inline Styles – Style applied directly via the style prop (as an object).

10. Forms in React
Controlled Components – Form elements controlled by state (value and onChange).
Uncontrolled Components – Use ref to access values directly.
Form Libraries – react-hook-form, formik for easier form state and validation.

11. Performance Optimization
React.memo – Prevent re-render if props don’t change.
useMemo – Memoize expensive calculations.
useCallback – Memoize functions to avoid unnecessary re-renders.
Code Splitting – Use React.lazy and Suspense for dynamic imports.

12. Error Handling
Error Boundaries (Class Components) – Catch JavaScript errors using componentDidCatch.
try/catch – For API calls or logic in async/await.
Fallback UI – Use conditional rendering or loading/error components.

13. Testing React Apps
Jest – JavaScript testing framework.
React Testing Library (RTL) – Testing React components by mimicking user interaction.
Enzyme (deprecated) – Previously used for component testing.

14. Deployment
Build Tool – npm run build generates optimized static files.
Hosting Options –
Vercel / Netlify – For React frontends.
Firebase / GitHub Pages – Easy to use for static hosting.
Custom Server (Node.js / Express) – Serve React build folder.
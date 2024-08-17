## How can you implement shared functionality across a component tree?

I can implement shared functionality across a component tree using React Context API, custom hooks, or Redux.

- React Context API: It allows for the creation of a centralized context that provides shared state or functions to any component within the tree, effectively avoiding prop drilling

- Custom hooks: It offers a way to encapsulate reusable logic, enabling the same functionality to be easily shared among multiple components without redundancy.

- Redux: It handles sharing by maintaining a single global state that can be accessed and modified by any component in the application through actions and reducers

## Why is the useState hook appropriate for handling state in a complex component?

- The useState hook is appropriate for managing states in a complex component because it provides a simple and easy way to declare state variables.
- It returns a state variable and a function to update that variable, allowing components to re-render when the state changes.

# Instructions for set up and run the project locally

1. **Clone the Repository:**
   ```
   git clone https://github.com/abuabddullah/buildHelpCenter.git
   ```
2. **Project Folder Structure:**

- After cloning the repository, you will get a **buildHelpCenter** folder and inside of it you will get 2 more folders for & named **backend & frontend**

- `buildHelpCenter/`

  - `backend/`
  - `frontend/`

3. **Installing Node Modules:**

- Now you have to open these 2 folder individually in 2 seperate terminals and install node modules individually
- - open in the **termianl(1)** file path: **_buildHelpCenter\backend>_**
- - open in the **termianl(2)** file path: **_buildHelpCenter\frontend>_**
- - - run command:
  ```
  npm i
  ```

4. **Run the project locally:**

- After successfull installation of node modules now just run the command **_npm run dev_** in the terminals(individually for both frontend & backend)
<!--
- `buildHelpCenter/`
  - `backend/`
    - `components/`
      - `Header.js`
      - `Footer.js`
    - `pages/`
      - `Home.js`
      - `About.js`
    - `App.js`
    - `index.js`
  - `public/`
    - `index.html`
    - `favicon.ico`
  - `package.json`
  - `README.md` -->

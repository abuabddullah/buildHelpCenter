# Project Summary:

## Frontend :

- The 2 Questions answerd in **README.md** file of frontend **_frontend\README.md_**
- Data fetched and Search functionality implemented
- For posting a new cards <button>Submit a request</button> button is used of Navbar

## Backend :

- By visiting [http://localhost:5000/ping](http://localhost:5000/ping) we can check is the server running locally
- Card Model is created and full filled all the requirement in addition,
- - the **Title** is required unique cause it will be used for **_`GET /cards/:title`_**
- **3 API endpoints** built as per requirment
- instructions on how to set up and run the project locally is written in **README.md** file of backend **_backend\README.md_** and also in this **README.md** file as bellow,

## Instructions for set up and run the project locally

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

- After successfull installation of node modules now just run the command **_npm run dev_** in the terminals(individually for both frontend & backend). So run command (**in both frontend & backend terminal**):
  ```
  npm run dev
  ```

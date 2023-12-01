# simpli-api-project

This is a RestAPI project for the tech assesment by simpli latam. It provides its resources to an app apart (https://github.com/et3858/simpli-webapp-project).
It uses NodeJS with NestJS and typescript.


## Steps

### Install NodeJS and npm

- Having NodeJS v16.x and above installed in your computer. You can get NodeJS [in this link](https://nodejs.org/en/download)
- Having npm v8.x and above installed in your computer.
- Having a terminal (either PowerShell or console prompt if you use Windows).

You can get the installation guide on Windows and Mac [in this link](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)


### Download the project

In this repository, go to "Code" button, then click on "Download ZIP" link in "Local" tab. Once it's downloaded, unzip the file into your preferred location and go to the project folder through the terminal.

Example:
```sh
cd path/to/the/project/simpli-api-project
```

### Install modules and dependencies

```sh
npm install
```

### Copy and rename the .env.example file to .env and set the dialect and database names (sqlite for this case)

```
DB_DIALECT="YOUR_DIALECT"
DB_NAME_DEV="YOUR_DB_NAME_DEV.sqlite3"
DB_NAME_TEST="YOUR_DB_NAME_TEST.sqlite3"
DB_NAME_PROD="YOUR_DB_NAME_PROD.sqlite3"
```

### Run the migrations

```sh
npx sequelize-cli db:migrate
```

### Run the seeders

```sh
npx sequelize-cli db:seed:all
```


### Run the server

```sh
npm run start
```

By default, the project will be running at http://localhost:3000



### Available endpoints

```sh
# Companies
GET    '/companies'
POST   '/companies'
GET    '/companies:id'
PUT    '/companies/:id'
DELETE '/companies/:id'

# Employees
GET    '/employees'
POST   '/employees'
GET    '/employees:id'
PUT    '/employees/:id'
DELETE '/employees/:id'
```

NOTE: POST and PUT endpoints require some fields to be included in their DTOs.<br>
For companies, thier fields are "name", "dni", "address" and "phone_number".<br>
For employees, thier fields are "ftrst_name", "last_name","dni", "email" and "company_id" (FK).




Happy coding.


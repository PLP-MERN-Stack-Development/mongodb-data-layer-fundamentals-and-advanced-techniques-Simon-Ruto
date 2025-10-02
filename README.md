# 📚 MongoDB Data Layer Assignment

## 📌 Project Overview
This assignment demonstrates the use of **MongoDB** through:
1. **mongosh** commands (saved in `queries.js`).
2. **MongoDB Compass** for local database management.
3. **Node.js scripts** (e.g., `insert_books.js`) for connecting and inserting data programmatically.

The project explores:
- Creating a `plp_bookstore` database
- Managing book collections
- Performing CRUD operations
- Running aggregation pipelines
- Documenting queries in JavaScript files
- Visualizing the database and data using screenshots

---

## 📂 Project Structure
```
MONGODB-DATA-LAYER/
│── examples/
│ ├── mongodb_connection_example.js
│ ├── mongodb_shell_example.js
│
│── node_modules/ # Installed Node.js dependencies
│
│── screenshots/ # Screenshots of database & sample data
│ ├── collection_image.png
│ ├── sample_data.png
│
│── insert_books.js # Node.js script to insert sample data
│── queries.js # MongoDB queries written in mongosh
│── package.json # Node.js project config
│── package-lock.json
│── MongoDB_Assignment_Guide.md
│── SETUP_INSTRUCTIONS.md
│── Week1-Assignment.md
│── README.md # Project documentation

```
---

## 🛠️ Tools & Technologies
- **MongoDB Community Server**
- **mongosh** (MongoDB Shell)
- **MongoDB Compass** (GUI client)
- **Node.js** (v18+ recommended)
- **npm** (for managing packages)

---

## ⚙️ Setup Instructions

### 1️⃣ Install Prerequisites 

- Install **Node.js**: [Download here](https://nodejs.org/)
- Install **MongoDB Community Server** and ensure it’s running locally
- Install **MongoDB Compass** (for GUI management)

### 2️⃣ Initialize Node.js Project
Inside your project folder:

```bash

npm init -y

```

### 3️⃣ Install Required Packages
```
npm install mongodb
```
### 4️⃣ Run Scripts

###To insert data into the database:

```
node insert_books.js
```
To run saved queries in mongosh:
```
copy and paste the queries in mongoshh
```
### Features Implemented

- Database Setup

  - Created plp_bookstore database
  
  - Added books collection

- CRUD Operations

  - Inserted book documents using Node.js (`insert_books.js`)
  
  - Queried, updated, and deleted books using mongosh (`queries.js`)

- Aggregation Pipelines

  - Average book price by genre
  
  - Author with the most books

  - Group books by publication decade and count totals

- Screenshots

  - collection_image.png → database collections
  
  - sample_data.png → populated book documents

### ▶️ How to Use

1. Clone or download this repository.

2. Install Node.js dependencies (`npm install`).

3. Start MongoDB locally and ensure Compass is connected to `mongodb://localhost:27017`.

4. Run `insert_books.js` to populate the database.

5. Open `queries.js` in *mongosh* to run queries.

6. Check results in *Compass* or via terminal.

### - 📖 Learning Outcomes

  - Learned to integrate MongoDB with Node.js.
  
  - Used mongosh for raw queries.
  
  - Documented all queries in `queries.js`.
  
  - Visualized collections using Compass.
  
  - Gained experience with npm project setup.

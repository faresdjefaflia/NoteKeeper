### **Local Setup and Preview Documentation**

Follow these steps to set up and preview the NoteKeeper project locally:

---

### **1. Clone the Repository**

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/faresdjefaflia/NoteKeeper.git
cd NoteKeeper
```

---

### **2. Frontend Setup (Nuxt.js)**

#### **Install Dependencies**:

Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
```

#### **Start the Development Server**:

Run the following command to start the frontend application:

```bash
npm run dev
```

The frontend will be available at:  
[http://localhost:3000](http://localhost:3000)

---

### **3. Backend Setup (Express.js)**

#### **Install Dependencies**:

Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

#### **Start the Backend Server**:

Run the following command to start the backend server:

```bash
npm run start-dev
```

The backend will be available at:  
[http://localhost:5000](http://localhost:5000)

---

### **4. Database Setup (MariaDB)**

1. Install MariaDB on your local machine (if not installed already).
2. Set up the database and tables as per the schema provided in the project.
3. Use **DBeaver** or a similar tool to connect to the MariaDB server and manage the database.

---

### **5. Testing API Endpoints with Postman**

1. Open **Postman** and configure requests to test API endpoints.
2. The base URL for the backend API is: `http://localhost:5000`.
3. You can test endpoints like `/register`, `/login`, `/notes`, etc., by sending requests with proper parameters (email, password, note content).


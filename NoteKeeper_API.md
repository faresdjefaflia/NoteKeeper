### **1. Register New User**
- **Method:** `POST`
- **URL:** `http://localhost:5000/register`
- **Request:**
  - **JSON Body:**
    ```json
    {
      "name": "Name",
      "email": "name@gmail.com",
      "password": "password"
    }
    ```

- **Response:** A new user account will be created.

---

### **2. Login**
- **Method:** `POST`
- **URL:** `http://localhost:5000/login`
- **Request:**
  - **JSON Body:**
    ```json
    {
      "email": "name@gmail.com",
      "password": "password"
    }
    ```

- **Response:** A `JWT` authentication token will be returned.

---

### **3. Show All Notes**
- **Method:** `GET`
- **URL:** `http://localhost:5000/notes/`
- **Authorization:**
  - **Bearer Token:** `<TOKEN>`
    - Use the token granted after logging in.

- **Response:** A list of all the notes for the authenticated user.

---

### **4. Add New Note**
- **Method:** `POST`
- **URL:** `http://localhost:5000/notes/`
- **Authorization:**
  - **Bearer Token:** `<TOKEN>`
  - **JSON Body:**
    ```json
    {
      "content": "this note for test"
    }
    ```

- **Response:** The new note will be added to the system.

---

### **5. Update Note**
- **Method:** `PUT`
- **URL:** `http://localhost:5000/notes/{id}`
- **Authorization:**
  - **Bearer Token:** `<TOKEN>`
  - **JSON Body:**
    ```json
    {
      "content": "this note is update"
    }
    ```

- **Response:** The note will be updated based on the provided `noteId`.

---

### **6. Delete Note**
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/notes/{id}`
- **Authorization:**
  - **Bearer Token:** `<TOKEN>`
  
- **Response:** The note with the specified `noteId` will be deleted.

---

### **Note:**
- **Authorization:** All requests require sending the authentication token in the `Authorization` header as `Bearer <TOKEN>`.
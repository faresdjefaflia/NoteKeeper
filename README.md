### Project Name: **NoteKeeper**

**Brief Description**:  
A web application for managing notes, allowing users to add, edit, and delete their notes with secure access using JWT and data validation via Joi. Built with Express.js as the server and MariaDB as the database. This is an educational project to test and showcase skills.

---

### **Technologies Used**  

#### **Frontend**:  
1. **Nuxt.js**: Framework for building advanced Vue.js applications.  
2. **Tailwind CSS**: Framework for flexible and easy-to-design user interfaces.
3. **Axios**: An HTTP library for making server requests and handling data efficiently.
4. **Pinia**: A state management library for Vue with a simple and modern structure.
5. **Vue.js**: A JavaScript framework for building interactive and customizable user interfaces.

#### **Database**:
1.**MariaDB**: A relational database management system used to store and manage structured data.
2.**DBeaver**: A universal database management tool that supports MariaDB (and other databases) for querying, managing, and visualizing data.

#### **Backend**:  
1. **Express.js**: Web application framework.  
2. **MariaDB**: Database for storing user and note data.  
3. **JWT jsonwebtoken**: For user authentication and secure access.  
4. **bcrypt**: For password encryption.  
5. **Joi**: For validating user input.

#### **Other Tools**:  
1. **Postman**: API testing.  
2. **Git**: Code management and collaboration.

---

### **Main Features**

1. **Authentication System**:
   - New user registration.  
   - Login with email and password.  
   - JWT tokens for identity verification.  

2. **Note Management**:
   - Add new notes.  
   - View user-specific notes.  
   - Edit notes.  
   - Delete notes.  

3. **Access Control**:
   - Use JWT for all protected endpoints.

4. **Data Validation**:
   - Validate inputs (email, password, content) using Joi.

---

### **Project Schema**  

#### **Database Structure**:  

1. **Users Table**:  
   - `id` (INT, PRIMARY KEY)  
   - `email` (VARCHAR, UNIQUE)  
   - `password` (VARCHAR)  
   - `created_at` (TIMESTAMP)  

2. **Notes Table**:  
   - `id` (INT, PRIMARY KEY)  
   - `user_id` (INT, FOREIGN KEY -> users.id)  
   - `note_content` (TEXT)  
   - `created_at` (TIMESTAMP)  
   - `updated_at` (TIMESTAMP)  

---

### **Detailed Steps (Backend)**  

#### **1. User Registration**:  
**Endpoint**: `POST /register`  
- **Input**:  
  - `email`  
  - `password`  
- **Process**:  
  - Validate input using Joi.  
  - Encrypt password with bcrypt.  
  - Add user to the database.  
- **Output**: Success or failure message.  

#### **2. User Login**:  
**Endpoint**: `POST /login`  
- **Input**:  
  - `name`
  - `email`  
  - `password`  
- **Process**:  
  - Validate input using Joi.  
  - Verify password.  
  - Generate a JWT token.  
- **Output**: JWT token.  

#### **3. Note Management**:  

- **Add Note**:  
  **Endpoint**: `POST /notes`  
  - **Input**: `note_content`  
  - **Process**:  
    - Validate content using Joi.  
    - Associate note with `user_id` from JWT.  
  - **Output**: Saved note.  

- **Get Notes**:  
  **Endpoint**: `GET /notes`  
  - **Input**: None.  
  - **Process**: Verify JWT.  
  - **Output**: User’s notes.  

- **Update Note**:  
  **Endpoint**: `PUT /notes/:id`  
  - **Input**: `note_content`  
  - **Process**:  
    - Verify JWT.  
    - Update note.  
  - **Output**: Updated note.  

- **Delete Note**:  
  **Endpoint**: `DELETE /notes/:id`  
  - **Input**: None.  
  - **Process**: Verify JWT.  
  - **Output**: Success or failure message.  

---

### **Security Features**  
- Use JWT in all protected routes via middleware.  

---

### **Data Validation Rules**  
- Validate emails.  
- Ensure passwords include uppercase, lowercase, and numbers.  
- Ensure notes are not empty.  

---

### **API Endpoints Overview**

| **Method** | **Endpoint**    | **Input**               | **Output**            |
|------------|-----------------|-------------------------|-----------------------|
| POST       | `/register`     | `name`,`email`, `password`     | Success/Failure       |
| POST       | `/login`        | `email`, `password`     | JWT Token             |
| POST       | `/notes`        | `note_content`          | New Note              |
| GET        | `/notes`        | None                    | List of Notes         |
| PUT        | `/notes/:id`    | `note_content`          | Updated Note          |
| DELETE     | `/notes/:id`    | None                    | Success/Failure       |

---

### API Pages and Details Table with URLs  

| **Page Name**        | **Description**                                  | **Endpoint (API)**       | **Inputs**                             | **Outputs**                                  | **URL**                   | **Notes**                                |
|----------------------|--------------------------------------------------|--------------------------|----------------------------------------|---------------------------------------------|---------------------------|------------------------------------------|
| Registration Page     | Register a new user                             | `POST /register`         | `email`, `password`                   | Success or failure message                  | `/register`               | Validates data with Joi, encrypts the password using bcrypt. |
| Login Page            | User login                                      | `POST /login`            | `email`, `password`                   | JWT Token                                   | `/login`                  | Validates credentials, returns a JWT token. |
| Add Note Page         | Add a new note                                  | `POST /notes`            | `note_content`                        | New note data                               | `/notes`                  | Validates note content with Joi and links it to the user_id from the token. |
| View Notes Page       | Display all user notes                          | `GET /notes`             | None                                   | List of user-specific notes                 | `/notes`                  | JWT token validation required before fetching data. |
| Edit Note Page        | Edit a specific note's content                  | `PUT /notes/:id`         | `note_content`                        | Updated note data                           | `/notes/:id`              | Validates the token and updates the note. |
| Delete Note Page      | Delete a specific note                          | `DELETE /notes/:id`      | None                                   | Success or failure message                  | `/notes/:id`              | The note must be linked to the user_id from the token. |


### Professional Technical Task Sequence for Project Development  

#### **Phase 1: Setup the Foundation**  
1. **Setup Backend Environment:**  
   - Install Express.js and required packages (e.g., bcrypt, JWT, Joi). / تثبيت Express.js والحزم المطلوبة (مثل bcrypt، JWT، Joi).  
   - Setup MariaDB and establish a connection with the server. / إعداد MariaDB وإنشاء اتصال مع الخادم.  

2. **Setup Frontend Environment:**  
   - Create a Nuxt.js project. / إنشاء مشروع Nuxt.js.  
   - Install and configure Tailwind CSS. / تثبيت Tailwind CSS وضبط إعداداته.  

---

#### **Phase 2: Backend Development**  
1. **Database Schema Creation:**  
   - Create the `users` table. / إنشاء جدول المستخدمين (`users`).  
   - Create the `notes` table. / إنشاء جدول الملاحظات (`notes`).  

2. **Develop Core Endpoints:**  
   - **`POST /register`:** User registration with password hashing and Joi validation. / إنشاء Endpoint لتسجيل المستخدم مع تشفير كلمة المرور والتحقق باستخدام Joi.  
   - **`POST /login`:** User login with data validation and JWT generation. / إنشاء Endpoint لتسجيل الدخول مع التحقق من البيانات وتوليد JWT.  

3. **Implement JWT Protection:**  
   - Develop Middleware to validate JWT tokens for protected routes. / إعداد Middleware للتحقق من صحة التوكن JWT لحماية المسارات.  

4. **Develop Note Management Endpoints:**  
   - **`POST /notes`:** Add a new note. / إنشاء Endpoint لإضافة ملاحظة جديدة.  
   - **`GET /notes`:** Retrieve user-specific notes. / إنشاء Endpoint لعرض الملاحظات الخاصة بالمستخدم.  
   - **`PUT /notes/:id`:** Update a note by its ID. / إنشاء Endpoint لتعديل ملاحظة باستخدام معرفها.  
   - **`DELETE /notes/:id`:** Delete a note by its ID. / إنشاء Endpoint لحذف ملاحظة باستخدام معرفها.  

5. **Test APIs with Postman:**  
   - Verify all endpoints individually for proper functionality. / اختبار جميع Endpoints باستخدام Postman للتحقق من وظائفها.  

---

#### **Phase 3: Frontend Development**  
1. **Design Core Pages:**  
   - Login and registration pages with input forms. / تصميم صفحات تسجيل الدخول والتسجيل مع النماذج.  
   - Notes listing page with a simple layout. / تصميم صفحة لعرض الملاحظات بتنسيق بسيط.  
   - Add and edit note forms. / تصميم نماذج لإضافة وتعديل الملاحظات.  

2. **Setup Axios for API Integration:**  
   - Implement login, registration, and note management requests. / تنفيذ طلبات تسجيل الدخول والتسجيل وإدارة الملاحظات باستخدام Axios.  
   - Store JWT in `LocalStorage` for authorization and session persistence. / تخزين JWT محليًا لاستخدامه في التفويض والحفاظ على الجلسة.  

3. **Add Page Protection:**  
   - Use Middleware to restrict access to pages based on JWT validity. / إضافة Middleware لتقييد الوصول إلى الصفحات بناءً على صلاحية JWT.  

---

#### **Phase 4: System Integration**  
1. **Connect Frontend with Backend:**  
   - Link login and registration forms to their respective API endpoints. / ربط نماذج تسجيل الدخول والتسجيل مع Endpoints الخاصة بها.  
   - Integrate notes management pages with APIs for adding, viewing, editing, and deleting notes. / دمج صفحات إدارة الملاحظات مع APIs لإضافة وعرض وتعديل وحذف الملاحظات.  

2. **Handle Errors Gracefully:**  
   - Display error messages from the backend on the frontend. / عرض رسائل الخطأ القادمة من الخادم في الواجهة.  
   - Implement automatic logout upon JWT expiration. / تنفيذ تسجيل خروج تلقائي عند انتهاء صلاحية JWT.  

---

#### **Phase 5: Project Enhancement**  

### **Future Steps**  
1. Add search and filter options for notes.  
2. Implement note categorization (e.g., important, personal).  
3. Enhance user interface using Nuxt.js and Tailwind CSS for a better experience.

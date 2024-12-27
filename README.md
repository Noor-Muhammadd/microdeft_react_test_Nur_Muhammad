# MicroDeft
# React Course Registration and Management

This project includes a set of features that allow users to register, log in, and manage courses. The application communicates with a backend API to perform the necessary operations like registration, login, and course management.

## Features

1. **Registration Form**:

   - Allows users to register by providing their name, email, and password.
   - Sends data to `https://react-interview.crd4lc.easypanel.host/api/register` using the POST method.

2. **Login Form**:

   - Allows users to log in using their email and password.
   - Sends data to `https://react-interview.crd4lc.easypanel.host/api/login` using the POST method.
   - On successful login, a token is returned which is used for authentication in further operations.

3. **Course Management Form**:

   - Allows users to create new courses by providing course details.
   - Sends course data to `https://react-interview.crd4lc.easypanel.host/api/course` using the POST method, along with the authorization token.

4. **Display Courses**:
   - Fetches courses from the server using the GET method.
   - Displays the courses in a card format.
   - Requires passing the authorization token for successful fetching.

---

## How to Run the Project

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- React.js

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/Noor-Muhammadd/microdeft_react_test_Nur_Muhammad
cd microdeft_react_test_Nur_Muhammad
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit http://localhost:5173/ in your browser to see the application in action.

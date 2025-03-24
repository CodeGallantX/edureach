# EduReach - Frontend Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Purpose](#purpose)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [File Structure](#file-structure)
6. [Installation](#installation)
7. [Routes](#routes)
8. [Acknowledgements](#acknowledgements)
9. [Explanation](#explanation)

---

## Introduction
EduReach is an open-source initiative aimed at tackling Nigeria's education crisis by leveraging technology to provide inclusive, quality education for all. The project focuses on addressing challenges such as limited digital access, teacher shortages, poor learning environments, and the gap between education and employability. This documentation provides a detailed overview of the frontend implementation of the EduReach project.

---

## Purpose
The purpose of EduReach is to:
- Provide **free, accessible, and quality education** to Nigerians, especially those in low-income and rural areas.
- Bridge the gap between education and employability by offering **digital literacy programs** and **practical problem-solving skills**.
- Create a scalable and innovative solution that can be adapted to other regions facing similar educational challenges.

---

## Features
- **User Authentication**: Sign up, login, password reset, and email verification.
- **Dashboard**: A centralized hub for users to access courses, track progress, and manage their learning.
- **Course Management**: Browse courses, view course details, and access course content.
- **Learning Progress**: Track ongoing courses and completed courses in "My Learning" and "My Library" sections.
- **Profile Management**: Edit user profile and manage settings.
- **Notifications**: Stay updated with important alerts and updates.
- **Responsive Design**: Built with TailwindCSS for a seamless experience across devices.

---

## Tech Stack
- **Frontend Framework**: React (v19.0.0)
- **Styling**: TailwindCSS
- **Routing**: React Router DOM (v7.3.0)
<!-- - **State Management**: React Context API, and Redux -->
- **API Calls**: Axios (v1.8.3)
<!-- - **Animation**: AOS (Animate On Scroll, v2.3.4) -->
- **Build Tool**: Vite (v6.2.0)
- **Linting**: ESLint (v9.21.0)
- **Version Control**: Git (GitHub)

---

## File Structure
The project follows a modular structure for better maintainability and scalability. Below is the file structure:

```
── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
    ├── ariana-grande.png
    ├── background.jpeg
    ├── favicon.ico
    ├── logo-white.png
    ├── logo.png
    └── vite.svg
├── src
    ├── App.css
    ├── App.jsx
    ├── assets
    │   └── react.svg
    ├── components
    │   ├── auth
    │   │   ├── ForgotPassword.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── OTPForm.jsx
    │   │   ├── ResetPassword.jsx
    │   │   ├── SideIll.jsx
    │   │   └── SignUpForm.jsx
    │   └── dashboard
    │   │   ├── Banner.jsx
    │   │   ├── BtnComp.jsx
    │   │   ├── Card.jsx
    │   │   ├── CoursesOverview.jsx
    │   │   ├── Header.jsx
    │   │   ├── OngoingCourses.jsx
    │   │   ├── RecommendedCourses.jsx
    │   │   ├── SearchBox.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── courses
    │   │       ├── CourseContent.jsx
    │   │       └── VideoPlayer.jsx
    │   │   ├── learning
    │   │       ├── AuthorDetails.jsx
    │   │       ├── CourseContent.jsx
    │   │       ├── CourseDetails.jsx
    │   │       ├── CourseSummary.jsx
    │   │       └── LearningCourse.jsx
    │   │   └── profile
    │   │       ├── EditProfile.jsx
    │   │       └── ProfileCard.jsx
    ├── index.css
    ├── main.jsx
    ├── pages
    │   ├── auth
    │   │   ├── forgot-password.jsx
    │   │   ├── login.jsx
    │   │   ├── reset-password.jsx
    │   │   ├── signup.jsx
    │   │   └── verification.jsx
    │   ├── dashboard
    │   │   ├── Sidebar.jsx
    │   │   ├── courses.jsx
    │   │   ├── courses
    │   │   │   ├── course-details.jsx
    │   │   │   └── single-course.jsx
    │   │   ├── dashboard.jsx
    │   │   ├── learning
    │   │   │   └── course-list.jsx
    │   │   ├── my-learning.jsx
    │   │   ├── my-library.jsx
    │   │   ├── notifications.jsx
    │   │   ├── profile.jsx
    │   │   ├── profile
    │   │   │   └── edit-profile.jsx
    │   │   └── settings.jsx
    │   ├── home.jsx
    │   └── teacher
    │   │   ├── Sidebar.jsx
    │   │   ├── courses.jsx
    │   │   ├── dashboard.jsx
    │   │   ├── my-learning.jsx
    │   │   ├── my-library.jsx
    │   │   ├── notifications.jsx
    │   │   ├── profile.jsx
    │   │   └── settings.jsx
    └── redux
    │   ├── features
    │       └── userSlice.js
    │   └── store.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## Installation
To set up the EduReach frontend locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/edureach.git
   cd edureach
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview the Build**:
   ```bash
   npm run preview
   ```

---

## Routes
The application uses **React Router DOM** for routing. Below are the defined routes:

- **Authentication Routes**:
  - `/auth/signup` - User signup page.
  - `/auth/login` - User login page.
  - `/auth/verification` - Email verification page.
  - `/auth/forgot-password` - Forgot password page.
  - `/auth/reset-password/:token` - Reset password page.

- **Dashboard Routes**:
  - `/dashboard` - Main dashboard page.
  - `/courses` - Browse all courses.
  - `/courses/single-course` - View a single course.
  - `/courses/course-details` - Course details page.
  - `/my-learning` - Track ongoing courses.
  - `/my-library` - View completed courses.
  - `/notifications` - View notifications.
  - `/profile` - User profile page.
  - `/profile/edit` - Edit user profile.
  - `/settings` - User settings page.

  **Teacher Dashboard Routes**
  - `/teacher/dashboard` - Teacher dashboard page.
  - `/teacher/courses` - Browse all courses.
  - `/teacher/live` - View live courses.
  - `/teacher/notifications` - View notifications.
  - `/teacher/profile` - Teacher profile page.
  - `/settings` - Teacher settings page.

---

## Acknowledgements
EduReach is a collaborative effort under the **Talenvo X Cleva** initiative, aimed at solving **SDG 4: Quality Education for All**. We extend our gratitude to:
- **Talenvo** for providing the platform and resources to drive this initiative.
- **Cleva** for their support in making this project open-source and accessible to all.

---

## Explanation
EduReach is designed to address the critical challenges in Nigeria's education system by leveraging technology. The frontend is built with **React** and **TailwindCSS** to ensure a responsive and user-friendly interface. The modular file structure allows for easy scalability, and the use of **React Router DOM** ensures seamless navigation across the application.

The project is **100% open-source**, meaning anyone can contribute to its development or adapt it for their own use. By focusing on **digital access**, **employability**, and **quality learning**, EduReach aims to empower millions of Nigerians with the skills they need to succeed in the modern world.

---
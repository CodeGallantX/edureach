import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";
// import Verification from "./pages/auth/verification";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import Dashboard from "./pages/dashboard/dashboard";
import Courses from "./pages/dashboard/courses";
import SingleCourse from "./pages/dashboard/courses/single-course";
import CourseDetails from "./pages/dashboard/courses/course-details";
import MyLearning from "./pages/dashboard/my-learning"
import MyLibrary from "./pages/dashboard/my-library"
import Profile from "./pages/dashboard/profile"
import ProfileEdit from "./pages/dashboard/profile/edit-profile"
import Settings from "./pages/dashboard/settings"

// Teacher
import TeacherDashboard from "./pages/teacher/dashboard";
import TeacherCourses from "./pages/teacher/courses";
import TeacherLive from "./pages/teacher/live"
import TeacherProfile from "./pages/teacher/profile"
// import TeacherProfileEdit from "./pages/profile/edit-profile"
import TeacherNotifications from "./pages/teacher/notifications"
import TeacherSettings from "./pages/teacher/settings"

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}/> */}
      <Route path="/" element={<Login />}/>
      <Route path="/auth/signup" element={<SignUp />}/>
      <Route path="/auth/login" element={<Login />}/>
      {/* <Route path="/auth/verification" element={<Verification />}/> */}
      <Route path="/auth/forgot-password" element={<ForgotPassword />}/>
      <Route path="/auth/reset-password/:token" element={<ResetPassword />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/courses/single-course" element={<SingleCourse />}/>
      <Route path="/courses/course-details" element={<CourseDetails />}/>
      <Route path="/my-learning" element={<MyLearning />}/>
      <Route path="/my-library" element={<MyLibrary />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/profile/edit" element={<ProfileEdit />}/>
      <Route path="/settings" element={<Settings />}/>


      {/* Teachers */}
      <Route path="/teacher/dashboard" element={<TeacherDashboard />}/>
      <Route path="/teacher/courses" element={<TeacherCourses />}/>
      <Route path="/teacher/live" element={<TeacherLive />}/>
      <Route path="/teacher/notifications" element={<TeacherNotifications />}/>
      <Route path="/teacher/profile" element={<TeacherProfile />}/>
      {/* <Route path="/teacher/profile/edit" element={<TeacherProfileEdit />}/> */}
      <Route path="/teacher/settings" element={<TeacherSettings />}/>
    </Routes>
  )
}

export default App;
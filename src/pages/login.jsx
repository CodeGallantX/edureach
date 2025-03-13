import LoginForm from "../components/LoginForm"
import SideIllustration from "../components/SideIll"

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <SideIllustration />
      <LoginForm />
    </div>
  )
}

export default App

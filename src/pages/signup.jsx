import SignUpForm from "../components/SignUpForm"
import SideIllustration from "../components/SideIll"

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <SideIllustration />
      <SignUpForm />
    </div>
  )
}

export default App

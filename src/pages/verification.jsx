import OTPForm from "../components/OTPForm"
import SideIllustration from "../components/SideIll"

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <SideIllustration />
      <OTPForm />
    </div>
  )
}

export default App

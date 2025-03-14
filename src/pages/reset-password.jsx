import ResetPassword from "../components/ResetPassword"
import SideIllustration from "../components/SideIll"

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-start md:items-center">
      <SideIllustration />
      <ResetPassword />
    </div>
  )
}

export default App

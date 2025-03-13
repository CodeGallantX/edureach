const SideIll = () => {
    return (
        <div className="hidden md:block h-[100vh] relative">
            <div className="w-full h-full">
                <img src="/background.jpeg" alt="grainy background - EduReach" className="object-cover w-full h-full" />
            </div>
            <div className="w-2/3 absolute flex flex-col items-start justify-center text-white top-20 gap-20 left-10">
                <div>
                    <img src="/logo.png" alt="EduReach logo" />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="text-5xl font-bold">Experience a new Learning Journey</h1>
                    <p className="text-lg">Unlock endless opportunities with expert-led courses, interactive learning, and career-boosting skills - all in one place.</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default SideIll

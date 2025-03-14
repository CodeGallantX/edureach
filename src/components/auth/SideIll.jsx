const SideIll = () => {
    return (
        <div className="hidden md:block h-[100vh] relative">
            <div className="w-full h-full">
                <img src="/background.jpeg" alt="grainy background - EduReach" className="object-cover w-full h-full" />
            </div>
            <div className="w-3/4 absolute flex flex-col items-start justify-center top-20 gap-20 left-12">
                <div>
                    <img src="/logo.png" alt="EduReach logo" />
                </div>
                <div className="flex flex-col items-start justify-center space-y-7 text-white">
                    <h1 className="text-5xl font-bold">Experience a new Learning Journey</h1>
                    <p className="text-lg">Unlock endless opportunities with expert-led courses, interactive learning, and career-boosting skills - all in one place.</p>
                </div>
                <div className="bg-[#FFC2B2] p-6 rounded-xl space-y-3 text-black">
                    <p>EduReach transformed my career! The structured courses and real-world projects gave me the confidence and skills to land my dream job. I went from a beginner to a professional in just few months!</p>
                    <div className="flex flex-row items-center justify-start gap-4">
                        <img src="/ariana-grande.png" alt="" className="w-12 h-auto rounded-full object-cover" />
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-bold">Ariana Grande</h4>
                            <p className="text-xs">Visual Designer, Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideIll

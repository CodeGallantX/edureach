const Banner = ({page}) => {
    return (
        <div className="hidden md:block flex flex-col items-start justify-start p-4">
            <h2 className="text-2xl font-semibold">{page.title}</h2>
            <p>{page.description}</p>
        </div>
    )
}

export default Banner
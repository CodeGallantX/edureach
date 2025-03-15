const Banner = (page) => {
    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl">{page.title}</h2>
            <p>{page.description}</p>
        </div>
    )
}

export default Banner
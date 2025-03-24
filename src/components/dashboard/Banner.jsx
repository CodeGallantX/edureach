const Banner = ({page, style}) => {
    return (
        <div className={`flex flex-col items-start justify-start p-4 ${page.style}`}>
            <h2 className="text-2xl font-semibold">{page.title}</h2>
            <p>{page.description}</p>
        </div>
    )
}

export default Banner;
import './Description.css'

function Description({title, des, image, rev}) {
    return (
        <>
            <div className={rev ? "main-reverse" : "main"}>
                <div className={rev ? "left-reverse" : "left"}>
                    <h2>{title}</h2>
                    <p>{des}</p>
                </div>
                <div className={rev ? "right-reverse" : "right"}>
                    <img src={image} alt="oops!"/>
                </div>
            </div>
        </>
    )
}

export default Description;
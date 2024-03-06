
const Card = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
            console.log("ok")
        }
    }



    return (
        <div className={`border-2 rounded-xl
       ${bigShoeImg === imgURL.bigShoe ?
         "border-coral-red" : "border-transperent"}
        cursor-pointer max-sm:flex-1
    `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
                <img src={imgURL.thumbnail} alt="shoes" width={127} height={103} className="object-contain" />
            </div>
        </div>
    )
}

export default Card

import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-8">
                <h2 className="mb-6 text-6xl font-bold text-white text-decoration-line">
                    Foodie World!
                    
                </h2>
                <p className="font-semibold md:w-15/20 text-lg text-purple-100 py-5 text-align:justify">Food is the basic necessity of every organism. 
                    Food is a substance that we consume in order to derive energy to run our body and nutrition to grow.
                     All living organisms must have food to survive.
                      It provides nourishment to our body system and makes sure 
                      that it works smoothly. </p>
                <p className="font-semibold text-lg text-black-600 py-2 text-decoration-line text-align:justify">
                    Get Started Today!
                </p>
                <div className="btn-container">

                    <a href="/menu" className="text-green-400 hover:text-red-500 font-bold text-decoration-line px-3">
                      <Button>See Menu</Button>
                      
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-90 px-15 flex justify-end">
                <img src={require("../assets/images/koreanda.png")} alt="banner" className="max-h-95 " />
            </div>
        </div>
    )
}
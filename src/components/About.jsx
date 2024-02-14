import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg text-2xl text-justify-center ">
                    Food variety refers to the wide range of foods available, including vegetables, fruits, cereals, meat, fish, and dairy products. It provides nourishment from many dietary groups in the necessary amounts. Eating a wide variety of foods allows us to obtain all of the nutrients we require for a balanced diet. Food variety also ensures that we do not get overly reliant on a single nutrient that can only be obtained by eating a specific type of food.
                    A variety in our food and diet ensures that we are eating nutritious and healthy foods while trying new things to maintain a balanced diet to avoid boredom too. It also ensures that our bodies receive all of the nutrients they require to function properly. Even within a single food group, such as fruits and vegetables, the diversity of nutrients available varies. Spinach, for example, is high in folate, but oranges are high in Vitamin C. Variety also ensures that we are not overly reliant on a single nutrient that can only be obtained by consuming a specific sort of food.
                    
                    <p>Hence we can here briefly summarize the importance of food variety:</p>

As we obtain different nutrients from different food kinds, variety in diet provides us with all of the nutrients we need for a healthy body.
Food variety provides us with a wide range of food options to pick from when it comes to our diet. It assists us in choosing the right type of meals for our body.
We never get bored eating the same thing since there is so much variation in food.
                    A variety of food consists of an array of nutrients. There is a plentitude of food products available across various regions for consumers to choose from. India has a plethora of food diversity. We have 29 different states, all having their specialty meals consisting of a platter of nutrition and taste. As food variety varies as per climatic conditions and food sources, a region-wise platter of a meal also varies as per these factors.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}
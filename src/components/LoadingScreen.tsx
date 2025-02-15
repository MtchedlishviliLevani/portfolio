import BgImage from "../assets/Frame 3.png"

export default function LoadingScreen() {
    return (

        <div className="loading-screen">
            <div


                className='w-full h-screen bg-loadedScreenBgColor flex justify-center items-center  '
            >
                <img
                    src={BgImage} className='w-[300px] ' alt="loading-screen-image" />

            </div>
        </div >
    )
}

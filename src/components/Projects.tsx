import React from 'react'

function Projects() {
    return (
        <div style={{
            background: 'linear-gradient(rgba(20, 106, 159, 0.68), rgb(135, 52, 52))'
        }} className='w-[100%] min-h-[100vh] h-[100%]'>
            <div className="container">
                <div className='py-[30px]'>
                    <h2 className='text-[48px] text-white text-center '>Projects</h2>
                </div>

                <div className='flex gap-[50px] justify-center'>
                    <div className='bg-[#2f114d78] rounded-lg w-[300px] h-[400px] '>

                        <img className=' rounded-t-lg  cursor-pointer group-hover:text-blue-700 '
                            src="" alt='project-img' />
                        <h2 className='text-center text-[#ff2d9f] mt-[40px] text-[24px] font-bold group group-hover:text-red-400'>ManageMent web APP</h2>
                        <div className='flex gap-[20px] items-center mt-[20px] container justify-center'>
                            <button className='  text-white text-[24px] '>See Live</button>
                            <img className='w-[40px] cursor-pointer' src="/icons_github-fill.png" alt="github-icon" />
                        </div>

                    </div>
                    <div className='w-[300px] h-[400px] bg-white rounded-lg'></div>
                    <div className='w-[300px] h-[400px] bg-white rounded-lg'></div>

                </div>
            </div>
        </div>
    )
}

export default Projects

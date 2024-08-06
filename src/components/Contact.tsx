
function Contact() {

    return (
        <section
            style={{ background: "linear-gradient(to bottom, #873434, #146a9fad)" }}
            className="w-full h-[100vh] "
        >
            <div className="pt-[70px] container">
                <div className="text-[#ffffff]">
                    <h2 className=" font-bold text-[24px]">
                        Let’s work together
                    </h2>
                    <p className="mt-[30px]">
                        I’m always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision.
                    </p>
                </div>
                <div className="mt-[35px]">
                    <h3 className="text-[30px] font-bold text-[#fff]">Contact Me</h3>
                    <div className="flex gap-[15px] items-center mt-[10px]">
                        <img src="gmail-icon-logo-svgrepo-com.svg" alt="" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="40" height="40" fill="#0e76a8"><path d="M5.3 22H.6V7h4.7v15zM2.8 5.2C1.1 5.2 0 4 0 2.6 0 1.1 1.1 0 2.9 0s2.8 1.1 2.8 2.6c0 1.4-1.1 2.6-2.9 2.6zM24 22h-5.3v-7.7c0-2-.8-3.4-2.7-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.8-.1 1.2V22H8.1s.1-13.7 0-15h5.2v2.3c.3-1 2-2.5 4.7-2.5 3.3 0 5.9 2.2 5.9 6.8L24 22z"></path></svg>
                    </div>
                </div>
                {/* active color for focus navy */}
                <form action="" className="flex flex-col gap-3 bg-transparent mt-[35px]">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#fff]">Full Name</label>
                        <input type="text"
                            className=" focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md" /></div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            className=" focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md" /></div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Message</label>
                        <textarea rows={3} name="message" id=""
                            className=" focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md"></textarea>
                    </div>

                </form>

            </div>
        </section>
    );
}

export default Contact;

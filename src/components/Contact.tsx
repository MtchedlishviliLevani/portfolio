import React, { useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = forwardRef((_, ref) => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        if (form.current) {
            try {
                await emailjs.sendForm(
                    "service_lbarcv5",
                    "template_y296mmk",
                    form.current,
                    "keQTjMSI_OtRU0Fjq"
                );
            } catch (error) {
                console.log("FAILED...", (error as Error).message);
            }
            form.current.reset(); // Reset the form
        }
    };

    const { inView, ref: inViewRef } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    // Use ref passed from the parent and the inView ref to manage visibility.
    return (
        <motion.section
            id="contact"
            ref={ref} // Attach the ref here
            style={{ background: "linear-gradient(to bottom, #873434, #146a9fad)" }}
            className="w-full h-full"
        >
            <motion.div
                ref={inViewRef} // Attach inView ref to track visibility
                initial={{ opacity: 0, y: 50 }} // Start slightly below and transparent
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Slide up into view and fade in
                transition={{ duration: 0.6, ease: "easeOut" }} // Smooth the transition
            >
                <div className="pt-[70px]  pb-[70px] container">
                    <div className="text-[#ffffff]">
                        <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[36px]">
                            Let’s work together
                        </h2>
                        <p className="mt-[30px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
                            I’m always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision.
                        </p>
                    </div>
                    <div className="mt-[35px]">
                        <h3 className="text-[30px] md:text-[36px] font-bold text-[#fff]">
                            Contact Me
                        </h3>
                        <div className="flex gap-[15px] items-center mt-[10px] md:mt-[15px]">
                            <a href="mailto:example@email.com">

                                <img
                                    loading="lazy"
                                    src="gmail-icon-logo-svgrepo-com.svg"
                                    alt="Gmail icon"
                                />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/levan-mtchedlishvili-b97063242/">   <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 22"
                                width="40"
                                height="40"
                                fill="#0e76a8"
                            >
                                <path d="M5.3 22H.6V7h4.7v15zM2.8 5.2C1.1 5.2 0 4 0 2.6 0 1.1 1.1 0 2.9 0s2.8 1.1 2.8 2.6c0 1.4-1.1 2.6-2.9 2.6zM24 22h-5.3v-7.7c0-2-.8-3.4-2.7-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.8-.1 1.2V22H8.1s.1-13.7 0-15h5.2v2.3c.3-1 2-2.5 4.7-2.5 3.3 0 5.9 2.2 5.9 6.8L24 22z"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 bg-transparent mt-[35px] max-w-[700px]"
                    >
                        <div className="md:flex md:gap-[30px] md:items-center md:justify-between">
                            <div className="flex flex-col md:flex-grow-[1] gap-2">
                                <label htmlFor="user_name" className="text-[#fff]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="text-white focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:flex-grow-[1]">
                                <label htmlFor="user_email" className="text-[#fff]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="text-white focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[#fff]">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={3}
                                className="text-white focus-within:border-[brown] focus-within:border-[2px] bg-transparent outline-none border-[#ffffff80] border py-2 px-3 rounded-md"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="styling">
                            Send
                        </button>
                    </form>
                </div>
            </motion.div>
        </motion.section>
    );
});

export default Contact;

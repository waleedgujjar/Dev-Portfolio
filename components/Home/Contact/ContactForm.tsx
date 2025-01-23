import React from "react";

const ContactForm = () => {
    return (
        <div className="bg-[#1f1f1f] p-4 rounded-lg sm:p-10">
            <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">Lets Work together!</h1>
            <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">I specialize in creating user-friendly interfaces, efficient backends, and dynamic APIs. With a focus on clean code and continuous learning, I deliver scalable, high-quality solutions.</p>
            <form className="mt-8 block w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                     <input
                     type="text"
                     placeholder="First Name"
                     className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                     border-gray-200 border-opacity-15 outline-none w-full"
                     />
                     <input
                     type="text"
                     placeholder="Last Name"
                     className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                     border-gray-200 border-opacity-15 outline-none w-full"
                     />
                </div>
                <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
                     <input
                     type="email"
                     placeholder="Email Address"
                     className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                     border-gray-200 border-opacity-15 outline-none w-full"
                     />
                     <input
                     type="text"
                     placeholder="Phone Number"
                     className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                     border-gray-200 border-opacity-15 outline-none w-full"
                     />
                </div>
                <div>
                    <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
                    border-[1.5px] border-gray-200 border-opacity-15 outline-none">
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">FullStack Development</option>
                    </select>
                </div>
                <textarea
                className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
                rows={7}
                placeholder="Message"
                ></textarea>
                <div className="mt-4">
                    <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5e2fb7] ">Send Message</button>
                </div>
            </form>
        </div>
    );
};
export default ContactForm;
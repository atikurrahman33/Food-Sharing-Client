

const DirectMessage = () => {
   
    return (
        <div>
            
            <div data-aos="fade-up" className=" text-gray-100 mx-auto">
                <div
                    className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg border mb-10">
                    <div  data-aos="fade-down-right" className="flex flex-col justify-between">

                        <div className="mt-8 text-center">
                            <img src="https://i.ibb.co/BPPm2N2/contact.jpg"alt="" />
                        </div>
                    </div>
                    <div  data-aos="fade-down" className="">
                        <div>
                            <h2 className='py-10 text-4xl font-bold text-orange-700'>Contact Us</h2>
                        </div>
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="mt-8">
                            <button 
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DirectMessage;




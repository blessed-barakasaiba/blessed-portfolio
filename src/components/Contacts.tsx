
const Contacts = () => {
    return (
        <div id="contacts" className="py-12">
            <div>
                <form action="">
                    <h2 className="text-center font-bold text-gray-900 bg-red-400 bg-clip-text text-5xl mb-5 text-transparent">Contact Us</h2>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-bold mb-1">Full Name</label>
                        <input type="text" className="px-4 py-2 border border-gray-400 rounded-md w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-bold mb-1">Email</label>
                        <input type="email" className="px-4 py-2 border border-gray-400 rounded-md w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-bold mb-1">Subject</label>
                        <input type="text" className="px-4 py-2 border border-gray-400 rounded-md w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-bold mb-1">Message</label>
                        <textarea name="message" id="message" className="px-4 py-2 border border-gray-400 rounded-md w-full"></textarea>
                    </div>

                    <button type="submit" className="px-4 py-2 w-full border border-gray-600 bg-green-500 hover:bg-green-600 text-white text-xl rounded-md  ">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
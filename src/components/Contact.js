import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call)
        console.log("Form submitted: ", formData);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 m-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
                {success && (
                    <p className="mt-4 text-green-600 font-semibold">Message sent successfully!</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import emailjs from 'emailjs-com'
export default function Contact() {
    const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

 const handleSubmit = (e) => {
  e.preventDefault();
 
  // Basic validation
  if (!formData.name.trim()) {
    setAlertType("error");
    setAlertMessage("❌ Please enter your name.");
    setTimeout(() => setAlertMessage(""), 5000);
    return;
  }
  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    setAlertType("error");
    setAlertMessage("❌ Please enter a valid email address.");
    setTimeout(() => setAlertMessage(""), 5000);
    return;
  }
  if (!formData.subject.trim()) {
    setAlertType("error");
    setAlertMessage("❌ Please enter a subject.");
    setTimeout(() => setAlertMessage(""), 5000);
    return;
  }
  if (!formData.message.trim()) {
    setAlertType("error");
    setAlertMessage("❌ Please enter your message.");
    setTimeout(() => setAlertMessage(""), 5000);
    return;
  }
  // Mobile number is optional → No validation unless entered
  if (formData.mobile && !/^\d{10,15}$/.test(formData.mobile)) {
    setAlertType("error");
    setAlertMessage("❌ Please enter a valid mobile number (10–15 digits).");
    setTimeout(() => setAlertMessage(""), 5000);
    return;
  }
 setLoading(true)
  // Send email
  emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile || "Not provided", // Send to email even if empty
        subject: formData.subject,
        message: formData.message
      },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(() => {
      setAlertType("success");
      setAlertMessage("✅ Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
      });
      setLoading(false)
      setTimeout(() => setAlertMessage(""), 5000);
    })
    .catch((error) => {
      console.error("Email send failed:", error);
      setAlertType("error");
      setAlertMessage("❌ Oops! Something went wrong. Please try again.");
      setLoading(false)
      setTimeout(() => setAlertMessage(""), 5000);
    });
};

  return (
    <>
    
     
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-400 mb-6">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black-900 rounded-lg border border-green-500 transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:siyad@example.com" className="text-green-400 hover:underline">
                      siyadsm4065@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4  border-green-500 rounded-lg border  transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a href="tel:+919876543210" className="text-green-400 hover:underline">
                      +91 9947774065
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4  rounded-lg border border-green-500 transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-gray-400">Calicut, Kerala, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/siyadMuhsin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-green-500"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/siyad-muhsin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors border border-green-600 hover:border-green-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-xl p-6 border border-green-500">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </div>
                 <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
                    placeholder="Mobile Number (Optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border border-gray-700 text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                 {alertMessage && (
        <div
          style={{
            top:'10px',
            right:'0px',
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: alertType === "success" ? "#d4edda" : "#f8d7da",
            color: alertType === "success" ? "#155724" : "#721c24",
            border: alertType === "success"
              ? "1px solid #c3e6cb"
              : "1px solid #f5c6cb"
          }}
        >
          {alertMessage}
        </div>
      )}
                
                 <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
        disabled={loading} // Disable while loading
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
import React, { useEffect, useState } from "react";
import Section from "./Section";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [ready, setReady] = useState(false);
  

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    
  };

  const handleSubmit = async () => {
    if(!ready){
      return;
    }
    const url = "https://impossible-puce-loafers.cyclic.app/api/v1/email";
    setSending(true);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setSending(false);

    if (res.status === 200) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);
      setData({ name: "", email: "", message: "" });
    } else {
      alert("someting went wrong");
    }
  };


  useEffect(()=>{
    const {email,name,message} = data;
    if(!email || !name || !message){
      setReady(()=>false);
    }
    else{
      setReady(()=>true);
    } 
  },[data]);

  return (
    <Section
      background="bg-gray-100"
      title="Contact Us"
      description="If you would like to find out more about my web development services and how I can help you achieve your goals, please do not hesitate to get in touch. I am always available to answer any questions you may have, and I look forward to discussing your project in more detail."
    >
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        {sent && (
          <h4 className="text-center text-white bg-green-500 mb-5 py-3">
            We got your message! get in touch with you soon
          </h4>
        )}

        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                value={data.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                value={data.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                value={data.message}
                onChange={handleChange}
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              onClick={handleSubmit}
              className={`w-full text-white ${ready? "bg-green-500":"bg-green-500/50 cursor cursor-not-allowed"} border-0 py-2 px-8 focus:outline-none rounded text-lg`}
            >
              {sending ? <span>Sending...</span> : <span>Send</span>}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;

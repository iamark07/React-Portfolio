import React, { useState } from "react";
import Section_title from "../Section_title/Section_title";
import Social_Media from "../Social_icon_component/Social_Media";
import Btn from "../Btn_component/Btn";

function Contact_section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: formData.name.length < 5,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      subject: formData.subject.length < 5,
      message: formData.message.length < 25
    };

    setErrors(newErrors);

    Object.values(newErrors).forEach(error => {
      if (error) valid = false;
    });

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here, you can add the logic to send the form data (e.g., using an API or email service)
      console.log("Form submitted successfully", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <section className="contact_section m-auto mt-32 p-5 md:p-8 lg:w-[80%] overflow-x-hidden">
      <Section_title title={"Contact Me"} data={"fade-right"}/>
      <div className="contact_container mt-10 bg-gradient-to-l from-[rgba(0,25,50,0.3)] to-[rgba(0,128,128,0.3)] rounded-md" data-aos="fade-left">
        <div className="contact_header grid grid-cols-8 lg:gap-20 py-14 md:py-20 p-5 md:px-10 relative">
          <div className="contact_img_container hidden lg:block lg:col-span-3">
            <div className="contact_img absolute top-10 backdrop-blur-xl bg-opacity-50 border border-solid border-gray-500 bg-gray-700 rounded-lg">
              <img src="assets/img/profile_pic-2.png" alt="" className="lg:w-60 xl:w-72" />
            </div>
          </div>
          <div className="discuss_us col-span-8 lg:col-span-5">
            <h2 className="text-white text-2xl md:text-4xl">Let’s Discuss Your Project</h2>
            <p className="text-white text-sm md:text-xl mt-3 md:mt-5 text-wrap">
              Always available for freelancing if the right project comes along. Feel free to contact me.
            </p>
          </div>
        </div>
        <div className="contact_details_container bg-gradient-to-l from-sky-950 to-teal-950 px-5 py-10 md:p-10 flex flex-col md:flex-row gap-12 xl:gap-28">
          <div className="contact_details_wrapper flex flex-col gap-5 order-2 md:order-1">
            <div className="contact_details lg:pt-5 xl:pt-16">
              <h5 className="text-white text-xl">Write an E-mail</h5>
              <h3 className="text-white text-md">arbazkarimi@gmail.com</h3>
            </div>
            <div className="contact_details">
              <h5 className="text-white text-xl">Call Me</h5>
              <h3 className="text-white text-md"><a href="tel:7275781669">7275781669</a></h3>
            </div>
            <Social_Media />
          </div>
          <div className="contact_form w-full order-1 md:order-2">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
              <div className="contact_input col-span-2 sm:col-span-1 flex flex-col">
                <label className="text-white" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name *"
                  className={`mt-2 bg-transparent p-2 border ${errors.name ? 'border-red-500' : 'border-gray-200'} outline-none text-white rounded-sm`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span className="text-red-500 text-sm">Name must be at least 5 characters long</span>}
              </div>
              <div className="contact_input col-span-2 sm:col-span-1 flex flex-col">
                <label className="text-white" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  className={`mt-2 bg-transparent p-2 border ${errors.email ? 'border-red-500' : 'border-gray-200'} outline-none text-white rounded-sm`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
              </div>
              <div className="contact_input col-span-2 flex flex-col">
                <label className="text-white" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject *"
                  className={`mt-2 bg-transparent p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-200'} outline-none text-white rounded-sm`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors.subject && <span className="text-red-500 text-sm">Subject must be at least 5 characters long</span>}
              </div>
              <div className="contact_input col-span-2 flex flex-col">
                <label className="text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message *"
                  className={`mt-2 bg-transparent p-2 border ${errors.message ? 'border-red-500' : 'border-gray-200'} outline-none text-white rounded-sm h-32`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">Message must be at least 25 characters long</span>}
              </div>
              <div className="form_submit_btn col-span-2">
                {/* <Btn btn={"Send Message"} /> */}
                <input type="submit" className=" w-32 md:w-40 text-md text-white py-3 px-5 border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 rounded-sm cursor-pointer" value={"Send Message"}/>
              </div>
              {isSubmitted && <p className="text-green-500 mt-3">Form submitted successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_section;

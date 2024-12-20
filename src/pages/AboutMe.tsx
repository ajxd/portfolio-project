import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Spline from "@splinetool/react-spline";
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaArrowDown, FaCode, FaDatabase, FaMobileAlt, FaTools } from "react-icons/fa";
import { SiAdobe, SiReact, SiTypescript } from "react-icons/si";
import emailjs from "emailjs-com";
import "./tailwind.css";

const AboutMe: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [beamPosition, setBeamPosition] = useState<number>(0);

  const timelineData = [
    {
      date: "2024",
      title: "Graduated from Conestoga College",
      description: "Postgraduate diploma in Web Development (3.2 GPA).",
    },
    {
      date: "2023-2024",
      title: "Order Selector - DHL Supply Chain",
      description:
        "Managed inventory, optimized logistics tasks, and enhanced workflows using advanced software solutions like RTCIS and SMARTOPS.",
    },
    {
      date: "2018-2022",
      title: "Customer Service and Business Development",
      description:
        "At Alue Glazers, optimized vendor management, improved digital marketing, and created a responsive website using HTML, CSS, JavaScript, and CMS tools.",
    },
    {
      date: "Certifications",
      title: "Certifications & Courses",
      description:
        "Completed courses on MongoDB, .NET Core Web API, Angular 12 (Udemy), and Front-End Web Development (Udemy).",
    },
  ];

  const skillsData = [
    { icon: <FaCode size={40} />, title: "Programming", description: "HTML, CSS3, JavaScript, TypeScript, React, C#, Node.js" },
    { icon: <FaDatabase size={40} />, title: "Databases", description: "MySQL, Firebase, MongoDB" },
    { icon: <FaMobileAlt size={40} />, title: "Mobile Development", description: "Android Development, Flutter" },
    { icon: <FaTools size={40} />, title: "Frameworks & Tools", description: ".NET, MVC, Tailwind CSS, Adobe XD" },
    { icon: <SiReact size={40} />, title: "React Ecosystem", description: "React, React Three Fiber, Spline 3D" },
    { icon: <SiAdobe size={40} />, title: "Creative Design", description: "Adobe Photoshop, SEO, WordPress, WooCommerce" },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Ajai_Kamaraj_Resume.pdf"; // Ensure the correct path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ajai_Kamaraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_najijve", // Service ID
          "template_3yuxwcf", // Template ID
          formRef.current,
          "LlFsNOCF5bWVSSVG2" // Public Key
        )
        .then(
          () => {
            alert("Feedback sent successfully!");
            formRef.current?.reset();
          },
          (error) => {
            console.error("Error sending feedback:", error);
            alert("Failed to send feedback. Please try again later.");
          }
        );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollProgress = Math.min(Math.max((windowHeight / 2 - top) / height, 0), 1);
        setBeamPosition(scrollProgress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900">
      {/* Full-Screen Spline 3D Background */}
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/nYn5qbZMfBt6vKwn/scene.splinecode" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 shadow-2xl"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden w-48 h-48 lg:w-64 lg:h-64">
              <img
                src="/profile.jpg"
                alt="Ajai Kamaraj"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div className="text-center lg:text-left max-w-2xl">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Ajai Kamaraj
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              A skilled web developer with expertise in creating responsive applications and immersive user interfaces. Proficient in Java, React, TypeScript, and Spline 3D. My goal is to deliver innovative digital experiences.
            </motion.p>

            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <FaArrowDown />
              Download My Resume
            </motion.button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.icon}
                <h3 className="mt-4 text-xl font-semibold">{skill.title}</h3>
                <p className="mt-2 text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mt-16 relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800">
            My Journey
          </h2>
          <div
            style={{
              top: `${beamPosition}%`,
              transform: "translateY(-50%)",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-xl transition-all duration-200"
          />

          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(209, 213, 219, 0.8)",
                  color: "#1f2937",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(209, 213, 219, 0.8)",
                }}
                date={item.date}
                iconStyle={{
                  background: "linear-gradient(to right, #3b82f6, #9333ea)",
                  color: "#fff",
                  boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
                }}
                icon={<i className="fas fa-laptop-code text-white"></i>}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Feedback Form */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            Feedback
          </h2>
          <form ref={formRef} onSubmit={handleFeedbackSubmit} className="max-w-xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Feedback"
                rows={4}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Download,
  ChevronDown,
  Quote
} from "lucide-react";
function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return  jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [
     jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200", children:  jsx("div", { className: "max-w-6xl mx-auto px-6 py-4", children:  jsxs("div", { className: "flex items-center justify-between", children: [
       jsx("div", { className: "font-serif font-bold text-xl text-emerald-600", children: "Parth Inamdar" }),
       jsx("div", { className: "hidden md:flex items-center gap-8", children: ["About", "Portfolio", "Certificates", "Contact"].map((item) =>  jsx(
        "button",
        {
          onClick: () => scrollToSection(item.toLowerCase()),
          className: `text-sm font-medium transition-colors hover:text-emerald-600 ${activeSection === item.toLowerCase() ? "text-emerald-600" : "text-slate-600"}`,
          children: item
        },
        item
      )) }),
       jsx(
        Button,
        {
          size: "sm",
          className: "bg-emerald-600 hover:bg-emerald-700 text-white",
          onClick: () => scrollToSection("contact"),
          children: "Get In Touch"
        }
      )
    ] }) }) }),
     jsx("section", { id: "hero", className: "pt-24 pb-16 px-6", children:  jsxs("div", { className: "max-w-6xl mx-auto", children: [
       jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
         jsxs("div", { className: `space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`, children: [
           jsxs("div", { className: "space-y-4", children: [
             jsx(Badge, { variant: "outline", className: "text-emerald-600 border-emerald-200", children: "Available for new opportunities" }),
             jsx("h1", { className: "font-serif text-5xl lg:text-6xl font-bold text-slate-900 leading-tight", children: "Welcome to 12-34u's Profile" }),
             jsx("p", { className: "text-xl text-slate-600 font-sans leading-relaxed", children: "Your Journey, Your Achievements - Discover my passion for creative design and development, and how I strive to make an impact through innovative solutions." })
          ] }),
           jsxs("div", { className: "flex items-center gap-4 text-slate-600", children: [
             jsxs("div", { className: "flex items-center gap-2", children: [
               jsx(MapPin, { className: "w-4 h-4" }),
               jsx("span", { className: "text-sm", children: "San Francisco, CA" })
            ] }),
             jsxs("div", { className: "flex items-center gap-2", children: [
               jsx(Calendar, { className: "w-4 h-4" }),
               jsx("span", { className: "text-sm", children: "5+ years experience" })
            ] })
          ] }),
           jsxs("div", { className: "flex items-center gap-4", children: [
             jsxs(
              Button,
              {
                size: "lg",
                className: "bg-emerald-600 hover:bg-emerald-700 text-white group",
                onClick: () => scrollToSection("portfolio"),
                children: [
                  "View My Work",
                   jsx(ExternalLink, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
                ]
              }
            ),
             jsxs(
              Button,
              {
                variant: "outline",
                size: "lg",
                className: "border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent",
                children: [
                   jsx(Download, { className: "w-4 h-4 mr-2" }),
                  "Download CV"
                ]
              }
            )
          ] }),
           jsxs("div", { className: "flex items-center gap-4", children: [
             jsx(Button, { variant: "ghost", size: "sm", className: "p-2 hover:bg-emerald-50", children:  jsx(Github, { className: "w-5 h-5 text-slate-600 hover:text-emerald-600" }) }),
             jsx(Button, { variant: "ghost", size: "sm", className: "p-2 hover:bg-emerald-50", children:  jsx(Linkedin, { className: "w-5 h-5 text-slate-600 hover:text-emerald-600" }) }),
             jsx(Button, { variant: "ghost", size: "sm", className: "p-2 hover:bg-emerald-50", children:  jsx(Mail, { className: "w-5 h-5 text-slate-600 hover:text-emerald-600" }) })
          ] })
        ] }),
         jsx("div", { className: `relative ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"}`, children:  jsxs("div", { className: "relative", children: [
           jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl transform rotate-3" }),
           jsxs("div", { className: "relative bg-white p-8 rounded-2xl shadow-xl", children: [
             jsxs(Avatar, { className: "w-48 h-48 mx-auto mb-6", children: [
               jsx(AvatarImage, { src: "/portfolio_image.jpg" }),
               jsx(AvatarFallback, { className: "text-4xl font-serif", children: "34" })
            ] }),
             jsxs("div", { className: "text-center space-y-2", children: [
             jsx("h3", { className: "font-serif text-2xl font-bold text-slate-900", children: "12-34u" }),
               jsx("p", { className: "text-emerald-600 font-medium", children: "Creative Designer & Developer" }),
               jsx("div", { className: "flex justify-center gap-1 mt-4", children: [1, 2, 3, 4, 5].map((star) =>  jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, star)) }),
               jsx("p", { className: "text-sm text-slate-500", children: "5.0 rating from 50+ clients" })
            ] })
          ] })
        ] }) })
      ] }),
       jsx("div", { className: "flex justify-center mt-16", children:  jsx(
        "button",
        {
          onClick: () => scrollToSection("about"),
          className: "animate-bounce text-slate-400 hover:text-emerald-600 transition-colors",
          children:  jsx(ChevronDown, { className: "w-6 h-6" })
        }
      ) })
    ] }) }),
     jsx("section", { id: "about", className: "py-16 px-6 bg-white", children:  jsxs("div", { className: "max-w-6xl mx-auto", children: [
       jsxs("div", { className: "text-center mb-16", children: [
         jsx("h2", { className: "font-serif text-4xl font-bold text-slate-900 mb-4", children: "About Me" }),
         jsx("p", { className: "text-xl text-slate-600 max-w-3xl mx-auto", children: "Discover my passion for design and development and how I strive to make an impact through creative solutions and innovative thinking." })
      ] }),
       jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
         jsx(Card, { className: "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children:  jsxs(CardContent, { className: "p-8 text-center", children: [
           jsx("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors", children:  jsx("span", { className: "text-2xl", children: "\u{1F3A8}" }) }),
           jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 mb-4", children: "Creative Design" }),
           jsx("p", { className: "text-slate-600 leading-relaxed", children: "Crafting beautiful, user-centered designs that tell compelling stories and create meaningful connections between brands and their audiences." })
        ] }) }),
         jsx(Card, { className: "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children:  jsxs(CardContent, { className: "p-8 text-center", children: [
           jsx("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors", children:  jsx("span", { className: "text-2xl", children: "\u{1F4BB}" }) }),
           jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 mb-4", children: "Development" }),
           jsx("p", { className: "text-slate-600 leading-relaxed", children: "Building robust, scalable applications with modern technologies, focusing on performance, accessibility, and exceptional user experiences." })
        ] }) }),
         jsx(Card, { className: "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children:  jsxs(CardContent, { className: "p-8 text-center", children: [
           jsx("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors", children:  jsx("span", { className: "text-2xl", children: "\u{1F680}" }) }),
           jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 mb-4", children: "Innovation" }),
           jsx("p", { className: "text-slate-600 leading-relaxed", children: "Constantly exploring new technologies and methodologies to push boundaries and deliver cutting-edge solutions that exceed expectations." })
        ] }) })
      ] }),
       jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-12 items-center", children: [
         jsxs("div", { children: [
           jsx("h3", { className: "font-serif text-2xl font-bold text-slate-900 mb-6", children: "My Journey" }),
           jsxs("div", { className: "space-y-6", children: [
             jsxs("div", { className: "flex gap-4", children: [
               jsx("div", { className: "w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" }),
               jsxs("div", { children: [
                 jsx("h4", { className: "font-semibold text-slate-900", children: "Senior Designer at TechCorp" }),
                 jsx("p", { className: "text-slate-600 text-sm", children: "2022 - Present" }),
                 jsx("p", { className: "text-slate-600 mt-2", children: "Leading design initiatives for enterprise products, managing a team of 5 designers." })
              ] })
            ] }),
             jsxs("div", { className: "flex gap-4", children: [
               jsx("div", { className: "w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" }),
               jsxs("div", { children: [
                 jsx("h4", { className: "font-semibold text-slate-900", children: "Product Designer at StartupXYZ" }),
                 jsx("p", { className: "text-slate-600 text-sm", children: "2020 - 2022" }),
                 jsx("p", { className: "text-slate-600 mt-2", children: "Designed user experiences for mobile and web applications, increasing user engagement by 40%." })
              ] })
            ] }),
             jsxs("div", { className: "flex gap-4", children: [
               jsx("div", { className: "w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" }),
               jsxs("div", { children: [
                 jsx("h4", { className: "font-semibold text-slate-900", children: "Freelance Designer" }),
                 jsx("p", { className: "text-slate-600 text-sm", children: "2018 - 2020" }),
                 jsx("p", { className: "text-slate-600 mt-2", children: "Worked with 30+ clients across various industries, delivering brand identity and web design solutions." })
              ] })
            ] })
          ] })
        ] }),
         jsxs("div", { className: "space-y-6", children: [
           jsx("h3", { className: "font-serif text-2xl font-bold text-slate-900", children: "Skills & Expertise" }),
           jsx("div", { className: "space-y-4", children: [
            { skill: "UI/UX Design", level: 95 },
            { skill: "React & Next.js", level: 90 },
            { skill: "TypeScript", level: 85 },
            { skill: "Figma & Design Systems", level: 95 },
            { skill: "Brand Identity", level: 80 }
          ].map((item) =>  jsxs("div", { children: [
             jsxs("div", { className: "flex justify-between mb-2", children: [
               jsx("span", { className: "font-medium text-slate-900", children: item.skill }),
               jsxs("span", { className: "text-slate-600", children: [
                item.level,
                "%"
              ] })
            ] }),
             jsx("div", { className: "w-full bg-slate-200 rounded-full h-2", children:  jsx(
              "div",
              {
                className: "bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out",
                style: { width: `${item.level}%` }
              }
            ) })
          ] }, item.skill)) })
        ] })
      ] })
    ] }) }),
     jsx("section", { id: "portfolio", className: "py-16 px-6 bg-slate-50", children:  jsxs("div", { className: "max-w-6xl mx-auto", children: [
       jsxs("div", { className: "text-center mb-16", children: [
         jsx("h2", { className: "font-serif text-4xl font-bold text-slate-900 mb-4", children: "Portfolio" }),
         jsx("p", { className: "text-xl text-slate-600 max-w-3xl mx-auto", children: "Explore my work that reflects my creativity and skill in bringing ideas to life through thoughtful design and development." })
      ] }),
       jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          title: "E-commerce Platform",
          category: "Web Development",
          image: "/modern-ecommerce-interface.png",
          description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
          link: "#"
        },
        {
          title: "Brand Identity System",
          category: "Brand Design",
          image: "/placeholder-a2frv.png",
          description: "Complete brand identity including logo, colors, typography, and guidelines.",
          link: "#"
        },
        {
          title: "Mobile Banking App",
          category: "UI/UX Design",
          image: "/mobile-banking-app.png",
          description: "Intuitive mobile banking experience with focus on security and usability.",
          link: "#"
        },
        {
          title: "SaaS Dashboard",
          category: "Web Development",
          image: "/modern-dashboard.png",
          description: "Analytics dashboard with real-time data visualization and reporting.",
          link: "#"
        },
        {
          title: "Restaurant Website",
          category: "Web Design",
          image: "/elegant-restaurant-website.png",
          description: "Elegant restaurant website with online reservation and menu system.",
          link: "#"
        },
        {
          title: "Fitness App Design",
          category: "Mobile Design",
          image: "/fitness-app-interface.png",
          description: "Motivational fitness app design with workout tracking and social features.",
          link: "#"
        }
      ].map((project, index) =>  jsxs(
        Card,
        {
          className: "group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden",
          children: [
             jsxs("div", { className: "relative overflow-hidden", children: [
               jsx(
                "img",
                {
                  src: project.image || "/placeholder.svg",
                  alt: project.title,
                  className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                }
              ),
               jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center", children:  jsx(
                "a",
                {
                  href: project.link || "#",
                  target: "_blank",
                  rel: "noreferrer",
                  children:  jsxs(
                    Button,
                    {
                      size: "sm",
                      className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100",
                      children: [
                        "View Project",
                         jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
                      ]
                    }
                  )
                }
              ) })
            ] }),
             jsxs(CardContent, { className: "p-6", children: [
               jsx(Badge, { variant: "secondary", className: "mb-3 text-emerald-600 bg-emerald-50", children: project.category }),
               jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 mb-2", children: project.title }),
               jsx("p", { className: "text-slate-600 text-sm leading-relaxed", children: project.description })
            ] })
          ]
        },
        index
      )) }),
       jsx("div", { className: "text-center mt-12", children:  jsx(
        "a",
        {
          href: "https://github.com/parthinamdar",
          target: "_blank",
          rel: "noreferrer",
          children:  jsxs(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent",
              children: [
                "View All Projects",
                 jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
              ]
            }
          )
        }
      ) })
    ] }) }),
     jsx("section", { id: "certificates", className: "py-16 px-6 bg-white", children:  jsxs("div", { className: "max-w-6xl mx-auto", children: [
       jsxs("div", { className: "text-center mb-16", children: [
         jsx("h2", { className: "font-serif text-4xl font-bold text-slate-900 mb-4", children: "Certificates" }),
         jsx("p", { className: "text-xl text-slate-600 max-w-3xl mx-auto", children: "Professional certifications and achievements that showcase my continuous learning and expertise in various technologies." })
      ] }),
       jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          id: 1,
          title: "Python Full Stack Development",
          issuer: "AICTE",
          date: "2025",
          description: "Comprehensive certification covering HTML, CSS, JavaScript, Python and Django like frameworks, paving a path towards Python based development.",
          image: "/certificates/Python.png",
          skills: ["HTML", "CSS", "JS", "Python", "Django"]
        },
        {
          id: 2,
          title: "Getting Started with Deep Learning",
          issuer: "Nvidia",
          date: "2025",
          description: "Foundational understanding of Machine Learning and Deep Learning concepts, epoches, random state and how actually the workflow is of DL.",
          image: "/certificates/Nvidia.png",
          skills: ["Python", "Deep Learning"]
        },
        {
          id: 3,
          title: "Java Programming",
          issuer: "Success Classes of Engineering",
          date: "2024",
          description: "Core and Advanced Java programming concepts including algorithms, data structures, and problem-solving techniques.",
          image: "/certificates/Java.png",
          skills: ["Java", "Algorithms", "Data Structures", "Swing"]
        }
      ].map((certificate, index) =>  jsxs(
        Card,
        {
          className: "group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden",
          children: [
             jsx("div", { className: "relative overflow-hidden", children:  jsx(
              "img",
              {
                src: certificate.image || "/placeholder.svg",
                alt: certificate.title,
                className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              }
            ) }),
             jsxs(CardContent, { className: "p-6", children: [
               jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                 jsx(Badge, { variant: "secondary", className: "text-emerald-600 bg-emerald-50", children: certificate.issuer }),
                 jsx("span", { className: "text-sm text-slate-500", children: certificate.date })
              ] }),
               jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 mb-2", children: certificate.title }),
               jsx("p", { className: "text-slate-600 text-sm leading-relaxed mb-4", children: certificate.description }),
               jsx("div", { className: "flex flex-wrap gap-2", children: certificate.skills.map((skill, skillIndex) =>  jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs",
                  children: skill
                },
                skillIndex
              )) })
            ] })
          ]
        },
        certificate.id
      )) })
    ] }) }),
     jsx("section", { id: "contact", className: "py-16 px-6 bg-gradient-to-br from-emerald-50 to-emerald-100", children:  jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
       jsx("h2", { className: "font-serif text-4xl font-bold text-slate-900 mb-4", children: "Let's Connect and Collaborate" }),
       jsx("p", { className: "text-xl text-slate-600 mb-12 max-w-2xl mx-auto", children: "Ready to bring your ideas to life? I'd love to hear about your project and explore how we can work together to create something amazing." }),
       jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: [
         jsxs(Card, { className: "p-6 text-center hover:shadow-lg transition-shadow duration-300", children: [
           jsx(Mail, { className: "w-8 h-8 text-emerald-600 mx-auto mb-4" }),
           jsx("h3", { className: "font-semibold text-slate-900 mb-2", children: "Email" }),
           jsx("p", { className: "text-slate-600", children: "parth@example.com" })
        ] }),
         jsxs(Card, { className: "p-6 text-center hover:shadow-lg transition-shadow duration-300", children: [
           jsx(Linkedin, { className: "w-8 h-8 text-emerald-600 mx-auto mb-4" }),
           jsx("h3", { className: "font-semibold text-slate-900 mb-2", children: "LinkedIn" }),
           jsx("p", { className: "text-slate-600", children: "@parthina mdar" })
        ] }),
         jsxs(Card, { className: "p-6 text-center hover:shadow-lg transition-shadow duration-300", children: [
           jsx(Github, { className: "w-8 h-8 text-emerald-600 mx-auto mb-4" }),
           jsx("h3", { className: "font-semibold text-slate-900 mb-2", children: "GitHub" }),
           jsx("p", { className: "text-slate-600", children: "@parthinamdar" })
        ] })
      ] }),
       jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
         jsxs(Button, { size: "lg", className: "bg-emerald-600 hover:bg-emerald-700 text-white", children: [
           jsx(Mail, { className: "w-4 h-4 mr-2" }),
          "Send Message"
        ] }),
         jsxs(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent",
            children: [
               jsx(Calendar, { className: "w-4 h-4 mr-2" }),
              "Schedule Call"
            ]
          }
        )
      ] })
    ] }) }),
     jsx("footer", { className: "py-8 px-6 bg-slate-900 text-white", children:  jsx("div", { className: "max-w-6xl mx-auto text-center", children:  jsx("p", { className: "text-slate-400", children: "\xA9 2024 12-34u. Crafted with passion and attention to detail." }) }) })
  ] });
}
export {
  ProfilePage as default
};

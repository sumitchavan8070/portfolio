import React from 'react';

// Define a type for the project object
interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const PreviousProjects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Gradding App",
            description: "Gradding is a Flutter-based mobile application designed to assist students who aspire to study abroad.",
            imageUrl: "https://www.gradding.com/frontend/primary-theme/assets/images/ogimage.png",
            link: "https://play.google.com/store/apps/details?id=com.gradding&hl=en-IN",
        },
        {
            title: "Course Finder",
            description: "Developed by Gradding, for students to find Courses for their overseas education.",
            imageUrl: "https://play-lh.googleusercontent.com/59QdYRw6Fiv1YCThqAZwhoyi5DKUQ_1d7ApJ85UWfHuZtCzWn4N2LUs-6BXcbGGWIwc=w416-h235-rw",
            link: "https://play.google.com/store/apps/details?id=com.gradding.finder&hl=en_IN",
        },
        {
            title: "College Predictor",
            description: "Developed by Gradding for students to find their dream university for overseas education.",
            imageUrl: "https://play-lh.googleusercontent.com/vesmOnDN2G8sbWoKp9RNr2g5fVrRkwQv3b0Q6VEXt7FO3ts50FZ9ux40x02YMYc_vFw=w416-h235-rw",
            link: "https://play.google.com/store/apps/details?id=com.gradding.predictor&hl=en_IN",
        },
        {
            title: "IELTS Preparation",
            description: "Developed by Gradding for students who are specifically tailored for IELTS, PTE, GMAT, SAT, and ACT exams. It provides necessary preparation materials, practice tests, and personalized learning plans to excel in these standardized tests.",
            imageUrl: "https://play-lh.googleusercontent.com/3cuds4ge2Fke7yJXn7HsTnr7zdcDVoIo7SC3ICotTY005Yy7k6mtS2ssROAx3vBE3g=w416-h235-rw",
            link: "https://play.google.com/store/apps/details?id=com.gradding.ieltsprep&hl=en-IN",
        },
        {
            title: "MySIP Online",
            description: "Mysiponline is a popular online platform that allows users to check their SIP (Subscriber Identity Module) balance, recharge, and manage their mobile phone accounts. The website provides a user-friendly interface to access various services, including bill payments, data usage, and call logs.",
            imageUrl: "https://play-lh.googleusercontent.com/rvobt18fxbVYIBbSHh7PtRa0JfhNPD3D3YYaIxLvowcQ7KLs9Tl3dPqjJW6kpAfBrBs=w416-h235-rw",
            link: "https://play.google.com/store/apps/details?id=com.mysiponline&hl=en_US",
        },
        {
            title: "MySIP Calculator",
            description: "Mysiponline is a popular online platform that allows users to invest and check their SIP. On this App, Calculate your future value of monthly SIP investment compounded monthly or annually.",
            imageUrl: "https://play-lh.googleusercontent.com/kWxTSxa9BysbdUkgfZMkgxLuKw3XMYowGE6-cs6j-69cW2uElF-uevlJRTnvCRAiaeg=w416-h235-rw",
            link: "https://play.google.com/store/apps/details?id=com.mysiponline.calculator&hl=en_IN",
        },
        {
            title: "WoodenStreet",
            description: "The Wooden Street application is an online marketplace that specializes in sourcing authentic, handmade, and unique wooden decorative items from artisans and craftspeople worldwide. Their platform allows users to discover and purchase one-of-a-kind wooden products, such as wooden street art, wooden furniture, and decorative items!",
            imageUrl: "https://www.woodenstreet.com/images/cover.gif",
            link: "https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_US",
        },
        {
            title: "MRP",
            description: "Global assignment help refers to online academic assistance provided by experts to students worldwide. This type of help is particularly useful for students who are struggling with complex assignments, research papers, or projects. Global assignment help services offer a range of benefits, including timely submissions, improved grades, and enhanced learning outcomes.",
            imageUrl: "https://www.globalassignmenthelp.com/images/og_GAH.jpg",
            link: "https://play.google.com/store/apps/details?id=com.globalassignmenthelp&hl=en_US",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a] project-card">
                        <div className="flex-shrink-0">
                            <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover" />
                        </div>
                        <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                            <div className="flex-1">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                                        <p className="mt-3 text-base text-gray-300 description truncate">{project.description}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousProjects;

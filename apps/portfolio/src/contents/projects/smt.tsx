import React from 'react';

// Define a type for the project object
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Change to a function declaration
function PreviousProjects() {
  const projects: Project[] = [
    {
      title: 'Gradding App',
      description:
        'Gradding is a Flutter-based mobile application designed to assist students who aspire to study abroad.',
      imageUrl:
        'https://gradding.s3.ap-south-1.amazonaws.com/website-images/uploads/images/media/ogimage-674e.png',
      link: 'https://play.google.com/store/apps/details?id=com.gradding&hl=en-IN',
    },
    {
      title: 'Course Finder',
      description:
        'Developed by Gradding, for students to find Courses for their overseas education.',
      imageUrl:
        'https://play-lh.googleusercontent.com/ascMcy_gdH5ejNuv4UcDi7tt9wOuOs_ZSWImtsUT2hyPhGa3SN4nE0CnJjaj5AR8h5g=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.finder&hl=en_IN',
    },
    {
      title: 'College Predictor',
      description:
        'Developed by Gradding for students to find their dream university for overseas education.',
      imageUrl:
        'https://play-lh.googleusercontent.com/vesmOnDN2G8sbWoKp9RNr2g5fVrRkwQv3b0Q6VEXt7FO3ts50FZ9ux40x02YMYc_vFw=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.predictor&hl=en_IN',
    },
    {
      title: 'IELTS Preparation',
      description:
        'Developed by Gradding for students who are specifically tailored for IELTS, PTE, GMAT, SAT, and ACT exams. It provides necessary preparation materials, practice tests, and personalized learning plans to excel in these standardized tests.',
      imageUrl:
        'https://play-lh.googleusercontent.com/3cuds4ge2Fke7yJXn7HsTnr7zdcDVoIo7SC3ICotTY005Yy7k6mtS2ssROAx3vBE3g=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.ieltsprep&hl=en-IN',
    },
    {
      title: 'MySIP Online',
      description:
        'Mysiponline is a popular online platform that allows users to check their SIP (Subscriber Identity Module) balance, recharge, and manage their mobile phone accounts. The website provides a user-friendly interface to access various services, including bill payments, data usage, and call logs.',
      imageUrl:
        'https://play-lh.googleusercontent.com/rvobt18fxbVYIBbSHh7PtRa0JfhNPD3D3YYaIxLvowcQ7KLs9Tl3dPqjJW6kpAfBrBs=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.mysiponline&hl=en_US',
    },
    {
      title: 'MySIP Calculator',
      description:
        'Mysiponline is a popular online platform that allows users to invest and check their SIP. On this App, Calculate your future value of monthly SIP investment compounded monthly or annually.',
      imageUrl:
        'https://play-lh.googleusercontent.com/kWxTSxa9BysbdUkgfZMkgxLuKw3XMYowGE6-cs6j-69cW2uElF-uevlJRTnvCRAiaeg=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.mysiponline.calculator&hl=en_IN',
    },
    {
      title: 'WoodenStreet',
      description:
        'The Wooden Street application is an online marketplace that specializes in sourcing authentic, handmade, and unique wooden decorative items from artisans and craftspeople worldwide. Their platform allows users to discover and purchase one-of-a-kind wooden products, such as wooden street art, wooden furniture, and decorative items!',
      imageUrl: 'https://www.woodenstreet.com/images/cover.gif',
      link: 'https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_US',
    },
    {
      title: 'MRP',
      description:
        'Global assignment help refers to online academic assistance provided by experts to students worldwide. This type of help is particularly useful for students who are struggling with complex assignments, research papers, or projects. Global assignment help services offer a range of benefits, including timely submissions, improved grades, and enhanced learning outcomes.',
      imageUrl: 'https://www.globalassignmenthelp.com/images/og_GAH.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.globalassignmenthelp&hl=en_US',
    },

    {
      title: 'Personal Project - Meadhikari ',
      description:
        'Meadhikari is your ultimate companion for cracking Maharashtra public service exams with confidence. Whether youre preparing for MPSC, Talathi, Gramsevak, Vanvibhag, Krushi Vibhag, or any other recruitment exam, Meadhikari has everything you need to succeed! 🌟 ',
      imageUrl:
        'https://play-lh.googleusercontent.com/uR_cwMjW_Qgn_IksKlrq_Sw7Echm_pKvEKsLHfCHlss7DHmTdZR90TsataZfZjfj3F4=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.sc.meadhikari&hl=en',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight sm:mb-12 sm:text-3xl lg:mb-16">
        Current Projects
      </h2>
      <p className="text-1xl sm:text-1xl mb-8 text-center font-extrabold tracking-tight sm:mb-12 lg:mb-16">
        All projects are available on the Play Store.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card flex min-h-[400px] flex-col overflow-hidden rounded-lg bg-[#0a0a0a] shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
              <div className="flex-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-2 block">
                    <p className="text-lg font-semibold text-gray-300 sm:text-xl">
                      {project.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviousProjects;

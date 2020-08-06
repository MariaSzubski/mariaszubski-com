import React, { useState } from "react"
import ExpCard from "./"
import WorkshopCard from "./workshop"

export default {
  title: "Experience",
}

export const experienceCard = () => (
  <>
    <h1>Professional Experience</h1>
    <div className="background" style={{ margin: "20px" }}>
      <ExpCard
        job={{
          title: "Freelance Web Developer",
          companyName: "Maria Szubski Digital, LLC",
          companyUrl: "/",
          location: "Cincinnati, OH",
          dateRange: ["Jan 2018 - Present"],
          desc:
            "Consult with clients to strategize and build web applications, with an emphasis on frontend development, accessibility, and the implementation of responsive design. Commonly used technologies include React, Vue, and static site generators such as Gatsby and Nuxt.",
        }}
      />
      <ExpCard
        job={{
          title: "UX Designer",
          companyName: "Nielsen",
          companyUrl: "https://nielsen.com",
          team: "User Experience",
          location: "Cincinnati, OH",
          dateRange: ["Nov 2012 - Dec 2017"],
          desc:
            "Consult with clients to strategize and build web applications, with an emphasis on frontend development, accessibility, and the implementation of responsive design. Commonly used technologies include React, Vue, and static site generators such as Gatsby and Nuxt.",
        }}
      />
    </div>
  </>
)

export const workshopCard = () => {
  let [toggle, setToggle] = useState(false)
  return (
  <>
    <h1>Professional Experience</h1>
    <div className="background" style={{ margin: "20px 20px 80px 20px" }}>
      <ExpCard
        job={{
          title: "Freelance Web Developer",
          companyName: "Maria Szubski Digital, LLC",
          companyUrl: "/",
          location: "Cincinnati, OH",
          dateRange: ["Jan 2018 - Present"],
          desc:
            "Consult with clients to strategize and build web applications, with an emphasis on frontend development, accessibility, and the implementation of responsive design. Commonly used technologies include React, Vue, and static site generators such as Gatsby and Nuxt.",
        }}
      />
      <ExpCard
        job={{
          title: "UX Designer",
          companyName: "Nielsen",
          companyUrl: "https://nielsen.com",
          team: "User Experience",
          location: "Cincinnati, OH",
          dateRange: ["Nov 2012 - Dec 2017"],
          desc:
            "Consult with clients to strategize and build web applications, with an emphasis on frontend development, accessibility, and the implementation of responsive design. Commonly used technologies include React, Vue, and static site generators such as Gatsby and Nuxt.",
        }}
      />
    </div>
    <h1>Volunteer Experience</h1>
    <div
      className="background"
      style={{ margin: "20px 20px 20px 20px", padding: "3rem" }}
    >
      <h4>Workshops I've Led</h4>
      <div>
        <WorkshopCard
          workshop={{
            title: "Getting Started with Static Site Generators",
            org: "JAMStack Cincinnati",
            date: "Jun 2018",
            permalink: "/workshop",
          }}
        />
        <WorkshopCard
          workshop={{
            title: "Code Your First Website",
            org: "Girl Develop It Cincinnati",
            date: "Apr 2018",
            permalink: "/workshop",
          }}
        />
        <WorkshopCard
          workshop={{
            title: "Code Your First Website: New Year's Edition",
            org: "Girl Develop It Cincinnati",
            date: "Jan 2018",
            permalink: "/workshop",
          }}
        />
      </div>
    </div>
    <div className="background" style={{ margin: "20px 20px 80px 20px" }}>
      <ExpCard
        job={{
          title: "Chapter Leader & Instructor",
          companyName: "Girl Develop It",
          companyUrl: "https://girldevelopit.com",
          team: "Cincinnati Chapter",
          dateRange: [
            "Winter & Summer 2011",
            "Jul 2017 - Apr 2018",
            "Nov 2015 - Jul 2017",
          ],
          jobTitles: [
            "Chapter Leader",
            "Class Organizer",
            "Teaching Assistant",
          ],
          desc: `Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.`,
        }}
      />
    </div>
    <h1>Co-Op Experience</h1>
    <p onClick={() => setToggle(!toggle)}
    style={{ "text-align": "right"}}>Details</p>
    <div className="background" style={{ margin: "20px 20px 80px 20px" }}>
      <ExpCard
        toggle={toggle}
        job={{
          title: "Interactive Design Intern",
          team: "Entertainment Advertising Agency",
          companyName: "The Ant Farm",
          companyUrl: "/",
          location: "Los Angeles, CA",
          dateRange: ["Winter & Summer 2011"],
          desc:
            "Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.",
        }}
      />
      <ExpCard
        toggle={toggle}
        job={{
          title: "UX Designer",
          companyName: "Nielsen",
          companyUrl: "https://nielsen.com",
          team: "User Experience",
          location: "Cincinnati, OH",
          dateRange: ["Nov 2012 - Dec 2017"],
          desc:
            "Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.",
        }}
      />
      <ExpCard
        toggle={toggle}
        job={{
          title: "Freelance Web Developer",
          companyName: "Maria Szubski Digital, LLC",
          companyUrl: "/",
          location: "Cincinnati, OH",
          dateRange: ["Jan 2018 - Present"],
          desc:
            "Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.",
        }}
      />
      <ExpCard
        toggle={toggle}
        job={{
          title: "UX Designer",
          companyName: "Nielsen",
          companyUrl: "https://nielsen.com",
          team: "User Experience",
          location: "Cincinnati, OH",
          dateRange: ["Nov 2012 - Dec 2017"],
          desc:
            "Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.",
        }}
      />
      <ExpCard
        toggle={toggle}
        job={{
          title: "Freelance Web Developer",
          companyName: "Maria Szubski Digital, LLC",
          companyUrl: "/",
          location: "Cincinnati, OH",
          dateRange: ["Jan 2018 - Present"],
          desc:
            "Created designs that improved usability and consistency of data-driven web and mobile products. Researched rapid prototyping tools to accelerate output.",
        }}
      />
    </div>
  </>
)}

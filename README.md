Titanium Systems - Company Website
This is the repository for the official website of Titanium Systems, a provider of professional IT services. The site is built with Next.js and Tailwind CSS, with a strong focus on modern design and interactive user animations.

Live Site Link: https://titaniumsystems.pl

Core Technologies
Framework: Next.js

Styling: Tailwind CSS

Animations: Framer Motion & GSAP

Language: JavaScript / React

Contact Form: Nodemailer (via Next.js API Routes)

Key Features
Interactive UI: Smooth animations and effects (including "shiny text", "typewriter effect", "spotlight cards") to enhance the user experience.

Services Blog: A dedicated section with detailed descriptions of services, optimized for SEO.

Dynamic Image Carousel: Featured on project pages, with support for autoplay and pause on hover.

Smart Search: Filter services based on title, description, and keywords.

Contact Form: Integrated with Nodemailer for sending email inquiries.

Fully Responsive: The website is designed to work seamlessly on all devices.

Running The Project Locally

1. Clone the repository
Bash

git clone https://github.com/BartoszCiszek/titanium-systems.git

cd titanium-systems

2. Install dependencies
It is recommended to use the --legacy-peer-deps flag due to the project's dependency configuration.

Bash

npm install --legacy-peer-deps

3. Configure Environment Variables
For the contact form to work, you need to create a .env.local file in the root of the project and add your SMTP server credentials:

EMAIL_USER=your-email@address.com
EMAIL_PASS=your-email-password

4. Run the development server
Bash

npm run dev

Open http://localhost:3000 in your browser to see the result.// deploy test 08/06/2025 07:44:53

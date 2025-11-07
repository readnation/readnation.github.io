'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Header from "@/components/header"
import Footer from "@/components/footer"

const people = [
   {
    name: 'KAITLYN YAU',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      '/photos/ReadNationLogo.png',
    bio: 'Kaitlyn is currently a junior at Bronx Science. She has experience in robotics and debate, and has been an active volunteer of Read Nation since 6th grade. She hopes to pursue a career in biology and medicine, and is an active member of her school\'s HOSA club. She has participated in several academic pre-med programs such as the International Young Researchers\' Conference hosted by Columbia University, and the 2024 Global Health Leaders Conference at Johns Hopkins University. Her research experience includes studying shockwave therapy and investigating lifespan and microbial interactions, and she has also wrote and published a paper on advanced treatment for meniscus injuries.',
  },
  {
    name: 'ZACHARY YAU',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      '/photos/ReadNationLogo.png',
    bio: 'Zachary Yau attends Saint Francis Prep, where he attends many clubs such as e-sports and science Olympiad. He is also the builder of his team 62880B in VEX Robotics and made it to the world championships 3 times. In his free time, he likes to hang out with friends, enjoying their company. Zachary is interested in sports, astrology, anatomy, and history. in the future, he hopes to be in the medical field like his father.',
  },
  {
    name: 'CHLOE DENG',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      '/photos/Profile_ChloeDeng.jpg',
    bio: 'Chloe Deng is a sophomore at Hunter College High School. She is a member of the debate team, competing at multiple national-level tournaments, and has won the 2024 Novice National Speech and Debate Season Opener. Currently, she is secretary of the high school team and teaching assistant to middle schoolers. Passionate and determined to help her community, Chloe is active in many other extracurriculars, including badminton team, Mandarin club, and yearbook committee. When at home, she can be found reading, listening to R&B music, and binge-watching Netflix. In the future, she aspires to be a businesswoman that will make a difference in the world.',
  },
  {
    name: 'AIMEE DENG',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      '/photos/Profile_AimeeDeng.jpg',
    bio: 'Aimee Deng is a freshman at Bronx Science who loves being involved both in and out of school. She’s part of the debate team and enjoys staying active through swimming and tennis. In her free time, Aimee likes listening to music and hanging out with friends. She is also passionate about working with kids and finding ways to give back to her community. In the future, Aimee hopes to pursue a career in business and make a meaningful contribution wherever she goes.',
  },
  {
    name: 'JAYDEN ZHANG',
    role: 'Team Leader',
    imageUrl:
      '/photos/Profile_JaydenZhang.jpg',
    bio: 'Jayden Zhang is a junior attending Bronx Science. He competes in VEX V5 robotics, where he specializes in the design and manufacture of bespoke plastic components using CNC machinery. He is also a leader of an ARC rocketry team, where he headed the development of fused-sensor based active aerodynamic control elements to maximize competition performance. He has also worked to adjust the rocketry team\'s procedures to provide more growth opportunities to newer members. He enjoys working with 3D printers and drones outside of school, and he wishes to pursue a career in Aerospace Engineering.',
  },
  {
    name: 'JAYDEN CHEN',
    role: 'Chess Education Director',
    imageUrl:
      'https://static.wixstatic.com/media/3b897c_f73a00bcfb09417f8d559733c1f0bb57~mv2.jpg/v1/crop/x_19,y_0,w_634,h_634/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jayden%20Chan_edited_edited.jpg',
    bio: 'My name is Jayden Chan, and I am a sophomore at the Bronx High School of Science. I practice Brazilian Jiu-Jitsu, Muay Thai, basketball, saxophone, and the guitar. I enjoy playing chess, sharing my expertise and teaching others. I hope to pursue a career in chemical engineering in the future.',
  }, 
  {
    name: 'TIFFANY QI',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      '/photos/Profile_TiffanyQi.png',
    bio: 'Tiffany Qi is currently a sophomore at Herricks High School. She is interested in various topics like art, fashion, and business. She attends many school clubs and landed a board position in a non-profit prioritizing kids education. This year she will compete in DECA states individually in hopes of winning. Tiffany also loves to play badminton and games. She focuses on math as one of her handy subjects. Later on, Tiffany wishes to find occupation in business or medicine.',
  },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="isolate">
      <Header />
      {/* Team section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-sky-500 sm:text-5xl">
              Leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Meet the current leaders of ReadNation.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex-auto">
                  <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </main>
  )
}
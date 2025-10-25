'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Header from "@/components/header"
import Footer from "@/components/footer"

const people = [
  {
    name: 'CHLOE DENG',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
  {
    name: 'DANIEL LIN',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
  {
    name: 'JAYDEN CHEN',
    role: 'Chess Education Director',
    imageUrl:
      'https://static.wixstatic.com/media/3b897c_f73a00bcfb09417f8d559733c1f0bb57~mv2.jpg/v1/crop/x_19,y_0,w_634,h_634/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jayden%20Chan_edited_edited.jpg',
    bio: 'My name is Jayden Chan, and I am a sophomore at the Bronx High School of Science. I practice Brazilian Jiu-Jitsu, Muay Thai, basketball, saxophone, and the guitar. I enjoy playing chess, sharing my expertise and teaching others. I hope to pursue a career in chemical engineering in the future.',
  },
  {
    name: 'KAITLYN YAU',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
  {
    name: 'SAMANTHA TAN',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
  {
    name: 'THOMAS LIU',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
    {
    name: 'TIFFANY QI',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
  },
    {
    name: 'ZACHARY YAU',
    role: 'Debate Outreach Coordinator',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ReadNationLogo.png',
    bio: 'Details Coming Soon',
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
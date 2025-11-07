'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import WorldMap from "@/components/ui/world-map";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CTA from "@/components/CTA";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";

const about = [
  { name: 'Leaders', href: '/aboutPage' },
  { name: 'News', href: '#' },
  { name: 'Join Us', href: '#' },
]
const stats = [
  { label: 'Transformed students', value: '150' },
  { label: 'Number of dedicated TAs', value: '110' },
  { label: 'Accumlated Hours', value: '3,100' },
]
const values = [
  {
    name: 'Group Sessions',
    description:
      'We keep our class sizes small. It feels like a private lesson without the social anxiety.',
  },
  {
    name: 'Individual Sessions',
    description:
      'If you really want the 1-on-1, we offer those too.',
  },
  {
    name: 'Debate Office Hours',
    description:
      'Assorted help for all your debate needs, from drills to writing classes.',
  },
]


const people = [
  {
    name: 'AIDEN TAN',
    role: 'Founder/Chief Technology Officer',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_9071457cb5e8449286ccc10b80563d1e~mv2.png/v1/crop/x_0,y_681,w_1170,h_1170/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tan%2CAiden.png',
    bio: 'Aiden Tan is a freshman at the University of Illinois Urbana-Champaign, majoring in Electrical Engineering. A proud graduate of Stuyvesant High School, he has a strong passion for robotics and enjoys building Legos and model kits. In his leisure time, Aiden loves to travel and discover exotic foods from diverse cultures. Aiden is open to new ideas and embraces opportunities to improve his teaching in order to make the greatest impact.',
  },
  {
    name: 'MIKAYLA LIN ',
    role: 'Founder/Chief Operating Officer',
    imageUrl:
      'https://static.wixstatic.com/media/fb7015_515b5f9cc7474d3b9a815e1928666e84~mv2.jpg/v1/crop/x_102,y_0,w_537,h_537/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9537_edited.jpg',
    bio: 'Mikayla is a first-year student at Harvard University concentrating in Math and Physics where she is exploring her interests in topology, game theory, and black holes. At Harvard, she is involved in the Harvard MIT Math Tournament as community staff, where she helps run the event, building on her experience as Math Team Captain in high school and giving back to the math community. She is especially passionate about supporting girls in math—having started an annual math competition (GEMS) in order to connect girls across the city. Outside of academics, her favorite hobbies are puzzle hunting and competing with the Harvard Ballroom Dance Team, where she is learning how to waltz, foxtrot, and tango!',
  },
  {
    name: 'SAMANTHA TAN',
    role: 'Founder/Chief Administrative Officer',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_ab048629c2714d0486b4d4273b5056bd~mv2.jpg/v1/crop/x_0,y_360,w_2160,h_2160/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Samantha.jpg',
    bio: 'Samantha Tan is a high-achieving junior passionate about healthcare and robotics. As the head of operations on her school&apos;s FIRST Robotics team (Techknights 334), she has mentored hundreds of students through her team. She has also raised thousands of dollars for her team through grantwriting, sponsorships, and fundraising events. She also shadows healthcare workers at an allergy clinic. Outside of academics, she loves to crochet, draw, and read.',
  },
  {
    name: 'THOMAS LIU',
    role: 'Founder/Marketing Director',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_a3b77fcee2cd4f049ece10efa83d3bb3~mv2.jpeg/v1/crop/x_0,y_360,w_1512,h_1512/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/thomas.jpeg',
    bio: 'Thomas Liu lives in New Jersey, where he is a sophomore. He is interested in politics, and discovered debate at the onset of the pandemic. A determined, disciplined, and dedicated go-getter, Thomas quickly rose to become one of the top competitor in his school debate team.  His goal this year is to land a TOC bid in Kentucky.  A mathematics guru, he has also represented his school Math team in many competitions. Thomas has many interests and talents, including piano, violin, basketball and playing video games. His goal in life is to go into business and to make a real difference in the world.',
  },
    {
    name: 'DANIEL LIN',
    role: 'Founder/Outreach Director',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_77ff4bca1da34c34ad08c634a7bd5208~mv2.jpeg/v1/crop/x_18,y_0,w_252,h_252/fill/w_353,h_353,al_c,lg_1,q_80,enc_avif,quality_auto/daniel.jpeg',
    bio: 'Daniel Lin is a senior at John F. Kennedy High School. His main interests include biomedicine and public policy. As Model United Nations club president and co-founder, he has curated school-wide fundraising events and participated in the NHSMUN conference. On top of science research at Columbia University last summer, Daniel also spent time volunteering at Mount Sinai West. His interests include basketball, photography, and classical music.',
  },
      {
    name: 'JAYDEN CHEN',
    role: 'Chess Education Director',
    imageUrl:
      'https://static.wixstatic.com/media/3b897c_f73a00bcfb09417f8d559733c1f0bb57~mv2.jpg/v1/crop/x_19,y_0,w_634,h_634/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jayden%20Chan_edited_edited.jpg',
    bio: 'My name is Jayden Chan, and I am a sophomore at the Bronx High School of Science. I practice Brazilian Jiu-Jitsu, Muay Thai, basketball, saxophone, and the guitar. I enjoy playing chess, sharing my expertise and teaching others. I hope to pursue a career in chemical engineering in the future.',
  },
]


const blogPosts = [
  {
    id: 1,
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Libero quisquam voluptatibus nam iusto qui dolor',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Asperiores mollitia et dolor autem modi sit eius quisquam',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function mainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 pb-4">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#00C3FF] to-[#8187c0] opacity-68.5"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Reading<br /> Revolutionized
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Every child should have the opportunity to discover the joy of reading. We harness the power of the internet to make our reading program accessible to children all over the world. 
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        //src="https://static.wixstatic.com/media/fb7015_c45a64d548fa4370ac82c91fcef9f218~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/fb7015_c45a64d548fa4370ac82c91fcef9f218~mv2.jpg"
                        src="/photos/ReadNationEvent_IMG_1745.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://static.wixstatic.com/media/dcd8be_b7c45b371c56442e96116419141b84c0~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_b7c45b371c56442e96116419141b84c0~mv2.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://static.wixstatic.com/media/dcd8be_1a94e649ec3a47abbb44f385db6bfb51~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_1a94e649ec3a47abbb44f385db6bfb51~mv2.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        //src="https://static.wixstatic.com/media/dcd8be_91e4871467c94d77acfa03038738c599~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_91e4871467c94d77acfa03038738c599~mv2.png"
                        src="/photos/ReadNationEvent_IMG_1744.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://static.wixstatic.com/media/dcd8be_350dcbb4c1ed4b30aeae0b8f56b0a490~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/dcd8be_350dcbb4c1ed4b30aeae0b8f56b0a490~mv2.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Electronics are everywhere.</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  Do you know what isn't?
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  Children reading. Not only does this impede their academic development, but it also deprives them of the many other benefits associated with reading: pleasure, social connectedness, and a more well-rounded perspective of the surrounding world.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <WorldMap 
              dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
          
          
          />
        </div>


        {/* Services Bento */}
        {/* <div className="bg-white py-24 sm:py-32"> */}
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-sky-500">You have options</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          We cater to all needs
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://static.wixstatic.com/media/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_3f41b3395930481fa93d126ddf07c48c~mv2.png"
                className="h-80 object-cover object-left"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-sky-500">Reading</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">For both the social and anti-socials</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    We offer top-of-line individual classes. Feeling socially anxious? Our small class sizes make group classes feel just like the one-on-ones.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://static.wixstatic.com/media/ad31c2_26253f685e50468fb33186ad8c50c9a1~mv2.png/v1/fill/w_441,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/ad31c2_26253f685e50468fb33186ad8c50c9a1~mv2.png"
                className="h-80 object-cover object-left lg:object-right"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-sky-500">Debate Camp</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">For those who like to yap professionally</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    Assorted help for all your debate needs, from drills to writing classes.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://static.wixstatic.com/media/dcd8be_0270e7823d77401e99f3ab0d0be57278~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/dcd8be_0270e7823d77401e99f3ab0d0be57278~mv2.jpg"
                className="h-80 object-cover object-left"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-sky-500">Robotics Outreach</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Want to build things?</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    Coming soon!
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://static.wixstatic.com/media/dcd8be_44fefb2bf5f14e7f8da204f54ff77fcf~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_44fefb2bf5f14e7f8da204f54ff77fcf~mv2.png"
                className="h-80 object-cover"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-sky-500">Summer Sessions</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Bored during the hottest months of the year?</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  They will be 4 days a week, from Mondays to Thursdays. Both individual and group sessions will be offered over the summer.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://static.wixstatic.com/media/dcd8be_727b64ab002a46838ba62981c7eb83da~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/dcd8be_727b64ab002a46838ba62981c7eb83da~mv2.png"
                className="h-80 object-cover"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-sky-500">More to come!</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Get excited</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  We have so many more planned in the future.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

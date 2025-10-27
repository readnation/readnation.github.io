'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Header from "@/components/header";
import Footer from "@/components/footer";
import ArchiveVideo from "@/components/video";

export default function maasaiPage() {

  return (
    <main className="isolate">
      <div className="bg-white">
        <Header />
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Maasai Language Education
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">

                    Read Nation is expanding our reach to the Maasai tribe in Tanzania. With this partnership, we will provide English language education to remote communities among the Maasai.
                  </p>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Our student volunteers will develop teaching materials and fundraise to support educational and technological needs. They also plan to provide live tutoring to local teachers and children in remote areas.
                  </p>
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Learn more about this initiative {' '}
                      <a href="https://www.humanculture.org/readnation" className="font-semibold whitespace-nowrap text-indigo-600">
                        <span aria-hidden="true" className="absolute inset-0" />
                        here <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  {/* <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              alt=""
              src="https://static.wixstatic.com/media/dcd8be_df98b43604fb4f33b2ec77ac6e0d18aa~mv2.jpeg/v1/fill/w_1889,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dcd8be_df98b43604fb4f33b2ec77ac6e0d18aa~mv2.jpeg"
              className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
            />
          </div> */}
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              alt=""
              src="/photos/IMG_8146.jpg"
              className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
            />
          </div>
        </div>

        <div className="mx-auto items-center justify-center p-2">
          <p className="m-auto text-center text-sm font-medium text-pretty text-gray-500 pt-6 sm:text-lg">
            Learn more about the Maasai! A video from our recent call.
          </p>
          <ArchiveVideo />

        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 content-center mx-8 gap-x-8 gap-y-4">
          <div>
            <img class="aspect-3/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/ReadNationEvent_IMG_1745.jpg" />
          </div>
          <div>
            <img class="aspect-3/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/ReadNationEvent_IMG_1744.jpg" />
          </div>
          <div>
            <img class="aspect-3/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/ReadNationEvent_IMG_1713.jpg" />
          </div>
          <div>
            <img class="aspect-3/2 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/ReadNationEvent_IMG_1788.jpg" />
          </div>
          </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 content-center mx-8 gap-x-8 gap-y-4">
          <div>
            <img class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/IMG_8146.jpg" />
          </div>
          <div>
            <img class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/IMG_8145.jpg" />
          </div>
          <div>
            <img class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/photos/IMG_8144.jpg" />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

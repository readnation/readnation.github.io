'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const aboutPageContent = [
  { name: 'Founders', description: 'Say hi to those who started this', href: '/aboutPage/Founders', icon: ChartPieIcon },
  { name: 'Leaders', description: 'We really could not have done this alone', href: '/aboutPage/Leaders', icon: CursorArrowRaysIcon },
]
const archiveContent = [
  { name: 'Maasai', href: '/archives', description: 'We are expanding our reaches!' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Read Nation</span>
            <img
              alt=""
              src="https://static.wixstatic.com/media/fb7015_434f5ddddf1e4071b1dea9450990d1bc~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb7015_434f5ddddf1e4071b1dea9450990d1bc~mv2.png"
              className="h-18 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                          About Us
                          <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>
            
                        <PopoverPanel
                          transition
                          className="absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                          {aboutPageContent.map((item) => (
                            <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                              <a href={item.href} className="block text-sm/6 font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-sm/6 text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </PopoverPanel>
            </Popover>
          <Popover className="relative">
                      <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        Archives
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                      </PopoverButton>
          
                      <PopoverPanel
                        transition
                        className="absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {archiveContent.map((item) => (
                          <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                            <a href={item.href} className="block text-sm/6 font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-sm/6 text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </PopoverPanel>
          </Popover>

          {/* <a href="#" className="text-sm/6 font-semibold text-sky-400">
            Join Us
          </a> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-sky-51900">
            Join Us
          </a> */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfT5xTRo1Gy9cIMrhD0QsyTDgipBouSuCkxqWt9abdY67OMRg/viewform?embedded=true"
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join Us
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Read Nation</span>
              <img
                alt=""
                src="https://static.wixstatic.com/media/fb7015_434f5ddddf1e4071b1dea9450990d1bc~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb7015_434f5ddddf1e4071b1dea9450990d1bc~mv2.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    About Us
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...aboutPageContent].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Archive
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {archiveContent.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Join Us
                </a> */}
              </div>
              <div className="py-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfT5xTRo1Gy9cIMrhD0QsyTDgipBouSuCkxqWt9abdY67OMRg/viewform?embedded=true"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Join Us
                  </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

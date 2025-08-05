import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function Example() {
  return (
    <div className="bg-white">
    <Header/ >
    <div className="bg-white px-6 py-32 lg:px-8"> 
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">Effective 5th August 2025</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Our Privacy Policy
        </h1>
        <p className="mt-6 text-xl/8">
            ReadNation.Inc ("we", "our", or "us") is committed to protecting the privacy and personal information of visitors to our website, <strong>readnation.org</strong>. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>
        <div className="mt-10 max-w-2xl text-gray-600">
            <h2 className = "mt-2 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
                1. Information We Collect
            </h2>
          <p className="mt-4">
            We do not collect personally identifiable information (such as names or email addresses) unless you voluntarily provide it through contact forms or email correspondence.

            However, we may automatically collect certain non-personal information when you visit our website, including:
          </p>
          <ul role="list" className="mt-6 max-w-xl space-y-1 text-gray-600">
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Browser type and version</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Pages visited</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Time spent on pages</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Referring website</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">General geographic location (not specific address)</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Device type</strong>
              </span>
            </li>

          </ul>
          <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
                2. Cookies and Tracking Technologies
            </h2>
          <p className="mt-8">
            Our website uses cookies to enhance user experience. Cookies are small text files stored on your device that help us remember your preferences and understand how our site is being used.

            We may use cookies for:
          </p>

            <ul role="list" className="mt-6 max-w-xl space-y-1 text-gray-600">
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Remembering language or accessibility preferences</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Gathering analytics on how users interact with the website</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Ensuring website functionality and performance</strong>
              </span>
            </li>

          </ul>

        <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
            3. Use of Collected Data
        </h2>
          <p className="mt-6">
            The information we collect is used to:
          </p>
          <ul role="list" className="mt-6 max-w-xl space-y-1 text-gray-600">
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Improve the content, design, and performance of our website</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Understand user behavior and preferences</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
                <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Maintain the security and integrity of our website</strong>
              </span>
            </li>

          </ul>
        <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
            4. Data Security
        </h2>
          <p className="mt-6">
            We take reasonable measures to protect the data collected through our website from loss, misuse, and unauthorized access. However, no method of transmission over the internet is 100% secure.
          </p>

        <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
            5. Third-Party Links
        </h2>
          <p className="mt-6">
            Our website may include links to external websites not controlled by us. We are not responsible for the privacy practices or content of such sites. We encourage you to read the privacy policies of any third-party websites you visit.
          </p>

        <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
            6. Your Rights and Choices
        </h2>
          <p className="mt-6">
            You may:
          </p>
            <ul role="list" className="mt-6 max-w-xl space-y-1 text-gray-600">
                <li className="flex gap-x-3">
                    <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                        <strong className="font-semibold text-gray-900">Disable cookies through your browser settings</strong>
                    </span>
                </li>
                <li className="flex gap-x-3">
                    <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    <span>
                        <strong className="font-semibold text-gray-900">Contact us to inquire about any data we may have collected from you</strong>
                    </span>
                </li>

            </ul>
            <p className = "mt-6">
                To contact us regarding your privacy or data, please email us at [your email address].
            </p>
          
        <h2 className = "mt-8 text-1xl font-semibold tracking-tight text-pretty text-black-500 sm:text-2xl">
            7. Changes to This Privacy Policy
        </h2>
          <p className="mt-6">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

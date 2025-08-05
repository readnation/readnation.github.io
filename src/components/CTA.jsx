export default function CTA() {
  return (
    <div className="bg-white">
      <div className="px-6 pt-10 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Want to help more children read?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            We offer a large range of services from academic tutoring to chess training to debate camp!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=FBQS6SSKUHQL4"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              PayPal Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

' use client '


import Header from "@/components/header";
import Footer from "@/components/footer";

export default function formPage(){
  return (
    <>
    <Header />
      <main className="isolate min-h-full">
        <div className="bg-white px-6 lg:px-8">
          <div className="mx-auto pt-12 pb-6 max-w-2xl sm:text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-black-500 sm:text-5xl">
                    Join Us!
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                    We need more people like you to help keep us running!
                </p>
                </div>
          <div className="flex justify-center items-center h-3/4">
            <div className="w-full md:w-3/4 p-12 overflow-hidden rounded-lg">
              <iframe
                src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfT5xTRo1Gy9cIMrhD0QsyTDgipBouSuCkxqWt9abdY67OMRg/formResponse?embedded=true"
                width="100%"
                height="100%"
                className="rounded-lg h-150"
                title="Registration"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
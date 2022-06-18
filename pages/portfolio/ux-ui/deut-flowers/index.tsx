import React from 'react'
import NavUx from '../../../../components/core/portfolio/ux/NavUx'

const index = () => {
  return (
    <>
      <main className="h-full">
        <NavUx />
        <div className="flex justify-center mt-5">
          <div className="container px-4 md:px-2 max-w-5xl">
            <section>
              <div className=" w-full flex justify-center">
                <img src="/images/ux-ui/Deut-flowers.png" className="w-full max-w-2xl" alt="" />
              </div>
              <div className="mt-5">
                <div className="block space-y-3">
                  <p>
                    <span className="text-xl">
                      <strong>The product:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Duet flowers is an online shop that helps a florist sell her flowers, and also
                      connect her to users.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Challenge:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Florist want an online platform to sell her flowers
                    </span>
                    {/* <span className="text-xl">
                    of a Conversational User Interface in order to delight users.
                  </span> */}
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Project goal {'&'} Solution:</strong>&nbsp;Our solution was
                      to&nbsp;Design an easy to use and accessible app for a florist
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Target audience:</strong>&nbsp; Graduates, under-graduates, self
                      employed, unemployed
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>My role:</strong>&nbsp;UX designer, us researcher
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Responsibilities:</strong>&nbsp;paper and digital wireframing, low and
                      high-fidelity prototyping, conducting usability studies, accounting for
                      accessibility, and iterating on designs.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Project duration:</strong>&nbsp;3 Weeks
                    </span>
                  </p>
                </div>
              </div>
            </section>
            <section id="research" className="mt-10">
              <h1 className="text-5xl my-3 text-center">
                <strong>Research</strong>
              </h1>
              <div className="mt-5">
                {/*  */}
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="">
                    <h2 className="font-bold">User personas</h2>
                    <div className="my-2 flex justify-center mb-2">
                      <img
                        src="/images/ux-ui/duet-personas.png"
                        className="flex-1 w-full border border-green-200"
                        alt="research"
                      />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-bold">User story</h2>
                    <div className="my-2 flex justify-center mb-2">
                      <img
                        src="/images/ux-ui/duet-user-story.png"
                        className="flex-1 w-full border border-green-200"
                        alt="research"
                      />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-bold">Problem statement</h2>
                    <div className="my-2 flex justify-center mb-2">
                      <img
                        src="/images/ux-ui/duet-problem-statement.png"
                        className="flex-1 w-full border border-green-200"
                        alt="research"
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </section>
            <section className="mt-16">
              <h1 className="text-3xl my-3">
                <strong>Site map</strong>
              </h1>
              <div className="">
                <img src="/images/ux-ui/duet-sitemap.png" alt="" />
              </div>
              <h1 className="text-3xl my-3 mt-3">
                <strong>Low fidelity Design</strong>
              </h1>
              <div className="">
                <img src="/images/ux-ui/duet-lofi.png" alt="" />
              </div>
            </section>
            <section className="mt-16">
              <h1 className="text-3xl my-3">
                <strong>Low-fidelity prototype</strong>
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-3">
                <div className="md:max-w-[60%]">
                  <p className="">
                    Using the completed set of digital wireframes, I created a low-fidelity
                    prototype. The primary user flow I connected was building and ordering flowers,
                    so the prototype could be used in a usability study.
                  </p>
                  <p className="mt-3 mb-1">View the duet florist app Lo-Fi</p>
                  <a
                    href="https://xd.adobe.com/view/6667d080-b0d5-40a8-a7c8-e452ae731c43-3334/?fullscreen"
                    className="font-bold text-blue-300 underline"
                    target={'_blank'}
                  >
                    low-fidelity prototype
                  </a>
                </div>
              </div>
            </section>
            <section className="mt-16">
              <div className="">
                <div className="">
                  <h1 className="text-3xl my-3 mt-3">
                    <strong>High-fidelity mockup design</strong>
                  </h1>
                  <div className="">
                    <img src="/images/ux-ui/duet-mockup.png" alt="duet mockup" />
                  </div>
                </div>

                <div className="w-full">
                  {/* <div className=""> */}
                  <h1 className="text-3xl my-3">
                    <strong>High-fidelity prototype</strong>
                  </h1>
                  <img
                    src="/images/ux-ui/duet-hifi.png"
                    className="flex-1 w-full"
                    alt="duet-lofi"
                  />
                  {/* </div> */}
                </div>
                <div className="">
                  <p className="">
                    The final high-fidelity prototype presented a clearer user flows for Duet
                    florust app for searching, ordering and checkout
                  </p>
                  <p className="mt-3 mb-1">View the Duet florist app</p>
                  <a
                    href="https://xd.adobe.com/view/5b4df141-6c1c-41a2-83dd-a7bd11d830f7-0e1e/?fullscreen"
                    className="font-bold text-blue-300 underline"
                    target={'_blank'}
                  >
                    High-fidelity prototype
                  </a>
                </div>
              </div>
            </section>
            <section className="mt-16">
              <h1 className="text-3xl my-3">
                <strong>Conclusion</strong>
              </h1>
              <div className="mt-5">
                <div className="block space-y-3">
                  <p>
                    <span className="text-xl">
                      <strong>Project impact:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      The app really thinks about how to meet users needs
                    </span>
                    {/* <span className="text-xl">
                      of a Conversational User Interface in order to delight users.
                    </span> */}
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>What I learned:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      While designing the duet florist store, I learned that the first ideas for the
                      app are only the beginning of the process. Usability studies and peer feedback
                      influenced each iteration of the app{'’'}s designs.
                    </span>
                  </p>
                </div>

                <div className="flex justify-center my-6">
                  <div className="py-5 px-5 bg-slate-100">
                    <h3 className="text-xl text-center">
                      Thank you for your time reviewing my work on the Duet's florist app, If you’d
                      like to see more or get in touch, my contact information is provided below.
                    </h3>

                    <div className="flex justify-center items-center my-3">
                      <p>
                        <span className="text-xl">
                          <strong>Linkedin:</strong>&nbsp;
                        </span>
                        <span className="text-xl">
                          <a
                            href="https://www.linkedin.com/in/chuddyjoachim/"
                            className="font-bold text-blue-300 underline"
                            target={'_blank'}
                          >
                            Joachim Chikezie | LinkedIn
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default index

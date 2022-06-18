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
                <img src="/images/ux-ui/jobber.png" className="w-full max-w-2xl" alt="" />
              </div>

              <div className="mt-5">
                <div className="block space-y-3">
                  <p>
                    <span className="text-xl">
                      <strong>The product:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Jobber is an online job search platform that connect, techies and designers to
                      their dream job and company buy items.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Challenge:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      College graduates and self thought designers don't really know how to go about
                      job search, jobber solves that by bringing the job to them connecting
                      employers and employees
                    </span>
                    {/* <span className="text-xl">
                    of a Conversational User Interface in order to delight users.
                  </span> */}
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Project goal {'&'} Solution:</strong>&nbsp;Our solution was
                      to&nbsp;Design an easy to use and accessible app for Jobber that allows users
                      to easily find jobs
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
                <div className="block space-y-3">
                  <p>
                    <span className="text-xl">
                      <strong>Research summary:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      I conducted interviews and created Affinity diagrams and insight
                      identification template to understand the users I’m designing for and their
                      needs. A primary user group identified through research Was a graduate and
                      un-employed who don’t know how to go about apply for jobs since he has a few
                      understaning with ux.
                    </span>
                    <p className="text-xl mt-3"></p>
                  </p>
                  <p>
                    <strong>Affinity diagram</strong>
                  </p>
                  <div className="my-2 flex justify-center">
                    <img src="/images/ux-ui/jobber/jobber-affinity.png" alt="jobber-affinity.png" />
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-16">
              <h1 className="text-3xl my-3 mt-3">
                <strong>wireframe and Lo-Fi</strong>
              </h1>
              <div className="">
                <img src="/images/ux-ui/jobber/jobber-lofi.png" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold my-3">User testing results:</h2>
                <div className="grid grid-col-2 md:grid-cols-4 gap-4">
                  <p>
                    <span className="text-xl">
                      <strong>Ease of use:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Other app for job aplication are quite uneasy to use
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Search:</strong>&nbsp;
                    </span>
                    <span className="text-xl">Feature to search for preferred jobs</span>
                  </p>
                </div>
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
                    prototype. The primary user flow I connected was job searches, so the prototype
                    could be used in a usability study.
                  </p>
                  <p className="mt-3 mb-1">View the Jobber's LO-FI</p>
                  <a
                    href="https://www.figma.com/proto/fgLezpnHkKYOtyve2couUk/job-search-google-ux?node-id=107%3A24&scaling=scale-down&page-id=107%3A2&starting-point-node-id=107%3A4"
                    className="font-bold text-blue-300 underline"
                    target={'_blank'} rel="noreferrer"
                  >
                    low-fidelity prototype
                  </a>
                </div>
                <div className="flex-1 w-full mx-1">
                  {/* <div className=""> */}
                  {/* <img
                    src="/images/ux-ui/meng-lofi.png"
                    className="flex-1 w-full"
                    alt="meng-lofi"
                  /> */}
                  {/* </div> */}
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
                    <img src="/images/ux-ui/jobber/jobber-mockup.png" alt="" />
                  </div>
                </div>

                <div className="w-full">
                  {/* <div className=""> */}
                  <h1 className="text-3xl my-3">
                    <strong>High-fidelity prototype</strong>
                  </h1>
                  <img
                    src="/images/ux-ui/jobber/jobber-hifi.png"
                    className="flex-1 w-full"
                    alt="meng-lofi"
                  />
                  {/* </div> */}
                </div>
                <div className="">
                  <p className="">
                    The final high-fidelity prototype presented a clearer user flows for Jobber
                  </p>
                  <p className="mt-3 mb-1">View the Jobber Hi-Fi</p>
                  <a
                    href="https://www.figma.com/proto/3rTlInuRvHy1XDUtwX8vE1/portfolio?node-id=515%3A59&scaling=scale-down&page-id=0%3A1&starting-point-node-id=515%3A59"
                    className="font-bold text-blue-300 underline"
                    target={'_blank'} rel="noreferrer"
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
                      While designing the Jobber app, I learned about affinity diagram and insight
                      identofocation
                    </span>
                  </p>
                </div>

                <div className="flex justify-center my-6">
                  <div className="py-5 px-5 bg-slate-100">
                    <h3 className="text-xl text-center">
                      Thank you for your time reviewing my work on the Jobber, If you’d like to see
                      more or get in touch, my contact information is provided below.
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
                            target={'_blank'} rel="noreferrer"
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

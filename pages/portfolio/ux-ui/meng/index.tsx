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
                <img src="/images/ux-ui/meng-landing.png" className="w-full max-w-2xl" alt="" />
              </div>

              <div className="mt-5">
                <div className="block space-y-3">
                  <p>
                    <span className="text-xl">
                      <strong>The product:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Meng is a store that sells grocery items, Meng targets customers like
                      commuters and workers who lack the time or ability to go to grocery stores to
                      buy items.
                    </span>
                    <span className="text-xl">
                      of a Conversational User Interface in order to delight users.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Challenge:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Busy workers and commuters lack the time necessary to go to grocery stores to
                      get food items.
                    </span>
                    {/* <span className="text-xl">
                      of a Conversational User Interface in order to delight users.
                    </span> */}
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Project goal {'&'} Solution:</strong>&nbsp;Our solution was
                      to&nbsp;Design an app for Meng that allows users to easily order and pick up
                      fresh, healthy groceries.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Target audience:</strong>&nbsp; workers and commuters
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>My role:</strong>&nbsp;UX designer, designing an app for Meng store
                      from conception to delivery.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Responsibilities:</strong>&nbsp;Conducting interviews, paper and
                      digital wireframing, low and high-fidelity prototyping, conducting usability
                      studies, accounting for accessibility, and iterating on designs.
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Project duration:</strong>&nbsp;5 Weeks
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
                      I conducted interviews and created personas and empathy maps to understand the
                      users I’m designing for and their needs. A primary user group identified
                      through research Was a full time worker who don’t have time go to stores to
                      buy items.
                    </span>
                    <p className="text-xl mt-3">
                      This user group confirmed initial assumptions about Meng’s store customers,
                      but research also revealed that time was not the only factor limiting users
                      from Going to the store. Other user problems included obligations, interests,
                      or challenges that make it difficult to get groceries for Home use or go to
                      store in-person.
                    </p>
                  </p>
                  <div className="my-2 flex justify-center">
                    <img src="/images/ux-ui/research.jpg" alt="research" />
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-16">
              <h1 className="text-3xl my-3">
                <strong>Paper wireframe</strong>
              </h1>
              <div className="">
                <img src="/images/ux-ui/meng-paper-wireframe.png" alt="" />
              </div>
              <h1 className="text-3xl my-3 mt-3">
                <strong>Digital wireframe</strong>
              </h1>
              <div className="">
                <img src="/images/ux-ui/meng-digital-wireframe.png" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold my-3">User testing results:</h2>
                <div className="grid grid-col-2 md:grid-cols-4 gap-4">
                  <p>
                    <span className="text-xl">
                      <strong>Time:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Working adults are too busy to find their way to the store
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Accessibility:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Platforms for ordering Groceries are not equipped with assistive technologies
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Ease of use:</strong>&nbsp;
                    </span>
                    <span className="text-xl">
                      Other app for ordering groceries are quite uneasy to use
                    </span>
                  </p>
                  <p>
                    <span className="text-xl">
                      <strong>Search:</strong>&nbsp;
                    </span>
                    <span className="text-xl">Feature to search for preferred grocery</span>
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
                    prototype. The primary user flow I connected was building and ordering
                    grocery(s),, so the prototype could be used in a usability study.
                  </p>
                  <p className="mt-3 mb-1">View the Meng’s grocery app</p>
                  <a
                    href="https://www.figma.com/proto/3rTlInuRvHy1XDUtwX8vE1/portfolio?node-id=543%3A2460&scaling=scale-down&page-id=541%3A2359&starting-point-node-id=543%3A2460"
                    className="font-bold text-blue-300 underline"
                    target={'_blank'}
                  >
                    low-fidelity prototype
                  </a>
                </div>
                <div className="flex-1 w-full mx-1">
                  {/* <div className=""> */}
                  <img
                    src="/images/ux-ui/meng-lofi.png"
                    className="flex-1 w-full"
                    alt="meng-lofi"
                  />
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
                    <img src="/images/ux-ui/meng-mockup.png" alt="" />
                  </div>
                </div>

                <div className="w-full">
                  {/* <div className=""> */}
                  <h1 className="text-3xl my-3">
                    <strong>High-fidelity prototype</strong>
                  </h1>
                  <img
                    src="/images/ux-ui/meng-hifi.png"
                    className="flex-1 w-full"
                    alt="meng-lofi"
                  />
                  {/* </div> */}
                </div>
                <div className="">
                  <p className="">
                    The final high-fidelity prototype presented a clearer user flows for Meng’s app
                    for searching, ordering and checkout
                  </p>
                  <p className="mt-3 mb-1">View the Meng’s grocery app</p>
                  <a
                    href="https://www.figma.com/proto/3rTlInuRvHy1XDUtwX8vE1/portfolio?node-id=515%3A59&scaling=scale-down&page-id=0%3A1&starting-point-node-id=515%3A59"
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
                      While designing the Meng’s grocery store app, I learned that the first ideas
                      for the app are only the beginning of the process. Usability studies and peer
                      feedback influenced each iteration of the app{'’'}s designs.
                    </span>
                  </p>
                </div>

                <div className="flex justify-center my-6">
                  <div className="py-5 px-5 bg-slate-100">
                    <h3 className="text-xl text-center">
                      Thank you for your time reviewing my work on the Meng’s grocery app! If you’d
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

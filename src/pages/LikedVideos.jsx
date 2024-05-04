import React from "react";

function LikedVideos() {
  return (
    <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div class="flex flex-col gap-4 p-4">
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="JavaScript Fundamentals: Variables and Data Types"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                20:45
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="codemaster"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                JavaScript Fundamentals: Variables and Data Types
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">10.3k Views · 44 minutes ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="codemaster"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Code Master</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn the basics of JavaScript, including variables, data types, and how to use them
                in your programs.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Getting Started with Express.js"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                22:18
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="expresslearner"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">Getting Started with Express.js</h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">11.k Views · 5 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="expresslearner"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Express Learner</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn the basics of building web applications with Node.js and Express.js framework.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Building a RESTful API with Node.js and Express"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                24:33
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="apibuilder"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Building a RESTful API with Node.js and Express
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">14.5k Views · 7 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="apibuilder"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">API Builder</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to create a RESTful API using Node.js and the Express framework for
                building web applications.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Introduction to React Native"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                19:58
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="reactnativedev"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">Introduction to React Native</h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">10.9k Views · 8 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="reactnativedev"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">React Native Dev</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Discover how to build mobile applications using React Native for both Android and
                iOS platforms.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Creating Custom Hooks in React"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                16:37
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="hookmaster"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">Creating Custom Hooks in React</h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">9.3k Views · 9 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="hookmaster"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Hook Master</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to create and use custom hooks to share logic across multiple React
                components.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Building Scalable Web Applications with Django"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                32:18
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="djangomaster"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Building Scalable Web Applications with Django
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">18.9M Views · 12 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="djangomaster"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Django Master</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to build robust and scalable web applications using the Django framework
                for Python.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Creating Interactive UIs with React and D3"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                29:30
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="reactd3"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Creating Interactive UIs with React and D3
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">20.1k Views · 14 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="reactd3"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">ReactD3</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to build dynamic and interactive user interfaces with React and the D3.js
                data visualization library.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Node.js Authentication with Passport.js"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                26:58
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="passportpro"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Node.js Authentication with Passport.js
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">21.2k Views · 15 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="passportpro"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Passport Pro</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to implement user authentication in Node.js applications using the
                Passport.js middleware.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Data Visualization with Tableau"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                32:14
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="tableaumaster"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">Data Visualization with Tableau</h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">24.5k Views · 18 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="tableaumaster"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Tableau Master</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to create stunning visualizations and dashboards using Tableau for data
                analysis.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Building Real-Time Applications with Socket.IO"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                27:37
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="socketioexpert"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Building Real-Time Applications with Socket.IO
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">25.6k Views · 19 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="socketioexpert"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">Socket.IO Expert</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to create real-time applications using Socket.IO for seamless
                communication between clients and servers.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Advanced CSS: Animations and Transitions"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                31:55
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cssanimations"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">
                Advanced CSS: Animations and Transitions
              </h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">28.9k Views · 22 hours ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="cssanimations"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">CSS Animations</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Learn how to create captivating animations and transitions using CSS for dynamic web
                experiences.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-3xl gap-x-4 md:flex">
          <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
            <div class="w-full pt-[56%]">
              <div class="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Advanced React Patterns"
                  class="h-full w-full"
                />
              </div>
              <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                30:25
              </span>
            </div>
          </div>
          <div class="flex gap-x-2 md:w-7/12">
            <div class="h-10 w-10 shrink-0 md:hidden">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="reactpatterns"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="w-full">
              <h6 class="mb-1 font-semibold md:max-w-[75%]">Advanced React Patterns</h6>
              <p class="flex text-sm text-gray-200 sm:mt-3">30.1k Views · 1 day ago</p>
              <div class="flex items-center gap-x-4">
                <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="reactpatterns"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <p class="text-sm text-gray-200">React Patterns</p>
              </div>
              <p class="mt-2 hidden text-sm md:block">
                Explore advanced patterns and techniques for building scalable and maintainable
                React applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LikedVideos;

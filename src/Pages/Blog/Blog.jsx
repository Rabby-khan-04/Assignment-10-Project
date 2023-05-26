import React from "react";
import "./Blog.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="pb-10 text-center space-y-6">
          <h2 className="text-white font-bold text-3xl">
            Recipe<span className="text-primary">Riot</span> Blog
          </h2>
          <Pdf targetRef={ref} filename="blog.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="btn btn-primary text-xl font-bold"
              >
                Generate Blog PDF
              </button>
            )}
          </Pdf>
        </div>
        <div className="space-y-8 bg-black p-4" ref={ref}>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is the
              the differences between uncontrolled and controlled components
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              <span className="font-semibold text-primary">
                Uncontrolled Components :{" "}
              </span>{" "}
              It is similar to the traditional HTML form inputs. where the form
              element's data is handled by the DOM. It maintains their own state
              and will be updated when the input value changes.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">
                Controlled Components :{" "}
              </span>{" "}
              In the controlled component the form input element’s values are
              totally driven by event handlers. Here it is bound to a value, and
              its changes will be handled in code by using event-based
              callbacks. The input form element is handled by the react itself
              rather than the DOM.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>How to
              validate React props using PropTypes
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              PropTypes is a package that allows to define the expected types of
              props that the React component should receive.
            </p>
            <p className="text-xl">Here’s how you can use it:</p>
            <ul className="list-disc list-inside text-xl marker:text-primary">
              <li>Import PropTypes from the prop-types package.</li>
              <li>
                Define the expected propTypes for component by adding a
                propTypes object to your component.
              </li>
              <li>
                In the propTypes object, each property represents a prop that
                the component expects to receive.
              </li>
              <li>
                After defined the propTypes for the component, if a prop is
                passed to a component that doesn’t match the defined propTypes,
                it will give a warning in the console.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is the
              difference between nodejs and express js
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              <span className="font-semibold text-primary">Node.js: </span>{" "}
              Node.js is an open source and cross-platform runtime environment
              for executing JavaScript code outside of a browser.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">Express.js: </span>{" "}
              Express is a small framework that sits on top of Node.js’s web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your application’s
              functionality with middle ware and routing.
            </p>
            <table className="border-collapse compare__table w-full text-xl">
              <thead>
                <tr>
                  <th>Node.js</th>
                  <th>Express.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    It is used to build server-side, input-output, event-driven
                    apps.
                  </td>
                  <td>
                    It is used to build web-apps using approaches and principles
                    of Node.js.
                  </td>
                </tr>
                <tr>
                  <td>It is built on Google’s V8 engine.</td>
                  <td>It is built on Node.js.</td>
                </tr>
                <tr>
                  <td>It requires more coding time.</td>
                  <td>It requires less coding time.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is a
              custom hook, and why will you create a custom hook
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              <span className="font-semibold text-primary">Custom Hooks: </span>{" "}
              Custom hooks are reusable functions that can use to add special
              and unique functionality to the React applications.
            </p>
            <p className="text-xl">
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

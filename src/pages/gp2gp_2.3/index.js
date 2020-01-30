import React from "react"
import Header from "../../components/header"
import { Layout } from "../../components/layout"
import { PermenantMenu } from "../../components/permenantmenu"
import "../index.scss"

const Page = ({ children }) => (
  <React.Fragment>
    <Header
      serviceName={"Patient Record Migration: Developer website"}
      phaseBanner={{
        text:
          "This website and the standards contained is in early development. Whilst we hope you find it useful we would not recommend using this as your only source of guidance for developing.",
        tag: "Development:",
      }}
    />
    <Layout>
      <div className="app-pane">
        <div className="app-pane__side-bar">
          <PermenantMenu
            data={{
              items: [
                {
                  url: "#top",
                  label: "Overview",
                  selected: true
                },
                {
                  url: "/prm-external-developer-website/gp2gp_2.3/vision",
                  label: "Vision",
                },
                {
                  url: "/prm-external-developer-website/gp2gp_2.3/scope",
                  label: "Scope",
                },
              ],
            }}
          />
        </div>
        <div className="app-pane__main-content">
          <h1>GP2GP 2.3: Enhanced Managment Information (MI)</h1>
          <h2>Overview</h2>
          <p>
            In GP2GP we currently see a lot of errors that we either:
          </p>
            <ul>
              <li>cannot currently measure</li>
              <li>or when we can measure, cannot currently understand.</li>
            </ul>
          <p>
            The aim of the "Enhanced MI" specification update is to provide
            visibility in these key areas in a timely fashion.
          </p>
          <p>
            The goal is to provide additional information that is not currently
            provided in the 2.2b MI specification:
          </p>
          <h3>Sending Practice specific</h3>
          <ul>
            <li>
              For each attachment that is in the EHR:
              <ul>
                <li>Size</li>
                <li>Type</li>
                <li>Code</li>
              </ul>
            </li>
            <li>Whether that attachment was included in thhe GP2GP message</li>
            <li>Usage of 'Placeholders' when attachments are not sent</li>
          </ul>
          <h3>Recieving Practice specifc</h3>
          <ul>
            <li>
              For each attachment that is in the GP2GP message:
              <ul>
                <li>Size</li>
                <li>Type</li>
                <li>Code</li>
              </ul>
            </li>
            <li>Whether that attachment was integrated into the record</li>
            <li>
              For each degrade:
              <ul>
                <li>the code that was degraded</li>
                <li>The number of times it was degraded</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

export default Page

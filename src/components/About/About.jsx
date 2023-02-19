import React from "react";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import "./About.css";

function About() {
  return (
    <div className="ab-container">
      <div className="about">
        <div>
          <h3>About MAXXFIN.</h3>
        </div>
        <div>
          <p>
            Parpella is a web-based platform providing finance, tax and legal
            compliance services on demand. Our services include business
            registration services, taxation services, internal auditing,
            corporate compliance, accounting and bookkeeping and much more. As
            an accounting service provider, we offer a full range of
            bookkeeping, GST Registration, and compliance services for small to
            mid-sized businesses. We remove the burden of day-to-day bookkeeping
            chores, ensure statutory compliance and provide cost effective
            financial expertise on demand. By partnering with us, we can help
            you manage critical non-core functions whereby you can focus on
            maximizing your core business operations. 
            Parpella provides all the
            essential services required for starting up your business venture.
            We can help you with strategizing your business idea from square one
            till a fully functional enterprise is ready and beyond. We shall
            assist you in choosing the right form of business fitting your
            requirements and convenience.
          </p>
        </div>
      </div>
      <div className="about">
        <EnquiryForm/>
      </div>
    </div>
  );
}

export default About;

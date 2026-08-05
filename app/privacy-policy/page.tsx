import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects the personal information you share through our website, phone, and WhatsApp enquiries.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="5 August 2026">
      <section>
        <p>
          This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles the personal information you
          provide when you use {siteConfig.domain} or contact us about our ECM tuning,
          TCM tuning, ECU remapping, transmission rebuild, and engine rebuild services.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We only collect information you choose to give us. This may include:</p>
        <ul>
          <li>Your name and phone number, when you submit an enquiry form</li>
          <li>Your vehicle make, model, and a description of the service you need</li>
          <li>Your email address, if you contact us by email</li>
          <li>
            Standard technical data your browser sends automatically, such as IP address,
            device type, and pages visited
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information you provide only to:</p>
        <ul>
          <li>Respond to your enquiry and provide a quote for the service you asked about</li>
          <li>Contact you about your vehicle, booking, or ongoing work</li>
          <li>Keep a service record of work carried out on your vehicle</li>
          <li>Improve our website and the services we offer</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for
          marketing purposes.
        </p>
      </section>

      <section>
        <h2>Enquiry Form and WhatsApp</h2>
        <p>
          Our website enquiry form does not store your details on our servers. When you
          submit the form, it opens WhatsApp with your details pre filled so you can review
          and send the message yourself. Messages sent through WhatsApp are subject to
          WhatsApp&rsquo;s own privacy practices, which you can review on their website.
        </p>
      </section>

      <section>
        <h2>Cookies and Analytics</h2>
        <p>
          Our website may use cookies and similar technologies to understand how visitors
          use the site and to measure the performance of our advertising. This can include
          services such as Google Analytics and Google Ads conversion tracking, which may
          set cookies in your browser.
        </p>
        <p>
          You can control or disable cookies through your browser settings. Disabling
          cookies will not prevent you from using the site or contacting us.
        </p>
      </section>

      <section>
        <h2>Third Party Services</h2>
        <p>
          Our site embeds a Google Maps view of our workshop location and links to our
          Google Business Profile and WhatsApp. These third party services have their own
          privacy policies, and we do not control how they collect or process data.
        </p>
      </section>

      <section>
        <h2>Data Retention and Security</h2>
        <p>
          We keep enquiry and service records only for as long as is reasonably necessary
          to serve you and to maintain a history of work done on your vehicle. We take
          reasonable measures to protect the information in our possession from
          unauthorised access, but no method of transmission over the internet is
          completely secure.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You may ask us to confirm what personal information we hold about you, correct
          inaccurate details, or delete your information, subject to any records we are
          required to retain. To make a request, contact us using the details below.
        </p>
      </section>

      <section>
        <h2>Children&rsquo;s Privacy</h2>
        <p>
          Our services are intended for adults. We do not knowingly collect personal
          information from children under 18.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, reach us at:
        </p>
        <ul>
          <li>{siteConfig.name}</li>
          <li>{siteConfig.addressLine}</li>
          <li>
            Phone: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </li>
          <li>
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
        </ul>
      </section>
    </LegalPage>
  );
}

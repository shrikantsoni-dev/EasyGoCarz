import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply when you use ${siteConfig.domain} or book ECM tuning, TCM tuning, ECU remapping, transmission rebuild, or engine rebuild services with ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="5 August 2026">
      <section>
        <p>
          These Terms &amp; Conditions apply to your use of {siteConfig.domain} and to any
          service you book with {siteConfig.name}. By using this website or engaging our
          services, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>Quotes and Pricing</h2>
        <p>
          Any figure discussed before inspection is an estimate only. A binding quote is
          issued in writing after we have diagnosed your vehicle. If additional work is
          found once we begin, we will contact you for approval before proceeding — you
          will not be charged for work you have not authorised.
        </p>
      </section>

      <section>
        <h2>Performance Claims</h2>
        <p>
          Power, torque, and efficiency results from ECM tuning, TCM tuning, and ECU
          remapping vary between vehicles and depend on factors including mechanical
          condition, fuel quality, ambient conditions, and driving style. Any figures
          mentioned are indicative and are not guaranteed for your specific vehicle.
        </p>
      </section>

      <section>
        <h2>Manufacturer Warranty</h2>
        <p>
          Modifying your vehicle&rsquo;s factory ECM or TCM calibration may affect
          manufacturer warranty cover on related components. This varies by manufacturer.
          You accept responsibility for this decision, and we will discuss it with you
          before any tuning work begins. We retain a backup of your original file so the
          calibration can be reverted where technically possible.
        </p>
      </section>

      <section>
        <h2>Vehicle Condition</h2>
        <p>
          Tuning assumes your vehicle is mechanically sound. We may decline to tune a
          vehicle if diagnostics reveal a fault that would make tuning unsafe or
          unreliable. We are not responsible for pre-existing faults, wear, or failures
          unrelated to the work we carry out.
        </p>
      </section>

      <section>
        <h2>Legal and Road Use</h2>
        <p>
          It is your responsibility to ensure that any modification to your vehicle
          complies with applicable Indian motor vehicle laws, insurance requirements, and
          emissions regulations in your state. You must inform your insurer of any
          modifications where required by your policy.
        </p>
      </section>

      <section>
        <h2>Workmanship and Parts</h2>
        <p>
          We stand behind our workmanship. Parts supplied are covered by the manufacturer
          or supplier warranty applicable to those parts. Warranty on rebuild work is
          subject to correct running-in, servicing at the recommended intervals, and the
          vehicle not being subjected to misuse, racing, or further modification by others.
        </p>
      </section>

      <section>
        <h2>Booking and Collection</h2>
        <p>
          Timelines given for tuning or rebuild work are estimates in good faith and may
          change based on parts availability or the condition found during teardown. We
          will keep you informed of any material change. Vehicles should be collected
          promptly once work is complete.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the extent permitted by law, our liability in connection with any service is
          limited to the value of the work carried out. We are not liable for indirect or
          consequential losses, including loss of use of the vehicle.
        </p>
      </section>

      <section>
        <h2>Website Content</h2>
        <p>
          Content on this website is provided for general information and does not
          constitute technical or mechanical advice for your specific vehicle. We may
          update the site and these terms at any time without notice.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of India, and any dispute is subject to the
          jurisdiction of the courts of New Delhi.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
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

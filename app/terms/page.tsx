"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary px-5 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-white/75">
            Please read these terms carefully before using our services.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Last updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <MotionSection className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-slate-600 leading-7">
                By accessing and using Aloha AVL Solutions' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Services Description</h2>
              <p className="text-slate-600 leading-7 mb-4">
                Aloha AVL Solutions provides professional audio, video, and lighting system design, installation, and support services including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Audio system design and installation</li>
                <li>Video system integration and deployment</li>
                <li>Lighting design and control systems</li>
                <li>System integration and networking</li>
                <li>Live event production support</li>
                <li>Technical maintenance and support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Agreements</h2>
              <p className="text-slate-600 leading-7 mb-4">
                All projects are subject to separate written agreements that will include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Detailed scope of work and specifications</li>
                <li>Project timeline and milestones</li>
                <li>Pricing, payment terms, and change order procedures</li>
                <li>Warranty and support provisions</li>
                <li>Installation and commissioning requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Payment Terms</h2>
              <p className="text-slate-600 leading-7 mb-4">
                Unless otherwise specified in your project agreement:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>A deposit may be required before work commences</li>
                <li>Progress payments are due according to project milestones</li>
                <li>Final payment is due upon project completion and acceptance</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are subject to applicable taxes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Warranties and Disclaimers</h2>
              <p className="text-slate-600 leading-7 mb-4">
                We provide warranties on our workmanship and pass through manufacturer warranties on equipment. However:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Warranties are subject to proper use and maintenance</li>
                <li>We are not responsible for damage due to misuse or environmental factors</li>
                <li>Third-party equipment is covered by manufacturer warranties only</li>
                <li>Services are provided "as is" without additional warranties</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-7">
                In no event shall Aloha AVL Solutions be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="text-slate-600 leading-7">
                All designs, documentation, and custom software created by Aloha AVL Solutions remain our intellectual property unless otherwise specified in writing. Clients receive a license to use such materials for their intended purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Cancellation and Refunds</h2>
              <p className="text-slate-600 leading-7 mb-4">
                Project cancellation terms vary by project stage:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Design phase cancellations are subject to work completed</li>
                <li>Equipment orders may be subject to restocking fees</li>
                <li>Installation cancellations after scheduling may incur charges</li>
                <li>Custom equipment orders are generally non-refundable</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Force Majeure</h2>
              <p className="text-slate-600 leading-7">
                We are not liable for delays or failures in performance resulting from acts beyond our control, including natural disasters, government actions, labor disputes, or supply chain disruptions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
              <p className="text-slate-600 leading-7">
                These terms are governed by the laws of the State of Florida, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Florida.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms</h2>
              <p className="text-slate-600 leading-7">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <p className="text-slate-600 leading-7 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <p className="text-slate-700 font-medium mb-2">Aloha AVL Solutions</p>
                <p className="text-slate-600">Email: info@avlsolutions.com</p>
                <p className="text-slate-600">Phone: (800) 123-4567</p>
                <p className="text-slate-600">Address: Orlando, FL</p>
              </div>
            </section>

          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
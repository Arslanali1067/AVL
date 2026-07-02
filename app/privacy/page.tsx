"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary px-5 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/75">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Last updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <MotionSection className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-slate-600 leading-7 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Contact us for quotes or consultations</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Submit project inquiries or service requests</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
              <p className="text-slate-600 leading-7 mt-4">
                This may include your name, email address, phone number, company information, project details, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 leading-7 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you project updates and service-related communications</li>
                <li>Develop new services and enhance existing ones</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
              <p className="text-slate-600 leading-7 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>With trusted service providers who assist us in operating our business</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p className="text-slate-600 leading-7">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
              <p className="text-slate-600 leading-7 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking</h2>
              <p className="text-slate-600 leading-7">
                Our website may use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 leading-7">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-7 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
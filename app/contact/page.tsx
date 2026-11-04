import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us & Chambers Consultation | UK Law Firm — Hyderabad',
  description:
    'Schedule a confidential legal consultation with senior advocates M. Umamaheshwar Reddy (B.Sc., M.Sc., LL.B.) and S. Kamalakar (B.B.M., M.C.A., LL.B.) at UK Law Firm chambers in Gachibowli, Hyderabad.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Main Contact Section with Top Padding for Fixed Navbar */}
      <div className="pt-20 sm:pt-24">
        <Contact />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

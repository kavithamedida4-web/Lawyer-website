'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'partners' | 'chambers' | 'reception';
  categoryLabel: string;
  description: string;
}

export const allGalleryPhotos: GalleryPhoto[] = [
  {
    id: 'partners-brass-lamp',
    src: '/real-partners-brass-lamp.jpg',
    alt: 'Founding Partners Sri M. Umamaheshwar Reddy & Sri S. Kamalakar standing with traditional brass lamp at UK Law Firm',
    title: 'Founding Partners in Chambers',
    category: 'partners',
    categoryLabel: 'Founding Partners',
    description:
      'Sri M. Umamaheshwar Reddy and Sri S. Kamalakar standing beside the traditional brass lamp with the UK Law Firm golden wall insignia.',
  },
  {
    id: 'inauguration-ribbon',
    src: '/real-inauguration-ribbon.jpg',
    alt: 'Official firm inauguration ceremony ribbon cutting with chief guest and founding partners',
    title: 'Firm Inauguration Ceremony',
    category: 'reception',
    categoryLabel: 'Inauguration',
    description:
      'Auspicious ribbon-cutting ceremony marking the formal opening of UK Law Firm chambers with chief guest and both founding partners.',
  },
  {
    id: 'umamaheshwar-desk-smiling',
    src: '/real-umamaheshwar-desk-smiling.jpg',
    alt: 'Senior Advocate M. Umamaheshwar Reddy at his consultation desk with Criminal Court Practice and Procedure treatise',
    title: 'Senior Advocate M. Umamaheshwar Reddy',
    category: 'partners',
    categoryLabel: 'Advocate Consultation',
    description:
      'Sri M. Umamaheshwar Reddy at his executive consultation desk with his official High Court nameplate, Criminal Court Practice treatise, and illuminated Law & Justice wall.',
  },
  {
    id: 'kamalakar-desk',
    src: '/real-kamalakar-desk.jpg',
    alt: 'Advocate S. Kamalakar at his consultation desk with Criminal Court Practice treatise',
    title: 'Advocate S. Kamalakar — Chambers Desk',
    category: 'partners',
    categoryLabel: 'Advocate Consultation',
    description:
      'Founding Partner Sri S. Kamalakar seated at his consultation desk with Criminal Court Practice treatise and the Law & Justice wall emblem.',
  },
  {
    id: 'umamaheshwar-bookshelf',
    src: '/real-umamaheshwar-bookshelf.jpg',
    alt: 'Senior Advocate M. Umamaheshwar Reddy reviewing legal treatises in the law library',
    title: 'Chambers Law Library & Research',
    category: 'partners',
    categoryLabel: 'Legal Research',
    description:
      'Sri M. Umamaheshwar Reddy reviewing statutory commentaries and Supreme Court law reports in the chambers legal library.',
  },
  {
    id: 'chambers-conference-boardroom',
    src: '/real-chambers-conference-boardroom.jpg',
    alt: 'Executive Conference Boardroom with white conference table and Law & Justice wall emblem',
    title: 'Executive Conference Boardroom',
    category: 'chambers',
    categoryLabel: 'Chambers & Boardroom',
    description:
      'Spacious client discussion and multi-advocate case strategy boardroom equipped with white marble-top table and Law & Justice insignia.',
  },
  {
    id: 'reception-waiting-lounge',
    src: '/real-reception-waiting-lounge.jpg',
    alt: 'Reception lounge with white leather sofa and 3D UK Law Firm golden wall insignia',
    title: 'Reception & Client Waiting Lounge',
    category: 'reception',
    categoryLabel: 'Reception & Lounge',
    description:
      'Welcoming client reception with plush white sofa, curated legal art, and 3D gold UK Law Firm emblem.',
  },
  {
    id: 'firm-board-entrance',
    src: '/real-firm-board-entrance.jpg',
    alt: 'UK Law Firm official office signboard at Flat No. 201 Maps Apartments',
    title: 'Office Signboard — Flat No. 201',
    category: 'reception',
    categoryLabel: 'Office Entrance',
    description:
      'Official office entrance at Flat No. 201, 2nd Floor, Maps Apartments, Jayabheri Pine Valley, Gachibowli, Hyderabad.',
  },
  {
    id: 'umamaheshwar-standing-suit',
    src: '/real-umamaheshwar-standing-suit.jpg',
    alt: 'Sri M. Umamaheshwar Reddy standing before Law & Justice wall emblem',
    title: 'Advocate Umamaheshwar Reddy — Chambers',
    category: 'partners',
    categoryLabel: 'Founding Partners',
    description:
      'Sri M. Umamaheshwar Reddy in formal advocate suit standing at the firm core wall: "Law & Justice: Integrity, Intellect, Results".',
  },
  {
    id: 'kamalakar-standing-coat',
    src: '/real-kamalakar-standing-coat.jpg',
    alt: 'Advocate S. Kamalakar in court attire and neckband',
    title: 'Advocate S. Kamalakar — Courtroom Robes',
    category: 'partners',
    categoryLabel: 'Founding Partners',
    description:
      'Sri S. Kamalakar in traditional advocate court coat and neckband, prepared for High Court and trial courtroom representation.',
  },
  {
    id: 'umamaheshwar-desk-criminal',
    src: '/real-umamaheshwar-desk-criminal.jpg',
    alt: 'Advocate M. Umamaheshwar Reddy analyzing criminal court practice files at desk',
    title: 'Case Strategy & Legal Briefing',
    category: 'partners',
    categoryLabel: 'Advocate Consultation',
    description:
      'In-depth case analysis and criminal litigation preparation at the consultation desk with Criminal Court Practice and Procedure volume.',
  },
  {
    id: 'umamaheshwar-desk-reading',
    src: '/real-umamaheshwar-desk-reading.jpg',
    alt: 'Sri M. Umamaheshwar Reddy reviewing case brief at desk',
    title: 'Evidentiary & Precedent Review',
    category: 'partners',
    categoryLabel: 'Advocate Consultation',
    description:
      'Thorough review of petition drafts, evidentiary affidavits, and trial records prior to court hearings.',
  },
  {
    id: 'umamaheshwar-desk-front',
    src: '/real-umamaheshwar-desk-front.jpg',
    alt: 'Sri M. Umamaheshwar Reddy consultation desk front view',
    title: 'Private Client Strategy Chamber',
    category: 'partners',
    categoryLabel: 'Advocate Consultation',
    description:
      'Direct consultation desk view where clients receive one-on-one legal guidance and litigation roadmap planning.',
  },
  {
    id: 'chambers-buddha-entrance',
    src: '/real-chambers-buddha-entrance.jpg',
    alt: 'Chambers entrance sanctuary with serene Buddha statue and brass lamps',
    title: 'Chambers Entrance Sanctuary',
    category: 'reception',
    categoryLabel: 'Reception & Entrance',
    description:
      'Peaceful entrance niche featuring a meditative Buddha statue, floral arch, and warm brass pendant lighting.',
  },
  {
    id: 'chambers-executive-desk',
    src: '/real-chambers-executive-desk.jpg',
    alt: 'Executive consultation chamber with law library',
    title: 'Executive Consultation Chamber',
    category: 'chambers',
    categoryLabel: 'Chambers & Boardroom',
    description:
      'Private executive chamber with consultation desk, ergonomic seating, and comprehensive legal library backing the space.',
  },
  {
    id: 'chambers-consultation-room',
    src: '/real-chambers-consultation-room.jpg',
    alt: 'Private client consultation chamber with workstation',
    title: 'Client Consultation Room',
    category: 'chambers',
    categoryLabel: 'Chambers & Boardroom',
    description:
      'Dedicated consultation room for confidential discussions, document scanning, and case file preparation.',
  },
];

type CategoryFilter = 'all' | 'partners' | 'chambers' | 'reception';

export default function FullGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return allGalleryPhotos;
    return allGalleryPhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const currentPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [selectedIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section id="full-gallery" className="py-12 sm:py-16 bg-[#faf8f4] text-gray-900 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button
            onClick={() => {
              setActiveCategory('all');
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#0a1222] text-[#e5bf55] shadow-md border border-[#c9a84c]/50'
                : 'bg-white text-gray-700 hover:bg-[#faecd1]/50 border border-gray-200'
            }`}
          >
            All Photos ({allGalleryPhotos.length})
          </button>

          <button
            onClick={() => {
              setActiveCategory('partners');
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'partners'
                ? 'bg-[#0a1222] text-[#e5bf55] shadow-md border border-[#c9a84c]/50'
                : 'bg-white text-gray-700 hover:bg-[#faecd1]/50 border border-gray-200'
            }`}
          >
            Advocates &amp; Partners (8)
          </button>

          <button
            onClick={() => {
              setActiveCategory('chambers');
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'chambers'
                ? 'bg-[#0a1222] text-[#e5bf55] shadow-md border border-[#c9a84c]/50'
                : 'bg-white text-gray-700 hover:bg-[#faecd1]/50 border border-gray-200'
            }`}
          >
            Chambers &amp; Boardroom (4)
          </button>

          <button
            onClick={() => {
              setActiveCategory('reception');
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'reception'
                ? 'bg-[#0a1222] text-[#e5bf55] shadow-md border border-[#c9a84c]/50'
                : 'bg-white text-gray-700 hover:bg-[#faecd1]/50 border border-gray-200'
            }`}
          >
            Reception &amp; Office (4)
          </button>
        </div>

        {/* Responsive Photo Grid (All 16 Real Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-[3px] border-white shadow-md hover:shadow-xl ring-1 ring-[#c9a84c]/20 hover:ring-[#c9a84c]/60 transition-all duration-500 flex flex-col hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Badge on top-left */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-[#0a1222]/85 backdrop-blur-sm text-[#e5bf55] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#c9a84c]/30 shadow-xs">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick Zoom Pill */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-[#0a1222] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                    <span>🔍</span>
                    <span>View Full Photo</span>
                  </div>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#0a1222] group-hover:text-[#b38634] transition-colors leading-snug mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="text-center mt-8 text-xs text-gray-500">
          Showing {filteredPhotos.length} of {allGalleryPhotos.length} authentic camera photographs of UK Law Firm chambers.
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentPhoto && selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f172a] text-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative border border-white/10 flex flex-col max-h-[92vh] overflow-hidden"
          >
            {/* Header: Counter, Category Badge, Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="bg-[#b38634] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {currentPhoto.categoryLabel}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Photo {selectedIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="text-gray-400 hover:text-white w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-base transition-colors"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>

            {/* Main Image Display (Preserves Natural Proportions) */}
            <div className="relative w-full h-[340px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden bg-black/50 my-3 flex items-center justify-center">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="(max-width: 1024px) 95vw, 900px"
                className="object-contain"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl border border-white/20 transition-all hover:scale-105 z-10 shadow-lg"
                aria-label="Previous photo"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl border border-white/20 transition-all hover:scale-105 z-10 shadow-lg"
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            {/* Caption & Description Footer */}
            <div className="pt-2 text-left">
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#e5bf55] mb-1">
                {currentPhoto.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {currentPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

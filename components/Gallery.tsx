'use client';
import { useState } from 'react';
import Image from 'next/image';

interface GalleryPhoto {
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // 8 Authentic Legal & Chambers Photographs mapped to the 8 collage frames
  const photos = {
    // Far Left Wing (30x40) - Building Exterior showing UK Law Firm signboard
    farLeft: {
      src: '/chambers-building-exterior.jpg',
      alt: 'UK Law Firm Chambers Exterior at Maps Apartments, Gachibowli, Hyderabad',
    },
    // Center-Left Block (Top A4) - Advocate Portrait
    centerLeftTopA4: {
      src: '/advocate-portrait-suit.jpg',
      alt: 'Advocate in Formal Courtroom Attire',
    },
    // Center-Left Block (Top 30x40) - Chambers Reception & 3D Wall Emblem
    centerLeftTop30x40: {
      src: '/chambers-reception.jpg',
      alt: 'Chambers Reception & Waiting Lounge with UK Law Firm 3D Gold Wall Emblem',
    },
    // Center-Left Block (Bottom 50x70 - Large Main Centerpiece) - Partners
    centerLeftBottom50x70: {
      src: '/uk-law-firm-partners.jpg',
      alt: 'UK Law Firm Senior Partners Standing in Chambers',
    },
    // Center-Right Block (Top 50x70 - Large Main Centerpiece) - Conference Room
    centerRightTop50x70: {
      src: '/chambers-conference-room.jpg',
      alt: 'Main Conference & Client Discussion Room with Illuminated Law & Justice Wall',
    },
    // Center-Right Block (Bottom 30x40) - Executive Private Chamber
    centerRightBottom30x40: {
      src: '/chambers-executive-desk.jpg',
      alt: 'Executive Consultation Chamber with Legal Library & Law & Justice Wall',
    },
    // Center-Right Block (Bottom A4) - VIP Client Lounge
    centerRightBottomA4: {
      src: '/chambers-client-lounge.jpg',
      alt: 'Client Waiting Lounge with Truth Builds Justice Inspirational Mural',
    },
    // Far Right Wing (30x40) - Advocate at Law Bookshelf
    farRight: {
      src: '/advocate-reading-bookshelf.jpg',
      alt: 'Senior Advocate examining law reports at chambers library',
    },
  };

  return (
    <section id="gallery" className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* 
          ========================================================================
          8-FRAME SALON GALLERY WALL COLLAGE (Clean Picture Frames, No Text on Image)
          Strictly following the uploaded reference diagram:
          - Far Left: 30x40
          - Center-Left: Top (A4 + 30x40), Bottom (Large 50x70)
          - Center-Right: Top (Large 50x70), Bottom (30x40 + A4)
          - Far Right: 30x40
          ========================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 items-center max-w-[1260px] mx-auto">
          
          {/* 
            ----------------------------------------------------------------------
            COLUMN 1: FAR LEFT WING (30x40 Frame, Vertically Centered)
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-2 flex justify-center my-auto">
            <div
              onClick={() => setSelectedPhoto(photos.farLeft)}
              className="w-full max-w-[210px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border-[6px] border-white shadow-xl hover:shadow-2xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
            >
              <Image
                src={photos.farLeft.src}
                alt={photos.farLeft.alt}
                fill
                sizes="(max-width: 768px) 50vw, 220px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 
            ----------------------------------------------------------------------
            COLUMN 2: CENTER-LEFT BLOCK
            Top: A4 + 30x40
            Bottom: Large 50x70 Centerpiece
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            
            {/* Top Row: A4 (left) + 30x40 (right) */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 items-end">
              
              {/* Frame: A4 */}
              <div
                onClick={() => setSelectedPhoto(photos.centerLeftTopA4)}
                className="col-span-2 h-[160px] sm:h-[190px] rounded-xl overflow-hidden border-[5px] border-white shadow-lg hover:shadow-xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
              >
                <Image
                  src={photos.centerLeftTopA4.src}
                  alt={photos.centerLeftTopA4.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, 160px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Frame: 30x40 */}
              <div
                onClick={() => setSelectedPhoto(photos.centerLeftTop30x40)}
                className="col-span-3 h-[185px] sm:h-[220px] rounded-xl overflow-hidden border-[5px] border-white shadow-lg hover:shadow-xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
              >
                <Image
                  src={photos.centerLeftTop30x40.src}
                  alt={photos.centerLeftTop30x40.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* Bottom Row: Large 50x70 Centerpiece */}
            <div
              onClick={() => setSelectedPhoto(photos.centerLeftBottom50x70)}
              className="w-full h-[320px] sm:h-[370px] rounded-2xl overflow-hidden border-[7px] border-white shadow-2xl hover:shadow-2xl ring-1 ring-[#c9a84c]/40 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative group bg-gray-100"
            >
              <Image
                src={photos.centerLeftBottom50x70.src}
                alt={photos.centerLeftBottom50x70.alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

          {/* 
            ----------------------------------------------------------------------
            COLUMN 3: CENTER-RIGHT BLOCK (Inverted Mirror)
            Top: Large 50x70 Centerpiece
            Bottom: 30x40 + A4
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            
            {/* Top Row: Large 50x70 Centerpiece */}
            <div
              onClick={() => setSelectedPhoto(photos.centerRightTop50x70)}
              className="w-full h-[320px] sm:h-[370px] rounded-2xl overflow-hidden border-[7px] border-white shadow-2xl hover:shadow-2xl ring-1 ring-[#c9a84c]/40 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative group bg-gray-100"
            >
              <Image
                src={photos.centerRightTop50x70.src}
                alt={photos.centerRightTop50x70.alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Row: 30x40 (left) + A4 (right) */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 items-start">
              
              {/* Frame: 30x40 */}
              <div
                onClick={() => setSelectedPhoto(photos.centerRightBottom30x40)}
                className="col-span-3 h-[185px] sm:h-[220px] rounded-xl overflow-hidden border-[5px] border-white shadow-lg hover:shadow-xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
              >
                <Image
                  src={photos.centerRightBottom30x40.src}
                  alt={photos.centerRightBottom30x40.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Frame: A4 */}
              <div
                onClick={() => setSelectedPhoto(photos.centerRightBottomA4)}
                className="col-span-2 h-[160px] sm:h-[190px] rounded-xl overflow-hidden border-[5px] border-white shadow-lg hover:shadow-xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
              >
                <Image
                  src={photos.centerRightBottomA4.src}
                  alt={photos.centerRightBottomA4.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, 160px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

          </div>

          {/* 
            ----------------------------------------------------------------------
            COLUMN 4: FAR RIGHT WING (30x40 Frame, Vertically Centered)
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-2 flex justify-center my-auto">
            <div
              onClick={() => setSelectedPhoto(photos.farRight)}
              className="w-full max-w-[210px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border-[6px] border-white shadow-xl hover:shadow-2xl ring-1 ring-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-500 cursor-pointer relative group bg-gray-100"
            >
              <Image
                src={photos.farRight.src}
                alt={photos.farRight.alt}
                fill
                sizes="(max-width: 768px) 50vw, 220px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative border border-gray-200"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-lg transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

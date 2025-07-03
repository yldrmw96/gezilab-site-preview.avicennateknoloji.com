"use client"
import React, { useState } from 'react';
import Text from '@/components/text';
const testimonials = [
  {
    name: 'June Kalis Harsh',
    title: 'Maithon CEO’su',
    image: '/img/testimonial/testi_1_1.jpg',
    review:
      'Medya stratejileri sonrası test süreçlerini etkinleştirerek verimliliği artırdık. Kurumsal hizmetleri dijital olarak uyarlamak çok verimliydi.',
    rating: 5
  },
  {
    name: 'David Mal Milton',
    title: 'Hamiton CEO’su',
    image: '/img/testimonial/testi_1_2.jpg',
    review:
      'Test süreçlerimizi dijital olarak hızlandırdık. Stratejik medya temalarıyla uyumlu bir yapı oluşturduk. Gerçekten harika bir deneyim!',
    rating: 5
  },
  {
    name: 'Martin DE Halon',
    title: 'Komiarat CEO’su',
    image: '/img/testimonial/testi_1_3.jpg',
    review:
      'Geleceğe uygun pazarları optimize etmede bu hizmet çok etkiliydi. Dijital dönüşümde büyük bir adım attık.',
    rating: 5
  },
  {
    name: 'Jacklin Tomario',
    title: 'Tamiloa CEO’su',
    image: '/img/testimonial/testi_1_4.jpg',
    review:
      'Stratejik medya alanlarında hızlı adaptasyon sağladık. Ekip çok ilgili ve profesyoneldi.',
    rating: 5
  },
  {
    name: 'Talorian Rianol',
    title: 'Hamirto CEO’su',
    image: '/img/testimonial/testi_1_5.jpg',
    review:
      'Medya stratejileri ile entegrasyonumuz sorunsuz ilerledi. Ekip süreç boyunca destekleyiciydi.',
    rating: 5
  },
  {
    name: 'Rohan Hawanira',
    title: 'Gotanila CEO’su',
    image: '/img/testimonial/testi_1_6.jpg',
    review:
      'Verimli test süreçleri ile dijital hizmetlerimizi yeniden yapılandırdık. Kesinlikle tavsiye ederim.',
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/bg/bg_map_3.png')` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
         <Text variant="handwriting">Sizden Gelenler</Text>
          <Text variant="heading">Sizden Gelenler</Text>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
          <img
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4">“{activeTestimonial.review}”</p>
          <div className="text-yellow-400 mb-2">
            {'★'.repeat(activeTestimonial.rating)}
          </div>
          <h3 className="font-semibold text-lg">{activeTestimonial.name}</h3>
          <span className="text-sm text-gray-500">{activeTestimonial.title}</span>
        </div>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 rounded-full border-2 transition-transform hover:scale-110 ${activeIndex === index ? 'border-blue-600' : 'border-gray-300'
                }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React from 'react';
import Section from './Section';
import persion1 from "../assets/testimonials/1.jpg";
import persion2 from "../assets/testimonials/2.jpg";
import persion3 from "../assets/testimonials/3.jpg";
import persion4 from "../assets/testimonials/4.jpg";
import indiaFlag from "../assets/flags/india.png";
import moroccoFlag from "../assets/flags/morocco.png";
import unitesdStatesFlag from "../assets/flags/united-states.png";




const reviews = [
  {
      name: "Shenal",
      job: `Motivational speaker`,
      country: "United States",
      flag: unitesdStatesFlag,
      img: persion1,
      description: `Outstanding experience from Altamish! Excellent communications. Great problem solving. Looking forward to the next job with him`,
  },
  {
      name: "Harpreet kaur",
      job: `Founder : OSM Services`,
      country: "India",
      flag: indiaFlag,
      img: persion2,
      description: `It has been a great experience working
      with Altamish. He was very quick to understand my requirements and execute them. I was so
      Happy to get see my website complete in merely 3 days. keep it up. `,
  },
  {
      name: "Devapriya Khanna",
      job: `Founder : 212° Brand Lab and Connexus`,
      country: "India",
      flag: indiaFlag,
      img: persion3,
      description: `Very good service. Great communication. Altamish is keen to learn and solve problems, he worked very hard.`,
  },
  {
      name: "Ghita Moussaid",
      job: `Manager`,
      country: "Marocco",
      flag: moroccoFlag,
      img: persion4,
      description: `He patiently worked through CSS issues on our website for two different pages with embedded forms, and worked diligently until the page met my goals. I will ABSOLUTELY use him again for that job. Great experience, highly recommended`,
  }
];

function Testimonials() {
  return (
    <>
    <Section background="bg-gray-100" title="Testimonials">
    <div className="flex flex-wrap gap-5">
        {
          reviews.map((testimonial,i) => <Testimonial key={i} i={i} testimonial={testimonial}/>)
        }
      </div>
    </Section>
    </>
  )
}

export default Testimonials;



function Testimonial({testimonial,i}){


  return (
    <>
<div class={`${i%2 === 0? "mr-auto":"ml-auto "} max-w-5xl shadow-lg`}>
  <section class="rounded-lg bg-white p-8">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      
      {
         i%2 === 0 &&  <img
              alt="persion"
              src={testimonial.img}
              class="aspect-square w-full rounded-lg object-cover"
              />
      }

      <blockquote class="sm:col-span-2">
        <p class="text-xl font-medium sm:text-2xl">
          {testimonial.description}
        </p>

        <cite class="mt-8 inline-flex items-center not-italic">
          <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
          <p class="flex items-center text-sm uppercase text-gray-500 sm:ml-3">
            <strong>{testimonial.name}</strong>, {testimonial.country}
            <img 
            src={testimonial.flag} 
            alt="flag"
            className='w-30 h-10 ml-2'
            />
          </p>
        </cite>
      </blockquote>

      {
         i%2 !== 0 &&  <img
              alt="persion"
              src={testimonial.img}
              class="aspect-square w-full rounded-lg object-cover"
              />
      }
    </div>
  </section>
</div>
    </>
  )
}
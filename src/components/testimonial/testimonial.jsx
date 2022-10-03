// import React from 'react'
// import "./testimonial.css"
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// // // import Swiper core and required modules
// // import { Pagination } from 'swiper';

// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';


// const data = [
//   {
//     image: AVTR1,
//     name: 'Alifian',
//     isi: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
//   },
//   {
//     image: AVTR2,
//     name: 'Rudi',
//     isi: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
//   },
//   {
//     image: AVTR3,
//     name: 'Rizky',
//     isi: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
//   },
//   {
//     image: AVTR4,
//     name: 'Andi',
//     isi: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut', 
//   },
// ]

// export const testimonial = () => {
//   return (
//     <section id='testimonial'>
//       <h5>Review from clients</h5>
//       <h2>Testimonial</h2>

//       <div className="container testimonials__container">
//         {
//           data.map(({image, name, isi}, index) => {
//             return (
//               <article key={index} className="testimonial">
//                 <div className="client__avatar">
//                   <img src={image} alt={name} />
//                 </div>
//                 <h5>{name}</h5>
//                 <small className='client__review'>
//                   {isi}
//                 </small>
//               </article>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default testimonial
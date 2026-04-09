// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import { photos } from "../../constants/photos";
// import "./photography.scss";

// const Photography = () => {
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   return (
//     <div className="app__photography">
//       <Helmet>
//         <title>Photography — Kartikey Mishr</title>
//         <meta name="description" content="A collection of moments captured through my lens." />
//         <meta property="og:title" content="Photography — Kartikey Mishr" />
//         <meta property="og:description" content="A collection of moments captured through my lens." />
//         <meta property="og:url" content="https://www.kartikeymishr.com/photography" />
//         <meta name="twitter:title" content="Photography — Kartikey Mishr" />
//         <meta name="twitter:description" content="A collection of moments captured through my lens." />
//       </Helmet>
//       <h2 className="head-text">
//         <span>Photography</span>
//       </h2>
//       <p className="p-text app__photography-subtitle">
//         A collection of moments captured through my lens.
//       </p>

//       <div className="app__photography-grid">
//         {photos.map((photo) => (
//           <motion.div
//             key={photo.id}
//             className="app__photography-item"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setSelectedPhoto(photo)}
//           >
//             <img src={photo.src} alt={photo.title} loading="lazy" />
//             <div className="app__photography-overlay">
//               <h4>{photo.title}</h4>
//               {photo.location && <p>{photo.location}</p>}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selectedPhoto && (
//           <motion.div
//             className="app__photography-lightbox"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPhoto(null)}
//           >
//             <motion.div
//               className="app__photography-lightbox-content"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img src={selectedPhoto.src} alt={selectedPhoto.title} />
//               <div className="app__photography-lightbox-info">
//                 <h3>{selectedPhoto.title}</h3>
//                 {selectedPhoto.location && <p>{selectedPhoto.location}</p>}
//                 {selectedPhoto.date && (
//                   <p className="app__photography-lightbox-date">
//                     {selectedPhoto.date}
//                   </p>
//                 )}
//               </div>
//               <button
//                 className="app__photography-lightbox-close"
//                 onClick={() => setSelectedPhoto(null)}
//                 aria-label="Close lightbox"
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Photography;

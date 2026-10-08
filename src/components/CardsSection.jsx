import React from 'react';

const products = [
  { id: 1, name: 'FROSTED SUGAR', image: 'cookie-1.png', isFloating: false },
  { id: 2, name: 'MONSTER', image: 'cookie-2.png', isFloating: true },
  { id: 3, name: 'OREO', image: 'cookie-3.png', isFloating: false },
];

const CardsSection = ({ containerRef }) => {
  return (
    <section className="cards-section" ref={containerRef}>
      {products.map((item) => (
        <div key={item.id} className="cookie-card">
          {/* Static cookie for card 1 & 3; empty slot for card 2 */}
          {!item.isFloating ? (
            <img src={item.image} alt={item.name} className="card-cookie-img" />
          ) : (
            <div className="card-cookie-slot" />
          )}
          <h3 className="card-title">{item.name}</h3>
          <button className="buy-btn">Buy Now</button>
        </div>
      ))}
    </section>
  );
};

export default CardsSection;
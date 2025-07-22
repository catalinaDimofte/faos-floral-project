import React from 'react';
import Allure from '../flowerArrangements/Allure.png';
import Baby from '../flowerArrangements/Baby.png';
import Cheers from '../flowerArrangements/Cheers.png';
import Love from '../flowerArrangements/Love.png';
import Lust from '../flowerArrangements/Lust.png';
import Mystic from '../flowerArrangements/Mystic.png';
import Play from '../flowerArrangements/Play.png';
import Sunlight from '../flowerArrangements/Sunlight.png';
import Tropicana from '../flowerArrangements/Tropicana.png';

const arrangements = [
  { img: Allure, name: 'Allure', price: '$45' },
  { img: Baby, name: 'Baby', price: '$30' },
  { img: Cheers, name: 'Cheers', price: '$35' },
  { img: Love, name: 'Love', price: '$50' },
  { img: Lust, name: 'Lust', price: '$55' },
  { img: Mystic, name: 'Mystic', price: '$40' },
  { img: Play, name: 'Play', price: '$38' },
  { img: Sunlight, name: 'Sunlight', price: '$42' },
  { img: Tropicana, name: 'Tropicana', price: '$48' },
];

export default function Flowers() {
  const footerLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Our Flowers Arrangements</h1>
        <p>We create custom bouquets and floral installations for every occasion.</p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
          {arrangements.map((item, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                maxWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{item.name}</p>
              <p style={{ color: '#b34a3a', marginTop: '-8px' }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '40px',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        fontSize: '14px'
      }}>
        <nav>
          <a href="#" style={footerLinkStyle}>All</a>
          <span style={{ margin: '0 10px' }}>/</span>
          <a href="#" style={footerLinkStyle}>Flowers</a>
          <span style={{ margin: '0 10px' }}>/</span>
          <a href="#" style={footerLinkStyle}>Flowers Subscription</a>
        </nav>
      </footer>
    </>
  );
}

import React from 'react';
import catalina from '../homeFlowerImage/catalina.png';
import lush from '../homeFlowerImage/lush.png';
import play from '../homeFlowerImage/play.png';
import sunset from '../homeFlowerImage/sunset.png'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Flowers and Other Stories</h1>
      <p>Discover beautiful flowers, unique stories, and heartfelt services.</p>
      <p>Welcome to The Flowers and Other Stories! 
         We’re a bespoke floral design studio located in Vaslui, Romania. 
         From intimate gatherings to large-scale events, we specialize in curating unique and daring floral designs. 
         Our mission? To shake up the traditional and redefine beauty in every space.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        <img src={catalina} alt="Catalina" style={{ width: '45%', borderRadius: 10 }} />
        <img src={lush} alt="Lush" style={{ width: '45%', borderRadius: 10 }} />
        <img src={play} alt="Play" style={{ width: '45%', borderRadius: 10 }} />
        <img src={sunset} alt="Sunset" style={{ width: '45%', borderRadius: 10 }} />
      </div>
    </div>
  );
}

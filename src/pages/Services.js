import React from 'react';
import ChristmasDecorations from '../ServicesImage/ChristmasDecorations.png';
import CorporateEvents from '../ServicesImage/CorporateEvents.png';
import FloralSubscription from '../ServicesImage/FloralSubscription.png';
import WallInstallation from '../ServicesImage/WallInstallation.png';
import Wedding from '../ServicesImage/Wedding.png';
import WorkshopsAndClasses from '../ServicesImage/WorkshopsAndClasses.png';

const serviceImages = [
  {
    img: ChristmasDecorations,
    label: 'Christmas Decorations',
    longDescription: 'Festive arrangements to brighten your holidays with unique and seasonal blooms.',
    shortDescription: 'Festive holiday floral décor.',
    price: '$120'
  },
  {
    img: CorporateEvents,
    label: 'Corporate Events',
    longDescription:
      "We specialize in creating unforgettable floral experiences for events of any size.",
    shortDescription: 'Floral styling for corporate events.',
    price: '$300'
  },
  {
    img: FloralSubscription,
    label: 'Floral Subscription',
    longDescription: 'Weekly or monthly delivery of curated floral arrangements for your home or office.',
    shortDescription: 'Scheduled floral deliveries.',
    price: '$90/month'
  },
  {
    img: WallInstallation,
    label: 'Wall Installation',
    longDescription: 'Artistic floral wall installations for events, venues, and creative spaces.',
    shortDescription: 'Decorative floral wall art.',
    price: '$400'
  },
  {
    img: Wedding,
    label: 'Wedding',
    longDescription: 'Bespoke floral designs tailored to make your wedding day unforgettable.',
    shortDescription: 'Personalized wedding florals.',
    price: 'Starts at $500'
  },
  {
    img: WorkshopsAndClasses,
    label: 'Workshops & Classes',
    longDescription: 'Join our hands-on sessions to learn floral design techniques from experts.',
    shortDescription: 'Learn floral design skills.',
    price: '$40/session'
  }
];

export default function Services() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <p style={{ textAlign: 'center' }}>
        At FAOS, we strive to provide our clients with a full range of services that merge the beauty and creativity of the natural environment.
        From small projects to large-scale ones, no matter the size our team is dedicated to excellence.
        Our customers — private or corporate — receive dependable and superior service.
        We have mastered the art of turning ideas into reality, ensuring each endeavor is infused with beauty, creativity, and precision — so you can trust us to get your project done right.
      </p>

      {/* Image Cards Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px'
        }}
      >
        {serviceImages.map((service, index) => (
          <div
            key={index}
            style={{
              maxWidth: '240px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <img
              src={service.img}
              alt={service.label}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{service.label}</p>

            <div style={{ minHeight: '80px', marginTop: '6px' }}>
              <p style={{ fontSize: '14px', color: '#333' }}>{service.longDescription}</p>
            </div>

            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: 'auto'
              }}
              onClick={() => alert(`More info about: ${service.label}`)}
            >
              Find Out More
            </button>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Service Summary</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#000', color: '#fff' }}>
            <th style={{ padding: 10 }}>Service</th>
            <th style={{ padding: 10 }}>Description</th>
            <th style={{ padding: 10 }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {serviceImages.map((service, index) => (
            <tr key={index}>
              <td style={{ padding: 10, borderBottom: '1px solid #ddd' }}>{service.label}</td>
              <td style={{ padding: 10, borderBottom: '1px solid #ddd' }}>{service.shortDescription}</td>
              <td style={{ padding: 10, borderBottom: '1px solid #ddd' }}>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import Main from './Main';
import Footer from '../components/Footer';

export default function Layouts() {
  return (
    <div>
      <Main />
      <footer style={{ width: '90vw', margin: 'auto' }}>
        <Footer
          name="Sosedova_Viktoria"
          profileUrl="https://github.com/SosedovaViktoria"
          repoUrl="https://github.com/SosedovaViktoria/2048-game"
        />
      </footer>
    </div>
  );
}

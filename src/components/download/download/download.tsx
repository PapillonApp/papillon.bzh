import './download.css';

export default function Download() {
  return (
    <div className="cardDownload">
      <div className="cardDownloadSide qr">
        <h2>Scanner le QR-code</h2>
        <p className="description">
          Ouvrez l'appareil photo de votre téléphone et scannez le QR-code pour télécharger l'application Papillon.
        </p>
        <img
          className="qrCode"
          src="/qrcode.svg"
          alt=""
        />
      </div>
      <div className="cardDownloadSide">
        <h2>Télécharger depuis les stores</h2>
        <p className="description">
          Sélectionnez votre plateforme pour être redirigé vers le store approprié.
        </p>

        <div className="storeButtons">
          <a href="https://apps.apple.com/fr/app/papillon-lappli-scolaire/id6477761165" target="_blank" rel="noreferrer">
            <img className="storeButton" src="/appstore_svg.svg" alt="Télécharger sur l'App Store" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=xyz.getpapillon.app">
            <img className="storeButton" src="/googleplay_png.png" alt="Télécharger sur Google Play" />
          </a>
        </div>

        <h2>Versions bêta</h2>
        <p className="description">
          Vous pouvez également rejoindre nos programmes de test pour accéder aux dernières fonctionnalités en avant-première.
        </p>

        <a href="https://testflight.apple.com/join/AT2h5fj1" className="betaLink">
          -&gt; Rejoindre le programme TestFlight pour iOS
        </a>
        <a href="https://play.google.com/store/apps/details?id=xyz.getpapillon.app" className="betaLink">
          -&gt; Rejoindre le programme Google Play Beta pour Android
        </a>
      </div>
    </div>
  );
}
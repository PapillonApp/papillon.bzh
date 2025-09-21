import Image from "next/image";
import "./us.css";

export default function AboutUs() {
  return (
      <div className="about-us" id="about">
        <div className="about-us-part">
           <div className="about-us-images">
              <Image
                src="/asso_1_a.png"
                alt=""
                width={768}
                height={1024}
                className="asso_A"
              />
              <Image
                src="/asso_1_b.png"
                alt=""
                width={1024}
                height={768}
                className="asso_B"
              />
            </div>
            <div className="about-us-text">
              <h2>
                On ne peut pas plaire à tout le monde, mais on fait tout pour vous plaire.
              </h2>
              <p>
                On veut pas juste une application, mais construire une communauté qui s'engage a créer des outils éducatifs qui dépassent les attentes. Papillon, c'est une équipe de passionnés, qui se dédie à faire toujours plus pour vous.
              </p>
            </div>
        </div>
        <div className="about-us-part invert">
           <div className="about-us-images">
              <Image
                src="/asso_2_a.png"
                alt=""
                width={768}
                height={1024}
                className="asso_A"
              />
              <Image
                src="/asso_2_b.png"
                alt=""
                width={1024}
                height={768}
                className="asso_B"
              />
            </div>
            <div className="about-us-text">
              <h2>
                Passionnés par ce qui vous change de la routine.
              </h2>
              <p>
                Chercher à faire mieux, toujours, et encore. C'est notre moteur. Papillon, c'est une équipe qui réfléchit constamment à comment faire autrement, pour apporter une expérience qui fait un vent de frais.
              </p>
            </div>
        </div>
        <div className="about-us-part">
           <div className="about-us-images">
              <Image
                src="/asso_3_a.png"
                alt=""
                width={768}
                height={1024}
                className="asso_A"
              />
              <Image
                src="/asso_3_b.png"
                alt=""
                width={1024}
                height={768}
                className="asso_B"
              />
            </div>
            <div className="about-us-text">
              <h2>
                Même sous les pires tempêtes, on restera soudés.
              </h2>
              <p>
                On est une équipe qui croit en la force du collectif. Papillon, c'est une équipe qui avance ensemble, qui partage les mêmes valeurs, et qui avance même quand la contrainte est forte.
              </p>
            </div>
        </div>
      </div>
  );
};
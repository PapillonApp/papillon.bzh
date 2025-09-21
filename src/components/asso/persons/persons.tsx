import Button from '@/atoms/button/button';
import './persons.css';
import { PersonStanding, Users2 } from 'lucide-react';
import Image from 'next/image';

export default function Persons() {
  const persons = [
    {
      firstname: "Vince",
      lastname: "Linise",
      role: "Président",
      description: "Fondateur et président du projet, touche un peu a tout ce qui parle Papillon.",
      link: "https://www.linkedin.com/in/vincelinise/",
      image: "/people/ecnivtwelve.jpg"
    },
    {
      firstname: "Lucas",
      lastname: "Lavajo",
      role: "Vice-président",
      description: "Vice-président, trésorier et early-adopter du projet. Voyons le comme le business angel.",
      image: "/people/tryon.jpg"
    },
    {
      firstname: "Raphaël",
      lastname: "Schroder",
      role: "Trésorier adjoint",
      description: "Grand génie du mal et du code, c'est lui à qui on refile les tâches ingrates.",
      image: "/people/raphckrman.jpg"
    },
    {
      firstname: "Rémy",
      lastname: "Godet",
      role: "Secrétaire adjoint",
      description: "Visionnaire du code et du design, il met un coup de pinceaux aux fonctionnalités.",
      image: "/people/remygdt.jpg"
    },
    {
      firstname: "Tom",
      lastname: "Hélière",
      role: "Secrétaire",
      description: "Artiste et troubadour du projet, il prend soin de l'apparence de Papillon.",
      image: "/people/tomhlr.jpg"
    }
  ];

  return (
    <div className='section persons'>
      <div className="section-heading">
        <h2 className="section-title">Mais c'est qui, <span>Papillon</span> ?</h2>
        <p className="section-description">
          En plus des centaines de contributeurs que nous remercions chaleureusement, Papillon c'est aussi une équipe de passionnés qui travaillent chaque jour pour faire vivre le projet.
        </p>
      </div>

      <div className="persons-grid">
        {persons.map((person, index) => (
          <a href={person.link} key={index} className="person-card" target='_blank'>
            <div className="person-image">
              <Image src={person.image} alt={""} width={150} height={150} />
            </div>
            <div className="person-info">
              <h3 className="person-name">{person.firstname} {person.lastname}</h3>
              <p className="person-role">{person.role}</p>
              <p className="person-description">{person.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
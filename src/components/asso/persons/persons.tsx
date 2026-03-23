import './persons.css';
import Image from 'next/image';
import {persons} from "@/constant/persons";

export default function Persons() {

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
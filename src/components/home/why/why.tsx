import Button from '@/atoms/button/button';
import './why.css';
import { PersonStanding, Users2 } from 'lucide-react';
import Image from 'next/image';
import {People} from "@/components/global/people/people";

export default function Why() {
  return (
    <div className='section why'>
      <div className="section-heading">
          <People/>
        <h2 className="section-title">Pas une simple <span>application de vie scolaire</span>, mais une vision de l'éducation</h2>
        <p className="section-description">
          Chez Papillon, on pense que l'éducation doit être centrée sur l'élève, et pensée pour demain. C'est pourquoi nous imaginons chaque interaction pour créer un outil qui vise l'avenir.
        </p>
      </div>

      <Button
        value="Découvrir l'association Papillon"
        href="/association"
        color="foreground"
        outlined
        icon={<Users2 />}
      />
    </div>
  )
}
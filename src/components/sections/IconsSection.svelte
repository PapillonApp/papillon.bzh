<script>
  import { onMount } from 'svelte';
  import { Puzzle, Binary, LockKeyhole, Palette, Brain, Plug } from 'lucide-svelte';

  import '../../styles/sections/icons.css';
	import SectionTitle from '../SectionTitle.svelte';

  const elements = [
    {
      icon: Plug,
      title: 'Compatible avec votre établissement',
      description: 'Papillon est compatible avec l\'ensemble des établissements et applications scolaires.',
      color: '#3216cc',
    },
    {
      icon: Puzzle,
      title: 'Extensible à l\'infini et à volonté',
      description: 'Un système de plugins est intégré pour répondre à tous vos besoins.',
      color: '#0dba95',
    },
    {
      icon: Brain,
      title: 'Intuitif & facile a prendre en main',
      description: 'Dés votre première utilisation, vous serez à l\'aise avec Papillon. Il est conçu pour être accessible.',
      color: '#9e0d9e',
    },
    {
      icon: Palette,
      title: 'Agréable, fluide, et confortable à utiliser',
      description: 'Papillon est pensé pour vous offrir une expérience utilisateur optimale.',
      color: '#b54210',
    },
    {
      icon: Binary,
      title: 'Papillon est un logiciel libre et open-source',
      description: 'Créé par des élèves pour des élèves, modifiable par des développeurs volontaire sous la surveillance de nos équipes',
      color: '#b5106b',
    },
    {
      icon: LockKeyhole,
      title: 'Sécurisé et respectueux de votre vie privée',
      description: 'Vos données sont sur votre appareil et ne sont jamais partagées avec des tiers.',
      color: '#149ca8',
    },
  ];

  onMount(() => {
    const elems = document.querySelectorAll('.icon-element');
    
    elems.forEach((elem, i) => {
      ScrollReveal().reveal(elem, {
        origin: 'bottom',
        distance: '50px',
        duration: 400,
        easing: 'ease',
        scale: 0.85,
        opacity: 0,
        reset: false,
        delay: (i * 70)
      });
    });
  });
</script>

<div class="section section-icons">
  <SectionTitle
    title="Une application sur laquelle vous pouvez compter"
    description="Papillon, un allié qui vous accompagne à chaque instant."
  />

  <div class="icon-elements width">
    {#each elements as { icon, title, description, color }}
      <div class="icon-element">
        <div class="icon-container"
          style="background-color: {color}">
           <svelte:component this={icon} class="icon" color={"#fff"} size="20" strokeWidth="2.5" />
        </div>
        <div class="icon-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    {/each}
    </div>
</div>
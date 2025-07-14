<script>
	import { ShieldX } from 'lucide-svelte';
	import Button from '../../../components/Button.svelte';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>

<main>
	<div class="container">
		<LottiePlayer
			src="/lottie/fail.json"
			autoplay="{true}"
			loop="{false}"
			controls={false}
			renderer="svg"
			background="transparent"
			height={200}
			width={200}
		/>
		<h1>Contester une sanction</h1>
		<div class="longText">
			<p>Tu as été banni du Discord de Papillon et tu penses que ta sanction est injustifiée ?</p>
			<p>Envoie nous un e-mail avec ton nom d'utilisateur Discord ainsi que ta version des faits.<br>Nous examinerons ta demande dans les plus brefs délais.</p>
		</div>
		<Button value="Envoyer une contestation" icon={ShieldX} variant="light" href="mailto:support@papillon.bzh" />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	img {
		width: 144px;
		height: 144px;
	}

	h1 {
		font-size: 1.8rem;
		color: var(--papillon-primary);
	}

	p {
		color: rgba(var(--color-text-rgb), 0.4);
		font-size: 1rem;
			text-align: center;
	}

	.longText {
			display: flex;
			flex-direction: column;
			gap: 5px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>

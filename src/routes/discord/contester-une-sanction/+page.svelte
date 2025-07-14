<script>
	import { GitFork, ShieldX } from 'lucide-svelte';
	import Button from '../../../components/Button.svelte';
</script>

<main>
    <img src="/assets/checkmark_fail.png" alt="Checkmark with an x" />
	<h1>Contester une sanction</h1>
    <br><br>
	<p>Tu as été banni du Discord de Papillon et tu penses que ta sanction est injustifiée ?</p>
    <p>Envoie nous un e-mail avec ton nom d'utilisateur Discord ainsi que ta version des faits.<br>Nous examinerons ta demande dans les plus brefs délais.</p>
	<Button value="Envoyer une contestation" icon={ShieldX} variant="light" href="mailto:support@papillon.bzh" />
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
		width: 200px;
		height: 200px;
		padding: 28px;
	}

	h1 {
		margin-top: 1rem;
		font-size: 1.8rem;
		color: var(--papillon-primary);
	}

	p {
		color: rgba(var(--color-text-rgb), 0.4);
		font-size: 1rem;
		margin-bottom: 30px;
        text-align: center;
	}
</style>

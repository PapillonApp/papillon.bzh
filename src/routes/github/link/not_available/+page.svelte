<script>
	import { GitFork } from 'lucide-svelte';
	import Button from '../../../../components/Button.svelte';
</script>

<main>
	<img src="/assets/checkmark_fail.png" alt="Checkmark with an x" />
	<h1>Il semblerait que tu n'aies pas encore contribué...</h1>
	<p>Fait une contribution sur le repo de Papillon, puis revient faire ta demande. 👀</p>
	<Button value="Faire une contribution" icon={GitFork} variant="light" href="https://github.com/PapillonApp/Papillon/fork" />
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
		text-align: center;
	}

	p {
		color: rgba(var(--color-text-rgb), 0.4);
		font-size: 1rem;
		margin-bottom: 30px;
		text-align: center;
	}
</style>

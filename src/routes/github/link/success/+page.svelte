<script>
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>

<main>
	<LottiePlayer
		src="/lottie/checkmark.json"
		autoplay="{true}"
		loop="{false}"
		controls={false}
		renderer="svg"
		background="transparent"
		height={256}
		width={256}
	/>
	<h1>Ton compte GitHub a été lié.</h1>
	<p>Tu viens de recevoir le rôle contributeur. Retourne sur Discord pour observer ton exploit. ✌️</p>
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

	h1 {
		margin-top: 1rem;
		font-size: 2rem;
		color: var(--papillon-primary);
		text-align: center;
	}

	p {
		color: rgba(var(--color-text-rgb), 0.4);
		font-size: 1rem;
		margin-top: 5px;
		text-align: center;
	}
</style>

<script>
import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>

<main>
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
	<h1>Oups ! J'ai glissé chef...</h1>
	<p>Nous n'avons pas réussi à vérifier tes contributions. Réessaye plus tard.</p>
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
		margin-top: 5px;
		text-align: center;
	}
</style>

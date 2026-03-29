"use client";
import "./footer.css";

export default function Footer() {
	const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

	return (
		<footer>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.9999 2.67871C13.2665 2.67879 14.0498 4.33572 15.6161 7.64844L16.1796 8.83984H16.5985C19.139 8.83984 20.4093 8.8403 20.8524 9.07812C21.9323 9.65782 22.2418 11.0637 21.5048 12.043C21.2022 12.4448 20.0487 12.9772 17.7431 14.043L17.8261 14.4795C18.5184 18.1455 18.8641 19.9789 18.1708 20.7197C17.8804 21.03 17.4986 21.2397 17.081 21.3184C16.0839 21.5061 14.7224 20.2306 11.9999 17.6797C9.27741 20.2306 7.91597 21.5061 6.91886 21.3184C6.50116 21.2397 6.11947 21.03 5.82901 20.7197C5.13568 19.9789 5.48145 18.1455 6.17374 14.4795L6.25675 14.043C3.95127 12.9772 2.79776 12.4447 2.49503 12.043C1.75806 11.0637 2.06751 9.65782 3.14737 9.07812C3.59061 8.84037 4.86111 8.83984 7.40128 8.83984H7.82022L8.3837 7.64844C9.95004 4.33564 10.7333 2.67871 11.9999 2.67871Z" fill="black"/>
			</svg>
			<h2>Alors, ça t’a plu ?</h2>
			<p>Papillon c'est une petite équipe d'étudiants comme toi, alors si cette application te simplifie la vie, tu peux nous laisser un petit avis.</p>
			<a href={isIOS ? `https://apps.apple.com/fr/app/papillon-lappli-scolaire/id6477761165?action=write-review`:`https://play.google.com/store/apps/details?id=xyz.getpapillon.app&hl=fr`}>
				Laisser un avis
			</a>
		</footer>
	)
}
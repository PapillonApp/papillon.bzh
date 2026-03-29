import "./hero.css";
import Image from 'next/image';
import {JSX} from "react";

export interface HeroProps {
	title: string;
	lastUpdate: string;
	imageSource: string;
	imageAlt: string;
	accent: string;
}

export function Hero({title, lastUpdate, imageSource, imageAlt, accent}: HeroProps): JSX.Element {
	return (
		<header style={{color: accent}}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<mask id={"sub"}>
						<rect width={"200%"} height={"200%"} fill={"#FFF"}/>
						<ellipse cx={"50%"} cy={400} rx={"50%"} ry={300} fill={"#000"}/>
					</mask>
				</defs>
				<rect x={0} y={0} width={"200%"} height={400} mask={"url(#sub)"}/>
			</svg>

			<Image
				src={imageSource}
				alt={imageAlt}
				width={300}
				height={160}
			/>
			<h1>{title}</h1>
			<p>Dernière mises à jour le : {lastUpdate}</p>
		</header>
	)
}
"use client";

import "./card.css";
import Image from "next/image";
import {persons} from "@/constant/persons";
import {motion} from "motion/react";

export interface CardProps {
	color: string;
	imageSource: string;
	imageAlt: string;
	title: string;
	contributors: string[];
	description: string;
}

export default function Card({color, imageSource, imageAlt, title, contributors, description}: CardProps) {
	let parsed_contributors = contributors
		.map((id) => persons.find((person) => person.id === id))
		.filter(Boolean);

	const generateContributorsText = (): string => {
		let text = "Par ";

		for (var i = 0; i < contributors.length; i++) {
			if (i > 0) {
				text += (i === contributors.length - 1 ? " et ": ", ")
			}
			text += parsed_contributors[i].firstname;
		}
		return text;
	}

	return (
		<motion.div
			className="card"
			initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", translateY: "20%" }}
			whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", translateY: 0 }}
			transition={{duration: 0.8, type: "spring"}}
			viewport={{ once: true }}
		>
			<img src={imageSource} alt={imageAlt} />
			<div className="card-content" style={{backgroundColor: color}}>
				<h2>{title}</h2>
				<span>
					{parsed_contributors.map((contributor, index) => (
						<Image
							key={contributor.id}
							src={contributor.image}
							alt={`Photo de ${contributor.firstname} ${contributor.lastname}`}
							width={20}
							height={20}
							style={{zIndex: parsed_contributors.length - index, borderColor: color}}
						/>
					))}
					{generateContributorsText()}
				</span>
				<p>{description}</p>
			</div>
		</motion.div>
	)
}
"use client";
import {persons} from "@/constant/persons";
import './people.css'
import { motion } from "motion/react";
import {useEffect, useState} from "react";

export const People = ({avatarSize = 50}: {avatarSize?: number}) => {
	const [shuffled, setShuffled] = useState([]);

	useEffect(() => {
		setShuffled(persons.sort(() => Math.random() - 0.5));
	}, []);

	const center = (persons.length - 1) / 2;

	return (
		<div className="people">
			{shuffled.map((person, index) => (
				<motion.img
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, type: "spring", bounce: 0.5, delay: Math.abs(index - 2.5) * 0.2 }}
					src={person.image}
					alt={`${person.firstname} ${person.lastname}`}
					key={index}
					style={{
						width: avatarSize - Math.abs(index - center) * (avatarSize / 8),
					}}
				/>
			))}
		</div>
	);
}
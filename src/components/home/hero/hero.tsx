"use client";
import LightRays from "@/components/effects/LightRays/LightRays";
import "./hero.css";
import Image from "next/image";
import Button from "@/atoms/button/button";
import { Code2Icon, DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'motion/react';

function getOS() {
	if (typeof window === "undefined" || typeof navigator === "undefined") return null;
	// @ts-ignore
	var uA = navigator.userAgent || navigator.vendor || (window as any).opera;
	// @ts-ignore
	if ((/iPad|iPhone|iPod/.test(uA) && !(window as any).MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
	var i, os = ['Android', 'iOS'];
	for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i];
	return null;
}

export default function Hero() {
	const [os, setOS] = useState<string | null>(null);
	useEffect(() => {
		setOS(getOS());
	}, []);

	return (
		<div className="hero navbar-dark-sentinel">
			<div className="light-rays-container">
				<LightRays
					raysOrigin="top-center"
					raysColor="#29947A"
					raysSpeed={1}
					lightSpread={4}
					rayLength={12}
					followMouse={true}
					mouseInfluence={0.3}
					noiseAmount={0.1}
					distortion={0.01}
					className="custom-rays"
					pulsating={false}
					fadeDistance={3}
					saturation={2}
				/>
			</div>

			<div className="hero-title width">
				<motion.div initial={{ opacity: 0, scale: 0.3 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, type: "spring", bounce: 0.5, delay: 0.1 }}>
					<Image
						src="/appicon-glass.png"
						alt="Papillon"
						width={96}
						height={96}
					/>
				</motion.div>
				<motion.h1 initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5 }}>
					Votre vie scolaire,<br />
					avec de la magie en plus.
				</motion.h1>
				<motion.p className="hero-description" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 0.7, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}>
					Papillon est une alternative libre et open source aux applications de vie scolaire traditionnelles. Conçue, dévelopée et maintenue avec soin par des étudiants.
				</motion.p>
				<motion.div className="actions" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.2 }}>
					<Button
						href="/download"
						value={os ? `Télécharger pour ${os}` : "Télécharger l'appli"}
						color="primary"
						icon={<DownloadIcon />}
					/>
					<Button
						value="Contribuer sur GitHub"
						href="https://github.com/PapillonApp/Papillon"
						color="background"
						outlined
						style={{ "--button-color": "#ffffff" } as React.CSSProperties}
						icon={<Code2Icon />}
					/>
				</motion.div>
				<motion.div className="hero-image-container" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.1, 0, 0, 1] }}>
					<Image
						src="/home-hand.png"
						alt=""
						width={2400}
						height={2400}
						className="hero-image"
					/>
				</motion.div>
			</div>
		</div>
	)
}

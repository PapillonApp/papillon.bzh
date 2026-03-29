import {ReleaseNotesContent} from "@/constant/release-notes";
import { notFound } from 'next/navigation';
import {Hero} from "@/components/release-notes/hero/hero";
import Card from "@/components/release-notes/card/card";
import Footer from "@/components/release-notes/footer/footer";

export const dynamicParams = false;

export async function generateStaticParams() {
	return ReleaseNotesContent.map((content) => ({
		version: content.version,
	}))
}

export default async function ReleaseNotes({ params }) {
	const { version } = await params;

	const content = ReleaseNotesContent.find(c => c.version === version);

	if (!content) notFound();

	return (
		<>
			<Hero
				imageSource={`/release-notes/${content.imageSource}`}
				imageAlt={content.imageAlt}
				accent={content.accent}
				title={content.title}
				lastUpdate={content.lastUpdate}
			/>
			<main className={"release-notes-main"}>
				{content.cards.map((card, index) => (
					<Card
						key={index}
						color={card.color}
						imageSource={`/release-notes/${card.imageSource}`}
						imageAlt={card.imageAlt}
						title={card.title}
						contributors={card.contributors}
						description={card.description}
					/>
				))}
			</main>
			<Footer/>
		</>
	);
}

import {ReleaseNotesContent} from "@/constant/release-notes";
import { notFound } from 'next/navigation';
import {Hero} from "@/components/release-notes/hero/hero";

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
		<Hero
			imageSource={`/release-notes/${content.imageSource}`}
			imageAlt={content.imageAlt}
			accent={content.accent}
			title={content.title}
			lastUpdate={content.lastUpdate}
		/>
	);
}

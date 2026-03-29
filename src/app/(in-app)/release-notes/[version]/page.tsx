import {ReleaseNotesContent} from "@/constant/release-notes";
import { notFound } from 'next/navigation';

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
		<p>{content.text}</p>
	);
}

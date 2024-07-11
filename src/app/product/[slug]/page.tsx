export default async function Page({ params }: { params: { slug: string } }) {
	return (
		<section className="mx-auto max-w-7xl p-24 px-32">{params.slug}</section>
	);
}

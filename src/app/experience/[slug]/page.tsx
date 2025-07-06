'use client'

type Props = {
  params: { slug: string }
}

const experienceData = {
  procurify: {
    title: 'Software Engineer Intern at Procurify',
    date: 'Fall 2025',
    description: 'Worked on procurement automation...',
  },
  stayfresh: {
    title: 'Developer Intern at Stay Fresh',
    date: 'Spring 2024',
    description: 'Built e-commerce features...',
  },
  // add more experiences...
}

export default function ExperienceDetailPage({ params }: Props) {
  const { slug } = params;
  const data = experienceData[slug as keyof typeof experienceData];

  if (!data) {
    return <div>Experience not found</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.date}</p>
      <p className="mt-4">{data.description}</p>
    </main>
  );
}

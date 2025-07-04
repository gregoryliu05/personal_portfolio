'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResumeRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    window.open('https://drive.google.com/your-public-pdf-link-here', '_blank');
    
    router.push('/');
  }, [router]);

  return <p>Opening resume in a new tab...</p>;
}

import type { Metadata } from 'next';
import LandingPageInteractive from './components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'Allan Castrence - Senior Software Engineer | Full-Stack Developer',
  description: 'Experienced Senior Software Engineer with 8+ years delivering enterprise-grade solutions across full-stack development, AI integration, and blockchain implementation. Currently trusted by Healthera London for critical healthcare technology projects.',
};

export default function LandingPage() {
  return <LandingPageInteractive />;
}
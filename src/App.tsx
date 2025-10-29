import { useEffect, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load non-critical components
const DesignThinking = lazy(() => import('./components/DesignThinking').then(m => ({ default: m.DesignThinking })));
const Gallery = lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const Companies = lazy(() => import('./components/Companies').then(m => ({ default: m.Companies })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const TechnicalImplementation = lazy(() => import('./components/TechnicalImplementation').then(m => ({ default: m.TechnicalImplementation })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  useEffect(() => {
    // Google Tag Manager
    (function(w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode?.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-K8Z8ZGNX');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1220] via-[#0f172a] to-[#0B1220] overflow-x-hidden">
      <PerformanceMonitor />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-K8Z8ZGNX"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <DesignThinking />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <Companies />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <TechnicalImplementation />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B8CFF]"></div></div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            color: '#e5e7eb',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
    </div>
  );
}

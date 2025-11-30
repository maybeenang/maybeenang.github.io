import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SideDivider from '@/components/SideDivider';
import { cn } from '@/lib/utils';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <main className="max-w-screen overflow-x-hidden bg-background">
      <div
        className={cn(
          'grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto]',
          'justify-center',
          '[--gutter-width:16rem] md:-mx-4',
          'md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0',
        )}
      >
        <SideDivider className="col-start-1" />
        <div className="grid auto-rows-min">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
        <SideDivider className="md:col-start-3" />
      </div>
    </main>
  );
}

import { SplashScreen } from "@/components/splash-screen";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Focus } from "@/components/Focus";
import { Numbers } from "@/components/Numbers";

export default function Home() {
  return (
    <>
      <SplashScreen />

      <main>
        <Hero />
        <About />
        <Focus />
        <Numbers />

        <section id="work" className="empty-section">
          <span>work</span>
        </section>

        <section id="ai" className="empty-section">
          <span>ai</span>
        </section>

        <section id="graphics" className="empty-section">
          <span>graphics</span>
        </section>

        <section id="clients" className="empty-section">
          <span>clients</span>
        </section>

        <section id="connect" className="empty-section">
          <span>connect</span>
        </section>
      </main>
    </>
  );
}

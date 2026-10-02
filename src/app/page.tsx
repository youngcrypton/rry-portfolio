import { SplashScreen } from "@/components/splash-screen";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Focus } from "@/components/Focus";
import { Numbers } from "@/components/Numbers";
import { Work } from "@/components/Work";
import { Content } from "@/components/Content";
import { Graphics } from "@/components/Graphics";
import { Connect } from "@/components/Connect";
import { WannaTalk } from "@/components/WannaTalk";

export default function Home() {
  return (
    <>
      <SplashScreen />

      <main>
        <Hero />
        <About />
        <Focus />
        <Numbers />

        <Work />
        <Content />
        <Graphics />

        <section id="ai" className="empty-section">
          <span>ai</span>
        </section>

        <section id="clients" className="empty-section">
          <span>clients</span>
        </section>

        <Connect />

        <WannaTalk />
      </main>
    </>
  );
}

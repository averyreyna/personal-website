import Footer, { ArrowIcon } from "./components/footer"
import Publications from "./components/publications"

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hello! I'm Avery Reyna.
      </h1>
      <p className="mb-4">
        I'm a Software Engineer working on data quality at Capital One. Before that, I researched human-computer interaction and computational social science with supervision from Pamela Wisniewski and Jonathan Powell. I also collaborated with teams improving developer experience at ActBlue, building predictive models at Swing Left, and researching technology policy at New America.
      </p>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Recent Publications
      </h2>
      <div className="mb-4">
        <Publications />
      </div>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Journey
      </h2>
      <p className='mb-4'>
      My undergraduate journey was a ride through a carnival of disciplines. This voyage didn't just fill my brain, but ignited my passion for interdisciplinary research. Below is the work I did connecting dots between seemingly unrelated fields:
      </p>
      <div className="grid grid-cols-2 mb-4">
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">Vaccination Efforts</span>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">Integrated Data</span>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Reflecting on Coup Risk</p>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.newamerica.org/digital-impact-governance-initiative/blog/what-is-digital-public-infrastructure-a-top-10-reading-guide/"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Digital Public Infrastructure</p>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Anti-Coup Strategies</p>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Limits of Quantitative Research</p>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.newamerica.org/digital-impact-governance-initiative/reports/digital-transformation-opportunities-and-challenges-in-the-lower-mekong-region"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Digital Transformation</p>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
          rel="noopener noreferrer"
          target="_blank"
          href="https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Artificial Intelligence</p>
        </a>
      </div>

    <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
      Contact
    </h2>

      <Footer />
    </section>
  )
}
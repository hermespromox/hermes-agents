import './App.css'
import React from 'react'
import { LeadForm } from './LeadForm'

const RoiCalculator: React.FC = () => {
  const [brut, setBrut] = React.useState(60000)
  const [agentPrice, setAgentPrice] = React.useState(150)

  const monthlyBrut = brut / 12
  const chargesRate = 0.42
  const monthlyWithCharges = monthlyBrut * (1 + chargesRate)
  const annualWithCharges = monthlyWithCharges * 12
  const totalAbsenceDays = 43
  const workingDays = 228
  const absenceCost = (annualWithCharges / workingDays) * totalAbsenceDays
  const humanAnnual = annualWithCharges + absenceCost
  const humanMonthly = humanAnnual / 12
  const agentAnnual = agentPrice * 12
  const savingsAnnual = humanAnnual - agentAnnual
  const savingsPercent = ((humanAnnual - agentAnnual) / humanAnnual) * 100
  const costMultiple = Math.round(humanMonthly / agentPrice)

  return (
    <div className="roi-calculator">
      <div className="roi-inputs">
        <label>
          Salaire brut annuel
          <input type="range" min={45000} max={95000} step={1000} value={brut} onChange={(e) => setBrut(Number(e.target.value))} />
          <div className="value">{brut.toLocaleString('fr-FR')} € / an</div>
        </label>
        <label>
          Coût agent / mois
          <input type="range" min={150} max={600} step={10} value={agentPrice} onChange={(e) => setAgentPrice(Number(e.target.value))} />
          <div className="value">{agentPrice} € / mois</div>
        </label>
      </div>
      <div className="roi-results">
        <div className="comparison">
          <div className="col human">
            <div className="label">Poste humain ({Math.round(brut / 1000)}k€ brut)</div>
            <div className="big">{Math.round(humanMonthly).toLocaleString('fr-FR')} €<span>/mois</span></div>
            <div className="small">{Math.round(humanAnnual).toLocaleString('fr-FR')} € / an chargé</div>
            <ul><li>Charges patronales</li><li>Congés + absences</li><li>Recrutement + management</li></ul>
          </div>
          <div className="col agent">
            <div className="label">Agent Corrtex</div>
            <div className="big">{agentPrice} €<span>/mois</span></div>
            <div className="small">{agentAnnual.toLocaleString('fr-FR')} € / an</div>
            <ul><li>Disponible 24/7</li><li>Validation humaine</li><li>Ajout/retrait à la demande</li></ul>
          </div>
        </div>
        <div className="savings">
          <div>Économie annuelle estimée</div>
          <strong>{Math.round(savingsAnnual).toLocaleString('fr-FR')} €</strong>
          <span className="pct">≈ {costMultiple}× moins cher • −{Math.round(savingsPercent)}%</span>
          <div className="break">ROI immédiat dès le premier mois</div>
        </div>
      </div>
    </div>
  )
}

const agents = [
  { name: 'Sales', role: 'Prospection & relances', signal: 'Listes de prospects, emails préparés, CRM à jour, réponses escaladées.', color: '#828fff' },
  { name: 'Tech', role: 'Code, QA & déploiements', signal: 'Tests, bugs, PR, Vercel, monitoring et incidents avec validation humaine.', color: '#5e6ad2' },
  { name: 'Data', role: 'Veille & reporting', signal: 'Scraping, dashboards, alertes concurrentielles, rapports hebdo.', color: '#10b981' },
  { name: 'Ops', role: 'Process & exécution', signal: 'Runbooks, contrôles, relances internes, suivi quotidien.', color: '#f59e0b' },
  { name: 'Marketing', role: 'Contenu & landing pages', signal: 'SEO, campagnes, posts, pages de vente, amélioration continue.', color: '#ec4899' },
  { name: 'Produit', role: 'Specs & feedback', signal: 'Synthèse clients, roadmap, tickets, priorisation.', color: '#38bdf8' },
]

const proof = [
  ['50×', 'moins cher qu’un poste chargé dans le cas type'],
  ['24/7', 'veille, relances et contrôles en continu'],
  ['0', 'recrutement, congés, arrêt maladie ou onboarding lourd'],
  ['1', 'humain garde la main sur les décisions sensibles'],
]

const conversionBullets = [
  ['Un vrai rôle, pas un chatbot', 'Chaque agent a une mission, des outils, des limites et un protocole d’escalade.'],
  ['Connecté à ton environnement', 'Slack, Telegram, GitHub, Vercel, Gmail, CRM, Proxmox ou outils métier.'],
  ['Mesure claire du ROI', 'Chaque semaine : tâches exécutées, heures économisées, décisions escaladées.'],
]

const steps = [
  ['01', 'Tu choisis le poste', 'On part d’un job qui coûte du temps : sales, tech, data, ops, marketing ou produit.'],
  ['02', 'On branche les accès', 'Permissions limitées, validations obligatoires, canaux d’escalade et routines.'],
  ['03', 'L’agent exécute', 'Tu reçois du travail fini, pas une démo. Les actions sensibles attendent ton feu vert.'],
]

const faqs = [
  ['Pourquoi 50× moins cher ?', 'Sur le cas type affiché : un poste à 60k€ brut coûte environ 8,4k€/mois chargé avec absences. Un agent à 150€/mois est environ 56× moins cher. Le site arrondit à 50×.'],
  ['Est-ce que Corrtex remplace l’humain ?', 'Non. Corrtex retire le répétitif et garde l’humain sur le jugement, les clients, le budget et les décisions risquées.'],
  ['Combien de temps pour lancer un agent ?', 'Un premier périmètre utile peut être lancé rapidement : rôle clair, accès limités, routine quotidienne, reporting et validations.'],
]

function App() {
  return (
    <main className="site-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Accueil Corrtex">
          <span className="brand-mark material-symbols-outlined" aria-hidden="true">robot_2</span>
          <span>Corrtex</span>
        </a>
        <div className="nav-links">
          <a href="#finance">ROI</a>
          <a href="#agents">Agents</a>
          <a href="#deploy">Déploiement</a>
          <a className="nav-cta" href="#lead">Obtenir mon agent</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="eyebrow"><span className="pulse" /> Agents IA opérationnels · jusqu’à 50× moins cher qu’un poste</div>
        <h1>Embauche un agent IA. Pas un salaire.</h1>
        <p className="hero-copy">
          Corrtex déploie des agents IA qui exécutent les tâches répétitives de ton équipe : prospection, QA, reporting, veille, documentation, relances et monitoring. Coût fixe, exécution 24/7, validation humaine quand ça compte.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#lead">Je veux mon premier agent</a>
          <a className="button ghost" href="#finance">Calculer l’économie</a>
        </div>
        <div className="trust-row" aria-label="Garanties Corrtex">
          <span>✓ Sans recrutement</span><span>✓ Piloté par Telegram/Slack</span><span>✓ Garde-fous humains</span><span>✓ ROI mesuré</span>
        </div>
        <div className="metrics" aria-label="Indicateurs Corrtex">
          {proof.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <p className="metric-note">*Comparaison indicative basée sur un poste brut à 60k€/an et un agent à 150€/mois.</p>
      </section>

      <section id="finance" className="section finance-section">
        <div className="section-heading narrow">
          <div className="eyebrow">ROI instantané</div>
          <h2>Le vrai coût d’un poste explose. Le coût d’un agent reste fixe.</h2>
          <p className="section-copy">Ajuste le salaire et le prix agent. Corrtex vend une économie simple : exécution continue, coût prévisible, moins de friction.</p>
        </div>
        <RoiCalculator />
      </section>

      <section id="agents" className="section split">
        <div>
          <div className="eyebrow">Agents prêts à déployer</div>
          <h2>Choisis un poste. Corrtex l’augmente.</h2>
          <p className="section-copy">L’agent travaille dans tes outils, suit tes règles et remonte les décisions importantes. Tu gardes le contrôle, il absorbe l’exécution.</p>
          <div className="feature-strip">
            {conversionBullets.map(([title, text]) => <article key={title}><strong>{title}</strong><span>{text}</span></article>)}
          </div>
        </div>
        <div className="agent-grid">
          {agents.map((agent) => (
            <article className="agent-card" key={agent.name} style={{ '--accent': agent.color } as React.CSSProperties}>
              <div className="agent-avatar material-symbols-outlined">robot_2</div>
              <div><h3>{agent.name}</h3><p>{agent.role}</p></div>
              <small>{agent.signal}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="deploy" className="section timeline-section">
        <div className="section-heading narrow">
          <div className="eyebrow">Déploiement rapide</div>
          <h2>Un agent utile, un périmètre clair, un ROI visible.</h2>
        </div>
        <div className="timeline">
          {steps.map(([num, title, text]) => <article className="timeline-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section close-section">
        <div className="close-card">
          <div>
            <div className="eyebrow">Offre pilote</div>
            <h2>Commence par une tâche qui te coûte déjà trop cher.</h2>
            <p>On identifie le poste répétitif, on branche un agent, puis on mesure les heures économisées. Si le ROI n’est pas clair, on change de périmètre.</p>
          </div>
          <a className="button primary" href="#lead">Réserver mon agent</a>
        </div>
      </section>

      <section className="section faq-section">
        <div className="quote-card compact">
          <p>“Tu ne paies plus quelqu’un pour copier-coller. Tu gardes l’humain pour décider.”</p>
          <span>Corrtex · agents IA opérationnels</span>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section id="lead" className="section lead">
        <div>
          <div className="eyebrow">Demande d’agent</div>
          <h2>Quel poste rendre 50× moins cher ?</h2>
          <p className="section-copy">Décris le travail répétitif. Corrtex te répond avec un premier périmètre d’agent, les accès nécessaires et le ROI attendu.</p>
        </div>
        <LeadForm />
      </section>

      <footer className="footer">
        <span>Corrtex</span>
        <p>Agents IA à coût fixe · jusqu’à 50× moins cher · validations humaines</p>
      </footer>
    </main>
  )
}

export default App

import './App.css'
import React from 'react'
import { LeadForm } from './LeadForm'

const RoiCalculator: React.FC = () => {
  const [brut, setBrut] = React.useState(60000)
  const [agentPrice, setAgentPrice] = React.useState(300)

  const monthlyBrut = brut / 12
  const chargesRate = 0.42
  const monthlyWithCharges = monthlyBrut * (1 + chargesRate)
  const annualWithCharges = monthlyWithCharges * 12

  const sickDays = 8
  const vacationDays = 35
  const totalAbsenceDays = sickDays + vacationDays
  const workingDays = 228
  const absenceCost = (annualWithCharges / workingDays) * totalAbsenceDays

  const humanAnnual = annualWithCharges + absenceCost
  const humanMonthly = humanAnnual / 12

  const agentAnnual = agentPrice * 12
  const savingsAnnual = humanAnnual - agentAnnual
  const savingsPercent = ((humanAnnual - agentAnnual) / humanAnnual) * 100
  const breakEvenMonths = Math.max(1, Math.ceil(agentAnnual / Math.max(1, humanMonthly - agentPrice)))

  return (
    <div className="roi-calculator">
      <div className="roi-inputs">
        <label>
          Salaire brut annuel
          <input
            type="range"
            min={45000}
            max={95000}
            step={1000}
            value={brut}
            onChange={(e) => setBrut(Number(e.target.value))}
          />
          <div className="value">{brut.toLocaleString('fr-FR')} € / an</div>
        </label>

        <label>
          Coût agent / mois
          <input
            type="range"
            min={150}
            max={600}
            step={10}
            value={agentPrice}
            onChange={(e) => setAgentPrice(Number(e.target.value))}
          />
          <div className="value">{agentPrice} € / mois</div>
        </label>
      </div>

      <div className="roi-results">
        <div className="comparison">
          <div className="col human">
            <div className="label">Humain ({Math.round(brut / 1000)}k€ brut)</div>
            <div className="big">
              {Math.round(humanMonthly).toLocaleString('fr-FR')} €<span>/mois</span>
            </div>
            <div className="small">{Math.round(humanAnnual).toLocaleString('fr-FR')} € / an</div>
            <ul>
              <li>+42% charges patronales</li>
              <li>+{totalAbsenceDays} jours d’absence/an</li>
              <li>Recrutement + management</li>
            </ul>
          </div>

          <div className="col agent">
            <div className="label">Agent IA</div>
            <div className="big">
              {agentPrice} €<span>/mois</span>
            </div>
            <div className="small">{agentAnnual.toLocaleString('fr-FR')} € / an</div>
            <ul>
              <li>0 charge sociale</li>
              <li>0 jour de congé</li>
              <li>24/7 • scalabilité</li>
            </ul>
          </div>
        </div>

        <div className="savings">
          <div>Économie annuelle estimée</div>
          <strong>{Math.round(savingsAnnual).toLocaleString('fr-FR')} €</strong>
          <span className="pct">−{Math.round(savingsPercent)} %</span>
          <div className="break">Rentable dès le mois {breakEvenMonths}</div>
        </div>
      </div>
    </div>
  )
}

const agents = [
  { name: 'Édouard', role: 'Agent Sales', signal: 'Prospection, relances, CRM, comptes cibles', color: '#828fff' },
  { name: 'Sébastien', role: 'Agent Tech', signal: 'Code, infra, QA, déploiements, incidents', color: '#5e6ad2' },
  { name: 'Baptiste', role: 'Agent Data', signal: 'Veille, scraping, dashboards, reporting', color: '#10b981' },
  { name: 'Othmane', role: 'Agent Ops', signal: 'Process, runbooks, contrôle, escalades', color: '#f59e0b' },
  { name: 'Mira', role: 'Agent Marketing', signal: 'Contenu, campagnes, landing pages, SEO', color: '#ec4899' },
  { name: 'Elias', role: 'Agent Produit', signal: 'Roadmap, specs, feedback, priorisation', color: '#38bdf8' },
]

const features = [
  ['Coût fixe', 'Tu ajoutes de la capacité sans recruter, onboarder ou alourdir la masse salariale.'],
  ['Validation humaine', 'Budget, production, client ou juridique : les actions sensibles remontent vers toi.'],
  ['Connecté à tes outils', 'Slack, Telegram, GitHub, Vercel, Gmail, CRM, Proxmox, modèles locaux ou cloud.'],
]

const steps = [
  ['01', 'Choisir le poste à augmenter', 'On cible un rôle qui mange du temps chaque semaine : sales, tech, data, ops, marketing ou produit.'],
  ['02', 'Brancher les outils et règles', 'Accès limités, validations obligatoires, routines claires et escalade humaine.'],
  ['03', 'Mesurer le ROI', 'Chaque semaine : tâches exécutées, temps économisé, incidents détectés, décisions escaladées.'],
]

const faqs = [
  ['C’est un salarié virtuel ?', 'C’est un agent opérationnel : rôle, outils, objectifs, routines et limites. Il ne remplace pas la responsabilité humaine.'],
  ['Qui valide les actions sensibles ?', 'Toi. Dépenses, emails externes, accès clients et changements production passent en validation.'],
  ['Ça tourne où ?', 'Local, cloud ou hybride : Proxmox/LXC, modèles locaux, providers externes, Slack, GitHub, Vercel et tes outils métier.'],
]

function App() {
  return (
    <main className="site-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Accueil Hermes Agents">
          <span className="brand-mark">H</span>
          <span>Hermes Agents</span>
        </a>
        <div className="nav-links">
          <a href="#finance">ROI</a>
          <a href="#system">Agents</a>
          <a href="#deploy">Déploiement</a>
          <a className="nav-cta" href="#lead">Embaucher un agent</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="eyebrow"><span className="pulse" /> Agent IA opérationnel · coût fixe · exécution 24/7</div>
        <h1>Embauche un agent IA. Pas un salaire de plus.</h1>
        <p className="hero-copy">
          Hermes Agents déploie des profils IA pour prendre en charge les tâches répétitives : prospection, reporting, QA, veille, documentation, relances et monitoring. Coût prévisible, disponibilité continue, validation humaine quand ça compte.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#lead">Embaucher un premier agent</a>
          <a className="button ghost" href="#finance">Voir l’impact financier</a>
        </div>
        <div className="metrics" aria-label="Indicateurs opérationnels Hermes Agents">
          <div><strong>0</strong><span>congés payés</span></div>
          <div><strong>0</strong><span>arrêt maladie</span></div>
          <div><strong>24/7</strong><span>disponibilité</span></div>
          <div><strong>×5</strong><span>moins cher qu’un CDI*</span></div>
        </div>
        <p className="metric-note">*Comparaison indicative basée sur un salaire brut de 60k€/an avec charges et absences.</p>
      </section>

      <section id="finance" className="section finance-section">
        <div className="section-heading narrow">
          <div className="eyebrow">Levier financier</div>
          <h2>Combien coûte vraiment un poste vs un agent ?</h2>
          <p className="section-copy">
            Exemple concret : un poste à 60 000 € brut/an vs un agent à 300 €/mois. Ajuste les curseurs et vois l’ordre de grandeur immédiatement.
          </p>
        </div>
        <RoiCalculator />
      </section>

      <section id="system" className="section split">
        <div>
          <div className="eyebrow">Profils disponibles</div>
          <h2>Choisis le poste à augmenter. On déploie l’agent.</h2>
          <p className="section-copy">Chaque agent a une mission, des accès limités, une mémoire, des routines et un protocole d’escalade. Il travaille comme un membre d’équipe, mais avec un coût et une disponibilité de machine.</p>
          <div className="feature-strip">
            {features.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="agent-grid">
          {agents.map((agent) => (
            <article className="agent-card" key={agent.name} style={{ '--accent': agent.color } as React.CSSProperties}>
              <div className="agent-avatar">{agent.name[0]}</div>
              <div>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
              </div>
              <small>{agent.signal}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="deploy" className="section timeline-section">
        <div className="section-heading narrow">
          <div className="eyebrow">Pilote rapide</div>
          <h2>Un premier agent, un périmètre, un ROI.</h2>
        </div>
        <div className="timeline">
          {steps.map(([num, title, text]) => (
            <article className="timeline-item" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="quote-card compact">
          <p>“Tu gardes l’humain pour juger. Tu donnes l’exécution répétitive à l’agent.”</p>
          <span>Hermes Agents · agents IA opérationnels</span>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="lead" className="section lead">
        <div>
          <div className="eyebrow">Demande d’agent</div>
          <h2>Quel agent veux-tu embaucher en premier ?</h2>
          <p className="section-copy">Décris le poste qui te coûte trop de temps : relances sales, reporting, QA, veille, support interne, contenu, monitoring ou opérations.</p>
        </div>
        <LeadForm />
      </section>

      <footer className="footer">
        <span>Hermes Agents</span>
        <p>Agents IA à coût fixe · disponibilité 24/7 · validations humaines</p>
      </footer>
    </main>
  )
}

export default App

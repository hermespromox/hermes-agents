import './App.css'
import React from 'react'

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
          <div>Économie annuelle</div>
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
  ['Coût fixe, capacité variable', 'Tu ajoutes un agent pour absorber du volume sans ouvrir un poste, recruter, onboarder ou gérer une masse salariale lourde.'],
  ['Disponible 24/7', 'Pas de week-end, pas de congés payés, pas d’arrêt maladie : l’agent continue les relances, la veille et les checks pendant que l’équipe dort.'],
  ['Humain sur les décisions', 'L’agent exécute le répétitif. Les actions sensibles — budget, production, client, juridique — remontent vers toi pour validation.'],
  ['Connecté à tes outils', 'Slack, Telegram, GitHub, Vercel, Gmail, CRM, Proxmox, modèles locaux ou cloud : l’agent travaille dans ton environnement.'],
  ['Mémoire opérationnelle', 'Les bons workflows deviennent des skills. L’agent ne repart pas de zéro : il capitalise sur tes méthodes et ton contexte.'],
  ['Déploiement rapide', 'Un premier agent utile peut être lancé vite : rôle clair, accès limités, routines, garde-fous et reporting quotidien.'],
]

const financialCards = [
  ['Salaire chargé', '0€', 'Pas de CDI, pas de charges, pas de variable, pas de recrutement long.'],
  ['Congés & absences', '0 jour', 'Pas de congés payés, pas d’arrêt maladie, pas d’indisponibilité imprévue.'],
  ['Amplitude', '24/7', 'Veille, relances, monitoring et documentation en continu.'],
  ['Scalabilité', '+1 agent', 'Tu ajoutes un profil quand le volume augmente, tu ajustes quand le besoin baisse.'],
]

const steps = [
  ['01', 'Choisir le poste à augmenter', 'Sales, tech, data, ops, marketing ou produit : on commence par un rôle qui coûte du temps chaque semaine.'],
  ['02', 'Donner les outils et les règles', 'On connecte Slack, Telegram, GitHub, Vercel, email ou CRM avec permissions limitées et validations obligatoires.'],
  ['03', 'Mesurer le ROI', 'Chaque semaine : tâches exécutées, temps économisé, leads traités, incidents détectés, décisions escaladées.'],
]

const faqs = [
  ['C’est un salarié virtuel ?', 'C’est un agent opérationnel : il a un rôle, des outils, des objectifs, des routines et des limites. Il ne remplace pas la responsabilité humaine.'],
  ['Pourquoi l’angle financier est intéressant ?', 'Parce qu’un agent absorbe beaucoup de tâches répétitives sans salaire chargé, congés, arrêt maladie, recrutement ni management classique.'],
  ['Qui valide les actions sensibles ?', 'Toi. On configure des garde-fous : dépenses, production, emails externes, accès clients et changements structurels passent en validation Telegram.'],
  ['Ça tourne où ?', 'Local, cloud ou hybride : Proxmox/LXC, modèles locaux type Ollama, providers externes, Slack, GitHub, Vercel et tes outils métier.'],
]

function App() {
  return (
    <main className="site-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Hermes Agents home">
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
        <div className="eyebrow"><span className="pulse" /> Hire an AI agent · fixed cost · 24/7 execution</div>
        <h1>Embauche un agent IA. Pas un salaire de plus.</h1>
        <p className="hero-copy">
          Hermes Agents déploie des profils IA opérationnels pour prendre en charge les tâches répétitives : prospection, reporting, QA, veille, documentation, relances et monitoring. Coût prévisible, disponibilité continue, validation humaine quand ça compte.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#lead">Embaucher un premier agent</a>
          <a className="button ghost" href="#finance">Voir l’impact financier</a>
        </div>
        <div className="metrics" aria-label="Hermes financial operating metrics">
          <div><strong>0</strong><span>congés payés à gérer</span></div>
          <div><strong>0</strong><span>arrêt maladie imprévu</span></div>
          <div><strong>24/7</strong><span>exécution continue</span></div>
          <div><strong>-80%</strong><span>coût vs poste opérationnel*</span></div>
        </div>
        <p className="metric-note">*Estimation indicative selon périmètre, modèle, infra et niveau d’autonomie.</p>
      </section>

      <section id="finance" className="section finance-section">
        <div className="section-heading narrow">
          <div className="eyebrow">Financial leverage</div>
          <h2>Combien coûte vraiment un poste vs un agent ?</h2>
          <p className="section-copy">
            Exemple concret : un poste à 60 000 € brut/an (≈ 5 000 €/mois) vs un agent à 300 €/mois. 
            Avec charges patronales, congés, arrêts maladie et disponibilité, le vrai coût humain est souvent 2× le brut.
          </p>
        </div>

        <RoiCalculator />

        <div className="finance-grid" style={{ marginTop: 48 }}>
          {financialCards.map(([label, value, text]) => (
            <article className="finance-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="console-wrap section">
        <div className="console-card">
          <div className="window-bar"><span /><span /><span /><em>hermes-agents / board-room</em></div>
          <div className="terminal-grid">
            <div className="chat-feed">
              <p><b>Agent Sales</b><span>32 prospects qualifiés, 11 relances préparées, 4 réponses à traiter par l’équipe humaine.</span></p>
              <p><b>Agent Data</b><span>Rapport marge/coût mis à jour. Deux anomalies détectées sur les dépenses SaaS.</span></p>
              <p><b>Agent Tech</b><span>Build Vercel validé. Tests OK. Aucun changement production sans validation Telegram.</span></p>
              <p><b>Agent Ops</b><span>ROI hebdo prêt : 18h estimées économisées, 6 décisions escaladées, 0 incident critique.</span></p>
            </div>
            <div className="ops-panel">
              <div className="status-line"><span className="dot green" /> Always on</div>
              <div className="status-line"><span className="dot violet" /> Human approval gates</div>
              <div className="status-line"><span className="dot blue" /> Weekly ROI report</div>
              <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="section split">
        <div>
          <div className="eyebrow">Available profiles</div>
          <h2>Choisis le poste à augmenter. On déploie l’agent.</h2>
          <p className="section-copy">Chaque agent a une mission, des accès limités, un canal Slack, une mémoire, des routines et un protocole d’escalade. Il travaille comme un membre d’équipe, mais avec un coût et une disponibilité de machine.</p>
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

      <section className="section">
        <div className="section-heading">
          <div className="eyebrow">Why it works</div>
          <h2>Un agent n’est pas une démo IA. C’est une unité de production.</h2>
        </div>
        <div className="feature-grid">
          {features.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon">✦</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="deploy" className="section timeline-section">
        <div className="section-heading narrow">
          <div className="eyebrow">Fast pilot</div>
          <h2>Pas de grand chantier. Un premier agent, un périmètre, un ROI.</h2>
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

      <section id="pricing" className="section pricing">
        <div className="pricing-card">
          <div>
            <div className="eyebrow">Agent deployment</div>
            <h2>Commence par un agent qui rembourse son coût.</h2>
            <p>On cible un poste chronophage, on limite les accès, on mesure les heures économisées et on automatise uniquement ce qui a un ROI clair.</p>
          </div>
          <div className="price-box">
            <span>Premier objectif</span>
            <strong>1 agent rentable</strong>
            <a className="button primary" href="#lead">Embaucher un agent</a>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="quote-card">
          <p>“Tu ne paies pas quelqu’un pour attendre, tomber malade ou faire du copier-coller. Tu gardes l’humain pour juger. Tu donnes l’exécution à l’agent.”</p>
          <span>Hermes Agents · financial operating system</span>
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
          <div className="eyebrow">Hire request</div>
          <h2>Quel agent veux-tu embaucher en premier ?</h2>
          <p className="section-copy">Décris le poste qui te coûte trop de temps : relances sales, reporting, QA, veille, support interne, contenu, monitoring ou opérations.</p>
        </div>
        <form className="lead-form" action="mailto:hermes.promox@gmail.com" method="post" encType="text/plain">
          <label>Nom<input name="name" placeholder="Ton nom" required /></label>
          <label>Email<input name="email" type="email" placeholder="toi@company.com" required /></label>
          <label>Agent à embaucher<textarea name="project" placeholder="Je veux un agent pour gérer…" rows={5} required /></label>
          <button className="button primary" type="submit">Demander mon agent</button>
          <small>Formulaire statique : ouvre ton client email avec le brief pré-rempli.</small>
        </form>
      </section>

      <footer className="footer">
        <span>Hermes Agents</span>
        <p>Hire AI agents · fixed cost · no holidays · no sick leave · human approvals</p>
      </footer>
    </main>
  )
}

export default App

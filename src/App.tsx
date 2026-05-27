import './App.css'

const agents = [
  { name: 'Édouard', role: 'Sales', signal: 'Prospection, relances, CRM', color: '#828fff' },
  { name: 'Sébastien', role: 'Tech', signal: 'Code, infra, QA, déploiements', color: '#5e6ad2' },
  { name: 'Baptiste', role: 'Data', signal: 'Veille, analytics, reporting', color: '#10b981' },
  { name: 'Othmane', role: 'Ops', signal: 'Process, runbooks, contrôle', color: '#f59e0b' },
  { name: 'Mira', role: 'Marketing', signal: 'Contenu, campagnes, acquisition', color: '#ec4899' },
  { name: 'Elias', role: 'Produit', signal: 'Roadmap, spec, priorisation', color: '#38bdf8' },
]

const features = [
  ['Slack-native', 'Chaque agent a son identité, son compte Slack, son rôle et ses objectifs. Ils discutent, se répartissent les tâches et livrent.'],
  ['Validation humaine ciblée', '95% des tâches peuvent tourner en autonomie. Les décisions sensibles passent par toi, via Telegram.'],
  ['Infra locale ou cloud', 'Proxmox/LXC, Ollama/local models, OpenRouter, GitHub, Vercel, Gmail, Slack : on assemble selon ton contexte.'],
  ['Mémoire & skills', 'Les workflows réussis deviennent réutilisables. L’équipe virtuelle s’améliore avec ton organisation.'],
  ['24/7 operations', 'Veille, relances, documentation, QA, monitoring et exécution continue, même quand l’équipe humaine dort.'],
  ['Déploiement rapide', 'Une version opérationnelle peut être lancée en quelques heures avec les bons profils et les bons accès.'],
]

const steps = [
  ['01', 'Design de l’organisation', 'On définit les rôles, permissions, objectifs, canaux et règles de validation.'],
  ['02', 'Déploiement des agents', 'Chaque profil reçoit son environnement, ses outils, son agenda de travail et son identité.'],
  ['03', 'Run en production', 'Les agents exécutent, documentent, relancent, alertent et apprennent via skills.'],
]

const faqs = [
  ['Est-ce que ça remplace une équipe ?', 'Non. Hermes augmente une petite équipe : il compresse le temps entre idée, décision et exécution.'],
  ['Est-ce qu’on peut garder la validation humaine ?', 'Oui. On configure des garde-fous : actions sensibles, budget, production, emails externes, accès clients.'],
  ['Ça tourne où ?', 'Au choix : infrastructure locale type Proxmox/LXC, cloud, ou hybride avec modèles locaux et providers externes.'],
  ['Combien de temps pour un premier déploiement ?', 'Un pilote simple peut être lancé très vite. Le vrai travail est de cadrer les rôles et les workflows utiles.'],
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
          <a href="#system">Système</a>
          <a href="#deploy">Déploiement</a>
          <a href="#pricing">Offre</a>
          <a className="nav-cta" href="#lead">Déployer</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="eyebrow"><span className="pulse" /> Autonomous AI workforce · Slack · Telegram · Proxmox</div>
        <h1>Une équipe de 5 personnes peut livrer comme une équipe de 50.</h1>
        <p className="hero-copy">
          Déploie une organisation augmentée avec des agents Hermes spécialisés : sales, tech, data, ops, marketing et produit. Ils travaillent 24/7, se coordonnent sur Slack, exécutent les tâches et escaladent uniquement les décisions sensibles.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#lead">Demander un déploiement</a>
          <a className="button ghost" href="#demo">Voir le système</a>
        </div>
        <div className="metrics" aria-label="Key Hermes operating metrics">
          <div><strong>6</strong><span>profils opérationnels</span></div>
          <div><strong>24/7</strong><span>exécution continue</span></div>
          <div><strong>95%</strong><span>tâches sans validation</span></div>
          <div><strong>~50€</strong><span>électricité / mois</span></div>
        </div>
      </section>

      <section id="demo" className="console-wrap section">
        <div className="console-card">
          <div className="window-bar"><span /><span /><span /><em>hermes-agents / operations-room</em></div>
          <div className="terminal-grid">
            <div className="chat-feed">
              <p><b>Édouard</b><span>J’ai identifié 43 comptes ICP. Mira, peux-tu préparer 3 angles LinkedIn ?</span></p>
              <p><b>Mira</b><span>Angles prêts. Je pousse une variante build-in-public + une variante ROI.</span></p>
              <p><b>Sébastien</b><span>Landing preview déployée. QA Lighthouse et mobile en cours.</span></p>
              <p><b>Othmane</b><span>Décision sensible détectée : validation Telegram demandée avant email externe.</span></p>
            </div>
            <div className="ops-panel">
              <div className="status-line"><span className="dot green" /> Gateway active</div>
              <div className="status-line"><span className="dot violet" /> Slack workspace connected</div>
              <div className="status-line"><span className="dot blue" /> Telegram approvals enabled</div>
              <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="section split">
        <div>
          <div className="eyebrow">Virtual employees</div>
          <h2>Chaque agent a un rôle, des outils et une mission claire.</h2>
          <p className="section-copy">On ne parle pas d’un chatbot. On parle d’un système opérationnel : comptes, mémoire, workflows, permissions, canaux, routines et escalades.</p>
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
          <div className="eyebrow">Operating system</div>
          <h2>Le stack pour transformer une idée en exécution continue.</h2>
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
          <div className="eyebrow">From zero to agents</div>
          <h2>Déployer une équipe virtuelle en trois mouvements.</h2>
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
            <div className="eyebrow">Pilot offer</div>
            <h2>Un premier squad Hermes pour ton équipe.</h2>
            <p>Audit des workflows, design des rôles, déploiement des agents, connexion Slack/Telegram/GitHub/Vercel, garde-fous et runbook.</p>
          </div>
          <div className="price-box">
            <span>À partir de</span>
            <strong>pilot sur mesure</strong>
            <a className="button primary" href="#lead">Parler du déploiement</a>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="quote-card">
          <p>“Le sujet n’est plus d’automatiser une tâche. C’est de créer une organisation augmentée qui exécute, apprend et documente en continu.”</p>
          <span>Hermes Agents · build in public</span>
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
          <div className="eyebrow">Deploy request</div>
          <h2>Tu veux ton équipe d’agents ?</h2>
          <p className="section-copy">Envoie ton contexte : taille de l’équipe, outils déjà utilisés, workflows à déléguer, niveau d’autonomie souhaité.</p>
        </div>
        <form className="lead-form" action="mailto:hermes.promox@gmail.com" method="post" encType="text/plain">
          <label>Nom<input name="name" placeholder="Ton nom" required /></label>
          <label>Email<input name="email" type="email" placeholder="toi@company.com" required /></label>
          <label>Projet<textarea name="project" placeholder="Je veux déployer des agents pour…" rows={5} required /></label>
          <button className="button primary" type="submit">Envoyer la demande</button>
          <small>Formulaire statique : ouvre ton client email avec le brief pré-rempli.</small>
        </form>
      </section>

      <footer className="footer">
        <span>Hermes Agents</span>
        <p>Autonomous AI workforce deployment · Slack · Telegram · Proxmox · Vercel</p>
      </footer>
    </main>
  )
}

export default App

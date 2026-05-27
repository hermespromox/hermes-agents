import React, { useState } from 'react'

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', agent: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setMessage('Demande envoyée. On vous répond sous 24h.')
        setFormData({ name: '', email: '', project: '', agent: '' })
      } else {
        throw new Error('Erreur serveur')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Une erreur est survenue. Réessayez ou écrivez à hermes.promox@gmail.com')
    }
  }

  if (status === 'success') {
    return (
      <div className="lead-success">
        <div className="success-icon">✓</div>
        <h3>Demande bien reçue.</h3>
        <p>{message}</p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Nom
          <input 
            type="text" 
            value={formData.name} 
            onChange={e => setFormData({ ...formData, name: e.target.value })} 
            required 
          />
        </label>
        <label>Email
          <input 
            type="email" 
            value={formData.email} 
            onChange={e => setFormData({ ...formData, email: e.target.value })} 
            required 
          />
        </label>
      </div>

      <label>Agent souhaité (optionnel)
        <input 
          type="text" 
          placeholder="Sales, Tech, Data, Ops, Marketing..." 
          value={formData.agent} 
          onChange={e => setFormData({ ...formData, agent: e.target.value })} 
        />
      </label>

      <label>Brief du poste à automatiser *
        <textarea 
          value={formData.project} 
          onChange={e => setFormData({ ...formData, project: e.target.value })} 
          rows={5} 
          placeholder="Je veux un agent qui s'occupe de..." 
          required 
        />
      </label>

      <button 
        type="submit" 
        className="button primary" 
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>

      {status === 'error' && <p className="form-error">{message}</p>}
      
      <small>Nous vous répondons en moins de 24h. Aucune donnée n’est stockée.</small>
    </form>
  )
}

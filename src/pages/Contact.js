import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

const res = await fetch('https://e12e1604-b13d-4d47-b41d-b1acaba486e1-00-1l4f4dsidu3ap.pike.replit.dev/api/messages', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);

    // Reset form
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Kontak Saya</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

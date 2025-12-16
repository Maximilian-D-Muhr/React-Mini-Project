export default function Contact() {
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h1>Contact</h1>
        <p>Simple contact form (no submission logic required).</p>
      </div>

      <form className="card bg-base-100 border">
        <div className="card-body gap-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input className="input input-bordered" placeholder="Your name" />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input className="input input-bordered" type="email" placeholder="you@example.com" />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea className="textarea textarea-bordered" rows={5} placeholder="How can we help?" />
          </label>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" type="button">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

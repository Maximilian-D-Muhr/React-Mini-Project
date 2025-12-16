import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/destinations");
  };

  return (
    <form onSubmit={handleSearch} className="card bg-base-100 border">
      <div className="card-body gap-4">
        <h2 className="card-title">Search trips</h2>

        <div className="grid md:grid-cols-4 gap-3">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Origin</span>
            </div>
            <input className="input input-bordered" placeholder="Berlin" />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Destination</span>
            </div>
            <input className="input input-bordered" placeholder="Lisbon" />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Start date</span>
            </div>
            <input className="input input-bordered" type="date" />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">End date</span>
            </div>
            <input className="input input-bordered" type="date" />
          </label>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

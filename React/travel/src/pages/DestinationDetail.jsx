import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";

export default function DestinationDetail() {
  const { slug } = useParams();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="space-y-4">
        <div className="alert alert-warning">
          <span>Destination not found: "{slug}"</span>
        </div>
        <Link className="btn" to="/destinations">
          Back to destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>{destination.title}</li>
        </ul>
      </div>

      <div className="card bg-base-100 border overflow-hidden">
        <figure className="max-h-[360px]">
          <img
            src={destination.image}
            alt={`${destination.title} hero`}
            className="w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h1 className="card-title text-3xl">{destination.title}</h1>
          <p className="opacity-80">{destination.country}</p>

          <div className="flex gap-2">
            <div className="badge badge-primary">from EUR {destination.priceFrom}</div>
            <div className="badge badge-ghost">{destination.days} days</div>
            <div className="badge badge-outline">slug: {destination.slug}</div>
          </div>

          <p className="mt-2">{destination.description}</p>

          <div className="card-actions justify-end">
            <Link className="btn" to="/destinations">
              Back
            </Link>
            <Link className="btn btn-primary" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

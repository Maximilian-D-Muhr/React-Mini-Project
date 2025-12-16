import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <div className="card bg-base-100 border overflow-hidden">
      <figure className="h-48">
        <img
          src={destination.image}
          alt={`${destination.title} preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {destination.title}
          <div className="badge badge-outline">{destination.country}</div>
        </h2>

        <p className="text-sm opacity-80">{destination.description}</p>

        <div className="flex gap-2 items-center">
          <div className="badge badge-primary">from EUR {destination.priceFrom}</div>
          <div className="badge badge-ghost">{destination.days} days</div>
        </div>

        <div className="card-actions justify-end">
          <Link className="btn btn-secondary btn-sm" to={`/destinations/${destination.slug}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}

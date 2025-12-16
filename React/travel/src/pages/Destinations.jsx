import { destinations } from "../data/destinations";
import DestinationCard from "../components/destinations/DestinationCard";

export default function Destinations() {
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h1>Destinations</h1>
        <p>Pick a destination to view details. Data is hard-coded for now.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <DestinationCard key={d.slug} destination={d} />
        ))}
      </div>
    </div>
  );
}

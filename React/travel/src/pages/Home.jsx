import SearchBar from "../components/homepage/SearchBar";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h1>Find your next trip</h1>
        <p>
          Use the search below to explore destinations. This is a demo UI - no
          real search logic required for the exercise.
        </p>
      </div>

      <SearchBar />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title">Curated deals</h2>
            <p>Hand-picked city trips with clear pricing.</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title">Simple booking flow</h2>
            <p>Clear navigation with React Router.</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title">Modern UI</h2>
            <p>TailwindCSS + DaisyUI for quick scaffolding.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

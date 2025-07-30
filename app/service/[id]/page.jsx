export default function ServiceDetails({ params }) {
    const { id } = params; // dynamic segment
  
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Service: {id}</h1>
        <p className="text-gray-700">
          This is the details page for <strong>{id}</strong>. You can fetch more
          information from an API or database here.
        </p>
      </div>
    );
  }
  
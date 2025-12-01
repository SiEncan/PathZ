"use client"

export function JobListing({
  title,
  company,
  location,
  level,
  salary,
  tags,
}: { title: string; company: string; location: string; level: string; salary: string; tags: string[] }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-lg font-bold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{level}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span>📍 {location}</span>
        <span>💰 {salary}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded font-semibold hover:bg-primary/90 transition-colors">
        View Details
      </button>
    </div>
  )
}

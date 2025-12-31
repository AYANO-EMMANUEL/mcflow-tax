interface TOCProps {
  sections: { id: string; title: string }[];
}

export default function TableOfContents({ sections }: TOCProps) {
  return (
    <aside className="w-64 bg-white border-l border-gray-200 h-screen sticky top-0 overflow-y-auto hidden xl:block">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.id}`}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

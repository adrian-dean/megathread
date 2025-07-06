import { useState } from "react";

interface MegathreadSection {
  title: string;
  content: JSX.Element;
}

const sections: MegathreadSection[] = [
  {
    title: "Torrenting",
    content: (
      <ul className="list-disc pl-6">
        <li>
          <a href="https://www.reddit.com/r/Piracy/wiki/megathread/torrenting" className="text-blue-500 underline" target="_blank">
            Torrenting Guide
          </a>
        </li>
        <li>Recommended clients, trackers, etc.</li>
      </ul>
    ),
  },
  {
    title: "Streaming",
    content: (
      <ul className="list-disc pl-6">
        <li>
          <a href="https://www.reddit.com/r/Piracy/wiki/megathread/streaming" className="text-blue-500 underline" target="_blank">
            Streaming Guide
          </a>
        </li>
        <li>Sites, apps, tools for streaming</li>
      </ul>
    ),
  },
  // ➡️ Add more sections as needed based on the megathread
];

export default function Megathread() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Piracy Megathread Clone</h1>
      {sections.map((section, index) => (
        <div key={index} className="border rounded-lg mb-4 shadow">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

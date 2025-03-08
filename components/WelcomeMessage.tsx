interface FeatureListItem {
  text: string;
}

const FEATURES: FeatureListItem[] = [
  { text: "Finding and analyzing YouTube video transcripts" },
  { text: "Searching through Google Books" },
  { text: "Processing data with JSONata" },
  { text: "Retrieve all Customer and Order data" },
  { text: "Retrieve all Comments from the Comments API" },
];

const FeatureListItem = ({ text }: FeatureListItem) => (
  <li className="flex items-start gap-2">
    <span className="text-blue-500">•</span>
    <span>{text}</span>
  </li>
);

export default function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-inset ring-gray-200 px-6 py-5 max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Welcome to AI Agent Chat! 👋
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          I can help you with:
        </p>
        <ul className="space-y-2 text-gray-600">
          {FEATURES.map((feature, index) => (
            <FeatureListItem key={index} text={feature.text} />
          ))}
        </ul>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Feel free to ask me anything! I&apos;m here to help.
        </p>
      </div>
    </div>
  );
}

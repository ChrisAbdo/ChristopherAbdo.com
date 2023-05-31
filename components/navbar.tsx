import Link from "next/link";

const navigation = [
  { name: "Twitter", href: "https://www.twitter.com/abdo_eth" },
  { name: "GitHub", href: "https://www.github.com/chrisabdo" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/christopher-abdo" },
];

export default function Navbar() {
  return (
    <header className="bg-white uppercase">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center text-sm font-semibold leading-6 underline-animation"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            christopher abdo
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm font-semibold leading-6 underline-animation"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

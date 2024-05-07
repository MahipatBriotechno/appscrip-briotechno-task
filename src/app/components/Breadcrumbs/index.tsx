import Link from 'next/link';
import React from 'react';

// Define the structure for a breadcrumb item
interface BreadcrumbItem {
  label: string; // The text to display
  href: string; // The link for navigation
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]; // Array of breadcrumb items
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex space-x-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <Link href={item.href}>
                <a className={`hover:underline ${isLast ? 'text-gray-400' : 'text-blue-600'}`}>
                  {item.label}
                </a>
              </Link>
              {/* Render a separator unless it's the last item */}
              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

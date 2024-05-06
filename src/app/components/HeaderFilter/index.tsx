import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string; // Display text for the breadcrumb
  href: string; // URL for the breadcrumb
}

interface HeaderFilterProps {
  items: BreadcrumbItem[]; // Array of breadcrumb items
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1; // Check if it's the last item
          return (
            <li key={index} className="flex items-center">
              <Link href={item.href} className={`${
                    isLast ? 'text-gray-500' : 'text-blue-600'
                  } hover:underline`}>
                
                  {item.label}
                
              </Link>
              {!isLast && <span className="mx-2 text-gray-400">/</span>} {/* Separator */}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default HeaderFilter;

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
    <nav aria-label="Breadcrumb" className="margin-bottom">
      <ol className="flex-space-x text-small-gray">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center text-small-gray">
             
                <Link href={item.href}className={`hover-underline ${isLast? 'text-black' : 'text-cyan'}`}>
                  {item.label}
                
              </Link>
              {!isLast && <span className="margin-horizontal">|</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

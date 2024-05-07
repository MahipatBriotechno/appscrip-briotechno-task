"use client";
import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string; // Display text for the breadcrumb
  href: string; // URL for the breadcrumb
}

interface HeaderFilterProps {
  items: BreadcrumbItem[]; // Array of breadcrumb items
  clickFilter: () => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ items, clickFilter }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1; // Check if it's the last item
          return (
            <li key={index} className="flex items-center">
              {item.label == "HIDE FILTER" || item.label == "SHOW FILTER" ? (
                <button
                  className={`${
                    isLast
                      ? "text-gray-500 underline"
                      : "text-black-600 font-bold"
                  } hover:underline`}
                  onClick={clickFilter}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  className={`${
                    isLast
                      ? "text-gray-500 underline"
                      : "text-black-600 font-bold"
                  } hover:underline`}
                >
                  {item.label}
                </button>
              )}

              {!isLast && (
                <div className="ml-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                      stroke="#292D32"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {/* Separator */}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default HeaderFilter;

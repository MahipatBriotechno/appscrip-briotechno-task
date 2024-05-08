import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom"; // For creating a modal in Next.js
import { IoClose } from "react-icons/io5";
import { Container } from "../container";

interface DrawerProps {
  content: any;
  isOpen: any;
  setIsOpen: any;
}

const FilterDrawer: React.FC<DrawerProps> = ({ content, isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="padding-border">
    <Container>
      {isOpen &&
        createPortal(
          <div className="fixed-cover">
            <div
              ref={drawerRef}
              className="bg-white-width-padding-shadow flex-justify-between-items-center-margin-bottom"
            >
              <div></div>
              <IoClose onClick={() => setIsOpen(false)} />
              <div className="overflow-scroll-height">
                {content}
              </div>
            </div>

            <div className="flex-1 bg-gray-800 opacity-50" />
          </div>,
          document.body
        )}
    </Container>
  </div>
  );
};

export default FilterDrawer;

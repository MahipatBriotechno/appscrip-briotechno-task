export const Container = ({ children, className }: isContainer) => {
    return (
      <div className={`center-container max-width ${className}`}>
      {children}
    </div>
    );
  };
  
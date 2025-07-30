 
export default function Container({ children, className = "" }) {
    return (
      <div className={`max-w-[1240px] mx-auto px-4 md:px-6 ${className}`}>
        {children}
      </div>
    );
  }
  
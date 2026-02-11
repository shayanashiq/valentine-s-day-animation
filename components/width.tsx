import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Width({ children, className = "" }: Props) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}

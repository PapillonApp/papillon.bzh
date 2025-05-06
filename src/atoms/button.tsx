import React from "react";
import "./button.css";
import Link from "next/link";

export default function Button({
  leading,
  trailing,
  icon,
  href = "#",
  value,
  color
} : {
  leading?: React.ReactNode,
  trailing?: React.ReactNode,
  icon?: React.ReactNode,
  href?: string,
  value: string,
  color?: string,
}) {
  return (
    <Link
      href={href}
      className="button-outer"
      style={{
        // @ts-expect-error --button-color is a CSS variable
        '--button-color': `var(--${color})`
      }}
    >
      <div className="button-inner">
        {leading}
          {// @ts-expect-error icon is Lucide icon
          icon && React.cloneElement(icon, {
            color: "#ffffff",
            size: 20,
            strokeWidth: 2.5
          })}
        <p className="button-value">{value}</p>
        {trailing}
      </div>
    </Link>
  );
}
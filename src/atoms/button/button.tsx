import React from "react";
import "./button.css";
import Link from "next/link";

export default function Button({
  leading,
  trailing,
  icon,
  href = "#",
  value,
  color = "primary",
  className,
  outlined,
  style,
}: {
  leading?: React.ReactNode,
  trailing?: React.ReactNode,
  icon?: React.ReactNode,
  href?: string,
  value: string,
  color?: string,
  className?: string,
  outlined?: boolean,
  style?: React.CSSProperties,
}) {
  type ButtonStyle = React.CSSProperties & {
    [key: `--${string}`]: string | number | undefined;
  };

  const cssStyle = style as React.CSSProperties & {
    "--button-color"?: string;
    "--button-content-color"?: string;
  };

  const contentColor = outlined
    ? "var(--button-color)"
    : color === "foreground"
      ? "var(--background)"
      : color === "background"
        ? "var(--foreground)"
        : "#ffffff";

  const buttonStyle: ButtonStyle = {
    ...style,
    "--button-color": cssStyle?.["--button-color"] ?? `var(--${color})`,
    "--button-content-color": cssStyle?.["--button-content-color"] ?? contentColor,
  };

  return (
    <Link
      href={href}
      className={"button" + (" " + className || "") + (outlined ? " outlined" : "")}
      style={buttonStyle}
    >
      {leading}
      {// @ts-expect-error icon is Lucide icon
        icon && React.cloneElement(icon, {
          color: "var(--button-content-color)",
          size: 20,
          strokeWidth: 2.5
        })}
      <p className="button-value">{value}</p>
      {trailing}
    </Link>
  );
}
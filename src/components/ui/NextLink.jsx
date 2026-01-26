import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const NextLink = ({
  href,
  children,
  icon: Icon,
  iconPosition = "right",
  className = "",
  iconSize = 30,
  isExternal = false,
  ...props
}) => {
  const isInternal = href.startsWith("/") && !isExternal;
  const combinedClasses = ["page-link", Icon ? "page-link-icon" : "", className]
    .filter(Boolean)
    .join(" ");

  const renderIcon = () =>
    Icon && (
      <HugeiconsIcon
        icon={Icon}
        size={iconSize}
        color="currentColor"
        strokeWidth={1.5}
        className="link-icon-svg"
      />
    );

  const content = (
    <>
      {iconPosition === "left" && renderIcon()}
      <span>{children}</span>
      {iconPosition === "right" && renderIcon()}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClasses}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      {content}
    </a>
  );
};

export default NextLink;

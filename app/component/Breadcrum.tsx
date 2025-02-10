"use client";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";

type Path = {
  label: string;
  href: string;
};

export default function BreadCrumb() {
  const pathname = usePathname();
  // regex to make uppercase first letter of each word and remove special characters by replacing them with empty string
  // example: what-the-duck = What The Duck
  const regExp = /[-_+]/g;
  let href = "";

  let path: Path[] =
    pathname
      ?.split("/")
      .filter((x) => x)
      ?.map((x) => {
        const label = x
          .replace(regExp, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
        return {
          label: label,
          href: (href = href + "/" + x),
        };
      }) || [];

  if (path.length === 0) {
    return null;
  }

  path = [{ label: "Home", href: "/" }, ...path];

  return (
    <div className="bg-black p-2">
      <Container>
        <nav className="flex flex-wrap items-center text-white text-sm">
          {path.map((x, i) => (
            <div key={i} className="flex items-center">
              {i < path.length - 1 ? (
                <a href={x.href}>{x.label}</a>
              ) : (
                <span>{x.label}</span>
              )}
              {i < path.length - 1 && <span className="mx-1">/</span>}
            </div>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export type Crumb = { url: string; name: string };

function HomeIcon() {
  return (
    <svg
      class="homeIcon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav class="pankuzu" aria-label="パンくずリスト">
      <ul>
        <li class="breadcrumbItem">
          <a href="/" class="breadcrumbHome">
            <HomeIcon />
            HOME
          </a>
        </li>
        {items.map((item) => (
          <li class="breadcrumbItem">
            <span class="arrowIcon" aria-hidden="true">
              ›
            </span>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

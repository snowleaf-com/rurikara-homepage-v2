import { raw } from 'hono/html';

export type TimelineEntry = {
  number: number;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div class="timeline">
      {items.map((item) => (
        <div class="timelineItem" data-reveal-section>
          <div class="timelineCircle">{item.number}</div>
          <div class="timelineContent effect d_02">
            <h3>{item.title}</h3>
            <p>{raw(item.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

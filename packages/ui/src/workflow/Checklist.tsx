import { Surface } from "../surface/Surface";

export type ChecklistItem = {
  id: string | number;
  label: string;
  status: "todo" | "pending" | "done";
  meta?: string;
};

export type ChecklistProps = {
  title?: string;
  items: ChecklistItem[];
};

export function Checklist({ title, items }: ChecklistProps) {
  return (
    <Surface padding="none">
      {title ? (
        <div className="flex items-center justify-between rounded-t-[inherit] border-b border-border bg-muted/50 px-4 py-3">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
      ) : null}
      <div className="p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex cursor-pointer items-start gap-3 rounded-md p-3 transition-colors hover:bg-muted/60"
          >
            <div className="mt-0.5 h-5 w-5 rounded-full border border-border group-hover:border-primary" />
            <div className="min-w-0 flex-1">
              <p
                className={
                  item.status === "done"
                    ? "text-sm font-medium text-muted-foreground line-through"
                    : "text-sm font-medium text-foreground"
                }
              >
                {item.label}
              </p>
              {item.meta ? (
                <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Surface>
  );
}

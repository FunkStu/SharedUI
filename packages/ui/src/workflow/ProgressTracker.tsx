import { Surface } from "../surface/Surface";

export type ProgressStep = {
  id: string | number;
  title: string;
  description?: string;
  state: "complete" | "current" | "upcoming";
};

export type ProgressTrackerProps = {
  title?: string;
  steps: ProgressStep[];
};

export function ProgressTracker({ title, steps }: ProgressTrackerProps) {
  return (
    <Surface padding="none">
      {title ? (
        <div className="px-4 pb-2 pt-4">
          <h3 className="text-sm font-medium text-foreground">{title}</h3>
        </div>
      ) : null}
      <div className="space-y-6 px-4 pb-6 pt-2">
        <div className="relative ml-3 space-y-6 border-l-2 border-border">
          {steps.map((step) => (
            <div key={step.id} className="relative pl-6">
              <div className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-card">
                {step.state === "complete" ? (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                ) : null}
                {step.state === "current" ? (
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary/80" />
                ) : null}
              </div>
              <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
              {step.description ? (
                <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Surface>
  );
}

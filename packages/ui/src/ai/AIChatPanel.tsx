import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";
import { cn } from "../lib/utils";

export type ChatMessage = {
  id: string | number;
  role: "assistant" | "user";
  content: ReactNode;
};

export type AIChatPanelProps = {
  title: string;
  messages: ChatMessage[];
  footer?: ReactNode;
  className?: string;
};

export function AIChatPanel({ title, messages, footer, className }: AIChatPanelProps) {
  return (
    <Surface
      padding="none"
      className={cn("flex flex-col", className ?? "h-[400px]")}
    >
      <div className="flex items-center justify-between rounded-t-[inherit] border-b border-border bg-muted/40 p-4">
        <div className="text-sm font-medium text-foreground">{title}</div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "assistant"
                ? "flex max-w-[85%] gap-3"
                : "ml-auto flex max-w-[85%] justify-end gap-3"
            }
          >
            <div
              className={
                message.role === "assistant"
                  ? "rounded-2xl rounded-tl-sm border border-border bg-muted p-3 text-sm text-foreground"
                  : "rounded-2xl rounded-tr-sm bg-primary p-3 text-sm text-primary-foreground"
              }
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      {footer ? <div className="border-t border-border p-4">{footer}</div> : null}
    </Surface>
  );
}

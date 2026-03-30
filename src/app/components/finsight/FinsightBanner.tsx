import { AlertTriangle } from "lucide-react";

type ViewOption = "Default" | "AM" | "Member";

export function FinsightBanner({
  workingAs = "Simon Forbes",
  viewAs,
  onViewAsChange,
}: {
  workingAs?: string;
  viewAs?: ViewOption;
  onViewAsChange?: (v: ViewOption) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-900">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
        <span>
          Working as: <strong>{workingAs}</strong>
          {onViewAsChange && " — All changes will be made to this user's data."}
        </span>
      </div>
      {viewAs != null && onViewAsChange && (
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">View as:</span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
            {(["Default", "AM", "Member"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onViewAsChange(opt)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewAs === opt
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

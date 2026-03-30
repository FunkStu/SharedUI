import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import { PLATFORM_APPS, getCurrentApp } from "../../config/apps";
import { cn } from "../../utils/cn";

type AppSwitcherProps = {
  className?: string;
};

export function AppSwitcher({ className }: AppSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const current = getCurrentApp(location.pathname);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentIcon = current.icon;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-800 hover:bg-slate-50 min-w-[140px] justify-between"
      >
        <span className="flex items-center gap-2 truncate">
          <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded text-white", current.iconBg)}>
            <CurrentIcon className="h-3 w-3" />
          </span>
          <span className="truncate">{current.name}</span>
        </span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-slate-400 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border border-slate-200 bg-white py-1 shadow-lg z-50">
          {PLATFORM_APPS.map((app) => {
            const Icon = app.icon;
            const isCurrent = app.path === current.path;
            const content = (
              <>
                <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded text-white", app.iconBg)}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">{app.name}</span>
              </>
            );
            return app.path.startsWith("#") ? (
              <a
                key={app.name}
                href={app.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md mx-1 transition-colors",
                  isCurrent ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-50",
                )}
              >
                {content}
              </a>
            ) : (
              <Link
                key={app.name}
                to={app.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md mx-1 transition-colors",
                  isCurrent ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-50",
                )}
              >
                {content}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

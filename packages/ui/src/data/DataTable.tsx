import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => ReactNode;
};

export type DataTableProps<T extends { id: string | number }> = {
  columns: Column<T>[];
  rows: T[];
};

export function DataTable<T extends { id: string | number }>({
  columns,
  rows,
}: DataTableProps<T>) {
  return (
    <Surface className="overflow-x-auto">
      <table className="w-full text-left text-sm text-foreground">
        <thead className="border-b border-border bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className="px-6 py-3"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-border/60 bg-card transition-colors hover:bg-muted/40"
            >
              {columns.map((column) => (
                <td key={String(column.key)} className="px-6 py-4">
                  {column.render ? column.render(row) : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Surface>
  );
}

'use client';
import { useMemo } from 'react';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';
import { LuX } from 'react-icons/lu';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { Bookshelf } from '@prisma/client';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;
  let bookshelves = table.getColumn('bookshelves');
  const uniqueShelves = bookshelves?.getFacetedUniqueValues();
  const sortedShelves = useMemo(
    () => (uniqueShelves ? Array.from(uniqueShelves.keys()).sort() : []),
    [uniqueShelves]
  );
  const uniqueOptions: Set<string> = new Set();
  sortedShelves.slice(0, 5000).map((row) => {
    row.forEach((shelf: Bookshelf) => {
      uniqueOptions.add(JSON.stringify({ label: shelf.name, value: shelf.id }));
    });
  });
  let options = [];
  for (const option of uniqueOptions) {
    options.push(JSON.parse(option));
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter books..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {table.getColumn('bookshelves') && (
          <DataTableFacetedFilter
            column={table.getColumn('bookshelves')}
            title="Bookshelves"
            options={options}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <LuX className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}

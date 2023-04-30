import Book from './Book';
import DropdownWrapper from './DropdownWrapper';
import { BookProps } from '@/types';

export const BookWrapper = ({ data, displayGetMore }: BookProps) => {
  return (
    <>
      <Book data={data} displayGetMore={displayGetMore}>
        {/* @ts-expect-error Async Server Component */}
        <DropdownWrapper />
      </Book>
    </>
  );
};

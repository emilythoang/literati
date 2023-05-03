import Book from './Book';
import DropdownWrapper from './DropdownWrapper';
import { BookProps } from '@/types';

export const BookWrapper = ({ bookData, displayGetMore }: BookProps) => {
  return (
    <>
      <Book bookData={bookData} displayGetMore={displayGetMore}>
        {/* @ts-expect-error Async Server Component */}
        <DropdownWrapper bookData={bookData} />
      </Book>
    </>
  );
};

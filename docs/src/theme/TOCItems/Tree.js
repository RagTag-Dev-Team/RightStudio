import React from 'react';
// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li key={heading.id}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <div className='table-of-content-border'>
            <a
              href={`#${heading.id}`}
              className={linkClassName ?? undefined}
              // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
          </div>
          <TOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
          />
        </li>
      ))}
    </ul>
  );
}
// Memo only the tree root is enough
export default React.memo(TOCItemTree);

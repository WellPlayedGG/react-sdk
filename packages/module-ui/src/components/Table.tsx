import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ className = '', style, children, ...props }) => {
  const tableStyles: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'var(--wp-font-family, inherit)',
    ...style,
  };

  return (
    <table className={className} style={tableStyles} {...props}>
      {children}
    </table>
  );
};

const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = '', style, children, ...props }) => {
  return (
    <thead className={className} style={style} {...props}>
      {children}
    </thead>
  );
};

const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = '', style, children, ...props }) => {
  return (
    <tbody className={className} style={style} {...props}>
      {children}
    </tbody>
  );
};

const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className = '', style, children, ...props }) => {
  const rowStyles: React.CSSProperties = {
    borderBottom: '1px solid var(--wp-color-border, #e2e8f0)',
    ...style,
  };

  return (
    <tr className={className} style={rowStyles} {...props}>
      {children}
    </tr>
  );
};

const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement> & { header?: boolean }> = ({
  header = false,
  className = '',
  style,
  children,
  ...props
}) => {
  const cellStyles: React.CSSProperties = {
    padding: '12px 16px',
    textAlign: 'left',
    color: 'var(--wp-color-text, #1e293b)',
    fontSize: '14px',
    fontWeight: header ? 600 : 400,
    backgroundColor: header ? 'var(--wp-color-surface-variant, #f8fafc)' : 'transparent',
    ...style,
  };

  const Component = header ? 'th' : 'td';

  return (
    <Component className={className} style={cellStyles} {...props}>
      {children}
    </Component>
  );
};

export default Table;
export { Table, TableHead, TableBody, TableRow, TableCell };

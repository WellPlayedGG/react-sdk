import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, className = '', style, ...props }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const overlayStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalStyles: React.CSSProperties = {
    backgroundColor: 'var(--wp-color-surface, #ffffff)',
    borderRadius: 'var(--wp-radius, 8px)',
    boxShadow: 'var(--wp-shadow-lg, 0 10px 25px rgba(0, 0, 0, 0.2))',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    ...style,
  };

  return createPortal(
    <div style={overlayStyles} onClick={onClose}>
      <div className={className} style={modalStyles} onClick={(e) => e.stopPropagation()} {...props}>
        {children}
      </div>
    </div>,
    document.body
  );
};

const ModalHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', style, children, ...props }) => {
  const headerStyles: React.CSSProperties = {
    padding: '20px',
    borderBottom: '1px solid var(--wp-color-border, #e2e8f0)',
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--wp-color-text, #1e293b)',
    ...style,
  };

  return (
    <div className={className} style={headerStyles} {...props}>
      {children}
    </div>
  );
};

const ModalBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', style, children, ...props }) => {
  const bodyStyles: React.CSSProperties = {
    padding: '20px',
    ...style,
  };

  return (
    <div className={className} style={bodyStyles} {...props}>
      {children}
    </div>
  );
};

const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', style, children, ...props }) => {
  const footerStyles: React.CSSProperties = {
    padding: '16px 20px',
    borderTop: '1px solid var(--wp-color-border, #e2e8f0)',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    ...style,
  };

  return (
    <div className={className} style={footerStyles} {...props}>
      {children}
    </div>
  );
};

export default Modal;
export { Modal, ModalHeader, ModalBody, ModalFooter };

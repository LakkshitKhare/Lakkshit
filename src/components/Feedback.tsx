import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Check, Info, X } from 'lucide-react';

const FeedbackContext = createContext<(message: string, success?: boolean) => void>(() => undefined);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<{ message: string; success: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notify = useCallback((message: string, success = false) => {
    if (timer.current) clearTimeout(timer.current);
    setNotice({ message, success });
    timer.current = setTimeout(() => setNotice(null), 5000);
  }, []);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <FeedbackContext.Provider value={notify}>
      {children}
      <div className="notice-region" aria-live="polite" aria-atomic="true">
        {notice && (
          <div className="notice" role="status">
            {notice.success ? <Check size={17} aria-hidden="true" /> : <Info size={17} aria-hidden="true" />}
            <p>{notice.message}</p>
            <button aria-label="Dismiss notification" onClick={() => setNotice(null)}>
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </FeedbackContext.Provider>
  );
}

export const useFeedback = () => useContext(FeedbackContext);

interface PortfolioLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  linkName: string;
}

export function PortfolioLink({ href, linkName, children, onClick, ...props }: PortfolioLinkProps) {
  const notify = useFeedback();
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      {...props}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={(event) => {
        if (href === '#') {
          event.preventDefault();
          notify(`${linkName} URL hasn't been provided yet. You can reach me by email.`);
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
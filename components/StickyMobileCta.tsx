import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border-subtle bg-background/95 p-2.5 backdrop-blur-md lg:hidden">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border-subtle py-3 text-sm font-semibold text-foreground"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M4.5 3h2.6l1.2 3.6-1.7 1.3a10.5 10.5 0 0 0 4.5 4.5l1.3-1.7 3.6 1.2v2.6a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3 5.6 1.5 1.5 0 0 1 4.5 3Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        Call Now
      </a>
      <a
        href={whatsappLink("Hi, I want to know more about ECM/TCM tuning and rebuild services.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-bright to-red py-3 text-sm font-semibold text-white glow-red"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 2.5A7.5 7.5 0 0 0 3.4 14L2.5 17.5l3.6-.94A7.5 7.5 0 1 0 10 2.5Zm0 1.5a6 6 0 1 1-3.1 11.1l-.22-.13-2.13.55.56-2.06-.14-.23A6 6 0 0 1 10 4Zm-2.2 2.6c-.16 0-.4.06-.62.3-.2.24-.8.78-.8 1.9 0 1.1.82 2.18.93 2.33.12.16 1.62 2.6 4.02 3.5 2 .77 2.4.62 2.83.58.43-.04 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.13-.06-.1-.22-.16-.46-.28-.24-.12-1.4-.7-1.62-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.47-.4-.4-.54-.4Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

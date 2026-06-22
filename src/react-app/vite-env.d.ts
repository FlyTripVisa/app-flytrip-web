/// <reference types="vite/client" />

// আপনার কাস্টম টাইপ বা এনভায়রনমেন্ট ভেরিয়েবল থাকলে এখানে যোগ করবেন
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // আরও ভেরিয়েবল থাকলে এখানে যোগ করুন
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

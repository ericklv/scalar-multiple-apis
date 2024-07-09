export interface Props {
  children: React.ReactNode;
}

export interface HTMLInputElementX extends Omit<HTMLInputElement, "href"> {
  href: string;
}



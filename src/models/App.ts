export interface MenuOption {
  readonly Name: string;
  readonly Icon: string[];
  readonly To?: string;
  readonly Href?: string;
  readonly Target?: string;
}

export interface SocialNetwork {
  readonly Href: string;
  readonly Icon: string[];
  readonly Label: string;
}

export type Style = {
  [Key in string]: string;
};

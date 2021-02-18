export default interface MenuOption {
  readonly Name: string;
  readonly Icon: string[];
  readonly To?: string;
  readonly Href?: string;
  readonly Target?: string;
}

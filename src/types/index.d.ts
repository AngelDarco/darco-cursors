export declare interface CursorsProps {
  children: React.ReactElement | React.ReactElement[];
  type?: DefaultCursorTypesProps;
  customCursors?: CustomCursorsProps;
  className?: string;
  style?: React.CSSProperties;
}

export declare type DefaultCursorTypesProps =
  | "blue"
  | "yellow"
  | "red"
  | "purple"
  | "pink"
  | "orange"
  | "green"
  | "cyan";

export declare type CursorEventsProps = {
  container: HTMLDivElement;
};

export declare type CustomCursorsProps = Partial<{
  general: string;
  pointer: string;
  text: string;
}>;

declare const Cursors: (props: CursorsProps) => JSX.Element;

export default Cursors;

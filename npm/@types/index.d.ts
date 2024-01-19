export declare type CursorEventsProps = {
    container: HTMLDivElement;
};

declare const Cursors: (props: CursorsProps) => JSX.Element;
export { Cursors }
export default Cursors;

export declare interface CursorsProps {
    children: React.ReactElement | React.ReactElement[];
    type?: DefaultCursorTypesProps;
    customCursors?: CustomCursorsProps;
    className?: string;
    style?: React.CSSProperties;
}

export declare const CursorsStyles:CustomCursorsProps;

export declare type CustomCursorsProps = Partial<{
    general: string;
    pointer: string;
    text: string;
}>;

export declare type DefaultCursorTypesProps =
| "blue"
| "yellow"
| "red"
| "purple"
| "pink"
| "orange"
| "green"
| "cyan";

export { }


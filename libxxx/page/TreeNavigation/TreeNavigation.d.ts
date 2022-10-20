/// <reference types="react" />
export interface TreeNavigationProps {
    /** Prop comment */
    pageType?: 'pages' | 'assets' | 'gallery';
}
export declare const Spinner: () => JSX.Element;
/** Comment */
export declare const TreeNavigation: ({ pageType }: TreeNavigationProps) => JSX.Element;

import React from 'react';
import { default as cn } from 'classnames';

interface LoaderProps {
    classes?: string;
}

export function Loader({ classes }: LoaderProps): JSX.Element {
    const outerLoaderStyles = cn(
        'rounded-full border-purple-700 inline-block border-r-gray-200 animate-spin m-auto',
        classes,
        {
            'w-16 h-16 border-8': !classes
        }
    );

    return <div className={outerLoaderStyles} role="status"></div>;
}

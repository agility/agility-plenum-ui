import React, { FC } from 'react';
import { default as cn } from 'classnames';

export interface AvatarProps {
    /**
     * source url for the avatar
     */
    src?: string;
    /**
     * Initials f
     */
    initials?: string;
    /**
     * optional status
     */
    status?: 'offline' | 'online' | 'busy';
    /**
     * avatar picture size (also affects status indicator)
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * avatar img alt
     */
    alt?: string;
}

/**
 * Avatar component that shows profile image or name initials of the user
 */
export const Avatar: FC<AvatarProps> = ({
    src,
    status,
    size = 'md',
    alt = 'Avatar image',
    initials
}: AvatarProps) => {
    const imageStyles = cn('rounded-full', {
        'h-6 w-6': size === 'xxs',
        'h-8 w-8': size === 'xs',
        'h-10 w-10': size === 'sm',
        'h-12 w-12': size === 'md',
        'h-14 w-14': size === 'lg',
        'h-16 w-16': size === 'xl'
    });
    const initialsStyles = cn('inline-flex items-center justify-center rounded-full bg-gray-500', {
        'h-6 w-6': size === 'xxs',
        'h-8 w-8': size === 'xs',
        'h-10 w-10': size === 'sm',
        'h-12 w-12': size === 'md',
        'h-14 w-14': size === 'lg',
        'h-16 w-16': size === 'xl'
    });
    const defaultAvatarStyles = cn('inline-block rounded-full overflow-hidden bg-gray-100', {
        'h-6 w-6': size === 'xxs',
        'h-8 w-8': size === 'xs',
        'h-10 w-10': size === 'sm',
        'h-12 w-12': size === 'md',
        'h-14 w-14': size === 'lg',
        'h-16 w-16': size === 'xl'
    });
    const statusStyles = cn('absolute top-0 right-0 block rounded-full ring-2 ring-white', {
        'h-1.5 w-1.5': size === 'xxs',
        'h-2 w-2': size === 'xs',
        'h-2.5 w-2.5': size === 'sm',
        'h-3 w-3': size === 'md',
        'h-3.5 w-3.5': size === 'lg',
        'h-4 w-4': size === 'xl',
        'bg-gray-300': status === 'offline',
        'bg-red-400': status === 'busy',
        'bg-green-400': status === 'online'
    });
    return (
        <span className="inline-block relative">
            {src ? (
                <img className={imageStyles} src={src} alt={alt} />
            ) : initials ? (
                <span className={initialsStyles}>
                    <span className="text-xs font-medium leading-none text-white uppercase">{initials}</span>
                </span>
            ) : (
                <span className={defaultAvatarStyles}>
                    <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            )}
            {status && <span className={statusStyles}></span>}
        </span>
    );
};

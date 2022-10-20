import { FC } from 'react';
export interface AvatarProps {
    /**
     * source url for the avatar
     */
    src?: string;
    /**
     * Initials we use as fallback if no src is passed
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
export declare const Avatar: FC<AvatarProps>;

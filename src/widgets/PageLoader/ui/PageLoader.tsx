import { Loader } from "shared/ui/Loader";
import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={cn(styles.root, {}, [className])}>
            <Loader />
        </div>
    );
};

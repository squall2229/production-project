import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
    ({
        className,
        value,
        placeholder,
        type = "text",
        autofocus,
        onChange,
        ...otherProps
    }) => {
        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);
        const ref = useRef() as MutableRefObject<HTMLInputElement>;

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onSelect = (e: any) => {
            setCaretPosition(e.target.selectionStart || 0);
        };

        useEffect(() => {
            if (autofocus) {
                setIsFocused(true);
                ref.current?.focus();
            }
        }, [autofocus]);

        return (
            <div className={classNames(styles.root, {}, [className])}>
                {placeholder && (
                    <div
                        className={styles.placeholder}
                    >{`${placeholder}>`}</div>
                )}
                <div className={styles.caretWrapper}>
                    <input
                        ref={ref}
                        className={styles.input}
                        onChange={onChangeHandler}
                        value={value}
                        type={type}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        {...otherProps}
                    />
                    {isFocused && (
                        <span
                            style={{
                                left: `${caretPosition * 9}px`,
                            }}
                            className={styles.caret}
                        ></span>
                    )}
                </div>
            </div>
        );
    }
);

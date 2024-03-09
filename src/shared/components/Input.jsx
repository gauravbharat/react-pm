import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea, ...allOtherProps },
  ref
) {
  const innerRef = useRef();
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return innerRef.current.value;
      },
    };
  });

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={allOtherProps?.id}
      >
        {label}
      </label>

      {textarea ? (
        <textarea ref={innerRef} className={classes} {...allOtherProps} />
      ) : (
        <input ref={innerRef} className={classes} {...allOtherProps} />
      )}
    </p>
  );
});

export default Input;

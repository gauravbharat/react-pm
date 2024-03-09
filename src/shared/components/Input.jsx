import { useRef } from "react";

export default function Input({ label, textarea, ...allOtherProps }) {
  const ref = useRef();
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  // console.log("all others props", allOtherProps, "ref", ref);

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={ref.current?.id}
      >
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...allOtherProps} ref={ref} />
      ) : (
        <input className={classes} {...allOtherProps} ref={ref} />
      )}
    </p>
  );
}

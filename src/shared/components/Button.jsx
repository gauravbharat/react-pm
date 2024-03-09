export default function Button({ children, btnStyle = "base", ...otherProps }) {
  let classes = "px-6 py-2 rounded text-stone-800 hover:text-stone-950";

  switch (btnStyle) {
    case "outline":
      break;

    case "raised":
      classes =
        "px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950";
      break;

    case "raised-2":
      classes =
        "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
      break;

    default:
    // do nothing
  }

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}

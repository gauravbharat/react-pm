export default function Button({
  children,
  delBtn,
  btnStyle = "base",
  ...otherProps
}) {
  let classes = "px-6 py-2 rounded text-stone-800 hover:text-stone-500";

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

    case "menu-base":
      classes =
        "w-full text-left px-2- py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
      break;

    case "menu-base-selected":
      classes =
        "w-full text-left px-2- py-1 rounded-sm my-1 bg-stone-800 text-stone-200";
      break;

    default:
    // do nothing
  }

  if (delBtn) {
    if (btnStyle === "raised") {
      classes = "px-6 py-2 rounded bg-red-800 text-stone-50 hover:bg-red-500";
    } else {
      classes = "px-6 py-2 rounded text-stone-700 hover:text-red-500";
    }
  }

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}

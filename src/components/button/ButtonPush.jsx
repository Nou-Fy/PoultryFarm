/**
 * @param {string} type
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns
 */

export default function ButtonPush({
  type = "button" | "submit" | "reset",
  label ,
  onClick,
}) {
  return (
    <div>
      <button type={type} onClick={onClick}>{label}</button>
    </div>
  );
}

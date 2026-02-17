export function Textarea({ value }) {

  return (
    <div className="textarea-group">
      <textarea
        value={value}
        readOnly
      />
    </div>
  );
}
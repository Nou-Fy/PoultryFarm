/**
 * 
 * @param {string} label 
 * @param {string} type 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange  * 
 * @returns 
 */

export default function Input({ label, type, placeholder, value, onChange }) {


  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
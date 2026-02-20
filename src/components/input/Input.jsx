/**
 * @param {string} label 
 * @param {string} type 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {function} onChange 
 */

export default function Input({ label, type, placeholder, value, onChange }) { 
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} // C'est cette ligne qui manquait !
      />
    </div>
  )
}
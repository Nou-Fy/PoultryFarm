/**
 * 
 * @param {string} src
 * @param {string} alt 
 * @returns 
 */


export  function Imgzone({src, alt}) {
  return (
    <div className="imgzone">
        <img src={src} alt={alt} />   
    </div>
  );
}
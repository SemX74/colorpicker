import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorPicker = ({color,setIsBlack,setColor}) => {
    const handleColor = ({target}) =>{
        if(color!==null)
        {const r = parseInt(color.substr(1,2), 16)
        const g = parseInt(color.substr(3,2), 16)
        const b = parseInt(color.substr(5,2), 16)
        if (r < 90 || g < 90 || b < 90){setIsBlack(true)}
        else setIsBlack(false)}
        setColor(target.value.toUpperCase())
      }

    return (
    <div className='copy_wrapper'>
        {color!==null&&(
        <>
            <div className='btn'>
            <CopyToClipboard text={color}>
            <button onClick={() => alert("copied to clipboard!")} className='copy'>Copy HEX</button>
            </CopyToClipboard>
            </div>
        </>)}

        <label>
            <span>Pick color here⬇️</span>
            <input value={color} onChange={handleColor} type="color" />
        </label>  
    </div>);
}
 
export {ColorPicker};
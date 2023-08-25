import { useState } from "react"
import Proptype from 'prop-types'

function InputWithLabal({ text, setText }) { //解構props
  return (
    <>
      <div style={{ border: 'red 1px solid' }}>
        <label htmlFor="text">標題 {text}</label>
        <input type="text" id="text" value={text} onChange={(e) => {
          setText(e.target.value)
        }} />
      </div>
    </>
  )
}

InputWithLabal.propTypes = {
  text : Proptype.string,  //使用prop-types工具
  setText : Proptype.func
} //定義元件的Props型別

function ComponentProps() {

  // 對於InputWithLabal :const [這裡面是外]
  const [text, setText] = useState('卡斯伯')
  const [text2, setText2] = useState('洧杰')

  return (
    <>
      <div className="container">
        {/* Props：前內後外  內={外} */}
        <InputWithLabal text={text} setText={setText} />
        <InputWithLabal text={text2} setText={setText2} />
        外層的:{text},{text2}
      </div>
    </>
  )
}

export default ComponentProps;
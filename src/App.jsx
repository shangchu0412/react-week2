import { useEffect } from "react";
import { useState } from "react";
import Tr from "./Tr";

const initailData = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]

function App() {

  const [data, setData] = useState(initailData)
  const [newName, setNewName] = useState('')
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState(0)

  // useEffect : callbackFunction,[條件]
  useEffect(() => {
    //金額加總
    // reduce(前一值,當前值)
    setTotal(data.reduce((pre, curr) => pre + curr.price, 0))
  }, [data])

  return (
    <>
      <input type="text" value={newName} onChange={(e) => {
        setNewName(e.target.value)
      }} />
      <input type="number" value={price} onChange={(e) => {
        setPrice(Number(e.target.value))
      }} />
      <button type="button" onClick={() => {
        setData([
          ...data,
          {
            id: new Date().getTime(),
            name: newName,
            price
          }
        ])
        setNewName('')
        setPrice('')
      }}>新增</button>
      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (<Tr key={item.id} item={item} data={data} setData={setData}/>)
          })}
        </tbody>
      </table>
      總計：{total}
    </>
  )
}

export default App;
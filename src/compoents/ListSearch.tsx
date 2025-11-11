import { useState, type ChangeEvent, type FC } from "react"
import { Input } from "antd"

const { Search } = Input

const ListSearch: FC = () => {

    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSearch = () => {
        console.log(value)
    }

    return (
        <div>
            <Search style={{ width: '200px' }} placeholder="输入关键字" size="large" value={value} allowClear onChange={handleChange} onSearch={handleSearch} />
        </div>
    )
}

export default ListSearch

import React, { useEffect, useState } from 'react'
import ListContent from '../ListContent/ListContent';

const HeadInput = () => {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState("");
    const [list, setList] = useState([]);

    const onInput = (e) => {
        setQuery(e.target.value);
    }

    const addItem = () => {
        if (query.trim() !== "") {
            const newItem = { name: query, status: false };
            setItems([...items, newItem]);
            setQuery("");
        }
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (items.length !== 0) {
                setList(items);
            }
        }, 0);
        return () => clearTimeout(delayDebounce);
    }, [items]);

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <div>
                <input onChange={onInput} value={query} />
                <button onClick={addItem}>Add</button>
            </div>
            <ListContent
                list={list}
            />
        </div>
    )
}

export default HeadInput
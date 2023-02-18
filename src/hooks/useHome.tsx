import React, { useState } from 'react'
import { jsData } from '../data/todoArray'
import { List } from '../interfaces/dataList'

export const useHome = () => {

    const [localData, setLocalData] = useState(
        jsData.sort((a: any, b: any) => a.isCompleted - b.isCompleted)
    )
    const [showComplited, setShowComplited] = useState(false)
    const changeShowComplit = () => {
        return setShowComplited(!showComplited);
    }
    const validateShowTastComplit = (item: List) => {
        return showComplited ? !item.isToday && item.isCompleted : !item.isToday;
    }
    return {
        showComplited,
        localData,
        changeShowComplit,
        validateShowTastComplit,
        jsData,
    }
}


'use client';

import { useState } from "react"

interface LectureData {
    title: string,
    description: string,
    idx: number,
    id: string
}

export const LectureList = ({
    title,
    description,
    idx,
    id
}: LectureData) => {

    const getId = () => {
        alert(id);
        
    }

    const [Id, setId] = useState('')

    return (
        <div>
            <div className="flex gap-x-4">
            <p className="pt-1">
                {idx + 1}.
            </p>
            <p className="flex flex-col">
                <span className="font-semibold font-sans text-lg">
                    {title}
                </span>
                {description}
            </p>
            <p onClick={getId}>
                ok
            </p>
        </div>
        </div>
        
    )
}
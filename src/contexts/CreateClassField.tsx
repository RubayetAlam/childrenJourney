import { useEffect, useState } from 'react'

export default function CreateClassField({ Tclass }) {
    const [dates, setDates] = useState([])
    const [times, setTimes] = useState([])
    const [links, setLinks] = useState([])

    useEffect(() => {
        const initialDates = new Array(Tclass).fill('')
        const initialTimes = new Array(Tclass).fill('')
        const initialLinks = new Array(Tclass).fill('')

        setDates(initialDates)
        setTimes(initialTimes)
        setLinks(initialLinks)
    }, [Tclass])

    const handleInputChange = (e, index) => {
        const { value, name } = e.target
        if (name === 'date') {
            const newDates = [...dates]
            newDates[index] = value
            setDates(newDates)
        } else if (name === 'time') {
            const newTimes = [...times]
            newTimes[index] = value
            setTimes(newTimes)
        } else if (name === 'link') {
            const newLinks = [...links]
            newLinks[index] = value
            setLinks(newLinks)
        }
    }

    return (
        <div className="bg-blue-200 rounded-md p-4">
            <h1 className="font-bold pt-4 pb-4">Make Class Schedule</h1>
            {Array.from({ length: Tclass }).map((_, index) => (
                <div key={index}>
                    <div className="font-bold">⭐ Class Schedule {index + 1}</div>
                    <div className="mt-4">
                        <div className="flex flex-row gap-2">
                            <div className="mb-4 w-full">
                                <label htmlFor="date" className="text-gray-400 text-sm font-medium mb-2">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={dates[index]}
                                    onChange={(e) => handleInputChange(e, index)}
                                    className="border placeholder:text-gray-400 rounded w-full py-2 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="time" className="text-gray-400 text-sm font-medium mb-2">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={times[index]}
                                    onChange={(e) => handleInputChange(e, index)}
                                    className="border rounded w-full py-2 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="link" className="text-gray-400 text-sm font-medium mb-2">
                                    Link
                                </label>
                                <input
                                    type="text"
                                    name="link"
                                    value={links[index]}
                                    placeholder="htts://www.meet.google.com/xyz"
                                    onChange={(e) => handleInputChange(e, index)}
                                    className="border rounded w-full py-2 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

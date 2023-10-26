import { ChangeEvent, useState } from 'react'
import CreateClassField from '../../contexts/CreateClassField'

interface FormData {
    name: string
    course: string
    instructor: string
    category: string
    courseFee: string
    message: string
}

export default function Course() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        course: '',
        instructor: '',
        category: '',
        courseFee: '',
        message: ''
    })
    const [Tclass, setTClass] = useState<string>('')
    const classHandleChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setTClass(e.target.value)
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        // You can add your form submission logic here, such as making an API request.
        console.log('Form submitted with data:', formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-4 rounded-md bg-gray-50 mt-3">
                    {/* Row 1 */}
                    <div className="flex md:flex-col sm:flex-col lg:flex-row gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="category" className="text-gray-400 text-sm font-medium mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                placeholder="Select Category"
                                onChange={handleInputChange}
                                className="border placeholder:text-gray-400 rounded w-full py-2 px-3 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="course" className="text-gray-400 text-sm font-medium mb-2">
                                Course name
                            </label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                placeholder="Enter Course Name"
                                value={formData.course}
                                onChange={handleInputChange}
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="instructor" className="text-gray-400 text-sm font-medium mb-2">
                                Instructor name
                            </label>
                            <input
                                type="text"
                                id="instructor"
                                name="instructor"
                                value={formData.instructor}
                                placeholder="Enter Instructor Name"
                                onChange={handleInputChange}
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="courseFee" className="text-gray-400 text-sm font-medium mb-2">
                                Course fee
                            </label>
                            <input
                                type="text"
                                id="courseFee"
                                name="courseFee"
                                placeholder="Enter Course fee"
                                value={formData.courseFee}
                                onChange={handleInputChange}
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="Tclass" className="text-gray-400 text-sm font-medium mb-2">
                                Total Class
                            </label>
                            <input
                                type="text"
                                id="Tclass"
                                name="Tclass"
                                value={Tclass}
                                placeholder="Enter total Class"
                                onChange={classHandleChanger}
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="flex flex-row gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="message" className="text-gray-400 text-sm font-medium mb-2">
                                Blog Description
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
                                placeholder="Write course description"
                            ></textarea>
                        </div>
                    </div>
                    {Tclass ? <CreateClassField Tclass={Tclass} /> : ''}
                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

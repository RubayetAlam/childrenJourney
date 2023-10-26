import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import CreateClassField from '../../../contexts/CreateClassField'
interface FormData {
    name: string
    course: string
    instructor: string
    category: string
    courseFee: string
    message: string
    Tclass: string
}

export default function Course() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>()
    const [Tclass, setTClass] = useState<string>('')
    const classHandleChanger = (e) => {
        setTClass(e.target.value)
    }

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 rounded-md bg-gray-50 mt-3">
                    {/* Row 1 */}
                    <div className="flex md:flex-col sm:flex-col lg:flex-row gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="category" className="text-gray-400 text-sm font-medium mb-2">
                                Category
                            </label>
                            <input
                                {...register('category', { required: 'Please Enter Category' })}
                                placeholder="Select Category"
                                className="border placeholder:text-gray-400 rounded w-full py-2 px-3 focus:outline-none"
                            />
                            <p className=" text-red-500 text-xs">{errors.category?.message}</p>
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="course" className="text-gray-400 text-sm font-medium mb-2">
                                Course name
                            </label>
                            <input
                                {...register('course', { required: 'Please Enter Course' })}
                                placeholder="Enter Course Name"
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                            />
                            <p className=" text-red-500 text-xs">{errors.course?.message}</p>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="instructor" className="text-gray-400 text-sm font-medium mb-2">
                                Instructor name
                            </label>
                            <input
                                {...register('instructor', { required: 'Please Enter instructor' })}
                                placeholder="Enter Instructor Name"
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                            />
                            <p className=" text-red-500 text-xs">{errors.instructor?.message}</p>
                        </div>

                        <div className="mb-4 w-full">
                            <label htmlFor="courseFee" className="text-gray-400 text-sm font-medium mb-2">
                                Course fee
                            </label>
                            <input
                                {...register('courseFee', { required: 'Please Enter Course' })}
                                placeholder="Enter Course fee"
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                            />
                            <p className=" text-red-500 text-xs">{errors.courseFee?.message}</p>
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                        <div className="mb-4 w-full">
                            <label htmlFor="Tclass" className="text-gray-400 text-sm font-medium mb-2">
                                Total Class
                            </label>
                            <input
                                {...register('Tclass', { required: 'Please Enter Course' })}
                                onChange={classHandleChanger}
                                placeholder="Enter total Class"
                                className="border rounded w-full py-2 px-3 focus:outline-none"
                            />
                            <p className=" text-red-500 text-xs">{errors.Tclass?.message}</p>
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
                        {/* <p>{errors.Imessage?.message}</p> */}
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

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment'

export default function Table({title, tableHeader, films, headers}) {
    const navigate = useNavigate();

    const handleNavigateToSingle = (id, url) =>{
        if(title === 'Films') navigate(`/overview/${id}`)
        if(title === 'People') navigate(`/people/${id}`)
        if(title === 'Starships') navigate(`/starships/${url.split("/")[5]}`)
        if(title === 'Species') navigate(`/species/${id}`)
    } 
    return (
        <React.Fragment>
            <h2 className=' text-coolgray text-md mb-[31px] '>{title}</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-antiFlashWhite">
                <table className="w-full text-sm text-left text-gray-500 bg-white">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {tableHeader.map((table, index) => (
                                <React.Fragment key={index}>
                                    {index === 0 ? (
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                <label className="sr-only">{table}</label>
                                            </div>
                                        </th>
                                    ):(
                                        <th scope="col" className="px-2 capitalize text-coolgray text-md font-normal mx-2 whitespace-nowrap">
                                            {table}
                                        </th>
                                    )}

                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>
                    <tbody> 
                        {films.map((film, index) => (
                            <tr onClick={() => handleNavigateToSingle(index + 1, film.url)} className="bg-white hover:bg-antiFlashWhite border-b cursor-pointer border-platinum dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                {headers.map((header) => (
                                    <td className="px-2 py-4 whitespace-nowrap" key={header}>
                                        {
                                            header === 'created' ? (<Moment format="M/D/YY">{film[header]}</Moment>) :
                                            header === 'average_height' ? (<React.Fragment>{film[header]} CM</React.Fragment>) :
                                            (<React.Fragment>{film[header]}</React.Fragment>)
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>

    )
}
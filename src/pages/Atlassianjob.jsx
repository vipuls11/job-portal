import React from 'react'
import './Atlassianjob.css'

const Atlassianjob = () => {
    const data = [
        {
            id: 1,
            name: "Company size",
            details: "1k - 2k Employees"
        },
        {
            id: 2,
            name: "Type",
            details: "Private"
        },
        {
            id: 3,
            name: "Sector",
            details: "Information Technology, Infrastructure"
        },
        {
            id: 4,
            name: "Funding",
            details: "Bootstrapped"
        },
        {
            id: 5,
            name: "Founded In",
            details: "2019"
        },
        {
            id: 6,
            name: "Founded By",
            details: "<a href='https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw' target='_blank'>Scott Farquar</a> , <a href='https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA' target='_blank'>Mike Cannon-Brookes</a>"
        },
    ]
    return (
        <div>
            <div className='Atlassian'>
                <img src="/image/Rectangle 43.png" alt="Atlassian" />
                <p>Atlassian</p>
            </div>
            <div className='Atlassian_items'>
                {data.map((items, index) => {
                    return (
                        <div key={items.id} className="Atlassian_card">
                            <p className='Atlassian_name'>{items.name}</p>
                            <p className='Atlassian_details'>{items.name !== "Founded By" ? items.details : <span dangerouslySetInnerHTML={{ __html: items.details }} />}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Atlassianjob
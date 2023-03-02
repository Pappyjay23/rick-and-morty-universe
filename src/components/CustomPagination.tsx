import { Pagination } from '@mui/material'
import React from 'react'

interface Props {
    numOfPages: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const CustomPagination = ({ setPage, numOfPages }: Props) => {
    const handlePageChange = (page: number) => {
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className="flex justify-center py-4">
            <Pagination
                sx={{
                    color: 'white',
                }}
                count={numOfPages ? numOfPages : 10}
                color="primary"
                onChange={(e) => {
                    const input = e.target as HTMLElement
                    const pageNo = input.innerText
                    handlePageChange(parseInt(pageNo))
                }}
                hideNextButton
                hidePrevButton
            />
        </div>
    )
}

export default CustomPagination

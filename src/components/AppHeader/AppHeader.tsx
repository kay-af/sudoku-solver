import React from 'react'
import { AppHeaderProps } from './AppHeaderProps'
import './AppHeader.css'

function AppHeader(props: AppHeaderProps) {
    return (
        <div className="AppHeader">
            Sudoku Solver
        </div>
    )
}

export default AppHeader
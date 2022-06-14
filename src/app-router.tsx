import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppHome from './components/AppHome/AppHome'

function AppRouter() {
    return (
        <Switch>
            <Route path="/:size" render={(props) => {
                let boardSize = -1
                switch(props.match.params.size) {
                    case '9x9':
                        boardSize = 9
                        break
                    default:
                        break
                }

                if (boardSize === -1) return (<Redirect to="/9x9"></Redirect>)
                return (<AppHome boardSize={boardSize}></AppHome>)
            }}>
            </Route>
            <Route>
                <Redirect to="/9x9"></Redirect>
            </Route>
        </Switch>
    )
}

export default AppRouter

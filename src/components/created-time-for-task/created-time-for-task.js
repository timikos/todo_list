import React from 'react';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import './created-time-for-task.css'

export default class CreatedTimeForTask extends React.Component {
    constructor() {
        super();
        this.currentDate = new Date();
        this.createDate = new Date();
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        timeCreated : formatDistanceToNow(new Date())
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick()
            },
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            timeCreated: formatDistanceToNow(this.createDate, this.currentDate)
        })
    }

    render () {
        return (
            <span className="created">{this.state.timeCreated}</span>
        )
    }
}
import React from 'react';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import './created-time-for-task.css'

export default class CreatedTimeForTask extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    currentDate = new Date();
    createDate = new Date();

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
            <span className="created-time">{this.state.timeCreated}</span>
        )
    }
}
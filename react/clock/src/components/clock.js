import React, { useEffect, useState } from "react";
import "./clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), status: true };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.start();
        this.stop();
    }

    start() {
        this.tick();
        this.timerID = setInterval(() => this.tick(), 1000);
        this.setState({
            status: true,
        });
    }

    tick() {
        this.setState({ date: new Date() });
    }

    stop() {
        clearInterval(this.timerID);
        this.setState({
            status: false,
        });
    }

    toggleTimer() {
        if (this.state.status) {
            this.stop();
        } else {
            this.start();
        }
    }

    render() {
        return (
            <div className="clock-container" onClick={this.toggleTimer}>
                <h2 className="clock-time">
                    {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}

export default Clock;

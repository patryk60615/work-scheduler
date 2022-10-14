import React, {Component} from 'react'
import Days from './days'
import {ReactComponent as ArrowLeft} from '../icons/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../icons/arrow-right.svg'
import './calendar-days.css'

export default class Calendar extends Component {
    constructor() {
        super();
        this.date = {current: new Date()}
        this.weekDay = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', "Nie"]
    }


    changeMonth() {
        let changeMonth = this.date.current.toLocaleString('default', { month: 'long' })
        let changeMonthToUpperCase = changeMonth.charAt(0).toUpperCase() + changeMonth.slice(1)
        return changeMonthToUpperCase
    }
    previousMonth = () => {
        this.setState({current: new Date(this.date.current.setMonth(this.date.current.getMonth() - 1))})
        this.setState({month: this.date.current.toLocaleString('default', { month: 'long' })})
        console.log(this.month)
    }

    nextMonth = () => {
        this.setState({current: new Date(this.date.current.setMonth(this.date.current.getMonth() + 1))})
        console.log(this.date.current.getMonth())
    }
    

    render() {
        return (
            <div className="calendar-body">
                <div className="calendar-header">
                    <div className="calendar-month-switch">
                        <div className="arrow-left" onClick={this.previousMonth}>
                            <ArrowLeft className='arrow'/>
                        </div>
                        <div className="calendar-header-date">
                        <p>{this.changeMonth()}</p>
                        <p>{this.date.current.getFullYear()}</p>
                        </div>
                        <div className="arrow-right" onClick={this.nextMonth}>
                            <ArrowRight className='arrow'/>
                        </div>
                    </div>
                </div>
                <div className='week-days'>{this.weekDay.map(day => {
                    return (
                        <div className="week-day">
                            {day}
                        </div>
                    )
                })}</div>
                <Days date = {this.date.current}/>
            </div>
        )
    }
}
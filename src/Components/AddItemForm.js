import React, { Component } from 'react'

class componentName extends Component {
    render() {
        return (
            <form action="">
                <label for="qty">Qty:</label><input name="qty" type="number" /><br />
                <label for="time">Time:</label><input type="text" /><br /> <a href="#">get time</a>
                <label for="type">Type</label>
                <select name="type" id="type">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </form>
        )
    }
}

export default componentName
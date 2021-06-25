import { useState, useEffect } from "react"

export default function Clock() {
    const [intervalRef, setIntervalRef] = useState(null)

    const stopTick = () => {
        clearInterval(intervalRef)
    }

    var sHand
    var mHand
    var hHand

    var seconds = 0
    var minutes = 0
    var hours = 0

    function secondRotation(seconds) {
    return (seconds / 60) * 360
    }

    function minuteRotation(minutes, seconds) {
    var wholeMinutes = (minutes / 60) * 360
    var subMinutes = (seconds / 3600) * 360
    return wholeMinutes + subMinutes
    }

    function hourRotation(hours, minutes) {
    var wholeHours = (hours / 12) * 360
    var subHours = (minutes / 720) * 360
    return wholeHours + subHours
    }

    function tick() {
    seconds++
    if (seconds === 60) {
        minutes++
        seconds = 0
    }
    if (minutes === 60) {
        hours++
        minutes = 0
    }
    if (hours === 12) {
        hours = 0
    }

    sHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)"
    mHand.style.transform = "rotate(" + minuteRotation(minutes, seconds) + "deg)"
    hHand.style.transform = "rotate(" + hourRotation(hours, minutes) + "deg)"
    }

    useEffect(() => {
        var now = new Date()

        minutes = now.getMinutes()
        seconds = now.getSeconds()
        hours = now.getHours() >= 12 ? now.getHours() - 12 : now.getHours()

        sHand = document.getElementById("second")
        mHand = document.getElementById("minute")
        hHand = document.getElementById("hour")
      
        var newInterval = setInterval(tick, 1000)
        setIntervalRef(newInterval)
        return stopTick

    }, [])


    return (
    <div id="clock">
        <img id="face" src="img/clockface.png"/>
        <img id="second" src="img/second-hand.png"/>
        <img id="minute" src="img/minute-hand.png"/>
        <img id="hour" src="img/hour-hand.png"/>
    </div>
    )
}